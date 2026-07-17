import { SupabaseClient } from "@supabase/supabase-js";
import { SessionProfile } from "@/lib/auth/session";

export interface AuthorizedStudent {
  id: string;
  firstName: string;
  schoolLevelId: string;
  schoolLevelCode: string;
}

/**
 * Resout un student et verifie qu'il appartient au parent connecte (ou que
 * l'appelant est admin). Retourne null si introuvable ou non autorise.
 */
export async function getAuthorizedStudent(
  supabase: SupabaseClient,
  profile: SessionProfile,
  studentId: string,
): Promise<AuthorizedStudent | null> {
  const { data: student, error } = await supabase
    .from("students")
    .select("id, first_name, parent_id, school_level_id, school_levels(code)")
    .eq("id", studentId)
    .is("archived_at", null)
    .maybeSingle();

  if (error || !student) {
    return null;
  }

  if (profile.role !== "admin" && student.parent_id !== profile.id) {
    return null;
  }

  const schoolLevel = student.school_levels as unknown as { code: string } | null;
  if (!schoolLevel) {
    return null;
  }

  return {
    id: student.id,
    firstName: student.first_name,
    schoolLevelId: student.school_level_id,
    schoolLevelCode: schoolLevel.code,
  };
}
