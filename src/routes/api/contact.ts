import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const schema = z.object({
  nome: z.string().trim().min(1).max(200),
  empresa: z.string().trim().max(200).optional().default(""),
  email: z.string().trim().email().max(320),
  telefone: z.string().trim().max(60).optional().default(""),
  servico: z.string().trim().max(200).optional().default(""),
  mensagem: z.string().trim().min(1).max(5000),
  website: z.string().max(200).optional().default(""),
});

const esc = (v: string) =>
  v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const parsed = schema.safeParse(await request.json());
          if (!parsed.success) {
            return Response.json({ success: false, error: "invalid_input" }, { status: 400 });
          }
          const data = parsed.data;

          // Honeypot: bots preenchem o campo escondido.
          if (data.website) return Response.json({ success: true });

          const supabaseUrl = process.env['SUPABASE_URL'];
          const supabaseKey = process.env['SUPABASE_PUBLISHABLE_KEY'];
          if (!supabaseUrl || !supabaseKey) throw new Error("Supabase env missing");

          // 1) Guarda na base de dados — garantido.
          const dbRes = await fetch(`${supabaseUrl}/rest/v1/contact_leads`, {
            method: "POST",
            headers: {
              apikey: supabaseKey,
              "Content-Type": "application/json",
              Prefer: "return=minimal",
            },
            body: JSON.stringify({
              nome: data.nome,
              empresa: data.empresa || null,
              email: data.email,
              telefone: data.telefone || null,
              servico: data.servico || null,
              mensagem: data.mensagem,
            }),
          });
          if (!dbRes.ok) {
            console.error("contact_leads insert failed", dbRes.status, await dbRes.text());
            return Response.json({ success: false, error: "storage_failed" }, { status: 500 });
          }

          // 2) Tenta notificar por email (MailChannels via HTTP).
          try {
            const mailRes = await fetch("https://api.mailchannels.net/tx/v1/send", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                personalizations: [{ to: [{ email: "hello@runastudio.pt", name: "RUNA Studio" }] }],
                from: { email: "hello@runastudio.pt", name: "RUNA Studio Site" },
                reply_to: { email: data.email, name: data.nome },
                subject: `[SITE] Novo contacto: ${data.servico || "Geral"} - ${data.nome}`,
                content: [
                  {
                    type: "text/html",
                    value: `<h2>Novo contacto do site runastudio.pt</h2>
<p><strong>Nome:</strong> ${esc(data.nome)}</p>
<p><strong>Empresa:</strong> ${esc(data.empresa || "-")}</p>
<p><strong>Email:</strong> ${esc(data.email)}</p>
<p><strong>Telefone:</strong> ${esc(data.telefone || "-")}</p>
<p><strong>Serviço:</strong> ${esc(data.servico || "-")}</p>
<p><strong>Mensagem:</strong><br>${esc(data.mensagem).replace(/\n/g, "<br>")}</p>
<hr>
<p>Responda diretamente a este email para falar com o cliente.</p>`,
                  },
                ],
              }),
            });
            if (!mailRes.ok) {
              console.error("MailChannels failed", mailRes.status, await mailRes.text());
            }
          } catch (mailError) {
            console.error("MailChannels error", mailError);
          }

          return Response.json({ success: true });
        } catch (error) {
          console.error("Contact error", error);
          return Response.json({ success: false, error: "unexpected" }, { status: 500 });
        }
      },
    },
  },
});
