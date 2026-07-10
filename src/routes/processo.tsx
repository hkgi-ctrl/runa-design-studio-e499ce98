import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/section-header";
import { CTASection } from "@/components/cta-section";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

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
    title: "Descoberta",
    description: "Começamos por conhecer profundamente o seu negócio, mercado, concorrência e público-alvo. Realizamos briefings, workshops e pesquisas para recolher todos os insights necessários.",
    details: ["Briefing estratégico", "Análise de mercado", "Definição de objetivos", "Mapeamento de público-alvo"],
  },
  {
    step: "02",
    title: "Estratégia",
    description: "Com base na informação recolhida, desenvolvemos o conceito criativo e o plano de execução. Definimos a direção visual, a mensagem e os entregáveis do projeto.",
    details: ["Conceito criativo", "Direção de arte", "Plano de entregáveis", "Cronograma detalhado"],
  },
  {
    step: "03",
    title: "Design",
    description: "É aqui que a magia acontece. Criamos as soluções visuais e experienciais com atenção meticulosa a cada detalhe, garantindo qualidade e consistência.",
    details: ["Design exploratório", "Prototipagem", "Revisões iterativas", "Refinamento final"],
  },
  {
    step: "04",
    title: "Entrega",
    description: "Preparamos todos os assets finais, documentação e apoio necessário para implementação. Garantimos que tudo esteja pronto para produção.",
    details: ["Ficheiros finais", "Documentação", "Suporte de implementação", "Handover completo"],
  },
];

function ProcessoPage() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.8754_0.105_193.25_/_0.1),_transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div ref={ref} className={`reveal ${isVisible ? "visible" : ""} max-w-3xl`}>
            <span className="mb-4 inline-block rounded-full border border-turquoise/30 bg-turquoise/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-turquoise">
              Processo
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Um método claro para <span className="gradient-text">resultados excecionais</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              O nosso processo foi desenhado para maximizar a colaboração, minimizar riscos e garantir entregas de alta qualidade em cada projeto.
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
                    <span className="font-display text-2xl font-bold text-turquoise">
                      {step.step}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-turquoise" />
                          {detail}
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

      <CTASection
        title="Pronto para começar?"
        description="O primeiro passo é simples: marcamos uma conversa para conhecer o seu projeto."
      />
    </>
  );
}
