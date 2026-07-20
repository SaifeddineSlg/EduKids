import { DayCurriculum } from "@/models/types";

export const day14: DayCurriculum = {
  dayNumber: 14,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Mesurer une longueur avec une règle",
      xpReward: 24,
      story: {
        hook: "Imagine que tu veux savoir combien mesure ton crayon.",
        concreteExample: "Tu poses ton crayon le long d'une règle graduée en centimètres. Il va jusqu'au trait du chiffre 8.",
        reveal: "Ton crayon mesure 8 centimètres. On mesure une longueur en comptant les centimètres depuis le début de la règle. Bravo, tu sais utiliser une règle !",
        bridgeToConcept: "Pour mesurer une longueur, on utilise une règle graduée en centimètres (cm).",
        illustrationEmoji: "📏"
      },
      examples: [
        {
          title: "Lire une mesure",
          steps: [
            { text: "Un crayon qui va jusqu'au trait 5 mesure 5 centimètres.", illustrationEmoji: "📏" },
            { text: "On écrit : 5 cm.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Comparer deux longueurs",
          steps: [
            { text: "Une gomme de 3 cm est plus courte qu'un stylo de 12 cm.", illustrationEmoji: "📏" },
            { text: "3 est plus petit que 12, donc la gomme est plus courte.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Un crayon mesure 7 cm. Combien de centimètres mesure-t-il ?", answer: "7", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Le crayon mesure 7 centimètres, comme indiqué dans la phrase." },
        { order: 2, prompt: "Une règle mesure 20 cm et un livre mesure 15 cm. Lequel est le plus long ?", answer: "la règle", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "20 est plus grand que 15, donc la règle est plus longue que le livre." },
        {
          order: 3,
          type: "mcq",
          prompt: "Une gomme mesure 4 cm et un stylo mesure 14 cm. Lequel est le plus court ?",
          options: ["la gomme", "le stylo"],
          answer: "la gomme",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "4 est plus petit que 14, donc la gomme est plus courte que le stylo."
        },
        { order: 4, prompt: "Un cahier mesure 24 cm. Combien de centimètres mesure-t-il ?", answer: "24", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Le cahier mesure 24 centimètres, comme indiqué dans la phrase." },
        {
          order: 5,
          type: "mcq",
          prompt: "Quel objet est le plus long : un trombone de 3 cm ou un crayon de 18 cm ?",
          options: ["le trombone", "le crayon"],
          answer: "le crayon",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "18 est plus grand que 3, donc le crayon est plus long que le trombone."
        },
        { order: 6, prompt: "Défi : ta table mesure 90 cm et ta chaise mesure 45 cm. Laquelle est la plus longue ?", answer: "la table", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "90 est plus grand que 45, donc la table est plus longue que la chaise." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le verbe pouvoir au présent",
      xpReward: 24,
      story: {
        hook: "Il existe un petit mot magique qui sert à dire ce que l'on est capable de faire.",
        concreteExample: "Écoute : je peux sauter. Tu peux courir. Il peut nager.",
        reveal: "Ce mot magique, c'est le verbe pouvoir. À quoi sert-il ? Il sert à dire ce que l'on est capable de faire ou ce qui est permis. Comment le reconnaître ? Il change selon la personne : peux, peux, peut...",
        bridgeToConcept: "Au présent : je peux, tu peux, il peut, elle peut.",
        illustrationEmoji: "💪"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Je peux sauter très haut.", illustrationEmoji: "🤸" },
            { text: "Tu peux courir très vite.", illustrationEmoji: "🏃" },
            { text: "Il peut nager dans la piscine.", illustrationEmoji: "🏊" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Avec je et tu, on écrit peux (avec un x).", illustrationEmoji: "🎵" },
            { text: "Avec il ou elle, on écrit peut (avec un t).", illustrationEmoji: "🎵" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je ____ sauter très haut.", answer: "peux", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec je, le verbe pouvoir devient peux : je peux sauter très haut. Essaie de le lire à voix haute.", strictAccents: true },
        { order: 2, prompt: "Complète : Tu ____ courir vite.", answer: "peux", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Avec tu, comme avec je, le verbe pouvoir devient peux.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Il ____ nager dans la piscine.",
          options: ["peux", "peut", "pouvons"],
          answer: "peut",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec il ou elle, le verbe pouvoir devient peut (avec un t) : il peut nager.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Elle ____ lire un livre toute seule.", answer: "peut", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Avec elle, comme avec il, le verbe pouvoir devient peut.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Je ____ t'aider si tu veux.",
          options: ["peux", "peut", "pouvez"],
          answer: "peux",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec je, on écrit toujours peux (avec un x à la fin).",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Tu ____ chanter et elle ____ danser.", answer: "peux peut", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Tu peux (avec tu, on écrit peux) et elle peut (avec elle, on écrit peut). Relis la phrase entière à voix haute.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "La phrase négative : ne...pas",
      xpReward: 24,
      story: {
        hook: "Imagine que tu veux dire le contraire de ce que fait quelqu'un.",
        concreteExample: "Regarde : il aime les épinards. Pour dire le contraire : il n'aime pas les épinards.",
        reveal: "À quoi servent ne et pas ? Ensemble, ils servent à dire non, à nier une action. Comment les reconnaître ? Ils encadrent toujours le verbe : ne (ou n') avant, pas après.",
        bridgeToConcept: "Pour dire le contraire d'une phrase, on encadre le verbe avec ne...pas.",
        illustrationEmoji: "🚫"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Il joue. -> Il ne joue pas.", illustrationEmoji: "🚫" },
            { text: "Elle mange. -> Elle ne mange pas.", illustrationEmoji: "🚫" }
          ]
        },
        {
          title: "Attention devant une voyelle",
          steps: [
            { text: "Il aime. -> Il n'aime pas (ne devient n' devant une voyelle).", illustrationEmoji: "🔍" },
            { text: "Devant a, e, i, o, u, ne devient toujours n'.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Pour dire le contraire de il court, on écrit : il ____ court pas.", answer: "ne", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On encadre le verbe avec ne et pas : il ne court pas." },
        { order: 2, prompt: "Pour dire le contraire de elle chante, on écrit : elle ne chante ____.", answer: "pas", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "On encadre le verbe avec ne et pas : elle ne chante pas." },
        {
          order: 3,
          type: "mcq",
          prompt: "Devant une voyelle, comme dans il aime, ne devient...",
          options: ["ne", "n'", "non"],
          answer: "n'",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Devant une voyelle, ne devient n' : il n'aime pas."
        },
        { order: 4, prompt: "Complète : Il ____ aime pas les épinards. (devant une voyelle, ne devient...)", answer: "n'", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Devant une voyelle, ne devient n' : il n'aime pas les épinards." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne phrase négative pour Tu joues dehors.",
          options: ["Tu ne joues pas dehors.", "Tu joues ne pas dehors.", "Tu ne pas joues dehors."],
          answer: "Tu ne joues pas dehors.",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "On encadre le verbe : ne se place juste avant, pas juste après : Tu ne joues pas dehors."
        },
        { order: 6, prompt: "Défi : complète les deux mots. Elle ____ écoute ____ la musique. (devant une voyelle)", answer: "n' pas", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Devant une voyelle, ne devient n' : elle n'écoute pas la musique." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "L'homophone et et est",
      xpReward: 24,
      story: {
        hook: "Imagine encore deux petits mots qui se prononcent pareil, mais qui ne s'écrivent pas pareil et ne veulent pas dire la même chose.",
        concreteExample: "Regarde : le chat et le chien jouent. Le chat est gentil. Le premier et relie deux mots, le second est vient du verbe être.",
        reveal: "À quoi ça sert de les différencier ? À bien écrire chaque mot selon son sens. Comment le reconnaître ? Si tu peux remplacer le mot par était, c'est est (verbe être). Sinon, c'est et (petit mot qui relie).",
        bridgeToConcept: "On écrit et (pour relier deux mots, jamais était) ou est (verbe être, on peut dire était).",
        illustrationEmoji: "🔤"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Le chat est gentil. (on peut dire : le chat était gentil)", illustrationEmoji: "🐱" },
            { text: "Le chat et le chien jouent. (on ne peut pas dire : le chat était le chien jouent)", illustrationEmoji: "🐶" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Essaie de remplacer par était dans ta tête.", illustrationEmoji: "🔍" },
            { text: "Si ça fonctionne, écris est. Sinon, écris et.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Le ballon ___ rouge. (et ou est)", answer: "est", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "On peut dire le ballon était rouge, donc on écrit est.", strictAccents: true },
        { order: 2, prompt: "Complète : Le chat ___ le chien jouent ensemble. (et ou est)", answer: "et", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "On ne peut pas dire le chat était le chien, donc on écrit et.", strictAccents: true },
        { order: 3, prompt: "Complète : Ma sœur ___ contente. (et ou est)", answer: "est", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "On peut dire ma sœur était contente, donc on écrit est.", strictAccents: true },
        { order: 4, prompt: "Complète : J'aime le pain ___ le fromage. (et ou est)", answer: "et", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "On ne peut pas dire j'aime le pain était le fromage, donc on écrit et.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le bon mot : Il ___ grand.",
          options: ["et", "est"],
          answer: "est",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "On peut dire il était grand, donc on écrit est.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Le livre ___ (est) sur la table ___ (et) sur la chaise.", answer: "est et", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Est (verbe être, on peut dire était) et et (petit mot qui relie deux idées, on ne peut pas dire était).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Les compléments à 20",
      xpReward: 24,
      story: {
        hook: "Comme tu as appris les compléments à 10, découvre aujourd'hui les compléments à 20.",
        concreteExample: "Combien faut-il ajouter à 14 pour arriver à 20 ?",
        reveal: "14 plus 6, ça fait 20. Le complément de 14 pour aller à 20, c'est donc 6 ! Bravo !",
        bridgeToConcept: "Le complément à 20 d'un nombre, c'est ce qu'il faut lui ajouter pour arriver à 20.",
        illustrationEmoji: "🎯"
      },
      examples: [
        {
          title: "Trouver le complément à 20",
          steps: [
            { text: "Pour aller de 15 à 20, il faut ajouter 5.", illustrationEmoji: "🎯" },
            { text: "15 + 5 = 20.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Pour aller de 12 à 20, il faut ajouter 8.", illustrationEmoji: "🎯" },
            { text: "12 + 8 = 20.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Combien faut-il ajouter à 18 pour arriver à 20 ?", answer: "2", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "18 + 2 = 20, donc le complément de 18 est 2." },
        { order: 2, prompt: "Combien faut-il ajouter à 16 pour arriver à 20 ?", answer: "4", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "16 + 4 = 20, donc le complément de 16 est 4." },
        { order: 3, prompt: "Combien faut-il ajouter à 13 pour arriver à 20 ?", answer: "7", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "13 + 7 = 20, donc le complément de 13 est 7." },
        { order: 4, prompt: "Combien faut-il ajouter à 11 pour arriver à 20 ?", answer: "9", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "11 + 9 = 20, donc le complément de 11 est 9." },
        { order: 5, prompt: "Combien faut-il ajouter à 17 pour arriver à 20 ?", answer: "3", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "17 + 3 = 20, donc le complément de 17 est 3." },
        { order: 6, prompt: "Défi : combien faut-il ajouter à 9 pour arriver à 20 ?", answer: "11", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "9 + 11 = 20, donc le complément de 9 est 11." }
      ]
    }
  ]
};
