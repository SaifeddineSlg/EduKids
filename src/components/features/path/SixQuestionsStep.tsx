"use client";

import { useState } from "react";
import { DayQuestion, SubjectId } from "@/models/types";
import { Card } from "@/components/ui/Card";
import { checkQuestionAnswer } from "@/lib/questionChecking";
import { submitAnswer } from "@/lib/api/dayProgress";
import { InputAnswer } from "@/components/features/path/question-inputs/InputAnswer";
import { McqAnswer } from "@/components/features/path/question-inputs/McqAnswer";
import { MatchAnswer } from "@/components/features/path/question-inputs/MatchAnswer";

interface SixQuestionsStepProps {
  questions: DayQuestion[];
  childId: string;
  dayNumber: number;
  attemptNumber: number;
  subjectId: SubjectId;
  initialIndex: number;
  initialCorrectCount: number;
  onComplete: (correctCount: number) => void;
}

export function SixQuestionsStep({
  questions,
  childId,
  dayNumber,
  attemptNumber,
  subjectId,
  initialIndex,
  initialCorrectCount,
  onComplete
}: SixQuestionsStepProps) {
  const [index, setIndex] = useState(initialIndex);
  const [answer, setAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctCount, setCorrectCount] = useState(initialCorrectCount);
  const [startedAt, setStartedAt] = useState(() => Date.now());
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  const question = questions[index];

  if (!question) {
    onComplete(correctCount);
    return null;
  }

  async function checkAnswer() {
    const correct = checkQuestionAnswer(question, answer);
    setSaving(true);
    setSaveError(null);

    try {
      await submitAnswer({
        childId,
        dayNumber,
        attemptNumber,
        subjectId,
        questionOrder: question.order,
        questionPrompt: question.prompt,
        givenAnswer: answer,
        correctAnswer: question.answer,
        acceptedAnswers: question.acceptedAnswers,
        correct,
        elapsedSeconds: Math.max(1, Math.round((Date.now() - startedAt) / 1000))
      });

      setIsCorrect(correct);
      setChecked(true);
      if (correct) {
        setCorrectCount((prev) => prev + 1);
      }
    } catch {
      setSaveError("La sauvegarde a echoue. Verifie ta connexion et reessaie.");
    } finally {
      setSaving(false);
    }
  }

  function goNext() {
    setChecked(false);
    setAnswer("");
    setStartedAt(Date.now());
    setIndex((prev) => prev + 1);
  }

  return (
    <section className="single-action-screen">
      <Card>
        <p className="eyebrow">Question {index + 1} / {questions.length}</p>
        <p className="story-highlight">{question.prompt}</p>

        {!checked ? (
          <>
            {(question.type ?? "input") === "input" ? (
              <InputAnswer value={answer} onChange={setAnswer} disabled={saving} />
            ) : null}
            {question.type === "mcq" ? (
              <McqAnswer
                options={question.options ?? []}
                value={answer}
                onChange={setAnswer}
                disabled={saving}
              />
            ) : null}
            {question.type === "match" ? (
              <MatchAnswer
                pairs={question.matchPairs ?? []}
                value={answer}
                onChange={setAnswer}
                disabled={saving}
              />
            ) : null}
          </>
        ) : (
          <div className={isCorrect ? "feedback-ok" : "feedback-help"}>
            <p>{isCorrect ? "Bravo, bonne reponse ! 🎉" : question.kindWhenWrong}</p>
            <p>{question.explanationWhenWrong}</p>
          </div>
        )}

        {saveError ? <p className="feedback-help">{saveError}</p> : null}
      </Card>

      {!checked ? (
        <button
          type="button"
          className="primary-btn big-btn"
          disabled={saving || !answer}
          onClick={checkAnswer}
        >
          {saving ? "Sauvegarde..." : saveError ? "Reessayer" : "Verifier"}
        </button>
      ) : (
        <button type="button" className="primary-btn big-btn" onClick={goNext}>
          Continuer
        </button>
      )}
    </section>
  );
}
