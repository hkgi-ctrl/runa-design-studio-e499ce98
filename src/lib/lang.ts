export const LANG_STORAGE_KEY = "runa-lang";
export const LANG_COOKIE_KEY = "runa-lang";
export const SUPPORTED_LANGS = ["pt", "es", "en"] as const;
export type SupportedLang = (typeof SUPPORTED_LANGS)[number];

export function isSupportedLang(value: unknown): value is SupportedLang {
  return typeof value === "string" && (SUPPORTED_LANGS as readonly string[]).includes(value);
}

function readCookieLang(cookieHeader: string | undefined | null): SupportedLang | undefined {
  if (!cookieHeader) return undefined;
  for (const part of cookieHeader.split(";")) {
    const [name, ...rest] = part.trim().split("=");
    if (name === LANG_COOKIE_KEY) {
      const value = decodeURIComponent(rest.join("="));
      if (isSupportedLang(value)) return value;
    }
  }
  return undefined;
}

/** Client-side: stored preference from cookie first, then localStorage. */
export function getClientLang(): SupportedLang | undefined {
  if (typeof document === "undefined") return undefined;
  const fromCookie = readCookieLang(document.cookie);
  if (fromCookie) return fromCookie;
  try {
    const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
    return isSupportedLang(stored) ? stored : undefined;
  } catch {
    return undefined;
  }
}

/** Persist the choice so SSR and future visits render the same language. */
export function persistLang(lang: SupportedLang) {
  if (typeof document === "undefined") return;
  document.cookie = `${LANG_COOKIE_KEY}=${lang}; path=/; max-age=31536000; samesite=lax`;
  try {
    window.localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch {
    /* storage unavailable — language still applies for this session */
  }
}

export function parseLangFromCookieHeader(cookieHeader: string | undefined | null) {
  return readCookieLang(cookieHeader);
}