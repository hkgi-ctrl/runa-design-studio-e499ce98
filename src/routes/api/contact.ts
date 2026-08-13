import { createFileRoute } from "@tanstack/react-router";
import { Resend } from "resend";
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

          const supabaseUrl = process.env['VITE_SUPABASE_URL'] || process.env['SUPABASE_URL'];
          const supabaseKey = process.env['VITE_SUPABASE_ANON_KEY'] || process.env['SUPABASE_PUBLISHABLE_KEY'];
          const resendKey = process.env['RESEND_API_KEY'];

          if (!supabaseUrl || !supabaseKey) {
            throw new Error("Supabase env missing");
          }

          // 1) Guarda na base de dados — garantido.
          const dbRes = await fetch(`${supabaseUrl}/rest/v1/contact_leads`, {
            method: "POST",
            headers: {
              apikey: supabaseKey,
              Authorization: `Bearer ${supabaseKey}`,
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

          // 2) Tenta notificar por email via Resend.
          try {
            if (!resendKey) {
              console.error("RESEND_API_KEY missing");
            } else {
              const resend = new Resend(resendKey);
              const emailRes = await resend.emails.send({
                from: "RUNA Studio <hello@runastudio.pt>",
                to: "hello@runastudio.pt",
                replyTo: data.email,
                subject: `[SITE] ${data.servico || "Geral"} - ${data.nome}`,
                html: `<h2>Novo contacto do site runastudio.pt</h2>
<p><strong>Nome:</strong> ${esc(data.nome)}</p>
<p><strong>Empresa:</strong> ${esc(data.empresa || "-")}</p>
<p><strong>Email:</strong> ${esc(data.email)}</p>
<p><strong>Telefone:</strong> ${esc(data.telefone || "-")}</p>
<p><strong>Serviço:</strong> ${esc(data.servico || "-")}</p>
<p><strong>Mensagem:</strong><br>${esc(data.mensagem).replace(/\n/g, "<br>")}</p>
<hr>
<p>Responda diretamente a este email para falar com o cliente.</p>`,
              });
              if (emailRes.error) {
                console.error("Resend error", emailRes.error);
              }
            }
          } catch (mailError) {
            console.error("Resend exception", mailError);
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
