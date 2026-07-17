import { DayCurriculum } from "@/models/types";

export const day01: DayCurriculum = {
  dayNumber: 1,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Multiplier un nombre à deux chiffres",
      xpReward: 24,
      story: {
        hook: "Imagine que tu dois préparer 3 fois la même recette, mais avec des quantités à deux chiffres.",
        concreteExample: "Une recette utilise 23 grammes de sucre. Tu la fais 3 fois. Combien de grammes de sucre te faut-il ?",
        reveal: "On multiplie dizaines et unités séparément : 20 x 3 = 60, et 3 x 3 = 9. On additionne : 60 + 9 = 69. Bravo, tu as multiplié un nombre à deux chiffres !",
        bridgeToConcept: "Pour multiplier 23 x 3, on multiplie d'abord les unités, puis les dizaines, puis on additionne.",
        illustrationEmoji: "🍰"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "34 x 2 : unités 4 x 2 = 8.", illustrationEmoji: "1️⃣" },
            { text: "Dizaines 30 x 2 = 60.", illustrationEmoji: "🔟" },
            { text: "On additionne : 60 + 8 = 68.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "42 x 3 : unités 2 x 3 = 6.", illustrationEmoji: "1️⃣" },
            { text: "Dizaines 40 x 3 = 120.", illustrationEmoji: "🔟" },
            { text: "On additionne : 120 + 6 = 126.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 21 x 3", answer: "63", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "1 x 3 = 3, 20 x 3 = 60. 60 + 3 = 63." },
        { order: 2, prompt: "Calcule : 32 x 2", answer: "64", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "2 x 2 = 4, 30 x 2 = 60. 60 + 4 = 64." },
        { order: 3, prompt: "Calcule : 24 x 3", answer: "72", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "4 x 3 = 12, 20 x 3 = 60. 60 + 12 = 72." },
        { order: 4, prompt: "Calcule : 43 x 2", answer: "86", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "3 x 2 = 6, 40 x 2 = 80. 80 + 6 = 86." },
        { order: 5, prompt: "Calcule : 33 x 3", answer: "99", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "3 x 3 = 9, 30 x 3 = 90. 90 + 9 = 99." },
        { order: 6, prompt: "Défi : calcule 26 x 4", answer: "104", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "6 x 4 = 24, 20 x 4 = 80. 80 + 24 = 104." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le futur simple des verbes en -er",
      xpReward: 24,
      story: {
        hook: "Imagine que tu racontes à ton ami ce que vous ferez demain, pas aujourd'hui.",
        concreteExample: "Écoute : demain, je jouerai au parc. Tu joueras avec moi. Il jouera aussi.",
        reveal: "À quoi sert le futur simple ? Il sert à dire ce qui va se passer plus tard. Comment le reconnaître ? On entend toujours -rai, -ras, -ra à la fin du verbe.",
        bridgeToConcept: "Au futur simple : je jouerai, tu joueras, il jouera, nous jouerons, vous jouerez, ils joueront.",
        illustrationEmoji: "🔮"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Demain, je mangerai une glace.", illustrationEmoji: "🍦" },
            { text: "La semaine prochaine, tu voyageras en train.", illustrationEmoji: "🚂" },
            { text: "Ce soir, elle regardera un film.", illustrationEmoji: "📺" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "On garde l'infinitif du verbe (jouer) et on ajoute la terminaison.", illustrationEmoji: "🔊" },
            { text: "jouer + ai = jouerai, jouer + as = joueras.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Demain, je ____ (jouer) au parc.", answer: "jouerai", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec je, on ajoute -rai : je jouerai." },
        { order: 2, prompt: "Complète : Tu ____ (chanter) à la fête.", answer: "chanteras", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Avec tu, on ajoute -ras : tu chanteras." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Il ____ (regarder) un film ce soir.",
          options: ["regardera", "regarderas", "regarderai"],
          answer: "regardera",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Avec il, on ajoute -ra : il regardera."
        },
        { order: 4, prompt: "Complète : Nous ____ (manger) une glace.", answer: "mangerons", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Avec nous, on ajoute -rons : nous mangerons." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Ils ____ (voyager) en train.",
          options: ["voyageront", "voyagerez", "voyagerons"],
          answer: "voyageront",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Avec ils, on ajoute -ront : ils voyageront."
        },
        { order: 6, prompt: "Défi : complète les deux mots. Demain, vous ____ (danser) et nous ____ (chanter).", answer: "danserez chanterons", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Vous danserez (-rez) et nous chanterons (-rons)." }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Le complément du verbe",
      xpReward: 24,
      story: {
        hook: "Imagine que le verbe pose toujours une question, et qu'un mot vient y répondre juste après.",
        concreteExample: "Regarde : je mange une pomme. Le verbe mange pose la question quoi ?",
        reveal: "La réponse, c'est une pomme. À quoi sert ce mot ? Il complète le sens du verbe. Comment le trouver ? On pose la question qui ? ou quoi ? juste après le verbe.",
        bridgeToConcept: "Le complément du verbe répond à la question quoi ? ou qui ? posée après le verbe.",
        illustrationEmoji: "🧩"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Je lis un livre : je lis quoi ? Un livre. C'est le complément.", illustrationEmoji: "📖" },
            { text: "Elle regarde son frère : elle regarde qui ? Son frère. C'est le complément.", illustrationEmoji: "👦" }
          ]
        },
        {
          title: "L'astuce pour trouver le complément",
          steps: [
            { text: "Pose la question quoi ? ou qui ? juste après le verbe.", illustrationEmoji: "❓" },
            { text: "La réponse à cette question est le complément du verbe.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Je mange une pomme. Quel est le complément du verbe mange ?", answer: "une pomme", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Je mange quoi ? Une pomme. C'est le complément." },
        { order: 2, prompt: "Tu lis un livre. Quel est le complément du verbe lis ?", answer: "un livre", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Tu lis quoi ? Un livre. C'est le complément." },
        { order: 3, prompt: "Elle regarde son frère. Quel est le complément du verbe regarde ?", answer: "son frère", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Elle regarde qui ? Son frère. C'est le complément." },
        { order: 4, prompt: "Nous construisons une cabane. Quel est le complément du verbe construisons ?", answer: "une cabane", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Nous construisons quoi ? Une cabane. C'est le complément." },
        { order: 5, prompt: "Ils invitent leurs amis. Quel est le complément du verbe invitent ?", answer: "leurs amis", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Ils invitent qui ? Leurs amis. C'est le complément." },
        { order: 6, prompt: "Défi : le matin, ma mère prépare un bon petit déjeuner. Quel est le complément du verbe prépare ?", answer: "un bon petit déjeuner", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Ma mère prépare quoi ? Un bon petit déjeuner. C'est le complément." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "A ou à : le test avec avait",
      xpReward: 24,
      story: {
        hook: "Il existe un petit test magique pour ne jamais confondre a et à.",
        concreteExample: "Regarde : il ... un vélo tout neuf. Est-ce que c'est a ou à ?",
        reveal: "On essaie de remplacer par avait : il avait un vélo tout neuf. Ça fonctionne ! Donc on écrit a, sans accent, le verbe avoir. Bravo, tu as réussi le test magique !",
        bridgeToConcept: "Si avait fonctionne, on écrit a (verbe avoir). Sinon, on écrit à, avec un accent.",
        illustrationEmoji: "🪄"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Elle va à l'école : on essaie avait, ça ne fonctionne pas. Donc à.", illustrationEmoji: "🏫" },
            { text: "Il a terminé son repas : on essaie avait terminé, ça fonctionne. Donc a.", illustrationEmoji: "🍽️" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Remplace toujours par avait dans ta tête.", illustrationEmoji: "🔊" },
            { text: "Si ça marche, c'est a. Sinon, c'est à.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Il ___ un beau vélo. (a ou à)", answer: "a", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Il avait un beau vélo fonctionne, donc a." },
        { order: 2, prompt: "Complète : Nous allons ___ la piscine. (a ou à)", answer: "à", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Nous allons avait la piscine ne fonctionne pas, donc à." },
        { order: 3, prompt: "Complète : Elle ___ fini ses devoirs. (a ou à)", answer: "a", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Elle avait fini fonctionne, donc a." },
        { order: 4, prompt: "Complète : Je pense ___ toi. (a ou à)", answer: "à", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Je pense avait toi ne fonctionne pas, donc à." },
        { order: 5, prompt: "Complète : Mon frère ___ gagné le match. (a ou à)", answer: "a", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Mon frère avait gagné fonctionne, donc a." },
        { order: 6, prompt: "Défi : complète les deux mots. Il ___ donné son cadeau ___ sa soeur.", answer: "a à", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Il a donné (avait donné fonctionne) et à sa soeur (avait sa soeur ne fonctionne pas)." }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "La table de multiplication de 3",
      xpReward: 24,
      story: {
        hook: "Imagine que tu comptes des roues de tricycles, avec 3 roues à chaque fois.",
        concreteExample: "Il y a 4 tricycles. Combien de roues en tout ?",
        reveal: "4 fois 3, ça fait 12. Bravo, tu as trouvé le nombre de roues !",
        bridgeToConcept: "La table de 3 : 1x3=3, 2x3=6, 3x3=9, 4x3=12, 5x3=15...",
        illustrationEmoji: "🛺"
      },
      examples: [
        {
          title: "La table de 3",
          steps: [
            { text: "3 x 4 : c'est 3 + 3 + 3 + 3 = 12.", illustrationEmoji: "➕" },
            { text: "3 x 6 : on continue, ça fait 18.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour la table de 3",
          steps: [
            { text: "Tu peux faire le double, puis ajouter le nombre une fois de plus.", illustrationEmoji: "🔍" },
            { text: "3 x 5 : double de 5 = 10, plus 5 = 15.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 3 x 3", answer: "9", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "3 x 3 = 9." },
        { order: 2, prompt: "Calcule : 3 x 5", answer: "15", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "3 x 5 = 15." },
        { order: 3, prompt: "Calcule : 3 x 6", answer: "18", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "3 x 6 = 18." },
        { order: 4, prompt: "Calcule : 3 x 7", answer: "21", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "3 x 7 = 21." },
        { order: 5, prompt: "Calcule : 3 x 8", answer: "24", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "3 x 8 = 24." },
        { order: 6, prompt: "Défi : calcule 3 x 9", answer: "27", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "3 x 9 = 27." }
      ]
    }
  ]
};
