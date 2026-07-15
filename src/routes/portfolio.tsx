import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/section-header";
import { CTASection } from "@/components/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import runaGlass from "@/assets/runa-glass.png.asset.json";
import runaLogo from "@/assets/runa-logo.png.asset.json";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfólio — RUNA Design" },
      { name: "description", content: "Explore o portfólio da RUNA Design: projetos de branding, web design e experiências digitais premium." },
      { property: "og:title", content: "Portfólio — RUNA Design" },
      { property: "og:description", content: "Explore o portfólio da RUNA Design: projetos de branding, web design e experiências digitais premium." },
    ],
  }),
  component: PortfolioPage,
});

const projects = [
  { category: "Branding", title: "Aura Skincare", description: "Identidade visual completa para marca de cosmética premium portuguesa.", tags: ["Branding", "Packaging"] },
  { category: "Web Design", title: "Vertex Arquitetura", description: "Website institucional minimalista para escritório de arquitetura de referência.", tags: ["Web Design", "UI/UX"] },
  { category: "UI/UX", title: "PayFlow App", description: "Design de interface para aplicação de pagamentos mobile.", tags: ["UI/UX", "App Design"] },
  { category: "Motion", title: "Nova Energia", description: "Campanha de motion graphics para empresa de energias renováveis.", tags: ["Motion", "Video"] },
  { category: "Branding", title: "Mesa Real", description: "Branding e comunicação para restaurante de alta cozinha lisboeta.", tags: ["Branding", "Editorial"] },
  { category: "Web Design", title: "TechVision", description: "Website corporativo com design system completo para empresa de tecnologia.", tags: ["Web Design", "Design System"] },
];

function PortfolioPage() {
  const { t } = useTranslation();
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_oklch(0.5556_0.066_218.27_/_0.15),_transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="mb-4 inline-block rounded-full border border-turquoise/30 bg-turquoise/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-turquoise">
              {t("Portfólio")}
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              {t("Trabalhos que falam por ")}<span className="gradient-text">{t("si")}</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {t("Uma seleção dos projetos mais recentes onde aplicámos estratégia, criatividade e execução impecável.")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-20 grid gap-6 lg:grid-cols-2">
            <div className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card/40 shadow-2xl">
              <img src={runaGlass.url} alt="Aplicação do logo RUNA em vidro corporativo" className="w-full transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-graphite-deep/95 via-graphite-deep/60 to-transparent p-6">
                <Badge variant="outline" className="border-turquoise/30 bg-turquoise/10 text-turquoise">{t("Case study")}</Badge>
                <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">{t("RUNA — Sinalética corporativa")}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t("Aplicação da identidade em vidro e superfícies de interior.")}</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-3xl border border-border/50 bg-white shadow-2xl">
              <img src={runaLogo.url} alt="Logo principal RUNA Design" className="w-full transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-graphite-deep/95 via-graphite-deep/40 to-transparent p-6">
                <Badge variant="outline" className="border-turquoise/30 bg-turquoise/10 text-turquoise">{t("Branding")}</Badge>
                <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">{t("RUNA — Identidade principal")}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t("Sistema de logotipo com acabamento metálico premium.")}</p>
              </div>
            </div>
          </div>
          <SectionHeader
            title="Projetos selecionados"
            description="Cada projeto é uma história única de transformação visual e digital."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.title} className="group overflow-hidden glass border-border/50 bg-card/40 transition-all hover:-translate-y-1 hover:border-turquoise/30">
                <div className="aspect-[4/3] gradient-runa relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_oklch(0.8754_0.105_193.25_/_0.15),_transparent_60%)]" />
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="border-turquoise/30 bg-turquoise/10 text-turquoise">
                    {t(project.category)}
                  </Badge>
                  <h3 className="mt-3 font-display text-xl font-semibold text-foreground transition-colors group-hover:text-turquoise">
                    {t(project.title)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t(project.description)}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">
                        {t(tag)}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Quer ver o seu projeto aqui?"
        description="Vamos trabalhar juntos para criar algo verdadeiramente especial."
      />
    </>
  );
}
