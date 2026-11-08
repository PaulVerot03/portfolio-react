import { TechBadges } from "./TechBadges";
import { pick, type Lang, type ProjectItem } from "../data/projects.types";

type Variant = "igem" | "university" | "personal";

const titleTag: Record<Variant, "h2" | "h3" | "h4"> = {
  igem: "h2",
  university: "h4",
  personal: "h3",
};

const titleClasses: Record<Variant, string> = {
  igem: "text-2xl sm:text-3xl font-bold text-purple-600 mb-4 text-center",
  university: "text-lg sm:text-xl font-semibold dark:text-white mb-2",
  personal:
    "text-xl sm:text-2xl font-semibold mb-3 dark:text-white text-center",
};

const paragraphClasses: Record<Variant, string> = {
  igem: "mb-2 dark:text-white",
  university: "dark:text-gray-400 mb-2",
  personal: "mb-2 dark:text-white",
};

export function ProjectCard({
  item,
  lang,
  variant = "university",
}: {
  item: ProjectItem;
  lang: Lang;
  variant?: Variant;
}) {
  const TitleTag = titleTag[variant];

  return (
    <div className="mb-6 pl-3 sm:pl-4 border-l-4 border-purple-500">
      <TitleTag className={titleClasses[variant]}>
        {pick(item.title, lang)}
      </TitleTag>

      {item.paragraphs.map((paragraph, index) => (
        <p key={index} className={paragraphClasses[variant]}>
          {pick(paragraph, lang)}
        </p>
      ))}

      {item.images?.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className="mb-4 rounded-lg mx-auto w-full max-w-[700px] h-auto"
          loading="lazy"
          decoding="async"
        />
      ))}

      {item.video && (
        <div className="w-full max-w-[560px] mx-auto aspect-video my-4">
          <iframe
            title={item.video.title}
            src={item.video.src}
            allow="fullscreen"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            className="w-full h-full rounded-lg border-0"
          ></iframe>
        </div>
      )}

      {item.links?.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 sm:px-6 py-3.5 bg-purple-700 hover:bg-purple-600 text-white rounded-lg shadow-md hover:shadow-purple-500/20 hover:-translate-y-0.5 transition-all duration-200 font-semibold group mb-2"
        >
          <div className="flex min-w-0 flex-col text-left">
            <span className="text-base leading-tight">
              {pick(link.label, lang)}
            </span>
            <span className="block break-all text-xs text-purple-200 font-normal">
              {link.subtitle ? pick(link.subtitle, lang) : link.url}
            </span>
          </div>
        </a>
      ))}

      <TechBadges techString={item.technologies} />
    </div>
  );
}
