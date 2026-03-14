import type { Route } from "./+types/home";
import { useTranslation } from "react-i18next";
import { ClientOnly } from "../components/ClientOnly";
import FaultyTerminal from "@/components/FaultyTerminal";
import TextType from "@/components/TextType";
import { ThemeToggle } from "../components/ThemeToggle";
import PillNav from "../components/PillNav";
import TiltedCard from "../components/TitledCard";

import LogoLoop from '../components/LogoLoop';

import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiPython, SiPostgresql, SiOpenbsd, SiRockylinux, SiMongodb, SiCockpit, SiAlpinelinux, SiUnraid, SiNextcloud, SiC, SiDebian } from 'react-icons/si';
import { FaWindows, FaLinux, FaDocker } from 'react-icons/fa';
import * as GrIcons from 'react-icons/gr';
import * as TbIcons from 'react-icons/tb';
import * as SiIcons from 'react-icons/si';
import * as FaIcons from 'react-icons/fa';
import * as DiIcons from 'react-icons/di';

const getIconByName = (iconName: string) => {
  if (!iconName) return null;
  const allIcons = { ...SiIcons, ...FaIcons, ...DiIcons, ...GrIcons, ...TbIcons, SiDebian };
  const IconComponent = allIcons[iconName as keyof typeof allIcons];
  return IconComponent ? <IconComponent /> : null;
};
const TechBadges = ({ techString }: { techString: string }) => {
  if (!techString) return null;
  const techs = techString.split(',').map(t => t.trim());
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {techs.map((iconName, index) => {
        const icon = getIconByName(iconName);
        const displayName = iconName.replace(/^(Si|Fa|Di)/, '');
        return icon ? (
          <span
            key={index}
            className="inline-flex items-center gap-1 px-2 py-1 bg-cyan-100 dark:bg-cyan-900 text-pink-800 dark:text-cyan-200 rounded text-sm"
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

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <FaWindows />, title: "Windows", href: "https://www.microsoft.com/en-us/windows" },
  { node: <FaLinux />, title: "Linux", href: "https://www.linux.org" },
  { node: <SiDebian />, title: "Debian", href: "https://www.debian.org" },
  { node: <SiOpenbsd />, title: "OpenBSD", href: "https://www.openbsd.org" },
  { node: <SiRockylinux />, title: "Rocky Linux", href: "https://rockylinux.org" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <FaDocker />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiCockpit />, title: "Cockpit", href: "https://cockpit-project.org" },
  { node: <SiAlpinelinux />, title: "Alpine Linux", href: "https://alpinelinux.org" },
  { node: <SiUnraid />, title: "Unraid", href: "https://unraid.net" },
  { node: <SiNextcloud />, title: "Nextcloud", href: "https://nextcloud.com" },
  { node: <SiC />, title: "C", href: "https://en.wikipedia.org/wiki/C_(programming_language)" }
];
{/** python, linux, podman, docker, oracle, BSD, postgres, bash, react,  */}
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
      <div className="relative h-screen">
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
        <div className="fixed top-4 right-4 flex items-center space-x-4 z-40">
          <button
            onClick={changeLanguage}
            className="p-2  text-white rounded dark:text-white bg-purple-600 hover:bg-purple-700 transition-colors"
          >
            {currentLanguage === "en" ? "passer en 🇫🇷" : "switch to 🇬🇧"}
          </button>
          <ThemeToggle />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <div className="bg-black/30 p-8 rounded-3xl max-w-7xl mx-auto text-center">
            <TextType text={t("welcome")}
              typingSpeed={75}
              pauseDuration={15000}
              showCursor={true}
              cursorCharacter="_"
              className="py-4 justify-center flex items-center text-purple-600 tracking-wide text-9xl font-extrabold text-center select-auto jersey-10-regular" />

            <p className="text-white text-5xl">
              {t("greeting", { name: "Paul" })}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-950 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-extrabold text-purple-600 mb-8">
              {t("about")}
            </h2>
            <p className="text-lg text-center mb-12 dark:text-white">{t("about-content")}</p>
            <div className="flex">
              <div className=" flex-auto px-px">
                <h2 className="text-4xl font-extrabold text-purple-600 mb-8">
                  {t("scholar")}
                </h2>
                <div className="">
                </div>
                <ul role="list" className="divide-y divide-gray-100 dark:divide-gray-700 w-full mb-12">
                  <li className="flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
                      <img
                        className="h-12 w-12 flex-none rounded-full bg-gray-50"
                        src="https://cdn.prod.website-files.com/6113c65158fdfa06c0c7f762/6156dae562b88a85298294c2_SainteCatherineLaboure_favicon_256.png"
                        alt=""
                      />
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                          BAC Mathématiques-Histoire
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500 dark:text-gray-400">
                          Lycée Sainte Catherine Labouré, 2021
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
                      <img
                        className="h-12 w-12 flex-none rounded-full bg-gray-50"
                        src="https://s1.qwant.com/thumbr/474x474/0/9/1e5aa18804306da3f7d5a05e8a0ace1904d6fcdd0dd8410078ab2a22fdee79/OIP.Ot8Wry_uVpBvH0FG0EnnQAHaHa.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%2Fid%2FOIP.Ot8Wry_uVpBvH0FG0EnnQAHaHa%3Fpid%3DApi&q=0&b=1&p=0&a=0"
                        alt=""
                      />
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                          DEUG informatique
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500 dark:text-gray-400">
                          Université d'Évry Paris-Saclay, 2024
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
                      <img
                        className="h-12 w-12 flex-none rounded-full bg-gray-50"
                        src="https://s1.qwant.com/thumbr/474x474/0/9/1e5aa18804306da3f7d5a05e8a0ace1904d6fcdd0dd8410078ab2a22fdee79/OIP.Ot8Wry_uVpBvH0FG0EnnQAHaHa.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%2Fid%2FOIP.Ot8Wry_uVpBvH0FG0EnnQAHaHa%3Fpid%3DApi&q=0&b=1&p=0&a=0"
                        alt=""
                      />
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                          Licence informatique - Administration Système en Réseau
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500 dark:text-gray-400">
                          Université d'Évry Paris-Saclay, 2025
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>

              </div>
              <div className=" flex-auto">
                <h2 className="text-4xl font-extrabold text-purple-600 mb-8">
                  {t("stage")}
                </h2>
                <p>
                  {/* {t("stage-content")} */}
                </p>
                <ul role="list" className="divide-y divide-gray-100 dark:divide-gray-700 w-full mb-12">
                  <li className="flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
                      <img
                        className="h-12 w-12 flex-none rounded-full bg-gray-50"
                        src="https://cdn.prod.website-files.com/685945d76d7a305336412a93/685d2e58d6afb933df5bc432_favicon.svg"
                        alt=""
                      />
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                          2019 - Kameleoon
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500 dark:text-gray-400">
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
                      <img
                        className="h-12 w-12 flex-none rounded-full bg-gray-50"
                        src="https://s1.qwant.com/thumbr/474x474/0/9/1e5aa18804306da3f7d5a05e8a0ace1904d6fcdd0dd8410078ab2a22fdee79/OIP.Ot8Wry_uVpBvH0FG0EnnQAHaHa.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%2Fid%2FOIP.Ot8Wry_uVpBvH0FG0EnnQAHaHa%3Fpid%3DApi&q=0&b=1&p=0&a=0"
                        alt=""
                      />
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                          2020 - Impression Design
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500 dark:text-gray-400">
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-4xl font-extrabold text-purple-600 mb-8">Other tidbits</h2>
            <div className="flex flex-row gap-12 justify-center mb-12">
              <div className="text-center">
                <p className="text-lg font-bold mb-2 dark:text-white">English</p>
                <p className="dark:text-gray-300">TOEIC - C1</p>
                <p className="dark:text-gray-300">EFSET - C2</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold mb-2 dark:text-white">Secourisme</p>
                <p className="dark:text-gray-300">PSC-1</p>
                <p className="dark:text-gray-300">Secours Aquatique</p>
              </div>
            </div>



            <h2 className="text-4xl font-extrabold text-purple-600 mb-8">
              {t("knowledge")}
            </h2>
            <h3 className="text-2xl text-purple-900 font-semibold mb-4 ">{t("knowledge-subtitle")}</h3>
            <p className="mb-4 dark:text-white">{t("knowledge-content-1")}</p>
            <p className="mb-6 dark:text-white">{t("knowledge-content-2")}</p>
            <ClientOnly>
              <div className="w-full max-w-4xl mx-auto mb-8" style={{ height: '100px', position: 'relative', overflow: 'hidden' }}>
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


            <h2 className="text-4xl font-extrabold text-purple-600 mb-8">
            {t("interests")}
            </h2>
            <div className="text-center">
              <h3 className="text-2xl text-purple-900 font-semibold mb-4 text-center">{t("interest-content.music.title")}</h3>
              <p>{t("interest-content.music.sub-title")}</p>
              <p className="mb-4 dark:text-white">{t("interest-content.music.fav-title")}</p>
              <span className="max-w-2">
                <iframe title="deezer-widget"
                  src="https://widget.deezer.com/widget/auto/playlist/15052533723"
                  width="150%" height="300"
                  frameBorder="0"
                  allowTransparency={true}
                  allow="encrypted-media; clipboard-write"
                  className="max-w-220">
                </iframe>

              </span>
              <br />
              <p className="mb-4 dark:text-white">{t("interest-content.music.fav-artist")}</p>
              <div className="grid grid-cols-5 gap-4">
                <a href="https://www.discogs.com/artist/253925-Summoning">
                  <TiltedCard
                    imageSrc="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.hornsup.fr%2Fuploads%2Ffiles%2FNEWS%2F2016%2FAout%2F14249787_907233306048595_727627046472095090_o.jpg&f=1&nofb=1&ipt=36290621613ba7ac4f556a8402a3eadfa4a114cbabf7f16edcded3d7b4de7fb7"
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

              <p className="mb-4 dark:text-white">{t("interest-content.music.fav-album")}</p>
              <div className="grid grid-cols-5 gap-4">
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
              

              
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
