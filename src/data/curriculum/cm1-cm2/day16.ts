import { DayCurriculum } from "@/models/types";

export const day16: DayCurriculum = {
  dayNumber: 16,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Multiplier un nombre décimal par un nombre entier",
      xpReward: 22,
      story: {
        hook: "Imagine que tu dois calculer le prix de plusieurs paquets de bonbons qui coûtent chacun un prix avec des centimes.",
        concreteExample: "Un paquet coûte 2,3 euros. Combien coûtent 2 paquets ?",
        reveal: "On multiplie comme des nombres entiers : 23 x 2 = 46, puis on replace la virgule au même endroit : 4,6 euros.",
        bridgeToConcept: "Pour multiplier un décimal par un entier, on multiplie sans la virgule, puis on la replace selon le nombre de chiffres après la virgule au départ.",
        illustrationEmoji: "🍬"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "4,2 x 3 : on calcule 42 x 3 = 126.", illustrationEmoji: "🔢" },
            { text: "Il y avait un chiffre après la virgule, donc le résultat est 12,6.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "1,4 x 3 : on calcule 14 x 3 = 42.", illustrationEmoji: "🔍" },
            { text: "On replace la virgule : 4,2.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 2,3 x 2", answer: "4,6", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "23 x 2 = 46, puis on replace la virgule : 4,6." },
        { order: 2, prompt: "Calcule : 1,4 x 3", answer: "4,2", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "14 x 3 = 42, puis on replace la virgule : 4,2." },
        { order: 3, prompt: "Calcule : 3,2 x 3", answer: "9,6", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "32 x 3 = 96, puis on replace la virgule : 9,6." },
        { order: 4, prompt: "Calcule : 4,1 x 4", answer: "16,4", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "41 x 4 = 164, puis on replace la virgule : 16,4." },
        { order: 5, prompt: "Calcule : 2,5 x 3", answer: "7,5", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "25 x 3 = 75, puis on replace la virgule : 7,5." },
        { order: 6, prompt: "Défi : calcule 3,3 x 3, puis ajoute 1,2 x 2. Quel est le résultat ?", answer: "12,3", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "3,3 x 3 = 9,9 et 1,2 x 2 = 2,4, donc 9,9 + 2,4 = 12,3." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "L'accord du participe passé avec avoir",
      xpReward: 22,
      story: {
        hook: "Tu as appris que le participe passé s'accorde avec être. Voyons maintenant ce qui se passe avec avoir.",
        concreteExample: "Balkis a mangé une pomme. Bayrem et ses amis ont joué dans le jardin. Le participe passé change-t-il ?",
        reveal: "Mangé et joué restent invariables, même si le sujet est féminin ou pluriel. Avec l'auxiliaire avoir, le participe passé ne s'accorde pas avec le sujet.",
        bridgeToConcept: "Avec avoir, le participe passé reste invariable, quel que soit le genre ou le nombre du sujet.",
        illustrationEmoji: "🍎"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Elle a chanté toute la soirée : chanté reste invariable.", illustrationEmoji: "🎤" },
            { text: "Balkis et Bayrem ont rangé leur chambre : rangé reste invariable, même au pluriel.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Avec avoir, ne cherche pas à accorder le participe passé avec le sujet.", illustrationEmoji: "🔍" },
            { text: "Avec être, au contraire, le participe passé s'accorde toujours avec le sujet.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Elle a ____ (manger) une pomme.", answer: "mangé", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec avoir, le participe passé reste invariable : mangé, même si le sujet est elle.", strictAccents: true },
        { order: 2, prompt: "Complète : Balkis et Bayrem ont ____ (jouer) dans le jardin.", answer: "joué", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Avec avoir, le participe passé reste invariable : joué, même si le sujet est pluriel.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Nous avons ____ (chanter) toute la soirée.",
          options: ["chanté", "chantée", "chantés"],
          answer: "chanté",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Avec avoir, le participe passé reste invariable : chanté, sans e ni s.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Ils ont ____ (regarder) un film hier soir.", answer: "regardé", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Avec avoir, le participe passé reste invariable : regardé.", strictAccents: true },
        { order: 5, prompt: "Complète : Elles ont ____ (finir) leurs devoirs.", answer: "fini", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Avec avoir, le participe passé reste invariable : fini, même si le sujet est féminin pluriel.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. Balkis a ____ (ranger) sa chambre et ses frères ont ____ (ranger) la leur.", answer: "rangé rangé", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Tu étais proche ! Avec avoir, rangé reste invariable dans les deux phrases, malgré des sujets différents.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Les types de phrases",
      xpReward: 22,
      story: {
        hook: "Une phrase peut raconter, questionner, ordonner ou s'exclamer : elle change alors de type.",
        concreteExample: "Le chat dort. Est-ce que tu viens ? Range ta chambre ! Quelle belle journée ! Que remarques-tu ?",
        reveal: "Ces quatre phrases n'ont pas le même but : la première raconte (déclarative), la deuxième interroge (interrogative), la troisième donne un ordre (injonctive), la quatrième exprime un sentiment fort (exclamative).",
        bridgeToConcept: "Les quatre types de phrases : déclarative (.), interrogative (?), injonctive (ordre), exclamative (!).",
        illustrationEmoji: "🎭"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Il pleut aujourd'hui : phrase déclarative, elle raconte un fait.", illustrationEmoji: "🌧️" },
            { text: "Peux-tu m'aider ? : phrase interrogative, elle pose une question.", illustrationEmoji: "❓" }
          ]
        },
        {
          title: "L'astuce pour reconnaître le type d'une phrase",
          steps: [
            { text: "Regarde la ponctuation finale : point, point d'interrogation ou point d'exclamation.", illustrationEmoji: "🔍" },
            { text: "Une phrase injonctive donne un ordre ou un conseil, souvent sans sujet exprimé.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Le chat dort. Quel est le type de cette phrase ?", answer: "déclarative", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Cette phrase raconte un fait, se termine par un point : c'est une phrase déclarative." },
        { order: 2, prompt: "Est-ce que tu viens ? Quel est le type de cette phrase ?", answer: "interrogative", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Cette phrase pose une question, se termine par un point d'interrogation : c'est une phrase interrogative." },
        { order: 3, prompt: "Range ta chambre ! Quel est le type de cette phrase ?", answer: "injonctive", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Cette phrase donne un ordre : c'est une phrase injonctive." },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Quelle belle journée ! est une phrase...",
          options: ["exclamative", "déclarative", "interrogative"],
          answer: "exclamative",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Cette phrase exprime un sentiment fort et se termine par un point d'exclamation : c'est une phrase exclamative."
        },
        { order: 5, prompt: "Où habites-tu ? Quel est le type de cette phrase ?", answer: "interrogative", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Cette phrase pose une question sur le lieu : c'est une phrase interrogative." },
        { order: 6, prompt: "Défi : cite le type de ces deux phrases, dans l'ordre. Ferme la porte ! Quelle bonne surprise !", answer: "injonctive exclamative", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Ferme la porte ! donne un ordre : phrase injonctive. Quelle bonne surprise ! exprime un sentiment fort : phrase exclamative." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Sans ou s'en",
      xpReward: 22,
      story: {
        hook: "Deux mots qui se prononcent pareil : l'un signifie sans avoir quelque chose, l'autre vient d'un verbe pronominal.",
        concreteExample: "Il part ___ son parapluie. Est-ce sans ou s'en ?",
        reveal: "On ne peut pas remplacer par un verbe pronominal en -en ici, donc c'est sans, qui signifie sans avoir. S'en vient d'un verbe pronominal construit avec en, comme s'en aller ou s'en souvenir.",
        bridgeToConcept: "Sans signifie sans avoir ou sans être (préposition). S'en s'utilise avec un verbe pronominal en -en (s'en aller, s'en souvenir, s'en servir).",
        illustrationEmoji: "☂️"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Il part sans son parapluie : sans veut dire sans avoir.", illustrationEmoji: "☔" },
            { text: "Elle s'en va tout de suite : verbe pronominal s'en aller.", illustrationEmoji: "🚶‍♀️" }
          ]
        },
        {
          title: "L'astuce du test",
          steps: [
            { text: "Essaie de remplacer par un verbe pronominal en -en, comme s'en aller ou s'en souvenir.", illustrationEmoji: "🔍" },
            { text: "Ça marche → s'en. Ça ne marche pas → sans.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Il part ___ son parapluie. (sans/s'en)", answer: "sans", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On ne peut pas dire il part s'en son parapluie, donc on écrit sans, qui signifie sans avoir.", strictAccents: true },
        { order: 2, prompt: "Complète : Elle ___ va tout de suite. (sans/s'en)", answer: "s'en", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Il s'agit du verbe pronominal s'en aller, donc on écrit s'en.", strictAccents: true },
        { order: 3, prompt: "Complète : Je ne pars jamais ___ mon cahier. (sans/s'en)", answer: "sans", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On ne peut pas dire je pars s'en mon cahier, donc on écrit sans, qui signifie sans avoir.", strictAccents: true },
        { order: 4, prompt: "Complète : Il ___ souvient très bien. (sans/s'en)", answer: "s'en", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Il s'agit du verbe pronominal s'en souvenir, donc on écrit s'en.", strictAccents: true },
        { order: 5, prompt: "Complète : Nous partons ___ nos parents ce week-end. (sans/s'en)", answer: "sans", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "On ne peut pas dire nous partons s'en nos parents, donc on écrit sans, qui signifie sans avoir.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. Bayrem est parti ___ (sans) argent, mais il ___ (s'en) est très bien sorti.", answer: "sans s'en", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Tu étais proche ! Sans argent signifie sans avoir d'argent. S'en sortir est un verbe pronominal construit avec en.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Multiplier par 20, 30, 40...",
      xpReward: 22,
      story: {
        hook: "Il existe une astuce rapide pour multiplier par des dizaines rondes comme 20, 30 ou 40.",
        concreteExample: "Combien font 7 x 20 ?",
        reveal: "7 x 20 = 7 x 2 x 10 = 14 x 10 = 140. On multiplie par le chiffre des dizaines, puis on ajoute un zéro.",
        bridgeToConcept: "Pour multiplier par 20, 30, 40..., multiplie par le chiffre des dizaines, puis ajoute un zéro au résultat.",
        illustrationEmoji: "⚡"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "7 x 20 : 7 x 2 = 14, puis 14 x 10 = 140.", illustrationEmoji: "🔢" },
            { text: "5 x 30 : 5 x 3 = 15, puis 15 x 10 = 150.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "6 x 40 : 6 x 4 = 24, puis 24 x 10 = 240.", illustrationEmoji: "🔍" },
            { text: "Plus le chiffre des dizaines est grand, plus le résultat grandit vite.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 4 x 20", answer: "80", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "4 x 2 = 8, puis 8 x 10 = 80." },
        { order: 2, prompt: "Calcule : 6 x 30", answer: "180", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "6 x 3 = 18, puis 18 x 10 = 180." },
        { order: 3, prompt: "Calcule : 3 x 40", answer: "120", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "3 x 4 = 12, puis 12 x 10 = 120." },
        { order: 4, prompt: "Calcule : 8 x 20", answer: "160", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "8 x 2 = 16, puis 16 x 10 = 160." },
        { order: 5, prompt: "Calcule : 9 x 30", answer: "270", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "9 x 3 = 27, puis 27 x 10 = 270." },
        { order: 6, prompt: "Défi : calcule 7 x 40, puis ajoute 5 x 20. Quel est le résultat final ?", answer: "380", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "7 x 40 = 280, 5 x 20 = 100, et 280 + 100 = 380." }
      ]
    }
  ]
};
