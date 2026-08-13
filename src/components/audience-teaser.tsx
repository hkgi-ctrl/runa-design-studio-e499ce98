import { Link } from "@tanstack/react-router";
import { RunaIcon } from "@/components/icons/RunaIcons";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useTranslation } from "react-i18next";

export function AudienceTeaser() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const { t } = useTranslation();

  return (
    <section className="py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Quem ajudamos a crescer"
          description="Especializados em pequenas e médias empresas, mas preparados para criar marcas que crescem em qualquer mercado."
        />
        <div className={`reveal ${isVisible ? "visible" : ""} mt-12 text-center`}>
          <Button asChild size="lg" className="group bg-turquoise text-graphite-deep hover:bg-turquoise/90">
            <Link to="/sobre">
              {t("Conhecer os públicos que ajudamos")}
              <RunaIcon name="send" className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
