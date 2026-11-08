import type { Route } from "./+types/blog";
import { useTranslation } from "react-i18next";
import { ThemeToggle } from "../components/ThemeToggle";
import PillNav from "../components/PillNav";
import { ClientOnly } from "../components/ClientOnly";
import { BlogPostCard } from "../components/BlogPostCard";
import type { BlogPost } from "../data/blog.types";
import type { Lang } from "../data/projects.types";
import blogData from "../data/blog.json";
import navData from "../data/nav.json";

const items = (blogData as { items: BlogPost[] }).items;

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blog - Paul's Portfolio" },
    { name: "description", content: "Notes and write-ups" },
  ];
}

export default function Blog() {
  const { t, i18n } = useTranslation();
  const lang: Lang = i18n.language === "fr" ? "fr" : "en";

  const changeLanguage = () => {
    i18n.changeLanguage(lang === "en" ? "fr" : "en");
  };

  const navItems = navData.items;

  const posts = [...items].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <ClientOnly>
        <PillNav
          logo="/favicon.ico"
          logoAlt="Logo"
          items={navItems}
          activeHref="/blog"
          baseColor="#ffffff17"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
        />
      </ClientOnly>
      <div className="fixed top-4 right-16 md:right-4 flex items-center gap-2 md:gap-4 z-[1001]">
        <button
          onClick={changeLanguage}
          aria-label={
            lang === "en" ? "Passer en français" : "Switch to English"
          }
          className="px-3 py-2 text-gray-900 dark:text-white rounded"
        >
          {lang === "en" ? "🇫🇷" : "🇬🇧"}
        </button>
        <ThemeToggle />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 pt-24 pb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple-600 mb-8 text-center">
          {t("blog.title")}
        </h1>
        <p className="text-lg text-center mb-12 dark:text-white">
          {t("blog.intro")}
        </p>

        {posts.length === 0 ? (
          <p className="text-center dark:text-gray-400">
            Nothing posted yet — check back soon.
          </p>
        ) : (
          posts.map((post) => (
            <BlogPostCard key={post.id} post={post} lang={lang} />
          ))
        )}
      </div>
    </div>
  );
}
