import { getSessionProfile, SessionProfile } from "@/lib/auth/session";

export async function requireAdminProfile(): Promise<SessionProfile | null> {
  const profile = await getSessionProfile();
  if (!profile || profile.role !== "admin") {
    return null;
  }
  return profile;
}
