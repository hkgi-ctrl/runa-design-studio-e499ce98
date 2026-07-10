import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

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

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 gradient-runa" />
      <div className="absolute -left-1/4 top-0 h-96 w-96 rounded-full bg-turquoise/10 blur-3xl" />
      <div className="absolute -right-1/4 bottom-0 h-96 w-96 rounded-full bg-petroleum/20 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${isVisible ? "visible" : ""}`}>
          <h2 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group bg-turquoise text-graphite-deep hover:bg-turquoise/90"
            >
              <Link to={primaryTo}>
                {primaryLabel}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-silver/20 text-foreground hover:bg-silver/10"
            >
              <Link to={secondaryTo}>{secondaryLabel}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
