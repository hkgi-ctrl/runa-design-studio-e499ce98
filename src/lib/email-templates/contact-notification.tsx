import React from "react";
import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import type { TemplateEntry } from "./registry";

interface Props {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

const GRAPHITE = "#1A2230";
const TURQUOISE = "#31D6D0";
const MUTED = "#8b95a5";
const SOFT_BG = "#f4f6f8";

function Field({ label, value }: { label: string; value?: string }) {
  return (
    <Row>
      <Column style={labelCell}>{label}</Column>
      <Column style={valueCell}>{value || "—"}</Column>
    </Row>
  );
}

const ContactNotification = ({ name, company, email, phone, service, message }: Props) => (
  <Html lang="pt" dir="ltr">
    <Head />
    <Preview>Novo pedido de orçamento de {name || "um visitante"} através do site</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Text style={logo}>
            RUNA<span style={{ color: TURQUOISE }}>.</span>
          </Text>
          <Text style={headerSub}>Novo pedido de orçamento através do site</Text>
        </Section>

        <Section style={bodySection}>
          <Field label="Nome" value={name} />
          <Field label="Empresa" value={company} />
          <Field label="Email" value={email} />
          <Field label="Telefone" value={phone} />
          <Field label="Serviço pretendido" value={service} />

          <Section style={messageBox}>
            <Text style={messageLabel}>Mensagem</Text>
            <Text style={messageText}>{message || "—"}</Text>
          </Section>

          <Text style={footerNote}>
            Responda diretamente a este email para contactar {name || "o visitante"}
            {email ? ` (${email})` : ""}.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export const template = {
  component: ContactNotification,
  subject: (data: Record<string, any>) =>
    `Novo pedido de orçamento — ${data.name || "Contacto"}`,
  displayName: "Notificação de pedido de orçamento",
  to: "hello@runastudio.pt",
  previewData: {
    name: "Maria Silva",
    company: "Aura Skincare",
    email: "maria@example.com",
    phone: "+351 923 397 753",
    service: "Identidade Visual",
    message: "Olá! Gostaria de pedir um orçamento para a identidade visual da minha marca.",
  },
} satisfies TemplateEntry;

const main: React.CSSProperties = {
  backgroundColor: "#ffffff",
  fontFamily: "Arial, Helvetica, sans-serif",
};

const container: React.CSSProperties = {
  maxWidth: "600px",
  margin: "0 auto",
  padding: "32px 16px",
};

const header: React.CSSProperties = {
  backgroundColor: GRAPHITE,
  borderRadius: "16px 16px 0 0",
  padding: "28px 32px",
};

const logo: React.CSSProperties = {
  margin: 0,
  fontSize: "20px",
  fontWeight: "bold",
  color: "#ffffff",
  letterSpacing: "0.14em",
};

const headerSub: React.CSSProperties = {
  margin: "6px 0 0",
  fontSize: "13px",
  color: "#9aa5b4",
};

const bodySection: React.CSSProperties = {
  backgroundColor: "#ffffff",
  borderRadius: "0 0 16px 16px",
  padding: "12px 0 8px",
};

const labelCell: React.CSSProperties = {
  padding: "10px 16px",
  fontSize: "12px",
  color: MUTED,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  whiteSpace: "nowrap",
  verticalAlign: "top",
  width: "180px",
};

const valueCell: React.CSSProperties = {
  padding: "10px 16px",
  fontSize: "15px",
  color: GRAPHITE,
};

const messageBox: React.CSSProperties = {
  margin: "20px 16px 0",
  padding: "16px",
  backgroundColor: SOFT_BG,
  borderLeft: `3px solid ${TURQUOISE}`,
  borderRadius: "0 8px 8px 0",
};

const messageLabel: React.CSSProperties = {
  margin: "0 0 8px",
  fontSize: "12px",
  color: MUTED,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
};

const messageText: React.CSSProperties = {
  margin: 0,
  fontSize: "15px",
  color: GRAPHITE,
  lineHeight: "1.6",
  whiteSpace: "pre-wrap",
};

const footerNote: React.CSSProperties = {
  margin: "24px 16px 16px",
  fontSize: "13px",
  color: MUTED,
};