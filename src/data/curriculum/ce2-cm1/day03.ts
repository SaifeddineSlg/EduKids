import { DayCurriculum } from "@/models/types";

export const day03: DayCurriculum = {
  dayNumber: 3,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Les fractions simples",
      xpReward: 24,
      story: {
        hook: "Imagine une pizza partagée entre amis, coupée en parts égales.",
        concreteExample: "La pizza est coupée en 4 parts égales. Tu manges 1 part. Quelle fraction de la pizza as-tu mangée ?",
        reveal: "Tu as mangé 1 quart, on écrit 1/4. Le nombre du bas dit en combien de parts on a coupé, le nombre du haut dit combien on en prend.",
        bridgeToConcept: "Une fraction comme 1/4 veut dire 1 part sur 4 parts égales.",
        illustrationEmoji: "🍕"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "Un gâteau coupé en 2 parts égales : chaque part est 1/2 (une moitié).", illustrationEmoji: "🎂" },
            { text: "Un gâteau coupé en 3 parts égales : chaque part est 1/3 (un tiers).", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Si tu manges 2 parts sur 4, tu as mangé 2/4 de la pizza.", illustrationEmoji: "🍕" },
            { text: "2/4, c'est la même chose que 1/2 (la moitié).", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Une pizza coupée en 2 parts égales : quelle fraction représente 1 part ?", answer: "1/2", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "1 part sur 2 parts égales s'écrit 1/2." },
        { order: 2, prompt: "Un gâteau coupé en 4 parts égales : quelle fraction représente 1 part ?", answer: "1/4", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "1 part sur 4 parts égales s'écrit 1/4." },
        { order: 3, prompt: "Une tarte coupée en 3 parts égales : quelle fraction représente 1 part ?", answer: "1/3", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "1 part sur 3 parts égales s'écrit 1/3." },
        { order: 4, prompt: "Tu manges 3 parts sur 4 d'une pizza. Quelle fraction as-tu mangée ?", answer: "3/4", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "3 parts sur 4 s'écrit 3/4." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : un gâteau coupé en 2 parts égales, chaque part s'appelle...",
          options: ["une moitié", "un tiers", "un quart"],
          answer: "une moitié",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Une part sur 2 parts égales s'appelle une moitié (1/2)."
        },
        { order: 6, prompt: "Défi : une tarte coupée en 8 parts égales. Tu en manges 5. Quelle fraction as-tu mangée ?", answer: "5/8", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "5 parts sur 8 s'écrit 5/8." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "L'imparfait des verbes en -er",
      xpReward: 24,
      story: {
        hook: "Aujourd'hui, remontons le temps pour raconter ce qui se passait avant, il y a longtemps.",
        concreteExample: "Écoute : quand j'étais petit, je jouais tous les jours dans le jardin.",
        reveal: "Je jouais, ça décrit une habitude du passé. À quoi sert l'imparfait ? À raconter ce qui se passait souvent ou durait dans le passé. Comment le reconnaître ? Les terminaisons -ais, -ais, -ait, -ions, -iez, -aient.",
        bridgeToConcept: "L'imparfait des verbes en -er : je jouais, tu jouais, il jouait, nous jouions, vous jouiez, ils jouaient.",
        illustrationEmoji: "⏳"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Autrefois, nous habitions à la montagne.", illustrationEmoji: "🏔️" },
            { text: "Chaque été, ils passaient leurs vacances à la mer.", illustrationEmoji: "🌊" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "On entend toujours le son è avant la terminaison.", illustrationEmoji: "👂" },
            { text: "je jouais, tu jouais, il jouait : au singulier, ça se prononce pareil.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Quand j'étais petit, je ____ (jouer) dans le jardin.", answer: "jouais", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec je, l'imparfait de jouer est jouais." },
        { order: 2, prompt: "Complète : Tu ____ (parler) toujours très fort.", answer: "parlais", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Avec tu, l'imparfait de parler est parlais." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Elle ____ (chanter) tous les soirs.",
          options: ["chantait", "chantais", "chantaient"],
          answer: "chantait",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Avec elle, l'imparfait de chanter est chantait."
        },
        { order: 4, prompt: "Complète : Nous ____ (habiter) à la campagne.", answer: "habitions", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Avec nous, l'imparfait de habiter est habitions." },
        { order: 5, prompt: "Complète : Vous ____ (regarder) la télévision le dimanche.", answer: "regardiez", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Avec vous, l'imparfait de regarder est regardiez." },
        { order: 6, prompt: "Défi : complète les deux verbes. Ils ____ (jouer) dehors pendant que nous ____ (préparer) le repas.", answer: "jouaient préparions", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Ils jouaient (ils) et nous préparions (nous)." }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Le complément circonstanciel",
      xpReward: 24,
      story: {
        hook: "Imagine que tu racontes une histoire et qu'on te demande : où, quand, comment ?",
        concreteExample: "Regarde : Balkis joue dans le jardin. Où joue Balkis ?",
        reveal: "Dans le jardin répond à la question où. Ce groupe de mots donne une précision sur la phrase : lieu, temps ou manière. On l'appelle le complément circonstanciel.",
        bridgeToConcept: "Le complément circonstanciel précise le lieu (où), le temps (quand) ou la manière (comment) d'une action.",
        illustrationEmoji: "🗺️"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Il pleut ce matin : ce matin répond à quand (temps).", illustrationEmoji: "🌧️" },
            { text: "Elle chante doucement : doucement répond à comment (manière).", illustrationEmoji: "🎵" }
          ]
        },
        {
          title: "L'astuce pour trouver le complément circonstanciel",
          steps: [
            { text: "Pose la question où, quand ou comment après le verbe.", illustrationEmoji: "🔍" },
            { text: "Le groupe de mots qui répond est le complément circonstanciel.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans Balkis joue dans le jardin, quel est le complément circonstanciel ?", answer: "dans le jardin", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Dans le jardin répond à où, c'est le complément de lieu." },
        { order: 2, prompt: "Dans il pleut ce matin, quel est le complément circonstanciel ?", answer: "ce matin", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Ce matin répond à quand, c'est le complément de temps." },
        { order: 3, prompt: "Dans elle chante doucement, quel est le complément circonstanciel ?", answer: "doucement", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Doucement répond à comment, c'est le complément de manière." },
        { order: 4, prompt: "Dans nous partons demain, quel est le complément circonstanciel ?", answer: "demain", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Demain répond à quand, c'est le complément de temps." },
        { order: 5, prompt: "Dans il travaille avec sérieux, quel est le complément circonstanciel ?", answer: "avec sérieux", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Avec sérieux répond à comment, c'est le complément de manière." },
        { order: 6, prompt: "Défi : dans les enfants jouent joyeusement dans la cour chaque après-midi, cite le complément de lieu.", answer: "dans la cour", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Dans la cour répond à où, c'est le complément de lieu." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Et ou est : le test avec et puis",
      xpReward: 24,
      story: {
        hook: "Imagine deux mots qui se prononcent pareil mais qui ne veulent pas dire la même chose.",
        concreteExample: "Regarde : Balkis ___ Bayrem jouent ensemble. Est-ce que c'est et ou est ?",
        reveal: "On peut remplacer par et puis : Balkis et puis Bayrem, ça marche ! C'est donc et. Si on ne peut pas remplacer par et puis, c'est le verbe être : il est content.",
        bridgeToConcept: "Et relie deux mots (remplaçable par et puis). Est vient du verbe être (remplaçable par était).",
        illustrationEmoji: "🔗"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Il est content : on peut dire il était content. C'est le verbe être : est.", illustrationEmoji: "😊" },
            { text: "Balkis et Bayrem : on peut dire Balkis et puis Bayrem. C'est et.", illustrationEmoji: "🔗" }
          ]
        },
        {
          title: "L'astuce du test",
          steps: [
            { text: "Remplace le mot par était.", illustrationEmoji: "🔍" },
            { text: "Si ça marche, c'est est. Sinon, c'est et.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Balkis ___ Bayrem jouent ensemble. (et/est)", answer: "et", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On peut dire Balkis et puis Bayrem, donc c'est et." },
        { order: 2, prompt: "Complète : Il ___ très content aujourd'hui. (et/est)", answer: "est", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "On peut dire il était content, donc c'est est (verbe être)." },
        { order: 3, prompt: "Complète : Le chat ___ le chien dorment. (et/est)", answer: "et", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On peut dire le chat et puis le chien, donc c'est et." },
        { order: 4, prompt: "Complète : Ce gâteau ___ délicieux. (et/est)", answer: "est", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "On peut dire ce gâteau était délicieux, donc c'est est." },
        { order: 5, prompt: "Complète : Elle prend son cahier ___ son crayon. (et/est)", answer: "et", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "On peut dire son cahier et puis son crayon, donc c'est et." },
        { order: 6, prompt: "Défi : complète les deux mots. Le ciel ___ (est) gris ___ (et) il va pleuvoir.", answer: "est et", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Le ciel est gris (verbe être) et il va pleuvoir (et puis)." }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Trouver la moitié d'un nombre",
      xpReward: 24,
      story: {
        hook: "Imagine que tu dois partager des bonbons entre toi et ton frère, en parts égales.",
        concreteExample: "Vous avez 16 bonbons à partager en deux parts égales. Combien chacun en reçoit-il ?",
        reveal: "La moitié de 16, c'est 8. Chacun reçoit 8 bonbons. Bravo, tu as trouvé la moitié !",
        bridgeToConcept: "Trouver la moitié, c'est diviser par 2.",
        illustrationEmoji: "🍬"
      },
      examples: [
        {
          title: "Trouver la moitié",
          steps: [
            { text: "La moitié de 10 : 10 divisé par 2 = 5.", illustrationEmoji: "🔍" },
            { text: "La moitié de 20 : 20 divisé par 2 = 10.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour aller plus vite",
          steps: [
            { text: "Pour les nombres ronds, retire un zéro puis divise par 2.", illustrationEmoji: "🔍" },
            { text: "La moitié de 40 : la moitié de 4 est 2, donc la moitié de 40 est 20.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : la moitié de 10", answer: "5", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "10 divisé par 2 = 5." },
        { order: 2, prompt: "Calcule : la moitié de 16", answer: "8", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "16 divisé par 2 = 8." },
        { order: 3, prompt: "Calcule : la moitié de 20", answer: "10", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "20 divisé par 2 = 10." },
        { order: 4, prompt: "Calcule : la moitié de 30", answer: "15", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "30 divisé par 2 = 15." },
        { order: 5, prompt: "Calcule : la moitié de 50", answer: "25", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "50 divisé par 2 = 25." },
        { order: 6, prompt: "Défi : calcule la moitié de 100", answer: "50", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "100 divisé par 2 = 50." }
      ]
    }
  ]
};
