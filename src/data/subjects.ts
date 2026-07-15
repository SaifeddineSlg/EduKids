import { SubjectDefinition } from "@/models/types";

export const subjects: SubjectDefinition[] = [
  {
    id: "mathematiques",
    title: "Mathematiques",
    icon: "📐",
    description: "Fractions, pourcentages, equations et logique du college avec des exemples concrets.",
    accent: "#ff8f00"
  },
  {
    id: "conjugaison",
    title: "Conjugaison",
    icon: "📝",
    description: "Presenter les temps essentiels avec des phrases simples et des corrections detaillees.",
    accent: "#00a896"
  },
  {
    id: "grammaire",
    title: "Grammaire",
    icon: "🔤",
    description: "Nature des mots, fonctions et accords avec jeux de phrases.",
    accent: "#ef476f"
  },
  {
    id: "orthographe",
    title: "Orthographe",
    icon: "✅",
    description: "Choisir, completer, corriger avec feedback positif et astuces.",
    accent: "#118ab2"
  },
  {
    id: "calcul-mental",
    title: "Calcul mental",
    icon: "⏱️",
    description: "Operations rapides avec chrono et mini-defis progressifs.",
    accent: "#8ac926"
  }
];
