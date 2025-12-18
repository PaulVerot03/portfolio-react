import type { Route } from "./+types/project";
import { useTranslation } from "react-i18next";
import { ThemeToggle } from "../components/ThemeToggle";
import PillNav from "../components/PillNav";
import { ClientOnly } from "../components/ClientOnly";
import * as SiIcons from 'react-icons/si';
import * as FaIcons from 'react-icons/fa';
import * as DiIcons from 'react-icons/di';

// Helper function to dynamically get icon by name
const getIconByName = (iconName: string) => {
  if (!iconName) return null;

  // Try different icon libraries
  const allIcons = { ...SiIcons, ...FaIcons, ...DiIcons };
  const IconComponent = allIcons[iconName as keyof typeof allIcons];

  return IconComponent ? <IconComponent /> : null;
};

// Component to render technology badges from comma-separated icon names
const TechBadges = ({ techString }: { techString: string }) => {
  if (!techString) return null;

  const techs = techString.split(',').map(t => t.trim());

  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {techs.map((iconName, index) => {
        const icon = getIconByName(iconName);
        // Extract display name from icon name (e.g., "SiPython" -> "Python")
        const displayName = iconName.replace(/^(Si|Fa|Di)/, '');

        return icon ? (
          <span
            key={index}
            className="inline-flex items-center gap-1 px-2 py-1 bg-purple-600  text-fuchsia-100  rounded text-sm"
            title={displayName}
          >
            <span className="text-lg">{icon}</span>
            <span>{displayName}</span>
          </span>
        ) : null;
      })}
    </div>
  );
};

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Projects - Paul's Portfolio" },
    { name: "description", content: "My projects and work" },
  ];
}

