import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { apiPlugin } from "./server/apiPlugin";

const cmsDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(cmsDir, "..");

export default defineConfig({
  root: cmsDir,
  publicDir: false,
  // Isolated from the main app's dev server cache (which has no own
  // package.json, so it would otherwise resolve to the same
  // node_modules/.vite directory as the main `npm run dev` server).
  cacheDir: path.resolve(cmsDir, ".vite-cache"),
  plugins: [react(), apiPlugin({ repoRoot })],
  server: {
    port: 5174,
    strictPort: true,
    fs: {
      allow: [repoRoot],
    },
  },
});
