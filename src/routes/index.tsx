import { createFileRoute, Link } from "@tanstack/react-router";
import {
  IconIdentidade,
  IconModernizacao,
  IconProdutos,
  IconRedes,
  RunaIcon,
} from "@/components/icons/RunaIcons";
import { useEffect, useMemo, useRef, type CSSProperties } from "react";
import type { ComponentType } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { SectionHeader } from "@/components/section-header";
import { CTASection } from "@/components/cta-section";
import { AudienceTeaser } from "@/components/audience-teaser";
import { WhyRunaSection } from "@/components/why-runa-section";
import { EssenceSection } from "@/components/essence-section";
import { useTranslation } from "react-i18next";
import rVidro from "@/assets/R_Vidro_alpha.webp.asset.json";
import fundoNeural from "@/assets/fundo_neural.webp.asset.json";
import rIcone from "@/assets/R_icone_isolado.png.asset.json";
import jaciraLogo from "@/assets/jacira-1.png.asset.json";
import petitoMain from "@/assets/petito-main.png.asset.json";
import auraLogo from "@/assets/aura-1.png.asset.json";
import norteLogo from "@/assets/norte-1.png.asset.json";

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

const services: Array<{ icon: ComponentType; title: string; description: string }> = [
  {
    icon: IconIdentidade,
    title: "Identidade Visual",
    description: "Marcas memoráveis, consistentes e profissionais.",
  },
  {
    icon: IconModernizacao,
    title: "Modernização de Marca",
    description: "Atualização visual para empresas em evolução.",
  },
  {
    icon: IconProdutos,
    title: "Design para Produtos e Serviços",
    description: "Peças visuais que aumentam a perceção de valor.",
  },
  {
    icon: IconRedes,
    title: "Design para Redes Sociais",
    description: "Conteúdo visual estratégico para autoridade e engajamento.",
  },
];

const portfolio = [
  {
    title: "JACIRA ALVES",
    description: "De produto artesanal para marca desejada, com ticket médio elevado.",
    seal: "CLIENTE REAL" as const,
    tags: ["Branding", "Identidade Visual", "Social Media"],
    image: jaciraLogo.url,
  },
  {
    title: "PETITO",
    description: "Rebranding afetivo que transforma biscoitos naturais em gesto de cuidado.",
    seal: "CLIENTE REAL" as const,
    tags: ["Rebranding", "Identidade Visual", "Social Media"],
    image: petitoMain.url,
  },
  {
    title: "AURA",
    description: "Branding minimalista que posiciona uma marca de skincare como luxo silencioso.",
    seal: "ESTUDO DE CASO" as const,
    tags: ["Branding", "Packaging"],
    image: auraLogo.url,
  },
  {
    title: "NORTE",
    description: "Marca de aventura que vende a sensação de explorar o inexplorado.",
    seal: "ESTUDO DE CASO" as const,
    tags: ["Branding", "Identidade Visual"],
    image: norteLogo.url,
  },
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
      <ProcessSection />
      <EssenceSection />
      <PortfolioSection />
      <WhyRunaSection />
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
    <section className="hero-section flex min-h-screen items-center justify-center pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.8754_0.105_193.25_/_0.12),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_oklch(0.5556_0.066_218.27_/_0.15),_transparent_50%)]" />

      {/* Neural backdrop — z-index -2, 40% opacity, slow parallax drift */}
      <div className="absolute inset-0 z-[-2] overflow-hidden">
        <img
          src={fundoNeural.url}
          alt=""
          aria-hidden
          className="hero-neural absolute inset-0 h-full w-full object-cover opacity-40"
        />
      </div>

      {/* Glass R — behind the title (z-index -1), shifted right, 75% opacity, soft blur, slow 25s rotation */}
      <div className="hero-r-stage">
        <div className="hero-r-scale">
          <div className="hero-r-spin">
            <img
              src={rVidro.url}
              alt=""
              aria-hidden
              className="h-[300px] w-auto opacity-75 blur-[0.5px] sm:h-[560px] lg:h-[720px] max-md:absolute max-md:left-1/2 max-md:top-1/2 max-md:h-auto max-md:w-[90vw] max-md:-translate-x-1/2 max-md:-translate-y-1/2 max-md:max-w-none max-md:opacity-15"
            />
          </div>
        </div>
      </div>

      {/* Dark radial scrim behind the headline for legibility */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[75vh] w-[95vw] max-w-[1400px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0.45)_45%,_transparent_72%)]" />

      <HeroParticles />

      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-turquoise/5 blur-3xl" />

      <div ref={ref} className={`reveal relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8 ${isVisible ? "visible" : ""}`}>
        <h1
          className="font-display text-5xl font-bold leading-[1.1] tracking-tight text-[#FFFFFF] [text-shadow:0_0_20px_black] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {t("Design estratégico que ")}
          {t("impulsiona")}
          {t(" negócios")}
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
              <RunaIcon name="send" className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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

