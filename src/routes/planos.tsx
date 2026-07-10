import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/section-header";
import { CTASection } from "@/components/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const Route = createFileRoute("/planos")({
  head: () => ({
    meta: [
      { title: "Planos — RUNA Design" },
      { name: "description", content: "Conheça os planos e preços da RUNA Design para branding, web design e design systems premium." },
      { property: "og:title", content: "Planos — RUNA Design" },
      { property: "og:description", content: "Conheça os planos e preços da RUNA Design para branding, web design e design systems premium." },
    ],
  }),
  component: PlanosPage,
});

const plans = [
  {
    name: "Essencial",
    price: "1.200€",
    description: "Perfeito para pequenas empresas e startups que precisam de uma presença digital profissional.",
    features: [
      "Logo e identidade básica",
      "Website one-page",
      "Design responsivo",
      "2 rondas de revisões",
      "Entrega de assets",
      "Suporte por email",
    ],
  },
  {
    name: "Profissional",
    price: "3.500€",
    description: "Para marcas que querem crescer com uma presença digital completa e consistente.",
    features: [
      "Branding completo",
      "Website multi-página",
      "UI/UX design",
      "Design system básico",
      "4 rondas de revisões",
      "Suporte prioritário",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    description: "Soluções completas e personalizadas para grandes projetos e organizações.",
    features: [
      "Estratégia de marca completa",
      "Website customizado avançado",
      "Motion design",
      "Design system completo",
      "Revisões ilimitadas",
      "Suporte prioritário dedicado",
    ],
  },
];

const comparisonFeatures = [
  { name: "Estratégia de marca", essential: false, profissional: true, enterprise: true },
  { name: "Diretrizes de marca", essential: false, profissional: true, enterprise: true },
  { name: "Website multi-página", essential: false, profissional: true, enterprise: true },
  { name: "Design system", essential: false, profissional: "Básico", enterprise: "Completo" },
  { name: "Motion design", essential: false, profissional: false, enterprise: true },
  { name: "Rondas de revisões", essential: "2", profissional: "4", enterprise: "Ilimitadas" },
];

function PlanosPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_oklch(0.8754_0.105_193.25_/_0.1),_transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-center mx-auto">
            <span className="mb-4 inline-block rounded-full border border-turquoise/30 bg-turquoise/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-turquoise">
              Planos
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Investimento <span className="gradient-text">transparente</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Escolha o plano que melhor se adapta às necessidades do seu negócio. Todos os projetos incluem acompanhamento próximo e entrega de alta qualidade.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Escolha o seu plano"
            description="Soluções flexíveis para diferentes etapas de crescimento."
          />
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative glass border-border/50 ${plan.popular ? "border-turquoise/50 bg-card/60" : "bg-card/40"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-turquoise px-3 py-1 text-xs font-semibold text-graphite-deep">
                    Mais popular
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                  <div className="mt-6">
                    <span className="font-display text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    {plan.price !== "Sob consulta" && (
                      <span className="text-muted-foreground"> / projeto</span>
                    )}
                  </div>
                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-turquoise" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`mt-8 w-full ${plan.popular ? "bg-turquoise text-graphite-deep hover:bg-turquoise/90" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}
                  >
                    <Link to="/contacto">Escolher plano</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Comparativo de funcionalidades"
            description="Veja o que está incluído em cada plano."
          />
          <div className="mt-12 overflow-hidden rounded-2xl border border-border/50">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border/50 bg-card/60">
                    <th className="p-4 font-display text-sm font-semibold text-foreground">Funcionalidade</th>
                    <th className="p-4 font-display text-sm font-semibold text-foreground">Essencial</th>
                    <th className="p-4 font-display text-sm font-semibold text-turquoise">Profissional</th>
                    <th className="p-4 font-display text-sm font-semibold text-foreground">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature) => (
                    <tr key={feature.name} className="border-b border-border/50 last:border-0">
                      <td className="p-4 text-sm text-foreground">{feature.name}</td>
                      <td className="p-4 text-sm text-muted-foreground">
                        {typeof feature.essential === "boolean" ? (
                          feature.essential ? <Check className="h-4 w-4 text-turquoise" /> : "—"
                        ) : (
                          feature.essential
                        )}
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">
                        {typeof feature.profissional === "boolean" ? (
                          feature.profissional ? <Check className="h-4 w-4 text-turquoise" /> : "—"
                        ) : (
                          feature.profissional
                        )}
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">
                        {typeof feature.enterprise === "boolean" ? (
                          feature.enterprise ? <Check className="h-4 w-4 text-turquoise" /> : "—"
                        ) : (
                          feature.enterprise
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ainda tem dúvidas?"
        description="Fale connosco para receber uma proposta personalizada adaptada ao seu projeto."
      />
    </>
  );
}
