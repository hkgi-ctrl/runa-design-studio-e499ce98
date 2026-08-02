import { Link } from "@tanstack/react-router";
import { ArrowRight, Store, Building2, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useTranslation } from "react-i18next";

const audiences = [
  { icon: Store, title: "Pequenas Empresas" },
  { icon: Building2, title: "Médias Empresas" },
  { icon: Rocket, title: "Empreendedores" },
];

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
        <div className={`reveal ${isVisible ? "visible" : ""} mt-12 grid gap-6 sm:grid-cols-3`}>
          {audiences.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col items-center rounded-2xl border border-border/50 bg-card/40 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-turquoise/30 hover:bg-card/60"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-turquoise/10 text-turquoise transition-colors group-hover:bg-turquoise group-hover:text-graphite-deep">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{t(item.title)}</h3>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="group bg-turquoise text-graphite-deep hover:bg-turquoise/90">
            <Link to="/quem-ajudamos">
              {t("Conhecer os públicos que ajudamos")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
