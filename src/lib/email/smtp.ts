import nodemailer from "nodemailer";

interface SendEmailInput {
  to: string;
  subject: string;
  html: string;
}

export function isSmtpConfigured(): boolean {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_PORT &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.SMTP_FROM,
  );
}

let cachedTransporter: ReturnType<typeof nodemailer.createTransport> | null = null;

function getTransporter() {
  if (cachedTransporter) return cachedTransporter;

  const port = Number(process.env.SMTP_PORT);
  cachedTransporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  return cachedTransporter;
}

/**
 * Envoie un email via un compte SMTP classique (ex: Gmail avec un mot de passe
 * d'application). Contrairement a un service transactionnel comme Resend, aucune
 * verification de domaine n'est necessaire puisqu'on envoie depuis une adresse
 * deja verifiee par le fournisseur (gmail.com, etc.).
 */
export async function sendEmail({ to, subject, html }: SendEmailInput): Promise<void> {
  if (!isSmtpConfigured()) {
    throw new Error("SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS et SMTP_FROM sont requis pour envoyer un email.");
  }

  const transporter = getTransporter();
  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to,
    subject,
    html,
  });
}
