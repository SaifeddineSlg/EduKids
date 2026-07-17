import { SupabaseClient } from "@supabase/supabase-js";
import { SessionProfile } from "@/lib/auth/session";

/**
 * Verifie que le student demande appartient bien au parent connecte.
 * Un admin a toujours acces (bypass). Retourne le school_level_id du student
 * si autorise, sinon null (403/404 cote appelant).
 */
export async function requireParentOwnsStudent(
  supabase: SupabaseClient,
  profile: SessionProfile,
  studentId: string,
): Promise<{ schoolLevelId: string } | null> {
  const { data: student, error } = await supabase
    .from("students")
    .select("parent_id, school_level_id")
    .eq("id", studentId)
    .maybeSingle();

  if (error || !student) {
    return null;
  }

  if (profile.role !== "admin" && student.parent_id !== profile.id) {
    return null;
  }

  return { schoolLevelId: student.school_level_id };
}
