import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useTranslation } from "react-i18next";
import essenceImage from "@/assets/logo-agenda.png.asset.json";

export function EssenceSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const { t } = useTranslation();

  return (
    <section className="py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`reveal ${isVisible ? "visible" : ""} grid gap-12 lg:grid-cols-2 lg:items-center`}
        >
          <div className="flex flex-col justify-center">
            <h2 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              {t("Transformamos estratégia em marcas que inspiram confiança.")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t(
                "Na RUNA, cada marca nasce da combinação entre estratégia, criatividade humana e inteligência artificial como aliada. Desenvolvemos identidades visuais estratégicas, preparadas para crescer e manter consistência em todos os pontos de contacto.",
              )}
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="group bg-turquoise text-graphite-deep hover:bg-turquoise/90"
              >
                <Link to="/sobre">
                  {t("Conheça a RUNA")}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="essence-image-wrapper relative rounded-3xl border border-border/50 bg-card/30">
            <img
              src={essenceImage.url}
              alt={t("Ambiente criativo RUNA Design")}
              className="essence-mockup-image w-full object-cover"
              loading="lazy"
              width={1536}
              height={1024}
            />
            <div className="pointer-events-none absolute inset-0 z-[3] rounded-3xl bg-gradient-to-tr from-background/20 via-transparent to-turquoise/5" />
          </div>
        </div>
      </div>
    </section>
  );
}
