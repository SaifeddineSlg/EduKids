"use client";

import { useMemo, useState } from "react";
import { Exercise, SubjectId } from "@/models/types";
import { Card } from "@/components/ui/Card";
import { getAdaptiveDifficulty, getEncouragementMessage } from "@/services/adaptiveEngine";
import { recordAttempt } from "@/lib/progressDb";

interface InteractiveExercisesProps {
  exercises: Exercise[];
  childId: string;
  subjectId: SubjectId;
  lessonId: string;
}

function normalizeValue(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

export function InteractiveExercises({ exercises, childId, subjectId, lessonId }: InteractiveExercisesProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [attemptCounts, setAttemptCounts] = useState<Record<string, number>>({});
  const [recentOutcomes, setRecentOutcomes] = useState<boolean[]>([]);
  const [difficultyFilter, setDifficultyFilter] = useState<"all" | "1" | "2" | "3" | "4">("all");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState<6 | 8 | 10>(6);

  const results = useMemo(() => {
    const map: Record<string, boolean> = {};

    exercises.forEach((exercise) => {
      const userAnswer = normalizeValue(answers[exercise.id] ?? "");
      const accepted = [exercise.answer, ...(exercise.acceptedAnswers ?? [])].map(normalizeValue);
      map[exercise.id] = accepted.includes(userAnswer);
    });

    return map;
  }, [answers, exercises]);

  const adaptiveDifficulty = useMemo(() => {
    const recent = recentOutcomes.slice(-8);
    const successRate = recent.length === 0 ? 0.75 : recent.filter(Boolean).length / recent.length;

    return getAdaptiveDifficulty({
      successRate,
      recentFailures: recent.filter((item) => !item).length,
      recentSuccesses: recent.filter(Boolean).length
    });
  }, [recentOutcomes]);

  const simplifiedExercises = useMemo(() => {
    return exercises.filter((exercise) => exercise.difficulty <= adaptiveDifficulty);
  }, [adaptiveDifficulty, exercises]);

  const filteredExercises = useMemo(() => {
    const byDifficulty = difficultyFilter === "all"
      ? simplifiedExercises
      : simplifiedExercises.filter((exercise) => String(exercise.difficulty) === difficultyFilter);

    return byDifficulty;
  }, [difficultyFilter, simplifiedExercises]);

  const totalPages = Math.max(1, Math.ceil(filteredExercises.length / pageSize));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * pageSize;
  const pageItems = filteredExercises.slice(start, start + pageSize);

  function registerAttempt(exercise: Exercise, isCorrect: boolean): void {
    const elapsedSeconds = Math.max(1, Math.round((attemptCounts[exercise.id] ?? 0) * 12 + 15));

    recordAttempt({
      childId,
      subjectId,
      lessonId,
      activityKind: "exercise",
      activityId: exercise.id,
      correct: isCorrect,
      difficulty: exercise.difficulty,
      elapsedSeconds
    });
  }

  function getExtraHint(exercise: Exercise): string | null {
    const tries = attemptCounts[exercise.id] ?? 0;
    if (tries < 2) {
      return null;
    }

    if (tries >= 4) {
      return `Super astuce guidee: ${exercise.correctionExplanation ?? "Relis la consigne, fais une etape a la fois, puis verifie."}`;
    }

    return "Indice bonus: decoupe le probleme en 2 petites etapes avant de repondre.";
  }

  return (
    <section className="stack-lg">
      <Card>
        <h3>Mode adaptatif en temps reel</h3>
        <p>
          Difficulté actuelle: <strong>Niveau {adaptiveDifficulty}</strong>
        </p>
        <p>
          En cas d erreurs repetees, les exercices se simplifient automatiquement et plus d indices s affichent.
        </p>

        <div className="filters-row">
          <label htmlFor="difficulty-filter">Filtrer par niveau</label>
          <select
            id="difficulty-filter"
            className="answer-input"
            value={difficultyFilter}
            onChange={(event) => {
              setDifficultyFilter(event.target.value as "all" | "1" | "2" | "3" | "4");
              setPage(1);
            }}
          >
            <option value="all">Tous les niveaux</option>
            <option value="1">Niveau 1</option>
            <option value="2">Niveau 2</option>
            <option value="3">Niveau 3</option>
            <option value="4">Niveau 4</option>
          </select>

          <label htmlFor="page-size">Exercices par page</label>
          <select
            id="page-size"
            className="answer-input"
            value={String(pageSize)}
            onChange={(event) => {
              const value = Number(event.target.value) as 6 | 8 | 10;
              setPageSize(value);
              setPage(1);
            }}
          >
            <option value="6">6</option>
            <option value="8">8</option>
            <option value="10">10</option>
          </select>
        </div>

        <div className="pagination-row">
          <button type="button" className="ghost-btn" disabled={safePage <= 1} onClick={() => setPage((prev) => Math.max(1, prev - 1))}>
            Page precedente
          </button>
          <span>Page {safePage} / {totalPages}</span>
          <button type="button" className="ghost-btn" disabled={safePage >= totalPages} onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}>
            Page suivante
          </button>
        </div>
      </Card>

      {pageItems.map((exercise, index) => {
        const isChecked = checked[exercise.id];
        const isCorrect = results[exercise.id];
        const extraHint = getExtraHint(exercise);

        return (
          <Card key={exercise.id}>
            <h3>Exercice {start + index + 1}</h3>
            <p>{exercise.question}</p>

            <label className="exercise-label" htmlFor={`answer-${exercise.id}`}>
              Ecris ta reponse
            </label>
            <input
              id={`answer-${exercise.id}`}
              className="answer-input"
              value={answers[exercise.id] ?? ""}
              onChange={(event) =>
                setAnswers((prev) => ({
                  ...prev,
                  [exercise.id]: event.target.value
                }))
              }
              placeholder="Ta reponse ici"
            />

            <div className="exercise-actions">
              <button
                type="button"
                className="primary-btn"
                onClick={() => {
                  const correct = results[exercise.id];

                  setAttemptCounts((prev) => ({
                    ...prev,
                    [exercise.id]: (prev[exercise.id] ?? 0) + 1
                  }));

                  setRecentOutcomes((prev) => [...prev.slice(-7), correct]);

                  registerAttempt(exercise, correct);

                  setChecked((prev) => ({
                    ...prev,
                    [exercise.id]: true
                  }));
                }}
              >
                Verifier
              </button>
            </div>

            {isChecked ? (
              <div className={isCorrect ? "feedback-ok" : "feedback-help"}>
                <p>{getEncouragementMessage(isCorrect)}</p>
                <p>
                  <strong>Correction:</strong> {exercise.answer}
                </p>
                {exercise.correctionExplanation ? <p>{exercise.correctionExplanation}</p> : null}
                {exercise.hint ? (
                  <p>
                    <strong>Indice:</strong> {exercise.hint}
                  </p>
                ) : null}
                {extraHint ? (
                  <p>
                    <strong>Aide supplementaire:</strong> {extraHint}
                  </p>
                ) : null}
              </div>
            ) : null}
          </Card>
        );
      })}
    </section>
  );
}
