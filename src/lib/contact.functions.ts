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
        submissionId: z.string().trim().max(64).optional().default(""),
      })
      .parse(data),
  )
  .handler(async ({ data }) => {
    // Honeypot: bots fill the hidden "website" field — pretend success.
    if (data.website) {
      return { success: true };
    }

    const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");

    await sendTemplateEmail("contact-notification", "hello@runastudio.pt", {
      templateData: {
        name: data.name,
        company: data.company,
        email: data.email,
        phone: data.phone,
        service: data.service,
        message: data.message,
      },
      idempotencyKey: `contact-notification-${data.submissionId || crypto.randomUUID()}`,
      replyTo: data.email,
    });

    return { success: true };
  });