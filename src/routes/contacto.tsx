import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send, Instagram, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — RUNA Design" },
      { name: "description", content: "Entre em contacto com a RUNA Design. Vamos conversar sobre o seu projeto de branding ou web design." },
      { property: "og:title", content: "Contacto — RUNA Design" },
      { property: "og:description", content: "Entre em contacto com a RUNA Design. Vamos conversar sobre o seu projeto de branding ou web design." },
    ],
  }),
  component: ContactoPage,
});

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@runadesign.pt", href: "mailto:hello@runadesign.pt" },
  { icon: Phone, label: "Telefone", value: "+351 912 345 678", href: "tel:+351912345678" },
  { icon: MapPin, label: "Localização", value: "Lisboa, Portugal", href: "#" },
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.8754_0.105_193.25_/_0.1),_transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="mb-4 inline-block rounded-full border border-turquoise/30 bg-turquoise/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-turquoise">
              Contacto
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Vamos criar algo <span className="gradient-text">extraordinário</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Conte-nos sobre o seu projeto. Responderemos em breve com uma proposta personalizada.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <Card className="glass border-border/50 bg-card/40">
                <CardContent className="p-8">
                  {submitted ? (
                    <div className="py-12 text-center">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-turquoise/10">
                        <Send className="h-8 w-8 text-turquoise" />
                      </div>
                      <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">
                        Mensagem enviada!
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        Obrigado pelo contacto. Responderemos o mais brevemente possível.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nome</Label>
                          <Input id="name" placeholder="O seu nome" required className="bg-background/50 border-border/50" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="o.seu@email.pt" required className="bg-background/50 border-border/50" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Assunto</Label>
                        <Input id="subject" placeholder="Assunto da mensagem" required className="bg-background/50 border-border/50" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget">Orçamento estimado</Label>
                        <Input id="budget" placeholder="Ex: 3.000€" className="bg-background/50 border-border/50" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Mensagem</Label>
                        <Textarea id="message" placeholder="Conte-nos sobre o seu projeto..." rows={6} required className="bg-background/50 border-border/50" />
                      </div>
                      <Button type="submit" className="w-full bg-turquoise text-graphite-deep hover:bg-turquoise/90">
                        <Send className="mr-2 h-4 w-4" />
                        Enviar mensagem
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <div className="space-y-6">
                <Card className="glass border-border/50 bg-card/40">
                  <CardContent className="p-6">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      Informações de contacto
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Estamos disponíveis de segunda a sexta, das 9h às 18h.
                    </p>
                    <ul className="mt-6 space-y-4">
                      {contactInfo.map((info) => (
                        <li key={info.label}>
                          <a
                            href={info.href}
                            className="group flex items-start gap-3 text-muted-foreground transition-colors hover:text-turquoise"
                          >
                            <info.icon className="mt-0.5 h-5 w-5 shrink-0 text-turquoise" />
                            <div>
                              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                                {info.label}
                              </div>
                              <div className="text-sm font-medium text-foreground transition-colors group-hover:text-turquoise">
                                {info.value}
                              </div>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="glass border-border/50 bg-card/40">
                  <CardContent className="p-6">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      Siga-nos
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Acompanhe o nosso trabalho nas redes sociais.
                    </p>
                    <div className="mt-6 flex gap-3">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="flex h-11 w-11 items-center justify-center rounded-full border border-border/50 bg-background/50 text-muted-foreground transition-colors hover:border-turquoise/50 hover:text-turquoise"
                        >
                          <social.icon className="h-5 w-5" />
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
