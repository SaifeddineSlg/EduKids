import { DayCurriculum } from "@/models/types";

export const day17: DayCurriculum = {
  dayNumber: 17,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Reconnaître les formes géométriques",
      xpReward: 24,
      story: {
        hook: "Autour de toi, il y a des formes partout : la porte, la roue, le toit de la maison.",
        concreteExample: "Regarde : une porte a quatre côtés, une roue est ronde, un toit peut avoir trois côtés.",
        reveal: "La porte est un rectangle, la roue est un cercle, et le toit est un triangle. Chaque forme a son propre nombre de côtés !",
        bridgeToConcept: "On reconnaît une forme géométrique en comptant ses côtés : le carré et le rectangle en ont quatre, le triangle en a trois, et le cercle n'en a aucun.",
        illustrationEmoji: "🔺"
      },
      examples: [
        {
          title: "Compter les côtés",
          steps: [
            { text: "Le carré a quatre côtés égaux.", illustrationEmoji: "🟥" },
            { text: "Le rectangle a quatre côtés, mais pas tous égaux.", illustrationEmoji: "▭" },
            { text: "Le triangle a trois côtés.", illustrationEmoji: "🔺" }
          ]
        },
        {
          title: "La forme sans côtés",
          steps: [
            { text: "Le cercle est tout rond, il n'a pas de côtés.", illustrationEmoji: "⚪" },
            { text: "Une roue de vélo a la forme d'un cercle.", illustrationEmoji: "🚲" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Combien de côtés a un triangle ?", answer: "3", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Un triangle a trois côtés." },
        { order: 2, prompt: "Combien de côtés a un carré ?", answer: "4", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Un carré a quatre côtés égaux." },
        {
          order: 3,
          type: "mcq",
          prompt: "Quelle forme n'a pas de côtés ?",
          options: ["le carré", "le cercle", "le triangle"],
          answer: "le cercle",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Le cercle est tout rond, il n'a pas de côtés."
        },
        { order: 4, prompt: "Une porte a quatre côtés, mais ils ne sont pas tous égaux. Quelle est cette forme ?", answer: "le rectangle", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Un rectangle a quatre côtés, mais ils ne sont pas tous égaux, contrairement au carré." },
        {
          order: 5,
          type: "mcq",
          prompt: "Le toit d'une maison a trois côtés. Quelle est cette forme ?",
          options: ["le triangle", "le cercle", "le carré"],
          answer: "le triangle",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Une forme à trois côtés est un triangle."
        },
        { order: 6, prompt: "Défi : une roue de vélo et un ballon de football ont la même forme. Laquelle ?", answer: "le cercle", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "La roue et le ballon sont tout ronds : ce sont des cercles." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Les verbes en -ir comme finir",
      xpReward: 24,
      story: {
        hook: "Il existe une autre famille de verbes, qui ne se termine pas par -er mais par -ir.",
        concreteExample: "Écoute : je finis mon dessin. Tu finis ton goûter. Il finit son jeu.",
        reveal: "Ces verbes s'appellent des verbes en -ir, comme finir. À quoi servent-ils ? Comme tous les verbes, ils disent une action. Comment les reconnaître ? Au présent, ils se terminent par is, is, it.",
        bridgeToConcept: "Au présent, un verbe en -ir comme finir se termine par is, is, it : je finis, tu finis, il finit.",
        illustrationEmoji: "🏁"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Je finis mon dessin.", illustrationEmoji: "🖍️" },
            { text: "Tu finis ton goûter.", illustrationEmoji: "🍪" },
            { text: "Il finit son jeu.", illustrationEmoji: "🎮" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Avec je et tu, on écrit finis (avec un s).", illustrationEmoji: "🎵" },
            { text: "Avec il ou elle, on écrit finit (avec un t).", illustrationEmoji: "🎵" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je ____ (finir) mon dessin.", answer: "finis", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec je, le verbe finir devient finis : je finis mon dessin. Essaie de le lire à voix haute.", strictAccents: true },
        { order: 2, prompt: "Complète : Tu ____ (finir) ton goûter.", answer: "finis", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Avec tu, comme avec je, le verbe finir devient finis.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Il ____ (finir) son jeu.",
          options: ["finis", "finit", "finissons"],
          answer: "finit",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec il ou elle, le verbe finir devient finit (avec un t) : il finit son jeu.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Elle ____ (choisir) une glace au chocolat.", answer: "choisit", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Avec elle, comme avec il, un verbe en -ir se termine par it : elle choisit.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Tu ____ (choisir) un livre.",
          options: ["choisis", "choisit", "choisissez"],
          answer: "choisis",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec tu, un verbe en -ir se termine par is : tu choisis.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Je ____ (finir) mon repas et il ____ (choisir) un dessert.", answer: "finis choisit", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Je finis (avec je, on écrit finis) et il choisit (avec il, on écrit choisit). Relis la phrase entière à voix haute.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Les synonymes",
      xpReward: 24,
      story: {
        hook: "Certains mots ne se ressemblent pas du tout, mais veulent dire presque la même chose.",
        concreteExample: "Regarde : content et joyeux. Ces deux mots racontent la même émotion.",
        reveal: "Content et joyeux sont des synonymes. À quoi ça sert ? Ça permet de varier les mots pour ne pas toujours répéter la même chose. Comment les reconnaître ? On peut remplacer l'un par l'autre dans la phrase sans changer le sens.",
        bridgeToConcept: "Deux synonymes sont deux mots différents qui veulent dire presque la même chose.",
        illustrationEmoji: "🔁"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Content et joyeux veulent dire la même chose.", illustrationEmoji: "😊" },
            { text: "Rapide et vite racontent la même idée de vitesse.", illustrationEmoji: "🏃" }
          ]
        },
        {
          title: "L'astuce pour les trouver",
          steps: [
            { text: "On peut remplacer un mot par son synonyme dans la phrase.", illustrationEmoji: "🔍" },
            { text: "Si la phrase garde le même sens, ce sont des synonymes.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Quel mot est un synonyme de content ?", answer: "joyeux", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Content et joyeux veulent dire presque la même chose : ce sont des synonymes." },
        { order: 2, prompt: "Quel mot est un synonyme de grand ?", answer: "immense", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Grand et immense veulent dire presque la même chose : ce sont des synonymes." },
        {
          order: 3,
          type: "mcq",
          prompt: "Quel mot est un synonyme de beau ?",
          options: ["joli", "petit", "triste"],
          answer: "joli",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Beau et joli veulent dire presque la même chose : ce sont des synonymes."
        },
        { order: 4, prompt: "Quel mot est un synonyme de content ? (choisis : triste ou heureux)", answer: "heureux", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Content et heureux veulent dire presque la même chose : ce sont des synonymes." },
        {
          order: 5,
          type: "mcq",
          prompt: "Quel mot est un synonyme de rapide ?",
          options: ["lent", "vite", "calme"],
          answer: "vite",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Rapide et vite racontent la même idée de vitesse : ce sont des synonymes."
        },
        { order: 6, prompt: "Défi : cite un synonyme du mot content parmi joyeux, triste et fatigué.", answer: "joyeux", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Joyeux est le seul mot qui veut dire presque la même chose que content." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Le son [j] : ail, eil, ille",
      xpReward: 24,
      story: {
        hook: "Il existe un petit son qui fait comme un saut, comme dans le mot soleil.",
        concreteExample: "Écoute : un soleil, un réveil, une famille. Tu entends ce petit son qui saute à la fin ?",
        reveal: "Ce son s'appelle [j]. Comment s'écrit-il à la fin des mots ? Après a, on écrit ail (travail). Après e, on écrit eil (soleil). Et souvent, on trouve ille (famille).",
        bridgeToConcept: "À la fin d'un mot, le son [j] s'écrit ail, eil ou ille selon la lettre qui précède.",
        illustrationEmoji: "☀️"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Un soleil, un réveil (le son [j] s'écrit eil après e).", illustrationEmoji: "☀️" },
            { text: "Un travail, un rail (le son [j] s'écrit ail après a).", illustrationEmoji: "🚂" }
          ]
        },
        {
          title: "Encore un exemple",
          steps: [
            { text: "Une famille, une bille (le son [j] s'écrit ille).", illustrationEmoji: "👨‍👩‍👧" },
            { text: "On entend toujours le même petit son [j] qui saute.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : un sol___ (soleil). (eil ou ail)", answer: "eil", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Soleil s'écrit avec eil, après la lettre e.", strictAccents: true },
        { order: 2, prompt: "Complète : un trav___ (travail). (ail ou eil)", answer: "ail", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Travail s'écrit avec ail, après la lettre a.", strictAccents: true },
        { order: 3, prompt: "Complète : une fam___e (famille). (ille ou ile)", answer: "ill", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Famille s'écrit avec deux l : fam-ill-e.", strictAccents: true },
        { order: 4, prompt: "Complète : un rév___ (réveil). (eil ou ail)", answer: "eil", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Réveil s'écrit avec eil, après la lettre e.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne écriture du mot qui désigne une petite bille.",
          options: ["bile", "bille"],
          answer: "bille",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Bille s'écrit avec deux l suivis d'un e.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Un rail (ail) brille au sol___ (eil).", answer: "ail eil", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Rail s'écrit avec ail (après a) et soleil s'écrit avec eil (après e).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Soustraire 20 à un nombre",
      xpReward: 24,
      story: {
        hook: "Tu sais déjà enlever 10 à un nombre. Aujourd'hui, tu vas apprendre à enlever 20.",
        concreteExample: "Pour calculer 57 - 20, on enlève simplement 2 dizaines au nombre.",
        reveal: "57, c'est 5 dizaines et 7 unités. En enlevant 2 dizaines, on obtient 3 dizaines et 7 unités, soit 37 !",
        bridgeToConcept: "Pour soustraire 20 à un nombre, on enlève 2 dizaines et les unités ne changent pas.",
        illustrationEmoji: "➖"
      },
      examples: [
        {
          title: "Soustraire 20 à un nombre",
          steps: [
            { text: "45 - 20 : on enlève 2 dizaines à 45.", illustrationEmoji: "➖" },
            { text: "45 - 20 = 25.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Encore un exemple",
          steps: [
            { text: "68 - 20 : on enlève 2 dizaines à 68.", illustrationEmoji: "➖" },
            { text: "68 - 20 = 48.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 39 - 20", answer: "19", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On enlève 2 dizaines à 39 : 39 - 20 = 19." },
        { order: 2, prompt: "Calcule : 56 - 20", answer: "36", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "On enlève 2 dizaines à 56 : 56 - 20 = 36." },
        { order: 3, prompt: "Calcule : 74 - 20", answer: "54", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On enlève 2 dizaines à 74 : 74 - 20 = 54." },
        { order: 4, prompt: "Calcule : 82 - 20", answer: "62", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "On enlève 2 dizaines à 82 : 82 - 20 = 62." },
        { order: 5, prompt: "Calcule : 93 - 20", answer: "73", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "On enlève 2 dizaines à 93 : 93 - 20 = 73." },
        { order: 6, prompt: "Défi : calcule 65 - 20, puis enlève encore 10.", answer: "35", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "65 - 20 = 45, puis 45 - 10 = 35." }
      ]
    }
  ]
};
