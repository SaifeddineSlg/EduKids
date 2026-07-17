"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Card } from "@/components/ui/Card";

interface SchoolLevel {
  id: string;
  code: string;
  label: string;
}

const AVATAR_OPTIONS = ["👧", "👦", "🧒", "🦊", "🐱", "🐶", "🐼", "🦁"];

export default function EditChildPage() {
  const router = useRouter();
  const params = useParams<{ studentId: string }>();
  const studentId = params.studentId;

  const [levels, setLevels] = useState<SchoolLevel[]>([]);
  const [firstName, setFirstName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [schoolLevelId, setSchoolLevelId] = useState("");
  const [avatar, setAvatar] = useState(AVATAR_OPTIONS[0]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  useEffect(() => {
    Promise.all([
      fetch("/api/school-levels").then((r) => r.json()),
      fetch("/api/parent/students").then((r) => r.json()),
    ]).then(([levelsJson, studentsJson]) => {
      if (levelsJson.ok) setLevels(levelsJson.schoolLevels);
      if (studentsJson.ok) {
        const student = studentsJson.students.find((s: { id: string }) => s.id === studentId);
        if (student) {
          setFirstName(student.firstName);
          setBirthDate(student.birthDate ?? "");
          setSchoolLevelId(student.schoolLevelId);
          setAvatar(student.avatar);
        }
      }
      setLoaded(true);
    });
  }, [studentId]);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const response = await fetch(`/api/parent/students/${studentId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, birthDate: birthDate || null, schoolLevelId, avatar }),
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

  async function handleDelete() {
    setLoading(true);
    const response = await fetch(`/api/parent/students/${studentId}`, { method: "DELETE" });
    const json = await response.json();
    setLoading(false);

    if (!response.ok || !json.ok) {
      setError(json.error ?? "Une erreur est survenue.");
      return;
    }

    router.push("/parent");
    router.refresh();
  }

  if (!loaded) {
    return null;
  }

  return (
    <section className="stack-lg">
      <Card>
        <h1>Modifier {firstName}</h1>
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

          <button type="submit" className="primary-btn big-btn" disabled={loading}>
            {loading ? "Enregistrement..." : "Enregistrer"}
          </button>
        </form>
      </Card>

      <Card>
        <h2>Zone de danger</h2>
        {!confirmDelete ? (
          <button type="button" className="ghost-btn" onClick={() => setConfirmDelete(true)}>
            Supprimer cet enfant
          </button>
        ) : (
          <>
            <p>Es-tu sur ? L&apos;historique sera conserve mais {firstName} ne sera plus accessible.</p>
            <div className="chips-row">
              <button type="button" className="primary-btn" onClick={handleDelete} disabled={loading}>
                Confirmer la suppression
              </button>
              <button type="button" className="ghost-btn" onClick={() => setConfirmDelete(false)}>
                Annuler
              </button>
            </div>
          </>
        )}
      </Card>
    </section>
  );
}
