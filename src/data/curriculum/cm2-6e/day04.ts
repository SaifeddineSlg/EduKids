import { DayCurriculum } from "@/models/types";

export const day04: DayCurriculum = {
  dayNumber: 4,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "La proportionnalité simple",
      xpReward: 20,
      story: {
        hook: "Imagine que tu achètes des crayons et que le prix augmente toujours de la même façon.",
        concreteExample: "1 crayon coûte 2 €. Combien coûtent 4 crayons ?",
        reveal: "4 crayons coûtent 4 fois plus cher : 4 x 2 = 8 €. Quand deux quantités augmentent toujours dans la même proportion, on dit qu'elles sont proportionnelles.",
        bridgeToConcept: "Dans une situation de proportionnalité, si une quantité est multipliée par un nombre, l'autre l'est aussi.",
        illustrationEmoji: "✏️"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "1 gâteau coûte 3 €. Pour 5 gâteaux : 5 x 3 = 15 €.", illustrationEmoji: "🎂" },
            { text: "Si 2 stylos coûtent 4 €, alors 1 stylo coûte 2 € (on divise par 2).", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "3 kg de pommes coûtent 6 €, donc 1 kg coûte 2 € (6 divisé par 3).", illustrationEmoji: "🔍" },
            { text: "Pour 5 kg, ça coûte 5 x 2 = 10 €.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "1 crayon coûte 2 €. Combien coûtent 4 crayons ?", answer: "8", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "4 crayons coûtent 4 x 2 = 8 €." },
        { order: 2, prompt: "1 gâteau coûte 3 €. Combien coûtent 5 gâteaux ?", answer: "15", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "5 gâteaux coûtent 5 x 3 = 15 €." },
        { order: 3, prompt: "2 stylos coûtent 4 €. Combien coûte 1 stylo ?", answer: "2", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "1 stylo coûte 4 divisé par 2 = 2 €." },
        { order: 4, prompt: "3 kg de pommes coûtent 6 €. Combien coûtent 5 kg ?", answer: "10", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "1 kg coûte 2 €, donc 5 kg coûtent 5 x 2 = 10 €." },
        { order: 5, prompt: "4 tickets de bus coûtent 8 €. Combien coûte 1 ticket ?", answer: "2", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "1 ticket coûte 8 divisé par 4 = 2 €." },
        { order: 6, prompt: "Défi : 3 places de cinéma coûtent 21 €. Combien coûtent 5 places ?", answer: "35", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "1 place coûte 21 divisé par 3 = 7 €, donc 5 places coûtent 5 x 7 = 35 €." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "L'impératif présent",
      xpReward: 20,
      story: {
        hook: "Imagine que tu donnes un ordre ou un conseil à quelqu'un, sans dire je, tu ou il devant le verbe.",
        concreteExample: "Écoute : Range ta chambre ! Finissons nos devoirs. Prenez vos affaires.",
        reveal: "L'impératif s'utilise pour donner un ordre ou un conseil, sans pronom sujet, et seulement à trois formes : tu, nous, vous.",
        bridgeToConcept: "L'impératif présent : (tu) range, (nous) rangeons, (vous) rangez. Les verbes en -er perdent le s à la 2e personne : tu manges devient mange !",
        illustrationEmoji: "📣"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Mange tes légumes ! (tu manges devient mange, sans s).", illustrationEmoji: "🥦" },
            { text: "Finissons ce travail ensemble.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Pour les verbes en -er, retire le s de la 2e personne du singulier.", illustrationEmoji: "🔍" },
            { text: "Pour les autres verbes, garde la même forme qu'au présent.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Mets à l'impératif (tu) : (Manger) tes légumes !", answer: "mange", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "À l'impératif, tu manges devient mange (sans s)." },
        { order: 2, prompt: "Mets à l'impératif (vous) : (Prendre) vos affaires.", answer: "prenez", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "À l'impératif, vous prenez reste prenez." },
        { order: 3, prompt: "Mets à l'impératif (nous) : (Finir) ce travail ensemble.", answer: "finissons", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "À l'impératif, nous finissons reste finissons." },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne réponse à l'impératif (tu) : (Ranger) ta chambre !",
          options: ["Range", "Ranges", "Rangez"],
          answer: "Range",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "À l'impératif, tu ranges devient Range (sans s)."
        },
        { order: 5, prompt: "Mets à l'impératif (vous) : (Être) sages pendant le trajet.", answer: "soyez", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "À l'impératif, être devient soyez avec vous." },
        { order: 6, prompt: "Défi : complète les deux verbes à l'impératif. (Écouter, tu) bien et (avoir, vous) confiance.", answer: "écoute ayez", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Écoute (tu, sans s) et ayez (vous, verbe avoir à l'impératif)." }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Les propositions coordonnées et juxtaposées",
      xpReward: 20,
      story: {
        hook: "Imagine deux petites phrases qui décident de voyager ensemble dans une phrase plus longue.",
        concreteExample: "Regarde : Il pleut, je reste à la maison. Il pleut et je reste à la maison. Quelle différence ?",
        reveal: "La première relie les deux propositions avec une simple virgule : elles sont juxtaposées. La deuxième les relie avec le mot et : elles sont coordonnées.",
        bridgeToConcept: "Deux propositions juxtaposées sont séparées par une virgule. Deux propositions coordonnées sont reliées par un mot comme et, mais, ou, donc, car.",
        illustrationEmoji: "🔗"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Il fait beau, les enfants jouent dehors : juxtaposées (virgule).", illustrationEmoji: "☀️" },
            { text: "Il fait beau et les enfants jouent dehors : coordonnées (et).", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour reconnaître le lien",
          steps: [
            { text: "Cherche un mot de liaison (et, mais, ou, donc, car) : c'est coordonné.", illustrationEmoji: "🔍" },
            { text: "S'il n'y a qu'une virgule ou un point-virgule : c'est juxtaposé.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans il pleut, je reste à la maison, comment sont reliées les deux propositions ?", answer: "juxtaposées", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Une simple virgule relie les deux propositions : elles sont juxtaposées." },
        { order: 2, prompt: "Dans il pleut et je reste à la maison, comment sont reliées les deux propositions ?", answer: "coordonnées", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Le mot et relie les deux propositions : elles sont coordonnées." },
        { order: 3, prompt: "Dans elle est fatiguée, elle se repose, quel signe relie les deux propositions ?", answer: "la virgule", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Une virgule relie les deux propositions juxtaposées." },
        { order: 4, prompt: "Cite un mot de liaison qui permet de coordonner deux propositions.", answer: "et", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Et, mais, ou, donc, car sont des mots de liaison pour coordonner." },
        { order: 5, prompt: "Dans il a faim, mais il n'a rien à manger, comment sont reliées les deux propositions ?", answer: "coordonnées", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Le mot mais relie les deux propositions : elles sont coordonnées." },
        { order: 6, prompt: "Défi : dans le ciel est gris, il va pleuvoir, donc nous prenons un parapluie, combien y a-t-il de propositions ?", answer: "3", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Le ciel est gris / il va pleuvoir / nous prenons un parapluie : trois propositions." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Plutôt ou plus tôt",
      xpReward: 20,
      story: {
        hook: "Imagine encore deux expressions qui se ressemblent à l'oreille mais qui n'ont pas le même sens.",
        concreteExample: "Regarde : je préfère ___ le chocolat à la vanille. Est-ce que c'est plutôt ou plus tôt ?",
        reveal: "Plutôt exprime une préférence ou une nuance (comme de préférence). Plus tôt parle du temps, le contraire de plus tard.",
        bridgeToConcept: "Plutôt (en un mot) exprime une préférence. Plus tôt (en deux mots) parle du temps, contraire de plus tard.",
        illustrationEmoji: "⏰"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Je préfère plutôt le chocolat à la vanille : préférence.", illustrationEmoji: "🍫" },
            { text: "Il est arrivé plus tôt que prévu : contraire de plus tard.", illustrationEmoji: "🕐" }
          ]
        },
        {
          title: "L'astuce du test",
          steps: [
            { text: "Peux-tu remplacer par plus tard ? Alors c'est plus tôt.", illustrationEmoji: "🔍" },
            { text: "Sinon, si c'est une préférence, c'est plutôt.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je préfère ___ le chocolat. (plutôt/plus tôt)", answer: "plutôt", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "C'est une préférence, donc plutôt en un mot." },
        { order: 2, prompt: "Complète : Il est arrivé ___ que prévu. (plutôt/plus tôt)", answer: "plus tôt", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "On peut dire le contraire de plus tard, donc plus tôt." },
        { order: 3, prompt: "Complète : Demain, lève-toi ___ que d'habitude. (plutôt/plus tôt)", answer: "plus tôt", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Ça parle du temps, contraire de plus tard : plus tôt." },
        { order: 4, prompt: "Complète : Elle est ___ timide que bavarde. (plutôt/plus tôt)", answer: "plutôt", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "C'est une nuance de caractère, donc plutôt." },
        { order: 5, prompt: "Complète : Nous sommes partis ___ pour éviter les bouchons. (plutôt/plus tôt)", answer: "plus tôt", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Ça parle du temps de départ, donc plus tôt." },
        { order: 6, prompt: "Défi : complète les deux mots. Je préfère ___ (plutôt) partir ___ (plus tôt) demain matin.", answer: "plutôt plus tôt", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Plutôt (préférence) et plus tôt (temps, contraire de plus tard)." }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Les tables de multiplication de 11 et 12",
      xpReward: 20,
      story: {
        hook: "Imagine que tu comptes des œufs rangés par très grandes boîtes de 11 ou 12.",
        concreteExample: "Il y a 3 boîtes de 12 œufs. Combien d'œufs en tout ?",
        reveal: "3 fois 12, ça fait 36. Bravo, tu as trouvé le nombre total d'œufs !",
        bridgeToConcept: "La table de 11 : jusqu'à 9, on répète simplement le chiffre (11x2=22). La table de 12 : 12x2=24, 12x3=36...",
        illustrationEmoji: "🥚"
      },
      examples: [
        {
          title: "L'astuce pour la table de 11",
          steps: [
            { text: "11 x 4 : jusqu'à 9, on répète le chiffre deux fois : 44.", illustrationEmoji: "🔍" },
            { text: "11 x 7 : on répète 7 deux fois : 77.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour la table de 12",
          steps: [
            { text: "12 x 3 : c'est 10 x 3 (30) plus 2 x 3 (6), total 36.", illustrationEmoji: "🔍" },
            { text: "12 x 5 : c'est 10 x 5 (50) plus 2 x 5 (10), total 60.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 11 x 4", answer: "44", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "11 x 4 = 44." },
        { order: 2, prompt: "Calcule : 11 x 7", answer: "77", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "11 x 7 = 77." },
        { order: 3, prompt: "Calcule : 12 x 3", answer: "36", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "10x3=30, 2x3=6, total 36." },
        { order: 4, prompt: "Calcule : 12 x 5", answer: "60", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "10x5=50, 2x5=10, total 60." },
        { order: 5, prompt: "Calcule : 12 x 4", answer: "48", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "10x4=40, 2x4=8, total 48." },
        { order: 6, prompt: "Défi : calcule 12 x 6", answer: "72", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "10x6=60, 2x6=12, total 72." }
      ]
    }
  ]
};
