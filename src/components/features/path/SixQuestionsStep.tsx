"use client";

import { useState } from "react";
import { DayQuestion, SubjectId } from "@/models/types";
import { Card } from "@/components/ui/Card";
import { recordAttempt } from "@/lib/progressDb";

interface SixQuestionsStepProps {
  questions: DayQuestion[];
  childId: string;
  subjectId: SubjectId;
  lessonId: string;
  onComplete: (correctCount: number) => void;
}

function normalize(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

export function SixQuestionsStep({
  questions,
  childId,
  subjectId,
  lessonId,
  onComplete
}: SixQuestionsStepProps) {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [startedAt] = useState(() => Date.now());

  const question = questions[index];

  if (!question) {
    onComplete(correctCount);
    return null;
  }

  function checkAnswer() {
    const accepted = [question.answer, ...(question.acceptedAnswers ?? [])].map(normalize);
    const correct = accepted.includes(normalize(answer));

    recordAttempt({
      childId,
      subjectId,
      lessonId,
      activityKind: "exercise",
      activityId: `${lessonId}-q${question.order}`,
      correct,
      elapsedSeconds: Math.max(1, Math.round((Date.now() - startedAt) / 1000))
    });

    setIsCorrect(correct);
    setChecked(true);
    if (correct) {
      setCorrectCount((prev) => prev + 1);
    }
  }

  function goNext() {
    setChecked(false);
    setAnswer("");
    setIndex((prev) => prev + 1);
  }

  return (
    <section className="single-action-screen">
      <Card>
        <p className="eyebrow">Question {index + 1} / {questions.length}</p>
        <p className="story-highlight">{question.prompt}</p>

        {!checked ? (
          <>
            <label className="exercise-label" htmlFor="question-answer">
              Ecris ta reponse
            </label>
            <input
              id="question-answer"
              className="answer-input"
              value={answer}
              onChange={(event) => setAnswer(event.target.value)}
              placeholder="Ta reponse ici"
            />
          </>
        ) : (
          <div className={isCorrect ? "feedback-ok" : "feedback-help"}>
            <p>{isCorrect ? "Bravo, bonne reponse ! 🎉" : question.kindWhenWrong}</p>
            <p>{question.explanationWhenWrong}</p>
          </div>
        )}
      </Card>

      {!checked ? (
        <button type="button" className="primary-btn big-btn" onClick={checkAnswer}>
          Verifier
        </button>
      ) : (
        <button type="button" className="primary-btn big-btn" onClick={goNext}>
          Continuer
        </button>
      )}
    </section>
  );
}
