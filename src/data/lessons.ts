import { LessonBlock, SubjectId } from "@/models/types";
import { mathLessons } from "@/data/mathLessons";

const conjugationLessons: LessonBlock[] = [
  {
    id: "conj-present-er",
    title: "Conjugaison: present des verbes en -er",
    subjectId: "conjugaison",
    targetSchoolLevel: "5e",
    explanation:
      "Au present, les verbes en -er finissent souvent par e, es, e, ons, ez, ent. Exemple: je joue, tu joues, il joue.",
    easyExamples: [
      "Je parle avec ma soeur.",
      "Nous chantons dans la voiture.",
      "Ils regardent un dessin anime."
    ],
    commonMistakes: [
      "Ecrire je parles au lieu de je parle.",
      "Confondre -ons et -ont.",
      "Oublier le s avec tu."
    ],
    memoryTip: "Avec tu, pense souvent a ajouter s.",
    summary: "Au present, chaque pronom a sa terminaison. On suit la petite musique des fins.",
    illustrationHint: "Tableau des pronoms avec couleurs par terminaison."
  }
];

const grammarLessons: LessonBlock[] = [
  {
    id: "gram-nature-mots",
    title: "Grammaire: nature des mots",
    subjectId: "grammaire",
    targetSchoolLevel: "5e",
    explanation:
      "La nature d un mot, c est sa famille: nom, verbe, adjectif, determinant... Un mot garde sa nature meme dans une autre phrase.",
    easyExamples: [
      "chat = nom",
      "mange = verbe",
      "petit = adjectif"
    ],
    commonMistakes: [
      "Confondre nature et fonction.",
      "Prendre un mot pour un verbe alors qu il est nom.",
      "Oublier le determinant devant le nom."
    ],
    memoryTip: "Nature = carte d identite du mot.",
    summary: "Pour trouver la nature, demande-toi: a quelle famille ce mot appartient-il?",
    illustrationHint: "Cartes de couleurs pour chaque famille de mots."
  }
];

const spellingLessons: LessonBlock[] = [
  {
    id: "ortho-a-ou-a",
    title: "Orthographe: a ou a",
    subjectId: "orthographe",
    targetSchoolLevel: "5e",
    explanation:
      "a sans accent est le verbe avoir. a avec accent est une preposition (lieu, maniere).",
    easyExamples: [
      "Il a un livre.",
      "Je vais a l ecole.",
      "Elle a mange a midi."
    ],
    commonMistakes: [
      "Mettre a la place de a.",
      "Oublier le test avec avait.",
      "Confondre dans une phrase longue."
    ],
    memoryTip: "Si tu peux dire avait, alors c est a sans accent.",
    summary: "a = verbe avoir. a = petit mot qui introduit souvent un lieu ou un moment.",
    illustrationHint: "Deux panneaux: verbe avoir / preposition."
  }
];

const mentalMathLessons: LessonBlock[] = [
  {
    id: "mental-add-rapid",
    title: "Calcul mental: additions rapides",
    subjectId: "calcul-mental",
    targetSchoolLevel: "5e",
    explanation:
      "Pour aller vite, coupe les nombres en dizaines et unites. Exemple: 27 + 15 = (20 + 10) + (7 + 5) = 42.",
    easyExamples: [
      "34 + 12 = 46",
      "18 + 7 = 25",
      "49 + 11 = 60"
    ],
    commonMistakes: [
      "Oublier la retenue.",
      "Additionner les dizaines avec les unites.",
      "Aller trop vite sans verifier."
    ],
    memoryTip: "Dizaines ensemble, unites ensemble.",
    summary: "Le calcul mental rapide suit une methode simple et repetable.",
    illustrationHint: "Blocs dizaines et cubes unites."
  }
];

export const allLessons: LessonBlock[] = [
  ...mathLessons,
  ...conjugationLessons,
  ...grammarLessons,
  ...spellingLessons,
  ...mentalMathLessons
];

export function getLessonsBySubject(subjectId: SubjectId): LessonBlock[] {
  return allLessons.filter((lesson) => lesson.subjectId === subjectId);
}
