import { DayCurriculum } from "@/models/types";

export const day01: DayCurriculum = {
  dayNumber: 1,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Les nombres jusqu'à 100",
      xpReward: 24,
      story: {
        hook: "Imagine que tu ranges des jetons par paquets de dix, comme des sachets de bonbons.",
        concreteExample: "Tu as 3 paquets de dix jetons, et 4 jetons tout seuls. Combien de jetons as-tu en tout ?",
        reveal: "3 paquets de dix, ça fait 30. Avec les 4 jetons en plus, ça fait 34. Bravo, tu viens de lire un nombre à deux chiffres !",
        bridgeToConcept: "Un nombre comme 34 veut dire 3 dizaines et 4 unités.",
        illustrationEmoji: "🔢"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "56, c'est 5 dizaines (50) et 6 unités (6).", illustrationEmoji: "🔟" },
            { text: "72, c'est 7 dizaines (70) et 2 unités (2).", illustrationEmoji: "🔟" }
          ]
        },
        {
          title: "L'astuce pour lire les nombres",
          steps: [
            { text: "Le premier chiffre dit combien de dizaines.", illustrationEmoji: "🔍" },
            { text: "Le deuxième chiffre dit combien d'unités restent.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Combien de dizaines dans le nombre 45 ?", answer: "4", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "45, c'est 4 dizaines et 5 unités." },
        { order: 2, prompt: "Combien d'unités dans le nombre 67 ?", answer: "7", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "67, c'est 6 dizaines et 7 unités." },
        { order: 3, prompt: "Quel nombre vient juste après 59 ?", answer: "60", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Après 59, on passe à la dizaine suivante : 60." },
        { order: 4, prompt: "Quel nombre a 8 dizaines et 3 unités ?", answer: "83", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "8 dizaines (80) et 3 unités (3), ça fait 83." },
        { order: 5, prompt: "Quel nombre vient juste avant 100 ?", answer: "99", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Juste avant 100, il y a 99." },
        { order: 6, prompt: "Défi : quel nombre a 9 dizaines et 0 unité ?", answer: "90", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "9 dizaines (90) et 0 unité, ça fait 90." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Les verbes en -er au présent, toutes les personnes",
      xpReward: 24,
      story: {
        hook: "Tu connais déjà je joue, tu joues, il joue. Aujourd'hui, découvrons la suite de la chanson !",
        concreteExample: "Écoute : nous jouons, vous jouez, ils jouent. Tu entends les nouvelles terminaisons ?",
        reveal: "À quoi servent ces terminaisons ? Elles disent qui fait l'action. Comment les reconnaître ? Avec nous, on entend -ons. Avec vous, on entend -ez. Avec ils ou elles, on entend -ent, mais on ne l'entend pas à l'oral !",
        bridgeToConcept: "Terminaisons complètes au présent : -e, -es, -e, -ons, -ez, -ent.",
        illustrationEmoji: "🎵"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Nous chantons une chanson ensemble.", illustrationEmoji: "🎤" },
            { text: "Vous regardez un film le soir.", illustrationEmoji: "📺" },
            { text: "Ils jouent au ballon dans la cour.", illustrationEmoji: "⚽" }
          ]
        },
        {
          title: "Attention à l'erreur fréquente",
          steps: [
            { text: "Beaucoup d'enfants oublient le z à la fin de vous. C'est une erreur !", illustrationEmoji: "❌" },
            { text: "Avec vous, il faut toujours -ez : vous jouez, vous chantez.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Nous ____ (chanter) une chanson.", answer: "chantons", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Tu étais proche ! Avec nous, la terminaison est -ons : nous chantons. Essaie de le lire à voix haute.", strictAccents: true },
        { order: 2, prompt: "Complète : Vous ____ (jouer) dans le jardin.", answer: "jouez", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "Avec vous, la terminaison est toujours -ez : vous jouez, jamais -ent.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Ils ____ (regarder) la télévision.",
          options: ["regardons", "regardez", "regardent"],
          answer: "regardent",
          kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.",
          explanationWhenWrong: "Avec ils, la terminaison est -ent : ils regardent. On ne l'entend pas à l'oral, mais il faut l'écrire.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Elles ____ (danser) ensemble.", answer: "dansent", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Avec elles, la terminaison est -ent : elles dansent, comme pour ils.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Nous ____ (aimer) les vacances.",
          options: ["aimons", "aimez", "aiment"],
          answer: "aimons",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.",
          explanationWhenWrong: "Avec nous, la terminaison est -ons : nous aimons.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Vous ____ (chercher) vos clés et ils ____ (trouver) une solution.", answer: "cherchez trouvent", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "Vous cherchez avec -ez, et ils trouvent avec -ent. Deux terminaisons différentes dans la même phrase !", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Le sujet du verbe",
      xpReward: 24,
      story: {
        hook: "Imagine une phrase comme une petite scène de théâtre : quelqu'un fait toujours l'action.",
        concreteExample: "Regarde : le chat mange sa gamelle. Qui fait l'action de manger ?",
        reveal: "C'est le chat qui fait l'action. À quoi sert le sujet ? Il dit qui fait l'action du verbe. Comment le trouver ? On pose la question qui est-ce qui... devant le verbe.",
        bridgeToConcept: "Le sujet est celui qui fait l'action du verbe.",
        illustrationEmoji: "🎭"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Ma soeur dessine une maison : qui dessine ? Ma soeur. C'est le sujet.", illustrationEmoji: "🎨" },
            { text: "Les enfants jouent dans le jardin : qui joue ? Les enfants. C'est le sujet.", illustrationEmoji: "⚽" }
          ]
        },
        {
          title: "L'astuce pour trouver le sujet",
          steps: [
            { text: "Pose la question qui est-ce qui + le verbe.", illustrationEmoji: "❓" },
            { text: "La réponse à cette question est le sujet.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Le chien court. Quel est le sujet du verbe court ?", answer: "le chien", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Qui court ? Le chien. C'est le sujet." },
        { order: 2, prompt: "Ma mère cuisine un gâteau. Quel est le sujet ?", answer: "ma mère", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Qui cuisine ? Ma mère. C'est le sujet." },
        { order: 3, prompt: "Les oiseaux chantent le matin. Quel est le sujet ?", answer: "les oiseaux", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Qui chante ? Les oiseaux. C'est le sujet." },
        { order: 4, prompt: "Le vent souffle fort. Quel est le sujet ?", answer: "le vent", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Qui souffle ? Le vent. C'est le sujet." },
        { order: 5, prompt: "Mon frère et moi jouons au ballon. Quel est le sujet ?", answer: "mon frère et moi", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Qui joue ? Mon frère et moi. C'est le sujet." },
        { order: 6, prompt: "Défi : le soir, les étoiles brillent dans le ciel noir. Quel est le sujet du verbe brillent ?", answer: "les étoiles", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Même avec des mots avant et après, ce sont les étoiles qui brillent : c'est le sujet." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Le son [s] : s ou ss",
      xpReward: 24,
      story: {
        hook: "Imagine un serpent qui siffle : ssss. Ce son se cache parfois derrière une seule lettre, parfois derrière deux.",
        concreteExample: "Écoute : soleil, poisson. Tu entends le même son [s], mais l'écriture change !",
        reveal: "À quoi sert de connaître la règle ? À bien écrire ce son. Comment le reconnaître ? Entre deux voyelles, on écrit ss (poisson). Au début du mot ou avant une consonne, on écrit s (soleil, valse).",
        bridgeToConcept: "Entre deux voyelles, le son [s] s'écrit ss. Sinon, il s'écrit s.",
        illustrationEmoji: "🐍"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Le soleil brille : s au début du mot.", illustrationEmoji: "☀️" },
            { text: "Un poisson nage : ss entre deux voyelles, le o et le o.", illustrationEmoji: "🐟" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Regarde s'il y a une voyelle avant et après le son [s].", illustrationEmoji: "🔍" },
            { text: "Si oui, il faut ss. Sinon, un seul s suffit.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : le ___oleil (soleil). (s ou ss)", answer: "s", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Au tout début d'un mot, le son [s] s'écrit toujours avec un seul s : soleil.", strictAccents: true },
        { order: 2, prompt: "Complète : un poi___on (poisson). (s ou ss)", answer: "ss", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "Tu étais proche ! Entre deux voyelles (le i et le o), on écrit ss : poisson.", strictAccents: true },
        { order: 3, prompt: "Complète : une cla___e (classe). (s ou ss)", answer: "ss", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Entre le a et le e, il y a deux voyelles autour du son [s], donc on écrit ss : classe.", strictAccents: true },
        { order: 4, prompt: "Complète : un ___ac (sac). (s ou ss)", answer: "s", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Au début du mot, on écrit un seul s : sac.", strictAccents: true },
        { order: 5, prompt: "Complète : une tra___e (trace). (s ou ss)", answer: "c", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Trace s'écrit avec un c, pas un s ni un ss : c'est une exception à retenir par coeur.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. Le poi___on (poisson) nage dans le ba___in (bassin).", answer: "ss ss", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "Poisson et bassin ont chacun le son [s] entre deux voyelles, donc les deux s'écrivent avec ss.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "La table de multiplication de 2",
      xpReward: 24,
      story: {
        hook: "Imagine que tu distribues toujours 2 bonbons à chaque enfant.",
        concreteExample: "Il y a 4 enfants. Combien de bonbons faut-il en tout ?",
        reveal: "4 fois 2 bonbons, ça fait 8 bonbons. Multiplier par 2, c'est comme faire un double ! Bravo !",
        bridgeToConcept: "La table de 2 : 1x2=2, 2x2=4, 3x2=6, 4x2=8, 5x2=10...",
        illustrationEmoji: "🍬"
      },
      examples: [
        {
          title: "La table de 2",
          steps: [
            { text: "2 x 3 : c'est 2 + 2 + 2 = 6.", illustrationEmoji: "➕" },
            { text: "2 x 5 : c'est comme le double de 5, donc 10.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour la table de 2",
          steps: [
            { text: "Multiplier par 2, c'est toujours faire un double.", illustrationEmoji: "🙌" },
            { text: "2 x 7, c'est le double de 7, donc 14.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 2 x 3", answer: "6", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "2 x 3, c'est le double de 3 : 6." },
        { order: 2, prompt: "Calcule : 2 x 5", answer: "10", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "2 x 5, c'est le double de 5 : 10." },
        { order: 3, prompt: "Calcule : 2 x 6", answer: "12", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "2 x 6, c'est le double de 6 : 12." },
        { order: 4, prompt: "Calcule : 2 x 8", answer: "16", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "2 x 8, c'est le double de 8 : 16." },
        { order: 5, prompt: "Calcule : 2 x 9", answer: "18", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "2 x 9, c'est le double de 9 : 18." },
        { order: 6, prompt: "Défi : calcule 2 x 10", answer: "20", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "2 x 10, c'est le double de 10 : 20." }
      ]
    }
  ]
};
