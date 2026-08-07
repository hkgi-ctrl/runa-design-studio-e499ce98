import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useRef, useState, type CSSProperties, type MouseEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useTranslation } from "react-i18next";
import rVidro from "@/assets/R_Vidro_alpha.webp.asset.json";
import fundoTextura from "@/assets/fundo_textura.webp.asset.json";

interface CTASectionProps {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}

export function CTASection({
  title,
  description,
  primaryLabel = "Iniciar projeto",
  primaryTo = "/contacto",
  secondaryLabel = "Ver portfólio",
  secondaryTo = "/portfolio",
}: CTASectionProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-[#000000] py-24 sm:py-32">
      {/* Liquid texture overlay at 18% */}
      <img
        src={fundoTextura.url}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.18]"
      />
      {/* Glass R watermark — vertically centered, fully visible, never clipped (no negative offsets) */}
      <img
        src={rVidro.url}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-[5%] top-1/2 z-0 w-[min(420px,80vw)] -translate-y-1/2 select-none opacity-[0.08]"
      />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${isVisible ? "visible" : ""}`}>
          <h2 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            {t(title)}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t(description)}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Magnetic>
              <Button
                asChild
                size="lg"
                className="group bg-turquoise text-graphite-deep hover:bg-turquoise/90"
              >
                <Link to={primaryTo}>
                  {t(primaryLabel)}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </Magnetic>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-silver/20 text-foreground hover:bg-silver/10"
            >
              <Link to={secondaryTo}>{t(secondaryLabel)}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Magnetic wrapper: the button gravitates toward the cursor and springs back on leave. */
function Magnetic({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<CSSProperties>({});

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);
    setStyle({
      transform: `translate(${(x * 0.35).toFixed(1)}px, ${(y * 0.35).toFixed(1)}px)`,
      transition: "transform 0.12s ease-out",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "translate(0px, 0px)",
      transition: "transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)",
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="-m-3 inline-block p-3"
      style={style}
    >
      {children}
    </div>
  );
}
