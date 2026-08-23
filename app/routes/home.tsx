import type { Route } from "./+types/home";
import { useTranslation } from "react-i18next";
import { ClientOnly } from "../components/ClientOnly";
import FaultyTerminal from "@/components/FaultyTerminal";
import TextType from "@/components/TextType";
import { ThemeToggle } from "../components/ThemeToggle";
import PillNav from "../components/PillNav";
import TiltedCard from "../components/TitledCard";
import { ChevronDown, ExternalLink, ArrowRight } from "lucide-react";

import LogoLoop from '../components/LogoLoop';


import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiPython, SiPostgresql,
  SiOpenbsd, SiRockylinux, SiMongodb, SiCockpit, SiAlpinelinux, SiUnraid,
  SiNextcloud, SiC, SiDebian, SiOcaml, SiHtml5, SiCss3, SiJavascript,
  SiAmazonwebservices, SiNginx
} from 'react-icons/si';
import { FaLinkedin, FaGithub, FaFile, FaLinux, FaDocker, FaReact, FaWindows } from 'react-icons/fa';
import { GrOracle } from 'react-icons/gr';
import { TbSql } from 'react-icons/tb';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiC />, title: "C", href: "https://en.wikipedia.org/wiki/C_(programming_language)" },
  { node: <SiOcaml />, title: "OCaml", href: "https://ocaml.org" },
  { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <SiCss3 />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <FaLinux />, title: "Linux", href: "https://www.linux.org" },
  { node: <SiDebian />, title: "Debian", href: "https://www.debian.org" },
  { node: <SiOpenbsd />, title: "OpenBSD", href: "https://www.openbsd.org" },
  { node: <SiRockylinux />, title: "Rocky Linux", href: "https://rockylinux.org" },
  { node: <SiAlpinelinux />, title: "Alpine Linux", href: "https://alpinelinux.org" },
  { node: <FaDocker />, title: "Docker", href: "https://www.docker.com" },
  { node: <FaWindows />, title: "Windows AD", href: "https://learn.microsoft.com/fr-fr/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <GrOracle />, title: "Oracle", href: "https://www.oracle.com" },
  { node: <TbSql />, title: "SQL", href: "https://en.wikipedia.org/wiki/SQL" },
  { node: <SiNginx />, title: "NGINX", href: "https://nginx.org" },
  { node: <SiAmazonwebservices />, title: "AWS", href: "https://aws.amazon.com" },
  { node: <SiCockpit />, title: "Cockpit", href: "https://cockpit-project.org" },
  { node: <SiUnraid />, title: "Unraid", href: "https://unraid.net" },
  { node: <SiNextcloud />, title: "Nextcloud", href: "https://nextcloud.com" }
];
{/** python, linux, podman, docker, oracle, BSD, postgres, bash, react,  */ }
export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Paul Verot | Portfolio" },
    { name: "description", content: "Portfolio" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: "Welcome to my portfolio" };
}

