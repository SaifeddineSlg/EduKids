"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { PasswordInput } from "@/components/ui/PasswordInput";
import { createSupabaseBrowserClient } from "@/lib/supabase/browserClient";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createSupabaseBrowserClient();
    const { error: updateError } = await supabase.auth.updateUser({ password });

    setLoading(false);

    if (updateError) {
      setError(updateError.message);
      return;
    }

    router.push("/");
  }

  return (
    <section className="stack-lg">
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
    </section>
  );
}
