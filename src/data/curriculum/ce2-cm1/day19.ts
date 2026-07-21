import { DayCurriculum } from "@/models/types";

export const day19: DayCurriculum = {
  dayNumber: 19,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Calculer une durée",
      xpReward: 24,
      story: {
        hook: "Imagine que tu dois savoir combien de temps a duré ton film ou ta récréation.",
        concreteExample: "Un film commence à 14h et se termine à 16h30. Combien de temps a-t-il duré ?",
        reveal: "De 14h à 16h, il s'écoule 2 heures. Puis de 16h à 16h30, il s'écoule 30 minutes de plus. Le film a duré 2 heures et 30 minutes. Bravo, tu as calculé une durée !",
        bridgeToConcept: "Pour calculer une durée, on compte le temps écoulé entre l'heure de début et l'heure de fin, heure par heure puis minute par minute.",
        illustrationEmoji: "⏱️"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "La récréation commence à 10h et finit à 10h15 : elle dure 15 minutes.", illustrationEmoji: "🔍" },
            { text: "Une leçon commence à 9h et finit à 10h : elle dure 1 heure.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un exemple avec heures et minutes",
          steps: [
            { text: "Un match commence à 15h et finit à 16h45 : de 15h à 16h, 1 heure, puis 45 minutes de plus.", illustrationEmoji: "🔍" },
            { text: "Le match a duré 1 heure et 45 minutes.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Un cours commence à 9h et finit à 10h. Combien de temps dure-t-il ?", answer: "1 heure", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "De 9h à 10h, il s'écoule 1 heure." },
        { order: 2, prompt: "La récréation commence à 10h et finit à 10h20. Combien de temps dure-t-elle ?", answer: "20 minutes", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "De 10h à 10h20, il s'écoule 20 minutes." },
        { order: 3, prompt: "Un film commence à 14h et finit à 16h. Combien de temps dure-t-il ?", answer: "2 heures", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "De 14h à 16h, il s'écoule 2 heures." },
        { order: 4, prompt: "Un match commence à 15h et finit à 16h30. Combien de temps dure-t-il ?", answer: "1 heure et 30 minutes", acceptedAnswers: ["1h30", "1 heure 30 minutes", "1h30min"], kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "De 15h à 16h, 1 heure, puis de 16h à 16h30, 30 minutes de plus : 1 heure et 30 minutes en tout." },
        {
          order: 5,
          type: "mcq",
          prompt: "Un trajet commence à 8h et finit à 8h45. Combien de temps dure-t-il ?",
          options: ["45 minutes", "35 minutes", "1 heure"],
          answer: "45 minutes",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "De 8h à 8h45, il s'écoule 45 minutes."
        },
        { order: 6, prompt: "Défi : un spectacle commence à 20h15 et finit à 21h45. Combien de temps a-t-il duré ?", answer: "1 heure et 30 minutes", acceptedAnswers: ["1h30", "1 heure 30 minutes"], kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "De 20h15 à 21h15, il s'écoule 1 heure, puis de 21h15 à 21h45, 30 minutes de plus : 1 heure et 30 minutes en tout." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le futur simple des verbes pouvoir, voir, vouloir",
      xpReward: 24,
      story: {
        hook: "Découvrons le futur de trois verbes qui changent complètement de forme.",
        concreteExample: "Écoute : demain, je pourrai venir. Tu verras un beau spectacle. Il voudra un cadeau.",
        reveal: "À quoi sert ce futur ? À dire ce qui se passera plus tard. Comment le reconnaître ? Ces verbes ont une racine spéciale au futur (pourr-, verr-, voudr-) suivie des terminaisons habituelles -ai, -as, -a, -ons, -ez, -ont.",
        bridgeToConcept: "Pouvoir au futur : je pourrai, tu pourras, il pourra... Voir au futur : je verrai, tu verras... Vouloir au futur : je voudrai, tu voudras...",
        illustrationEmoji: "🔮"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Demain, je pourrai enfin venir à la fête.", illustrationEmoji: "🎉" },
            { text: "La semaine prochaine, tu verras tes cousins.", illustrationEmoji: "👋" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Ces verbes doublent souvent le r au futur : pourrai, verrai, voudrai.", illustrationEmoji: "🔍" },
            { text: "La terminaison reste toujours la même : -ai, -as, -a, -ons, -ez, -ont.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Demain, je ____ (pouvoir) venir avec toi.", answer: "pourrai", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec je, le futur de pouvoir est pourrai, avec la racine pourr-.", strictAccents: true },
        { order: 2, prompt: "Complète : La semaine prochaine, tu ____ (voir) tes cousins.", answer: "verras", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Avec tu, le futur de voir est verras, avec la racine verr-.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Il ____ (vouloir) sûrement un vélo pour son anniversaire.",
          options: ["voudra", "voudras", "voudrai"],
          answer: "voudra",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec il, le futur de vouloir est voudra. Voudras est pour tu, voudrai est pour je.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Nous ____ (pouvoir) partir tôt demain matin.", answer: "pourrons", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Avec nous, le futur de pouvoir est pourrons, avec la terminaison -ons.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Elles ____ (voir) le feu d'artifice ce soir.",
          options: ["verront", "verrez", "verrons"],
          answer: "verront",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec elles, le futur de voir est verront. Verrez est pour vous, verrons est pour nous.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux verbes. Vous ____ (vouloir) sûrement rester et nous ____ (pouvoir) vous accompagner.", answer: "voudrez pourrons", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Vous voudrez (terminaison -ez) et nous pourrons (terminaison -ons).", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Les pronoms possessifs",
      xpReward: 24,
      story: {
        hook: "Imagine un mot qui remplace à la fois le nom et son possesseur, pour ne pas répéter.",
        concreteExample: "Regarde : c'est mon livre, pas ton livre. Comment dire cela sans répéter le mot livre ?",
        reveal: "C'est le mien, pas le tien. À quoi sert le mien ? Il remplace mon livre en entier. Comment le reconnaître ? C'est un pronom possessif, il indique la possession sans nommer l'objet.",
        bridgeToConcept: "Le pronom possessif remplace un nom précédé d'un déterminant possessif : le mien, la mienne, les miens, le tien, la sienne, le nôtre, le vôtre, le leur...",
        illustrationEmoji: "🙌"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "C'est mon crayon. C'est le mien : le mien remplace mon crayon.", illustrationEmoji: "✏️" },
            { text: "C'est sa trousse. C'est la sienne : la sienne remplace sa trousse.", illustrationEmoji: "🎒" }
          ]
        },
        {
          title: "L'astuce pour bien les reconnaître",
          steps: [
            { text: "Le pronom possessif s'accorde avec l'objet possédé, comme le déterminant.", illustrationEmoji: "🔍" },
            { text: "Le mien (masculin singulier), la mienne (féminin singulier), les miens (masculin pluriel).", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Remplace par un pronom possessif : c'est mon livre. C'est ___.", answer: "le mien", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Le mien remplace mon livre, un nom masculin singulier." },
        { order: 2, prompt: "Remplace par un pronom possessif : c'est ta trousse. C'est ___.", answer: "la tienne", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "La tienne remplace ta trousse, un nom féminin singulier." },
        { order: 3, prompt: "Remplace par un pronom possessif : ce sont ses jouets. Ce sont ___.", answer: "les siens", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Les siens remplace ses jouets, un nom masculin pluriel." },
        { order: 4, prompt: "Remplace par un pronom possessif : c'est notre maison. C'est ___.", answer: "la nôtre", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "La nôtre remplace notre maison, avec un accent circonflexe sur le o." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le bon pronom possessif : ce sont vos affaires. Ce sont ___.",
          options: ["les vôtres", "les tiennes", "les leurs"],
          answer: "les vôtres",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Les vôtres remplace vos affaires, avec un accent circonflexe sur le o."
        },
        { order: 6, prompt: "Défi : remplace les deux groupes par des pronoms possessifs. C'est mon vélo et c'est leur ballon.", answer: "le mien le leur", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Le mien remplace mon vélo, et le leur remplace leur ballon." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Sans ou s'en",
      xpReward: 24,
      story: {
        hook: "Deux mots identiques à l'oreille, l'un est une préposition, l'autre contient un petit pronom.",
        concreteExample: "Regarde : il part ___ dire au revoir. Est-ce que c'est sans ou s'en ?",
        reveal: "On essaie de remplacer par avec : avec dire au revoir ne veut rien dire, car sans est le contraire d'avec. Donc on écrit sans. S'en s'utilise avec un verbe comme s'en aller ou se souvenir : il s'en va, il s'en souvient.",
        bridgeToConcept: "Sans (contraire d'avec) indique un manque. S'en contient le pronom en, devant un verbe (s'en aller, s'en souvenir).",
        illustrationEmoji: "🚶"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Il part sans dire au revoir : sans est le contraire d'avec.", illustrationEmoji: "👋" },
            { text: "Il s'en va tout de suite : s'en va vient du verbe s'en aller.", illustrationEmoji: "🚶" }
          ]
        },
        {
          title: "L'astuce du test",
          steps: [
            { text: "Essaie de remplacer par avec : si le sens s'oppose, c'est sans.", illustrationEmoji: "🔍" },
            { text: "Si un verbe comme aller ou souvenir suit en, c'est s'en.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Il part ___ dire au revoir. (sans/s'en)", answer: "sans", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Sans est le contraire d'avec : ici, il manque le au revoir.", strictAccents: true },
        { order: 2, prompt: "Complète : Il ___ va tout de suite. (sans/s'en)", answer: "s'en", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "S'en va vient du verbe s'en aller, avec le pronom en.", strictAccents: true },
        { order: 3, prompt: "Complète : Elle mange sa soupe ___ sel. (sans/s'en)", answer: "sans", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Sans indique un manque de sel, le contraire d'avec du sel.", strictAccents: true },
        { order: 4, prompt: "Complète : Balkis ___ souvient très bien. (sans/s'en)", answer: "s'en", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "S'en souvient vient du verbe se souvenir, avec le pronom en.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Il part ___ son cartable ce matin.",
          options: ["sans", "s'en"],
          answer: "sans",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Sans indique qu'il manque son cartable, le contraire d'avec.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Il part ___ (sans) manteau et il ___ (s'en) va très vite.", answer: "sans s'en", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Sans manteau (manque, contraire d'avec) et s'en va (verbe s'en aller).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Compter de 4 en 4",
      xpReward: 24,
      story: {
        hook: "Imagine que tu comptes des roues de voitures, en avançant toujours de 4.",
        concreteExample: "Tu commences à 0 et tu comptes de 4 en 4 : 0, 4, 8... Que vient-il après 8 ?",
        reveal: "Après 8, tu ajoutes encore 4 : ça fait 12. Compter de 4 en 4, c'est ajouter 4 à chaque fois.",
        bridgeToConcept: "Compter de 4 en 4 : 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40.",
        illustrationEmoji: "🚗"
      },
      examples: [
        {
          title: "Compter en avançant",
          steps: [
            { text: "0, 4, 8, 12, 16 : chaque nombre ajoute 4 au précédent.", illustrationEmoji: "🔍" },
            { text: "20, 24, 28, 32 : on continue toujours d'ajouter 4.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Compter en reculant",
          steps: [
            { text: "On peut aussi compter à l'envers : 40, 36, 32, 28...", illustrationEmoji: "🔍" },
            { text: "Chaque nombre retire 4 au précédent.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète la suite : 0, 4, 8, ___", answer: "12", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "8 + 4 = 12." },
        { order: 2, prompt: "Complète la suite : 12, 16, ___", answer: "20", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "16 + 4 = 20." },
        { order: 3, prompt: "Complète la suite : 20, 24, ___", answer: "28", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "24 + 4 = 28." },
        { order: 4, prompt: "Complète la suite : 28, 32, ___", answer: "36", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "32 + 4 = 36." },
        {
          order: 5,
          type: "mcq",
          prompt: "Complète la suite à l'envers : 40, 36, ___",
          options: ["32", "30", "34"],
          answer: "32",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "36 - 4 = 32."
        },
        { order: 6, prompt: "Défi : complète la suite : 16, 20, 24, ___, ___", answer: "28 32", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "24 + 4 = 28, puis 28 + 4 = 32." }
      ]
    }
  ]
};
