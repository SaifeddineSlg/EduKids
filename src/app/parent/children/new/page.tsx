"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/Card";

interface SchoolLevel {
  id: string;
  code: string;
  label: string;
}

const AVATAR_OPTIONS = ["👧", "👦", "🧒", "🦊", "🐱", "🐶", "🐼", "🦁"];

export default function NewChildPage() {
  const router = useRouter();
  const [levels, setLevels] = useState<SchoolLevel[]>([]);
  const [firstName, setFirstName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [schoolLevelId, setSchoolLevelId] = useState("");
  const [avatar, setAvatar] = useState(AVATAR_OPTIONS[0]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/school-levels")
      .then((response) => response.json())
      .then((json) => {
        if (json.ok) {
          setLevels(json.schoolLevels);
          if (json.schoolLevels.length > 0) {
            setSchoolLevelId(json.schoolLevels[0].id);
          }
        }
      });
  }, []);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const response = await fetch("/api/parent/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        birthDate: birthDate || null,
        schoolLevelId,
        avatar,
      }),
    });
    const json = await response.json();
    setLoading(false);

    if (!response.ok || !json.ok) {
      setError(json.error ?? "Une erreur est survenue.");
      return;
    }

    router.push("/parent");
    router.refresh();
  }

  return (
    <section className="stack-lg">
      <Card>
        <h1>Ajouter un enfant</h1>
        <form className="stack-lg" onSubmit={handleSubmit}>
          <div>
            <label className="exercise-label" htmlFor="firstName">Prenom</label>
            <input
              id="firstName"
              className="answer-input"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              required
            />
          </div>

          <div>
            <label className="exercise-label" htmlFor="birthDate">Date de naissance (optionnelle)</label>
            <input
              id="birthDate"
              type="date"
              className="answer-input"
              value={birthDate}
              onChange={(event) => setBirthDate(event.target.value)}
            />
          </div>

          <div>
            <label className="exercise-label" htmlFor="schoolLevel">Niveau scolaire</label>
            <select
              id="schoolLevel"
              className="answer-input"
              value={schoolLevelId}
              onChange={(event) => setSchoolLevelId(event.target.value)}
              required
            >
              {levels.map((level) => (
                <option key={level.id} value={level.id}>{level.label}</option>
              ))}
            </select>
          </div>

          <div>
            <p className="exercise-label">Avatar</p>
            <div className="quiz-options">
              {AVATAR_OPTIONS.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`ghost-btn ${avatar === option ? "is-active" : ""}`}
                  onClick={() => setAvatar(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {error ? <p className="feedback-help">{error}</p> : null}

          <button type="submit" className="primary-btn big-btn" disabled={loading || !schoolLevelId}>
            {loading ? "Creation..." : "Ajouter"}
          </button>
        </form>
      </Card>
    </section>
  );
}
