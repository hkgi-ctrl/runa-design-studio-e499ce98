import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { es, en } from "./translations";

export const LANG_STORAGE_KEY = "runa-lang";
export const SUPPORTED_LANGS = ["pt", "es", "en"] as const;
export type SupportedLang = (typeof SUPPORTED_LANGS)[number];

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      pt: { translation: {} },
      es: { translation: es },
      en: { translation: en },
    },
    fallbackLng: "pt",
    // Always render the first pass (SSR + hydration) in Portuguese so server
    // and client markup match. The stored preference is applied after mount.
    lng: "pt",
    supportedLngs: [...SUPPORTED_LANGS],
    keySeparator: false,
    nsSeparator: false,
    interpolation: { escapeValue: false },
    returnEmptyString: false,
    react: { useSuspense: false },
  });
}

export function getStoredLang(): SupportedLang | undefined {
  if (typeof window === "undefined") return undefined;
  try {
    const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
    return SUPPORTED_LANGS.includes(stored as SupportedLang)
      ? (stored as SupportedLang)
      : undefined;
  } catch {
    return undefined;
  }
}

export function setStoredLang(lang: SupportedLang) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch {
    /* storage unavailable — language still applies for this session */
  }
}

export default i18n;