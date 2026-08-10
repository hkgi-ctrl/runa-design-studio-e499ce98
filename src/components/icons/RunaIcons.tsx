import type { SVGProps } from "react";

export type RunaIconName =
  | "identity"
  | "modernize"
  | "product"
  | "social"
  | "strategy"
  | "creation"
  | "application"
  | "mail"
  | "phone"
  | "whatsapp"
  | "location"
  | "send"
  | "instagram"
  | "behance"
  | "linkedin"
  | "facebook";

const paths: Record<RunaIconName, JSX.Element> = {
  // R geométrico minimalista
  identity: (
    <>
      <path d="M7 21V4h6.5a4 4 0 0 1 0 8H7" />
      <path d="M12 12l5.5 9" />
    </>
  ),
  // quebra geométrica / setas de renovação retas
  modernize: (
    <>
      <path d="M4 9h11l-3-3" />
      <path d="M20 15H9l3 3" />
    </>
  ),
  // caixa/produto geométrica
  product: (
    <>
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
      <path d="M4 7.5l8 4.5 8-4.5M12 12v9" />
    </>
  ),
  // redes / nós conectados
  social: (
    <>
      <path d="M6 4h12v10H9l-3 3V4z" />
      <path d="M9 8h6M9 11h3" />
    </>
  ),
  // alvo geométrico
  strategy: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
    </>
  ),
  // lápis ponta triangular
  creation: (
    <>
      <path d="M16.5 3.5l4 4L9 19l-5 1.5L5.5 15 16.5 3.5z" />
      <path d="M5.5 15l3.5 4" />
    </>
  ),
  // grid 2x2 com um quadrado preenchido
  application: (
    <>
      <rect x="4" y="4" width="7" height="7" rx="1.5" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" fill="currentColor" fillOpacity="0.5" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" />
      <rect x="13" y="13" width="7" height="7" rx="1.5" />
    </>
  ),
  // envelope com V geométrico
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="M3.5 7l8.5 7 8.5-7" />
    </>
  ),
  // telefone com traço reto
  phone: (
    <>
      <path d="M7 3h4l1.5 4.5-2.5 2a12 12 0 0 0 5.5 5.5l2-2.5L22 14v4a3 3 0 0 1-3 3A16 16 0 0 1 3 5a2 2 0 0 1 2-2h2z" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M20 11.5a8 8 0 0 1-11.8 7.05L4 20l1.45-4.05A8 8 0 1 1 20 11.5Z" />
      <path d="M9 9l1 2-1 1a6 6 0 0 0 3 3l1-1 2 1v1.5a1.5 1.5 0 0 1-1.6 1.4A8.6 8.6 0 0 1 7.6 11 1.5 1.5 0 0 1 9 9.4V9z" />
    </>
  ),
  // pin com topo quadrado arredondado
  location: (
    <>
      <path d="M6 4.5h12v9.5L12 20.5 6 14V4.5z" />
      <path d="M9.5 9.5h5" />
    </>
  ),
  send: (
    <>
      <path d="M3 12L21 4l-8 17-2.5-6.5L3 12z" />
      <path d="M10.5 14.5L21 4" />
    </>
  ),
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M16.6 7.4h.01" />
    </>
  ),
  behance: (
    <>
      <path d="M3 6h5a2.5 2.5 0 0 1 0 5H3V6zM3 11h5.5a2.5 2.5 0 0 1 0 5H3v-5z" />
      <path d="M14 13.5h6a3 3 0 0 0-6 0 3 3 0 0 0 5.4 1.8" />
      <path d="M15.5 7.5h4" />
    </>
  ),
  linkedin: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M8 10.5V16M8 7.8h.01M12 16v-3.2a1.8 1.8 0 0 1 3.6 0V16" />
      <path d="M12 10.5V16" />
    </>
  ),
  facebook: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M15 8h-1.5A2.5 2.5 0 0 0 11 10.5V20M9 13h5" />
    </>
  ),
};

interface RunaIconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: RunaIconName;
}

export function RunaIcon({ name, className, ...props }: RunaIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}

export default RunaIcon;
