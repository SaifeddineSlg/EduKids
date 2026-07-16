import { DayCurriculum, SUBJECT_ORDER, SubjectDayLesson } from "@/models/types";

const SUBJECT_LABELS: Record<string, string> = {
  mathematiques: "Mathematiques",
  conjugaison: "Conjugaison",
  grammaire: "Grammaire",
  orthographe: "Orthographe",
  "calcul-mental": "Calcul mental"
};

function buildPlaceholderLesson(dayNumber: number, subjectId: (typeof SUBJECT_ORDER)[number]): SubjectDayLesson {
  return {
    subjectId,
    status: "coming-soon",
    title: "Contenu a venir",
    xpReward: 0,
    story: {
      hook: "Cette lecon sera bientot disponible.",
      concreteExample: "Reviens un peu plus tard pour decouvrir cette nouvelle aventure.",
      reveal: "",
      bridgeToConcept: "",
      illustrationEmoji: "🚧"
    },
    examples: [],
    questions: []
  };
}

export function buildPlaceholderDays(fromDay: number, toDay: number): DayCurriculum[] {
  const days: DayCurriculum[] = [];

  for (let dayNumber = fromDay; dayNumber <= toDay; dayNumber += 1) {
    days.push({
      dayNumber,
      status: "coming-soon",
      subjects: SUBJECT_ORDER.map((subjectId) => buildPlaceholderLesson(dayNumber, subjectId))
    });
  }

  return days;
}

export { SUBJECT_LABELS };
