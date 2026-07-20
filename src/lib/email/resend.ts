const RESEND_API_URL = "https://api.resend.com/emails";

interface SendEmailInput {
  to: string;
  subject: string;
  html: string;
}

export function isResendConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY && process.env.RESEND_FROM_EMAIL);
}

/**
 * Envoie un email via l'API Resend (https://resend.com), en remplacement de
 * l'envoi integre de Supabase Auth dont le quota gratuit est tres limite
 * (2-4 emails/jour). Necessite RESEND_API_KEY et RESEND_FROM_EMAIL dans
 * les variables d'environnement.
 */
export async function sendEmail({ to, subject, html }: SendEmailInput): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    throw new Error("RESEND_API_KEY et RESEND_FROM_EMAIL sont requis pour envoyer un email.");
  }

  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to, subject, html }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Echec de l'envoi de l'email (${response.status}) : ${body}`);
  }
}
