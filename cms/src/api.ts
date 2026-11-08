import type { ProjectItem, ProjectsData } from "../../app/data/projects.types";
import type { BlogPost, BlogData } from "../../app/data/blog.types";

export type NavItem = { label: string; href: string };
type NavData = { items: NavItem[] };

async function fetchJson<T>(url: string, errorMessage: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(errorMessage);
  return res.json();
}

async function putJson(
  url: string,
  body: unknown,
  errorMessage: string,
): Promise<void> {
  const res = await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}) as { error?: string });
    throw new Error(data.error || errorMessage);
  }
}

export async function fetchProjects(): Promise<ProjectItem[]> {
  const data = await fetchJson<ProjectsData>(
    "/api/projects",
    "Failed to load projects.json",
  );
  return data.items;
}

export async function saveProjects(items: ProjectItem[]): Promise<void> {
  await putJson("/api/projects", { items }, "Failed to save projects.json");
}

export async function fetchBlog(): Promise<BlogPost[]> {
  const data = await fetchJson<BlogData>(
    "/api/blog",
    "Failed to load blog.json",
  );
  return data.items;
}

export async function saveBlog(items: BlogPost[]): Promise<void> {
  await putJson("/api/blog", { items }, "Failed to save blog.json");
}

export async function fetchNav(): Promise<NavItem[]> {
  const data = await fetchJson<NavData>("/api/nav", "Failed to load nav.json");
  return data.items;
}

export async function saveNav(items: NavItem[]): Promise<void> {
  await putJson("/api/nav", { items }, "Failed to save nav.json");
}

export async function uploadImage(
  collection: string,
  slug: string,
  file: File,
): Promise<string> {
  const dataUrl = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });

  const res = await fetch("/api/upload", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ collection, slug, filename: file.name, dataUrl }),
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}) as { error?: string });
    throw new Error(data.error || "Failed to upload image");
  }
  const data: { path: string } = await res.json();
  return data.path;
}
