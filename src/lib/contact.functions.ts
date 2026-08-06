import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data) =>
    z
      .object({
        name: z.string().trim().min(1).max(200),
        company: z.string().trim().max(200).optional().default(""),
        email: z.string().trim().email().max(320),
        phone: z.string().trim().max(60).optional().default(""),
        service: z.string().trim().min(1).max(200),
        message: z.string().trim().min(1).max(5000),
        website: z.string().max(200).optional().default(""),
      })
      .parse(data),
  )
  .handler(async ({ data }) => {
    // Honeypot: bots fill the hidden "website" field — pretend success.
    if (data.website) {
      return { success: true };
    }

    const { sendLovableEmail } = await import("@lovable.dev/email-js");

    const esc = (value: string) =>
      value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");

    const fields: Array<[string, string]> = [
      ["Nome", data.name],
      ["Empresa", data.company || "—"],
      ["Email", data.email],
      ["Telefone", data.phone || "—"],
      ["Serviço pretendido", data.service],
    ];

    const rowsHtml = fields
      .map(
        ([label, value]) =>
          `<tr>
            <td style="padding:10px 16px;font-size:12px;color:#8b95a5;text-transform:uppercase;letter-spacing:0.08em;white-space:nowrap;vertical-align:top;">${esc(label)}</td>
            <td style="padding:10px 16px;font-size:15px;color:#1A2230;">${esc(value)}</td>
          </tr>`,
      )
      .join("");

    const html = `<!DOCTYPE html>
<html lang="pt">
  <head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /></head>
  <body style="margin:0;padding:0;background-color:#f4f6f8;font-family:Arial,Helvetica,sans-serif;">
    <div style="max-width:600px;margin:0 auto;padding:32px 16px;">
      <div style="background-color:#1A2230;border-radius:16px 16px 0 0;padding:28px 32px;">
        <div style="font-size:20px;font-weight:bold;color:#ffffff;letter-spacing:0.14em;">RUNA<span style="color:#31D6D0;">.</span></div>
        <div style="margin-top:6px;font-size:13px;color:#9aa5b4;">Novo pedido de orçamento através do site</div>
      </div>
      <div style="background-color:#ffffff;padding:20px 0 8px;border-radius:0 0 16px 16px;">
        <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">${rowsHtml}</table>
        <div style="margin:20px 16px 0;padding:16px;background-color:#f4f6f8;border-left:3px solid #31D6D0;border-radius:0 8px 8px 0;">
          <div style="font-size:12px;color:#8b95a5;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px;">Mensagem</div>
          <div style="font-size:15px;color:#1A2230;line-height:1.6;white-space:pre-wrap;">${esc(data.message)}</div>
        </div>
        <div style="margin:24px 16px 16px;font-size:13px;color:#8b95a5;">Responda diretamente a este email para contactar ${esc(data.name)} (${esc(data.email)}).</div>
      </div>
    </div>
  </body>
</html>`;

    const text = [
      "Novo pedido de orçamento através do site",
      "",
      ...fields.map(([label, value]) => `${label}: ${value}`),
      "",
      "Mensagem:",
      data.message,
    ].join("\n");

    return sendLovableEmail(
      {
        from: "RUNA Design <hello@runastudio.pt>",
        to: "hello@runastudio.pt",
        reply_to: data.email,
        subject: `Novo pedido de orçamento — ${data.name}`,
        html,
        text,
        label: "contact-form",
      },
      { apiKey: process.env["LOVABLE_API_KEY"]! },
    );
  });