export default function Home({ loaderData }: Route.ComponentProps) {
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
    <div className="bg-white dark:bg-black">
      <ClientOnly>
        <PillNav
          logo="/favicon.ico"
          logoAlt="Logo"
          items={navItems}
          activeHref="/"
          baseColor="#ffffff17"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
        />
      </ClientOnly>
      <div className="relative h-svh min-h-[32rem]">
        <div className="absolute inset-0">
          <ClientOnly>
            <FaultyTerminal
              scale={1.5}
              gridMul={[2, 1]}
              digitSize={1.2}
              timeScale={1}
              pause={false}
              scanlineIntensity={1}
              glitchAmount={1}
              flickerAmount={1}
              noiseAmp={1}
              chromaticAberration={0}
              dither={0}
              curvature={0}
              tint="#8f8f8fff"
              mouseReact={true}
              mouseStrength={0.5}
              pageLoadAnimation={false}
              brightness={1}
            />
          </ClientOnly>

        </div>
        <div className="fixed top-4 right-16 md:right-4 flex items-center gap-2 md:gap-4 z-[1001]">
          <button
            onClick={changeLanguage}
            aria-label={currentLanguage === "en" ? "Passer en français" : "Switch to English"}
            className="px-3 py-2 text-sm md:text-base text-white rounded dark:text-white bg-purple-700 hover:bg-purple-600 transition-colors whitespace-nowrap"
          >
            <span className="hidden lg:inline">
              {currentLanguage === "en" ? "passer en 🇫🇷" : "switch to 🇬🇧"}
            </span>
            <span className="lg:hidden">
              {currentLanguage === "en" ? "🇫🇷" : "🇬🇧"}
            </span>
          </button>
          <ThemeToggle />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          <div className="bg-black/30 px-4 py-6 sm:px-8 sm:py-8 rounded-3xl w-full max-w-7xl mx-auto text-center">
            <TextType text={t("welcome")}
              typingSpeed={75}
              pauseDuration={15000}
              showCursor={true}
              cursorCharacter="_"
              className="py-2 sm:py-4 justify-center flex flex-wrap items-center text-purple-600 tracking-wide text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-center break-words select-auto jersey-10-regular" />

            <p className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl">
              {t("greeting", { name: "Paul" })}
            </p>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-gray-300 pointer-events-none ">
          <span className="text-sm font-medium tracking-widest uppercase">{t("scroll-down")}</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
      <div className="bg-white dark:bg-gray-950 px-4 py-8 sm:px-6 md:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex w-full flex-col items-center">
            <div className="w-full">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-purple-600 mb-8">
                {t("about")}
              </h2>
              <p className="text-lg text-center mb-12 dark:text-white">{t("about-content")}</p>
              <div className="w-full my-8 mb-12">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-purple-600 text-center mb-8">
                  {t("links")}
                </h2>
                <div className="flex flex-wrap justify-center items-center gap-4 max-w-2xl mx-auto">
                  <a
                    href="https://www.linkedin.com/in/paulverot/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3.5 bg-purple-700 hover:bg-purple-600 text-white rounded-2xl shadow-md hover:shadow-purple-500/20 hover:-translate-y-0.5 transition-all duration-200 font-semibold group"
                  >
                    <FaLinkedin className="text-2xl group-hover:scale-110 transition-transform" />
                    <div className="flex flex-col text-left">
                      <span className="text-base leading-tight">LinkedIn</span>
                      <span className="text-xs text-purple-200 font-normal">paulverot</span>
                    </div>
                    <ExternalLink className="w-4 h-4 ml-1 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </a>

                  <a
                    href="https://github.com/PaulVerot03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3.5 bg-gray-900 hover:bg-black text-white dark:bg-gray-800 dark:hover:bg-gray-700 rounded-2xl shadow-md hover:shadow-gray-500/20 hover:-translate-y-0.5 transition-all duration-200 font-semibold group border border-gray-700/50"
                  >
                    <FaGithub className="text-2xl group-hover:scale-110 transition-transform" />
                    <div className="flex flex-col text-left">
                      <span className="text-base leading-tight">GitHub</span>
                      <span className="text-xs text-gray-400 font-normal">PaulVerot03</span>
                    </div>
                    <ExternalLink className="w-4 h-4 ml-1 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </a>

                  <a
                    href="https://bucket.paulverot.fr/CV-PaulVEROT.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3.5 bg-purple-900/90 hover:bg-purple-900 text-white rounded-2xl shadow-md hover:shadow-purple-900/30 hover:-translate-y-0.5 transition-all duration-200 font-semibold group border border-purple-700/40"
                  >
                    <FaFile className="text-xl group-hover:scale-110 transition-transform" />
                    <div className="flex flex-col text-left">
                      <span className="text-base leading-tight">{t("links-content.cv")}</span>
                      <span className="text-xs text-purple-300 font-normal">PDF</span>
                    </div>
                    <ExternalLink className="w-4 h-4 ml-1 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:gap-8">
                <div className="flex-auto min-w-0">
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-purple-600 mb-8">
                    {t("scholar")}
                  </h2>
                  <div className="">
                  </div>
                  <ul role="list" className="divide-y divide-gray-100 dark:divide-gray-700 w-full mb-12">
                    <li className="flex justify-between gap-x-6 py-5 items-center">
                      <div className="flex items-center min-w-0 gap-x-4">
                        <div className="w-12 h-12 flex-none rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center p-1 overflow-hidden">
                          <img
                            className="max-h-full max-w-full object-contain"
                            src="https://cdn.prod.website-files.com/6113c65158fdfa06c0c7f762/6156dae562b88a85298294c2_SainteCatherineLaboure_favicon_256.png"
                            alt=""
                          />
                        </div>
                        <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                            {t("scholar-content.bac.title")}
                          </p>
                          <p className="mt-1 truncate text-xs leading-5 text-gray-500 dark:text-gray-400">
                            {t("scholar-content.bac.school")}
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="flex justify-between gap-x-6 py-5 items-center">
                      <div className="flex items-center min-w-0 gap-x-4">
                        <div className="w-12 h-12 flex-none rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center p-1 overflow-hidden">
                          <img
                            className="max-h-full max-w-full object-contain"
                            src="/evry.png"
                            alt=""
                          />
                        </div>
                        <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                            {t("scholar-content.deug.title")}
                          </p>
                          <p className="mt-1 truncate text-xs leading-5 text-gray-500 dark:text-gray-400">
                            {t("scholar-content.deug.school")}
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="flex justify-between gap-x-6 py-5 items-center">
                      <div className="flex items-center min-w-0 gap-x-4">
                        <div className="w-12 h-12 flex-none rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center p-1 overflow-hidden">
                          <img
                            className="max-h-full max-w-full object-contain"
                            src="/evry.png"
                            alt=""
                          />
                        </div>
                        <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                            {t("scholar-content.licence.title")}
                          </p>
                          <p className="mt-1 truncate text-xs leading-5 text-gray-500 dark:text-gray-400">
                            {t("scholar-content.licence.school")}
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="flex justify-between gap-x-6 py-5 items-center">
                      <div className="flex items-center min-w-0 gap-x-4">
                        <div className="w-12 h-12 flex-none rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center p-1 overflow-hidden">
                          <img
                            className="max-h-full max-w-full object-contain"
                            src="/ps.png"
                            alt=""
                          />
                        </div>
                        <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                            {t("scholar-content.master1.title")}
                          </p>
                          <p className="mt-1 truncate text-xs leading-5 text-gray-500 dark:text-gray-400">
                            {t("scholar-content.master1.school")}
                          </p>
                        </div>
                        <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                            {t("scholar-content.master2.title")}
                          </p>
                          <p className="mt-1 truncate text-xs leading-5 text-gray-500 dark:text-gray-400">
                            {t("scholar-content.master2.school")}
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>

                </div>
                <div className="flex-auto min-w-0">
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-purple-600 mb-8">
                    {t("stage")}
                  </h2>

                  <ul role="list" className="divide-y divide-gray-100 dark:divide-gray-700 w-full mb-12">
                    <li className="flex justify-between gap-x-6 py-5 items-center">
                      <div className="flex items-center min-w-0 gap-x-4">
                        <div className="w-12 h-12 flex-none rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center p-1 overflow-hidden">
                          <img
                            className="max-h-full max-w-full object-contain"
                            src="https://cdn.prod.website-files.com/685945d76d7a305336412a93/685d2e58d6afb933df5bc432_favicon.svg"
                            alt=""
                          />
                        </div>
                        <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                            {t("stage-list.kameleoon")}
                          </p>
                          <p className="mt-1 truncate text-xs leading-5 text-gray-500 dark:text-gray-400">
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="flex justify-between gap-x-6 py-5 items-center">
                      <div className="flex items-center min-w-0 gap-x-4">
                        <div className="w-12 h-12 flex-none rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center p-1 overflow-hidden">
                          <img
                            className="max-h-full max-w-full object-contain"
                            src="https://images.seeklogo.com/logo-png/36/1/informatique-bio-informatique-et-systemes-complex-logo-png_seeklogo-360383.png"
                            alt=""
                          />
                        </div>
                        <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                            {t("stage-list.ibisc")}
                          </p>
                          <p className="mt-1 truncate text-xs leading-5 text-gray-500 dark:text-gray-400">
                          </p>
                        </div>
                      </div>
                    </li>

                  </ul>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-6 justify-center mb-12">
                  <h4 className="text-xl font-bold text-purple-600 mb-8">{t("education-subtitle-1")}</h4>
                  <p className="dark:text-gray-300">{t("education-description-1")}</p>
                  <p className="dark:text-gray-300">{t("education-description-2")}</p>
                  <p className="dark:text-gray-300">{t("education-description-3")}</p>
                  <p className="dark:text-gray-300">{t("education-description-4")}</p>
                  <h4 className="text-xl font-bold text-purple-600 mb-8">{t("education-subtitle-2")}</h4>
                  <p className="dark:text-gray-300">
                    {t("stage-content")}
                  </p>
                </div>

              </div>

              <br />

              <h2 className="text-3xl sm:text-4xl font-extrabold text-purple-600 mb-8">{t("tidbits")}</h2>
              <div className="flex flex-wrap gap-8 sm:gap-12 justify-center mb-12">
                <div className="text-center">
                  <p className="text-lg font-bold mb-2 dark:text-white">{t("tidbits-content.language.title")}</p>
                  <p className="dark:text-gray-300">{t("tidbits-content.language.toeic")}</p>
                  <p className="dark:text-gray-300">{t("tidbits-content.language.efset")}</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold mb-2 dark:text-white">{t("tidbits-content.first-aid.title")}</p>
                  <p className="dark:text-gray-300">{t("tidbits-content.first-aid.psc1")}</p>
                  <p className="dark:text-gray-300">{t("tidbits-content.first-aid.water-rescue")}</p>
                </div>
              </div>



              <h2 className="text-3xl sm:text-4xl font-extrabold text-purple-600 mb-8">
                {t("knowledge")}
              </h2>
              <h3 className="text-xl sm:text-2xl text-purple-900 dark:text-purple-400 font-semibold mb-4">{t("knowledge-subtitle")}</h3>
              <p className="mb-4 dark:text-white">{t("knowledge-content-1")}</p>
              <p className="mb-6 dark:text-white">{t("knowledge-content-2")}</p>
              <ClientOnly>
                <div className="w-full max-w-full mx-auto mb-8 md:max-w-4xl" style={{ height: '100px', position: 'relative', overflow: 'hidden' }}>
                  <LogoLoop
                    logos={techLogos}
                    speed={50}
                    direction="left"
                    logoHeight={48}
                    gap={40}
                    pauseOnHover={true}
                    scaleOnHover
                    ariaLabel="Technology partners"
                  />
                </div>
              </ClientOnly>
              <p className="mb-6 text-center dark:text-white max-w-xl mx-auto">{t("knowledge-content-3")}</p>
              <div className="flex justify-center mb-12">
                <a
                  href="/project"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-purple-700 hover:bg-purple-600 text-white font-semibold rounded-2xl shadow-md hover:shadow-purple-500/20 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span>{t("projects-cta")}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* INTERESTS */}

            <div className="w-full">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-purple-600 mb-8 text-center">
                {t("interests")}
              </h2>

              {/* Computing */}
              <div className="text-center mb-12">
                <h3 className="text-xl sm:text-2xl text-purple-900 dark:text-purple-400 font-semibold mb-4 text-center">
                  {t("interest-content.computer.title")}
                </h3>
                <p className="mb-2 dark:text-gray-300 max-w-3xl mx-auto">{t("interest-content.computer.sub-title")}</p>
                <p className="dark:text-gray-300 max-w-3xl mx-auto">{t("interest-content.computer.linux")}</p>
              </div>

              {/* Music */}
              <div className="text-center mb-12">
                <h3 className="text-xl sm:text-2xl text-purple-900 dark:text-purple-400 font-semibold mb-4 text-center">
                  {t("interest-content.music.title")}
                </h3>
                <p className="mb-4 dark:text-gray-300">{t("interest-content.music.sub-title")}</p>
                <p className="mb-4 dark:text-white font-medium">{t("interest-content.music.fav-title")}</p>
                <div className="w-full max-w-xl mx-auto">
                  <iframe title="deezer-widget"
                    src="https://widget.deezer.com/widget/auto/playlist/15052533723"
                    height="300"
                    frameBorder="0"
                    allowTransparency={true}
                    allow="encrypted-media; clipboard-write"
                    className="block w-full rounded-lg">
                  </iframe>
                </div>
                <br />
                <p className="mb-4 dark:text-white font-medium">{t("interest-content.music.fav-artist")}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center">
                  <a href="https://www.discogs.com/artist/253925-Summoning">
                    <TiltedCard
                      imageSrc="https://i.discogs.com/6Ft1biDZYOYCD5xVzrmogXR8QgJf9ZCPQcAglbDGcwQ/rs:fit/g:sm/q:90/h:450/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTI1Mzky/NS0xNzI4NTgxMTY4/LTU4MTcuanBlZw.jpeg"
                      altText="Summoning"
                      captionText="Summoning"
                      containerHeight="150px"
                      containerWidth="150px"
                      imageHeight="150px"
                      imageWidth="150px"
                      rotateAmplitude={12}
                      scaleOnHover={1.05}
                      showMobileWarning={false}
                      showTooltip={true}
                      displayOverlayContent={false}
                      overlayContent
                    />
                  </a>

                  <a href="https://www.discogs.com/artist/95544-Ludwig-van-Beethoven">
                    <TiltedCard
                      imageSrc="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.britannica.com%2F24%2F152424-050-907AA3C7%2FLudwig-van-Beethoven.jpg&f=1&nofb=1&ipt=5dcfc09ff514fbacc1573ad624385d4fba7b47ee1fb1859ddbb191830a61088f"
                      altText="Ludwig van Beethoven"
                      captionText="Ludwig van Beethoven"
                      containerHeight="150px"
                      containerWidth="150px"
                      imageHeight="150px"
                      imageWidth="150px"
                      rotateAmplitude={12}
                      scaleOnHover={1.05}
                      showMobileWarning={false}
                      showTooltip={true}
                      displayOverlayContent={false}
                      overlayContent
                    />
                  </a>

                  <a href="https://www.discogs.com/artist/395130-Gojira-2">
                    <TiltedCard
                      imageSrc="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.metalepidemic.com%2Fwp-content%2Fuploads%2F2020%2F06%2Fgojira.jpg&f=1&nofb=1&ipt=0c1879b9c65898ce086899b0a02de07e22331774849a6172293e5db1da3febe7"
                      altText="Gojira"
                      captionText="Gojira"
                      containerHeight="150px"
                      containerWidth="150px"
                      imageHeight="150px"
                      imageWidth="150px"
                      rotateAmplitude={12}
                      scaleOnHover={1.05}
                      showMobileWarning={false}
                      showTooltip={true}
                      displayOverlayContent={false}
                      overlayContent
                    />
                  </a>

                  <a href="https://www.discogs.com/artist/102211-Howard-Shore">
                    <TiltedCard
                      imageSrc="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwordpress.wbur.org%2Fwp-content%2Fuploads%2F2017%2F04%2FHoward_Shore_Benjamin_Ealovega-1000x1000.jpg&f=1&nofb=1&ipt=3435a00ecd8e2117055caeb058bcabeceab3c84fd64c5ccfc9fdc0d91fd85c3a"
                      altText="Howard Shore"
                      captionText="Howard Shore"
                      containerHeight="150px"
                      containerWidth="150px"
                      imageHeight="150px"
                      imageWidth="150px"
                      rotateAmplitude={12}
                      scaleOnHover={1.05}
                      showMobileWarning={false}
                      showTooltip={true}
                      displayOverlayContent={false}
                      overlayContent
                    />
                  </a>

                  <a href="https://www.discogs.com/master/53704-Gojira-From-Mars-To-Sirius">
                    <TiltedCard
                      imageSrc="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.scdn.co%2Fimage%2Fd011c95081cd9a329e506abd7ded47535d524a07&f=1&nofb=1&ipt=e5cbc18d057810c99248ca26a3e4513a709f78d223300dad2f6717ab48a2d17f"
                      altText="Pink Floyd"
                      captionText="Pink Floyd"
                      containerHeight="150px"
                      containerWidth="150px"
                      imageHeight="150px"
                      imageWidth="150px"
                      rotateAmplitude={12}
                      scaleOnHover={1.05}
                      showMobileWarning={false}
                      showTooltip={true}
                      displayOverlayContent={false}
                      overlayContent
                    />
                  </a>
                </div>
                <br />

                <p className="mb-4 dark:text-white font-medium">{t("interest-content.music.fav-album")}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center mb-6">
                  <a href="https://www.discogs.com/master/57183-Summoning-Dol-Guldur">
                    <TiltedCard
                      imageSrc="https://cdn-images.dzcdn.net/images/cover/9bfc8e3970c2b05b78a0d1ec6088c9ba/500x500-000000-80-0-0.jpg"
                      altText="Summoning - Dol Guldur"
                      captionText="Summoning - Dol Guldur"
                      containerHeight="150px"
                      containerWidth="150px"
                      imageHeight="150px"
                      imageWidth="150px"
                      rotateAmplitude={12}
                      scaleOnHover={1.05}
                      showMobileWarning={false}
                      showTooltip={true}
                      displayOverlayContent={false}
                      overlayContent
                    />
                  </a>

                  <a href="https://www.discogs.com/release/7420522-Celibidache-M%C3%BCnchner-Philharmoniker-Bruckner-Bruckner-4">
                    <TiltedCard
                      imageSrc="https://cdn-images.dzcdn.net/images/cover/47b05dd0e2ececa6c6d1981e0655e43a/500x500-000000-80-0-0.jpg"
                      altText="Bruckner - Symphony 4"
                      captionText="Bruckner - Symphony 4"
                      containerHeight="150px"
                      containerWidth="150px"
                      imageHeight="150px"
                      imageWidth="150px"
                      rotateAmplitude={12}
                      scaleOnHover={1.05}
                      showMobileWarning={false}
                      showTooltip={true}
                      displayOverlayContent={false}
                      overlayContent
                    />
                  </a>

                  <a href="https://www.discogs.com/release/24917897-V%C3%A9h%C3%A9mence-Ordalies">
                    <TiltedCard
                      imageSrc="https://cdn-images.dzcdn.net/images/cover/f8c0db4c8b106cc76864967e432abf63/500x500-000000-80-0-0.jpg"
                      altText="Véhémence - Ordalie"
                      captionText="Véhémence - Ordalie"
                      containerHeight="150px"
                      containerWidth="150px"
                      imageHeight="150px"
                      imageWidth="150px"
                      rotateAmplitude={12}
                      scaleOnHover={1.05}
                      showMobileWarning={false}
                      showTooltip={true}
                      displayOverlayContent={false}
                      overlayContent
                    />
                  </a>

                  <a href="https://www.discogs.com/release/16531323-Atramentus-Stygian">
                    <TiltedCard
                      imageSrc="https://cdn-images.dzcdn.net/images/cover/2d858470bd7673a675e33d87b2fec2fb/500x500-000000-80-0-0.jpg"
                      altText="Atramentus - Stygian"
                      captionText="Atramentus - Stygian"
                      containerHeight="150px"
                      containerWidth="150px"
                      imageHeight="150px"
                      imageWidth="150px"
                      rotateAmplitude={12}
                      scaleOnHover={1.05}
                      showMobileWarning={false}
                      showTooltip={true}
                      displayOverlayContent={false}
                      overlayContent
                    />
                  </a>

                  <a href="https://www.discogs.com/master/53704-Gojira-From-Mars-To-Sirius">
                    <TiltedCard
                      imageSrc="https://cdn-images.dzcdn.net/images/cover/89f33d7ae3e196ccf3f6f0a8f7e497d1/500x500-000000-80-0-0.jpg"
                      altText="Gojira - From Mars to Sirius"
                      captionText="Gojira - From Mars to Sirius"
                      containerHeight="150px"
                      containerWidth="150px"
                      imageHeight="150px"
                      imageWidth="150px"
                      rotateAmplitude={12}
                      scaleOnHover={1.05}
                      showMobileWarning={false}
                      showTooltip={true}
                      displayOverlayContent={false}
                      overlayContent
                    />
                  </a>
                </div>

                <div className="space-y-2 dark:text-gray-300 max-w-3xl mx-auto">
                  <p>{t("interest-content.music.hi-hi")}</p>
                  <ul>
                    <li className="text-purple-600 font-semibold">{t("interest-content.music.hifi.headphones")}</li>
                    <li>AKG K2402 HD</li>
                    <li>GRADO SR60X</li>
                    <li>Beyerdynamic DT880 250Ohm</li>
                    <li className="text-purple-600 font-semibold">{t("interest-content.music.hifi.amplifiers")}</li>
                    <li>Phillips FR 740</li>
                    <li>JVC A-X40</li>
                    <li className="text-purple-600 font-semibold">{t("interest-content.music.hifi.speakers")}</li>
                    <li>Denon SC-N10</li>
                  </ul>
                  <p>{t("interest-content.music.guitar")}</p>
                </div>
              </div>

              {/* Woodworking */}
              <div className="text-center mb-12">
                <h3 className="text-xl sm:text-2xl text-purple-900 dark:text-purple-400 font-semibold mb-4 text-center">
                  {t("interest-content.wood.title")}
                </h3>
                <p className="dark:text-gray-300 max-w-3xl mx-auto">{t("interest-content.wood.sub-title")}</p>
                <img src="/drak.jpg" alt="Early build of a wooden Drakkar model" className="mb-4 rounded-lg mx-auto w-full max-w-[800px] h-auto" loading="lazy" decoding="async" />
              </div>

              {/* Watchmaking */}
              <div className="text-center mb-12">
                <h3 className="text-xl sm:text-2xl text-purple-900 dark:text-purple-400 font-semibold mb-4 text-center">
                  {t("interest-content.watches.title")}
                </h3>
                <p className="mb-2 dark:text-gray-300 max-w-3xl mx-auto">{t("interest-content.watches.sub-title")}</p>
                <p className="dark:text-gray-300 italic max-w-3xl mx-auto">{t("interest-content.watches.fav-watch")}</p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
                  <img src="/watch.JPG" alt="1937 Ancora d'Ouro watch, front view" className="mb-4 rounded-lg w-full max-w-[400px] h-auto" loading="lazy" decoding="async" />
                  <img src="/watch-2.JPG" alt="1937 Ancora d'Ouro watch, detail view" className="mb-4 rounded-lg w-full max-w-[400px] h-auto" loading="lazy" decoding="async" />
                </div>
                <p className="dark:text-gray-300 italic max-w-3xl mx-auto">{t("interest-content.watches.fav-watch-2")}</p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div >
  );
}
