import {
  IconAIBrain,
  IconChatTransparent,
  IconGraphResult,
  IconPalette,
  IconPhoneChannel,
  IconTarget,
  type RunaSvgProps,
} from "@/components/icons/RunaIcons";
import type { ComponentType } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/section-header";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const reasons: Array<{ icon: ComponentType<RunaSvgProps>; title: string; description: string }> = [
  {
    icon: IconTarget,
    title: "Design Estratégico",
    description:
      "Cada projeto começa por compreender o seu negócio, os seus objetivos e o mercado onde atua.",
  },
  {
    icon: IconAIBrain,
    title: "Inteligência Artificial como aliada",
    description:
      "Utilizamos inteligência artificial para explorar mais possibilidades criativas, mantendo todas as decisões estratégicas e o refinamento final sob supervisão humana.",
  },
  {
    icon: IconPalette,
    title: "Identidades pensadas para o mundo real",
    description:
      "Criamos marcas preparadas para websites, redes sociais, embalagens, publicidade e materiais impressos.",
  },
  {
    icon: IconChatTransparent,
    title: "Processo transparente",
    description:
      "Mantemos uma comunicação clara durante todo o projeto, envolvendo o cliente em cada etapa importante.",
  },
  {
    icon: IconGraphResult,
    title: "Foco em resultados",
    description:
      "Cada decisão de design procura fortalecer a perceção da marca, aumentar a credibilidade e gerar mais valor para o negócio.",
  },
  {
    icon: IconPhoneChannel,
    title: "Preparado para todos os canais",
    description:
      "Desenvolvemos marcas com visão de longo prazo, preparadas para crescer e manter consistência em todos os pontos de contacto com o cliente.",
  },
];

export function WhyRunaSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: bandRef, isVisible: bandVisible } = useScrollReveal<HTMLDivElement>();
  const { t } = useTranslation();

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Diferenciais"
          title="Porque escolher a RUNA?"
          description="Mais do que criar um logótipo, desenvolvemos identidades visuais estratégicas que ajudam empresas a transmitir confiança, destacar-se da concorrência e crescer com consistência."
        />

        <div
          ref={ref}
          className={`reveal ${isVisible ? "visible" : ""} mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3`}
        >
          {reasons.map((reason, index) => {
            const ReasonIcon = reason.icon;
            return (
            <Card
              key={reason.title}
              className="group glass h-full border-border/50 bg-card/50 transition-all duration-300 hover:-translate-y-1 hover:border-turquoise/30 hover:bg-card/80"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <CardContent className="p-8">
                <div className="runa-icon-wrap">
                  <ReasonIcon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {t(reason.title)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t(reason.description)}
                </p>
              </CardContent>
            </Card>
            );
          })}
        </div>

        <div
          ref={bandRef}
          className={`reveal ${bandVisible ? "visible" : ""} mt-16 rounded-2xl border border-turquoise/20 bg-card/30 px-6 py-10 text-center backdrop-blur-sm sm:px-12`}
        >
          <p className="mx-auto max-w-3xl font-display text-lg leading-relaxed text-foreground sm:text-xl">
            <Trans
              i18nKey="Design não é decoração. É a ferramenta que transforma <strong>percepção</strong> em <strong>confiança</strong>, e <strong>confiança</strong> em <strong>valor</strong>."
              components={{ strong: <strong className="font-bold" /> }}
            />
          </p>
        </div>

      </div>
    </section>
  );
}
