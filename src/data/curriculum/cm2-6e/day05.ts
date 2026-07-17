import { DayCurriculum } from "@/models/types";

export const day05: DayCurriculum = {
  dayNumber: 5,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Révision : division euclidienne, décimaux, proportionnalité",
      xpReward: 22,
      story: {
        hook: "Cette semaine, tu as beaucoup progressé en mathématiques. Faisons le tour ensemble !",
        concreteExample: "Tu sais maintenant calculer un quotient et un reste, manipuler des nombres décimaux et résoudre des problèmes de proportionnalité.",
        reveal: "Ces compétences te préparent bien pour le collège.",
        bridgeToConcept: "Révisons : division euclidienne, décimaux, proportionnalité, multiplier/diviser par 10-100-1000.",
        illustrationEmoji: "🎓"
      },
      examples: [
        {
          title: "Rappel division et décimaux",
          steps: [
            { text: "29 divisé par 5 : quotient 5, reste 4.", illustrationEmoji: "📦" },
            { text: "2,50 + 1,30 = 3,80.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Rappel proportionnalité",
          steps: [
            { text: "1 crayon coûte 2 €, donc 4 crayons coûtent 8 €.", illustrationEmoji: "✏️" },
            { text: "35 x 100 = 3500.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule le quotient et le reste de 29 divisé par 5 (réponds : quotient reste)", answer: "5 4", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "5 x 5 = 25, il reste 4. Quotient 5, reste 4." },
        { order: 2, prompt: "Calcule : 3,25 + 1,50", answer: "4,75", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "3,25 + 1,50 = 4,75." },
        { order: 3, prompt: "1 gâteau coûte 3 €. Combien coûtent 5 gâteaux ?", answer: "15", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "5 gâteaux coûtent 5 x 3 = 15 €." },
        { order: 4, prompt: "Calcule : 12 x 100", answer: "1200", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Multiplier par 100 ajoute deux zéros : 1200." },
        { order: 5, prompt: "Calcule : 12 x 4", answer: "48", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "10x4=40, 2x4=8, total 48." },
        { order: 6, prompt: "Défi : 3 kg de pommes coûtent 6 €. Combien coûtent 7 kg ?", answer: "14", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "1 kg coûte 2 €, donc 7 kg coûtent 7 x 2 = 14 €." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Révision : présent 3e groupe, plus-que-parfait, futur, impératif",
      xpReward: 22,
      story: {
        hook: "Tu as exploré cette semaine plusieurs temps et un mode nouveau. Résumons !",
        concreteExample: "Présent : je prends, je dis. Plus-que-parfait : j'avais mangé. Futur : je viendrai. Impératif : range ta chambre !",
        reveal: "Chaque temps ou mode a son rôle précis dans le récit ou la vie de tous les jours.",
        bridgeToConcept: "Révisons : présent des verbes du 3e groupe, plus-que-parfait, futur irrégulier, impératif présent.",
        illustrationEmoji: "🕰️"
      },
      examples: [
        {
          title: "Rappel présent et plus-que-parfait",
          steps: [
            { text: "Je prends, tu dis, il voit.", illustrationEmoji: "🎯" },
            { text: "J'avais déjà mangé quand il est arrivé.", illustrationEmoji: "⏮️" }
          ]
        },
        {
          title: "Rappel futur et impératif",
          steps: [
            { text: "Je viendrai, tu verras.", illustrationEmoji: "🔮" },
            { text: "Range ta chambre ! Finissons ensemble.", illustrationEmoji: "📣" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je ____ (prendre) mon cartable.", answer: "prends", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec je, prendre au présent devient prends." },
        { order: 2, prompt: "Complète : Quand je suis arrivé, il ____ (avoir) déjà mangé.", answer: "avait", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Avec il, avoir à l'imparfait est avait : il avait mangé." },
        { order: 3, prompt: "Complète : Demain, je ____ (venir) te voir.", answer: "viendrai", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec je, le futur de venir est viendrai." },
        { order: 4, prompt: "Mets à l'impératif (tu) : (Manger) tes légumes !", answer: "mange", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "À l'impératif, tu manges devient mange (sans s)." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Vous ____ (dire) la même chose.",
          options: ["dites", "disez", "dis"],
          answer: "dites",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Avec vous, dire au présent devient dites."
        },
        { order: 6, prompt: "Défi : complète les deux verbes. Ils ____ (voir) leurs amis et ils ____ (avoir) déjà préparé un cadeau.", answer: "verront avaient", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Ils verront (futur de voir) et ils avaient préparé (plus-que-parfait de avoir)." }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Révision : groupe nominal, types et formes de phrases, propositions",
      xpReward: 22,
      story: {
        hook: "Cette semaine, tu as analysé la phrase sous toutes ses coutures. Récapitulons !",
        concreteExample: "Groupe nominal, types de phrases, formes de phrases, propositions coordonnées et juxtaposées.",
        reveal: "Toute cette grammaire t'aide à bien comprendre et à bien construire tes phrases.",
        bridgeToConcept: "Révisons : le groupe nominal, les types et formes de phrases, les propositions.",
        illustrationEmoji: "🧩"
      },
      examples: [
        {
          title: "Rappel groupe nominal et types de phrases",
          steps: [
            { text: "Le grand chat noir dort : groupe nominal autour de chat.", illustrationEmoji: "🐱" },
            { text: "Quelle belle journée ! : phrase exclamative.", illustrationEmoji: "😊" }
          ]
        },
        {
          title: "Rappel formes et propositions",
          steps: [
            { text: "Je ne mange pas de pomme : forme négative.", illustrationEmoji: "🍎" },
            { text: "Il pleut et je reste à la maison : propositions coordonnées.", illustrationEmoji: "🔗" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans le grand chat noir dort, quel est le groupe nominal sujet ?", answer: "le grand chat noir", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Le grand chat noir forme le groupe nominal autour du nom chat." },
        { order: 2, prompt: "Quel est le type de la phrase : Quelle belle journée !", answer: "exclamative", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Elle s'exclame avec un point d'exclamation." },
        { order: 3, prompt: "Quelle est la forme de la phrase : Je ne mange pas de pomme.", answer: "négative", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Ne...pas encadre le verbe : forme négative." },
        { order: 4, prompt: "Dans il pleut et je reste à la maison, comment sont reliées les deux propositions ?", answer: "coordonnées", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Le mot et relie les deux propositions : coordonnées." },
        { order: 5, prompt: "Dans une jolie petite fleur pousse, quel est le nom central du groupe nominal ?", answer: "fleur", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Fleur est le nom central du groupe nominal." },
        { order: 6, prompt: "Défi : donne le type puis la forme de cette phrase. Ne pars pas maintenant !", answer: "exclamative négative", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Le point d'exclamation donne le type exclamative, ne...pas donne la forme négative." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Révision : se/ce, sa/ça, peu/peux/peut, plutôt/plus tôt",
      xpReward: 22,
      story: {
        hook: "Cette semaine, tu as croisé encore beaucoup de mots jumeaux. Récapitulons les tests appris !",
        concreteExample: "Se/ce, sa/ça, peu/peux/peut, plutôt/plus tôt.",
        reveal: "Chaque paire a son test précis : nom pour ce, verbe pronominal pour se, cela pour ça, pouvoir pour peux/peut, préférence pour plutôt.",
        bridgeToConcept: "Utilise toujours le test appris pour choisir la bonne orthographe.",
        illustrationEmoji: "🧠"
      },
      examples: [
        {
          title: "Rappel des tests",
          steps: [
            { text: "Ce chien aboie (nom) ; il se lave (verbe pronominal).", illustrationEmoji: "🐕" },
            { text: "Il peut venir (pouvoir, il) ; je préfère plutôt le chocolat (préférence).", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Rappel sa/ça et peu",
          steps: [
            { text: "Il aime sa maison (on peut dire ta maison).", illustrationEmoji: "🏠" },
            { text: "Il reste peu de gâteau (pas beaucoup).", illustrationEmoji: "🍰" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : ___ chien aboie fort. (se/ce)", answer: "ce", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Ce accompagne le nom chien." },
        { order: 2, prompt: "Complète : Il aime beaucoup ___ maison. (sa/ça)", answer: "sa", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "On peut dire ta maison, donc c'est sa." },
        { order: 3, prompt: "Complète : Il ___ venir demain. (peu/peux/peut)", answer: "peut", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec il, pouvoir donne peut." },
        { order: 4, prompt: "Complète : Je préfère ___ le chocolat. (plutôt/plus tôt)", answer: "plutôt", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "C'est une préférence, donc plutôt en un mot." },
        { order: 5, prompt: "Complète : Il est arrivé ___ que prévu. (plutôt/plus tôt)", answer: "plus tôt", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "On peut dire le contraire de plus tard, donc plus tôt." },
        { order: 6, prompt: "Défi : complète les trois mots. ___ (ce) chat ___ (se) cache un ___ (peu) partout.", answer: "ce se peu", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Ce chat (nom), se cache (verbe pronominal), un peu (quantité)." }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Révision : multiplier/diviser par 10-100-1000, tables de 11 et 12",
      xpReward: 22,
      story: {
        hook: "Cette semaine, tu as musclé ton cerveau avec de grandes tables et des zéros magiques. Faisons le point !",
        concreteExample: "35 x 100 = 3500, 12 x 5 = 60. Tu deviens un champion du calcul mental !",
        reveal: "Ces automatismes te seront très utiles au collège.",
        bridgeToConcept: "Révisons ensemble : multiplier/diviser par 10-100-1000, tables de 11 et 12.",
        illustrationEmoji: "⚡"
      },
      examples: [
        {
          title: "Rappel multiplier/diviser",
          steps: [
            { text: "24 x 10 = 240. 4800 divisé par 100 = 48.", illustrationEmoji: "🔢" },
            { text: "700 divisé par 10 = 70.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Rappel tables de 11 et 12",
          steps: [
            { text: "11 x 7 = 77 (on répète le chiffre).", illustrationEmoji: "🔍" },
            { text: "12 x 5 = 60 (10x5 + 2x5).", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 35 x 100", answer: "3500", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Multiplier par 100 ajoute deux zéros : 3500." },
        { order: 2, prompt: "Calcule : 4800 divisé par 100", answer: "48", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Diviser par 100 retire deux zéros : 48." },
        { order: 3, prompt: "Calcule : 11 x 7", answer: "77", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "11 x 7 = 77." },
        { order: 4, prompt: "Calcule : 12 x 5", answer: "60", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "10x5=50, 2x5=10, total 60." },
        { order: 5, prompt: "Calcule : 12 x 6", answer: "72", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "10x6=60, 2x6=12, total 72." },
        { order: 6, prompt: "Défi : calcule 12 x 3, puis multiplie le résultat par 10. Quel est le résultat final ?", answer: "360", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "12 x 3 = 36, puis 36 x 10 = 360." }
      ]
    }
  ]
};
