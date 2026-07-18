import { DayCurriculum } from "@/models/types";

export const day08: DayCurriculum = {
  dayNumber: 8,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Le périmètre du carré et du rectangle",
      xpReward: 20,
      story: {
        hook: "Imagine que tu dois entourer un jardin rectangulaire avec une clôture.",
        concreteExample: "Un jardin rectangulaire mesure 5 mètres de long et 3 mètres de large. Quelle longueur de clôture faut-il ?",
        reveal: "Le périmètre est la somme de tous les côtés : 5 + 3 + 5 + 3 = 16 mètres, ou plus vite (5 + 3) x 2 = 16 mètres.",
        bridgeToConcept: "Périmètre du rectangle = (longueur + largeur) x 2. Périmètre du carré = côté x 4.",
        illustrationEmoji: "📐"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "Un carré de côté 6 cm : périmètre = 6 x 4 = 24 cm.", illustrationEmoji: "🔢" },
            { text: "Un rectangle de 8 cm sur 3 cm : périmètre = (8 + 3) x 2 = 22 cm.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Un jardin de 10 m sur 7 m : périmètre = (10 + 7) x 2 = 34 m.", illustrationEmoji: "🔍" },
            { text: "Un carré de côté 9 cm : périmètre = 9 x 4 = 36 cm.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule le périmètre d'un rectangle de 5 m de long et 3 m de large.", answer: "16", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "(5 + 3) x 2 = 16 m." },
        { order: 2, prompt: "Calcule le périmètre d'un carré de côté 6 cm.", answer: "24", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "6 x 4 = 24 cm." },
        { order: 3, prompt: "Calcule le périmètre d'un rectangle de 8 cm sur 3 cm.", answer: "22", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "(8 + 3) x 2 = 22 cm." },
        { order: 4, prompt: "Calcule le périmètre d'un jardin rectangulaire de 10 m sur 7 m.", answer: "34", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "(10 + 7) x 2 = 34 m." },
        { order: 5, prompt: "Calcule le périmètre d'un carré de côté 9 cm.", answer: "36", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "9 x 4 = 36 cm." },
        { order: 6, prompt: "Défi : un terrain rectangulaire mesure 12 m de long et 8 m de large. Quelle longueur de clôture faut-il pour en faire le tour ?", answer: "40", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "(12 + 8) x 2 = 40 m." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le futur simple des verbes réguliers",
      xpReward: 20,
      story: {
        hook: "Imagine que tu racontes ce que tu feras demain, avec des verbes en -er bien réguliers.",
        concreteExample: "Écoute : demain, je jouerai au football avec mes amis.",
        reveal: "Jouerai est au futur : pour les verbes en -er, on ajoute simplement les terminaisons -ai, -as, -a, -ons, -ez, -ont à l'infinitif complet.",
        bridgeToConcept: "Futur des verbes en -er : infinitif + ai/as/a/ons/ez/ont. Être : je serai. Avoir : j'aurai.",
        illustrationEmoji: "⚽"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "Jouer : je jouerai, tu joueras, il jouera, nous jouerons, vous jouerez, ils joueront.", illustrationEmoji: "🔢" },
            { text: "Être est irrégulier : je serai, tu seras, nous serons.", illustrationEmoji: "⚠️" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Avoir est irrégulier : j'aurai, tu auras, ils auront.", illustrationEmoji: "🔍" },
            { text: "Regarder : nous regarderons le film ce soir.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : demain, je ____ (jouer) au football.", answer: "jouerai", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Jouer est un verbe en -er ; avec je, on ajoute -ai à l'infinitif : jouerai.", strictAccents: true },
        { order: 2, prompt: "Complète : tu ____ (être) content de ce cadeau.", answer: "seras", kindWhenWrong: "Pas grave, on regarde ça ensemble.", explanationWhenWrong: "Être est irrégulier au futur ; avec tu, on écrit seras.", strictAccents: true },
        { order: 3, prompt: "Complète : nous ____ (avoir) une bonne surprise.", answer: "aurons", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Avoir est irrégulier au futur ; avec nous, on écrit aurons.", strictAccents: true },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne réponse : vous ____ (regarder) ce film ce soir.",
          options: ["regarderez", "regarderont", "regardez"],
          answer: "regarderez",
          kindWhenWrong: "Pas grave du tout, on y retourne ensemble.",
          explanationWhenWrong: "Regarder est un verbe en -er ; avec vous, on ajoute -ez à l'infinitif : regarderez.",
          strictAccents: true
        },
        { order: 5, prompt: "Complète : ils ____ (chanter) une belle chanson à la fête.", answer: "chanteront", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Chanter est un verbe en -er ; avec ils, on ajoute -ont à l'infinitif : chanteront.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux verbes. Elle ____ (être) heureuse et elle ____ (avoir) plein de cadeaux.", answer: "sera aura", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble.", explanationWhenWrong: "Être et avoir sont irréguliers au futur : elle sera et elle aura.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Les compléments circonstanciels (lieu, temps, manière)",
      xpReward: 20,
      story: {
        hook: "Imagine des précisions qui répondent à où ?, quand ? ou comment ?, mais qu'on peut déplacer ou supprimer dans la phrase.",
        concreteExample: "Regarde : hier, il a joué au parc avec joie. Que précisent hier, au parc, avec joie ?",
        reveal: "Hier précise quand (temps), au parc précise où (lieu), avec joie précise comment (manière) : ce sont des compléments circonstanciels.",
        bridgeToConcept: "Les compléments circonstanciels précisent le lieu, le temps ou la manière. Contrairement au COD/COI, on peut souvent les déplacer ou les supprimer.",
        illustrationEmoji: "🗺️"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "Il travaille le matin (temps) dans sa chambre (lieu).", illustrationEmoji: "🏠" },
            { text: "Elle chante avec entrain (manière).", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Demain (temps), nous partirons à la montagne (lieu).", illustrationEmoji: "🏔️" },
            { text: "On peut déplacer ces compléments : à la montagne, nous partirons demain.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans hier, il a joué au parc, quel complément indique le temps ?", answer: "hier", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Hier répond à la question quand ? : c'est un complément de temps." },
        { order: 2, prompt: "Dans il a joué au parc avec joie, quel complément indique le lieu ?", answer: "au parc", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Au parc répond à la question où ? : c'est un complément de lieu." },
        { order: 3, prompt: "Dans elle chante avec entrain, quel complément indique la manière ?", answer: "avec entrain", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec entrain répond à la question comment ? : c'est un complément de manière." },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne réponse : dans demain, nous partirons à la montagne, à la montagne est un complément de...",
          options: ["lieu", "temps", "manière"],
          answer: "lieu",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "À la montagne répond à la question où ? : c'est un complément de lieu."
        },
        { order: 5, prompt: "Dans il travaille le matin dans sa chambre, quel complément indique le temps ?", answer: "le matin", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Le matin répond à la question quand ? : c'est un complément de temps." },
        { order: 6, prompt: "Défi : dans ce soir, les enfants joueront joyeusement dans le jardin, cite les trois compléments circonstanciels, dans l'ordre (temps, manière, lieu).", answer: "ce soir joyeusement dans le jardin", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Ce soir (temps), joyeusement (manière), dans le jardin (lieu) sont les trois compléments circonstanciels." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Leur ou leurs",
      xpReward: 20,
      story: {
        hook: "Imagine un mot qui change parfois et qui reste parfois invariable.",
        concreteExample: "Regarde : je ___ donne un cadeau. Est-ce que leur prend un s ?",
        reveal: "Ici, leur est un pronom (comme lui, au pluriel) : il est toujours invariable, sans s. Mais devant un nom, leur est un possessif qui s'accorde : leurs cadeaux (pluriel).",
        bridgeToConcept: "Leur pronom (devant un verbe) est invariable. Leur/leurs possessif (devant un nom) s'accorde en nombre avec le nom.",
        illustrationEmoji: "🎁"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "Je leur donne un cadeau : leur est un pronom, invariable, sans s.", illustrationEmoji: "🎀" },
            { text: "Leur maison est grande (un seul objet possédé) : leur, sans s.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Leurs enfants jouent dehors (plusieurs enfants) : leurs, avec s.", illustrationEmoji: "🔍" },
            { text: "Je leur parle souvent : pronom, toujours invariable.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : je ___ donne un cadeau pour leur anniversaire. (leur/leurs)", answer: "leur", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Ici, leur est un pronom placé devant le verbe donne : il est invariable, sans s.", strictAccents: true },
        { order: 2, prompt: "Complète : ___ maison est très grande. (leur/leurs)", answer: "leur", kindWhenWrong: "Pas grave, on regarde ça ensemble.", explanationWhenWrong: "Une seule maison est possédée : le possessif reste au singulier, leur, sans s.", strictAccents: true },
        { order: 3, prompt: "Complète : ___ enfants jouent dans le jardin. (leur/leurs)", answer: "leurs", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Plusieurs enfants sont possédés : le possessif prend un s, leurs.", strictAccents: true },
        { order: 4, prompt: "Complète : je ___ parle souvent au téléphone. (leur/leurs)", answer: "leur", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Ici, leur est un pronom placé devant le verbe parle : il est invariable, sans s.", strictAccents: true },
        { order: 5, prompt: "Complète : ils ont apporté ___ affaires pour le voyage. (leur/leurs)", answer: "leurs", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Plusieurs affaires sont possédées : le possessif prend un s, leurs.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les trois mots. Je ___ (leur) offre ___ (leurs) cadeaux préférés pour ___ (leur) anniversaire.", answer: "leur leurs leur", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble.", explanationWhenWrong: "Leur offre (pronom, invariable), leurs cadeaux (possessif pluriel, avec s), leur anniversaire (possessif singulier, sans s).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Multiplier un nombre à deux chiffres par un chiffre",
      xpReward: 20,
      story: {
        hook: "Imagine que tu multiplies un nombre à deux chiffres par un chiffre, en le décomposant en dizaines et unités.",
        concreteExample: "Calcule 23 x 4 en décomposant 23 en 20 + 3.",
        reveal: "20 x 4 = 80, 3 x 4 = 12, total 80 + 12 = 92.",
        bridgeToConcept: "Pour multiplier un nombre à deux chiffres par un chiffre, on décompose en dizaines et unités, on multiplie chaque partie, puis on additionne.",
        illustrationEmoji: "🧮"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "34 x 3 : 30 x 3 = 90, 4 x 3 = 12, total 102.", illustrationEmoji: "🔢" },
            { text: "27 x 5 : 20 x 5 = 100, 7 x 5 = 35, total 135.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "42 x 6 : 40 x 6 = 240, 2 x 6 = 12, total 252.", illustrationEmoji: "🔍" },
            { text: "19 x 4 : 10 x 4 = 40, 9 x 4 = 36, total 76.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 23 x 4", answer: "92", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "20 x 4 = 80, 3 x 4 = 12, total 92." },
        { order: 2, prompt: "Calcule : 34 x 3", answer: "102", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "30 x 3 = 90, 4 x 3 = 12, total 102." },
        { order: 3, prompt: "Calcule : 27 x 5", answer: "135", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "20 x 5 = 100, 7 x 5 = 35, total 135." },
        { order: 4, prompt: "Calcule : 42 x 6", answer: "252", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "40 x 6 = 240, 2 x 6 = 12, total 252." },
        { order: 5, prompt: "Calcule : 19 x 4", answer: "76", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "10 x 4 = 40, 9 x 4 = 36, total 76." },
        { order: 6, prompt: "Défi : calcule 45 x 6 en décomposant 45 en 40 + 5.", answer: "270", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "40 x 6 = 240, 5 x 6 = 30, total 270." }
      ]
    }
  ]
};
