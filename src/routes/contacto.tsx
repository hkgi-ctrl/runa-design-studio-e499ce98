import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { sendContactMessage } from "@/lib/contact.functions";

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
  { icon: Mail, label: "Email", value: "hello@runastudio.pt", href: "mailto:hello@runastudio.pt" },
  { icon: Phone, label: "Telefone / WhatsApp", value: "+351 912 345 678", href: "tel:+351912345678" },
  { icon: MapPin, label: "Localização", value: "Lisboa, Portugal", href: "#" },
];

const serviceOptions = [
  "Identidade Visual",
  "Modernização de Marca",
  "Design para Produtos e Serviços",
  "Design para Redes Sociais",
  "Outro",
];

const faqs = [
  { question: "Quanto tempo demora um projeto de branding?", answer: "Um projeto de branding completo demora tipicamente entre 4 a 8 semanas, dependendo da complexidade e do número de revisões." },
  { question: "Qual é o processo de trabalho?", answer: "Começamos com uma fase de descoberta, seguida de estratégia, design e entrega. Mantemos comunicação próxima durante todo o processo." },
  { question: "Trabalham com clientes internacionais?", answer: "Sim, trabalhamos com clientes de todo o mundo. As reuniões são feitas por videochamada e a comunicação é totalmente digital." },
  { question: "A inteligência artificial substitui o trabalho do designer?", answer: "Não. A inteligência artificial é utilizada para acelerar a exploração de ideias e aumentar a eficiência do processo criativo. As decisões estratégicas, o refinamento e o resultado final são sempre conduzidos pela equipa da RUNA." },
];

function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M20 11.5a8 8 0 0 1-11.8 7.05L4 20l1.45-4.05A8 8 0 1 1 20 11.5Z" />
      <path d="M8.6 8.8c.18-.4.38-.42.7-.42h.25c.2 0 .35.03.48.33l.55 1.3c.1.24.07.4-.08.58l-.4.48c-.13.15-.1.3-.02.44.2.35.5.76.96 1.14.52.43 1.02.7 1.36.84.18.08.32.06.44-.08l.48-.56c.14-.17.3-.2.52-.1l1.25.6c.22.1.35.17.4.3.05.14.05.76-.3 1.08-.3.28-.8.4-1.12.4-.28 0-.64-.1-1.1-.28-.46-.2-1.3-.57-2.2-1.37-.72-.63-1.22-1.4-1.43-1.75-.2-.35-.5-.93-.5-1.42 0-.48.25-.92.36-1.09Z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return <Linkedin className={className} strokeWidth={1.5} aria-hidden="true" />;
}

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: BehanceIcon, href: "https://behance.net", label: "Behance" },
  { icon: LinkedinIcon, href: "https://linkedin.com/company/runastudio", label: "LinkedIn" },
  { icon: WhatsAppIcon, href: "https://wa.me/351912345678", label: "WhatsApp" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
];

