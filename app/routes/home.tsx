import type { Route } from "./+types/home";
import { useTranslation } from "react-i18next";
import { ClientOnly } from "../components/ClientOnly";
import FaultyTerminal from "@/components/FaultyTerminal";
import TextType from "@/components/TextType";
import { ThemeToggle } from "../components/ThemeToggle";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "fr" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="bg-white dark:bg-black">
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
            className="p-2  text-white rounded"
          >
            {currentLanguage === "en" ? "Français 🇫🇷" : "English 🇬🇧"}
          </button>
          <ThemeToggle />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <div className="bg-black/30 p-8 rounded-3xl max-w-7xl mx-auto text-center">
            <TextType text={ t("welcome") } 
            typingSpeed={75} 
            pauseDuration={15000} 
            showCursor={true} 
            cursorCharacter="_" 
            className="py-4 justify-center flex items-center text-cyan-400 text-6xl font-extrabold text-center select-auto jersey-10-regular" />
            
            <p className="text-white text-5xl">
              {t("greeting", { name: "Paul" })}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-950 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-extrabold text-cyan-500 mb-8">
              {t("about")}
            </h2>
            <p className="text-lg text-center mb-12 dark:text-white">{t("about-content")}</p>
            <div className="flex">
              <div className=" flex-auto">
                  <h2 className="text-4xl font-extrabold text-cyan-500 mb-8">
                  {t("scholar")}
                </h2>
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
                <h2 className="text-4xl font-extrabold text-cyan-500 mb-8">
                  {t("stage")}
                </h2>
                <p>
                  {t("stage-content")}
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
            
            
            <h2 className="text-4xl font-extrabold text-cyan-500 mb-8">
              {t("knowledge")}
            </h2>
            <h2 className="text-4xl font-extrabold text-cyan-500 mb-8">
              {t("interests")}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
