import { DayCurriculum } from "@/models/types";

export const day05: DayCurriculum = {
  dayNumber: 5,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Révision : multiplication, division, fractions, heure",
      xpReward: 26,
      story: {
        hook: "Cette semaine, tu as appris plein de choses en mathématiques. Faisons le tour ensemble !",
        concreteExample: "Tu sais maintenant multiplier à deux chiffres, diviser en parts égales, reconnaître une fraction et lire l'heure.",
        reveal: "Toutes ces compétences servent tous les jours : compter, partager, cuisiner, être à l'heure.",
        bridgeToConcept: "Révisons : multiplication à deux chiffres, division simple, fractions, lecture de l'heure.",
        illustrationEmoji: "🎓"
      },
      examples: [
        {
          title: "Rappel multiplication et division",
          steps: [
            { text: "23 x 3 : on décompose 20 x 3 = 60, puis 3 x 3 = 9, total 69.", illustrationEmoji: "🔢" },
            { text: "18 divisé par 3 = 6 car 3 x 6 = 18.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Rappel fractions et heure",
          steps: [
            { text: "1/2 veut dire une part sur deux parts égales.", illustrationEmoji: "🍕" },
            { text: "Grande aiguille sur 12 = heure pile, sur 6 = et demie.", illustrationEmoji: "🕒" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 12 x 3", answer: "36", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "10x3=30, 2x3=6, total 36." },
        { order: 2, prompt: "Calcule : 24 divisé par 4", answer: "6", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "4 x 6 = 24, donc 24 divisé par 4 = 6." },
        { order: 3, prompt: "Une pizza coupée en 4 parts égales, tu en manges 1. Quelle fraction as-tu mangée ?", answer: "1/4", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "1 part sur 4 s'écrit 1/4." },
        { order: 4, prompt: "La grande aiguille est sur le 12, la petite sur le 7. Quelle heure est-il ?", answer: "7 heures", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Grande aiguille sur 12 = heure pile, ici 7 heures." },
        { order: 5, prompt: "Calcule : la moitié de 24", answer: "12", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "24 divisé par 2 = 12." },
        { order: 6, prompt: "Défi : 32 divisé par 4, puis multiplie le résultat par 3. Quel est le résultat final ?", answer: "24", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "32 divisé par 4 = 8, puis 8 x 3 = 24." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Révision : futur et imparfait",
      xpReward: 26,
      story: {
        hook: "Tu as voyagé cette semaine entre le futur et le passé. Résumons !",
        concreteExample: "Au futur : je serai, j'aurai, j'irai, je ferai. À l'imparfait : je jouais, j'étais, j'avais.",
        reveal: "Le futur parle de ce qui arrivera plus tard, l'imparfait raconte ce qui se passait dans le passé.",
        bridgeToConcept: "Futur simple et imparfait, deux temps essentiels pour raconter des histoires.",
        illustrationEmoji: "🕰️"
      },
      examples: [
        {
          title: "Rappel du futur",
          steps: [
            { text: "Être au futur : je serai, tu seras, il sera.", illustrationEmoji: "🔮" },
            { text: "Aller au futur : j'irai, tu iras, il ira.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Rappel de l'imparfait",
          steps: [
            { text: "Jouer à l'imparfait : je jouais, tu jouais, il jouait.", illustrationEmoji: "⏳" },
            { text: "Avoir à l'imparfait : j'avais, tu avais, il avait.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Demain, je ____ (être) content.", answer: "serai", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec je, le verbe être au futur devient serai.", strictAccents: true },
        { order: 2, prompt: "Complète : Nous ____ (faire) un gâteau ce week-end.", answer: "ferons", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Avec nous, le verbe faire au futur devient ferons.", strictAccents: true },
        { order: 3, prompt: "Complète : Quand j'étais petit, je ____ (jouer) dans le jardin.", answer: "jouais", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec je, l'imparfait de jouer est jouais.", strictAccents: true },
        { order: 4, prompt: "Complète : Nous ____ (être) très fiers de notre travail.", answer: "étions", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Avec nous, l'imparfait de être est étions.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Ils ____ (avoir) beaucoup de jouets quand ils étaient petits.",
          options: ["avaient", "auront", "avait"],
          answer: "avaient",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec ils, l'imparfait de avoir est avaient. Auront est le futur, avait est pour il ou elle.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux verbes. Demain, nous ____ (aller) au parc et hier, nous y ____ (jouer) déjà.", answer: "irons jouions", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Nous irons est le futur du verbe aller (demain), et nous jouions est l'imparfait du verbe jouer (hier).", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Révision : compléments et pluriels",
      xpReward: 26,
      story: {
        hook: "Cette semaine, tu as appris à enrichir tes phrases avec des précisions. Récapitulons !",
        concreteExample: "Un vélo de course (complément du nom), il joue dans le jardin (complément circonstanciel).",
        reveal: "Ces groupes de mots ajoutent des détails utiles à nos phrases, sur le nom ou sur l'action.",
        bridgeToConcept: "Complément du nom, complément circonstanciel, pluriel des noms en -eu/-eau.",
        illustrationEmoji: "🧩"
      },
      examples: [
        {
          title: "Rappel des compléments",
          steps: [
            { text: "Une tasse de café : de café est complément du nom tasse.", illustrationEmoji: "☕" },
            { text: "Il pleut ce matin : ce matin est complément circonstanciel de temps.", illustrationEmoji: "🌧️" }
          ]
        },
        {
          title: "Rappel des pluriels",
          steps: [
            { text: "Un jeu, des jeux : les noms en -eu prennent un x.", illustrationEmoji: "🎲" },
            { text: "Un bateau, des bateaux : les noms en -eau prennent un x.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans un sac à dos, quel est le complément du nom sac ?", answer: "à dos", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "À dos précise le sac, c'est le complément du nom." },
        { order: 2, prompt: "Dans elle chante doucement, quel est le complément circonstanciel ?", answer: "doucement", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Doucement répond à comment, c'est le complément de manière." },
        { order: 3, prompt: "Complète : un château, des ___", answer: "châteaux", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Un château prend un x au pluriel : des châteaux." },
        { order: 4, prompt: "Dans nous partons demain, quel est le complément circonstanciel ?", answer: "demain", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Demain répond à quand, c'est le complément de temps." },
        { order: 5, prompt: "Complète : un cheveu, des ___", answer: "cheveux", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Un cheveu prend un x au pluriel : des cheveux." },
        { order: 6, prompt: "Défi : dans une boîte de chocolats fabriquée avec soin, cite le complément du nom boîte.", answer: "de chocolats", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "De chocolats précise la boîte : c'est le complément du nom." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Révision : a/à, mais/mes, ces/ses, et/est, leur/leurs",
      xpReward: 26,
      story: {
        hook: "Cette semaine, tu as croisé beaucoup de mots jumeaux qui se prononcent pareil. Récapitulons !",
        concreteExample: "A ou à, mais ou mes, ces ou ses, et ou est, leur ou leurs.",
        reveal: "Chaque paire a son propre test : avait pour a/à, opposition pour mais, possession pour mes, désignation pour ces, possession pour ses, et puis pour et, était pour est.",
        bridgeToConcept: "Utilise toujours le test appris pour choisir la bonne orthographe.",
        illustrationEmoji: "🧠"
      },
      examples: [
        {
          title: "Rappel des tests",
          steps: [
            { text: "Il a mangé → il avait mangé : c'est a. Il va à l'école : pas de test avait possible, c'est à.", illustrationEmoji: "🔍" },
            { text: "Balkis et Bayrem → et puis : c'est et. Il est content → il était content : c'est est.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Rappel possessifs",
          steps: [
            { text: "Voici mes crayons (plusieurs à moi). Ces enfants jouent (désignation).", illustrationEmoji: "👉" },
            { text: "Les enfants rangent leurs jouets (pluriel) mais aiment leur maison (singulier).", illustrationEmoji: "🏠" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Il ___ mangé une pomme. (a/à)", answer: "a", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "On peut dire il avait mangé, ça fonctionne. Donc on écrit a, sans accent.", strictAccents: true },
        { order: 2, prompt: "Complète : J'aime le sport, ___ je préfère la lecture. (mais/mes)", answer: "mais", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Mais oppose deux idées ici : j'aime le sport, mais je préfère la lecture.", strictAccents: true },
        { order: 3, prompt: "Complète : Il range ___ affaires. (ces/ses)", answer: "ses", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Ses veut dire les affaires qui appartiennent à lui.", strictAccents: true },
        { order: 4, prompt: "Complète : Ce gâteau ___ délicieux. (et/est)", answer: "est", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "On peut dire ce gâteau était délicieux, ça fonctionne. Donc on écrit est, le verbe être.", strictAccents: true },
        { order: 5, prompt: "Complète : Ils aiment ___ maison. (leur/leurs)", answer: "leur", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Maison est au singulier, donc on écrit leur sans s.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les trois mots. Balkis ___ (a) rangé ___ (ses) affaires, ___ (mais) elle est fatiguée.", answer: "a ses mais", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "A (on peut dire elle avait rangé), ses (les affaires qui sont à elle), mais (opposition entre deux idées).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Révision : tables de 3 et 4, moitiés",
      xpReward: 26,
      story: {
        hook: "Cette semaine, tu as musclé ton cerveau avec des tables et des moitiés. Faisons le point !",
        concreteExample: "3 x 4 = 12, la moitié de 20 = 10. Tu deviens très rapide en calcul !",
        reveal: "Ces automatismes t'aident à calculer plus vite, sans même avoir besoin de poser l'opération.",
        bridgeToConcept: "Révisons ensemble les tables de 3, de 4, et les moitiés.",
        illustrationEmoji: "⚡"
      },
      examples: [
        {
          title: "Rappel des tables",
          steps: [
            { text: "Table de 3 : 3, 6, 9, 12, 15, 18, 21, 24, 27, 30.", illustrationEmoji: "🔢" },
            { text: "Table de 4 : 4, 8, 12, 16, 20, 24, 28, 32, 36, 40.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Rappel des moitiés",
          steps: [
            { text: "La moitié de 30 : 30 divisé par 2 = 15.", illustrationEmoji: "🔍" },
            { text: "La moitié de 50 : 50 divisé par 2 = 25.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 3 x 6", answer: "18", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "3 x 6 = 18." },
        { order: 2, prompt: "Calcule : 4 x 7", answer: "28", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "4 x 7 = 28." },
        { order: 3, prompt: "Calcule : la moitié de 18", answer: "9", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "18 divisé par 2 = 9." },
        { order: 4, prompt: "Calcule : 3 x 9", answer: "27", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "3 x 9 = 27." },
        { order: 5, prompt: "Calcule : la moitié de 60", answer: "30", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "60 divisé par 2 = 30." },
        { order: 6, prompt: "Défi : calcule 4 x 8, puis trouve la moitié du résultat.", answer: "16", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "4 x 8 = 32, la moitié de 32 est 16." }
      ]
    }
  ]
};
