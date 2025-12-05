import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  debug: false,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources: {
    en: {
      translation: {
        welcome: "Welcome",
        greeting: "My name is Paul and I bid you welcome to my Portfolio!",
        article: "article",
        about: "About me",
        "about-content": "",
        stage: "Interships",
        "stages-content": "",
        knowledge: "What I can do ",
        interests: "My center of Interest",
        scholar: "Education Background",
      },
    },
    fr: {
      translation: {
        welcome: "Bienvenue",
        greeting:
          "Je suis Paul, et je vous souhaite la bienvenue à mon portfolio!",
        article: "article",
        about: "A propos de moi",
        "about-content":
          "Je suis étudiant en master Computer Networks Systems à Paris-Saclay. J'étudie pour devenir administrateur système réseau.",
        knowledge: "Ce que je sais faire",
        scholar: "Mon parcours scolaire",
        interests: "Mes centres d'interêts",
        stage: "Mes stages",
        "stage-content": "",
      },
    },
  },
});

export default i18n;
