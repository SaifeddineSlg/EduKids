import { DayCurriculum } from "@/models/types";

export const day24: DayCurriculum = {
  dayNumber: 24,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Ranger des nombres du plus petit au plus grand",
      xpReward: 24,
      story: {
        hook: "Imagine que tu dois ranger des nombres, comme tu ranges des livres du plus petit au plus grand.",
        concreteExample: "Regarde ces nombres : 45, 12, 78, 33. Comment les ranger du plus petit au plus grand ?",
        reveal: "On compare les nombres deux par deux : 12 est le plus petit, puis 33, puis 45, puis 78. Rangés dans l'ordre : 12, 33, 45, 78.",
        bridgeToConcept: "Ranger des nombres dans l'ordre croissant, c'est aller du plus petit au plus grand.",
        illustrationEmoji: "📶"
      },
      examples: [
        {
          title: "Ranger dans l'ordre croissant",
          steps: [
            { text: "Regarde les dizaines d'abord : 12 (1 dizaine), 33 (3 dizaines), 45 (4 dizaines), 78 (7 dizaines).", illustrationEmoji: "🔢" },
            { text: "Rangés du plus petit au plus grand : 12, 33, 45, 78.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Compare 56 et 54 : les dizaines sont pareilles, on regarde les unités : 4 est plus petit que 6.", illustrationEmoji: "🔍" },
            { text: "Donc 54 est plus petit que 56.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Range du plus petit au plus grand : 25, 8, 40.", answer: "8 25 40", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "8 est le plus petit (aucune dizaine), puis 25, puis 40." },
        { order: 2, prompt: "Range du plus petit au plus grand : 63, 17, 52.", answer: "17 52 63", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "17 a 1 dizaine, c'est le plus petit, puis 52, puis 63." },
        {
          order: 3,
          type: "mcq",
          prompt: "Quel est le plus petit nombre parmi 34, 19, 71 ?",
          options: ["34", "19", "71"],
          answer: "19",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "19 a seulement 1 dizaine, c'est le plus petit nombre."
        },
        { order: 4, prompt: "Range du plus petit au plus grand : 90, 45, 46.", answer: "45 46 90", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "45 et 46 ont 4 dizaines, mais 45 a moins d'unités que 46 ; 90 est le plus grand." },
        {
          order: 5,
          type: "mcq",
          prompt: "Quel est le plus grand nombre parmi 58, 85, 68 ?",
          options: ["58", "85", "68"],
          answer: "85",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "85 a 8 dizaines, c'est le plus grand nombre."
        },
        { order: 6, prompt: "Défi : range du plus petit au plus grand ces quatre nombres : 77, 7, 27, 17.", answer: "7 17 27 77", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "7 est le plus petit (aucune dizaine), puis 17, puis 27, puis 77." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le verbe lire au présent",
      xpReward: 24,
      story: {
        hook: "Un verbe permet de dire qu'on regarde des mots pour comprendre une histoire.",
        concreteExample: "Écoute : je lis un livre. Tu lis une bande dessinée. Il lit un journal.",
        reveal: "Ce verbe qui dit qu'on regarde des mots pour comprendre, c'est le verbe lire. Je lis, tu lis, il lit, elle lit.",
        bridgeToConcept: "Au présent : je lis, tu lis, il lit, elle lit.",
        illustrationEmoji: "📖"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Je lis une histoire avant de dormir.", illustrationEmoji: "🌙" },
            { text: "Tu lis un beau livre d'images.", illustrationEmoji: "🖼️" },
            { text: "Elle lit une bande dessinée.", illustrationEmoji: "😄" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Je lis et tu lis s'écrivent pareil : l-i-s.", illustrationEmoji: "🎵" },
            { text: "Il lit et elle lit s'écrivent avec un t : l-i-t.", illustrationEmoji: "🎵" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je ____ (lire) une histoire.", answer: "lis", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec je, le verbe lire devient lis : je lis une histoire.", strictAccents: true },
        { order: 2, prompt: "Complète : Tu ____ (lire) un livre.", answer: "lis", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Avec tu, le verbe lire devient lis, comme avec je.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Il ____ (lire) le journal.",
          options: ["lis", "lit", "lisons"],
          answer: "lit",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec il, le verbe lire devient lit, avec un t.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Elle ____ (lire) une bande dessinée.", answer: "lit", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Avec elle, comme avec il, le verbe lire devient lit.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Je ____ (lire) un conte.",
          options: ["lis", "lit", "lisez"],
          answer: "lis",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec je, on écrit lis, terminé par un s.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Je ____ (lire) une histoire et tu ____ (lire) un conte.", answer: "lis lis", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Je lis et tu lis s'écrivent tous les deux lis, avec un s à la fin.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Le groupe nominal : déterminant + nom",
      xpReward: 24,
      story: {
        hook: "Un déterminant et un nom aiment toujours se tenir la main dans une phrase.",
        concreteExample: "Regarde : le chat, la maison, des ballons. Chaque fois, un petit mot accompagne le nom.",
        reveal: "Ce petit mot qui accompagne le nom s'appelle un déterminant. Ensemble, le déterminant et le nom forment un groupe nominal : le chat, la maison, des ballons.",
        bridgeToConcept: "Un groupe nominal, c'est un déterminant suivi d'un nom.",
        illustrationEmoji: "🤝"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Le chien joue : le chien est un groupe nominal.", illustrationEmoji: "🐶" },
            { text: "Une fleur pousse : une fleur est un groupe nominal.", illustrationEmoji: "🌸" }
          ]
        },
        {
          title: "L'astuce pour reconnaître un groupe nominal",
          steps: [
            { text: "Cherche le déterminant (le, la, les, un, une, des).", illustrationEmoji: "🔍" },
            { text: "Regarde le nom juste après : ensemble, ils forment un groupe nominal.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans la phrase le chat dort, quel est le groupe nominal ?", answer: "le chat", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Le déterminant le et le nom chat forment le groupe nominal le chat." },
        { order: 2, prompt: "Dans la phrase une fille chante, quel est le groupe nominal ?", answer: "une fille", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Le déterminant une et le nom fille forment le groupe nominal une fille." },
        {
          order: 3,
          type: "mcq",
          prompt: "Quel est le groupe nominal dans les enfants jouent ?",
          options: ["les enfants", "jouent", "enfants jouent"],
          answer: "les enfants",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Le déterminant les et le nom enfants forment le groupe nominal les enfants."
        },
        { order: 4, prompt: "Dans la phrase des oiseaux chantent, quel est le groupe nominal ?", answer: "des oiseaux", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Le déterminant des et le nom oiseaux forment le groupe nominal des oiseaux." },
        {
          order: 5,
          type: "mcq",
          prompt: "Quel est le groupe nominal dans la maîtresse écrit ?",
          options: ["la maîtresse", "écrit", "maîtresse écrit"],
          answer: "la maîtresse",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Le déterminant la et le nom maîtresse forment le groupe nominal la maîtresse."
        },
        { order: 6, prompt: "Défi : cite les deux groupes nominaux dans la phrase le petit chat regarde la grande maison.", answer: "le petit chat la grande maison", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Le petit chat et la grande maison sont deux groupes nominaux : chacun contient un déterminant et un nom." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Les homophones ces et ses",
      xpReward: 24,
      story: {
        hook: "Deux petits mots se prononcent pareil mais ne montrent pas la même chose.",
        concreteExample: "Ces enfants jouent dans la cour. Léo range ses jouets.",
        reveal: "Ces (avec un c) sert à montrer plusieurs choses, comme ces enfants-là. Ses (avec un s) sert à dire que quelque chose appartient à quelqu'un, comme ses jouets à lui.",
        bridgeToConcept: "Ces (avec c) montre plusieurs choses ; ses (avec s) indique une possession.",
        illustrationEmoji: "👉"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Ces gâteaux sont délicieux. (on montre les gâteaux)", illustrationEmoji: "🧁" },
            { text: "Léa range ses affaires. (les affaires de Léa)", illustrationEmoji: "🎒" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Remplace par ces gens-là : si ça fonctionne, c'est ces avec un c.", illustrationEmoji: "🔍" },
            { text: "Remplace par les siens ou les siennes : si ça fonctionne, c'est ses avec un s.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : ___ enfants jouent dans le parc. (ces ou ses)", answer: "ces", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "On montre plusieurs enfants précis : on écrit ces avec un c.", strictAccents: true },
        { order: 2, prompt: "Complète : Tom range ___ crayons. (ces ou ses)", answer: "ses", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Les crayons appartiennent à Tom : on écrit ses avec un s.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis le bon mot : ___ fleurs sont magnifiques.",
          options: ["ces", "ses"],
          answer: "ces",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "On montre plusieurs fleurs précises : on écrit ces avec un c.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Léa appelle ___ amies. (ces ou ses)", answer: "ses", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Les amies appartiennent à Léa : on écrit ses avec un s.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le bon mot : ___ maisons sont grandes.",
          options: ["ces", "ses"],
          answer: "ces",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "On montre plusieurs maisons précises : on écrit ces avec un c.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. ___ (ces) chats miaulent, et Léo cherche ___ (ses) jouets.", answer: "ces ses", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Ces chats montre plusieurs chats précis (avec un c), et ses jouets appartiennent à Léo (avec un s).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Soustraire 30 à un nombre",
      xpReward: 24,
      story: {
        hook: "Soustraire 30, c'est enlever 3 dizaines d'un coup.",
        concreteExample: "58 - 30 : tu enlèves 3 dizaines à 58.",
        reveal: "58 - 30 = 28, car on enlève seulement aux dizaines : 5 dizaines - 3 dizaines = 2 dizaines. Les unités ne changent pas.",
        bridgeToConcept: "Pour soustraire 30, on enlève 3 dizaines et les unités ne changent pas.",
        illustrationEmoji: "➖"
      },
      examples: [
        {
          title: "Soustraire 30",
          steps: [
            { text: "47 - 30 : 4 dizaines - 3 dizaines = 1 dizaine.", illustrationEmoji: "➖" },
            { text: "Donc 47 - 30 = 17.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "82 - 30 : 8 dizaines - 3 dizaines = 5 dizaines.", illustrationEmoji: "➖" },
            { text: "Donc 82 - 30 = 52.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 65 - 30", answer: "35", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "6 dizaines - 3 dizaines = 3 dizaines. Donc 65 - 30 = 35." },
        { order: 2, prompt: "Calcule : 49 - 30", answer: "19", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "4 dizaines - 3 dizaines = 1 dizaine. Donc 49 - 30 = 19." },
        {
          order: 3,
          type: "mcq",
          prompt: "Quand on soustrait 30, que se passe-t-il ?",
          options: ["On enlève 3 dizaines", "On enlève 3 unités", "On enlève 30 unités et 3 dizaines"],
          answer: "On enlève 3 dizaines",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Soustraire 30, c'est enlever 3 dizaines. Les unités ne changent pas."
        },
        { order: 4, prompt: "Calcule : 96 - 30", answer: "66", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "9 dizaines - 3 dizaines = 6 dizaines. Donc 96 - 30 = 66." },
        {
          order: 5,
          type: "mcq",
          prompt: "Calcule : 73 - 30",
          options: ["43", "53", "33"],
          answer: "43",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "7 dizaines - 3 dizaines = 4 dizaines. Donc 73 - 30 = 43."
        },
        { order: 6, prompt: "Défi : calcule 90 - 30, puis enlève encore 30 au résultat.", answer: "30", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "90 - 30 = 60, puis 60 - 30 = 30." }
      ]
    }
  ]
};
