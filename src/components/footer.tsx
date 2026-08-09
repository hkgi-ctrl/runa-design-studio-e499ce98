import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
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

function FooterLinkList({ links }: { links: Array<{ to: string; label: string }> }) {
  const { t } = useTranslation();

  return (
    <ul className="mt-4 space-y-3">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            to={link.to}
            className="text-sm text-footer-link transition-colors hover:text-footer-link-hover"
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
  const footerHeadingClass = "font-display text-sm font-semibold uppercase tracking-[1px] text-footer-heading";

  return (
    <footer className="relative z-[92] bg-footer-background">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-[60px] sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div>
            <h3 className={footerHeadingClass}>{t("Serviços")}</h3>
            <FooterLinkList links={footerLinks.servicos} />
          </div>

          <div>
            <h3 className={footerHeadingClass}>{t("Empresa")}</h3>
            <FooterLinkList links={footerLinks.empresa} />
          </div>

          <div>
            <h3 className={footerHeadingClass}>{t("Suporte")}</h3>
            <FooterLinkList links={footerLinks.suporte} />
          </div>

          <div>
            <h3 className={footerHeadingClass}>{t("Contacto")}</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center gap-3 text-sm text-footer-link">
                <Mail className="h-4 w-4 shrink-0 text-footer-link-hover" />
                <span>hello@runastudio.pt</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-footer-link">
                <Phone className="h-4 w-4 shrink-0 text-footer-link-hover" />
                <span>+351 912 345 678</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-footer-link">
                <MapPin className="h-4 w-4 shrink-0 text-footer-link-hover" />
                <span>Lisboa, Portugal</span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap justify-start gap-2.5 sm:gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-footer-social-background text-footer-link transition-all duration-300 hover:bg-footer-social-hover/10 hover:text-footer-link-hover"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-footer-divider/50 pt-6 sm:flex-row">
          <p className="text-xs text-footer-copyright">
            {t("© {{year}} RUNA Design. Todos os direitos reservados.", { year })}
          </p>
        </div>
      </div>
    </footer>
  );
}
