import { DayCurriculum } from "@/models/types";

export const day10: DayCurriculum = {
  dayNumber: 10,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "La révision de la semaine (2)",
      xpReward: 24,
      story: {
        hook: "Imagine que tu es un champion des nombres qui a appris encore plus de choses cette semaine.",
        concreteExample: "Cette semaine, tu as appris les dizaines et les unités, la soustraction, les nombres pairs et impairs, et à résoudre des petits problèmes.",
        reveal: "Aujourd'hui, on mélange un peu tout ça pour vérifier que tu es devenu un vrai champion. Bravo pour cette semaine de travail !",
        bridgeToConcept: "Réviser, c'est réutiliser ce qu'on a appris sur des exemples un peu différents.",
        illustrationEmoji: "🏆"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "36, c'est 3 dizaines et 6 unités.", illustrationEmoji: "🔢" },
            { text: "9 - 4 = 5.", illustrationEmoji: "➖" }
          ]
        },
        {
          title: "Comparer pour vérifier",
          steps: [
            { text: "8 est un nombre pair.", illustrationEmoji: "🔢" },
            { text: "Léo a 5 billes, on lui en donne 2 : 5 + 2 = 7.", illustrationEmoji: "➕" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Combien de dizaines y a-t-il dans 58 ?", answer: "5", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "58, c'est 5 dizaines et 8 unités." },
        { order: 2, prompt: "Calcule : 14 - 6", answer: "8", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "14 - 6 = 8." },
        { order: 3, prompt: "Le nombre 11 est-il pair ou impair ?", answer: "impair", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "11 se termine par 1, c'est un nombre impair." },
        { order: 4, prompt: "Combien faut-il ajouter à 8 pour faire 10 ?", answer: "2", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "8 + 2 = 10, donc il faut ajouter 2." },
        { order: 5, prompt: "Nina a 5 billes. Sa mamie lui en donne 4 de plus. Combien Nina a-t-elle de billes ?", answer: "9", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "On donne des billes en plus, donc on additionne : 5 + 4 = 9." },
        { order: 6, prompt: "Défi : calcule 20 - 10, puis ajoute 3.", answer: "13", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "20 - 10 = 10, puis 10 + 3 = 13." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Revoir les verbes de la semaine (2)",
      xpReward: 24,
      story: {
        hook: "Imagine un grand concert où nous, vous, ils, elles, faire et dire viennent chanter ensemble.",
        concreteExample: "Cette semaine, tu as rencontré nous et vous avec les verbes en -er, ils et elles, et les verbes faire et dire.",
        reveal: "Chaque forme a sa petite musique, mais tu les connais maintenant un peu mieux. Bravo pour cette semaine de travail !",
        bridgeToConcept: "Réviser la conjugaison, c'est se rappeler la musique de chaque forme.",
        illustrationEmoji: "🎤"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "Nous jouons ensemble.", illustrationEmoji: "⚽" },
            { text: "Ils chantent une belle chanson.", illustrationEmoji: "🎤" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "Je fais un dessin.", illustrationEmoji: "🎨" },
            { text: "Elle dit bonjour.", illustrationEmoji: "💬" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Nous ____ (jouer) dans le jardin.", answer: "jouons", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec nous, un verbe en -er se termine par -ons : nous jouons.", strictAccents: true },
        { order: 2, prompt: "Complète : Vous ____ (chanter) très bien.", answer: "chantez", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Avec vous, un verbe en -er se termine par -ez : vous chantez.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Ils ____ (regarder) un film.",
          options: ["regarde", "regardent", "regardons"],
          answer: "regardent",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec ils, un verbe en -er se termine par -ent : ils regardent.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Je ____ (faire) un gâteau.", answer: "fais", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Avec je, le verbe faire devient fais : je fais un gâteau.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Elle ____ (dire) bonjour.",
          options: ["dis", "dit", "disons"],
          answer: "dit",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec elle, le verbe dire devient dit (avec un t) : elle dit bonjour.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les trois mots. Nous ____ (jouer) pendant qu'ils ____ (chanter) et qu'elle ____ (dire) bravo.", answer: "jouons chantent dit", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Nous jouons (-ons), ils chantent (-ent) et elle dit (avec un t). Relis la phrase entière pour bien la sentir.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Adjectifs, déterminants et phrases : la grande révision",
      xpReward: 24,
      story: {
        hook: "Imagine quatre nouvelles clés apprises cette semaine : l'adjectif, le déterminant, la phrase, et l'accord au féminin.",
        concreteExample: "Regarde : Une jolie fleur pousse. Peux-tu retrouver l'adjectif, le déterminant, et dire si la phrase est bien écrite ?",
        reveal: "Jolie est l'adjectif, une est le déterminant, et la phrase commence par une majuscule et finit par un point : elle est bien écrite. Bravo, tu as utilisé toutes les clés !",
        bridgeToConcept: "Réviser la grammaire, c'est utiliser plusieurs clés différentes sur la même phrase.",
        illustrationEmoji: "🔑"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "Un grand chien court : grand est l'adjectif, un est le déterminant.", illustrationEmoji: "🐶" },
            { text: "Les enfants jouent : les est le déterminant.", illustrationEmoji: "🧒" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "Le chat dort. -> phrase bien écrite, avec majuscule et point.", illustrationEmoji: "🐱" },
            { text: "Un petit garçon, une petite fille : l'adjectif petit devient petite au féminin.", illustrationEmoji: "👧" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans la phrase un grand chien court, quel est l'adjectif ?", answer: "grand", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Grand décrit le chien, c'est l'adjectif." },
        { order: 2, prompt: "Dans la phrase les enfants jouent, quel est le déterminant ?", answer: "les", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Les annonce le nom enfants, c'est le déterminant." },
        {
          order: 3,
          type: "mcq",
          prompt: "Quelle phrase respecte bien les règles d'écriture ?",
          options: ["le chat dort.", "Le chat dort", "Le chat dort."],
          answer: "Le chat dort.",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Une phrase bien écrite commence par une majuscule et se termine par un point."
        },
        { order: 4, prompt: "Accorde l'adjectif : un petit chat, une petit_ chatte.", answer: "petite", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Chatte est féminin, on ajoute un e à l'adjectif : petite." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le déterminant parmi ces mots : joli, des, chante",
          options: ["joli", "des", "chante"],
          answer: "des",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Des annonce un nom au pluriel, c'est le déterminant."
        },
        { order: 6, prompt: "Défi : dans la phrase une jolie fleur pousse, cite l'adjectif et le déterminant.", answer: "jolie une", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Jolie est l'adjectif (il décrit fleur) et une est le déterminant (il annonce fleur)." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Les sons et les accents : la grande révision",
      xpReward: 24,
      story: {
        hook: "Imagine une nouvelle boîte à outils avec les règles apprises cette semaine : le son [s], le son [z], les accents, et le pluriel en x.",
        concreteExample: "Cette semaine, tu as appris s, ss et c pour le son [s], le s entre deux voyelles pour le son [z], les accents é, è et ê, et le pluriel en x.",
        reveal: "Chaque fois que tu hésites, tu peux utiliser la bonne règle dans ta tête. Bravo, ta boîte à outils s'agrandit encore !",
        bridgeToConcept: "Réviser l'orthographe, c'est se rappeler quelle règle utiliser pour chaque mot.",
        illustrationEmoji: "🧰"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "Le soleil (s), la tasse (ss) : deux écritures du son [s].", illustrationEmoji: "☀️" },
            { text: "La rose, la maison : le s se prononce [z].", illustrationEmoji: "🌹" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "Un été (é), une forêt (ê) : deux accents différents.", illustrationEmoji: "🎩" },
            { text: "Un chou, des choux : le pluriel en x.", illustrationEmoji: "🥬" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : le ___oleil (soleil). (s ou ss)", answer: "s", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Au début d'un mot, le son [s] s'écrit s : soleil.", strictAccents: true },
        { order: 2, prompt: "Complète : une ro___e (rose). (s ou ss)", answer: "s", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Rose s'écrit avec un seul s, qui se prononce [z] entre deux voyelles.", strictAccents: true },
        { order: 3, prompt: "Écris le mot correctement : ete (avec l'accent qui manque).", answer: "été", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "On écrit été avec un accent aigu sur les deux e : été.", strictAccents: true },
        { order: 4, prompt: "Écris au pluriel : un chou -> des ___", answer: "choux", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Chou fait partie des mots en -ou qui prennent un x au pluriel : des choux.", strictAccents: true },
        { order: 5, prompt: "Complète : une ta___e (tasse). (s ou ss)", answer: "ss", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Entre deux voyelles, pour garder le son [s], on écrit ss : tasse.", strictAccents: true },
        { order: 6, prompt: "Défi : complète et écris correctement. Le ___oleil (s) brille sur la fenetre (avec l'accent qui manque).", answer: "s fenêtre", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Soleil s'écrit avec un s et fenêtre s'écrit avec un accent circonflexe. Relis bien les deux mots l'un après l'autre.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Le grand défi de la semaine (2)",
      xpReward: 24,
      story: {
        hook: "Imagine un grand jeu où tu mélanges tout ce que tu as appris cette semaine en calcul.",
        concreteExample: "Cette semaine, tu as appris à ajouter 10, à enlever 10, à trouver les compléments à 10, et à ajouter 3.",
        reveal: "Aujourd'hui, tu vas utiliser toutes ces méthodes ensemble. Bravo pour cette semaine de calcul mental !",
        bridgeToConcept: "Réviser le calcul mental, c'est choisir la bonne méthode selon le calcul à faire.",
        illustrationEmoji: "🏆"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "23 + 10 = 33.", illustrationEmoji: "➕" },
            { text: "Le complément à 10 de 6 est 4.", illustrationEmoji: "🥚" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "45 - 10 = 35.", illustrationEmoji: "➖" },
            { text: "7 + 3 = 10.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 34 + 10", answer: "44", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Les unités restent 4, les dizaines passent de 3 à 4 : 34 + 10 = 44." },
        { order: 2, prompt: "Calcule : 47 - 10", answer: "37", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Les unités restent 7, les dizaines passent de 4 à 3 : 47 - 10 = 37." },
        { order: 3, prompt: "Combien faut-il ajouter à 3 pour faire 10 ?", answer: "7", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "3 + 7 = 10, donc il faut ajouter 7." },
        { order: 4, prompt: "Calcule : 9 + 3", answer: "12", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Après 9, on avance de 3 : 10, 11, 12." },
        { order: 5, prompt: "Calcule : 26 + 10", answer: "36", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Les unités restent 6, les dizaines passent de 2 à 3 : 26 + 10 = 36." },
        { order: 6, prompt: "Défi : calcule le complément à 10 de 4, puis ajoute 10.", answer: "16", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Le complément à 10 de 4 est 6, puis 6 + 10 = 16." }
      ]
    }
  ]
};
