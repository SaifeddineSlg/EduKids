import { Exercise } from "@/models/types";

export const exercisesByLessonId: Record<string, Exercise[]> = {
  "fractions-pizza": [
    {
      id: "fx-1",
      lessonId: "fractions-pizza",
      question: "Une pizza est coupee en 8 parts. Tu manges 3 parts. Ecris la fraction.",
      answer: "3/8",
      acceptedAnswers: ["3/8", "3 sur 8"],
      correctionExplanation:
        "Le denominateur est le nombre total de parts (8) et le numerateur le nombre mange (3).",
      hint: "Pense total puis parts prises.",
      difficulty: 1
    },
    {
      id: "fx-2",
      lessonId: "fractions-pizza",
      question: "Tu prends 2 parts sur 6. Quelle fraction?",
      answer: "2/6",
      acceptedAnswers: ["2/6", "1/3"],
      correctionExplanation:
        "2/6 est correct. On peut aussi simplifier en 1/3.",
      hint: "Tu peux ensuite simplifier.",
      difficulty: 2
    }
  ],
  "conj-present-er": [
    {
      id: "cx-1",
      lessonId: "conj-present-er",
      question: "Complete: Nous (chanter) ______ a l ecole.",
      answer: "chantons",
      acceptedAnswers: ["chantons"],
      correctionExplanation:
        "Avec nous, la terminaison est -ons: nous chantons.",
      difficulty: 1
    },
    {
      id: "cx-2",
      lessonId: "conj-present-er",
      question: "Complete: Tu (jouer) ______ au ballon.",
      answer: "joues",
      acceptedAnswers: ["joues"],
      correctionExplanation: "Avec tu, on met souvent -es pour les verbes en -er.",
      difficulty: 1
    }
  ],
  "gram-nature-mots": [
    {
      id: "gx-1",
      lessonId: "gram-nature-mots",
      question: "Dans la phrase 'Le petit chat dort', la nature de 'chat' est ?",
      answer: "nom",
      acceptedAnswers: ["nom", "un nom"],
      correctionExplanation: "'chat' designe un etre/animal, c est un nom.",
      difficulty: 1
    },
    {
      id: "gx-2",
      lessonId: "gram-nature-mots",
      question: "Dans 'Le petit chat dort', la nature de 'petit' est ?",
      answer: "adjectif",
      acceptedAnswers: ["adjectif", "adjectif qualificatif"],
      correctionExplanation: "'petit' donne une precision sur le nom 'chat': c est un adjectif.",
      difficulty: 2
    }
  ],
  "ortho-a-ou-a": [
    {
      id: "ox-1",
      lessonId: "ortho-a-ou-a",
      question: "Complete: Il ______ une belle trousse.",
      answer: "a",
      acceptedAnswers: ["a"],
      correctionExplanation:
        "C est le verbe avoir: on peut dire 'Il avait une belle trousse'.",
      difficulty: 1
    },
    {
      id: "ox-2",
      lessonId: "ortho-a-ou-a",
      question: "Complete: Je vais ______ la piscine.",
      answer: "a",
      acceptedAnswers: ["a", "à"],
      correctionExplanation:
        "Ici c est la preposition qui indique le lieu. A l ecrit, on met l accent: a.",
      difficulty: 1
    }
  ],
  "mental-add-rapid": [
    {
      id: "mx-1",
      lessonId: "mental-add-rapid",
      question: "Calcule vite: 27 + 15",
      answer: "42",
      acceptedAnswers: ["42"],
      correctionExplanation:
        "27 + 15 = (20 + 10) + (7 + 5) = 30 + 12 = 42.",
      difficulty: 1
    },
    {
      id: "mx-2",
      lessonId: "mental-add-rapid",
      question: "Calcule vite: 49 + 11",
      answer: "60",
      acceptedAnswers: ["60"],
      correctionExplanation:
        "49 + 1 = 50 puis +10 = 60. Methode en deux etapes.",
      difficulty: 1
    }
  ],
  "pourcentage-reduction": [
    {
      id: "px-1",
      lessonId: "pourcentage-reduction",
      question: "20% de 50 euros, c est combien ?",
      answer: "10",
      acceptedAnswers: ["10", "10 euros", "10€"],
      correctionExplanation: "10% de 50 = 5, donc 20% = 10.",
      difficulty: 2
    }
  ],
  "equation-balance": [
    {
      id: "eq-1",
      lessonId: "equation-balance",
      question: "Resous: x + 3 = 10. x = ?",
      answer: "7",
      acceptedAnswers: ["7"],
      correctionExplanation:
        "On retire 3 des deux cotes: x + 3 - 3 = 10 - 3, donc x = 7.",
      difficulty: 2
    }
  ]
};
