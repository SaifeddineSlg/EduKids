import { DayCurriculum } from "@/models/types";

export const day18: DayCurriculum = {
  dayNumber: 18,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Lire l'heure : les heures pleines",
      xpReward: 24,
      story: {
        hook: "Sur une horloge, deux aiguilles se promènent : une petite et une grande.",
        concreteExample: "Quand la petite aiguille est sur le 3 et la grande aiguille est sur le 12, il est 3 heures.",
        reveal: "Pour lire une heure pleine, on regarde où pointe la petite aiguille : c'est le nombre d'heures. La grande aiguille reste sur le 12.",
        bridgeToConcept: "Pour lire une heure pleine, la grande aiguille est sur le 12 et la petite aiguille indique le nombre d'heures.",
        illustrationEmoji: "🕒"
      },
      examples: [
        {
          title: "Lire une heure pleine",
          steps: [
            { text: "La petite aiguille est sur le 5, la grande sur le 12.", illustrationEmoji: "🕔" },
            { text: "Il est 5 heures.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "La petite aiguille est sur le 9, la grande sur le 12.", illustrationEmoji: "🕘" },
            { text: "Il est 9 heures.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "La petite aiguille est sur le 2 et la grande sur le 12. Quelle heure est-il ?", answer: "2 heures", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "La petite aiguille indique le nombre d'heures : il est 2 heures.", acceptedAnswers: ["2h", "2"] },
        { order: 2, prompt: "La petite aiguille est sur le 7 et la grande sur le 12. Quelle heure est-il ?", answer: "7 heures", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "La petite aiguille indique le nombre d'heures : il est 7 heures.", acceptedAnswers: ["7h", "7"] },
        {
          order: 3,
          type: "mcq",
          prompt: "La petite aiguille est sur le 10 et la grande sur le 12. Quelle heure est-il ?",
          options: ["10 heures", "12 heures", "2 heures"],
          answer: "10 heures",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "La petite aiguille est sur le 10 : il est donc 10 heures."
        },
        { order: 4, prompt: "Il est midi. Où se trouvent les deux aiguilles ?", answer: "sur le 12", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "À midi, la petite et la grande aiguille sont toutes les deux sur le 12." },
        {
          order: 5,
          type: "mcq",
          prompt: "Pour qu'une heure soit pleine (comme 4 heures pile), où doit être la grande aiguille ?",
          options: ["sur le 12", "sur le 6", "sur le 3"],
          answer: "sur le 12",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Pour une heure pleine, la grande aiguille est toujours sur le 12."
        },
        { order: 6, prompt: "Défi : la petite aiguille est sur le 6 et la grande sur le 12. Dans une heure, où sera la petite aiguille ?", answer: "sur le 7", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Il est 6 heures ; dans une heure, la petite aiguille avance d'un chiffre et se retrouve sur le 7." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le verbe dormir au présent",
      xpReward: 24,
      story: {
        hook: "Il existe un petit mot magique qui sert à dire que l'on dort, la nuit ou pendant la sieste.",
        concreteExample: "Écoute : je dors dans mon lit. Tu dors sur le canapé. Il dort déjà.",
        reveal: "Ce mot magique, c'est le verbe dormir. À quoi sert-il ? Il sert à dire que l'on est en train de dormir. Comment le reconnaître ? Il change selon la personne : dors, dors, dort...",
        bridgeToConcept: "Au présent : je dors, tu dors, il dort, elle dort.",
        illustrationEmoji: "😴"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Je dors dans mon lit.", illustrationEmoji: "🛏️" },
            { text: "Tu dors sur le canapé.", illustrationEmoji: "🛋️" },
            { text: "Il dort déjà profondément.", illustrationEmoji: "😴" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Avec je et tu, on écrit dors (sans le m du milieu).", illustrationEmoji: "🎵" },
            { text: "Avec il ou elle, on écrit dort (sans le m non plus).", illustrationEmoji: "🎵" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je ____ (dormir) dans mon lit.", answer: "dors", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec je, le verbe dormir devient dors : je dors dans mon lit. Essaie de le lire à voix haute.", strictAccents: true },
        { order: 2, prompt: "Complète : Tu ____ (dormir) sur le canapé.", answer: "dors", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Avec tu, comme avec je, le verbe dormir devient dors.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Il ____ (dormir) déjà.",
          options: ["dors", "dort", "dormons"],
          answer: "dort",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec il ou elle, le verbe dormir devient dort : il dort déjà.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Elle ____ (dormir) toute la nuit.", answer: "dort", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Avec elle, comme avec il, le verbe dormir devient dort.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Je ____ (dormir) très bien ici.",
          options: ["dors", "dort", "dormez"],
          answer: "dors",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec je, on écrit toujours dors.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Tu ____ (dormir) bien et il ____ (dormir) aussi.", answer: "dors dort", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Tu dors (avec tu, on écrit dors) et il dort (avec il, on écrit dort). Relis la phrase entière à voix haute.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Les contraires",
      xpReward: 24,
      story: {
        hook: "Certains mots racontent exactement l'inverse d'un autre mot.",
        concreteExample: "Regarde : grand et petit. Ces deux mots racontent des idées opposées.",
        reveal: "Grand et petit sont des contraires, aussi appelés antonymes. À quoi ça sert ? Ça permet de dire l'inverse d'une idée. Comment les reconnaître ? Un contraire dit exactement le sens opposé.",
        bridgeToConcept: "Deux contraires sont deux mots qui veulent dire des choses opposées.",
        illustrationEmoji: "⚖️"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Grand est le contraire de petit.", illustrationEmoji: "📏" },
            { text: "Chaud est le contraire de froid.", illustrationEmoji: "🌡️" }
          ]
        },
        {
          title: "L'astuce pour les trouver",
          steps: [
            { text: "On se demande quelle est l'idée opposée du mot.", illustrationEmoji: "🔍" },
            { text: "Le mot trouvé est le contraire.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Quel est le contraire de grand ?", answer: "petit", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Grand et petit veulent dire des choses opposées : ce sont des contraires." },
        { order: 2, prompt: "Quel est le contraire de chaud ?", answer: "froid", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Chaud et froid veulent dire des choses opposées : ce sont des contraires." },
        {
          order: 3,
          type: "mcq",
          prompt: "Quel est le contraire de rapide ?",
          options: ["lent", "joli", "grand"],
          answer: "lent",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Rapide et lent veulent dire des choses opposées : ce sont des contraires."
        },
        { order: 4, prompt: "Quel est le contraire de content ? (choisis : triste ou joyeux)", answer: "triste", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Content et triste veulent dire des choses opposées : ce sont des contraires." },
        {
          order: 5,
          type: "mcq",
          prompt: "Quel est le contraire de propre ?",
          options: ["sale", "beau", "lourd"],
          answer: "sale",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Propre et sale veulent dire des choses opposées : ce sont des contraires."
        },
        { order: 6, prompt: "Défi : cite le contraire du mot jour.", answer: "nuit", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Jour et nuit veulent dire des choses opposées : ce sont des contraires." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "L'homophone son et sont",
      xpReward: 24,
      story: {
        hook: "Encore deux petits mots qui se prononcent pareil, mais qui ne s'écrivent pas pareil et ne veulent pas dire la même chose.",
        concreteExample: "Regarde : son chat dort. Les enfants sont contents. Le premier montre à qui appartient le chat, le second vient du verbe être.",
        reveal: "À quoi ça sert de les différencier ? À bien écrire chaque mot selon son sens. Comment le reconnaître ? Si tu peux remplacer le mot par étaient, c'est sont (verbe être). Sinon, c'est son (il indique à qui appartient quelque chose).",
        bridgeToConcept: "On écrit son (devant un nom, on peut dire mon ou ton) ou sont (verbe être, on peut dire étaient).",
        illustrationEmoji: "🔤"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Son chat dort. (on peut dire : mon chat dort)", illustrationEmoji: "🐱" },
            { text: "Les enfants sont contents. (on peut dire : les enfants étaient contents)", illustrationEmoji: "🙂" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Essaie de remplacer par étaient dans ta tête.", illustrationEmoji: "🔍" },
            { text: "Si ça fonctionne, écris sont. Sinon, écris son.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Léo prend ___ cartable. (son ou sont)", answer: "son", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "On peut dire Léo prend mon cartable, donc on écrit son.", strictAccents: true },
        { order: 2, prompt: "Complète : Les chats ___ dans le jardin. (son ou sont)", answer: "sont", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "On peut dire les chats étaient dans le jardin, donc on écrit sont.", strictAccents: true },
        { order: 3, prompt: "Complète : Ma sœur promène ___ chien. (son ou sont)", answer: "son", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "On peut dire ma sœur promène mon chien, donc on écrit son.", strictAccents: true },
        { order: 4, prompt: "Complète : Elles ___ heureuses. (son ou sont)", answer: "sont", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "On peut dire elles étaient heureuses, donc on écrit sont.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le bon mot : Ils ___ à l'école.",
          options: ["son", "sont"],
          answer: "sont",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "On peut dire ils étaient à l'école, donc on écrit sont.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Léa range ___ (son) cahier : les crayons ___ (sont) rangés aussi.", answer: "son sont", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Son (on peut dire mon cahier) et sont (verbe être, on peut dire étaient rangés).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Ajouter 8 (méthode +10 puis -2)",
      xpReward: 24,
      story: {
        hook: "Tu sais déjà ajouter 9 en utilisant une astuce. Aujourd'hui, tu vas apprendre une astuce pour ajouter 8.",
        concreteExample: "Pour calculer 15 + 8, on peut d'abord ajouter 10, puis enlever 2.",
        reveal: "15 + 10 = 25, puis 25 - 2 = 23. Donc 15 + 8 = 23 ! C'est plus rapide que de compter un par un.",
        bridgeToConcept: "Pour ajouter 8, on ajoute 10 puis on enlève 2.",
        illustrationEmoji: "➕"
      },
      examples: [
        {
          title: "L'astuce +10 puis -2",
          steps: [
            { text: "23 + 8 : on ajoute 10, puis on enlève 2.", illustrationEmoji: "➕" },
            { text: "23 + 10 = 33, puis 33 - 2 = 31.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "34 + 8 : on ajoute 10, puis on enlève 2.", illustrationEmoji: "➕" },
            { text: "34 + 10 = 44, puis 44 - 2 = 42.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 12 + 8", answer: "20", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "12 + 10 = 22, puis 22 - 2 = 20. Donc 12 + 8 = 20." },
        { order: 2, prompt: "Calcule : 25 + 8", answer: "33", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "25 + 10 = 35, puis 35 - 2 = 33. Donc 25 + 8 = 33." },
        { order: 3, prompt: "Calcule : 41 + 8", answer: "49", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "41 + 10 = 51, puis 51 - 2 = 49. Donc 41 + 8 = 49." },
        { order: 4, prompt: "Calcule : 36 + 8", answer: "44", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "36 + 10 = 46, puis 46 - 2 = 44. Donc 36 + 8 = 44." },
        { order: 5, prompt: "Calcule : 53 + 8", answer: "61", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "53 + 10 = 63, puis 63 - 2 = 61. Donc 53 + 8 = 61." },
        { order: 6, prompt: "Défi : calcule 27 + 8, puis ajoute encore 2.", answer: "37", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "27 + 8 = 35, puis 35 + 2 = 37." }
      ]
    }
  ]
};
