import { DayCurriculum } from "@/models/types";

export const day25: DayCurriculum = {
  dayNumber: 25,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "La révision de la semaine (5)",
      xpReward: 24,
      story: {
        hook: "Imagine que tu es devenu un champion des retenues, de l'heure et du rangement des nombres.",
        concreteExample: "Cette semaine, tu as appris l'addition posée avec retenue, la soustraction posée avec retenue, les demi-heures et à ranger les nombres.",
        reveal: "Aujourd'hui, on mélange un peu tout ça pour vérifier que tu es devenu un vrai champion. Bravo pour cette semaine de travail !",
        bridgeToConcept: "Réviser, c'est réutiliser ce qu'on a appris sur des exemples un peu différents.",
        illustrationEmoji: "🏆"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "28 + 15 = 43 avec une retenue.", illustrationEmoji: "➕" },
            { text: "52 - 27 = 25 avec un emprunt.", illustrationEmoji: "➖" },
            { text: "La grande aiguille sur le 6 : il est et demie.", illustrationEmoji: "🕜" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "16, 34, 56 sont rangés du plus petit au plus grand.", illustrationEmoji: "📶" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule en colonnes : 26 + 17", answer: "43", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Unités : 6 + 7 = 13, on pose 3 et on retient 1. Dizaines : 2 + 1 + 1 = 4. Le résultat est 43." },
        { order: 2, prompt: "Calcule en colonnes : 52 - 28", answer: "24", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Aux unités, 2 est plus petit que 8, on emprunte : 12 - 8 = 4. Aux dizaines : 4 - 2 = 2. Le résultat est 24." },
        { order: 3, prompt: "La petite aiguille est entre le 4 et le 5, la grande est sur le 6. Quelle heure est-il ?", answer: "4 heures et demie", acceptedAnswers: ["4h30"], kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "La grande aiguille sur le 6 veut dire et demie : il est 4 heures et demie." },
        { order: 4, prompt: "Range du plus petit au plus grand : 61, 16, 36.", answer: "16 36 61", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "16 a 1 dizaine, c'est le plus petit, puis 36, puis 61." },
        {
          order: 5,
          type: "mcq",
          prompt: "Calcule en colonnes : 35 + 28",
          options: ["63", "53", "73"],
          answer: "63",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Unités : 5 + 8 = 13, on pose 3 et on retient 1. Dizaines : 3 + 2 + 1 = 6. Le résultat est 63."
        },
        { order: 6, prompt: "Défi : calcule en colonnes 44 - 27, puis dis quelle heure il est si la petite aiguille est entre le 9 et le 10 et la grande sur le 6.", answer: "17 9 heures et demie", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "44 - 27 : aux unités, 4 est plus petit que 7, on emprunte : 14 - 7 = 7. Aux dizaines : 3 - 2 = 1. Le résultat est 17. Et la grande aiguille sur le 6 veut dire et demie : il est 9 heures et demie." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Revoir les verbes de la semaine (5)",
      xpReward: 24,
      story: {
        hook: "Imagine un petit concert où partir, savoir, boire et lire viennent chanter ensemble.",
        concreteExample: "Cette semaine, tu as rencontré les verbes partir, savoir, boire et lire.",
        reveal: "Chaque verbe a sa petite musique, mais tu les connais maintenant un peu mieux. Bravo pour cette semaine de travail !",
        bridgeToConcept: "Réviser la conjugaison, c'est se rappeler la musique de chaque verbe.",
        illustrationEmoji: "🎤"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "Je pars à l'école (verbe partir).", illustrationEmoji: "🚗" },
            { text: "Tu sais nager (verbe savoir).", illustrationEmoji: "🏊" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "Il boit du lait (verbe boire).", illustrationEmoji: "🥛" },
            { text: "Elle lit un livre (verbe lire).", illustrationEmoji: "📖" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je ____ (partir) à l'école.", answer: "pars", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec je, le verbe partir devient pars : je pars à l'école.", strictAccents: true },
        { order: 2, prompt: "Complète : Tu ____ (savoir) compter jusqu'à cent.", answer: "sais", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Avec tu, le verbe savoir devient sais : tu sais compter.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Il ____ (boire) de l'eau.",
          options: ["bois", "boit", "buvons"],
          answer: "boit",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec il, le verbe boire devient boit, avec un t.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Elle ____ (lire) une histoire.", answer: "lit", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Avec elle, le verbe lire devient lit : elle lit une histoire.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Tu ____ (partir) en vacances.",
          options: ["pars", "part", "partez"],
          answer: "pars",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec tu, le verbe partir devient pars.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les quatre mots. Je ____ (partir), tu ____ (savoir), il ____ (boire) et elle ____ (lire).", answer: "pars sais boit lit", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Je pars (partir), tu sais (savoir), il boit (boire) et elle lit (lire). Relis la phrase entière à voix haute.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Familles de mots, infinitif et groupe nominal : la grande révision",
      xpReward: 24,
      story: {
        hook: "Imagine quatre clés différentes qui ouvrent chacune une porte : les familles de mots, l'infinitif, les mots invariables et le groupe nominal.",
        concreteExample: "Regarde : le petit chanteur chante avec son ami dans le jardin. Peux-tu retrouver une famille de mots, un infinitif, un mot invariable et un groupe nominal ?",
        reveal: "Chanteur et chante sont de la même famille que chanter, l'infinitif de chante est chanter, avec est un mot invariable, et le petit chanteur est un groupe nominal. Bravo, tu as utilisé plusieurs clés !",
        bridgeToConcept: "Réviser la grammaire, c'est utiliser plusieurs clés différentes sur la même phrase.",
        illustrationEmoji: "🔑"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "Jouer, joueur, jouet : une famille de mots.", illustrationEmoji: "🎲" },
            { text: "Il danse vient de l'infinitif danser.", illustrationEmoji: "💃" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "Dans ne change jamais : c'est un mot invariable.", illustrationEmoji: "🔒" },
            { text: "La grande maison est un groupe nominal.", illustrationEmoji: "🏠" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Parmi ces mots, lequel fait partie de la famille de lait : laitier ou table ?", answer: "laitier", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Laitier contient lait et parle du lait : il fait partie de la même famille." },
        { order: 2, prompt: "Quel est l'infinitif du verbe dans elle saute ?", answer: "sauter", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Il faut sauter : l'infinitif de saute est sauter." },
        {
          order: 3,
          type: "mcq",
          prompt: "Quel mot est invariable dans la phrase le chat dort sur le tapis ?",
          options: ["sur", "chat", "tapis"],
          answer: "sur",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Sur ne change jamais : c'est un mot invariable."
        },
        { order: 4, prompt: "Dans la phrase les enfants chantent, quel est le groupe nominal ?", answer: "les enfants", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Le déterminant les et le nom enfants forment le groupe nominal les enfants." },
        {
          order: 5,
          type: "mcq",
          prompt: "Quel mot fait partie de la famille de dent ?",
          options: ["dentiste", "fenêtre", "crayon"],
          answer: "dentiste",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Dentiste contient dent et parle des dents."
        },
        { order: 6, prompt: "Défi : dans la phrase la petite fille lit avec sa maman, cite le groupe nominal, l'infinitif du verbe lit, et le mot invariable.", answer: "la petite fille lire avec", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "La petite fille est le groupe nominal, lire est l'infinitif de lit, et avec est un mot invariable." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Les sons et les homophones : la grande révision (3)",
      xpReward: 24,
      story: {
        hook: "Imagine une boîte à outils encore plus grande avec toutes tes nouvelles règles magiques de la semaine.",
        concreteExample: "Cette semaine, tu as appris le son [ã], les homophones ou et où, le g doux et le g dur, et les homophones ces et ses.",
        reveal: "Chaque fois que tu hésites, tu peux utiliser la bonne règle dans ta tête. Bravo, ta boîte à outils s'agrandit encore !",
        bridgeToConcept: "Réviser l'orthographe, c'est se rappeler quelle règle utiliser pour chaque mot.",
        illustrationEmoji: "🧰"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "Un enfant (le son [ã] s'écrit en).", illustrationEmoji: "🧒" },
            { text: "Où est ton cahier ? (un lieu, avec accent)", illustrationEmoji: "📍" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "Une girafe (le g est doux devant i).", illustrationEmoji: "🦒" },
            { text: "Ces enfants jouent (on montre plusieurs enfants).", illustrationEmoji: "👉" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : gr___d (grand). (an ou en)", answer: "an", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Grand s'écrit avec an : g-r-a-n-d.", strictAccents: true },
        { order: 2, prompt: "Complète : Tu préfères le rouge ___ le bleu ? (ou ou où)", answer: "ou", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "On peut dire ou bien : c'est un choix, donc on écrit ou sans accent.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Quel son fait le g dans le mot pigeon ?",
          options: ["dur", "doux"],
          answer: "doux",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Devant e, la lettre g fait un son doux : pigeon.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Léo range ___ jouets. (ces ou ses)", answer: "ses", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Les jouets appartiennent à Léo : on écrit ses avec un s.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le bon mot : ___ est ta maison ?",
          options: ["ou", "où"],
          answer: "où",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Où indique un lieu : on écrit où avec l'accent grave.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les trois mots. L'___fant (enfant) ne sait pas ___ (où) sont ___ (ses) jouets.", answer: "en où ses", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Enfant s'écrit avec en, où indique un lieu avec l'accent grave, et ses montre que les jouets lui appartiennent.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Le grand défi de la semaine (5)",
      xpReward: 24,
      story: {
        hook: "Imagine un grand jeu où tu mélanges tout ce que tu as appris cette semaine en calcul.",
        concreteExample: "Cette semaine, tu as appris à ajouter 11, à soustraire 11, à ajouter 30, et à soustraire 30.",
        reveal: "Aujourd'hui, tu vas utiliser toutes ces méthodes ensemble. Bravo pour cette semaine de calcul mental !",
        bridgeToConcept: "Réviser le calcul mental, c'est choisir la bonne méthode selon le calcul à faire.",
        illustrationEmoji: "🏆"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "14 + 11 = 25 (+10 puis +1).", illustrationEmoji: "➕" },
            { text: "36 + 30 = 66 (on ajoute 3 dizaines).", illustrationEmoji: "➕" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "27 - 11 = 16 (-10 puis -1).", illustrationEmoji: "➖" },
            { text: "58 - 30 = 28 (on enlève 3 dizaines).", illustrationEmoji: "➖" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 22 + 11", answer: "33", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "22 + 10 = 32, puis 32 + 1 = 33." },
        { order: 2, prompt: "Calcule : 39 - 11", answer: "28", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "39 - 10 = 29, puis 29 - 1 = 28." },
        { order: 3, prompt: "Calcule : 26 + 30", answer: "56", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "2 dizaines + 3 dizaines = 5 dizaines. Donc 26 + 30 = 56." },
        { order: 4, prompt: "Calcule : 67 - 30", answer: "37", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "6 dizaines - 3 dizaines = 3 dizaines. Donc 67 - 30 = 37." },
        {
          order: 5,
          type: "mcq",
          prompt: "Calcule : 43 + 11",
          options: ["54", "53", "64"],
          answer: "54",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "43 + 10 = 53, puis 53 + 1 = 54."
        },
        { order: 6, prompt: "Défi : calcule 50 + 30, puis enlève 11 au résultat.", answer: "69", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "50 + 30 = 80, puis 80 - 11 = 69." }
      ]
    }
  ]
};
