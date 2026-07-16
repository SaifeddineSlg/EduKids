"use client";

import { useState } from "react";
import { SubjectDayLesson, SubjectResult } from "@/models/types";
import { LessonStoryStep } from "@/components/features/path/LessonStoryStep";
import { WorkedExamplesStep } from "@/components/features/path/WorkedExamplesStep";
import { SixQuestionsStep } from "@/components/features/path/SixQuestionsStep";

type SubStep = "story" | "examples" | "questions";

interface SubjectLessonEngineProps {
  lesson: SubjectDayLesson;
  childId: string;
  dayNumber: number;
  onSubjectComplete: (result: SubjectResult) => void;
}

export function SubjectLessonEngine({
  lesson,
  childId,
  dayNumber,
  onSubjectComplete
}: SubjectLessonEngineProps) {
  const [subStep, setSubStep] = useState<SubStep>("story");
  const lessonId = `day-${dayNumber}-${lesson.subjectId}`;

  if (subStep === "story") {
    return (
      <LessonStoryStep story={lesson.story} onContinue={() => setSubStep("examples")} />
    );
  }

  if (subStep === "examples") {
    return (
      <WorkedExamplesStep
        examples={lesson.examples}
        onContinue={() => setSubStep("questions")}
      />
    );
  }

  return (
    <SixQuestionsStep
      questions={lesson.questions}
      childId={childId}
      subjectId={lesson.subjectId}
      lessonId={lessonId}
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
