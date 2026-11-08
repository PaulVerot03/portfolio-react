import type { ProjectItem, ProjectSection } from "../../app/data/projects.types";
import type { BlogPost } from "../../app/data/blog.types";

export function slugify(value: string): string {
  const slug = value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug || "project";
}

export function moveArrayItem<T>(arr: T[], index: number, direction: -1 | 1): T[] {
  const target = index + direction;
  if (target < 0 || target >= arr.length) return arr;
  const next = [...arr];
  [next[index], next[target]] = [next[target], next[index]];
  return next;
}

// Reorders an item relative to its neighbors within the same section only,
// since display order = array order, grouped by section.
export function moveWithinSection(
  items: ProjectItem[],
  id: string,
  direction: -1 | 1,
): ProjectItem[] {
  const item = items.find((i) => i.id === id);
  if (!item) return items;

  const sectionIndices = items
    .map((i, idx) => (i.section === item.section ? idx : -1))
    .filter((idx) => idx !== -1);

  const fullIndex = items.indexOf(item);
  const posInSection = sectionIndices.indexOf(fullIndex);
  const swapPos = posInSection + direction;
  if (swapPos < 0 || swapPos >= sectionIndices.length) return items;

  const a = sectionIndices[posInSection];
  const b = sectionIndices[swapPos];
  const next = [...items];
  [next[a], next[b]] = [next[b], next[a]];
  return next;
}

export function newProject(section: ProjectSection): ProjectItem {
  return {
    id: slugify(`new-project-${Date.now()}`),
    section,
    title: { en: "", fr: "" },
    paragraphs: [{ en: "", fr: "" }],
  };
}

export const SECTION_LABELS: Record<ProjectSection, string> = {
  igem: "iGEM",
  "university-L3": "University — L3",
  "university-M1": "University — M1",
  personal: "Personal",
};

export function newBlogPost(): BlogPost {
  return {
    id: slugify(`new-post-${Date.now()}`),
    title: { en: "", fr: "" },
    date: new Date().toISOString().slice(0, 10),
    body: [{ en: "", fr: "" }],
  };
}
