import { redirect } from "next/navigation";
import { getSessionProfile } from "@/lib/auth/session";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const profile = await getSessionProfile();
  if (!profile || profile.role !== "admin") {
    redirect("/");
  }

  return <>{children}</>;
}
