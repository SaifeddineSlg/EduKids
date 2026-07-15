import { LessonBlock, QuizItem } from "@/models/types";

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateQuizForLesson(lesson: LessonBlock): QuizItem[] {
  const baseId = lesson.id;
  const a = randomInt(6, 25);
  const b = randomInt(4, 20);
  const chronoAnswer = String(a + b);

  return [
    {
      id: `${baseId}-qcm`,
      lessonId: lesson.id,
      type: "qcm",
      prompt: "QCM: choisis la bonne reponse.",
      options: ["Option A", "Option B", "Option C"],
      correctAnswer: "Option B",
      explanation: "On elimine les reponses impossibles puis on garde la plus coherente."
    },
    {
      id: `${baseId}-tf`,
      lessonId: lesson.id,
      type: "true-false",
      prompt: "Vrai ou Faux: 1/2 est plus grand que 1/3.",
      options: ["Vrai", "Faux"],
      correctAnswer: "Vrai",
      explanation: "Si on coupe un gateau en moins de parts, chaque part est plus grande."
    },
    {
      id: `${baseId}-fill`,
      lessonId: lesson.id,
      type: "fill-blank",
      prompt: "Complete: Nous ____ (jouer) au present.",
      correctAnswer: "jouons",
      explanation: "Avec nous, la terminaison du present en -er est -ons."
    },
    {
      id: `${baseId}-match`,
      lessonId: lesson.id,
      type: "match",
      prompt: "Relie chaque mot a sa nature.",
      leftItems: ["chat", "mange", "petit"],
      rightItems: ["nom", "verbe", "adjectif"],
      correctMatches: {
        chat: "nom",
        mange: "verbe",
        petit: "adjectif"
      },
      explanation: "chat est un nom, mange un verbe, petit un adjectif."
    },
    {
      id: `${baseId}-drag`,
      lessonId: lesson.id,
      type: "drag-drop",
      prompt: "Glisser-deposer: place les etapes dans le bon ordre.",
      dragItems: ["Lire la consigne", "Chercher l indice", "Calculer", "Verifier"],
      correctOrder: ["Lire la consigne", "Chercher l indice", "Calculer", "Verifier"],
      explanation: "Un bon ordre aide a eviter les erreurs d inattention."
    },
    {
      id: `${baseId}-chrono`,
      lessonId: lesson.id,
      type: "chrono",
      prompt: `Chrono 20s: calcule ${a} + ${b}`,
      correctAnswer: chronoAnswer,
      chronoSeconds: 20,
      explanation: `${a} + ${b} = ${chronoAnswer}.`
    }
  ];
}
