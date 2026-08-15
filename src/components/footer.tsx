import React from "react";
import { Link } from "@tanstack/react-router";
import { RunaIcon } from "@/components/icons/RunaIcons";
import { useTranslation } from "react-i18next";

const socialIcon = "w-11 h-11 rounded-xl bg-[#101828] border border-[#5EEAD4]/30 flex items-center justify-center shadow-[0_0_24px_rgba(94,234,212,0.2)] hover:border-[#5EEAD4]/60 hover:shadow-[0_0_30px_rgba(94,234,212,0.3)] transition-all duration-300";

const IconInstagram = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5EEAD4" strokeWidth="1.7">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="#5EEAD4" stroke="none" />
  </svg>
);

const IconBehance = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5EEAD4" strokeWidth="1.7">
    <path d="M2.5 7h5.2c1.8 0 3.3 1.5 3.3 3.3S9.5 13.6 7.7 13.6H2.5V7z" />
    <path d="M2.5 13.6h5.5c2 0 3.6 1.6 3.6 3.6s-1.6 3.6-3.6 3.6H2.5v-7.2z" />
    <path d="M14.5 8.5h6M17.5 5.5v6c0 2-1.5 3.5-3.5 3.5h5" />
  </svg>
);

const IconLinkedIn = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5EEAD4" strokeWidth="1.7">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M7 10v7M7 7v.5" />
    <path d="M11 10v7M11 13.5c0-1.5 1.2-2.5 2.7-2.5 1.5 0 2.8 1 2.8 2.5V17" />
  </svg>
);

const IconWhatsApp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5EEAD4" strokeWidth="1.7">
    <path d="M12 2a10 10 0 0 0-8.7 15L2 22l5.2-1.3A10 10 0 1 0 12 2z" />
    <path d="M8.5 9.5c.5 1 1.5 2.5 3 3.5s2.5 1.5 3.5 1.5" />
  </svg>
);

const IconFacebook = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5EEAD4" strokeWidth="1.7">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M14 8h2V6h-2c-1.7 0-3 1.3-3 3v2H9v2h2v7h2v-7h2l.5-2H13V9c0-.6.4-1 1-1z" />
  </svg>
);


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

const socialLinks: Array<{
  icon: React.FC;
  href: string;
  label: string;
  title?: string;
  disabled?: boolean;
}> = [
  { icon: IconInstagram, href: "https://www.instagram.com/runa.studiodesign/", label: "Instagram RUNA" },
  { icon: IconBehance, href: "https://www.behance.net/runa_studiodesign", label: "Behance RUNA" },
  { icon: IconLinkedIn, href: "https://www.linkedin.com/company/runa-studiodesign/", label: "LinkedIn RUNA" },
  { icon: IconWhatsApp, href: "https://wa.me/351923397753?text=Ol%C3%A1%20RUNA%2C%20vim%20pelo%20site%20e%20gostaria%20de%20falar%20sobre%20meu%20projeto.", label: "WhatsApp" },
  // TODO: Ativar Facebook quando página for desbloqueada - trocar href para https://www.facebook.com/runa.studiodesign
  { icon: IconFacebook, href: "#", label: "Facebook RUNA em breve", title: "Facebook em breve" },
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
                <RunaIcon name="mail" className="h-4 w-4 shrink-0 text-footer-link-hover" />
                <span>hello@runastudio.pt</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-footer-link">
                <RunaIcon name="phone" className="h-4 w-4 shrink-0 text-footer-link-hover" />
                <span>+351 923 397 753</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-footer-link">
                <RunaIcon name="location" className="h-4 w-4 shrink-0 text-footer-link-hover" />
                <span>Lisboa, Portugal</span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap justify-start gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return social.disabled ? (
                  <a
                    key={social.label}
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    aria-label={social.label}
                    title={social.title}
                    className={`${socialIcon} opacity-40 cursor-not-allowed`}
                  >
                    <Icon />
                  </a>
                ) : (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.title ?? social.label}
                    className={socialIcon}
                  >
                    <Icon />
                  </a>
                );
              })}
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
