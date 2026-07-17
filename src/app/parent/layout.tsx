import { redirect } from "next/navigation";
import { getSessionProfile } from "@/lib/auth/session";

export default async function ParentLayout({ children }: { children: React.ReactNode }) {
  const profile = await getSessionProfile();
  if (!profile) {
    redirect("/");
  }

  return <>{children}</>;
}
