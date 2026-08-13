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
import { RunaIcon, type RunaIconName } from "@/components/icons/RunaIcons";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { sendContactMessage } from "@/lib/contact.functions";
import { PhoneInputClient } from "@/components/phone-input-client";

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

const contactInfo: Array<{ icon: RunaIconName; label: string; value: string; href: string }> = [
  { icon: "mail", label: "Email", value: "hello@runastudio.pt", href: "mailto:hello@runastudio.pt" },
  { icon: "phone", label: "Telefone / WhatsApp", value: "+351 923 397 753", href: "tel:+351923397753" },
  { icon: "location", label: "Localização", value: "Lisboa, Portugal", href: "#" },
];

const serviceOptions = [
  "Identidade Visual",
  "Modernização de Marca",
  "Design para Produtos e Serviços",
  "Design para Redes Sociais",
  "Outro",
];

const faqs = [
  { question: "Quanto tempo demora um projeto de branding?", answer: "Cada projeto tem um tempo de desenvolvimento próprio. O prazo depende da complexidade, do escopo e dos objetivos da sua marca. Após a nossa conversa inicial, definimos juntos um cronograma realista para garantir qualidade e estratégia em cada etapa." },
  { question: "Qual é o processo de trabalho?", answer: "Começamos com uma fase de descoberta, seguida de estratégia, design e entrega. Você acompanha cada etapa com apresentações e validações para garantir alinhamento total." },
  { question: "Trabalham com clientes internacionais?", answer: "Sim, trabalhamos com clientes de todo o mundo. As reuniões são feitas por videochamada e a comunicação é totalmente digital." },
  { question: "A inteligência artificial substitui o trabalho do designer?", answer: "Não. A inteligência artificial é utilizada para acelerar a exploração de ideias e aumentar a eficiência do processo criativo. As decisões estratégicas, o refinamento e o resultado final são sempre conduzidos pela equipa da RUNA." },
  { question: "Qual o investimento para um projeto de branding?", answer: "O investimento varia conforme o tamanho e as necessidades da sua empresa. Não trabalhamos com pacotes fechados porque cada marca é única. Após entendermos seus objetivos, enviamos uma proposta personalizada com valor e escopo claros." },
  { question: "A RUNA só faz logotipos?", answer: "Não. O logotipo é apenas uma parte da identidade visual. Criamos sistemas de marca completos: estratégia, tipografia, paleta de cores, aplicações, tom de voz e guia de uso. O objetivo é construir marcas consistentes que se destacam em todos os pontos de contacto." },
];

const socialLinks: Array<{ icon: RunaIconName; href: string; label: string }> = [
  { icon: "instagram", href: "https://www.instagram.com/runa.studiodesign/", label: "Instagram RUNA" },
  { icon: "behance", href: "https://behance.net", label: "Behance" },
  { icon: "linkedin", href: "https://linkedin.com/company/runastudio", label: "LinkedIn" },
  { icon: "whatsapp", href: "https://wa.me/351923397753?text=Olá%20RUNA%2C%20vim%20pelo%20site%20e%20gostaria%20de%20falar%20sobre%20um%20projeto%20de%20branding.", label: "WhatsApp" },
  { icon: "facebook", href: "https://facebook.com", label: "Facebook" },
];

function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [service, setService] = useState("");
  const [phone, setPhone] = useState("");
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
          phone,
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
                          <RunaIcon name="send" className="h-8 w-8 text-turquoise" />
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
                            <Input id="email" name="email" type="email" placeholder={t("o.seu@email.com")} required className="bg-background/50 border-border/50" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">{t("Telefone (opcional)")}</Label>
                            <PhoneInputClient
                              country="pt"
                              enableSearch
                              disableCountryGuess
                              value={phone}
                              onChange={(value: string) => setPhone(value)}
                              placeholder="+351 923 397 753"
                              inputClass="w-full bg-[#141E29] border border-[#7DD3E0]/20 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-turquoise/30"
                              buttonClass="bg-[#141E29] border border-[#7DD3E0]/20 border-r-0 hover:bg-[#141E29]/80"
                              dropdownClass="bg-[#141E29] border border-[#7DD3E0]/20 text-foreground"
                              containerClass="w-full"
                              inputProps={{ id: "phone", name: "phone" }}
                            />
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
                          <RunaIcon name="send" className="mr-2 h-4 w-4" />
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
                                <RunaIcon name="phone" className="h-4 w-4 shrink-0 text-turquoise" />
                                <span className="text-xs uppercase tracking-wider">{t(info.label)}</span>
                              </div>
                              <div className="ml-6 mt-1 flex items-center gap-2 text-sm">
                                <a href="tel:+351923397753" className="font-medium text-foreground transition-colors hover:text-turquoise">
                                  +351 923 397 753
                                </a>
                                <a
                                  href="https://wa.me/351923397753?text=Olá%20RUNA%2C%20vim%20pelo%20site%20e%20gostaria%20de%20falar%20sobre%20um%20projeto%20de%20branding."
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label="Falar no WhatsApp"
                                  title="Falar no WhatsApp"
                                  className="flex h-6 w-6 items-center justify-center rounded-full border border-whatsapp/30 bg-whatsapp/20 text-whatsapp transition-all hover:bg-whatsapp hover:text-whatsapp-foreground"
                                >
                                  <RunaIcon name="whatsapp" className="h-3 w-3" />
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
                              <RunaIcon name={info.icon} className="mt-0.5 h-5 w-5 shrink-0 text-turquoise" />
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
                           <RunaIcon name={social.icon} className="h-4 w-4" />
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
