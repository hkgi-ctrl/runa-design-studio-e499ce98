import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Play, Sparkles, Palette, Globe, Layers, MousePointer, PenTool, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { SectionHeader } from "@/components/section-header";
import { CTASection } from "@/components/cta-section";
import runaMark from "@/assets/runa-mark.png.asset.json";

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
    icon: Palette,
    title: "Branding",
    description: "Identidades visuais memoráveis que contam a história da sua marca e a destacam da concorrência.",
  },
  {
    icon: Globe,
    title: "Web Design",
    description: "Websites premium, responsivos e otimizados para conversão, com foco em resultados mensuráveis.",
  },
  {
    icon: MousePointer,
    title: "UI/UX Design",
    description: "Interfaces intuitivas e experiências digitais que os seus utilizadores adoram usar.",
  },
  {
    icon: Video,
    title: "Motion Design",
    description: "Animações e microinterações que dão vida à sua marca e captam a atenção do público.",
  },
  {
    icon: PenTool,
    title: "Design Gráfico",
    description: "Materiais gráficos de alta qualidade para comunicação consistente em todos os pontos de contacto.",
  },
  {
    icon: Layers,
    title: "Design Systems",
    description: "Sistemas de design escaláveis que garantem consistência e eficiência nos seus projetos digitais.",
  },
];

const portfolio = [
  { category: "Branding", title: "Aura Skincare", description: "Identidade visual para marca de cosmética premium." },
  { category: "Web Design", title: "Vertex Arquitetura", description: "Website institucional para escritório de arquitetura." },
  { category: "UI/UX", title: "PayFlow App", description: "Design de interface para app de pagamentos." },
  { category: "Motion", title: "Nova Energia", description: "Campanha de motion graphics para empresa de energia." },
];

const processSteps = [
  { step: "01", title: "Descoberta", description: "Conhecemos o seu negócio, público-alvo e objetivos para definir a estratégia certa." },
  { step: "02", title: "Estratégia", description: "Desenvolvemos o conceito criativo e o plano de execução alinhado aos seus objetivos." },
  { step: "03", title: "Design", description: "Criamos as soluções visuais e experienciais com atenção a cada detalhe." },
  { step: "04", title: "Entrega", description: "Preparamos e implementamos todos os assets, garantindo qualidade e consistência." },
];

const testimonials = [
  { quote: "A RUNA transformou completamente a nossa presença digital. O novo site triplicou as conversões.", author: "Ana Rodrigues", role: "CEO, Aura Skincare" },
  { quote: "Profissionalismo criativo e atenção ao detalhe fora do comum. Recomendo sem hesitar.", author: "Miguel Costa", role: "Fundador, Vertex Arquitetura" },
  { quote: "A equipa entendeu exactamente o que precisávamos e superou todas as expectativas.", author: "Sofia Martins", role: "CMO, PayFlow" },
];

