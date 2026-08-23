import fs from "fs";
import path from "path";
import { format } from "prettier";

async function build() {
  const localesDir = path.resolve("public/locales");
  const i18nServerFile = path.resolve("app/i18n.server.ts");

  const languages = fs.readdirSync(localesDir);

  const resources: Record<string, any> = {};

  for (const lang of languages) {
    const translationFile = path.join(localesDir, lang, "translation.json");
    if (fs.existsSync(translationFile)) {
      const content = fs.readFileSync(translationFile, "utf-8");
      resources[lang] = {
        translation: JSON.parse(content),
      };
    }
  }

  const fileContent = `
  import i18n from "i18next";
  import { initReactI18next } from "react-i18next";

  i18n
    .use(initReactI18next)
    .init({
      fallbackLng: "en",
      debug: false,
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
      resources: ${JSON.stringify(resources, null, 2)},
    });

  export default i18n;
  `;

  const formattedContent = await format(fileContent, { parser: "typescript" });
  fs.writeFileSync(i18nServerFile, formattedContent);

  console.log("Successfully built i18n.server.ts");
}

build();
