import { DayCurriculum } from "@/models/types";

export const day11: DayCurriculum = {
  dayNumber: 11,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "L'heure et les durées",
      xpReward: 22,
      story: {
        hook: "Imagine que tu dois calculer combien de temps dure ton trajet en bus jusqu'à l'école.",
        concreteExample: "Le bus part à 8h15 et arrive à 8h50. Combien de temps dure le trajet ?",
        reveal: "De 8h15 à 8h50, il s'écoule 35 minutes : on compte les minutes qui séparent les deux heures, sans dépasser l'heure suivante.",
        bridgeToConcept: "Pour calculer une durée, on compte les minutes qui séparent l'heure de départ de l'heure d'arrivée.",
        illustrationEmoji: "⏰"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "De 9h00 à 9h40, il s'écoule 40 minutes.", illustrationEmoji: "🕘" },
            { text: "De 14h20 à 15h00, il s'écoule 40 minutes : on compte jusqu'à 15h00.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "De 10h45 à 11h15, il s'écoule 30 minutes : 15 minutes pour arriver à 11h00, puis 15 minutes de plus.", illustrationEmoji: "🔍" },
            { text: "Une heure entière contient toujours 60 minutes.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Combien de minutes s'écoulent entre 8h00 et 8h30 ?", answer: "30", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "De 8h00 à 8h30, il s'écoule 30 minutes." },
        { order: 2, prompt: "Combien de minutes s'écoulent entre 9h15 et 9h45 ?", answer: "30", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "De 9h15 à 9h45, il s'écoule 30 minutes." },
        { order: 3, prompt: "Combien de minutes s'écoulent entre 10h00 et 10h50 ?", answer: "50", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "De 10h00 à 10h50, il s'écoule 50 minutes." },
        { order: 4, prompt: "Combien de minutes s'écoulent entre 14h30 et 15h00 ?", answer: "30", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "De 14h30 à 15h00, il s'écoule 30 minutes." },
        { order: 5, prompt: "Combien de minutes s'écoulent entre 11h20 et 12h00 ?", answer: "40", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "De 11h20 à 12h00, il s'écoule 40 minutes." },
        { order: 6, prompt: "Défi : un film commence à 16h10 et dure 1h20. À quelle heure se termine-t-il ? (réponds au format 17h30)", answer: "17h30", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "16h10 plus 1h20 : on ajoute d'abord 1 heure (17h10), puis 20 minutes de plus, ce qui donne 17h30." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le passé simple des verbes du 2e groupe",
      xpReward: 22,
      story: {
        hook: "Dans les contes, tu as déjà rencontré le passé simple des verbes en -er. Découvrons maintenant celui des verbes comme finir.",
        concreteExample: "Écoute : elle choisit une robe rouge et grandit vite cette année-là.",
        reveal: "Choisit et grandit sont au passé simple des verbes du 2e groupe (comme finir) : on garde le radical puis on ajoute -is, -is, -it, -îmes, -îtes, -irent.",
        bridgeToConcept: "Passé simple des verbes du 2e groupe : je finis, tu finis, il finit, nous finîmes, vous finîtes, ils finirent.",
        illustrationEmoji: "📖"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Le chevalier choisit son épée avant le combat.", illustrationEmoji: "🗡️" },
            { text: "Les enfants réussirent leur exercice avec brio.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Garde le radical de l'infinitif (fin-, chois-, réuss-) et ajoute la terminaison.", illustrationEmoji: "🔍" },
            { text: "À la 3e personne du pluriel, la terminaison est -irent : ils finirent.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète au passé simple : elle ____ (choisir) une robe rouge.", answer: "choisit", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec elle, le passé simple de choisir est choisit : radical chois- puis -it.", strictAccents: true },
        { order: 2, prompt: "Complète au passé simple : le chevalier ____ (réussir) son combat.", answer: "réussit", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Avec il, le passé simple de réussir est réussit : radical réuss- puis -it.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la forme au passé simple : ils ___ leur exercice avec brio. (réussir)",
          options: ["réussirent", "réussissent", "réussiraient"],
          answer: "réussirent",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Réussirent est la forme du passé simple avec ils, reconnaissable à sa terminaison en -irent.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète au passé simple : nous ____ (finir) notre travail avant midi.", answer: "finîmes", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Avec nous, le passé simple de finir est finîmes, avec un accent circonflexe sur le i.", strictAccents: true },
        { order: 5, prompt: "Complète au passé simple : vous ____ (grandir) beaucoup cette année-là.", answer: "grandîtes", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Avec vous, le passé simple de grandir est grandîtes, avec un accent circonflexe sur le i.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux verbes. Le petit chat ____ (grandir) vite et les enfants ____ (choisir) de le garder.", answer: "grandit choisirent", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Tu étais proche ! Avec il, grandir donne grandit. Avec ils, choisir donne choisirent.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Les pronoms personnels compléments",
      xpReward: 22,
      story: {
        hook: "Pour éviter de répéter un nom déjà cité, on utilise parfois un petit pronom placé juste devant le verbe.",
        concreteExample: "Regarde : Bayrem lit le livre. Bayrem ___ lit. Quel petit mot remplace le livre ?",
        reveal: "Le remplace le livre : Bayrem le lit. Les pronoms personnels compléments (le, la, les, lui, leur, me, te, nous, vous) remplacent un complément déjà connu, pour éviter les répétitions.",
        bridgeToConcept: "Les pronoms personnels compléments : le, la, les remplacent souvent un COD ; lui, leur remplacent souvent un COI.",
        illustrationEmoji: "🔁"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Elle regarde la télévision → Elle la regarde.", illustrationEmoji: "📺" },
            { text: "Il parle à son ami → Il lui parle.", illustrationEmoji: "🗣️" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Remplace le complément par le pronom, placé juste avant le verbe.", illustrationEmoji: "🔍" },
            { text: "Le, la, les remplacent souvent un COD ; lui, leur remplacent souvent un COI.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Remplace le complément par un pronom : Bayrem lit le livre.", answer: "le", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Le livre est masculin singulier, on le remplace par le : Bayrem le lit." },
        { order: 2, prompt: "Remplace le complément par un pronom : Elle regarde la télévision.", answer: "la", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "La télévision est féminin singulier, on la remplace par la : Elle la regarde." },
        { order: 3, prompt: "Remplace le complément par un pronom : Il range les jouets.", answer: "les", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Les jouets est pluriel, on le remplace par les : Il les range." },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis le bon pronom : Il parle à son ami. Il ___ parle.",
          options: ["lui", "le", "la"],
          answer: "lui",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "À son ami est un complément introduit par à, on le remplace par lui."
        },
        { order: 5, prompt: "Remplace le complément par un pronom : Nous offrons un cadeau à nos parents. Nous ___ offrons un cadeau.", answer: "leur", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "À nos parents est pluriel et introduit par à, on le remplace par leur." },
        { order: 6, prompt: "Défi : remplace les deux compléments par des pronoms. Balkis prépare le gâteau et parle à sa sœur. (réponds : deux pronoms séparés par un espace, dans l'ordre)", answer: "le lui", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Le gâteau devient le, et à sa sœur devient lui : Balkis le prépare et lui parle." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Et ou est",
      xpReward: 22,
      story: {
        hook: "Deux petits mots qui se prononcent pareil : l'un relie, l'autre est un verbe.",
        concreteExample: "Balkis ___ Bayrem jouent ensemble. Est-ce et ou est ?",
        reveal: "On ne peut pas dire Balkis était Bayrem jouent ensemble, donc c'est et, qui relie deux mots. Est signifie il est en train d'être (verbe être), comme dans il est content.",
        bridgeToConcept: "Et relie deux mots ou groupes de mots (on peut le remplacer par et puis). Est est le verbe être (on peut le remplacer par était).",
        illustrationEmoji: "🔗"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Bayrem et Balkis jouent : et relie deux prénoms.", illustrationEmoji: "👫" },
            { text: "Il est content de sa journée : est vient du verbe être.", illustrationEmoji: "😊" }
          ]
        },
        {
          title: "L'astuce du test",
          steps: [
            { text: "Essaie de remplacer par était : si ça marche, c'est est.", illustrationEmoji: "🔍" },
            { text: "Sinon, c'est et, qui relie.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Bayrem ___ Balkis jouent ensemble. (et/est)", answer: "et", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On ne peut pas dire Bayrem était Balkis, donc on écrit et, qui relie les deux prénoms.", strictAccents: true },
        { order: 2, prompt: "Complète : Il ___ content de sa journée. (et/est)", answer: "est", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "On peut dire il était content, donc on écrit est, le verbe être.", strictAccents: true },
        { order: 3, prompt: "Complète : Le chat ___ le chien dorment. (et/est)", answer: "et", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On ne peut pas dire le chat était le chien, donc on écrit et, qui relie les deux animaux.", strictAccents: true },
        { order: 4, prompt: "Complète : Ma sœur ___ très gentille. (et/est)", answer: "est", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "On peut dire ma sœur était très gentille, donc on écrit est, le verbe être.", strictAccents: true },
        { order: 5, prompt: "Complète : Il mange une pomme ___ une poire. (et/est)", answer: "et", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "On ne peut pas dire une pomme était une poire, donc on écrit et, qui relie les deux fruits.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. Le ciel ___ (est) bleu ___ (et) le soleil brille.", answer: "est et", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Tu étais proche ! Le ciel était bleu fonctionne, donc est. Ensuite, et relie les deux idées.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Diviser par 10, 100 et 1000",
      xpReward: 22,
      story: {
        hook: "Tu sais déjà multiplier facilement par 10, 100 et 1000. Découvrons comment diviser aussi vite.",
        concreteExample: "Combien font 3400 divisé par 100 ?",
        reveal: "3400 divisé par 100 = 34 : on enlève deux zéros, comme on en ajoutait pour multiplier.",
        bridgeToConcept: "Diviser par 10 : enlève un zéro. Par 100 : enlève deux zéros. Par 1000 : enlève trois zéros.",
        illustrationEmoji: "➗"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "620 divisé par 10 = 62 : on enlève un zéro.", illustrationEmoji: "🔢" },
            { text: "5000 divisé par 1000 = 5 : on enlève trois zéros.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "4700 divisé par 100 = 47 : on enlève deux zéros.", illustrationEmoji: "🔍" },
            { text: "Plus il y a de zéros à enlever, plus le nombre diviseur est grand.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 60 divisé par 10", answer: "6", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "60 divisé par 10 = 6, on enlève un zéro." },
        { order: 2, prompt: "Calcule : 900 divisé par 100", answer: "9", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "900 divisé par 100 = 9, on enlève deux zéros." },
        { order: 3, prompt: "Calcule : 4000 divisé par 1000", answer: "4", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "4000 divisé par 1000 = 4, on enlève trois zéros." },
        { order: 4, prompt: "Calcule : 3400 divisé par 100", answer: "34", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "3400 divisé par 100 = 34, on enlève deux zéros." },
        { order: 5, prompt: "Calcule : 7200 divisé par 10", answer: "720", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "7200 divisé par 10 = 720, on enlève un zéro." },
        { order: 6, prompt: "Défi : calcule 8000 divisé par 1000, puis multiplie le résultat par 100. Quel est le résultat final ?", answer: "800", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "8000 divisé par 1000 = 8, puis 8 x 100 = 800." }
      ]
    }
  ]
};
