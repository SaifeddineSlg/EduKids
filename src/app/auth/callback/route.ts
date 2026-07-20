import { NextResponse } from "next/server";
import { createSupabaseServerSessionClient } from "@/lib/supabase/serverSessionClient";

/**
 * Point d'entree commun pour tous les liens envoyes par email (invitation,
 * reinitialisation de mot de passe). Supabase utilise le flux PKCE : le lien
 * contient un `code` a echanger contre une session AVANT toute action comme
 * updateUser (sinon "Auth session missing" / erreur d'authentification).
 */
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/reset-password";

  if (code) {
    const supabase = await createSupabaseServerSessionClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) {
      return NextResponse.redirect(
        `${origin}/reset-password?error=${encodeURIComponent(error.message)}`,
      );
    }
  }

  return NextResponse.redirect(`${origin}${next}`);
}
