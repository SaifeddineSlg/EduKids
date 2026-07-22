import { DayCurriculum } from "@/models/types";

export const day25: DayCurriculum = {
  dayNumber: 25,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "La grande révision de la semaine",
      xpReward: 26,
      story: {
        hook: "Imagine que tu es un champion des nombres qui a encore appris plein de choses cette semaine.",
        concreteExample: "Cette semaine, tu as appris à lire le quart d'heure, à arrondir un nombre, à poser une division avec reste, et à lire les nombres jusqu'à 100 000.",
        reveal: "Aujourd'hui, on mélange un peu tout ça pour vérifier que tu es devenu un vrai champion. Bravo pour cette semaine de travail !",
        bridgeToConcept: "Réviser, c'est réutiliser ce qu'on a appris sur des exemples un peu différents.",
        illustrationEmoji: "🏆"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "Petite aiguille entre le 3 et le 4, grande sur le 3 : il est 3 heures et quart.", illustrationEmoji: "🕒" },
            { text: "58 arrondi à la dizaine la plus proche donne 60.", illustrationEmoji: "🔢" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "57 : 4 = 14 reste 1 (division posée avec reste).", illustrationEmoji: "➗" },
            { text: "45326 se lit quarante-cinq mille trois cent vingt-six.", illustrationEmoji: "🔟" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Petite aiguille entre le 6 et le 7, grande aiguille sur le 9. Quelle heure est-il ?", answer: "7 heures moins le quart", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "La grande aiguille sur le 9 annonce l'heure suivante moins le quart : il est 7 heures moins le quart." },
        { order: 2, prompt: "Arrondis 84 à la dizaine la plus proche.", answer: "80", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "84 a un 4 aux unités, plus petit que 5 : on arrondit à 80." },
        { order: 3, prompt: "Calcule 39 : 5 et donne le quotient et le reste.", answer: "7 reste 4", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "5 tient 7 fois dans 39 (5 x 7 = 35), et il reste 39 - 35 = 4 : quotient 7, reste 4." },
        { order: 4, prompt: "Combien de milliers dans le nombre 62 415 ?", answer: "2", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "62415, c'est 6 dizaines de mille, 2 milliers, 4 centaines, 1 dizaine et 5 unités." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le plus grand nombre parmi ces trois.",
          options: ["54210", "54120", "54201"],
          answer: "54210",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Les dizaines de mille et les milliers sont égaux (5 et 4), et en comparant les centaines et les dizaines, 54210 est le plus grand."
        },
        { order: 6, prompt: "Défi : pose et calcule 68 : 5, puis arrondis le quotient à la dizaine la plus proche.", answer: "13 reste 3 arrondi 10", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "5 tient 13 fois dans 68 (5 x 13 = 65), reste 3. Le quotient 13 a un 3 aux unités, plus petit que 5 : arrondi à 10." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Revoir vouloir, pouvoir, l'impératif, être et le futur de la semaine",
      xpReward: 26,
      story: {
        hook: "Imagine un grand carnet où tu notes toutes les nouvelles conjugaisons de cette semaine.",
        concreteExample: "Cette semaine, tu as rencontré le présent de vouloir et pouvoir, l'impératif des verbes en -er, le passé composé avec être des verbes comme partir et sortir, et le futur simple de voir et prendre.",
        reveal: "Chaque temps et chaque verbe a sa propre musique, et tu la connais maintenant un peu mieux. Bravo pour cette semaine de travail !",
        bridgeToConcept: "Réviser la conjugaison, c'est se rappeler la musique complète de chaque temps et de chaque verbe.",
        illustrationEmoji: "🎼"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "Je veux un jus d'orange (présent de vouloir).", illustrationEmoji: "🥤" },
            { text: "Range ta chambre ! (impératif d'un verbe en -er).", illustrationEmoji: "🧹" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "Elle est partie tôt (passé composé avec être).", illustrationEmoji: "🚪" },
            { text: "Demain, je verrai mes cousins (futur simple de voir).", illustrationEmoji: "🔮" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Tu ____ (pouvoir) venir chez moi samedi.", answer: "peux", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Avec tu, pouvoir se termine par un x : tu peux, jamais tu peut.", strictAccents: true },
        { order: 2, prompt: "Complète à l'impératif (nous) : ____ (chanter) une belle chanson !", answer: "chantons", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "À l'impératif avec nous, on ajoute la terminaison -ons : chantons.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Ils ____ (sortir) dans la cour.",
          options: ["sont sortis", "ont sorti", "sont sorti"],
          answer: "sont sortis",
          kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.",
          explanationWhenWrong: "Sortir se conjugue avec être, et le participe passé s'accorde avec le sujet pluriel : sont sortis.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Demain, nous ____ (prendre) le bus pour aller à la piscine.", answer: "prendrons", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Le futur de prendre garde le radical prendr- : avec nous, on écrit prendrons.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Elle ____ (vouloir) un chien pour son anniversaire.",
          options: ["veut", "veux", "veulent"],
          answer: "veut",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.",
          explanationWhenWrong: "Avec elle, vouloir devient veut, sans x à la fin.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les trois mots. ____ (écouter) bien la maîtresse (à tu), elle ____ (partir) tôt hier, et demain je ____ (voir) mes cousins.", answer: "écoute est partie verrai", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "Écoute est à l'impératif, elle est partie est au passé composé avec être, et je verrai est au futur simple : bien distinguer les trois formes.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Possessifs, compléments du nom, synonymes et antonymes : la grande révision",
      xpReward: 26,
      story: {
        hook: "Imagine une grande boîte à outils remplie de tout ce que tu as appris cette semaine sur les mots et les phrases.",
        concreteExample: "Regarde : Mon sac de sport est grand, pas petit. Peux-tu retrouver l'adjectif possessif, le complément du nom, et un antonyme du mot petit ?",
        reveal: "Mon est l'adjectif possessif, de sport est le complément du nom sac, et grand est un antonyme (contraire) de petit. Bravo, tu as utilisé toutes tes connaissances !",
        bridgeToConcept: "Réviser la grammaire, c'est utiliser plusieurs outils différents sur la même phrase.",
        illustrationEmoji: "🧰"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "C'est ma trousse : ma est l'adjectif possessif.", illustrationEmoji: "🖊️" },
            { text: "Une table en bois : en bois est le complément du nom table.", illustrationEmoji: "🪵" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "Content et heureux sont des synonymes.", illustrationEmoji: "😊" },
            { text: "Grand et petit sont des antonymes.", illustrationEmoji: "⚖️" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Voici ___ maison. (la maison est à moi) (mon/ma/mes)", answer: "ma", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Maison est féminin singulier, donc on écrit ma." },
        { order: 2, prompt: "Dans la phrase Le chapeau de paille est joli, quel est le complément du nom chapeau ?", answer: "de paille", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "De paille précise la matière du chapeau : c'est le complément du nom." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis le synonyme du mot joli.",
          options: ["laid", "beau", "triste"],
          answer: "beau",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Joli et beau ont le même sens : ce sont des synonymes."
        },
        { order: 4, prompt: "Trouve l'antonyme du mot chaud.", answer: "froid", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Froid est le contraire de chaud : c'est un antonyme." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le bon possessif : Elle promène ___ chien. (le chien est à elle)",
          options: ["son", "sa", "ses"],
          answer: "son",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Chien est masculin singulier, donc on écrit son, même si la possesseuse est une fille."
        },
        { order: 6, prompt: "Défi : dans la phrase Mon sac de sport est immense, pas minuscule, cite l'adjectif possessif, le complément du nom, et un antonyme du mot minuscule.", answer: "mon de sport immense", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Mon est l'adjectif possessif, de sport est le complément du nom sac, et immense est un antonyme de minuscule." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Toutes les règles de la semaine ensemble",
      xpReward: 26,
      story: {
        hook: "Imagine une boîte à outils avec toutes tes nouvelles règles magiques de la semaine.",
        concreteExample: "Cette semaine, tu as appris ce/se, c'est/s'est, peu/peux/peut, et la/l'a.",
        reveal: "Chaque fois que tu hésites, tu peux utiliser la bonne règle dans ta tête. Bravo, ta boîte à outils s'agrandit encore !",
        bridgeToConcept: "Réviser l'orthographe, c'est se rappeler quelle règle utiliser pour chaque mot.",
        illustrationEmoji: "🧰"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "Ce chat dort sur le tapis (ce est suivi d'un nom).", illustrationEmoji: "🐱" },
            { text: "C'est mon cahier (on peut dire c'était mon cahier).", illustrationEmoji: "📒" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "Il mange peu le matin (peu, contraire de beaucoup).", illustrationEmoji: "🍳" },
            { text: "Il l'a appelée hier (on peut dire il l'avait appelée).", illustrationEmoji: "🔍" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Elle ___ prépare pour l'école. (ce/se)", answer: "se", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Prépare est un verbe, et on peut dire je me prépare : on écrit donc se.", strictAccents: true },
        { order: 2, prompt: "Complète : Il ___ blessé au genou. (c'est/s'est)", answer: "s'est", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "On peut dire je me suis blessé au genou, donc on écrit s'est.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis le bon mot : Il ___ (pouvoir) résoudre ce problème.",
          options: ["peu", "peux", "peut"],
          answer: "peut",
          kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.",
          explanationWhenWrong: "Avec il, pouvoir devient peut, avec un t à la fin.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Elle ___ rangée dans le tiroir. (la/l'a)", answer: "l'a", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "On peut dire elle l'avait rangée dans le tiroir, donc on écrit l'a.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le bon mot : ___ enfant rit aux éclats.",
          options: ["ce", "se"],
          answer: "ce",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.",
          explanationWhenWrong: "Enfant est un nom, donc on écrit ce devant lui.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les trois mots. ___ elle qui ___ trompée de chemin, et pourtant elle ___ (pouvoir) demander son chemin. (c'est/s'est, peu/peux/peut)", answer: "c'est s'est peut", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "C'était elle qui... fonctionne, donc c'est ; je me suis trompée fonctionne, donc s'est ; et avec elle, pouvoir devient peut.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Le grand défi de la semaine",
      xpReward: 26,
      story: {
        hook: "Imagine un grand jeu où tu mélanges tout ce que tu as appris cette semaine en calcul mental.",
        concreteExample: "Cette semaine, tu as soustrait 9, ajouté 11, trouvé des compléments à la dizaine supérieure, et multiplié par 10 et par 100.",
        reveal: "Aujourd'hui, tu vas utiliser toutes ces méthodes ensemble. Bravo pour cette semaine de calcul mental !",
        bridgeToConcept: "Réviser le calcul mental, c'est choisir la bonne méthode selon le calcul à faire.",
        illustrationEmoji: "🏆"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "27 - 9 : on fait 27 - 10 = 17, puis 17 + 1 = 18.", illustrationEmoji: "➖" },
            { text: "34 + 11 : on fait 34 + 10 = 44, puis 44 + 1 = 45.", illustrationEmoji: "➕" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "Le complément de 46 pour arriver à 50 est 4.", illustrationEmoji: "🧮" },
            { text: "34 x 10 = 340 (on ajoute un zéro).", illustrationEmoji: "✖️" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 42 - 9", answer: "33", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "42 - 10 = 32, puis 32 + 1 = 33." },
        { order: 2, prompt: "Calcule : 26 + 11", answer: "37", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "26 + 10 = 36, puis 36 + 1 = 37." },
        { order: 3, prompt: "Combien faut-il ajouter à 63 pour arriver à 70 ?", answer: "7", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "63 + 7 = 70 : il faut ajouter 7." },
        { order: 4, prompt: "Calcule : 48 x 10", answer: "480", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "On ajoute un zéro à 48 : 480." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le bon résultat de 65 x 100.",
          options: ["650", "6500", "65"],
          answer: "6500",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "On ajoute deux zéros à 65 : 6500."
        },
        { order: 6, prompt: "Défi : calcule 91 - 9, puis ajoute 11 au résultat.", answer: "93", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "91 - 9 = 82 (91 - 10 = 81, puis 81 + 1 = 82), puis 82 + 11 = 93 (82 + 10 = 92, puis 92 + 1 = 93)." }
      ]
    }
  ]
};
