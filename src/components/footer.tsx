import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import runaMark from "@/assets/runa-mark.png.asset.json";

const footerLinks = {
  servicos: [
    { to: "/servicos", label: "Branding" },
    { to: "/servicos", label: "Web Design" },
    { to: "/servicos", label: "UI/UX Design" },
    { to: "/servicos", label: "Motion Design" },
  ],
  empresa: [
    { to: "/sobre", label: "Sobre nós" },
    { to: "/portfolio", label: "Portfólio" },
    { to: "/processo", label: "Processo" },
  ],
  suporte: [
    { to: "/faq", label: "FAQ" },
    { to: "/contacto", label: "Contacto" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/50 bg-graphite-deep">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <img src={runaMark.url} alt="RUNA Design" className="h-12 w-12 object-contain" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-2xl font-bold tracking-[0.14em] text-foreground">
                  RUNA
                </span>
                <span className="mt-1 text-xs font-medium uppercase tracking-[0.32em] text-turquoise">
                  Design
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-muted-foreground">
              {t("Estúdio criativo especializado em branding, web design e experiências digitais premium que convertem.")}
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-background/50 text-muted-foreground transition-colors hover:border-turquoise/50 hover:text-turquoise"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-5">
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
                {t("Serviços")}
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.servicos.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-turquoise"
                    >
                      {t(link.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
                {t("Empresa")}
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.empresa.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-turquoise"
                    >
                      {t(link.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
                {t("Suporte")}
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.suporte.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-turquoise"
                    >
                      {t(link.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              {t("Contacto")}
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-turquoise" />
                <span>hello@runadesign.pt</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-turquoise" />
                <span>+351 912 345 678</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-turquoise" />
                <span>Lisboa, Portugal</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            {t("© {{year}} RUNA Design. Todos os direitos reservados.", { year })}
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              to="/"
              className="text-sm text-muted-foreground transition-colors hover:text-turquoise"
            >
              {t("Privacidade")}
            </Link>
            <Link
              to="/"
              className="text-sm text-muted-foreground transition-colors hover:text-turquoise"
            >
              {t("Termos")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
