import { DayCurriculum } from "@/models/types";

export const day15: DayCurriculum = {
  dayNumber: 15,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "La révision de la semaine (3)",
      xpReward: 24,
      story: {
        hook: "Imagine que tu es devenu un champion des grands nombres, des additions posées et de la monnaie.",
        concreteExample: "Cette semaine, tu as appris les nombres jusqu'à 100, l'addition posée, la monnaie et les longueurs.",
        reveal: "Aujourd'hui, on mélange un peu tout ça pour vérifier que tu es devenu un vrai champion. Bravo pour cette semaine de travail !",
        bridgeToConcept: "Réviser, c'est réutiliser ce qu'on a appris sur des exemples un peu différents.",
        illustrationEmoji: "🏆"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "78, c'est 7 dizaines et 8 unités.", illustrationEmoji: "📦" },
            { text: "22 + 15 = 37 en colonnes.", illustrationEmoji: "➕" },
            { text: "Une pièce de 2 euros et une pièce de 1 euro font 3 euros.", illustrationEmoji: "💶" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "Un crayon de 8 cm est plus court qu'un stylo de 15 cm.", illustrationEmoji: "📏" },
            { text: "Le nombre juste après 99, c'est 100.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Combien de dizaines y a-t-il dans 84 ?", answer: "8", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "84, c'est 8 dizaines et 4 unités." },
        { order: 2, prompt: "Calcule en colonnes : 31 + 24", answer: "55", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Unités : 1 + 4 = 5. Dizaines : 3 + 2 = 5. Le résultat est 55." },
        { order: 3, prompt: "Tu as une pièce de 2 euros et une pièce de 2 euros. Combien d'euros as-tu ?", answer: "4", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "2 euros plus 2 euros, ça fait 4 euros." },
        { order: 4, prompt: "Un stylo mesure 12 cm. Combien de centimètres mesure-t-il ?", answer: "12", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Le stylo mesure 12 centimètres, comme indiqué dans la phrase." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le nombre qui correspond à 7 dizaines et 4 unités.",
          options: ["47", "74", "70"],
          answer: "74",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "7 dizaines font 70, plus 4 unités, ça fait 74."
        },
        { order: 6, prompt: "Défi : calcule en colonnes 42 + 16.", answer: "58", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Unités : 2 + 6 = 8. Dizaines : 4 + 1 = 5. Le résultat est 58." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Revoir les verbes de la semaine (3)",
      xpReward: 24,
      story: {
        hook: "Imagine un petit concert où voir, prendre, vouloir et pouvoir viennent chanter ensemble.",
        concreteExample: "Cette semaine, tu as rencontré voir, prendre, vouloir et pouvoir.",
        reveal: "Chaque verbe a sa petite musique, mais tu les connais maintenant un peu mieux. Bravo pour cette semaine de travail !",
        bridgeToConcept: "Réviser la conjugaison, c'est se rappeler la musique de chaque verbe.",
        illustrationEmoji: "🎤"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "Je vois un bel oiseau (verbe voir).", illustrationEmoji: "👀" },
            { text: "Tu prends ton goûter (verbe prendre).", illustrationEmoji: "🍎" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "Il veut un gâteau (verbe vouloir).", illustrationEmoji: "🍰" },
            { text: "Elle peut nager (verbe pouvoir).", illustrationEmoji: "🏊" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je ____ (voir) un arc-en-ciel.", answer: "vois", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec je, le verbe voir devient vois : je vois un arc-en-ciel.", strictAccents: true },
        { order: 2, prompt: "Complète : Tu ____ (prendre) ton cartable.", answer: "prends", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Avec tu, le verbe prendre devient prends : tu prends ton cartable.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Il ____ (vouloir) un jouet.",
          options: ["veux", "veut", "voulons"],
          answer: "veut",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec il, le verbe vouloir devient veut : il veut un jouet.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Elle ____ (pouvoir) courir vite.", answer: "peut", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Avec elle, le verbe pouvoir devient peut : elle peut courir vite.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Tu ____ (voir) la lune.",
          options: ["vois", "voit", "voyez"],
          answer: "vois",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec tu, le verbe voir devient vois : tu vois la lune.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les trois mots. Je ____ (voir) un cadeau, je ____ (vouloir) l'ouvrir et je ____ (pouvoir) enfin le prendre.", answer: "vois veux peux", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Je vois (voir), je veux (vouloir) et je peux (pouvoir) : avec je, ces trois verbes se terminent tous par un x ou un s. Relis la phrase entière à voix haute.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Pronoms, ponctuation et adjectifs : la grande révision",
      xpReward: 24,
      story: {
        hook: "Imagine trois clés différentes qui ouvrent chacune une porte : les pronoms, la ponctuation et l'accord des adjectifs.",
        concreteExample: "Regarde : Léo a-t-il de grands amis ? Peux-tu retrouver le pronom qui remplace Léo, la ponctuation, et l'accord de grands ?",
        reveal: "Il remplace Léo, le point d'interrogation termine la question, et grands s'accorde avec amis au pluriel. Bravo, tu as utilisé les trois clés !",
        bridgeToConcept: "Réviser la grammaire, c'est utiliser plusieurs clés différentes sur la même phrase.",
        illustrationEmoji: "🔑"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "Les enfants jouent. -> Ils jouent (pronom).", illustrationEmoji: "🙋" },
            { text: "Quelle belle journée ! (point d'exclamation)", illustrationEmoji: "❗" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "Des petits chats (l'adjectif petit prend un s au pluriel).", illustrationEmoji: "🐱" },
            { text: "Il ne joue pas (phrase négative).", illustrationEmoji: "🚫" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Par quel pronom peux-tu remplacer Léa dans Léa lit ?", answer: "elle", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Léa est une fille toute seule, on la remplace par elle." },
        { order: 2, prompt: "Bravo, tu as gagné : point d'interrogation ou point d'exclamation ?", answer: "point d'exclamation", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Cette phrase montre la joie, on met un point d'exclamation." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis l'accord correct : des ___ maisons (grand).",
          options: ["grand", "grande", "grandes"],
          answer: "grandes",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Maisons est féminin pluriel, donc l'adjectif devient grandes."
        },
        { order: 4, prompt: "Complète la phrase négative : Il ____ chante pas.", answer: "ne", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "On encadre le verbe avec ne et pas : il ne chante pas." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le pronom qui remplace les filles dans les filles dansent.",
          options: ["ils", "elles", "nous"],
          answer: "elles",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Les filles sont plusieurs et toutes féminines, on les remplace par elles."
        },
        { order: 6, prompt: "Défi : écris au pluriel : un beau dessin -> des ___ dessins.", answer: "beaux", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Beau devient beaux au pluriel : c'est une exception, on ajoute un x et non un s." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Les sons et les homophones : la grande révision",
      xpReward: 24,
      story: {
        hook: "Imagine une boîte à outils avec toutes tes nouvelles règles magiques de la semaine.",
        concreteExample: "Cette semaine, tu as appris le son [ɛ̃], le son [wa], et les homophones a/à et et/est.",
        reveal: "Chaque fois que tu hésites, tu peux utiliser la bonne règle dans ta tête. Bravo, ta boîte à outils s'agrandit encore !",
        bridgeToConcept: "Réviser l'orthographe, c'est se rappeler quelle règle utiliser pour chaque mot.",
        illustrationEmoji: "🧰"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "Un lapin (le son [ɛ̃] s'écrit in).", illustrationEmoji: "🐰" },
            { text: "Un roi (le son [wa] s'écrit oi).", illustrationEmoji: "👑" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "Il a un vélo (on peut dire il avait).", illustrationEmoji: "🚲" },
            { text: "Le chat est gentil (on peut dire il était).", illustrationEmoji: "🐱" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : un lap___ (lapin). (in ou ain)", answer: "in", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Lapin s'écrit avec in à la fin.", strictAccents: true },
        { order: 2, prompt: "Complète : le r___ (roi). (oi ou ai)", answer: "oi", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Roi s'écrit avec oi, le son [wa].", strictAccents: true },
        { order: 3, prompt: "Complète : Il ___ un ballon. (a ou à)", answer: "a", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "On peut dire il avait un ballon, donc on écrit a sans accent.", strictAccents: true },
        { order: 4, prompt: "Complète : Elle va ___ l'école. (a ou à)", answer: "à", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "On ne peut pas dire elle va avait l'école, donc on écrit à avec un accent grave.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le bon mot : Le chat ___ gentil.",
          options: ["et", "est"],
          answer: "est",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "On peut dire le chat était gentil, donc on écrit est.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. J'aime le pain ___ (et) le fromage : le repas ___ (est) prêt.", answer: "et est", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Et relie deux mots (on ne peut pas dire était) et est vient du verbe être (on peut dire était).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Le grand défi de la semaine (3)",
      xpReward: 24,
      story: {
        hook: "Imagine un grand jeu où tu mélanges tout ce que tu as appris cette semaine en calcul.",
        concreteExample: "Cette semaine, tu as appris la moitié d'un nombre, ajouter 9, soustraire 9, et les compléments à 20.",
        reveal: "Aujourd'hui, tu vas utiliser toutes ces méthodes ensemble. Bravo pour cette semaine de calcul mental !",
        bridgeToConcept: "Réviser le calcul mental, c'est choisir la bonne méthode selon le calcul à faire.",
        illustrationEmoji: "🏆"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "La moitié de 12, c'est 6.", illustrationEmoji: "✂️" },
            { text: "8 + 9 = 17 (ajouter 10 puis enlever 1).", illustrationEmoji: "➕" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "23 - 9 = 14 (enlever 10 puis ajouter 1).", illustrationEmoji: "➖" },
            { text: "Pour aller de 16 à 20, il faut ajouter 4.", illustrationEmoji: "🎯" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Quelle est la moitié de 8 ?", answer: "4", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "4 + 4 = 8, donc la moitié de 8 est 4." },
        { order: 2, prompt: "Calcule : 13 + 9", answer: "22", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "13 + 10 = 23, puis 23 - 1 = 22. Donc 13 + 9 = 22." },
        { order: 3, prompt: "Calcule : 25 - 9", answer: "16", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "25 - 10 = 15, puis 15 + 1 = 16. Donc 25 - 9 = 16." },
        { order: 4, prompt: "Combien faut-il ajouter à 15 pour arriver à 20 ?", answer: "5", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "15 + 5 = 20, donc le complément de 15 est 5." },
        { order: 5, prompt: "Quelle est la moitié de 18 ?", answer: "9", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "9 + 9 = 18, donc la moitié de 18 est 9." },
        { order: 6, prompt: "Défi : calcule la moitié de 16, puis ajoute 9 au résultat.", answer: "17", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "La moitié de 16 est 8, puis 8 + 9 = 17." }
      ]
    }
  ]
};
