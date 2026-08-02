import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { setStoredLang, type SupportedLang } from "@/lib/i18n";

const LANGS: { code: SupportedLang; label: string }[] = [
  { code: "pt", label: "Português" },
  { code: "es", label: "Español" },
  { code: "en", label: "English" },
];

export function LanguageSwitcher({ variant = "compact" }: { variant?: "compact" | "full" }) {
  const { i18n, t } = useTranslation();
  const current = (i18n.resolvedLanguage || i18n.language || "pt").slice(0, 2).toUpperCase();

  const change = (code: SupportedLang) => {
    setStoredLang(code);
    void i18n.changeLanguage(code);
    if (typeof document !== "undefined") {
      document.documentElement.lang = code;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="gap-1.5 text-silver/80 hover:text-foreground"
          aria-label={t("Idioma")}
        >
          <Globe className="h-4 w-4" />
          <span className="text-xs font-semibold">{current}</span>
          {variant === "full" && <span className="ml-1 text-sm">{t("Idioma")}</span>}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[10rem]">
        {LANGS.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => change(l.code)}
            className={i18n.resolvedLanguage === l.code ? "font-semibold text-turquoise" : ""}
          >
            <span className="mr-2 text-xs font-mono">{l.code.toUpperCase()}</span>
            {l.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}