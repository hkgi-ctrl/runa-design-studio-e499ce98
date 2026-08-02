import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/section-header";
import { CTASection } from "@/components/cta-section";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — RUNA Design" },
      { name: "description", content: "Respostas às perguntas mais frequentes sobre os serviços e processo da RUNA Design." },
      { property: "og:title", content: "FAQ — RUNA Design" },
      { property: "og:description", content: "Respostas às perguntas mais frequentes sobre os serviços e processo da RUNA Design." },
    ],
  }),
  component: FAQPage,
});

const faqs = [
  {
    question: "Quanto tempo demora um projeto de branding?",
    answer: "Um projeto de branding completo demora tipicamente entre 4 a 8 semanas, dependendo da complexidade, do número de revisões e da rapidez no feedback. Projetos mais simples podem ser concluídos em menos tempo.",
  },
  {
    question: "Qual é o processo de trabalho?",
    answer: "O nosso processo divide-se em quatro etapas: Pesquisa, Exploração com IA, Estratégia e Design Final. A IA acelera a exploração de ideias, mas a direção criativa, a análise e o refinamento final são sempre humanos.",
  },
  {
    question: "Trabalham com clientes internacionais?",
    answer: "Sim, trabalhamos com clientes de todo o mundo. As reuniões são feitas por videochamada, a comunicação é totalmente digital e entregamos todos os assets prontos para uso em qualquer mercado.",
  },
  {
    question: "Quantas revisões estão incluídas?",
    answer: "O número de revisões depende do plano escolhido. O plano Essencial inclui 2 rondas de revisões, o Profissional inclui 4, e o Enterprise inclui revisões ilimitadas. Sempre que possível, procuramos ser flexíveis.",
  },
  {
    question: "Como é feito o pagamento?",
    answer: "O pagamento é feito em tranches. Normalmente, solicitamos 50% no início do projeto e os restantes 50% na entrega final. Para projetos de maior dimensão, podemos definir um plano de pagamentos personalizado.",
  },
  {
    question: "Entregam apenas o design ou também desenvolvem o website?",
    answer: "O nosso foco principal é o design. No entanto, temos parceiros de desenvolvimento com quem colaboramos regularmente e podemos acompanhar a implementação para garantir fidelidade ao design aprovado.",
  },
  {
    question: "Posso pedir alterações após a entrega?",
    answer: "Sim, oferecemos um período de suporte pós-entrega para pequenos ajustes. Alterações de maior dimensão podem ser orçamentadas separadamente como um novo projeto ou manutenção.",
  },
  {
    question: "Como posso começar um projeto?",
    answer: "É simples: entre em contacto connosco através do formulário, email ou telefone. Marcaremos uma conversa inicial gratuita para conhecer o seu projeto e apresentar uma proposta personalizada.",
  },
];

function FAQPage() {
  const { t } = useTranslation();
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.5556_0.066_218.27_/_0.15),_transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-center mx-auto">
            <span className="mb-4 inline-block rounded-full border border-turquoise/30 bg-turquoise/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-turquoise">
              {t("FAQ")}
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              {t("Perguntas ")}<span className="gradient-text">{t("frequentes")}</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {t("Respostas claras para as questões mais comuns sobre os nossos serviços e forma de trabalhar.")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Tudo o que precisa saber"
            description="Se não encontrar a resposta que procura, não hesite em contactar-nos."
          />
          <div className="mt-12">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-2xl border border-border/50 bg-card/30 px-6 backdrop-blur-sm"
                >
                  <AccordionTrigger className="text-left font-display text-lg font-semibold text-foreground hover:no-underline">
                    {t(faq.question)}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                    {t(faq.answer)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <CTASection
        title="Ainda tem dúvidas?"
        description="Estamos aqui para ajudar. Entre em contacto e responderemos com todo o gosto."
      />
    </>
  );
}
