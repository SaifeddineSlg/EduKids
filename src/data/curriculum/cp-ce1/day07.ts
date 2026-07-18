import { DayCurriculum } from "@/models/types";

export const day07: DayCurriculum = {
  dayNumber: 7,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "La soustraction",
      xpReward: 24,
      story: {
        hook: "Imagine que tu avais des billes, et que tu en donnes quelques-unes à ton ami.",
        concreteExample: "Tu as 8 billes. Tu en donnes 3 à ton ami. Combien t'en reste-t-il ?",
        reveal: "On enlève 3 billes à 8 billes : 8 - 3 = 5. Bravo, tu viens de faire une soustraction !",
        bridgeToConcept: "Soustraire, c'est enlever un nombre à un autre pour savoir ce qu'il reste.",
        illustrationEmoji: "➖"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Tu as 9 bonbons, tu en manges 4.", illustrationEmoji: "🍬" },
            { text: "9 - 4 = 5. Il te reste 5 bonbons.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour soustraire",
          steps: [
            { text: "Pars du plus grand nombre et recule sur tes doigts autant de fois que le petit nombre.", illustrationEmoji: "🖐️" },
            { text: "Par exemple pour 10 - 3 : tu pars de 10, puis tu recules à 9, 8, 7.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 7 - 3", answer: "4", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "7 - 3 = 4." },
        { order: 2, prompt: "Calcule : 9 - 5", answer: "4", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "9 - 5 = 4." },
        { order: 3, prompt: "Calcule : 12 - 4", answer: "8", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "12 - 4 = 8." },
        { order: 4, prompt: "Calcule : 15 - 6", answer: "9", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "15 - 6 = 9." },
        { order: 5, prompt: "Calcule : 18 - 9", answer: "9", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "18 - 9 = 9." },
        { order: 6, prompt: "Défi : calcule 20 - 8", answer: "12", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "20 - 8 = 12." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Les verbes en -er : ils et elles",
      xpReward: 24,
      story: {
        hook: "Imagine un groupe d'enfants qui jouent tous ensemble dans la cour.",
        concreteExample: "Écoute : ils jouent, elles chantent. Tu entends bien le son à la fin ?",
        reveal: "À quoi servent ils et elles ? Ils et elles parlent de plusieurs personnes ou choses. Avec ils ou elles, un verbe en -er se termine par -ent, mais attention, on ne l'entend pas !",
        bridgeToConcept: "Au présent : ils jouent, elles chantent.",
        illustrationEmoji: "👦👧"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Ils jouent dans la cour.", illustrationEmoji: "⚽" },
            { text: "Elles chantent une chanson.", illustrationEmoji: "🎤" }
          ]
        },
        {
          title: "Attention à l'erreur fréquente",
          steps: [
            { text: "Le -ent final ne s'entend pas, mais il faut toujours l'écrire.", illustrationEmoji: "❌" },
            { text: "Ils joue est une erreur : il faut écrire ils jouent.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Ils ____ (jouer) dans la cour.", answer: "jouent", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec ils, un verbe en -er se termine par -ent : ils jouent. Le -ent ne s'entend pas, mais il s'écrit toujours.", strictAccents: true },
        { order: 2, prompt: "Complète : Elles ____ (chanter) très bien.", answer: "chantent", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Avec elles, un verbe en -er se termine par -ent : elles chantent. Tu étais proche !", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Ils ____ (regarder) un film.",
          options: ["regarde", "regardent", "regardons"],
          answer: "regardent",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec ils, un verbe en -er se termine par -ent : ils regardent.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Elles ____ (danser) avec joie.", answer: "dansent", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Avec elles, un verbe en -er se termine par -ent : elles dansent.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Ils ____ (manger) une glace.",
          options: ["mangent", "mange", "mangeons"],
          answer: "mangent",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec ils, un verbe en -er se termine par -ent : ils mangent.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Ils ____ (jouer) pendant qu'elles ____ (chanter).", answer: "jouent chantent", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Ils jouent et elles chantent : les deux verbes se terminent par -ent, même si on ne l'entend pas. Relis la phrase entière à voix haute.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Les déterminants : le, la, les, un, une, des",
      xpReward: 24,
      story: {
        hook: "Imagine une famille de petits mots qui annoncent toujours qu'un nom va arriver.",
        concreteExample: "Regarde : le chat, la table, les enfants, un ballon, une fleur, des livres.",
        reveal: "À quoi servent ces petits mots ? Ils annoncent un nom et disent s'il y en a un seul ou plusieurs. Comment les reconnaître ? Ils se trouvent juste devant le nom : le, la, les, un, une, des.",
        bridgeToConcept: "Ces petits mots devant le nom s'appellent des déterminants.",
        illustrationEmoji: "🗝️"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Le chat dort : le annonce chat.", illustrationEmoji: "🐱" },
            { text: "Les enfants jouent : les annonce enfants, qui sont plusieurs.", illustrationEmoji: "🧒" }
          ]
        },
        {
          title: "L'astuce pour les reconnaître",
          steps: [
            { text: "Cherche le petit mot juste avant le nom.", illustrationEmoji: "🔍" },
            { text: "S'il annonce un seul, c'est le, la, un ou une. S'il annonce plusieurs, c'est les ou des.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans la phrase les enfants jouent, quel est le déterminant ?", answer: "les", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Les annonce le nom enfants, c'est le déterminant." },
        { order: 2, prompt: "Dans la phrase une fleur pousse, quel est le déterminant ?", answer: "une", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Une annonce le nom fleur, c'est le déterminant." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis le déterminant parmi ces mots : joli, des, chante",
          options: ["joli", "des", "chante"],
          answer: "des",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Des annonce un nom au pluriel, c'est le déterminant."
        },
        { order: 4, prompt: "Dans la phrase le soleil brille, quel est le déterminant ?", answer: "le", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Le annonce le nom soleil, c'est le déterminant." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le déterminant parmi ces mots : livre, les, court",
          options: ["livre", "les", "court"],
          answer: "les",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Les annonce un nom au pluriel, c'est le déterminant."
        },
        { order: 6, prompt: "Défi : dans la phrase les chats jouent avec une balle, cite les deux déterminants.", answer: "les une", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Les annonce chats (pluriel) et une annonce balle (singulier) : ce sont les deux déterminants." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Le son [z] : le s entre deux voyelles",
      xpReward: 24,
      story: {
        hook: "Imagine que la lettre s change parfois de voix quand elle se trouve entre deux voyelles.",
        concreteExample: "Écoute : une rose, la maison. Tu entends le son [z], pas le son [s] !",
        reveal: "À quoi ça sert de le savoir ? À bien lire et écrire ces mots. Comment le reconnaître ? Quand un seul s se trouve entre deux voyelles, il se prononce [z]. Pour garder le son [s], il faut écrire ss.",
        bridgeToConcept: "Un seul s entre deux voyelles se prononce [z], comme dans rose ou maison.",
        illustrationEmoji: "🌹"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Une rose : le s entre le o et le e se prononce [z].", illustrationEmoji: "🌹" },
            { text: "La maison : le s entre le ai et le o se prononce [z].", illustrationEmoji: "🏠" }
          ]
        },
        {
          title: "Comparer les deux sons",
          steps: [
            { text: "Une tasse (avec ss) fait le son [s].", illustrationEmoji: "🥤" },
            { text: "Une rose (avec un seul s) fait le son [z].", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, type: "mcq", prompt: "Dans le mot rose, comment se prononce le s ?", options: ["[s]", "[z]"], answer: "[z]", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Un seul s entre deux voyelles se prononce [z] : rose.", strictAccents: true },
        { order: 2, type: "mcq", prompt: "Dans le mot maison, comment se prononce le s ?", options: ["[s]", "[z]"], answer: "[z]", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Un seul s entre deux voyelles se prononce [z] : maison.", strictAccents: true },
        { order: 3, type: "mcq", prompt: "Dans le mot tasse, comment se prononce le s (écrit ss) ?", options: ["[s]", "[z]"], answer: "[s]", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Deux s (ss) entre deux voyelles gardent le son [s] : tasse.", strictAccents: true },
        { order: 4, prompt: "Complète : une mai___on (maison). (s ou ss)", answer: "s", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Maison s'écrit avec un seul s, qui se prononce [z] entre deux voyelles.", strictAccents: true },
        { order: 5, prompt: "Complète : une ro___e (rose). (s ou ss)", answer: "s", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Rose s'écrit avec un seul s, qui se prononce [z]. Deux s (ss) donneraient le son [s], comme dans tasse.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. La mai___on (maison) est à côté d'un beau ro___ier (rosier).", answer: "s s", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Maison et rosier s'écrivent chacun avec un seul s, qui se prononce [z] entre deux voyelles.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Enlever 10 à un nombre",
      xpReward: 24,
      story: {
        hook: "Imagine que tu rends un paquet de dix billes que tu avais emprunté.",
        concreteExample: "Tu as 45 billes. Tu rends un paquet de 10. Combien t'en reste-t-il ?",
        reveal: "45 - 10 : le chiffre des unités ne change pas, seul le chiffre des dizaines recule de 1. 45 devient 35. Bravo !",
        bridgeToConcept: "Enlever 10, c'est enlever 1 dizaine : seul le chiffre des dizaines change.",
        illustrationEmoji: "🔟"
      },
      examples: [
        {
          title: "Enlever 10 à un nombre",
          steps: [
            { text: "27 - 10 : les unités restent 7, les dizaines passent de 2 à 1.", illustrationEmoji: "➖" },
            { text: "Donc 27 - 10 = 17.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Encore un exemple",
          steps: [
            { text: "58 - 10 : les unités restent 8, les dizaines passent de 5 à 4.", illustrationEmoji: "➖" },
            { text: "Donc 58 - 10 = 48.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 23 - 10", answer: "13", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Les unités restent 3, les dizaines passent de 2 à 1 : 23 - 10 = 13." },
        { order: 2, prompt: "Calcule : 46 - 10", answer: "36", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Les unités restent 6, les dizaines passent de 4 à 3 : 46 - 10 = 36." },
        { order: 3, prompt: "Calcule : 39 - 10", answer: "29", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Les unités restent 9, les dizaines passent de 3 à 2 : 39 - 10 = 29." },
        { order: 4, prompt: "Calcule : 62 - 10", answer: "52", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Les unités restent 2, les dizaines passent de 6 à 5 : 62 - 10 = 52." },
        { order: 5, prompt: "Calcule : 51 - 10", answer: "41", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Les unités restent 1, les dizaines passent de 5 à 4 : 51 - 10 = 41." },
        { order: 6, prompt: "Défi : calcule 40 - 10, puis enlève encore 10.", answer: "20", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "40 - 10 = 30, puis 30 - 10 = 20." }
      ]
    }
  ]
};
