import { createIsomorphicFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";
import { parseLangFromCookieHeader, getClientLang, type SupportedLang } from "./lang";

/**
 * Resolves the language for the current render. On the server it reads the
 * `runa-lang` cookie so the SSR markup already matches what the browser will
 * render, which prevents hydration mismatches.
 */
export const resolveLang = createIsomorphicFn()
  .server((): SupportedLang => parseLangFromCookieHeader(getRequestHeader("cookie")) ?? "pt")
  .client((): SupportedLang => getClientLang() ?? "pt");