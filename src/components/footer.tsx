import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

const footerLinks = {
  servicos: [
    { to: "/servicos", label: "Identidade Visual" },
    { to: "/servicos", label: "Modernização de Marca" },
    { to: "/servicos", label: "Design para Produtos e Serviços" },
    { to: "/servicos", label: "Design para Redes Sociais" },
  ],
  empresa: [
    { to: "/sobre", label: "Sobre nós" },
    { to: "/portfolio", label: "Portfólio" },
    { to: "/processo", label: "Processo" },
  ],
  suporte: [
    { to: "/faq", label: "FAQ" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
];

function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
    </svg>
  );
}

function FooterLinkList({ links }: { links: Array<{ to: string; label: string }> }) {
  const { t } = useTranslation();

  return (
    <ul className="mt-4 space-y-3">
      {links.map((link) => (
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
  );
}

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-graphite-deep">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              {t("Serviços")}
            </h3>
            <FooterLinkList links={footerLinks.servicos} />
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              {t("Empresa")}
            </h3>
            <FooterLinkList links={footerLinks.empresa} />
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              {t("Suporte")}
            </h3>
            <FooterLinkList links={footerLinks.suporte} />
          </div>

          <div>
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
            <div className="mt-6 flex gap-3">
              {[
                ...socialLinks,
                { icon: BehanceIcon, href: "https://behance.net", label: "Behance" },
              ].map((social) => (
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
