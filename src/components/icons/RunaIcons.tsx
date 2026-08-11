import type { ReactElement, SVGProps } from "react";

export type RunaSvgProps = SVGProps<SVGSVGElement>;

function CustomIcon({ children, className, ...props }: RunaSvgProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="#7DD3E0"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function IconRunaGeometric(props: RunaSvgProps) {
  return (
    <CustomIcon {...props}>
      <path d="M5 21V3h9l4 4v3l-4 4H5" />
      <path d="M10 14h4l5 7" />
      <path d="M8 7h5l1 1v1l-1 1H8" />
    </CustomIcon>
  );
}

export function IconRefreshGeometric(props: RunaSvgProps) {
  return (
    <CustomIcon {...props}>
      <path d="M19 8V4l-2 2-2-2" />
      <path d="M19 6h-8L7 8l-2 4" />
      <path d="M5 16v4l2-2 2 2" />
      <path d="M5 18h8l4-2 2-4" />
    </CustomIcon>
  );
}

export function IconCubeIso(props: RunaSvgProps) {
  return (
    <CustomIcon {...props}>
      <path d="M12 2.75 20 7v9.5L12 21.25 4 16.5V7L12 2.75Z" />
      <path d="m4 7 8 4.5L20 7M12 11.5v9.75" />
      <path d="m8 5 8 4.5" />
    </CustomIcon>
  );
}

export function IconGridFeed(props: RunaSvgProps) {
  return (
    <CustomIcon {...props}>
      <path d="M3.5 3.5h7v7h-7zM13.5 3.5h7v7h-7zM3.5 13.5h7v7h-7z" />
      <path d="M13.5 13.5h7v7h-7z" fill="#7DD3E0" fillOpacity="0.2" />
      <path d="M16 17h2" />
    </CustomIcon>
  );
}

export function IconTarget(props: RunaSvgProps) {
  return (
    <CustomIcon {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5.75" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="m12 12 7-7M16.5 5H19v2.5" />
      <rect x="11.35" y="11.35" width="1.3" height="1.3" fill="#7DD3E0" stroke="none" />
    </CustomIcon>
  );
}

export function IconAIBrain(props: RunaSvgProps) {
  return (
    <CustomIcon {...props}>
      <path d="M11.5 4H8L5.5 6.5V10L3.5 12l2 2v3.5L8 20h3.5V4ZM12.5 4H16l2.5 2.5V10l2 2-2 2v3.5L16 20h-3.5V4Z" />
      <path d="M8 8h2.5M13.5 8H16M8 16h2.5M13.5 16H16M12 12H8" />
      <circle cx="7" cy="8" r="1" fill="#7DD3E0" fillOpacity="0.2" />
      <circle cx="17" cy="8" r="1" fill="#7DD3E0" fillOpacity="0.2" />
      <circle cx="7" cy="16" r="1" fill="#7DD3E0" fillOpacity="0.2" />
    </CustomIcon>
  );
}

export function IconPalette(props: RunaSvgProps) {
  return (
    <CustomIcon {...props}>
      <path d="M12 3 7 9v4.5l2.5 2.5h5l2.5-2.5V9l-5-6Z" />
      <path d="M12 8v4" />
      <circle cx="5" cy="6" r="1.25" />
      <circle cx="19" cy="6" r="1.25" />
      <circle cx="19" cy="18" r="1.25" />
      <path d="M4 17h6l2 2h4" />
    </CustomIcon>
  );
}

export function IconChatTransparent(props: RunaSvgProps) {
  return (
    <CustomIcon {...props}>
      <path d="M3 4h13v9H9l-4 3v-3H3V4Z" />
      <path d="M9 16h6l4 3v-3h2V8h-5" />
      <path d="M6 8h7M12 12h5" />
    </CustomIcon>
  );
}

export function IconGraphResult(props: RunaSvgProps) {
  return (
    <CustomIcon {...props}>
      <path d="M3 3v18h18" />
      <path d="m6 17 4-5 3 2 6-8" />
      <path d="M15 6h4v4" />
      <path d="M6 20v-2M10 20v-5M14 20v-3" />
    </CustomIcon>
  );
}

export function IconPhoneChannel(props: RunaSvgProps) {
  return (
    <CustomIcon {...props}>
      <path d="M7 2.5h10l2 2v15l-2 2H7l-2-2v-15l2-2Z" />
      <path d="M9 5.5h6M5 17.5h14" />
      <rect x="11" y="19" width="2" height="1" fill="#7DD3E0" fillOpacity="0.2" />
      <path d="M8.5 9h3v3h-3zM13.5 9h2v2" />
    </CustomIcon>
  );
}

export type RunaIconName =
  | "identity"
  | "modernize"
  | "product"
  | "social"
  | "strategy"
  | "creation"
  | "application"
  | "target"
  | "ai"
  | "palette"
  | "chat"
  | "growth"
  | "mobile"
  | "mail"
  | "phone"
  | "whatsapp"
  | "location"
  | "send"
  | "instagram"
  | "behance"
  | "linkedin"
  | "facebook";

const paths: Record<RunaIconName, ReactElement> = {
  // Símbolo R da RUNA: hastes retas com quebra a 45°
  identity: (
    <>
      <path d="M6 21V3h8l3 3v4l-3 3H6" />
      <path d="M11.5 13L18 21" />
    </>
  ),
  // duas setas de renovação com quebra geométrica (antes/depois)
  modernize: (
    <>
      <path d="M4 10V7h12l-3-3" />
      <path d="M20 14v3H8l3 3" />
    </>
  ),
  // cubo isométrico em line
  product: (
    <>
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
      <path d="M4 7.5l8 4.5 8-4.5M12 12v9" />
    </>
  ),
  // grid 2x2 (feed) com um ponto turquesa
  social: (
    <>
      <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />
      <circle cx="16.5" cy="16.5" r="1.4" fill="currentColor" />
    </>
  ),
  // alvo com 3 círculos e ponto central
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
    </>
  ),
  // cérebro com circuitos, geométrico
  ai: (
    <>
      <path d="M12 4.5H9L6 7.5v3L4.5 12 6 13.5v3L9 19.5h3M12 4.5h3l3 3v3l1.5 1.5L18 13.5v3l-3 3h-3" />
      <path d="M12 4.5v15M12 9h3.5M12 15H8.5" />
      <circle cx="16.5" cy="9" r="1.2" fill="currentColor" />
      <circle cx="7.5" cy="15" r="1.2" fill="currentColor" />
    </>
  ),
  // paleta com gota e pontos
  palette: (
    <>
      <path d="M12 3.5a8.5 8.5 0 1 0 0 17h2a2 2 0 0 0 0-4h-1a2.5 2.5 0 0 1 0-5h4.5a8.5 8.5 0 0 0-5.5-8z" />
      <circle cx="8.5" cy="9" r="1.1" fill="currentColor" />
      <circle cx="7" cy="13.5" r="1.1" fill="currentColor" />
      <circle cx="12" cy="7.5" r="1.1" fill="currentColor" />
    </>
  ),
  // dois balões sobrepostos com linha
  chat: (
    <>
      <path d="M3.5 4.5h11v8h-7l-4 3.5v-11.5z" />
      <path d="M8.5 15.5h6l4 3.5V10h-4" />
      <path d="M6.5 8.5h5" />
    </>
  ),
  // gráfico de linha ascendente com seta
  growth: (
    <>
      <path d="M3.5 20V4M3.5 20h17" />
      <path d="M6.5 16l4-4.5 3 2.5 5.5-6" />
      <path d="M15 8h4v4" />
    </>
  ),
  // smartphone com moldura reta
  mobile: (
    <>
      <path d="M6.5 3h11v18h-11V3z" />
      <path d="M10 5.5h4M10 18h4" />
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
