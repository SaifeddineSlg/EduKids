import { DayCurriculum } from "@/models/types";

export const day11: DayCurriculum = {
  dayNumber: 11,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Additionner des fractions de même dénominateur",
      xpReward: 24,
      story: {
        hook: "Imagine que tu manges deux parts d'une pizza coupée en huit, puis encore trois parts de la même pizza.",
        concreteExample: "2/8 + 3/8, combien cela fait-il en tout ?",
        reveal: "Comme le dénominateur est le même (8), on additionne seulement les numérateurs : 2 + 3 = 5. Le résultat est donc 5/8. Bravo, tu as additionné deux fractions !",
        bridgeToConcept: "Pour additionner des fractions de même dénominateur, on garde ce dénominateur et on additionne simplement les numérateurs.",
        illustrationEmoji: "🍕"
      },
      examples: [
        {
          title: "Exemple 1 : 1/5 + 2/5",
          steps: [
            { text: "Les dénominateurs sont identiques (5), on additionne les numérateurs : 1 + 2 = 3.", illustrationEmoji: "➕" },
            { text: "Le résultat est 3/5.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : 3/6 + 2/6",
          steps: [
            { text: "Les dénominateurs sont identiques (6), on additionne les numérateurs : 3 + 2 = 5.", illustrationEmoji: "➕" },
            { text: "Le résultat est 5/6.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 1/4 + 2/4", answer: "3/4", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Les dénominateurs sont identiques, donc on additionne les numérateurs : 1 + 2 = 3, ce qui donne 3/4." },
        { order: 2, prompt: "Calcule : 2/7 + 3/7", answer: "5/7", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Les dénominateurs sont identiques, donc on additionne les numérateurs : 2 + 3 = 5, ce qui donne 5/7." },
        { order: 3, prompt: "Calcule : 4/9 + 3/9", answer: "7/9", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Les dénominateurs sont identiques, donc on additionne les numérateurs : 4 + 3 = 7, ce qui donne 7/9." },
        { order: 4, prompt: "Calcule : 3/10 + 6/10", answer: "9/10", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Les dénominateurs sont identiques, donc on additionne les numérateurs : 3 + 6 = 9, ce qui donne 9/10." },
        { order: 5, prompt: "Calcule : 5/8 + 2/8", answer: "7/8", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Les dénominateurs sont identiques, donc on additionne les numérateurs : 5 + 2 = 7, ce qui donne 7/8." },
        { order: 6, prompt: "Défi : calcule 3/8 + 3/8, puis simplifie le résultat en divisant le haut et le bas par 2.", answer: "3/4", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "3/8 + 3/8 = 6/8, car 3 + 3 = 6. Ensuite, 6/8 se simplifie en 3/4, en divisant le haut et le bas par 2." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le présent des verbes irréguliers dire, venir et prendre",
      xpReward: 24,
      story: {
        hook: "Certains verbes du troisième groupe ne suivent pas les règles habituelles, comme dire, venir et prendre.",
        concreteExample: "Écoute : je dis, tu dis, il dit / je viens, tu viens, il vient / je prends, tu prends, il prend.",
        reveal: "Ces verbes ont des terminaisons particulières à apprendre par cœur. Bravo, tu as observé leurs conjugaisons irrégulières !",
        bridgeToConcept: "Au présent, dire, venir et prendre ont des formes irrégulières qu'il faut mémoriser : je dis, je viens, je prends, mais il dit, il vient, il prend, sans terminaison supplémentaire.",
        illustrationEmoji: "🗣️"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Je dis toujours bonjour en entrant.", illustrationEmoji: "👋" },
            { text: "Tu viens avec nous ce soir ?", illustrationEmoji: "🌙" },
            { text: "Elle prend son sac avant de partir.", illustrationEmoji: "🎒" }
          ]
        },
        {
          title: "Attention à l'erreur fréquente",
          steps: [
            { text: "Beaucoup d'élèves écrivent « il prends » avec un s, comme pour tu. C'est une erreur !", illustrationEmoji: "❌" },
            { text: "À la troisième personne du singulier, on écrit il prend, sans s final.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper, et le résumé",
          steps: [
            { text: "Astuce : pour les verbes en -re comme prendre, retire le e de l'infinitif pour trouver le radical : prendre devient prend.", illustrationEmoji: "🧠" },
            { text: "Résumé : dire, venir et prendre ont des conjugaisons irrégulières au présent, à apprendre par cœur.", illustrationEmoji: "📝" }
          ]
        }
      ],
      questions: [
        {
          order: 1,
          type: "input",
          prompt: "Complète au présent : Je ____ (dire) la vérité.",
          answer: "dis",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Avec je, le verbe dire se conjugue je dis.",
          strictAccents: true
        },
        {
          order: 2,
          type: "input",
          prompt: "Complète au présent : Tu ____ (venir) chez moi demain.",
          answer: "viens",
          kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.",
          explanationWhenWrong: "Avec tu, le verbe venir se conjugue tu viens.",
          strictAccents: true
        },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse au présent : Il ____ (prendre) son petit-déjeuner.",
          options: ["prend", "prends", "prendre"],
          answer: "prend",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Avec il, le verbe prendre se conjugue il prend, sans s final.",
          strictAccents: true
        },
        {
          order: 4,
          type: "input",
          prompt: "Complète au présent : Nous ____ (dire) au revoir.",
          answer: "disons",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Avec nous, le verbe dire se conjugue nous disons.",
          strictAccents: true
        },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse au présent : Elles ____ (venir) en retard.",
          options: ["viennent", "vient", "venons"],
          answer: "viennent",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Avec elles, le verbe venir se conjugue elles viennent.",
          strictAccents: true
        },
        {
          order: 6,
          type: "match",
          prompt: "Défi : associe chaque sujet à la bonne forme du présent.",
          answer: "Vous = prenez ; Ils = disent ; Je = viens",
          matchPairs: [
            { left: "Vous (prendre)", right: "prenez" },
            { left: "Ils (dire)", right: "disent" },
            { left: "Je (venir)", right: "viens" }
          ],
          kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.",
          explanationWhenWrong: "Vous prenez, ils disent, je viens : chaque verbe irrégulier a sa propre terminaison à apprendre par cœur.",
          strictAccents: true
        }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Les compléments circonstanciels de temps, de lieu et de manière",
      xpReward: 24,
      story: {
        hook: "Une phrase peut donner plein de précisions supplémentaires : où, quand et comment se passe l'action.",
        concreteExample: "Hier, dans le jardin, les enfants ont joué joyeusement.",
        reveal: "Hier est un complément circonstanciel de temps (quand ?), dans le jardin est un complément circonstanciel de lieu (où ?), et joyeusement est un complément circonstanciel de manière (comment ?). Bravo, tu as repéré les trois compléments circonstanciels !",
        bridgeToConcept: "Le complément circonstanciel de temps répond à quand, celui de lieu répond à où, et celui de manière répond à comment. Contrairement au COD et au COI, on peut souvent les déplacer ou les supprimer sans rendre la phrase incorrecte.",
        illustrationEmoji: "🕰️"
      },
      examples: [
        {
          title: "Exemple 1 : Le matin, les oiseaux chantent dans les arbres.",
          steps: [
            { text: "Le matin est un complément circonstanciel de temps (quand ?).", illustrationEmoji: "🌅" },
            { text: "dans les arbres est un complément circonstanciel de lieu (où ?).", illustrationEmoji: "🌳" }
          ]
        },
        {
          title: "Exemple 2 : Elle répond calmement à la question.",
          steps: [
            { text: "calmement est un complément circonstanciel de manière (comment ?).", illustrationEmoji: "😌" },
            { text: "C'est un complément circonstanciel de manière.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans le week-end, nous partons à la montagne, quel est le complément circonstanciel de temps ?", answer: "le week-end", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "le week-end répond à la question quand ? c'est le complément circonstanciel de temps." },
        { order: 2, prompt: "Dans les enfants dorment dans leur chambre, quel est le complément circonstanciel de lieu ?", answer: "dans leur chambre", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "dans leur chambre répond à la question où ? c'est le complément circonstanciel de lieu." },
        { order: 3, prompt: "Dans il parle doucement à son ami, quel est le complément circonstanciel de manière ?", answer: "doucement", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "doucement répond à la question comment ? c'est le complément circonstanciel de manière." },
        { order: 4, prompt: "Dans demain, nous irons à la piscine, quel est le complément circonstanciel de temps ?", answer: "demain", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "demain répond à la question quand ? c'est le complément circonstanciel de temps." },
        { order: 5, prompt: "Dans le chat dort tranquillement sur le canapé, quel est le complément circonstanciel de manière ?", answer: "tranquillement", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "tranquillement répond à la question comment ? c'est le complément circonstanciel de manière." },
        { order: 6, prompt: "Défi : dans ce matin, à l'école, les élèves ont travaillé sérieusement, cite dans l'ordre le complément circonstanciel de temps, celui de lieu, puis celui de manière.", answer: "ce matin ; à l'école ; sérieusement", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "ce matin répond à quand ? (temps), à l'école répond à où ? (lieu), et sérieusement répond à comment ? (manière)." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "quand, quant ou qu'en : le test du sens",
      xpReward: 24,
      story: {
        hook: "Encore trois petits mots qui se prononcent pareil mais s'écrivent différemment : quand, quant et qu'en.",
        concreteExample: "___ arrives-tu ? / ___ à moi, je reste. / Je me demande ___ il pense.",
        reveal: "quand interroge sur le temps (on peut le remplacer par à quel moment) ; quant à signifie à propos de, toujours suivi de à ; qu'en est la contraction de que et en, souvent après penser ou croire. Bravo, tu as observé le sens de chaque phrase !",
        bridgeToConcept: "quand interroge sur le temps (quand pars-tu ?) ; quant à signifie à propos de (quant à moi) ; qu'en est la contraction de que + en (qu'en penses-tu ?).",
        illustrationEmoji: "🤔"
      },
      examples: [
        {
          title: "Exemple 1 : ___ pars-tu en vacances ?",
          steps: [
            { text: "On peut remplacer par à quel moment pars-tu en vacances ? cela fonctionne.", illustrationEmoji: "🗓️" },
            { text: "Donc on écrit quand, sans t final.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : Quant à moi, je préfère rester.",
          steps: [
            { text: "quant à signifie ici à propos de moi.", illustrationEmoji: "🙋" },
            { text: "Donc on écrit quant, toujours suivi de à.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : ___ commence le film ? (quand, quant, qu'en)", answer: "quand", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On peut dire à quel moment commence le film ? donc c'est quand.", strictAccents: true },
        { order: 2, prompt: "Complète : ___ à toi, tu peux venir plus tard. (quand, quant, qu'en)", answer: "quant", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "quant à toi signifie à propos de toi, donc c'est quant, toujours suivi de à.", strictAccents: true },
        { order: 3, prompt: "Complète : Je me demande ___ il pense. (quand, quant, qu'en)", answer: "qu'en", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "qu'en est la contraction de que et en, après le verbe penser : je me demande qu'en il pense.", strictAccents: true },
        { order: 4, prompt: "Complète : ___ nous serons prêts, nous partirons. (quand, quant, qu'en)", answer: "quand", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "On peut dire au moment où nous serons prêts, donc c'est quand.", strictAccents: true },
        { order: 5, prompt: "Complète : ___ à mes parents, ils arrivent demain. (quand, quant, qu'en)", answer: "quant", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "quant à mes parents signifie à propos de mes parents, donc c'est quant.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. ___ arriveras-tu, et ___ à ton frère, viendra-t-il aussi ?", answer: "quand quant", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "quand arriveras-tu (à quel moment) ; quant à ton frère (à propos de ton frère).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Diviser par 10, 100 et 1000 en un éclair",
      xpReward: 24,
      story: {
        hook: "Tu sais déjà multiplier par 10, 100 et 1 000 en un éclair ; aujourd'hui, on fait l'inverse : diviser.",
        concreteExample: "480 divisé par 10, cela donne quoi ?",
        reveal: "Diviser par 10, c'est enlever un zéro : 480 / 10 = 48. Bravo, tu as divisé par 10 en un éclair !",
        bridgeToConcept: "Diviser par 10, c'est enlever un zéro. Diviser par 100, on enlève deux zéros. Diviser par 1 000, on enlève trois zéros.",
        illustrationEmoji: "➗"
      },
      examples: [
        {
          title: "Exemple 1 : 3 600 / 100",
          steps: [
            { text: "On enlève deux zéros à 3 600.", illustrationEmoji: "➗" },
            { text: "3 600 / 100 = 36.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : 5 000 / 1 000",
          steps: [
            { text: "On enlève trois zéros à 5 000.", illustrationEmoji: "➗" },
            { text: "5 000 / 1 000 = 5.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 90 / 10", answer: "9", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On enlève un zéro à 90 : 9." },
        { order: 2, prompt: "Calcule : 2 400 / 100", answer: "24", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "On enlève deux zéros à 2 400 : 24." },
        { order: 3, prompt: "Calcule : 7 000 / 1 000", answer: "7", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On enlève trois zéros à 7 000 : 7." },
        { order: 4, prompt: "Calcule : 650 / 10", answer: "65", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "On enlève un zéro à 650 : 65." },
        { order: 5, prompt: "Calcule : 8 100 / 100", answer: "81", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "On enlève deux zéros à 8 100 : 81." },
        { order: 6, prompt: "Défi : calcule 45 000 / 1 000, puis divise le résultat par 10.", answer: "4.5", acceptedAnswers: ["4,5"], kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "45 000 / 1 000 = 45. Ensuite, 45 / 10 = 4,5." }
      ]
    }
  ]
};
