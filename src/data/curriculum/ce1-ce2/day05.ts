import { DayCurriculum } from "@/models/types";

export const day05: DayCurriculum = {
  dayNumber: 5,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "La grande révision de la semaine",
      xpReward: 24,
      story: {
        hook: "Imagine que tu es un champion des nombres qui a appris plein de choses cette semaine.",
        concreteExample: "Cette semaine, tu as appris les nombres jusqu'à 100, l'addition avec retenue, la soustraction avec emprunt et le sens de la multiplication.",
        reveal: "Aujourd'hui, on mélange un peu tout ça pour vérifier que tu es devenu un vrai champion. Bravo pour cette semaine de travail !",
        bridgeToConcept: "Réviser, c'est réutiliser ce qu'on a appris sur des exemples un peu différents.",
        illustrationEmoji: "🏆"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "37, c'est 3 dizaines et 7 unités.", illustrationEmoji: "🔢" },
            { text: "24 + 18 : unités 4+8=12, on retient 1. Dizaines 2+1+1=4. Résultat : 42.", illustrationEmoji: "➕" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "45 - 27 : unités 5-7 impossible, on emprunte. 15-7=8. Dizaines 3-2=1. Résultat : 18.", illustrationEmoji: "➖" },
            { text: "3 x 4, c'est 4 + 4 + 4 = 12.", illustrationEmoji: "✖️" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Combien de dizaines dans le nombre 68 ?", answer: "6", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "68, c'est 6 dizaines et 8 unités." },
        { order: 2, prompt: "Calcule : 27 + 16", answer: "43", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "7 + 6 = 13, on écrit 3 et on retient 1. 2 + 1 + 1 = 4. Résultat : 43." },
        { order: 3, prompt: "Calcule : 52 - 28", answer: "24", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "2 - 8 impossible, on emprunte : 12 - 8 = 4. Dizaines : 4 - 2 = 2. Résultat : 24." },
        { order: 4, prompt: "Calcule : 4 x 5", answer: "20", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "4 x 5, c'est 5 + 5 + 5 + 5 = 20." },
        { order: 5, prompt: "Calcule : 2 x 9", answer: "18", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "2 x 9, c'est le double de 9 : 18." },
        { order: 6, prompt: "Défi : calcule 35 + 28, puis enlève 10.", answer: "53", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "35 + 28 = 63, puis 63 - 10 = 53." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Revoir tous les verbes de la semaine",
      xpReward: 24,
      story: {
        hook: "Imagine un grand concert où tous les verbes de la semaine viennent chanter ensemble.",
        concreteExample: "Cette semaine, tu as rencontré les verbes en -er avec toutes les personnes, être, avoir, les verbes en -ir comme finir, et aller/faire.",
        reveal: "Chaque verbe a sa petite musique complète, et tu la connais maintenant un peu mieux. Bravo pour cette semaine de travail !",
        bridgeToConcept: "Réviser la conjugaison, c'est se rappeler la musique complète de chaque groupe de verbes.",
        illustrationEmoji: "🎤"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "Nous chantons une chanson (verbe en -er).", illustrationEmoji: "🎵" },
            { text: "Vous êtes très gentils (verbe être).", illustrationEmoji: "✨" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "Ils finissent leur repas (verbe en -ir).", illustrationEmoji: "🍽️" },
            { text: "Nous allons au parc et vous faites du sport.", illustrationEmoji: "🏃" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Nous ____ (jouer) dans le jardin.", answer: "jouons", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec nous, jouer devient jouons." },
        { order: 2, prompt: "Complète : Vous ____ (être) très gentils.", answer: "êtes", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Avec vous, être devient êtes." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Ils ____ (finir) leur repas.",
          options: ["finis", "finissez", "finissent"],
          answer: "finissent",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Avec ils, finir devient finissent."
        },
        { order: 4, prompt: "Complète : Elles ____ (avoir) de la chance.", answer: "ont", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Avec elles, avoir devient ont." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Nous ____ (aller) à la piscine.",
          options: ["allons", "allez", "vont"],
          answer: "allons",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Avec nous, aller devient allons."
        },
        { order: 6, prompt: "Défi : complète les trois mots. Vous ____ (faire) un gâteau, nous ____ (être) contents et ils ____ (finir) de manger.", answer: "faites sommes finissent", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Vous faites (faire), nous sommes (être), ils finissent (finir)." }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Sujet, adjectif et accords : la grande révision",
      xpReward: 24,
      story: {
        hook: "Imagine trois clés différentes qui ouvrent chacune une porte : le sujet, l'adjectif, et l'accord.",
        concreteExample: "Regarde : les petites filles jouent. Peux-tu retrouver le sujet, l'adjectif, et vérifier l'accord du verbe ?",
        reveal: "Les petites filles est le sujet, petites est l'adjectif (accordé au féminin pluriel), et jouent est accordé au pluriel. Bravo, tu as utilisé les trois clés !",
        bridgeToConcept: "Réviser la grammaire, c'est utiliser plusieurs clés différentes sur la même phrase.",
        illustrationEmoji: "🔑"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "Ma grande soeur dessine : soeur est le sujet, grande est l'adjectif.", illustrationEmoji: "🎨" },
            { text: "Les chats dorment : chats est le sujet pluriel, dorment est accordé.", illustrationEmoji: "🐱" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "Une jolie fleur pousse : jolie est féminin car fleur est féminin.", illustrationEmoji: "🌸" },
            { text: "Les enfants jouent : jouent est au pluriel car enfants est pluriel.", illustrationEmoji: "⚽" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans le chien court, quel est le sujet ?", answer: "le chien", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Qui court ? Le chien. C'est le sujet." },
        { order: 2, prompt: "Dans une jolie fleur pousse, quel est l'adjectif ?", answer: "jolie", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Jolie décrit la fleur, c'est l'adjectif." },
        {
          order: 3,
          type: "mcq",
          prompt: "Accorde : un manteau vert -> une écharpe ____",
          options: ["vert", "verte"],
          answer: "verte",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Au féminin, on ajoute un e : verte."
        },
        { order: 4, prompt: "Complète : Les oiseaux ____ (chanter : chante/chantent).", answer: "chantent", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Les oiseaux est pluriel, donc chantent." },
        {
          order: 5,
          type: "mcq",
          prompt: "Dans ma petite soeur joue, quel est le sujet ?",
          options: ["ma petite soeur", "joue"],
          answer: "ma petite soeur",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Qui joue ? Ma petite soeur. C'est le sujet complet."
        },
        { order: 6, prompt: "Défi : dans les petits oiseaux joyeux chantent dans le jardin fleuri, quel est le sujet du verbe chantent ?", answer: "les petits oiseaux joyeux", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Ce sont les petits oiseaux joyeux qui chantent, c'est le sujet complet." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Toutes les règles de la semaine ensemble",
      xpReward: 24,
      story: {
        hook: "Imagine une boîte à outils avec toutes tes règles magiques de la semaine.",
        concreteExample: "Cette semaine, tu as appris s/ss, g/gu, son/sont, et ou/où.",
        reveal: "Chaque fois que tu hésites, tu peux utiliser la bonne règle dans ta tête. Bravo, ta boîte à outils est complète !",
        bridgeToConcept: "Réviser l'orthographe, c'est se rappeler quelle règle utiliser pour chaque mot.",
        illustrationEmoji: "🧰"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "Un poisson (ss entre deux voyelles).", illustrationEmoji: "🐟" },
            { text: "Une guitare (gu devant i).", illustrationEmoji: "🎸" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "Ils sont contents (test étaient fonctionne).", illustrationEmoji: "😊" },
            { text: "Où vas-tu ? (lieu, avec accent).", illustrationEmoji: "🗺️" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : un poi___on (poisson). (s ou ss)", answer: "ss", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Entre deux voyelles, on écrit ss : poisson." },
        { order: 2, prompt: "Complète : une ___itare (guitare). (g ou gu)", answer: "gu", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Devant i, on écrit gu : guitare." },
        { order: 3, prompt: "Complète : Elles ___ arrivées. (son ou sont)", answer: "sont", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Elles étaient arrivées fonctionne, donc sont." },
        { order: 4, prompt: "Complète : Tu préfères le lait ___ le jus ? (ou/où)", answer: "ou", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Le lait ou bien le jus fonctionne, donc ou." },
        { order: 5, prompt: "Complète : un ___âteau (gâteau). (g ou gu)", answer: "g", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Devant a, on écrit g : gâteau." },
        { order: 6, prompt: "Défi : complète les deux mots. ___ ranges-tu ta tro___e (trousse) ? (ou/où, s/ss)", answer: "où ss", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Où ranges-tu (lieu) et trousse (ss entre deux voyelles)." }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Le grand défi de la semaine",
      xpReward: 24,
      story: {
        hook: "Imagine un grand jeu où tu mélanges toutes les tables et les méthodes de calcul de la semaine.",
        concreteExample: "Cette semaine, tu as appris la table de 2, la table de 5, la table de 10, et compter de 5 en 5.",
        reveal: "Aujourd'hui, tu vas utiliser toutes ces méthodes ensemble. Bravo pour cette semaine de calcul mental !",
        bridgeToConcept: "Réviser le calcul mental, c'est choisir la bonne méthode selon le calcul à faire.",
        illustrationEmoji: "🏆"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "2 x 6 = 12 (table de 2, double de 6).", illustrationEmoji: "✖️" },
            { text: "5 x 4 = 20 (table de 5).", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "10 x 7 = 70 (table de 10, on ajoute un 0).", illustrationEmoji: "0️⃣" },
            { text: "En comptant de 5 en 5 : 15, 20, 25.", illustrationEmoji: "🖐️" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 2 x 7", answer: "14", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "2 x 7, c'est le double de 7 : 14." },
        { order: 2, prompt: "Calcule : 5 x 6", answer: "30", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "5 x 6 = 30." },
        { order: 3, prompt: "Calcule : 10 x 4", answer: "40", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "10 x 4 = 40." },
        { order: 4, prompt: "Quel nombre vient après 35 en comptant de 5 en 5 ?", answer: "40", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Après 35, en ajoutant 5, on trouve 40." },
        { order: 5, prompt: "Calcule : 2 x 9", answer: "18", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "2 x 9, c'est le double de 9 : 18." },
        { order: 6, prompt: "Défi : calcule 5 x 4, puis multiplie le résultat par 2.", answer: "40", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "5 x 4 = 20, puis 20 x 2 = 40 (le double de 20)." }
      ]
    }
  ]
};
