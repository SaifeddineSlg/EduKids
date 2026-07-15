"use client";

import { useEffect, useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import { QuizItem, SubjectId } from "@/models/types";
import { getEncouragementMessage } from "@/services/adaptiveEngine";
import { recordAttempt } from "@/lib/progressDb";

interface QuizArenaProps {
  items: QuizItem[];
  childId: string;
  subjectId: SubjectId;
  lessonId: string;
}

function normalize(value: string): string {
  return value.trim().toLowerCase();
}

export function QuizArena({ items, childId, subjectId, lessonId }: QuizArenaProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checks, setChecks] = useState<Record<string, boolean>>({});
  const [dragAssignments, setDragAssignments] = useState<Record<string, string[]>>({});
  const [draggingValue, setDraggingValue] = useState<string>("");
  const [chronoStarted, setChronoStarted] = useState<Record<string, number>>({});
  const [nowTick, setNowTick] = useState(Date.now());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNowTick(Date.now());
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  const chronoRemaining = useMemo(() => {
    const map: Record<string, number> = {};
    items.forEach((item) => {
      if (item.type !== "chrono") {
        return;
      }
      const start = chronoStarted[item.id];
      if (!start) {
        map[item.id] = item.chronoSeconds ?? 20;
        return;
      }
      const elapsed = Math.floor((nowTick - start) / 1000);
      map[item.id] = Math.max(0, (item.chronoSeconds ?? 20) - elapsed);
    });
    return map;
  }, [chronoStarted, items, nowTick]);

  function checkMatchItem(item: QuizItem): boolean {
    if (!item.leftItems || !item.correctMatches) {
      return false;
    }

    return item.leftItems.every((left) => normalize(answers[`${item.id}-${left}`] ?? "") === normalize(item.correctMatches?.[left] ?? ""));
  }

  function checkDragItem(item: QuizItem): boolean {
    const assigned = dragAssignments[item.id] ?? [];
    const expected = item.correctOrder ?? [];
    if (assigned.length !== expected.length) {
      return false;
    }
    return assigned.every((value, index) => normalize(value) === normalize(expected[index]));
  }

  function isCorrect(item: QuizItem): boolean {
    if (item.type === "match") {
      return checkMatchItem(item);
    }
    if (item.type === "drag-drop") {
      return checkDragItem(item);
    }

    const expected = normalize(item.correctAnswer ?? "");
    const user = normalize(answers[item.id] ?? "");
    return expected.length > 0 && user === expected;
  }

  function onDropToPosition(itemId: string, position: number): void {
    if (!draggingValue) {
      return;
    }

    setDragAssignments((prev) => {
      const current = [...(prev[itemId] ?? [])];
      current[position] = draggingValue;
      return {
        ...prev,
        [itemId]: current
      };
    });
  }

  function saveQuizAttempt(item: QuizItem, correct: boolean): void {
    const startedAt = chronoStarted[item.id];
    const elapsedSeconds = startedAt ? Math.max(1, Math.floor((Date.now() - startedAt) / 1000)) : undefined;

    recordAttempt({
      childId,
      subjectId,
      lessonId,
      activityKind: "quiz",
      activityId: item.id,
      correct,
      elapsedSeconds
    });
  }

  return (
    <section className="stack-lg">
      {items.map((item, index) => {
        const checked = checks[item.id];
        const correct = checked ? isCorrect(item) : false;

        return (
          <Card key={item.id}>
            <h3>Quiz {index + 1}</h3>
            <p>{item.prompt}</p>

            {item.type === "qcm" || item.type === "true-false" ? (
              <div className="quiz-options">
                {(item.options ?? []).map((option) => (
                  <button
                    key={option}
                    type="button"
                    className="ghost-btn"
                    onClick={() =>
                      setAnswers((prev) => ({
                        ...prev,
                        [item.id]: option
                      }))
                    }
                  >
                    {option}
                  </button>
                ))}
              </div>
            ) : null}

            {item.type === "fill-blank" || item.type === "chrono" ? (
              <>
                {item.type === "chrono" ? (
                  <div className="chrono-row">
                    <strong>Temps restant: {chronoRemaining[item.id] ?? item.chronoSeconds ?? 20}s</strong>
                    <button
                      type="button"
                      className="ghost-btn"
                      onClick={() =>
                        setChronoStarted((prev) => ({
                          ...prev,
                          [item.id]: Date.now()
                        }))
                      }
                    >
                      Demarrer chrono
                    </button>
                  </div>
                ) : null}
                <input
                  className="answer-input"
                  value={answers[item.id] ?? ""}
                  onChange={(event) =>
                    setAnswers((prev) => ({
                      ...prev,
                      [item.id]: event.target.value
                    }))
                  }
                  placeholder="Ta reponse"
                />
              </>
            ) : null}

            {item.type === "match" ? (
              <div className="match-grid">
                {(item.leftItems ?? []).map((left) => (
                  <div key={left} className="match-row">
                    <span>{left}</span>
                    <select
                      className="answer-input"
                      value={answers[`${item.id}-${left}`] ?? ""}
                      onChange={(event) =>
                        setAnswers((prev) => ({
                          ...prev,
                          [`${item.id}-${left}`]: event.target.value
                        }))
                      }
                    >
                      <option value="">Choisir</option>
                      {(item.rightItems ?? []).map((right) => (
                        <option key={right} value={right}>
                          {right}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
            ) : null}

            {item.type === "drag-drop" ? (
              <div className="drag-area">
                <div className="drag-source">
                  {(item.dragItems ?? []).map((dragItem) => (
                    <span
                      key={dragItem}
                      className="drag-token"
                      draggable
                      onDragStart={() => setDraggingValue(dragItem)}
                    >
                      {dragItem}
                    </span>
                  ))}
                </div>
                <div className="drag-targets">
                  {(item.correctOrder ?? []).map((_, position) => (
                    <div
                      key={`${item.id}-${position}`}
                      className="drop-slot"
                      onDragOver={(event) => event.preventDefault()}
                      onDrop={() => onDropToPosition(item.id, position)}
                    >
                      {dragAssignments[item.id]?.[position] ?? `Etape ${position + 1}`}
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="exercise-actions">
              <button
                type="button"
                className="primary-btn"
                onClick={() => {
                  const correct = isCorrect(item);
                  saveQuizAttempt(item, correct);

                  setChecks((prev) => ({
                    ...prev,
                    [item.id]: true
                  }));
                }}
              >
                Verifier le quiz
              </button>
            </div>

            {checked ? (
              <div className={correct ? "feedback-ok" : "feedback-help"}>
                <p>{getEncouragementMessage(correct)}</p>
                <p>
                  <strong>Explication:</strong> {item.explanation}
                </p>
              </div>
            ) : null}
          </Card>
        );
      })}
    </section>
  );
}
