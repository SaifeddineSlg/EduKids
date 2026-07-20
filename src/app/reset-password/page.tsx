"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { PasswordInput } from "@/components/ui/PasswordInput";
import { createSupabaseBrowserClient } from "@/lib/supabase/browserClient";

type SessionState = "checking" | "ready" | "missing";

function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionState, setSessionState] = useState<SessionState>("checking");
  const [error, setError] = useState<string | null>(
    searchParams.get("error")
      ? "Ce lien n'est plus valide (il a peut-etre expire ou deja ete utilise). Demande un nouveau lien."
      : null,
  );

  useEffect(() => {
    if (searchParams.get("error")) {
      setSessionState("missing");
      return;
    }

    let cancelled = false;

    async function ensureSession() {
      const supabase = createSupabaseBrowserClient();

      // Filet de securite : si le lien contient un fragment #access_token=...
      // (flux implicite) plutot qu'un ?code=... (flux PKCE deja traite par
      // /auth/callback), le client cookie-based de @supabase/ssr ne le
      // detecte pas automatiquement. On l'extrait et on etablit la session
      // manuellement dans ce cas.
      if (typeof window !== "undefined" && window.location.hash.includes("access_token")) {
        const hashParams = new URLSearchParams(window.location.hash.slice(1));
        const accessToken = hashParams.get("access_token");
        const refreshToken = hashParams.get("refresh_token");
        if (accessToken && refreshToken) {
          await supabase.auth.setSession({ access_token: accessToken, refresh_token: refreshToken });
          window.history.replaceState(null, "", window.location.pathname);
        }
      }

      const { data } = await supabase.auth.getSession();
      if (cancelled) return;

      if (!data.session) {
        setSessionState("missing");
        setError("Ce lien n'est plus valide (il a peut-etre expire ou deja ete utilise). Demande un nouveau lien.");
        return;
      }

      setSessionState("ready");
    }

    void ensureSession();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createSupabaseBrowserClient();
    const { data, error: updateError } = await supabase.auth.updateUser({ password });

    setLoading(false);

    if (updateError || !data.user) {
      setError(updateError?.message ?? "La mise a jour du mot de passe a echoue. Reessaie.");
      return;
    }

    router.push("/");
  }

  if (sessionState === "checking") {
    return (
      <Card>
        <p>Verification du lien...</p>
      </Card>
    );
  }

  if (sessionState === "missing") {
    return (
      <Card>
        <h1>Lien invalide</h1>
        <p className="feedback-help">{error}</p>
      </Card>
    );
  }

  return (
    <Card>
      <h1>Choisis un nouveau mot de passe</h1>
      <form className="stack-lg" onSubmit={handleSubmit}>
        <div>
          <label className="exercise-label" htmlFor="password">Nouveau mot de passe</label>
          <PasswordInput
            id="password"
            value={password}
            onChange={setPassword}
            minLength={6}
            autoComplete="new-password"
            required
          />
        </div>

        {error ? <p className="feedback-help">{error}</p> : null}

        <button type="submit" className="primary-btn big-btn" disabled={loading}>
          {loading ? "Enregistrement..." : "Enregistrer"}
        </button>
      </form>
    </Card>
  );
}

export default function ResetPasswordPage() {
  return (
    <section className="stack-lg">
      <Suspense fallback={null}>
        <ResetPasswordForm />
      </Suspense>
    </section>
  );
}
