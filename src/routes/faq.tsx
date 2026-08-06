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
    question: "Trabalham apenas com empresas em Portugal?",
    answer:
      "Não. A RUNA trabalha remotamente com clientes em qualquer lugar, adaptando cada projeto às necessidades do negócio.",
  },
  {
    question: "Quanto tempo demora um projeto?",
    answer:
      "Depende do serviço e da complexidade. Após analisarmos o seu pedido, enviamos um cronograma personalizado.",
  },
  {
    question: "Posso contratar apenas um serviço?",
    answer:
      "Sim. Pode contratar um serviço específico ou um projeto completo de branding, consoante as necessidades da sua empresa.",
  },
  {
    question: "A inteligência artificial substitui o trabalho do designer?",
    answer:
      "Não. A inteligência artificial é utilizada para acelerar a exploração de ideias e aumentar a eficiência do processo criativo. As decisões estratégicas, o refinamento e o resultado final são sempre conduzidos pela equipa da RUNA.",
  },
  {
    question: "Como posso pedir um orçamento?",
    answer:
      "Basta preencher o formulário de contacto. Analisaremos o seu projeto e responderemos o mais rapidamente possível.",
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
              {t("Ainda tem alguma ")}
              <span className="gradient-text">{t("dúvida?")}</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {t(
                "Reunimos as respostas às perguntas que mais recebemos antes do início de um projeto.",
              )}
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
                  <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground text-justify">
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