function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [service, setService] = useState("");
  const [submissionId] = useState(() => crypto.randomUUID());
  const { t } = useTranslation();
  const hero = useScrollReveal<HTMLDivElement>();
  const formReveal = useScrollReveal<HTMLDivElement>();
  const asideReveal = useScrollReveal<HTMLDivElement>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setError(false);
    const formData = new FormData(e.currentTarget);
    try {
      await sendContactMessage({
        data: {
          name: String(formData.get("name") ?? ""),
          company: String(formData.get("company") ?? ""),
          email: String(formData.get("email") ?? ""),
          phone: String(formData.get("phone") ?? ""),
          service,
          message: String(formData.get("message") ?? ""),
          website: String(formData.get("website") ?? ""),
          submissionId,
        },
      });
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.8754_0.105_193.25_/_0.1),_transparent_50%)]" />
        <div className="absolute -left-1/4 bottom-0 h-96 w-96 rounded-full bg-petroleum/20 blur-3xl" />
        <div
          ref={hero.ref}
          className={`reveal ${hero.isVisible ? "visible" : ""} relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}
        >
          <div className="max-w-3xl">
            <span className="mb-4 inline-block rounded-full border border-turquoise/30 bg-turquoise/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-turquoise">
              {t("Contacto")}
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              {t("Vamos criar algo ")}<span className="gradient-text">{t("extraordinário")}</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {t("Conte-nos sobre o seu projeto. Responderemos em breve com uma proposta personalizada.")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
            <div className="lg:col-span-3">
              <div
                ref={formReveal.ref}
                className={`reveal ${formReveal.isVisible ? "visible" : ""}`}
              >
                <Card className="glass border-border/50 bg-card/40">
                  <CardContent className="p-8 sm:p-10">
                    {submitted ? (
                      <div className="py-12 text-center">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-turquoise/10">
                          <Send className="h-8 w-8 text-turquoise" />
                        </div>
                        <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">
                          {t("Mensagem enviada!")}
                        </h3>
                        <p className="mt-2 text-muted-foreground">
                          {t("Obrigado pelo contacto. Responderemos o mais brevemente possível.")}
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid gap-6 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="name">{t("Nome")}</Label>
                            <Input id="name" name="name" placeholder={t("O seu nome")} required className="bg-background/50 border-border/50" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="company">{t("Empresa")}</Label>
                            <Input id="company" name="company" placeholder={t("A sua empresa")} className="bg-background/50 border-border/50" />
                          </div>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="email">{t("Email")}</Label>
                            <Input id="email" name="email" type="email" placeholder={t("o.seu@email.pt")} required className="bg-background/50 border-border/50" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">{t("Telefone (opcional)")}</Label>
                            <Input id="phone" name="phone" type="tel" placeholder="+351 912 345 678" className="bg-background/50 border-border/50" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="service">{t("Serviço Pretendido")}</Label>
                          <Select value={service} onValueChange={setService} required>
                            <SelectTrigger id="service" className="w-full bg-background/50 border-border/50">
                              <SelectValue placeholder={t("Selecione o serviço")} />
                            </SelectTrigger>
                            <SelectContent>
                              {serviceOptions.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {t(option)}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">{t("Mensagem")}</Label>
                          <Textarea id="message" name="message" placeholder={t("Conte-nos sobre o seu projeto...")} rows={6} required className="bg-background/50 border-border/50" />
                        </div>
                        <input
                          type="text"
                          name="website"
                          tabIndex={-1}
                          autoComplete="off"
                          aria-hidden="true"
                          className="hidden"
                        />
                        <Button
                          type="submit"
                          disabled={sending}
                          className="w-full bg-turquoise text-graphite-deep hover:bg-turquoise/90 disabled:opacity-70"
                        >
                          <Send className="mr-2 h-4 w-4" />
                          {sending ? t("A enviar...") : t("Solicitar Orçamento")}
                        </Button>
                        {error && (
                          <p className="text-center text-sm text-destructive">
                            {t("Não foi possível enviar a mensagem. Tente novamente ou contacte-nos diretamente através de hello@runastudio.pt.")}
                          </p>
                        )}
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>

            <div
              ref={asideReveal.ref}
              className={`reveal ${asideReveal.isVisible ? "visible" : ""} lg:col-span-2`}
              style={{ transitionDelay: "150ms" }}
            >
              <div className="space-y-6">
                <Card className="glass border-border/50 bg-card/40">
                  <CardContent className="p-6">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {t("Informações de contacto")}
                    </h3>
                    <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <div className="text-xs uppercase tracking-wider">{t("Disponibilidade")}</div>
                      <div>{t("Atendimento por agendamento")}</div>
                      <div>{t("Resposta em até 24h úteis")}</div>
                    </div>
                    <ul className="mt-6 space-y-4">
                      {contactInfo.map((info) => (
                        <li key={info.label}>
                          {info.label === "Telefone / WhatsApp" ? (
                            <div className="text-sm text-muted-foreground">
                              <div className="flex items-center gap-2.5">
                                <Phone className="h-4 w-4 shrink-0 text-turquoise" />
                                <span className="text-xs uppercase tracking-wider">{t(info.label)}</span>
                              </div>
                              <div className="ml-6 mt-1 flex items-center gap-2 text-sm">
                                <a href="tel:+351912345678" className="font-medium text-foreground transition-colors hover:text-turquoise">
                                  +351 912 345 678
                                </a>
                                <a
                                  href="https://wa.me/351912345678"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label="Falar no WhatsApp"
                                  title="Falar no WhatsApp"
                                  className="flex h-6 w-6 items-center justify-center rounded-full border border-whatsapp/30 bg-whatsapp/20 text-whatsapp transition-all hover:bg-whatsapp hover:text-whatsapp-foreground"
                                >
                                  <WhatsAppIcon className="h-3 w-3" />
                                </a>
                              </div>
                              <div className="ml-6 mt-1 text-xs text-muted-foreground">
                                {t("Reuniões: Seg-Sex 19h-22h | Sáb 10h-16h")}
                              </div>
                            </div>
                          ) : (
                            <a
                              href={info.href}
                              className="group flex items-start gap-3 text-muted-foreground transition-colors hover:text-turquoise"
                            >
                              <info.icon className="mt-0.5 h-5 w-5 shrink-0 text-turquoise" />
                              <div>
                                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                                  {t(info.label)}
                                </div>
                                <div className="text-sm font-medium text-foreground transition-colors group-hover:text-turquoise">
                                  {t(info.value)}
                                </div>
                              </div>
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                   </CardContent>
                 </Card>

                 <Card className="glass border-border/50 bg-card/40">
                   <CardContent className="p-6">
                     <h3 className="font-display text-xl font-semibold text-foreground">
                       {t("Perguntas frequentes")}
                     </h3>
                     <Accordion type="single" collapsible className="mt-4">
                       {faqs.map((faq, index) => (
                         <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                           <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline">
                             {t(faq.question)}
                           </AccordionTrigger>
                           <AccordionContent className="text-sm leading-relaxed text-muted-foreground text-justify">
                             {t(faq.answer)}
                           </AccordionContent>
                         </AccordionItem>
                       ))}
                     </Accordion>
                   </CardContent>
                 </Card>

                 <Card className="glass border-border/50 bg-card/40">
                   <CardContent className="p-6">
                     <h3 className="font-display text-xl font-semibold text-foreground">
                       {t("Siga-nos")}
                     </h3>
                     <p className="mt-2 text-sm text-muted-foreground">
                       {t("Acompanhe o nosso trabalho nas redes sociais.")}
                     </p>
                     <div className="mt-6 flex flex-wrap justify-start gap-2.5 sm:gap-3">
                       {socialLinks.map((social) => (
                         <a
                           key={social.label}
                           href={social.href}
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label={social.label}
                           title={social.label}
                           className="flex h-9 w-9 items-center justify-center rounded-full bg-footer-social-background text-foreground/50 transition-all duration-300 hover:bg-foreground/10 hover:text-turquoise"
                         >
                           <social.icon className="h-4 w-4" />
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
