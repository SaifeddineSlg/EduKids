import { DayCurriculum } from "@/models/types";

export const day06: DayCurriculum = {
  dayNumber: 6,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "La multiplication d'un nombre décimal par un entier",
      xpReward: 20,
      story: {
        hook: "Imagine que tu achètes 4 barres de chocolat qui coûtent chacune 2,50 €.",
        concreteExample: "Combien vas-tu payer en tout pour ces 4 barres ?",
        reveal: "4 x 2,50 = 10,00 €. Pour multiplier un nombre décimal par un entier, on peut multiplier comme si c'étaient des nombres entiers, puis replacer la virgule au bon endroit.",
        bridgeToConcept: "Pour multiplier un décimal par un entier, on multiplie les chiffres sans la virgule, puis on replace la virgule selon le nombre de chiffres après la virgule au départ.",
        illustrationEmoji: "🍫"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "3 x 1,25 : on calcule 3 x 125 = 375, puis on replace la virgule (2 chiffres après la virgule dans 1,25) : 3,75.", illustrationEmoji: "🔢" },
            { text: "Vérification : 1,25 + 1,25 + 1,25 = 3,75. C'est juste !", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "5 x 2,4 : 5 x 24 = 120, on replace la virgule (1 chiffre après la virgule) : 12,0, soit 12.", illustrationEmoji: "🔍" },
            { text: "6 x 0,5 = 3,0, soit 3.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 4 x 2,50", answer: "10", acceptedAnswers: ["10,00", "10,0"], kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "4 x 250 = 1000, on replace la virgule (2 chiffres après la virgule) : 10,00, soit 10." },
        { order: 2, prompt: "Calcule : 3 x 1,25", answer: "3,75", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "3 x 125 = 375, on replace la virgule : 3,75." },
        { order: 3, prompt: "Calcule : 5 x 2,4", answer: "12", acceptedAnswers: ["12,0"], kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "5 x 24 = 120, on replace la virgule (1 chiffre) : 12,0, soit 12." },
        { order: 4, prompt: "Calcule : 6 x 0,5", answer: "3", acceptedAnswers: ["3,0"], kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "6 x 5 = 30, on replace la virgule : 3,0, soit 3." },
        { order: 5, prompt: "Calcule : 2 x 3,15", answer: "6,30", acceptedAnswers: ["6,3"], kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "2 x 315 = 630, on replace la virgule : 6,30." },
        { order: 6, prompt: "Défi : un jus de fruits coûte 1,20 €. Combien coûtent 6 bouteilles ?", answer: "7,20", acceptedAnswers: ["7,2"], kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "6 x 1,20 = 7,20 € (6 x 120 = 720, on replace la virgule)." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "L'imparfait de l'indicatif",
      xpReward: 20,
      story: {
        hook: "Imagine que tu racontes une habitude de quand tu étais petit, une action qui durait dans le passé.",
        concreteExample: "Écoute : quand j'étais petit, je jouais tous les jours dans le jardin.",
        reveal: "Jouais est à l'imparfait : il décrit une action passée qui durait ou se répétait, sans indiquer précisément quand elle a commencé ou fini.",
        bridgeToConcept: "L'imparfait se forme avec le radical de nous au présent (nous jouons → jou-) suivi des terminaisons -ais, -ais, -ait, -ions, -iez, -aient.",
        illustrationEmoji: "🧸"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "Jouer : nous jouons → radical jou-. Je jouais, tu jouais, il jouait, nous jouions, vous jouiez, ils jouaient.", illustrationEmoji: "🔍" },
            { text: "Finir : nous finissons → radical finiss-. Je finissais, elle finissait.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Être est irrégulier à l'imparfait : j'étais, tu étais, il était, nous étions.", illustrationEmoji: "⚠️" },
            { text: "Avoir : j'avais, nous avions, ils avaient.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Quand j'étais petit, je ____ (jouer) dans le jardin.", answer: "jouais", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Le radical de jouer à l'imparfait est jou- (comme nous jouons) ; avec je, on ajoute -ais : jouais.", strictAccents: true },
        { order: 2, prompt: "Complète : Tu ____ (finir) toujours tes devoirs avant le dîner.", answer: "finissais", kindWhenWrong: "Pas grave, on regarde ça ensemble.", explanationWhenWrong: "Le radical de finir à l'imparfait est finiss- (comme nous finissons) ; avec tu, on ajoute -ais : finissais.", strictAccents: true },
        { order: 3, prompt: "Complète : Nous ____ (être) très heureux à la campagne.", answer: "étions", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Être est irrégulier à l'imparfait : avec nous, on écrit étions.", strictAccents: true },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Ils ____ (avoir) toujours faim après l'école.",
          options: ["avaient", "avait", "avaient"],
          answer: "avaient",
          kindWhenWrong: "Pas grave du tout, on y retourne ensemble.",
          explanationWhenWrong: "Avec ils, avoir à l'imparfait donne avaient, avec un e avant -nt.",
          strictAccents: true
        },
        { order: 5, prompt: "Complète : Vous ____ (chanter) une belle chanson chaque soir.", answer: "chantiez", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Le radical de chanter à l'imparfait est chant- ; avec vous, on ajoute -iez : chantiez.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux verbes. Elle ____ (rire) souvent et nous ____ (aimer) l'écouter.", answer: "riait aimions", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble.", explanationWhenWrong: "Elle riait (radical ri-, comme nous rions) et nous aimions (radical aim-, avec nous on ajoute -ions).", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Le complément d'objet direct (COD)",
      xpReward: 20,
      story: {
        hook: "Imagine un verbe qui a besoin d'un complément pour dire ce que l'on fait, sans aucune préposition devant.",
        concreteExample: "Regarde : le chat mange sa gamelle. Que mange le chat ?",
        reveal: "Sa gamelle répond à la question quoi ? juste après le verbe, sans préposition : c'est le complément d'objet direct (COD).",
        bridgeToConcept: "Le COD complète directement le verbe (sans préposition) et répond à la question qui ? ou quoi ? posée après le verbe.",
        illustrationEmoji: "🎯"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "Elle lit un livre : un livre répond à quoi ? après lit, c'est le COD.", illustrationEmoji: "📖" },
            { text: "Il regarde la télévision : la télévision est le COD de regarde.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Nous invitons nos amis : nos amis répond à qui ?, c'est le COD.", illustrationEmoji: "🔍" },
            { text: "Attention, dans il parle à son ami, à son ami répond à qui ?, mais avec la préposition à : ce n'est pas un COD.", illustrationEmoji: "⚠️" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans le chat mange sa gamelle, quel est le COD ?", answer: "sa gamelle", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Sa gamelle répond à la question quoi ? après le verbe mange, sans préposition : c'est le COD." },
        { order: 2, prompt: "Dans elle lit un livre passionnant, quel est le COD ?", answer: "un livre passionnant", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Un livre passionnant répond à quoi ? après le verbe lit : c'est le COD." },
        { order: 3, prompt: "Dans nous invitons nos amis, quel est le COD ?", answer: "nos amis", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Nos amis répond à qui ? après le verbe invitons : c'est le COD." },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne réponse : dans il regarde la télévision, la télévision est...",
          options: ["un COD", "un COI", "un sujet"],
          answer: "un COD",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "La télévision répond à quoi ? sans préposition après le verbe regarde : c'est un COD."
        },
        { order: 5, prompt: "Dans le jardinier arrose les fleurs, quel est le COD ?", answer: "les fleurs", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Les fleurs répond à quoi ? après le verbe arrose : c'est le COD." },
        { order: 6, prompt: "Défi : dans ma sœur prépare un gâteau et range la cuisine, cite les deux COD, dans l'ordre.", answer: "un gâteau la cuisine", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Un gâteau répond à quoi ? après prépare, la cuisine répond à quoi ? après range : ce sont les deux COD." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "A ou à",
      xpReward: 20,
      story: {
        hook: "Imagine encore deux petits mots qui se prononcent pareil mais qui n'ont pas le même rôle.",
        concreteExample: "Regarde : il ___ un chien. Est-ce que c'est a ou à ?",
        reveal: "A (sans accent) est le verbe avoir à la 3e personne du singulier, on peut le remplacer par avait. À (avec accent) est une préposition, on ne peut pas la remplacer par avait.",
        bridgeToConcept: "Test : si on peut remplacer par avait, on écrit a (verbe avoir). Sinon, on écrit à (préposition), avec un accent grave.",
        illustrationEmoji: "🐶"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "Il a un chien : on peut dire il avait un chien, donc a, sans accent.", illustrationEmoji: "🐕" },
            { text: "Il va à l'école : on ne peut pas dire il va avait l'école, donc à, avec accent.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Elle a mangé une pomme : verbe avoir, remplaçable par avait.", illustrationEmoji: "🍎" },
            { text: "Nous allons à la piscine : préposition, avec accent.", illustrationEmoji: "🏊" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : il ___ un chien noir. (a/à)", answer: "a", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "On peut remplacer par avait (il avait un chien), donc c'est le verbe avoir : a, sans accent.", strictAccents: true },
        { order: 2, prompt: "Complète : il va ___ l'école tous les matins. (a/à)", answer: "à", kindWhenWrong: "Pas grave, on regarde ça ensemble.", explanationWhenWrong: "On ne peut pas dire il va avait l'école, donc c'est la préposition à, avec un accent grave.", strictAccents: true },
        { order: 3, prompt: "Complète : elle ___ déjà mangé son goûter. (a/à)", answer: "a", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "On peut dire elle avait déjà mangé, donc c'est le verbe avoir : a, sans accent.", strictAccents: true },
        { order: 4, prompt: "Complète : nous allons ___ la piscine cet après-midi. (a/à)", answer: "à", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "On ne peut pas remplacer par avait, donc c'est la préposition à, avec un accent grave.", strictAccents: true },
        { order: 5, prompt: "Complète : mon frère ___ beaucoup d'amis. (a/à)", answer: "a", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "On peut dire mon frère avait beaucoup d'amis, donc c'est le verbe avoir : a, sans accent.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les trois mots. Il ___ (a) un vélo et il va ___ (à) l'école ___ (à) vélo tous les jours.", answer: "a à à", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble.", explanationWhenWrong: "Il a un vélo (verbe avoir, remplaçable par avait), il va à l'école, à vélo (préposition, deux fois, avec accent).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Multiplier par 5, 25 et 50",
      xpReward: 20,
      story: {
        hook: "Imagine une astuce pour multiplier très vite par 5, 25 ou 50, sans poser l'opération.",
        concreteExample: "Pour multiplier par 5, tu peux multiplier par 10 puis diviser par 2. Essaie avec 24 x 5.",
        reveal: "24 x 10 = 240, puis 240 divisé par 2 = 120. Donc 24 x 5 = 120.",
        bridgeToConcept: "Multiplier par 5 = multiplier par 10 puis diviser par 2. Multiplier par 25 = multiplier par 100 puis diviser par 4. Multiplier par 50 = multiplier par 100 puis diviser par 2.",
        illustrationEmoji: "⚡"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "18 x 5 : 18 x 10 = 180, puis 180 divisé par 2 = 90.", illustrationEmoji: "🔢" },
            { text: "12 x 25 : 12 x 100 = 1200, puis 1200 divisé par 4 = 300.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "8 x 50 : 8 x 100 = 800, puis 800 divisé par 2 = 400.", illustrationEmoji: "🔍" },
            { text: "6 x 25 : 6 x 100 = 600, puis 600 divisé par 4 = 150.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 24 x 5", answer: "120", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "24 x 10 = 240, puis 240 divisé par 2 = 120." },
        { order: 2, prompt: "Calcule : 18 x 5", answer: "90", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "18 x 10 = 180, puis 180 divisé par 2 = 90." },
        { order: 3, prompt: "Calcule : 12 x 25", answer: "300", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "12 x 100 = 1200, puis 1200 divisé par 4 = 300." },
        { order: 4, prompt: "Calcule : 8 x 50", answer: "400", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "8 x 100 = 800, puis 800 divisé par 2 = 400." },
        { order: 5, prompt: "Calcule : 6 x 25", answer: "150", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "6 x 100 = 600, puis 600 divisé par 4 = 150." },
        { order: 6, prompt: "Défi : calcule 14 x 50, en utilisant l'astuce du x100 divisé par 2.", answer: "700", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "14 x 100 = 1400, puis 1400 divisé par 2 = 700." }
      ]
    }
  ]
};
