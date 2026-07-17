import { createSupabaseServerSessionClient } from "@/lib/supabase/serverSessionClient";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export interface SessionProfile {
  id: string;
  email: string;
  role: "admin" | "parent";
  displayName: string | null;
  isActive: boolean;
}

/**
 * Resout l'utilisateur connecte (via cookie de session) puis sa ligne `profiles`
 * (source de verite pour is_active/display_name). Retourne null si non connecte
 * ou si le compte a ete desactive par l'admin.
 */
export async function getSessionProfile(): Promise<SessionProfile | null> {
  const sessionClient = await createSupabaseServerSessionClient();
  const {
    data: { user },
  } = await sessionClient.auth.getUser();

  if (!user) {
    return null;
  }

  const supabase = getSupabaseServerClient();
  const { data: profile, error } = await supabase
    .from("profiles")
    .select("id, email, role, display_name, is_active")
    .eq("id", user.id)
    .maybeSingle();

  if (error || !profile || !profile.is_active) {
    return null;
  }

  return {
    id: profile.id,
    email: profile.email,
    role: profile.role,
    displayName: profile.display_name,
    isActive: profile.is_active,
  };
}