export default function Project() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "fr" : "en";
    i18n.changeLanguage(newLanguage);
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/project" },
  ];

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <ClientOnly>
        <PillNav
          logo="/favicon.ico"
          logoAlt="Logo"
          items={navItems}
          activeHref="/project"
          baseColor="#ffffff17"
          pillColor="#8e7ce044"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
        />
      </ClientOnly>
      <div className="fixed top-4 right-4 flex items-center space-x-4 z-40">
        <button
          onClick={changeLanguage}
          className="p-2 text-gray-900 dark:text-white rounded"
        >
          {currentLanguage === "en" ? "🇫🇷" : "🇬🇧"}
        </button>
        <ThemeToggle />
      </div>

      <div className="max-w-4xl mx-auto p-8 pt-20 ">
        <h1 className="text-5xl font-extrabold text-purple-600 mb-8 text-center">
          {t("projects.title")}
        </h1>
        <p className="text-lg text-center mb-12 dark:text-white">{t("projects.intro")}</p>

        {/* IGEM Project */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-purple-600 mb-4 text-center">{t("projects.igem.title")}</h2>
          <p className="mb-4 dark:text-white">{t("projects.igem.intro")}</p>
          <img src="https://res.cloudinary.com/dzb3coejh/image/upload/v1766020414/igem2_dxrwot.jpg" alt="IGEM Gold Medal" className="mb-4 rounded-lg grid content-center" width={"400px"} />
          <p className="mb-2 dark:text-white">{t("projects.igem.project-description")}</p>
          <a href="https://2025.igem.wiki/evry-paris-saclay/" className="text-purple-600 hover:underline mb-4 block text-center">
            {t("projects.igem.link-text")}
          </a>
          <p className="mb-4 dark:text-white">{t("projects.igem.award")}</p>
          <img src="https://res.cloudinary.com/dzb3coejh/image/upload/v1766020415/igem3_n5pf5c.jpg" alt="IGEM Wiki" className="mb-4 rounded-lg " width={"400px"}/>
          <p className="mb-2 dark:text-white">{t("projects.igem.future")}</p>
          <p className="mb-2 dark:text-white">{t("projects.igem.impact")}</p>
          <TechBadges techString={t("projects.igem.technologies")} />
        </section>

        {/* University Projects */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-purple-600 mb-4 text-center">{t("projects.uni.title")}</h2>
          <p className="mb-6 dark:text-white">{t("projects.uni.intro")}</p>

          {/* L3 Projects */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 dark:text-white text-center">{t("projects.uni.L3.title")}</h3>

            <div className="mb-6 pl-4 border-l-4 border-purple-500">
              <h4 className="text-xl font-semibold dark:text-white mb-2">{t("projects.uni.L3.tomography.title")}</h4>
              <p className="dark:text-gray-400 mb-2">{t("projects.uni.L3.tomography.description")}</p>
              <img src="https://res.cloudinary.com/dzb3coejh/image/upload/v1766021959/truncated_rzmoxc.png" alt="" width={"200px"}/>
              <TechBadges techString={t("projects.uni.L3.tomography.technologies")} />
            </div>

            <div className="mb-6 pl-4 border-l-4 border-purple-500">
              <h4 className="text-xl font-semibold dark:text-white mb-2">{t("projects.uni.L3.bdd2.title")}</h4>
              <p className="dark:text-gray-400 mb-2">{t("projects.uni.L3.bdd2.description")}</p>
              <TechBadges techString={t("projects.uni.L3.bdd2.technologies")} />
            </div>

            <div className="mb-6 pl-4 border-l-4 border-purple-500">
              <h4 className="text-xl font-semibold dark:text-white mb-2">{t("projects.uni.L3.windows-ad.title")}</h4>
              <p className="dark:text-gray-400 mb-2">{t("projects.uni.L3.windows-ad.description")}</p>
              <TechBadges techString={t("projects.uni.L3.windows-ad.technologies")} />
            </div>

            <div className="mb-6 pl-4 border-l-4 border-purple-500">
              <h4 className="text-xl font-semibold dark:text-white mb-2">{t("projects.uni.L3.dnssec.title")}</h4>
              <p className="dark:text-gray-400 mb-2">{t("projects.uni.L3.dnssec.description")}</p>
              <TechBadges techString={t("projects.uni.L3.dnssec.technologies")} />
            </div>

            <div className="mb-6 pl-4 border-l-4 border-purple-500">
              <h4 className="text-xl font-semibold dark:text-white mb-2">{t("projects.uni.L3.nftables.title")}</h4>
              <p className="dark:text-gray-400 mb-2">{t("projects.uni.L3.nftables.description")}</p>
              <TechBadges techString={t("projects.uni.L3.nftables.technologies")} />
            </div>
          </div>

          {/* M1 Projects */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 dark:text-white text-center">{t("projects.uni.M1.title")}</h3>

            <div className="mb-6 pl-4 border-l-4 border-purple-500">
              <h4 className="text-xl font-semibold dark:text-white mb-2">{t("projects.uni.M1.carp.title")}</h4>
              <p className="dark:text-gray-400 mb-2">{t("projects.uni.M1.carp.description")}</p>
              <TechBadges techString={t("projects.uni.M1.carp.technologies")} />
            </div>

            <div className="mb-6 pl-4 border-l-4 border-purple-500">
              <h4 className="text-xl font-semibold dark:text-white mb-2">{t("projects.uni.M1.lvs.title")}</h4>
              <p className="dark:text-gray-400 mb-2">{t("projects.uni.M1.lvs.description")}</p>
              <TechBadges techString={t("projects.uni.M1.lvs.technologies")} />
            </div>

            <div className="mb-6 pl-4 border-l-4 border-purple-500">
              <h4 className="text-xl font-semibold dark:text-white mb-2">{t("projects.uni.M1.bdd.title")}</h4>
              <p className="dark:text-gray-400 mb-2">{t("projects.uni.M1.bdd.description")}</p>
              <TechBadges techString={t("projects.uni.M1.bdd.technologies")} />
            </div>

            <div className="mb-6 pl-4 border-l-4 border-purple-500">
              <h4 className="text-xl font-semibold dark:text-white mb-2">{t("projects.uni.M1.petri.title")}</h4>
              <p className="dark:text-gray-400 mb-2">{t("projects.uni.M1.petri.description")}</p>
              <TechBadges techString={t("projects.uni.M1.petri.technologies")} />
            </div>

            <div className="mb-6 pl-4 border-l-4 border-purple-500">
              <h4 className="text-xl font-semibold dark:text-white mb-2">{t("projects.uni.M1.dhcp.title")}</h4>
              <p className="dark:text-gray-400 mb-2">{t("projects.uni.M1.dhcp.description")}</p>
              <TechBadges techString={t("projects.uni.M1.dhcp.technologies")} />
            </div>
          </div>
        </section>

        {/* Personal Projects */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-purple-600 mb-4 text-center">{t("projects.personal.title")}</h2>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-3 dark:text-white">{t("projects.personal.rwg.title")}</h3>
            <a href="https://rwg.bio/" className="text-purple-600 hover:underline mb-2 block text-center">
              {t("projects.personal.rwg.link-text")}
            </a>
            <p className="mb-2 dark:text-white">{t("projects.personal.rwg.description")}</p>
            <a href="https://github.com/PaulVerot03/hackaton-code" className="text-purple-600 hover:underline mb-2 block text-center">
              {t("projects.personal.rwg.code-link")}
            </a>
            <p className="mb-2 dark:text-white">{t("projects.personal.rwg.outcome")}</p>
            <TechBadges techString={t("projects.personal.rwg.technologies")} />
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-3 dark:text-white">{t("projects.personal.cardihack.title")}</h3>
            <p className="mb-2 dark:text-white">{t("projects.personal.cardihack.description")}</p>
            <TechBadges techString={t("projects.personal.cardihack.technologies")} />
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-3 dark:text-white text-center">{t("projects.personal.server.title")}</h3>
            <p className="mb-2 dark:text-white">{t("projects.personal.server.description")}</p>
            <TechBadges techString={t("projects.personal.server.technologies")} />
          </div>
        </section>
      </div>
    </div>
  );
}