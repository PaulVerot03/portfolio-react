export type Lang = "en" | "fr";

export type LocalizedText = {
  en: string;
  fr: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
};

export type ProjectVideo = {
  title: string;
  src: string;
};

export type ProjectLink = {
  label: LocalizedText;
  url: string;
  // Overrides the default "show the raw url" subtitle line when a link
  // should display descriptive text instead (e.g. "Dashboard hosted on my server").
  subtitle?: LocalizedText;
};

export type ProjectSection =
  | "igem"
  | "university-L3"
  | "university-M1"
  | "personal";

export type ProjectItem = {
  id: string;
  section: ProjectSection;
  title: LocalizedText;
  paragraphs: LocalizedText[];
  images?: ProjectImage[];
  video?: ProjectVideo;
  links?: ProjectLink[];
  technologies?: string;
};

export type ProjectsData = {
  items: ProjectItem[];
};

export function pick(text: LocalizedText, lang: Lang): string {
  return text[lang] || text.en;
}
