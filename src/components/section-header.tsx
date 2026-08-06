import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useTranslation } from "react-i18next";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const { t } = useTranslation();

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "visible" : ""} ${
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"
      }`}
    >
      {eyebrow && (
        <span className="mb-3 inline-block rounded-full border border-turquoise/30 bg-turquoise/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-turquoise">
          {t(eyebrow)}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
        {t(title)}
      </h2>
      {description && (
        <p className={`mt-4 text-lg leading-relaxed text-muted-foreground ${align === "center" ? "text-center" : ""}`}>
          {t(description)}
        </p>
      )}
    </div>
  );
}
