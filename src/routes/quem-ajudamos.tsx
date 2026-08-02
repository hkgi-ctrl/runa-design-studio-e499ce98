import { createFileRoute } from "@tanstack/react-router";
import { AudienceSection } from "@/components/audience-section";

export const Route = createFileRoute("/quem-ajudamos")({
  head: () => ({
    meta: [
      { title: "Quem ajudamos — RUNA Design" },
      { name: "description", content: "Descubra para quem a RUNA Design cria marcas e experiências visuais: pequenas e médias empresas, empreendedores e negócios em crescimento." },
      { property: "og:title", content: "Quem ajudamos — RUNA Design" },
      { property: "og:description", content: "Descubra para quem a RUNA Design cria marcas e experiências visuais: pequenas e médias empresas, empreendedores e negócios em crescimento." },
    ],
  }),
  component: QuemAjudamosPage,
});

function QuemAjudamosPage() {
  return (
    <main className="pt-32 sm:pt-40">
      <AudienceSection />
    </main>
  );
}
