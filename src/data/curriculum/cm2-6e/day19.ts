import { DayCurriculum } from "@/models/types";

export const day19: DayCurriculum = {
  dayNumber: 19,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "L'aire du triangle",
      xpReward: 20,
      story: {
        hook: "Imagine un triangle découpé dans la moitié d'un rectangle.",
        concreteExample: "Un triangle a une base de 8 cm et une hauteur de 5 cm. Quelle est son aire ?",
        reveal: "Aire = (base x hauteur) divisé par 2 = (8 x 5) divisé par 2 = 40 divisé par 2 = 20 cm². Le triangle est la moitié du rectangle qui l'entoure.",
        bridgeToConcept: "Aire du triangle = (base x hauteur) divisé par 2.",
        illustrationEmoji: "🔺"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "Un triangle de base 6 cm et de hauteur 4 cm : aire = (6 x 4) divisé par 2 = 12 cm².", illustrationEmoji: "🔢" },
            { text: "On retrouve bien la moitié du rectangle de 6 cm sur 4 cm, qui mesure 24 cm².", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Un triangle de base 10 m et de hauteur 3 m : aire = (10 x 3) divisé par 2 = 15 m².", illustrationEmoji: "🔍" },
            { text: "Un triangle de base 9 cm et de hauteur 2 cm : aire = (9 x 2) divisé par 2 = 9 cm².", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule l'aire d'un triangle de base 8 cm et de hauteur 5 cm.", answer: "20", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "(8 x 5) divisé par 2 = 40 divisé par 2 = 20 cm²." },
        { order: 2, prompt: "Calcule l'aire d'un triangle de base 6 cm et de hauteur 4 cm.", answer: "12", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "(6 x 4) divisé par 2 = 24 divisé par 2 = 12 cm²." },
        { order: 3, prompt: "Calcule l'aire d'un triangle de base 10 m et de hauteur 3 m.", answer: "15", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "(10 x 3) divisé par 2 = 30 divisé par 2 = 15 m²." },
        { order: 4, prompt: "Calcule l'aire d'un triangle de base 9 cm et de hauteur 2 cm.", answer: "9", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "(9 x 2) divisé par 2 = 18 divisé par 2 = 9 cm²." },
        { order: 5, prompt: "Calcule l'aire d'un triangle de base 12 cm et de hauteur 5 cm.", answer: "30", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "(12 x 5) divisé par 2 = 60 divisé par 2 = 30 cm²." },
        { order: 6, prompt: "Défi : un triangle a une base de 14 m et une hauteur de 6 m. Quelle est son aire ?", answer: "42", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "(14 x 6) divisé par 2 = 84 divisé par 2 = 42 m²." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le présent des verbes en -indre et -soudre",
      xpReward: 20,
      story: {
        hook: "Certains verbes du 3e groupe se terminent par -indre ou -soudre et perdent leur d au singulier.",
        concreteExample: "Écoute : je peins, tu peins, il peint, nous peignons, vous peignez, ils peignent.",
        reveal: "Remarque : au singulier, peindre perd le d (je peins, et non peinds) ; au pluriel, un gn apparaît (nous peignons). Résoudre suit un modèle proche : je résous, nous résolvons.",
        bridgeToConcept: "Peindre : je peins, tu peins, il peint, nous peignons, vous peignez, ils peignent. Craindre suit le même modèle. Résoudre : je résous, nous résolvons, ils résolvent.",
        illustrationEmoji: "🎨"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "Je crains l'orage. Nous craignons parfois le noir.", illustrationEmoji: "⛈️" },
            { text: "Il résout ce problème facilement. Vous résolvez cette énigme.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Attention, peindre et craindre perdent le d au singulier (je peins, et non peinds).", illustrationEmoji: "⚠️" },
            { text: "Résoudre change en résolv- au pluriel : nous résolvons.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je ____ (peindre) un joli tableau.", answer: "peins", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Peindre perd le d au singulier ; avec je, on écrit peins.", strictAccents: true },
        { order: 2, prompt: "Complète : Tu ____ (craindre) l'orage ce soir.", answer: "crains", kindWhenWrong: "Pas grave, on regarde ça ensemble.", explanationWhenWrong: "Craindre perd le d au singulier ; avec tu, on écrit crains.", strictAccents: true },
        { order: 3, prompt: "Complète : Nous ____ (peindre) la maison en bleu.", answer: "peignons", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Au pluriel, peindre prend un gn ; avec nous, on écrit peignons.", strictAccents: true },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne réponse : il ____ (résoudre) ce problème facilement.",
          options: ["résout", "résoud", "résouds"],
          answer: "résout",
          kindWhenWrong: "Pas grave du tout, on y retourne ensemble.",
          explanationWhenWrong: "Résoudre au présent avec il donne résout, sans d.",
          strictAccents: true
        },
        { order: 5, prompt: "Complète : Vous ____ (résoudre) cette énigme ensemble.", answer: "résolvez", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Au pluriel, résoudre devient résolv- ; avec vous, on écrit résolvez.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux verbes. Ils ____ (craindre) l'hiver et ils ____ (peindre) leur maison avant les grands froids.", answer: "craignent peignent", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble.", explanationWhenWrong: "Au pluriel avec ils, craindre donne craignent et peindre donne peignent, tous deux avec gn.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Le complément d'agent",
      xpReward: 20,
      story: {
        hook: "Imagine une phrase à la forme passive où l'on précise qui fait vraiment l'action.",
        concreteExample: "Regarde : la souris est mangée par le chat. Qui fait vraiment l'action de manger ?",
        reveal: "Par le chat indique qui accomplit l'action : c'est le complément d'agent, introduit par la préposition par (ou parfois de).",
        bridgeToConcept: "Le complément d'agent indique qui fait l'action dans une phrase passive. Il est introduit par par (ou de) et correspond au sujet de la phrase active.",
        illustrationEmoji: "🐱"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "Le colis est apporté par le facteur : le facteur est le complément d'agent.", illustrationEmoji: "📦" },
            { text: "Le livre est lu par les enfants : les enfants est le complément d'agent.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Ce tableau a été peint par Marie : Marie est le complément d'agent.", illustrationEmoji: "🎨" },
            { text: "Le complément d'agent est souvent introduit par par, parfois par de (elle est aimée de tous).", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans la souris est mangée par le chat, quel est le complément d'agent ?", answer: "par le chat", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Par le chat indique qui accomplit l'action de manger : c'est le complément d'agent." },
        { order: 2, prompt: "Dans le colis est apporté par le facteur, quel est le complément d'agent ?", answer: "par le facteur", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Par le facteur indique qui accomplit l'action d'apporter : c'est le complément d'agent." },
        { order: 3, prompt: "Dans ce tableau a été peint par Marie, quel est le complément d'agent ?", answer: "par Marie", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Par Marie indique qui a peint le tableau : c'est le complément d'agent." },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne réponse : dans le livre est lu par les enfants, les enfants est...",
          options: ["un complément d'agent", "un COD", "un sujet"],
          answer: "un complément d'agent",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Les enfants indique qui accomplit l'action de lire, introduit par par : c'est un complément d'agent."
        },
        { order: 5, prompt: "Dans l'arbre a été renversé par le vent, quel est le complément d'agent ?", answer: "par le vent", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Par le vent indique qui a renversé l'arbre : c'est le complément d'agent." },
        { order: 6, prompt: "Défi : dans le gâteau a été préparé par ma mère et il a été mangé par toute la famille, cite les deux compléments d'agent, dans l'ordre.", answer: "par ma mère par toute la famille", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Par ma mère (qui a préparé) et par toute la famille (qui a mangé) sont les deux compléments d'agent." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Près ou prêt",
      xpReward: 20,
      story: {
        hook: "Imagine deux mots qui se prononcent pareil mais qui n'ont pas du tout le même sens.",
        concreteExample: "Regarde : l'école est tout ___ de chez moi. Est-ce que c'est près ou prêt ?",
        reveal: "Près (avec un accent grave et un s) exprime une proximité, le contraire de loin. Prêt (avec un t) signifie préparé, et s'accorde en genre : prêt, prête.",
        bridgeToConcept: "Près = proximité, contraire de loin, toujours invariable. Prêt/prête = préparé(e), s'accorde en genre et en nombre.",
        illustrationEmoji: "📍"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "L'école est tout près de chez moi : proximité, contraire de loin.", illustrationEmoji: "🏫" },
            { text: "Je suis prêt à partir : préparé, masculin, sans e.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Elle est prête pour l'examen : préparée, féminin, avec e.", illustrationEmoji: "📝" },
            { text: "Nous habitons près de la forêt.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : l'école est tout ___ de chez moi. (près/prêt)", answer: "près", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Ça exprime une proximité, le contraire de loin : près, avec un accent grave.", strictAccents: true },
        { order: 2, prompt: "Complète : je suis ___ à partir maintenant. (près/prêt)", answer: "prêt", kindWhenWrong: "Pas grave, on regarde ça ensemble.", explanationWhenWrong: "Ça signifie préparé, au masculin : prêt, avec un accent circonflexe.", strictAccents: true },
        { order: 3, prompt: "Complète : elle est ___ pour son examen. (près/prêt)", answer: "prête", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Ça signifie préparée, au féminin : prête, avec un e final.", strictAccents: true },
        { order: 4, prompt: "Complète : nous habitons ___ de la forêt. (près/prêt)", answer: "près", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Ça exprime une proximité, le contraire de loin : près.", strictAccents: true },
        { order: 5, prompt: "Complète : ils sont ___ à commencer le match. (près/prêt)", answer: "prêts", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Ça signifie préparés, au masculin pluriel : prêts, avec un s.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les trois mots. Nous habitons tout ___ (près) de l'école et nous sommes toujours ___ (prêts) à partir tôt, ___ (près) d'une heure avant les cours.", answer: "près prêts près", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble.", explanationWhenWrong: "Près exprime la proximité (deux fois), prêts signifie préparés, accordé au masculin pluriel.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Multiplier par 15",
      xpReward: 20,
      story: {
        hook: "Imagine une astuce pour multiplier vite par 15, en passant par 10 et sa moitié.",
        concreteExample: "Calcule 6 x 15 en utilisant l'astuce du x10 plus la moitié.",
        reveal: "6 x 10 = 60, la moitié de 60 = 30, 60 + 30 = 90. Donc 6 x 15 = 90.",
        bridgeToConcept: "Multiplier par 15 = multiplier par 10, puis ajouter la moitié de ce résultat (car 15 = 10 + 5).",
        illustrationEmoji: "⚡"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "4 x 15 : 4 x 10 = 40, moitié de 40 = 20, 40 + 20 = 60.", illustrationEmoji: "🔢" },
            { text: "8 x 15 : 8 x 10 = 80, moitié de 80 = 40, 80 + 40 = 120.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "10 x 15 : 10 x 10 = 100, moitié de 100 = 50, 100 + 50 = 150.", illustrationEmoji: "🔍" },
            { text: "12 x 15 : 12 x 10 = 120, moitié de 120 = 60, 120 + 60 = 180.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 6 x 15", answer: "90", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "6 x 10 = 60, moitié de 60 = 30, 60 + 30 = 90." },
        { order: 2, prompt: "Calcule : 4 x 15", answer: "60", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "4 x 10 = 40, moitié de 40 = 20, 40 + 20 = 60." },
        { order: 3, prompt: "Calcule : 8 x 15", answer: "120", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "8 x 10 = 80, moitié de 80 = 40, 80 + 40 = 120." },
        { order: 4, prompt: "Calcule : 10 x 15", answer: "150", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "10 x 10 = 100, moitié de 100 = 50, 100 + 50 = 150." },
        { order: 5, prompt: "Calcule : 12 x 15", answer: "180", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "12 x 10 = 120, moitié de 120 = 60, 120 + 60 = 180." },
        { order: 6, prompt: "Défi : calcule 14 x 15, en utilisant l'astuce du x10 plus la moitié.", answer: "210", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "14 x 10 = 140, moitié de 140 = 70, 140 + 70 = 210." }
      ]
    }
  ]
};
