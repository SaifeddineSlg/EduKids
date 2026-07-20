import { NextResponse } from "next/server";
import { getSupabaseServerClient, isSupabaseServerConfigured } from "@/lib/supabase/server";
import { resolveSiteUrl } from "@/lib/server/siteUrl";
import { isSmtpConfigured, sendEmail } from "@/lib/email/smtp";
import { resetPasswordEmailTemplate } from "@/lib/email/templates";

interface ForgotPasswordPayload {
  email: string;
}

function isForgotPasswordPayload(value: unknown): value is ForgotPasswordPayload {
  if (!value || typeof value !== "object") return false;
  const data = value as Record<string, unknown>;
  return typeof data.email === "string";
}

export async function POST(request: Request) {
  if (!isSupabaseServerConfigured() || !isSmtpConfigured()) {
    // Reponse generique meme en cas de mauvaise configuration : on ne veut pas
    // reveler de details techniques a un utilisateur non authentifie.
    return NextResponse.json({ ok: true });
  }

  const payload = await request.json();
  if (!isForgotPasswordPayload(payload)) {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }

  const supabase = getSupabaseServerClient();
  const origin = resolveSiteUrl(request);
  const normalizedEmail = payload.email.trim().toLowerCase();

  const { data, error } = await supabase.auth.admin.generateLink({
    type: "recovery",
    email: normalizedEmail,
    options: {
      redirectTo: `${origin}/auth/callback?next=/reset-password`,
    },
  });

  // Ne jamais reveler si l'email existe ou non : on repond toujours ok, mais on
  // n'envoie l'email que si le compte existe reellement (pas d'erreur ci-dessus).
  if (!error && data.properties?.action_link) {
    const { subject, html } = resetPasswordEmailTemplate(data.properties.action_link);
    try {
      await sendEmail({ to: normalizedEmail, subject, html });
    } catch {
      // On ignore volontairement l'echec d'envoi ici pour ne pas reveler
      // d'information a l'appelant ; l'admin peut consulter les logs serveur.
    }
  }

  return NextResponse.json({ ok: true });
}
