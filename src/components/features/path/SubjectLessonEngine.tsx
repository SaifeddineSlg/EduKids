"use client";

import { useState } from "react";
import { SubjectDayLesson, SubjectResult } from "@/models/types";
import { LessonStep } from "@/models/serverTypes";
import { LessonStoryStep } from "@/components/features/path/LessonStoryStep";
import { WorkedExamplesStep } from "@/components/features/path/WorkedExamplesStep";
import { SixQuestionsStep } from "@/components/features/path/SixQuestionsStep";
import { advanceLessonStep } from "@/lib/api/dayProgress";

interface SubjectLessonEngineProps {
  lesson: SubjectDayLesson;
  childId: string;
  dayNumber: number;
  attemptNumber: number;
  initialStep: LessonStep;
  initialQuestionIndex: number;
  initialCorrectCount: number;
  onSubjectComplete: (result: SubjectResult) => void;
}

export function SubjectLessonEngine({
  lesson,
  childId,
  dayNumber,
  attemptNumber,
  initialStep,
  initialQuestionIndex,
  initialCorrectCount,
  onSubjectComplete
}: SubjectLessonEngineProps) {
  const [subStep, setSubStep] = useState<LessonStep>(initialStep);

  async function goToStep(step: LessonStep) {
    setSubStep(step);
    try {
      await advanceLessonStep(childId, step);
    } catch {
      // La transition reste visible localement ; une nouvelle tentative de sauvegarde
      // se fera au prochain appel reussi (ex: reponse a une question).
    }
  }

  if (subStep === "story") {
    return (
      <LessonStoryStep story={lesson.story} onContinue={() => goToStep("examples")} />
    );
  }

  if (subStep === "examples") {
    return (
      <WorkedExamplesStep
        examples={lesson.examples}
        onContinue={() => goToStep("questions")}
      />
    );
  }

  return (
    <SixQuestionsStep
      questions={lesson.questions}
      childId={childId}
      dayNumber={dayNumber}
      attemptNumber={attemptNumber}
      subjectId={lesson.subjectId}
      initialIndex={initialQuestionIndex}
      initialCorrectCount={initialCorrectCount}
      onComplete={(correctCount) => {
        const xpEarned = Math.round((correctCount / 6) * lesson.xpReward);
        onSubjectComplete({
          subjectId: lesson.subjectId,
          correctCount,
          xpEarned
        });
      }}
    />
  );
}
