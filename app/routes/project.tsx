import type { Route } from "./+types/project";
import { useTranslation } from "react-i18next";
import { ThemeToggle } from "../components/ThemeToggle";
import PillNav from "../components/PillNav";
import { ClientOnly } from "../components/ClientOnly";
import { ProjectCard } from "../components/ProjectCard";
import type { Lang, ProjectItem } from "../data/projects.types";
import projectsData from "../data/projects.json";
import navData from "../data/nav.json";

const items = (projectsData as { items: ProjectItem[] }).items;

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Projects - Paul's Portfolio" },
    { name: "description", content: "My projects and work" },
  ];
}

export default function Project() {
  const { t, i18n } = useTranslation();
  const lang: Lang = i18n.language === "fr" ? "fr" : "en";

  const changeLanguage = () => {
    i18n.changeLanguage(lang === "en" ? "fr" : "en");
  };

  const navItems = navData.items;

  const igemItems = items.filter((i) => i.section === "igem");
  const uniL3Items = items.filter((i) => i.section === "university-L3");
  const uniM1Items = items.filter((i) => i.section === "university-M1");
  const personalItems = items.filter((i) => i.section === "personal");

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <ClientOnly>
        <PillNav
          logo="/favicon.ico"
          logoAlt="Logo"
          items={navItems}
          activeHref="/project"
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
          {t("projects.title")}
        </h1>
        <p className="text-lg text-center mb-12 dark:text-white">
          {t("projects.intro")}
        </p>

        {/* IGEM Projects */}
        <section className="mb-12">
          {igemItems.map((item) => (
            <ProjectCard key={item.id} item={item} lang={lang} variant="igem" />
          ))}
        </section>

        {/* University Projects */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-purple-600 mb-4 text-center">
            {t("projects.uni.title")}
          </h2>
          <p className="mb-6 dark:text-white">{t("projects.uni.intro")}</p>

          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-purple-500 dark:text-white text-center">
              {t("projects.uni.L3.title")}
            </h3>
            {uniL3Items.map((item) => (
              <ProjectCard
                key={item.id}
                item={item}
                lang={lang}
                variant="university"
              />
            ))}
          </div>

          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-purple-500 dark:text-white text-center">
              {t("projects.uni.M1.title")}
            </h3>
            {uniM1Items.map((item) => (
              <ProjectCard
                key={item.id}
                item={item}
                lang={lang}
                variant="university"
              />
            ))}
          </div>
        </section>

        {/* Personal Projects */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-purple-600 mb-4 text-center">
            {t("projects.personal.title")}
          </h2>
          {personalItems.map((item) => (
            <ProjectCard
              key={item.id}
              item={item}
              lang={lang}
              variant="personal"
            />
          ))}
        </section>
      </div>
    </div>
  );
}