function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <PricingPreviewSection />
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

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.8754_0.105_193.25_/_0.12),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_oklch(0.5556_0.066_218.27_/_0.15),_transparent_50%)]" />
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-turquoise/5 blur-3xl" />

      <div ref={ref} className={`reveal relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8 ${isVisible ? "visible" : ""}`}>
        <div className="relative mx-auto mb-8 mt-5 inline-flex h-[127px] w-[127px] items-center justify-center sm:h-[169px] sm:w-[169px]">
          <div className="absolute inset-0 rounded-full bg-turquoise/20 blur-2xl animate-pulse-glow" />
          <div className="absolute -inset-4 rounded-full bg-[radial-gradient(circle_at_50%_50%,_oklch(0.8754_0.105_193.25_/_0.35),_transparent_70%)]" />
          <img
            src={runaMark.url}
            alt="RUNA Design"
            className="relative z-10 h-full w-full object-contain drop-shadow-[0_8px_30px_oklch(0.8754_0.105_193.25_/_0.55)]"
          />
        </div>
        <Badge variant="outline" className="mb-6 border-turquoise/30 bg-turquoise/10 px-4 py-1.5 text-xs font-semibold text-turquoise">
          <Sparkles className="mr-1.5 h-3 w-3" />
          Estúdio Criativo Premium
        </Badge>
        <h1 className="font-display text-5xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
          Design que <span className="gradient-text">impulsiona</span> negócios
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Criamos marcas, websites e experiências digitais premium que captam atenção, transmitem valor e convertem visitantes em clientes.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="group bg-turquoise text-graphite-deep hover:bg-turquoise/90"
          >
            <Link to="/contacto">
              Iniciar projeto
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-silver/20 text-foreground hover:bg-silver/10"
          >
            <Link to="/portfolio">Ver portfólio</Link>
          </Button>
        </div>
        <div className="mt-12 flex items-center justify-center gap-8 text-muted-foreground">
          <div className="text-center">
            <div className="font-display text-2xl font-bold text-foreground">120+</div>
            <div className="text-xs uppercase tracking-wider">Projetos</div>
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="text-center">
            <div className="font-display text-2xl font-bold text-foreground">8</div>
            <div className="text-xs uppercase tracking-wider">Anos</div>
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="text-center">
            <div className="font-display text-2xl font-bold text-foreground">50+</div>
            <div className="text-xs uppercase tracking-wider">Clientes</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Serviços"
          title="Soluções criativas sob medida"
          description="Oferecemos um leque completo de serviços de design para ajudar a sua marca a destacar-se e crescer."
        />
        <div className={`reveal ${isVisible ? "visible" : ""} mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3`}>
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group glass border-border/50 bg-card/50 transition-all duration-300 hover:-translate-y-1 hover:border-turquoise/30 hover:bg-card/80"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-turquoise/10 text-turquoise transition-colors group-hover:bg-turquoise group-hover:text-graphite-deep">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
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
                  {item.category}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.description}
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
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Testemunhos"
          title="O que dizem os nossos clientes"
          description="A satisfação dos nossos clientes é o melhor testemunho da qualidade do nosso trabalho."
        />
        <div className={`reveal ${isVisible ? "visible" : ""} mt-16 grid gap-6 lg:grid-cols-3`}>
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.author}
              className="glass border-border/50 bg-card/40"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <p className="text-base leading-relaxed text-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-turquoise to-petroleum" />
                  <div>
                    <div className="font-display text-sm font-semibold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingPreviewSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const plans = [
    { name: "Essencial", price: "1.200€", description: "Ideal para pequenas empresas e startups.", features: ["Logo e identidade básica", "Website one-page", "Design responsivo", "2 rondas de revisões"] },
    { name: "Profissional", price: "3.500€", description: "Para marcas que querem crescer com qualidade.", features: ["Branding completo", "Website multi-página", "UI/UX design", "Design system básico", "4 rondas de revisões"], popular: true },
    { name: "Enterprise", price: "Sob consulta", description: "Soluções completas para grandes projetos.", features: ["Estratégia de marca", "Website customizado", "Motion design", "Design system completo", "Suporte prioritário"] },
  ];

  return (
    <section className="py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Planos"
          title="Investimento transparente"
          description="Escolha o plano que melhor se adapta às necessidades do seu negócio."
        />
        <div className={`reveal ${isVisible ? "visible" : ""} mt-16 grid gap-6 lg:grid-cols-3`}>
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative glass border-border/50 ${plan.popular ? "border-turquoise/50 bg-card/60" : "bg-card/40"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-turquoise px-3 py-1 text-xs font-semibold text-graphite-deep">
                  Mais popular
                </div>
              )}
              <CardContent className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {plan.description}
                </p>
                <div className="mt-4">
                  <span className="font-display text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  {plan.price !== "Sob consulta" && (
                    <span className="text-muted-foreground"> / projeto</span>
                  )}
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-turquoise" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`mt-6 w-full ${plan.popular ? "bg-turquoise text-graphite-deep hover:bg-turquoise/90" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}
                >
                  <Link to="/contacto">Escolher plano</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQPreviewSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

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
                {faq.question}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline" className="border-silver/20 text-foreground hover:bg-silver/10">
            <Link to="/faq">Ver todas as perguntas</Link>
          </Button>
        </div>
      </div>
    </section>
  );
