import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Play, Sparkles, RefreshCw, Package, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { SectionHeader } from "@/components/section-header";
import { CTASection } from "@/components/cta-section";
import { AudienceTeaser } from "@/components/audience-teaser";
import { WhyRunaSection } from "@/components/why-runa-section";
import { useTranslation } from "react-i18next";
import runaMark from "@/assets/runa-r-hero.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RUNA Design — Estúdio Criativo Premium em Portugal" },
      { name: "description", content: "RUNA Design cria marcas, websites e experiências digitais premium que elevam negócios e convertem visitantes em clientes." },
      { property: "og:title", content: "RUNA Design — Estúdio Criativo Premium em Portugal" },
      { property: "og:description", content: "RUNA Design cria marcas, websites e experiências digitais premium que elevam negócios e convertem visitantes em clientes." },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    icon: Sparkles,
    title: "Identidade Visual",
    description: "Marcas memoráveis, consistentes e profissionais.",
  },
  {
    icon: RefreshCw,
    title: "Modernização de Marca",
    description: "Atualização visual para empresas em evolução.",
  },
  {
    icon: Package,
    title: "Design para Produtos e Serviços",
    description: "Peças visuais que aumentam a perceção de valor.",
  },
  {
    icon: Megaphone,
    title: "Design para Redes Sociais",
    description: "Conteúdo visual estratégico para autoridade e engajamento.",
  },
];

const portfolio = [
  { category: "Branding", title: "Aura Skincare", description: "Identidade visual para marca de cosmética premium." },
  { category: "Web Design", title: "Vertex Arquitetura", description: "Website institucional para escritório de arquitetura." },
  { category: "UI/UX", title: "PayFlow App", description: "Design de interface para app de pagamentos." },
  { category: "Motion", title: "Nova Energia", description: "Campanha de motion graphics para empresa de energia." },
];

const processSteps = [
  { step: "01", title: "Pesquisa", description: "Imersão no negócio, mercado e público para encontrar o território criativo certo." },
  { step: "02", title: "Exploração com IA", description: "Usamos inteligência artificial para gerar e testar várias direções visuais e otimizar o tempo de entrega." },
  { step: "03", title: "Estratégia", description: "Curadoria humana: escolhemos e fundamentamos o caminho com maior impacto." },
  { step: "04", title: "Design Final", description: "Refinamento artesanal, pixel a pixel, até à entrega premium." },
];

function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AudienceTeaser />
      <PortfolioSection />
      <ProcessSection />
      <WhyRunaSection />
      <FAQPreviewSection />
      <CTASection
        title="Pronto para elevar a sua marca?"
        description="Vamos criar algo extraordinário juntos. Fale connosco e descubra como podemos ajudar o seu negócio a crescer."
      />
    </>
  );
}

function HeroSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const { t } = useTranslation();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.8754_0.105_193.25_/_0.12),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_oklch(0.5556_0.066_218.27_/_0.15),_transparent_50%)]" />
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-turquoise/5 blur-3xl" />

      <div ref={ref} className={`reveal relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8 ${isVisible ? "visible" : ""}`}>
        <div className="mx-auto mb-8 mt-5 flex items-center justify-center">
          <img
            src={runaMark.url}
            alt="RUNA Design"
            className="h-[150px] w-auto object-contain drop-shadow-[0_10px_28px_oklch(0.2_0.02_240_/_0.5)] sm:h-[190px]"
          />
        </div>
        <h1 className="font-display text-5xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
          {t("Design estratégico que ")}<span className="gradient-text">{t("impulsiona")}</span>{t(" negócios")}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          {t("Criamos identidades visuais, conteúdos e experiências de marca para pequenas e médias empresas que querem destacar-se, transmitir confiança e crescer de forma consistente.")}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="group bg-turquoise text-graphite-deep hover:bg-turquoise/90"
          >
            <Link to="/contacto">
              {t("Iniciar projeto")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-silver/20 text-foreground hover:bg-silver/10"
          >
            <Link to="/portfolio">{t("Ver portfólio")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const { t } = useTranslation();

  return (
    <section className="py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Serviços"
          title="Soluções criativas sob medida"
          description="Oferecemos um leque completo de serviços de design para ajudar a sua marca a destacar-se e crescer."
        />
        <div className={`reveal ${isVisible ? "visible" : ""} mt-16 grid gap-6 sm:grid-cols-2`}>
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group glass min-h-[220px] border-border/50 bg-card/50 transition-all duration-300 hover:-translate-y-1 hover:border-turquoise/30 hover:bg-card/80"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-turquoise/10 text-turquoise transition-colors group-hover:bg-turquoise group-hover:text-graphite-deep">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                  {t(service.title)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t(service.description)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const { t } = useTranslation();

  return (
    <section className="py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Portfólio"
          title="Trabalhos selecionados"
          description="Uma amostra dos projetos que tivemos o privilégio de criar para clientes ambiciosos."
        />
        <div className={`reveal ${isVisible ? "visible" : ""} mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4`}>
          {portfolio.map((item, index) => (
            <Link
              key={item.title}
              to="/portfolio"
              className="group relative overflow-hidden rounded-2xl bg-card aspect-[4/5]"
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              <div className="absolute inset-0 gradient-runa opacity-60 transition-opacity group-hover:opacity-80" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_oklch(0.8754_0.105_193.25_/_0.15),_transparent_60%)]" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-turquoise">
                  {t(item.category)}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
                  {t(item.title)}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t(item.description)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const { t } = useTranslation();

  return (
    <section className="py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Processo"
          title="Como trabalhamos"
          description="Um processo estruturado e colaborativo que garante resultados excepcionais em cada projeto."
        />
        <div className={`reveal ${isVisible ? "visible" : ""} mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4`}>
          {processSteps.map((step, index) => (
            <div
              key={step.step}
              className="relative rounded-2xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="font-display text-5xl font-bold text-turquoise/20">
                {step.step}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                {t(step.title)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t(step.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQPreviewSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const { t } = useTranslation();

  const faqs = [
    { question: "Quanto tempo demora um projeto de branding?", answer: "Um projeto de branding completo demora tipicamente entre 4 a 8 semanas, dependendo da complexidade e do número de revisões." },
    { question: "Qual é o processo de trabalho?", answer: "Começamos com uma fase de descoberta, seguida de estratégia, design e entrega. Mantemos comunicação próxima durante todo o processo." },
    { question: "Trabalham com clientes internacionais?", answer: "Sim, trabalhamos com clientes de todo o mundo. As reuniões são feitas por videochamada e a comunicação é totalmente digital." },
  ];

  return (
    <section className="py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Perguntas frequentes"
          description="Respostas às questões mais comuns sobre como trabalhamos."
        />
        <div className={`reveal ${isVisible ? "visible" : ""} mt-12 space-y-4`}>
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-border/50 bg-card/30 p-6"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="font-display text-lg font-semibold text-foreground">
                {t(faq.question)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t(faq.answer)}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline" className="border-silver/20 text-foreground hover:bg-silver/10">
            <Link to="/faq">{t("Ver todas as perguntas")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
