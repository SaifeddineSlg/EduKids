"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { createSupabaseBrowserClient } from "@/lib/supabase/browserClient";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createSupabaseBrowserClient();
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email.trim().toLowerCase(), {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    setLoading(false);

    if (resetError) {
      setError(resetError.message);
      return;
    }

    setDone(true);
  }

  return (
    <section className="stack-lg">
      <Card>
        <h1>Mot de passe oublie</h1>
        {done ? (
          <p>Si un compte existe avec cet email, un lien de reinitialisation vient de lui etre envoye.</p>
        ) : (
          <form className="stack-lg" onSubmit={handleSubmit}>
            <div>
              <label className="exercise-label" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="answer-input"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            {error ? <p className="feedback-help">{error}</p> : null}

            <button type="submit" className="primary-btn big-btn" disabled={loading}>
              {loading ? "Envoi..." : "Envoyer le lien"}
            </button>
          </form>
        )}
      </Card>
    </section>
  );
}
