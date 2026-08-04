import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { CTASection } from "@/components/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import auraLogo from "@/assets/aura-1.png.asset.json";
import auraTote from "@/assets/aura-2-2.png.asset.json";
import auraSerum from "@/assets/aura-3.png.asset.json";
import auraCard from "@/assets/aura-4.png.asset.json";
import auraBox from "@/assets/aura-5.png.asset.json";
import petitoMain from "@/assets/petito-main.png.asset.json";
import petitoPackaging from "@/assets/petito-2.png.asset.json";
import petitoLifestyle from "@/assets/petito-3.png.asset.json";
import petitoRebranding from "@/assets/petito-4.png.asset.json";
import norteLogo from "@/assets/norte-1.png.asset.json";
import norteFlatlay from "@/assets/norte-2.png.asset.json";
import norteGarrafa from "@/assets/norte-3.png.asset.json";
import norteCasaco from "@/assets/norte-4.png.asset.json";
import virclanLogo from "@/assets/virclan-1.png.asset.json";
import virclanVariant1 from "@/assets/virclan-2.png.asset.json";
import virclanVariant2 from "@/assets/virclan-3.png.asset.json";
import virclanAplicacao from "@/assets/virclan-4.png.asset.json";
import jaciraLogo from "@/assets/jacira-1.png.asset.json";
import jaciraCartoes from "@/assets/jacira-2.png.asset.json";
import jaciraPoster from "@/assets/jacira-3.png.asset.json";
import jaciraVestido from "@/assets/jacira-4.png.asset.json";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfólio — RUNA Design" },
      { name: "description", content: "Explore o portfólio da RUNA Design: projetos de branding, web design e experiências digitais premium." },
      { property: "og:title", content: "Portfólio — RUNA Design" },
      { property: "og:description", content: "Explore o portfólio da RUNA Design: projetos de branding, web design e experiências digitais premium." },
    ],
  }),
  component: PortfolioPage,
});

const projects: Array<{
  category: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  gallery?: string[];
}> = [
  {
    category: "Branding",
    title: "AURA",
    description: "Estudo de caso RUNA — Skincare de luxo: pele calma.",
    tags: ["Branding", "Packaging"],
    image: auraLogo.url,
    gallery: [auraSerum.url, auraTote.url, auraCard.url, auraBox.url],
  },
  {
    category: "Rebranding",
    title: "Petito",
    description: "Estudo de caso RUNA — Rebranding da marca Petito: nova proposta de identidade.",
    tags: ["Rebranding", "Identidade Visual"],
    image: petitoLogo.url,
    gallery: [petitoPackaging.url, petitoLifestyle.url, petitoRebranding.url],
  },
  {
    category: "Branding",
    title: "NORTE",
    description: "Estudo de caso RUNA — Turismo de expedição além do mapa.",
    tags: ["Branding", "Identidade Visual"],
    image: norteLogo.url,
    gallery: [norteFlatlay.url, norteGarrafa.url, norteCasaco.url],
  },
  {
    category: "Rebranding",
    title: "VIRCLAN",
    description: "Estudo de caso RUNA — Atualização de uma marca existente, novo conceito e reposicionamento estratégico.",
    tags: ["Rebranding", "Identidade Visual"],
    image: virclanLogo.url,
    gallery: [virclanVariant1.url, virclanVariant2.url, virclanAplicacao.url],
  },
  {
    category: "Branding",
    title: "JACIRA ALVES",
    description: "Estudo de caso RUNA — Apresentação estratégica que adicionou mais valor percebido aos produtos.",
    tags: ["Branding", "Identidade Visual"],
    image: jaciraLogo.url,
    gallery: [jaciraCartoes.url, jaciraPoster.url, jaciraVestido.url],
  },
  { category: "Motion", title: "Nova Energia", description: "Campanha de motion graphics para empresa de energias renováveis.", tags: ["Motion", "Video"] },
  { category: "Branding", title: "Mesa Real", description: "Branding e comunicação para restaurante de alta cozinha lisboeta.", tags: ["Branding", "Editorial"] },
  { category: "Web Design", title: "TechVision", description: "Website corporativo com design system completo para empresa de tecnologia.", tags: ["Web Design", "Design System"] },
];

