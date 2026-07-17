"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { PasswordInput } from "@/components/ui/PasswordInput";
import { createSupabaseBrowserClient } from "@/lib/supabase/browserClient";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createSupabaseBrowserClient();
    const { data, error: signInError } = await supabase.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password,
    });

    if (signInError || !data.user) {
      setError("Email ou mot de passe incorrect.");
      setLoading(false);
      return;
    }

    const role = (data.user.app_metadata as { role?: string } | undefined)?.role ?? "parent";
    router.push(role === "admin" ? "/admin" : "/parent");
    router.refresh();
  }

  return (
    <section className="stack-lg">
      <header className="hero">
        <div>
          <p className="eyebrow">Bienvenue</p>
          <h1>Connecte-toi a ton espace</h1>
        </div>
        <div className="mascot-wrap">
          <Image src="/images/mascot.svg" alt="Mascotte renard" width={180} height={180} priority />
        </div>
      </header>

      <Card>
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
          <div>
            <label className="exercise-label" htmlFor="password">Mot de passe</label>
            <PasswordInput
              id="password"
              value={password}
              onChange={setPassword}
              autoComplete="current-password"
              required
            />
          </div>

          {error ? <p className="feedback-help">{error}</p> : null}

          <button type="submit" className="primary-btn big-btn" disabled={loading}>
            {loading ? "Connexion..." : "Se connecter"}
          </button>
        </form>

        <div className="chips-row" style={{ marginTop: "1rem" }}>
          <Link href="/forgot-password" className="ghost-btn">Mot de passe oublie</Link>
        </div>
      </Card>
    </section>
  );
}
