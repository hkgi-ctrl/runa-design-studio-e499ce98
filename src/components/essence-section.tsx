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
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                {t(
                  "Na RUNA acreditamos que uma marca forte nasce da combinação entre estratégia, criatividade e tecnologia.",
                )}
              </p>
              <p>
                {t(
                  "Cada projeto é desenvolvido para ajudar pequenas e médias empresas a comunicar com mais clareza, transmitir confiança e destacar-se num mercado cada vez mais competitivo.",
                )}
              </p>
              <p>
                {t(
                  "Utilizamos inteligência artificial para acelerar a exploração criativa e aumentar a eficiência do processo, mantendo sempre o pensamento estratégico, a criatividade humana e o cuidado em cada detalhe.",
                )}
              </p>
              <p>
                {t(
                  "Mais do que criar identidades visuais, desenvolvemos marcas preparadas para crescer e manter consistência em todos os pontos de contacto com os seus clientes.",
                )}
              </p>
            </div>
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

          <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/30">
            <img
              src={essenceImage}
              alt={t("Ambiente criativo RUNA Design")}
              className="w-full object-cover"
              loading="lazy"
              width={1280}
              height={1024}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-background/20 via-transparent to-turquoise/5" />
          </div>
        </div>
      </div>
    </section>
  );
}