function HeroParticles() {
  // Deterministic pseudo-random layout so SSR and hydration match.
  const particles = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        left: `${(3 + ((i * 41.7) % 94)).toFixed(2)}%`,
        top: `${(12 + ((i * 29.3) % 76)).toFixed(2)}%`,
        size: 2 + (i % 3) * 1.5,
        duration: (7 + ((i * 1.3) % 6)).toFixed(2),
        delay: ((i * 0.9) % 7).toFixed(2),
        drift: `${(i % 2 === 0 ? 1 : -1) * (10 + ((i * 7) % 25))}px`,
        peak: (0.35 + ((i * 13) % 40) / 100).toFixed(2),
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {particles.map((p, i) => (
        <span
          key={i}
          className="hero-particle absolute rounded-full bg-cyan"
          style={
            {
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
              boxShadow: "0 0 8px rgb(0 229 255 / 0.6)",
              "--dx": p.drift,
              "--peak": p.peak,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}

function ServicesSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const { t } = useTranslation();

  return (
    <section className="services-bleed py-24 sm:py-32" ref={ref}>
      <img
        src={fundoNeural.url}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.12]"
      />
      <div className="relative z-[4] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Serviços"
          title="Soluções criativas sob medida"
          description="Oferecemos um leque completo de serviços de design para ajudar a sua marca a destacar-se e crescer."
        />
        <div className={`reveal ${isVisible ? "visible" : ""} mt-16 grid gap-6 sm:grid-cols-2`}>
          {services.map((service) => {
            const ServiceIcon = service.icon;
            return (
            <div key={service.title} className="bento-card">
              <img
                src={rIcone.url}
                alt=""
                aria-hidden
                className="pointer-events-none absolute bottom-4 right-4 h-20 w-20 -rotate-12 select-none opacity-[0.06]"
              />
              <div className="bento-icon">
                <ServiceIcon />
              </div>
              <h3 className="mt-7 font-display text-2xl font-semibold text-foreground">
                {t(service.title)}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {t(service.description)}
              </p>
            </div>
            );
          })}
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
        />
        <div className={`reveal ${isVisible ? "visible" : ""} mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4`}>
          {portfolio.map((item, index) => (
            <Link
              key={item.title}
              to="/portfolio"
              className="group block"
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              <Card className="h-full overflow-hidden glass border-border/50 bg-card/40 transition-all hover:-translate-y-1 hover:border-turquoise/30">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={t(item.title)}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="pointer-events-none absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-[10px] uppercase tracking-[1px] text-white opacity-70 backdrop-blur-md">
                    {item.seal === "CLIENTE REAL" && (
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#00FF88]" />
                    )}
                    {t(item.seal)}
                  </span>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-display text-lg font-semibold text-foreground transition-colors group-hover:text-turquoise">
                    {t(item.title)}
                  </h3>
                  <p className="portfolio-card-description mt-2 text-sm text-muted-foreground">
                    {t(item.description)}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">
                        {t(tag)}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
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
  const stepsRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Scroll-driven progress: rail fill + traveling particle + per-step number fill.
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const container = stepsRef.current;
      if (!container) return;
      const vh = window.innerHeight;
      const rect = container.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (vh * 0.55 - rect.top) / rect.height));
      container.style.setProperty("--rail-progress", progress.toFixed(4));
      for (const el of stepRefs.current) {
        if (!el) continue;
        const r = el.getBoundingClientRect();
        const fill = Math.min(1, Math.max(0, (vh * 0.78 - r.top) / (r.height * 0.85)));
        el.style.setProperty("--fill", fill.toFixed(4));
      }
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative py-24 sm:py-32">
      <img
        src={fundoNeural.url}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.08]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          {/* Sticky intro column */}
          <div ref={ref} className={`reveal ${isVisible ? "visible" : ""} lg:sticky lg:top-28 lg:self-start`}>
            <span className="mb-3 inline-block rounded-full border border-turquoise/30 bg-turquoise/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-turquoise">
              {t("Processo")}
            </span>
            <h2 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              {t("Como trabalhamos")}
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">
              {t("Um processo estruturado e colaborativo que garante resultados excepcionais em cada projeto.")}
            </p>
            <Link
              to="/processo"
              className="group mt-8 inline-flex items-center text-sm font-semibold text-turquoise transition-colors hover:text-cyan"
            >
              {t("Conhecer o processo")}
              <RunaIcon name="send" className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Scrolling steps with rail + traveling particle */}
          <div ref={stepsRef} className="process-steps">
            <div className="process-rail" aria-hidden>
              <div className="process-rail-fill" />
              <span className="process-rail-particle" />
            </div>
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                ref={(el) => {
                  stepRefs.current[index] = el;
                }}
              >
                <div className="process-number">
                  <span className="process-number-outline">{step.step}</span>
                  <span className="process-number-fill" aria-hidden>
                    {step.step}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">
                  {t(step.title)}
                </h3>
                <p className="mt-3 max-w-lg text-base leading-relaxed text-muted-foreground">
                  {t(step.description)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
