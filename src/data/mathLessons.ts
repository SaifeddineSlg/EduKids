import { LessonBlock } from "@/models/types";

export const mathLessons: LessonBlock[] = [
  {
    id: "fractions-pizza",
    title: "Fractions avec une pizza",
    subjectId: "mathematiques",
    targetSchoolLevel: "5e",
    explanation:
      "Une fraction, c est une part d un tout. Si une pizza est coupee en 8 parts et tu en manges 3, tu as mange 3/8.",
    easyExamples: [
      "4 bonbons partages entre 2 enfants: chaque enfant a 2/4 = 1/2.",
      "Une bouteille de 1L remplie a moitie: 1/2 L.",
      "2 parts sur 6 parts de gateau: 2/6 = 1/3."
    ],
    commonMistakes: [
      "Additionner numerateur et denominateur en meme temps.",
      "Comparer des fractions sans les mettre au meme denominateur.",
      "Oublier de simplifier la fraction."
    ],
    memoryTip: "Denominateur = nombre total de parts. Numerateur = parts prises.",
    summary: "Une fraction sert a representer une partie d une quantite totale.",
    illustrationHint: "Image d une pizza coupee en 8 parts colorees."
  },
  {
    id: "pourcentage-reduction",
    title: "Pourcentages et reductions",
    subjectId: "mathematiques",
    targetSchoolLevel: "5e",
    explanation:
      "Un pourcentage signifie sur 100. Une reduction de 20% veut dire enlever 20 sur 100 du prix.",
    easyExamples: [
      "20% de 50 euros = 10 euros.",
      "10% de 80 bonbons = 8 bonbons.",
      "25% de 40 minutes = 10 minutes."
    ],
    commonMistakes: [
      "Confondre +20% et -20%.",
      "Calculer 20% puis ne pas le retirer du prix.",
      "Oublier que 100% = total."
    ],
    memoryTip: "10% = diviser par 10, puis adapter.",
    summary: "Les pourcentages aident a calculer des reductions, augmentations et repartitions.",
    illustrationHint: "Etiquette de magasin avec promotion -20%."
  },
  {
    id: "equation-balance",
    title: "Equation comme une balance",
    subjectId: "mathematiques",
    targetSchoolLevel: "4e",
    explanation:
      "Une equation est une balance. Ce que tu fais a gauche, tu dois aussi le faire a droite.",
    easyExamples: [
      "x + 3 = 10 donc x = 7.",
      "2x = 14 donc x = 7.",
      "x - 5 = 9 donc x = 14."
    ],
    commonMistakes: [
      "Changer seulement un cote.",
      "Oublier le signe en deplacant un nombre.",
      "Ne pas verifier le resultat dans l equation de depart."
    ],
    memoryTip: "Pense a une balance: meme action des deux cotes.",
    summary: "Resoudre une equation, c est trouver la valeur cachee qui rend l egalite vraie.",
    illustrationHint: "Balance avec boites x d un cote et nombres de l autre."
  }
];
