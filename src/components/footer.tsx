import { Link } from "@tanstack/react-router";
import { Facebook } from "lucide-react";
import { RunaIcon, type RunaIconName } from "@/components/icons/RunaIcons";
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

const socialLinks: Array<{ icon: RunaIconName; href: string; label: string }> = [
  { icon: "instagram", href: "https://www.instagram.com/runa.studiodesign/", label: "Instagram RUNA" },
  { icon: "behance", href: "https://www.behance.net/runa_studiodesign", label: "Behance RUNA" },
  { icon: "linkedin", href: "https://www.linkedin.com/company/runa_studiodesign/", label: "LinkedIn RUNA" },
  { icon: "whatsapp", href: "https://wa.me/351923397753?text=Olá%20RUNA%2C%20vim%20pelo%20site%20e%20gostaria%20de%20falar%20sobre%20um%20projeto%20de%20branding.", label: "WhatsApp" },
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
                  <RunaIcon name={social.icon} className="h-4 w-4" />
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