function PortfolioPage() {
  const { t } = useTranslation();
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback((delta: number) => {
    setLightbox((lb) =>
      lb ? { ...lb, index: (lb.index + delta + lb.images.length) % lb.images.length } : lb,
    );
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, close, step]);

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_oklch(0.5556_0.066_218.27_/_0.15),_transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="mb-4 inline-block rounded-full border border-turquoise/30 bg-turquoise/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-turquoise">
              {t("Portfólio")}
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              {t("Trabalhos que falam por ")}<span className="gradient-text">{t("si")}</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {t("Uma seleção dos projetos mais recentes onde aplicámos estratégia, criatividade e execução impecável.")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Projetos selecionados"
            description="Cada projeto é uma história única de transformação visual e digital."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.title} className="group overflow-hidden glass border-border/50 bg-card/40 transition-all hover:-translate-y-1 hover:border-turquoise/30">
                <button
                  type="button"
                  aria-label={`${t(project.title)} — ${t("ampliar imagem principal")}`}
                  onClick={() =>
                    setLightbox({
                      images: [project.image, ...(project.gallery ?? [])].filter(Boolean) as string[],
                      index: 0,
                    })
                  }
                  className="relative aspect-[4/3] w-full cursor-zoom-in overflow-hidden gradient-runa text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-turquoise"
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={t(project.title)}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_oklch(0.8754_0.105_193.25_/_0.15),_transparent_60%)]" />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center bg-background/0 transition-colors duration-300 hover:bg-background/20">
                    <span className="rounded-full border border-border/60 bg-card/70 px-3 py-1.5 text-xs font-medium text-foreground opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100">
                      {t("Clique para ampliar")}
                    </span>
                  </div>
                </button>
                <CardContent className="p-6">
                  <Badge variant="outline" className="border-turquoise/30 bg-turquoise/10 text-turquoise">
                    {t(project.category)}
                  </Badge>
                  <h3 className="mt-3 font-display text-xl font-semibold text-foreground transition-colors group-hover:text-turquoise">
                    {t(project.title)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t(project.description)}
                  </p>
                  {project.gallery && (
                    <div className="mt-4 grid grid-cols-4 gap-2">
                      {project.gallery.map((src, i) => {
                        const images = [project.image, ...(project.gallery ?? [])].filter(Boolean) as string[];
                        return (
                          <button
                            key={src}
                            type="button"
                            aria-label={`${t(project.title)} — ${t("ampliar imagem")} ${i + 1}`}
                            onClick={() => setLightbox({ images, index: i + 1 })}
                            className="aspect-square overflow-hidden rounded-md border border-border/50 transition-colors hover:border-turquoise/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-turquoise"
                          >
                            <img src={src} alt={t(project.title)} loading="lazy" className="h-full w-full object-cover" />
                          </button>
                        );
                      })}
                    </div>
                  )}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">
                        {t(tag)}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Quer ver o seu projeto aqui?"
        description="Vamos trabalhar juntos para criar algo verdadeiramente especial."
      />

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            aria-label={t("Fechar")}
            onClick={close}
            className="absolute right-4 top-4 rounded-full border border-border/60 bg-card/70 p-2 text-foreground transition-colors hover:border-turquoise/60 hover:text-turquoise"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label={t("Anterior")}
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            className="absolute left-4 rounded-full border border-border/60 bg-card/70 p-3 text-foreground transition-colors hover:border-turquoise/60 hover:text-turquoise"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <img
            src={lightbox.images[lightbox.index]}
            alt=""
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[85vw] rounded-lg object-contain shadow-2xl"
          />
          <button
            type="button"
            aria-label={t("Seguinte")}
            onClick={(e) => { e.stopPropagation(); step(1); }}
            className="absolute right-4 rounded-full border border-border/60 bg-card/70 p-3 text-foreground transition-colors hover:border-turquoise/60 hover:text-turquoise"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
}
