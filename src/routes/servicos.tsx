import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/section-header";
import { CTASection } from "@/components/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, RefreshCw, Package, Megaphone, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import runaSymbol from "@/assets/runa-symbol.png.asset.json";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — RUNA Design" },
      { name: "description", content: "Descubra os serviços da RUNA Design: branding, web design, UI/UX, motion design e design systems premium." },
      { property: "og:title", content: "Serviços — RUNA Design" },
      { property: "og:description", content: "Descubra os serviços da RUNA Design: branding, web design, UI/UX, motion design e design systems premium." },
    ],
  }),
  component: ServicosPage,
});

const services = [
  {
    icon: Sparkles,
    title: "Identidade Visual",
    description: "Criamos marcas memoráveis, consistentes e profissionais, com personalidade própria e alinhadas aos objetivos do seu negócio.",
    features: ["Estratégia de marca", "Design de logotipo", "Identidade visual", "Diretrizes de marca"],
  },
  {
    icon: RefreshCw,
    title: "Modernização de Marca",
    description: "Atualizamos a imagem da sua empresa sem perder a essência, preparando-a para crescer e acompanhar a evolução do mercado.",
    features: ["Revisão de posicionamento", "Redesign de logotipo", "Atualização visual", "Relançamento de marca"],
  },
  {
    icon: Package,
    title: "Design para Produtos e Serviços",
    description: "Desenvolvemos peças visuais que aumentam a perceção de valor e comunicam com clareza os benefícios do que oferece.",
    features: ["Packaging", "Materiais promocionais", "Apresentações", "Catálogos e brochuras"],
  },
  {
    icon: Megaphone,
    title: "Design para Redes Sociais",
    description: "Produzimos conteúdo visual estratégico para redes sociais que reforça a autoridade da marca e gera engajamento real.",
    features: ["Templates para feed", "Stories e reels", "Campanhas paid", "Identidade digital"],
  },
];

function ServicosPage() {
  const { t } = useTranslation();
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.8754_0.105_193.25_/_0.1),_transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div className="max-w-3xl">
            <span className="mb-4 inline-block rounded-full border border-turquoise/30 bg-turquoise/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-turquoise">
              {t("Serviços")}
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              {t("Soluções criativas para ")}<span className="gradient-text">{t("marcas ambiciosas")}</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {t("Oferecemos um leque completo de serviços de design para ajudar a sua empresa a comunicar com clareza, beleza e impacto.")}
            </p>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -inset-6 rounded-3xl bg-turquoise/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-3xl border border-border/50 shadow-2xl">
                <img src={runaSymbol.url} alt="Símbolo RUNA Design" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="O que fazemos"
            description="Cada serviço é adaptado às necessidades específicas do seu negócio."
          />
          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <Card key={service.title} className="group glass border-border/50 bg-card/40 transition-all hover:-translate-y-1 hover:border-turquoise/30">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-turquoise/10 text-turquoise transition-colors group-hover:bg-turquoise group-hover:text-graphite-deep">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <Link
                      to="/contacto"
                      className="flex items-center gap-1 text-sm font-medium text-turquoise opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      {t("Saber mais")} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">
                    {t(service.title)}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {t(service.description)}
                  </p>
                  <ul className="mt-6 grid grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-turquoise" />
                        {t(feature)}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Vamos conversar sobre o seu projeto"
        description="Escolha o serviço que precisa e fale connosco para receber uma proposta personalizada."
      />
    </>
  );
}
