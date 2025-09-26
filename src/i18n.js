import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(
    {
      fallbackLng: "sv",
      debug: true,
      interpolation: {
        escapeValue: false,
      },
      backend: {
        loadPath: "/locales/{{lng}}/translation.json",
      },
      detection: {
        order: ["navigator", "localStorage", "queryString", "cookie"],
        caches: ["localStorage"],
      },
    },
    () => {
      console.log("Detected language: ", i18n.language);
    }
  );

export default i18n;
