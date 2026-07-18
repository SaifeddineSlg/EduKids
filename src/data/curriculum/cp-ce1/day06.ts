import { DayCurriculum } from "@/models/types";

export const day06: DayCurriculum = {
  dayNumber: 6,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Les nombres jusqu'à 69 : dizaines et unités",
      xpReward: 24,
      story: {
        hook: "Imagine que tu ranges des bâtonnets par paquets de dix.",
        concreteExample: "Tu as 4 paquets de dix bâtonnets, et 5 bâtonnets tout seuls. Combien de bâtonnets as-tu en tout ?",
        reveal: "4 paquets de dix, ça fait 40. Avec les 5 bâtonnets tout seuls, ça fait 45. Le nombre 45, c'est 4 dizaines et 5 unités !",
        bridgeToConcept: "Un nombre comme 45 est formé de dizaines (les paquets de dix) et d'unités (ce qui reste tout seul).",
        illustrationEmoji: "🔟"
      },
      examples: [
        {
          title: "Décomposer un nombre",
          steps: [
            { text: "36, c'est 3 dizaines et 6 unités.", illustrationEmoji: "📦" },
            { text: "3 dizaines, ça fait 30. Avec 6 unités, ça fait bien 36.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Compter les dizaines",
          steps: [
            { text: "52, c'est 5 dizaines et 2 unités.", illustrationEmoji: "📦" },
            { text: "5 dizaines font 50, plus 2 unités, ça fait 52.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Combien de dizaines y a-t-il dans 45 ?", answer: "4", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "45, c'est 4 dizaines et 5 unités. Le chiffre des dizaines est 4." },
        { order: 2, prompt: "Combien d'unités y a-t-il dans 45 ?", answer: "5", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "45, c'est 4 dizaines et 5 unités. Le chiffre des unités est 5." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis le nombre qui correspond à 3 dizaines et 2 unités.",
          options: ["23", "32", "30"],
          answer: "32",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "3 dizaines font 30, plus 2 unités, ça fait 32."
        },
        { order: 4, prompt: "Combien de dizaines y a-t-il dans 67 ?", answer: "6", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "67, c'est 6 dizaines et 7 unités. Le chiffre des dizaines est 6." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le nombre qui correspond à 5 dizaines et 8 unités.",
          options: ["58", "85", "50"],
          answer: "58",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "5 dizaines font 50, plus 8 unités, ça fait 58."
        },
        { order: 6, prompt: "Défi : quel nombre a 6 dizaines et 9 unités ?", answer: "69", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "6 dizaines font 60, plus 9 unités, ça fait 69." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Les verbes en -er : nous et vous",
      xpReward: 24,
      story: {
        hook: "Imagine que toute ta famille joue ensemble dans le jardin.",
        concreteExample: "Écoute : nous jouons, vous jouez. Tu entends comme ça se ressemble un peu ?",
        reveal: "À quoi servent nous et vous ? Nous, c'est toi avec d'autres personnes. Vous, c'est plusieurs personnes à qui l'on parle. Avec nous, un verbe en -er se termine par -ons. Avec vous, il se termine par -ez.",
        bridgeToConcept: "Au présent : nous jouons, vous jouez.",
        illustrationEmoji: "👨‍👩‍👧‍👦"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Nous chantons une chanson.", illustrationEmoji: "🎤" },
            { text: "Vous dansez très bien.", illustrationEmoji: "💃" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Avec nous, on entend et on écrit toujours -ons : nous jouons.", illustrationEmoji: "🎵" },
            { text: "Avec vous, on entend et on écrit toujours -ez : vous jouez.", illustrationEmoji: "🎵" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Nous ____ (jouer) dans le jardin.", answer: "jouons", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec nous, un verbe en -er se termine par -ons : nous jouons. Essaie de le lire à voix haute.", strictAccents: true },
        { order: 2, prompt: "Complète : Vous ____ (chanter) une belle chanson.", answer: "chantez", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Avec vous, un verbe en -er se termine par -ez : vous chantez. Tu étais proche !", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Nous ____ (danser) ensemble.",
          options: ["dansons", "dansez", "danse"],
          answer: "dansons",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec nous, un verbe en -er se termine par -ons : nous dansons.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Vous ____ (regarder) un dessin animé.", answer: "regardez", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Avec vous, un verbe en -er se termine par -ez : vous regardez.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Nous ____ (manger) une pomme.",
          options: ["mangeons", "mangez", "mange"],
          answer: "mangeons",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec nous, manger s'écrit mangeons (avec un e devant ons, pour garder le son doux du g) : nous mangeons.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Nous ____ (jouer) pendant que vous ____ (chanter).", answer: "jouons chantez", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Nous jouons (avec nous, on écrit -ons) et vous chantez (avec vous, on écrit -ez). Relis la phrase entière à voix haute.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Reconnaître un adjectif",
      xpReward: 24,
      story: {
        hook: "Imagine que tu décris ton animal préféré à un ami qui ne l'a jamais vu.",
        concreteExample: "Regarde : un grand chien, une jolie fleur. Grand et jolie, que disent-ils ?",
        reveal: "Grand dit comment est le chien, jolie dit comment est la fleur. À quoi servent ces mots ? Ils servent à décrire un nom. Comment les reconnaître ? On peut les enlever et la phrase reste correcte : un chien, une fleur.",
        bridgeToConcept: "Un mot qui décrit un nom s'appelle un adjectif.",
        illustrationEmoji: "🎨"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Un petit chat : petit décrit chat, c'est un adjectif.", illustrationEmoji: "🐱" },
            { text: "Une grande maison : grande décrit maison, c'est un adjectif.", illustrationEmoji: "🏠" }
          ]
        },
        {
          title: "L'astuce pour reconnaître un adjectif",
          steps: [
            { text: "Essaie d'enlever le mot : si la phrase reste correcte, c'est un adjectif.", illustrationEmoji: "🔍" },
            { text: "Un beau ballon -> un ballon : ça fonctionne, beau est un adjectif.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans la phrase un petit chien court, quel est l'adjectif ?", answer: "petit", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Petit décrit le chien, c'est l'adjectif." },
        { order: 2, prompt: "Dans la phrase une jolie fleur pousse, quel est l'adjectif ?", answer: "jolie", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Jolie décrit la fleur, c'est l'adjectif." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis l'adjectif parmi ces mots : ballon, rouge, joue",
          options: ["ballon", "rouge", "joue"],
          answer: "rouge",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Rouge décrit un nom, c'est l'adjectif."
        },
        { order: 4, prompt: "Dans la phrase mon grand frère lit, quel est l'adjectif ?", answer: "grand", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Grand décrit le frère, c'est l'adjectif." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis l'adjectif parmi ces mots : chante, petit, école",
          options: ["chante", "petit", "école"],
          answer: "petit",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Petit décrit un nom, c'est l'adjectif."
        },
        { order: 6, prompt: "Défi : dans la phrase un joli oiseau bleu chante, cite les deux adjectifs.", answer: "joli bleu", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Joli et bleu décrivent tous les deux l'oiseau : ce sont les deux adjectifs." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Le son [s] : s, ss, c",
      xpReward: 24,
      story: {
        hook: "Imagine un son qui se cache derrière plusieurs déguisements différents, comme hier avec le son [k].",
        concreteExample: "Écoute : soleil, tasse, cerise. Tu entends le même son [s], mais il ne s'écrit pas pareil !",
        reveal: "À quoi ça sert de connaître ces déguisements ? À bien écrire le son [s]. Comment le reconnaître ? Au début d'un mot, on écrit souvent s. Entre deux voyelles, on écrit ss pour garder le son [s]. Devant e et i, on écrit souvent c.",
        bridgeToConcept: "Le son [s] peut s'écrire s (soleil), ss (tasse) ou c (cerise).",
        illustrationEmoji: "🔤"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Un soleil, une salade : le son [s] s'écrit s en début de mot.", illustrationEmoji: "☀️" },
            { text: "Une tasse, une trousse : entre deux voyelles, on écrit ss pour garder le son [s].", illustrationEmoji: "🥤" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Entre deux voyelles, un seul s se prononce souvent [z], comme dans rose.", illustrationEmoji: "🌹" },
            { text: "Devant e et i, le son [s] s'écrit souvent c, comme dans cerise ou glace.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : le ___oleil (soleil). (s ou ss)", answer: "s", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Au début d'un mot, le son [s] s'écrit s : soleil. Essaie de le réécrire lentement.", strictAccents: true },
        { order: 2, prompt: "Complète : une ta___e (tasse). (s ou ss)", answer: "ss", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Entre deux voyelles, pour garder le son [s], on écrit ss : tasse. Tu étais proche !", strictAccents: true },
        { order: 3, prompt: "Complète : une ___erise (cerise). (c ou s)", answer: "c", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Devant la lettre e, le son [s] s'écrit souvent c : cerise. Relis-le à voix haute.", strictAccents: true },
        { order: 4, prompt: "Complète : la gla___e (glace). (c ou ss)", answer: "c", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Devant la lettre e, le son [s] s'écrit souvent c : glace. Pense à la règle du c devant e.", strictAccents: true },
        { order: 5, type: "mcq", prompt: "Choisis la bonne écriture : une bro____ (brosse).", options: ["s", "ss", "c"], answer: "ss", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Entre deux voyelles, pour garder le son [s], on écrit ss : brosse.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. Le ___oleil (soleil) brille sur la ta___e (tasse).", answer: "s ss", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Soleil s'écrit avec un s (début de mot) et tasse s'écrit avec ss (entre deux voyelles, pour garder le son [s]).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Ajouter 10 à un nombre",
      xpReward: 24,
      story: {
        hook: "Imagine que tu as déjà des paquets de dix billes, et qu'on t'en donne un paquet de plus.",
        concreteExample: "Tu as 23 billes. On t'ajoute un paquet de 10. Combien en as-tu maintenant ?",
        reveal: "23 + 10 : le chiffre des unités ne change pas, seul le chiffre des dizaines avance de 1. 23 devient 33. Bravo !",
        bridgeToConcept: "Ajouter 10, c'est ajouter 1 dizaine : seul le chiffre des dizaines change.",
        illustrationEmoji: "🔟"
      },
      examples: [
        {
          title: "Ajouter 10 à un nombre",
          steps: [
            { text: "14 + 10 : le chiffre des unités (4) ne bouge pas, les dizaines passent de 1 à 2.", illustrationEmoji: "➕" },
            { text: "Donc 14 + 10 = 24.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Encore un exemple",
          steps: [
            { text: "36 + 10 : les unités restent 6, les dizaines passent de 3 à 4.", illustrationEmoji: "➕" },
            { text: "Donc 36 + 10 = 46.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 12 + 10", answer: "22", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Les unités restent 2, les dizaines passent de 1 à 2 : 12 + 10 = 22." },
        { order: 2, prompt: "Calcule : 25 + 10", answer: "35", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Les unités restent 5, les dizaines passent de 2 à 3 : 25 + 10 = 35." },
        { order: 3, prompt: "Calcule : 41 + 10", answer: "51", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Les unités restent 1, les dizaines passent de 4 à 5 : 41 + 10 = 51." },
        { order: 4, prompt: "Calcule : 58 + 10", answer: "68", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Les unités restent 8, les dizaines passent de 5 à 6 : 58 + 10 = 68." },
        { order: 5, prompt: "Calcule : 33 + 10", answer: "43", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Les unités restent 3, les dizaines passent de 3 à 4 : 33 + 10 = 43." },
        { order: 6, prompt: "Défi : calcule 27 + 10, puis ajoute encore 10.", answer: "47", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "27 + 10 = 37, puis 37 + 10 = 47." }
      ]
    }
  ]
};
