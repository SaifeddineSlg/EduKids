import { getLessonsBySubject } from "@/data/lessons";
import { children } from "@/data/children";
import { DailyPlan, SubjectId } from "@/models/types";

export function buildDailyPlan(childId: string, subjectId: SubjectId): DailyPlan {
  const child = children.find((item) => item.id === childId);
  const subjectLessons = getLessonsBySubject(subjectId);
  const focusLesson = (child?.age ?? 9) >= 11 ? subjectLessons[1] ?? subjectLessons[0] : subjectLessons[0];

  return {
    revisionMinutes: 3,
    lessonMinutes: 7,
    exercisesMinutes: 8,
    quizMinutes: 2,
    focusSubject: subjectId,
    focusLessonId: focusLesson.id
  };
}
