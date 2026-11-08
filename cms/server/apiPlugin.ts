import fs from "node:fs";
import path from "node:path";
import type { IncomingMessage, ServerResponse } from "node:http";
import type { Plugin } from "vite";
import prettier from "prettier";

type ApiPluginOptions = {
  repoRoot: string;
};

function readBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf-8")));
    req.on("error", reject);
  });
}

function sendJson(res: ServerResponse, status: number, data: unknown) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
}

// Strips anything but alphanumerics/dot/dash/underscore, and refuses a
// result that is empty or made only of dots (e.g. "..") to avoid escaping
// the target directory via path.join.
function sanitizeSegment(value: string): string {
  const cleaned = value.replace(/[^a-zA-Z0-9._-]/g, "-");
  return cleaned === "" || /^\.+$/.test(cleaned) ? "file" : cleaned;
}

// GET returns the whole file as JSON; PUT validates the shape and writes
// the whole file back (prettier-formatted, same convention as
// scripts/build-i18n.ts) — never partial/per-item, keeps the server trivial.
// A bad PUT body is rejected before touching the file.
function registerJsonFileRoute(
  routes: Map<string, (req: IncomingMessage, res: ServerResponse) => void>,
  pathname: string,
  filePath: string,
  validate: (parsed: any) => boolean,
) {
  routes.set(`GET ${pathname}`, (req, res) => {
    try {
      const raw = fs.readFileSync(filePath, "utf-8");
      sendJson(res, 200, JSON.parse(raw));
    } catch (err) {
      sendJson(res, 500, { error: String(err) });
    }
  });

  routes.set(`PUT ${pathname}`, async (req, res) => {
    try {
      const body = await readBody(req);
      const parsed = JSON.parse(body);
      if (!validate(parsed)) {
        sendJson(res, 400, { error: "Unexpected request body shape" });
        return;
      }
      const formatted = await prettier.format(JSON.stringify(parsed), {
        parser: "json",
      });
      fs.writeFileSync(filePath, formatted);
      sendJson(res, 200, { ok: true });
    } catch (err) {
      sendJson(res, 400, { error: String(err) });
    }
  });
}

const hasItemsArray = (parsed: any) => !!parsed && Array.isArray(parsed.items);

export function apiPlugin({ repoRoot }: ApiPluginOptions): Plugin {
  const publicDir = path.join(repoRoot, "public");
  const routes = new Map<
    string,
    (req: IncomingMessage, res: ServerResponse) => void | Promise<void>
  >();

  registerJsonFileRoute(
    routes,
    "/api/projects",
    path.join(repoRoot, "app/data/projects.json"),
    hasItemsArray,
  );
  registerJsonFileRoute(
    routes,
    "/api/blog",
    path.join(repoRoot, "app/data/blog.json"),
    hasItemsArray,
  );
  registerJsonFileRoute(
    routes,
    "/api/nav",
    path.join(repoRoot, "app/data/nav.json"),
    hasItemsArray,
  );

  routes.set("POST /api/upload", async (req, res) => {
    try {
      const body = await readBody(req);
      const { collection, slug, filename, dataUrl } = JSON.parse(body);
      if (!collection || !slug || !filename || typeof dataUrl !== "string") {
        sendJson(res, 400, {
          error: "Expected { collection, slug, filename, dataUrl }",
        });
        return;
      }
      const match = /^data:([^;]+);base64,(.+)$/.exec(dataUrl);
      if (!match) {
        sendJson(res, 400, { error: "dataUrl must be a base64 data URL" });
        return;
      }
      const buffer = Buffer.from(match[2], "base64");
      const safeCollection = sanitizeSegment(collection);
      const safeSlug = sanitizeSegment(slug);
      const safeFilename = sanitizeSegment(filename);
      const dir = path.join(publicDir, safeCollection, safeSlug);
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, safeFilename), buffer);
      sendJson(res, 200, {
        path: `/${safeCollection}/${safeSlug}/${safeFilename}`,
      });
    } catch (err) {
      sendJson(res, 400, { error: String(err) });
    }
  });

  return {
    name: "portfolio-cms-api",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url || !req.method) return next();
        const { pathname } = new URL(req.url, "http://localhost");
        const handler = routes.get(`${req.method} ${pathname}`);
        if (!handler) return next();
        await handler(req, res);
      });
    },
  };
}
