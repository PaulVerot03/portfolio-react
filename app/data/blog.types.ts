import type { LocalizedText, ProjectImage } from "./projects.types";

export type { LocalizedText, ProjectImage };
export { pick } from "./projects.types";

export type BlogPost = {
  id: string;
  title: LocalizedText;
  date: string; // "YYYY-MM-DD"
  body: LocalizedText[];
  images?: ProjectImage[];
};

export type BlogData = {
  items: BlogPost[];
};
