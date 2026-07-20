"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const response = await fetch("/api/auth/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const json = await response.json();

    setLoading(false);

    if (!response.ok || !json.ok) {
      setError("Une erreur est survenue. Reessaie dans un instant.");
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
