import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { es, en } from "./translations";

if (!i18n.isInitialized) {
  const chain = i18n.use(initReactI18next);
  if (typeof window !== "undefined") {
    chain.use(LanguageDetector);
  }
  chain.init({
    resources: {
      pt: { translation: {} },
      es: { translation: es },
      en: { translation: en },
    },
    fallbackLng: "pt",
    lng: typeof window === "undefined" ? "pt" : undefined,
    supportedLngs: ["pt", "es", "en"],
    keySeparator: false,
    nsSeparator: false,
    interpolation: { escapeValue: false },
    returnEmptyString: false,
    detection: {
      order: ["localStorage", "navigator"],
      lookupLocalStorage: "runa-lang",
      caches: ["localStorage"],
    },
    react: { useSuspense: false },
  });
}

export default i18n;