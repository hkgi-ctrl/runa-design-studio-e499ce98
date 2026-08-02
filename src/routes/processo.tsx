import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/section-header";
import { CTASection } from "@/components/cta-section";
import { Search, Sparkles, Compass, PenTool, BrainCircuit, UserCheck } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/processo")({
  head: () => ({
    meta: [
      { title: "Processo — RUNA Design" },
      { name: "description", content: "Conheça o processo de trabalho da RUNA Design: descoberta, estratégia, design e entrega." },
      { property: "og:title", content: "Processo — RUNA Design" },
      { property: "og:description", content: "Conheça o processo de trabalho da RUNA Design: descoberta, estratégia, design e entrega." },
    ],
  }),
  component: ProcessoPage,
});

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Pesquisa",
    description: "Tudo começa com escuta e análise. Estudamos o seu negócio, mercado, concorrência e público-alvo para definir o território criativo onde a marca vai competir.",
    details: ["Briefing estratégico", "Análise de mercado e concorrência", "Mapeamento de público-alvo", "Definição de objetivos"],
  },
  {
    step: "02",
    icon: Sparkles,
    title: "Exploração com IA",
    description: "Com a direção definida, usamos inteligência artificial para gerar e testar centenas de direções visuais em tempo recorde — ampliando o campo de possibilidades muito além do habitual.",
    details: ["Geração de conceitos assistida por IA", "Moodboards e variações rápidas", "Testes de forma, cor e tipografia", "Iteração em larga escala"],
  },
  {
    step: "03",
    icon: Compass,
    title: "Estratégia",
    description: "Aqui entra a curadoria humana. Analisamos o que a exploração revelou, descartamos o óbvio e fundamentamos a direção com maior potencial de diferenciação e conversão.",
    details: ["Curadoria e crítica criativa", "Direção de arte definida", "Narrativa e posicionamento", "Plano de entregáveis"],
  },
  {
    step: "04",
    icon: PenTool,
    title: "Design Final",
    description: "O refinamento é sempre humano. Redesenhamos, ajustamos e polimos cada detalhe até ao nível premium, entregando ficheiros, documentação e apoio à implementação.",
    details: ["Refinamento manual pixel a pixel", "Consistência em todos os formatos", "Manual de marca e ficheiros finais", "Suporte de implementação"],
  },
];

const differentiators = [
  {
    icon: BrainCircuit,
    title: "IA como ferramenta estratégica",
    description: "A inteligência artificial acelera a exploração de ideias e multiplica as possibilidades criativas em cada projeto.",
  },
  {
    icon: UserCheck,
    title: "Refinamento sempre humano",
    description: "Direção criativa, análise e refinamento final permanecem nas mãos da nossa equipa. Nada é entregue sem curadoria humana.",
  },
];

function ProcessoPage() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const { t } = useTranslation();

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.8754_0.105_193.25_/_0.1),_transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div ref={ref} className={`reveal ${isVisible ? "visible" : ""} max-w-3xl`}>
            <span className="mb-4 inline-block rounded-full border border-turquoise/30 bg-turquoise/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-turquoise">
              {t("Processo")}
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              {t("Um método claro para ")}<span className="gradient-text">{t("resultados excecionais")}</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {t("O nosso processo foi desenhado para maximizar a colaboração, minimizar riscos e garantir entregas de alta qualidade em cada projeto.")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="As quatro etapas do nosso processo"
            description="De ideia a realidade, acompanhá-lo em cada passo do caminho."
          />
          <div className="mt-16 space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="relative rounded-2xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-turquoise/10">
                    <step.icon className="h-7 w-7 text-turquoise" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <span className="font-display text-sm font-bold tracking-widest text-turquoise/60">
                      {step.step}
                    </span>
                    <h3 className="font-display text-2xl font-semibold text-foreground">
                      {t(step.title)}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                      {t(step.description)}
                    </p>
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-turquoise" />
                          {t(detail)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute -bottom-8 left-1/2 h-8 w-px bg-gradient-to-b from-turquoise/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Diferencial competitivo"
            title="IA para explorar. Humanos para decidir."
            description="Somos um estúdio criativo premium que usa inteligência artificial para acelerar a exploração de ideias, mantendo o refinamento humano em todas as entregas."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-turquoise/20 bg-card/30 p-8 backdrop-blur-sm"
              >
                <item.icon className="h-8 w-8 text-turquoise" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                  {t(item.title)}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {t(item.description)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Pronto para começar?"
        description="O primeiro passo é simples: marcamos uma conversa para conhecer o seu projeto."
      />
    </>
  );
}
