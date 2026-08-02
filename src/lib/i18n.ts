import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { es, en } from "./translations";
import { SUPPORTED_LANGS, type SupportedLang } from "./lang";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      pt: { translation: {} },
      es: { translation: es },
      en: { translation: en },
    },
    fallbackLng: "pt",
    // Deterministic base language. The resolved language for the current
    // request/visit is applied by `applyLanguage` before rendering, so server
    // and client markup always match.
    lng: "pt",
    supportedLngs: [...SUPPORTED_LANGS],
    keySeparator: false,
    nsSeparator: false,
    interpolation: { escapeValue: false },
    returnEmptyString: false,
    react: { useSuspense: false },
  });
}

/**
 * Sets the active language synchronously. Resources are bundled, so no
 * async loading happens and the very next render already uses `lang`.
 */
export function applyLanguage(lang: SupportedLang) {
  if (i18n.language !== lang) {
    void i18n.changeLanguage(lang);
  }
}

export default i18n;