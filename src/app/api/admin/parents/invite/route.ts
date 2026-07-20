import { NextResponse } from "next/server";
import { getSupabaseServerClient, isSupabaseServerConfigured } from "@/lib/supabase/server";
import { requireAdminProfile } from "@/lib/auth/requireAdmin";
import { resolveSiteUrl } from "@/lib/server/siteUrl";
import { isResendConfigured, sendEmail } from "@/lib/email/resend";
import { inviteEmailTemplate } from "@/lib/email/templates";

interface InvitePayload {
  email: string;
  displayName: string;
}

function isInvitePayload(value: unknown): value is InvitePayload {
  if (!value || typeof value !== "object") return false;
  const data = value as Record<string, unknown>;
  return typeof data.email === "string" && typeof data.displayName === "string";
}

export async function POST(request: Request) {
  if (!isSupabaseServerConfigured()) {
    return NextResponse.json({ ok: false, error: "Supabase server not configured" }, { status: 500 });
  }

  if (!isResendConfigured()) {
    return NextResponse.json({ ok: false, error: "Envoi d'email non configure (RESEND_API_KEY manquant)" }, { status: 500 });
  }

  const admin = await requireAdminProfile();
  if (!admin) {
    return NextResponse.json({ ok: false, error: "Acces refuse" }, { status: 403 });
  }

  const payload = await request.json();
  if (!isInvitePayload(payload)) {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }

  const supabase = getSupabaseServerClient();

  const origin = resolveSiteUrl(request);
  const normalizedEmail = payload.email.trim().toLowerCase();

  // Cree le compte (sans mot de passe) et genere un lien d'invitation, SANS que
  // Supabase envoie lui-meme l'email (quota gratuit tres limite). On envoie
  // l'email nous-memes via Resend juste apres.
  const { data, error } = await supabase.auth.admin.generateLink({
    type: "invite",
    email: normalizedEmail,
    options: {
      data: { display_name: payload.displayName },
      redirectTo: `${origin}/auth/callback?next=/reset-password`,
    },
  });

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }

  // Le trigger handle_new_user cree deja la ligne profiles avec role='parent' par defaut,
  // mais on force display_name ici au cas ou le trigger n'aurait pas encore couru.
  await supabase
    .from("profiles")
    .update({ display_name: payload.displayName })
    .eq("id", data.user.id);

  const { subject, html } = inviteEmailTemplate(payload.displayName, data.properties.action_link);

  try {
    await sendEmail({ to: normalizedEmail, subject, html });
  } catch (sendError) {
    const message = sendError instanceof Error ? sendError.message : "Echec de l'envoi de l'email";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, profileId: data.user.id });
}
