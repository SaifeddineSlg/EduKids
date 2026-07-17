import { DayCurriculum } from "@/models/types";

export const day02: DayCurriculum = {
  dayNumber: 2,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Additionner des petits nombres",
      xpReward: 24,
      story: {
        hook: "Imagine que tu as des jouets dans deux boîtes, et que tu veux savoir combien tu en as en tout.",
        concreteExample: "Dans la première boîte, il y a 4 jouets. Dans la deuxième, il y a 3 jouets. Combien de jouets en tout ?",
        reveal: "On met les deux nombres ensemble : 4 et 3, ça fait 7. Bravo, tu viens de faire une addition !",
        bridgeToConcept: "Additionner, c'est mettre deux nombres ensemble pour en trouver un plus grand.",
        illustrationEmoji: "🧸"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Tu as 5 billes rouges et 2 billes bleues.", illustrationEmoji: "🔴" },
            { text: "5 + 2 = 7. Tu as 7 billes en tout.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour additionner",
          steps: [
            { text: "Commence par le plus grand nombre, puis compte le petit nombre en plus sur tes doigts.", illustrationEmoji: "🖐️" },
            { text: "Par exemple pour 6 + 3 : tu pars de 6, puis tu comptes 7, 8, 9.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 3 + 4", answer: "7", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "3 + 4 = 7." },
        { order: 2, prompt: "Calcule : 6 + 2", answer: "8", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "6 + 2 = 8." },
        { order: 3, prompt: "Calcule : 8 + 5", answer: "13", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "8 + 5 = 13." },
        { order: 4, prompt: "Calcule : 10 + 6", answer: "16", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "10 + 6 = 16." },
        { order: 5, prompt: "Calcule : 9 + 7", answer: "16", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "9 + 7 = 16." },
        { order: 6, prompt: "Défi : calcule 11 + 8", answer: "19", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "11 + 8 = 19." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le verbe avoir au présent",
      xpReward: 24,
      story: {
        hook: "Il existe un autre petit mot magique qui sert à dire ce que l'on possède.",
        concreteExample: "Écoute : j'ai un vélo. Tu as un chat. Elle a une trottinette.",
        reveal: "Ce mot magique, c'est le verbe avoir. À quoi sert-il ? Il sert à dire ce que l'on a. Comment le reconnaître ? Il change beaucoup selon la personne : ai, as, a...",
        bridgeToConcept: "Au présent : j'ai, tu as, il a, elle a.",
        illustrationEmoji: "🎒"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "J'ai un cartable bleu.", illustrationEmoji: "🎒" },
            { text: "Tu as de jolis crayons.", illustrationEmoji: "✏️" },
            { text: "Il a un ballon rouge.", illustrationEmoji: "⚽" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Avec je, on dit ai (j'ai).", illustrationEmoji: "🎵" },
            { text: "Avec tu, on dit as (tu as).", illustrationEmoji: "🎵" },
            { text: "Avec il ou elle, on dit a (il a, elle a).", illustrationEmoji: "🎵" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : J'____ un vélo. (ai)", answer: "ai", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec je, on dit ai : j'ai un vélo." },
        { order: 2, prompt: "Complète : Tu ____ un chat.", answer: "as", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Avec tu, on dit as : tu as un chat." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Il ____ un ballon.",
          options: ["ai", "as", "a"],
          answer: "a",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Avec il, on dit a : il a un ballon."
        },
        { order: 4, prompt: "Complète : Elle ____ une trottinette.", answer: "a", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Avec elle, on dit a : elle a une trottinette." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : J'____ un joli dessin.",
          options: ["ai", "as", "a"],
          answer: "ai",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Avec je, on dit ai : j'ai un joli dessin."
        },
        { order: 6, prompt: "Défi : complète les deux mots. Tu ____ un chien et j'____ un chat.", answer: "as ai", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Tu as (avec tu) et j'ai (avec je)." }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Reconnaître un verbe",
      xpReward: 24,
      story: {
        hook: "Imagine une phrase comme une petite histoire où quelqu'un fait toujours quelque chose.",
        concreteExample: "Regarde : le chat dort. Que fait le chat ?",
        reveal: "Le chat dort : dort dit ce que fait le chat. À quoi sert ce mot ? Il sert à dire une action. Comment le reconnaître ? On peut dire il est en train de... : il est en train de dormir.",
        bridgeToConcept: "Le mot qui dit l'action s'appelle un verbe.",
        illustrationEmoji: "🏃"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "La fille saute : saute est le verbe, l'action.", illustrationEmoji: "🤸" },
            { text: "Le garçon mange : mange est le verbe, l'action.", illustrationEmoji: "🍎" }
          ]
        },
        {
          title: "L'astuce pour reconnaître un verbe",
          steps: [
            { text: "Essaie de dire il est en train de devant le mot.", illustrationEmoji: "🔍" },
            { text: "Si ça fonctionne, comme il est en train de courir, c'est un verbe !", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans la phrase le chien court, quel est le verbe ?", answer: "court", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Court dit l'action, c'est le verbe." },
        { order: 2, prompt: "Dans la phrase la maîtresse parle, quel est le verbe ?", answer: "parle", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Parle dit l'action, c'est le verbe." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis le verbe parmi ces mots : joli, chante, table",
          options: ["joli", "chante", "table"],
          answer: "chante",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Chante dit l'action, c'est le verbe."
        },
        { order: 4, prompt: "Dans la phrase mon frère saute très haut, quel est le verbe ?", answer: "saute", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Saute dit l'action, c'est le verbe." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le verbe parmi ces mots : petit, nage, jardin",
          options: ["petit", "nage", "jardin"],
          answer: "nage",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Nage dit l'action, c'est le verbe."
        },
        { order: 6, prompt: "Défi : dans la phrase le petit oiseau vole et chante, cite les deux verbes.", answer: "vole chante", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Vole et chante disent chacun une action : ce sont les deux verbes." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Le pluriel des noms",
      xpReward: 24,
      story: {
        hook: "Imagine que tu as un seul jouet, puis que tu en as plusieurs.",
        concreteExample: "Regarde : un chat, puis des chats. Qu'est-ce qui a changé à la fin du mot ?",
        reveal: "On a ajouté un s à la fin ! À quoi ça sert ? Ça montre qu'il y en a plusieurs. Comment le reconnaître ? Devant le nom, on trouve des au lieu de un ou une.",
        bridgeToConcept: "Pour dire qu'il y a plusieurs choses, on ajoute souvent un s à la fin du nom.",
        illustrationEmoji: "🐱🐱"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Un ballon, des ballons.", illustrationEmoji: "⚽" },
            { text: "Une fleur, des fleurs.", illustrationEmoji: "🌸" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Si tu vois des devant le mot, c'est qu'il y en a plusieurs.", illustrationEmoji: "🔍" },
            { text: "Alors tu ajoutes un s à la fin du nom.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Écris au pluriel : un chat -> des ___", answer: "chats", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On ajoute un s : des chats." },
        { order: 2, prompt: "Écris au pluriel : une table -> des ___", answer: "tables", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "On ajoute un s : des tables." },
        { order: 3, prompt: "Écris au pluriel : un livre -> des ___", answer: "livres", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On ajoute un s : des livres." },
        { order: 4, prompt: "Écris au pluriel : une fleur -> des ___", answer: "fleurs", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "On ajoute un s : des fleurs." },
        { order: 5, prompt: "Écris au pluriel : un ami -> des ___", answer: "amis", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "On ajoute un s : des amis." },
        { order: 6, prompt: "Défi : écris au pluriel les deux mots. un chien, une balle -> des ___, des ___", answer: "chiens balles", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "des chiens et des balles : on ajoute un s a chaque mot." }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Enlever 1, enlever 2",
      xpReward: 24,
      story: {
        hook: "Imagine que tu manges un bonbon de ta boîte : il t'en reste un de moins.",
        concreteExample: "Tu as 6 bonbons. Tu en manges 1. Combien t'en reste-t-il ?",
        reveal: "6 bonbons, moins 1 bonbon, ça fait 5 bonbons. Enlever 1, c'est juste dire le nombre d'avant ! Bravo !",
        bridgeToConcept: "Enlever 1 à un nombre, c'est trouver le nombre juste avant.",
        illustrationEmoji: "🍬"
      },
      examples: [
        {
          title: "Enlever 1",
          steps: [
            { text: "5 - 1 : le nombre juste avant 5, c'est 4.", illustrationEmoji: "➖" },
            { text: "Donc 5 - 1 = 4.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Enlever 2",
          steps: [
            { text: "7 - 2 : on recule de 2 nombres avant 7 : 6, puis 5.", illustrationEmoji: "➖" },
            { text: "Donc 7 - 2 = 5.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 6 - 1", answer: "5", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Le nombre juste avant 6, c'est 5." },
        { order: 2, prompt: "Calcule : 9 - 1", answer: "8", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Le nombre juste avant 9, c'est 8." },
        { order: 3, prompt: "Calcule : 8 - 2", answer: "6", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avant 8, on recule de 2 : 7, puis 6." },
        { order: 4, prompt: "Calcule : 12 - 2", answer: "10", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Avant 12, on recule de 2 : 11, puis 10." },
        { order: 5, prompt: "Calcule : 15 - 1", answer: "14", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Le nombre juste avant 15, c'est 14." },
        { order: 6, prompt: "Défi : calcule 18 - 2", answer: "16", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Avant 18, on recule de 2 : 17, puis 16." }
      ]
    }
  ]
};
