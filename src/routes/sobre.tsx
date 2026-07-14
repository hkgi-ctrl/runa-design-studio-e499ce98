import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/section-header";
import { CTASection } from "@/components/cta-section";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Lightbulb, Users } from "lucide-react";
import runaBrandBoard from "@/assets/runa-brand-board.png.asset.json";
import runaValues from "@/assets/runa-values.png.asset.json";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — RUNA Design" },
      { name: "description", content: "Conheça a RUNA Design, um estúdio criativo português especializado em branding e experiências digitais premium." },
      { property: "og:title", content: "Sobre — RUNA Design" },
      { property: "og:description", content: "Conheça a RUNA Design, um estúdio criativo português especializado em branding e experiências digitais premium." },
    ],
  }),
  component: SobrePage,
});

const values = [
  { icon: Target, title: "Propósito", description: "Criamos design com intenção, alinhado aos objetivos de negócio dos nossos clientes." },
  { icon: Heart, title: "Paixão", description: "Acreditamos que o melhor design nasce do cuidado e da dedicação a cada detalhe." },
  { icon: Lightbulb, title: "Inovação", description: "Exploramos novas ideias e tecnologias para entregar soluções diferenciadoras." },
  { icon: Users, title: "Colaboração", description: "Trabalhamos em parceria próxima com os nossos clientes em cada etapa do projeto." },
];

function SobrePage() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_oklch(0.8754_0.105_193.25_/_0.1),_transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div ref={ref} className={`reveal ${isVisible ? "visible" : ""} max-w-3xl`}>
            <span className="mb-4 inline-block rounded-full border border-turquoise/30 bg-turquoise/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-turquoise">
              Sobre nós
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Criamos marcas que <span className="gradient-text">resistem ao tempo</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A RUNA Design é um estúdio criativo português dedicado a transformar ideias em experiências visuais memoráveis. Combinamos estratégia, estética e tecnologia para criar marcas e produtos digitais que geram impacto real.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-20 overflow-hidden rounded-3xl border border-border/50 shadow-2xl shadow-turquoise/10">
            <img
              src={runaBrandBoard.url}
              alt="Sistema de identidade visual RUNA Design"
              className="w-full"
              loading="lazy"
            />
          </div>
          <div className="grid gap-12">
            <div>
              <h2 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                A nossa história
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Fundada em Lisboa, a RUNA Design nasceu da vontade de oferecer design de excelência a empresas que valorizam a qualidade e a originalidade. Ao longo dos anos, ajudámos dezenas de marcas nacionais e internacionais a encontrar a sua voz visual e a destacar-se nos seus mercados.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Acreditamos que o bom design é mais do que estética: é uma ferramenta estratégica que comunica valores, constrói confiança e impulsiona resultados.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Valores"
            title="O que nos guia"
            description="Princípios que definem a nossa forma de trabalhar e criar."
          />
          <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div className="overflow-hidden rounded-3xl border border-border/50">
              <img
                src={runaValues.url}
                alt="Valores da marca RUNA Design"
                className="w-full"
                loading="lazy"
              />
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
            {values.map((value, index) => (
              <Card key={value.title} className="glass border-border/50 bg-card/40">
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-turquoise/10 text-turquoise">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Quer conhecer-nos melhor?"
        description="Vamos conversar sobre o seu projeto e descobrir como podemos ajudá-lo a crescer."
      />
    </>
  );
}
