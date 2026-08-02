import { Store, Building2, Rocket, Check, ArrowRight, ShieldCheck, Gem, Split, MessageSquare, TrendingUp } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useTranslation } from "react-i18next";
import smallBusinessImg from "@/assets/audience-small-business.jpg";
import mediumBusinessImg from "@/assets/audience-medium-business.jpg";
import entrepreneursImg from "@/assets/audience-entrepreneurs.jpg";

const audiences = [
  {
    icon: Store,
    image: smallBusinessImg,
    alt: "Pequeno café local com atendimento ao cliente",
    title: "Pequenas Empresas",
    description:
      "Ajudamos pequenas empresas a construir uma imagem profissional que transmite confiança desde o primeiro contacto com o cliente.",
    examples: ["Restaurantes", "Cafés", "Clínicas", "Salões de beleza", "Lojas locais", "Empresas de serviços"],
  },
  {
    icon: Building2,
    image: mediumBusinessImg,
    alt: "Equipa de empresa de média dimensão em reunião",
    title: "Médias Empresas",
    description:
      "Modernizamos marcas que cresceram e precisam de uma identidade visual alinhada com a sua nova realidade.",
    examples: ["Empresas em expansão", "Indústria", "Distribuição", "Escritórios", "Comércio", "Empresas B2B"],
  },
  {
    icon: Rocket,
    image: entrepreneursImg,
    alt: "Empreendedora a trabalhar no seu novo negócio",
    title: "Empreendedores",
    description:
      "Criamos marcas fortes para novos negócios que querem começar com uma identidade profissional e preparada para crescer.",
    examples: ["Startups", "Freelancers", "Consultores", "Negócios digitais", "Projetos pessoais"],
  },
];

const benefits = [
  { icon: ShieldCheck, label: "Transmite confiança" },
  { icon: Gem, label: "Valoriza a marca" },
  { icon: Split, label: "Diferencia da concorrência" },
  { icon: MessageSquare, label: "Melhora a comunicação" },
  { icon: TrendingUp, label: "Aumenta a perceção de valor" },
];

export function AudienceSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const { t } = useTranslation();

  return (
    <section className="py-28 sm:py-36" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Quem ajudamos a crescer"
          description="Criamos identidades visuais e soluções de design para empresas e profissionais que procuram transmitir mais confiança, destacar-se da concorrência e crescer de forma consistente."
        />

        <div className={`reveal ${isVisible ? "visible" : ""} mt-16 grid gap-6 lg:grid-cols-3`}>
          {audiences.map((item, index) => (
            <article
              key={item.title}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/50 bg-card/40 shadow-lg shadow-graphite-deep/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-turquoise/40 hover:shadow-xl hover:shadow-turquoise/10"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={t(item.alt)}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-turquoise/10 text-turquoise transition-colors group-hover:bg-turquoise group-hover:text-graphite-deep">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{t(item.title)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(item.description)}</p>
                <ul className="mt-6 grid grid-cols-2 gap-2">
                  {item.examples.map((example) => (
                    <li key={example} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-turquoise" />
                      {t(example)}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 rounded-3xl border border-border/50 bg-secondary/40 p-8 sm:p-10">
          <h3 className="text-center font-display text-2xl font-semibold text-foreground sm:text-3xl">
            {t("Porque investir numa identidade visual profissional?")}
          </h3>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {benefits.map((benefit) => (
              <li
                key={benefit.label}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border/40 bg-card/40 p-5 text-center"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-turquoise/10 text-turquoise">
                  <benefit.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium text-foreground">{t(benefit.label)}</span>
                <Check className="h-4 w-4 text-turquoise/60" aria-hidden="true" />
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 text-center">
          <p className="text-base text-muted-foreground">
            {t("A sua empresa pode ser a próxima a destacar-se no mercado.")}
          </p>
          <Button asChild size="lg" className="group mt-5 bg-turquoise text-graphite-deep hover:bg-turquoise/90">
            <Link to="/contacto">
              {t("Solicitar Orçamento")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}