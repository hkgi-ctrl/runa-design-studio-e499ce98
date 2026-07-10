import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/section-header";
import { CTASection } from "@/components/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — RUNA Design" },
      { name: "description", content: "Artigos, insights e inspiração sobre branding, web design, UI/UX e estratégia digital." },
      { property: "og:title", content: "Blog — RUNA Design" },
      { property: "og:description", content: "Artigos, insights e inspiração sobre branding, web design, UI/UX e estratégia digital." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  {
    category: "Branding",
    title: "Como criar uma identidade visual memorável",
    excerpt: "Descubra os princípios fundamentais para construir uma marca que perdure no tempo e ressoe com o seu público.",
    date: "15 Jan 2026",
    readTime: "5 min",
  },
  {
    category: "Web Design",
    title: "Tendências de web design para 2026",
    excerpt: "O que esperar do design digital no próximo ano, desde animações subtis até tipografia ousada.",
    date: "08 Jan 2026",
    readTime: "7 min",
  },
  {
    category: "UX",
    title: "A importância da experiência do utilizador",
    excerpt: "Como o UX design impacta diretamente as conversões e a fidelização dos clientes.",
    date: "02 Jan 2026",
    readTime: "6 min",
  },
  {
    category: "Estratégia",
    title: "Design como ferramenta de negócio",
    excerpt: "Por que as empresas que investem em design consistente superam a concorrência.",
    date: "20 Dez 2025",
    readTime: "8 min",
  },
  {
    category: "Motion",
    title: "Microinterações que encantam",
    excerpt: "Pequenos detalhes animados que fazem uma grande diferença na experiência digital.",
    date: "12 Dez 2025",
    readTime: "4 min",
  },
  {
    category: "Branding",
    title: "O futuro do branding sustentável",
    excerpt: "Como as marcas estão a adaptar as suas identidades visuais a valores mais sustentáveis.",
    date: "05 Dez 2025",
    readTime: "6 min",
  },
];

function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_oklch(0.8754_0.105_193.25_/_0.1),_transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="mb-4 inline-block rounded-full border border-turquoise/30 bg-turquoise/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-turquoise">
              Blog
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Insights e <span className="gradient-text">inspiração</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Artigos sobre design, branding, estratégia digital e tudo o que nos inspira a criar melhor.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Artigos recentes"
            description="Explore o nosso conteúdo mais recente."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.title} className="group cursor-pointer glass border-border/50 bg-card/40 transition-all hover:-translate-y-1 hover:border-turquoise/30">
                <CardContent className="p-6">
                  <div className="aspect-video rounded-xl gradient-runa mb-5" />
                  <Badge variant="outline" className="border-turquoise/30 bg-turquoise/10 text-turquoise">
                    {post.category}
                  </Badge>
                  <h3 className="mt-3 font-display text-xl font-semibold text-foreground transition-colors group-hover:text-turquoise">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime} de leitura</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Quer receber os nossos artigos?"
        description="Fique a par das novidades e insights do mundo do design."
      />
    </>
  );
}
