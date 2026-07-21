import { DayCurriculum } from "@/models/types";

export const day20: DayCurriculum = {
  dayNumber: 20,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "La grande révision de la semaine",
      xpReward: 26,
      story: {
        hook: "Imagine que tu es un champion des nombres qui a encore appris plein de choses cette semaine.",
        concreteExample: "Cette semaine, tu as appris à comparer les nombres jusqu'à 10 000, la division avec reste, à lire l'heure, et à compter la monnaie.",
        reveal: "Aujourd'hui, on mélange un peu tout ça pour vérifier que tu es devenu un vrai champion. Bravo pour cette semaine de travail !",
        bridgeToConcept: "Réviser, c'est réutiliser ce qu'on a appris sur des exemples un peu différents.",
        illustrationEmoji: "🏆"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "4256 > 4198 (comparer des nombres).", illustrationEmoji: "⚖️" },
            { text: "14 : 3 = 4 reste 2 (division avec reste).", illustrationEmoji: "➗" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "Petite aiguille sur le 6, grande sur le 12 : il est 6 heures.", illustrationEmoji: "🕒" },
            { text: "Un billet de 10 euros et une pièce de 5 euros : 15 euros en tout.", illustrationEmoji: "💶" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Compare : 3105 ___ 3150 (utilise <, > ou =)", answer: "<", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Les milliers et les centaines sont égaux, mais 0 est plus petit que 5 aux dizaines : 3105 < 3150." },
        { order: 2, prompt: "Calcule 19 : 4 et donne le quotient et le reste.", answer: "4 reste 3", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "4 tient 4 fois dans 19 (4 x 4 = 16), et il reste 19 - 16 = 3. Résultat : 4 reste 3." },
        { order: 3, prompt: "La petite aiguille est entre le 2 et le 3, la grande sur le 6. Quelle heure est-il ?", answer: "2 heures et demie", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "La grande aiguille sur le 6 indique une demi-heure de plus : il est 2 heures et demie." },
        { order: 4, prompt: "Tu as un billet de 20 euros et une pièce de 2 euros. Combien as-tu en tout ?", answer: "22 euros", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "20 + 2 = 22 : tu as 22 euros en tout." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le plus grand nombre parmi ces trois.",
          options: ["5643", "5436", "5634"],
          answer: "5643",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Les milliers sont égaux (5 = 5), et 6 est le plus grand chiffre des centaines parmi 6, 4 et 6 : en comparant les dizaines, 5643 est le plus grand."
        },
        { order: 6, prompt: "Défi : calcule le double de 30, puis ajoute 9 avec l'astuce (+10 puis -1).", answer: "69", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Le double de 30 est 60, puis 60 + 10 = 70, et 70 - 1 = 69." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Revoir le passé composé en -ir, l'imparfait, le futur et le présent de la semaine",
      xpReward: 26,
      story: {
        hook: "Imagine un grand carnet où tu notes toutes les nouvelles conjugaisons de cette semaine.",
        concreteExample: "Cette semaine, tu as rencontré le passé composé des verbes en -ir comme finir, l'imparfait de aller et faire, le présent de prendre et voir, et le futur simple de aller et faire.",
        reveal: "Chaque temps et chaque verbe a sa propre musique, et tu la connais maintenant un peu mieux. Bravo pour cette semaine de travail !",
        bridgeToConcept: "Réviser la conjugaison, c'est se rappeler la musique complète de chaque temps et de chaque verbe.",
        illustrationEmoji: "🎼"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "J'ai fini mon dessin (passé composé en -ir).", illustrationEmoji: "📗" },
            { text: "Autrefois, nous allions à la mer (imparfait d'aller).", illustrationEmoji: "🕰️" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "Je prends mon cartable (présent de prendre).", illustrationEmoji: "👀" },
            { text: "Demain, j'irai chez ma cousine (futur simple d'aller).", illustrationEmoji: "🔮" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Hier, tu ____ (choisir) ton dessert.", answer: "as choisi", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Le passé composé se forme avec avoir : tu as choisi, avec un i à la fin du participe passé.", strictAccents: true },
        { order: 2, prompt: "Complète : Autrefois, vous ____ (aller) au marché le samedi.", answer: "alliez", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "Avec vous, aller à l'imparfait devient alliez, avec la terminaison -iez.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Nous ____ (voir) un bel oiseau.",
          options: ["voyons", "voyez", "voient"],
          answer: "voyons",
          kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.",
          explanationWhenWrong: "Avec nous, voir devient voyons : le i se transforme en y devant la terminaison -ons.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Demain, ils ____ (faire) leurs devoirs après le goûter.", answer: "feront", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Le futur de faire est irrégulier : avec ils, on écrit feront, avec le radical fer-.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Elle ____ (prendre) son parapluie.",
          options: ["prend", "prends", "prennent"],
          answer: "prend",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.",
          explanationWhenWrong: "Avec elle, prendre devient prend, sans s à la fin.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les trois mots. Hier, nous ____ (finir) nos devoirs, autrefois vous ____ (faire) du vélo, et demain je ____ (aller) à la piscine.", answer: "avons fini faisiez irai", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "Nous avons fini est au passé composé, vous faisiez est à l'imparfait, et j'irai est au futur simple : bien distinguer les trois temps.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "COI, négation, féminin des noms et adverbes : la grande révision",
      xpReward: 26,
      story: {
        hook: "Imagine une grande boîte à outils remplie de tout ce que tu as appris cette semaine sur la phrase et les mots.",
        concreteExample: "Regarde : Camille ne parle plus doucement à sa cousine. Peux-tu retrouver la négation, le COI, et l'adverbe ?",
        reveal: "Ne...plus est la négation, à sa cousine est le COI du verbe parle, et doucement est l'adverbe qui dit comment elle parle. Bravo, tu as utilisé toutes tes connaissances !",
        bridgeToConcept: "Réviser la grammaire, c'est utiliser plusieurs outils différents sur la même phrase.",
        illustrationEmoji: "🧰"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "Théo pense à ses vacances : à ses vacances est le COI.", illustrationEmoji: "💬" },
            { text: "Elle ne joue plus dehors : ne...plus est la négation.", illustrationEmoji: "🚫" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "Un danseur, une danseuse : le féminin des noms change parfois beaucoup.", illustrationEmoji: "👗" },
            { text: "Elle chante joyeusement : joyeusement est un adverbe de manière.", illustrationEmoji: "🏃" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Léa parle à sa mère. Quel est le COI ?", answer: "à sa mère", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Léa parle à qui ? À sa mère. C'est le COI." },
        { order: 2, prompt: "Dans la phrase Il ne joue pas dehors, quels sont les deux mots de la négation ?", answer: "ne pas", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Ne encadre le verbe joue avec pas : ce sont les deux mots de la négation." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis le bon féminin de directeur.",
          options: ["directrice", "directeuse", "directeure"],
          answer: "directrice",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "La terminaison -teur devient souvent -trice au féminin : directrice."
        },
        { order: 4, prompt: "Dans la phrase Elle chante joyeusement, quel mot est l'adverbe ?", answer: "joyeusement", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Joyeusement dit comment elle chante : c'est l'adverbe de manière." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le COI : Les enfants parlent de leur voyage.",
          options: ["les enfants", "parlent", "de leur voyage"],
          answer: "de leur voyage",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Les enfants parlent de quoi ? De leur voyage. C'est le COI."
        },
        { order: 6, prompt: "Défi : dans la phrase Le danseur ne parle jamais rapidement à ses amis, cite le féminin possible de danseur, la négation, et l'adverbe.", answer: "danseuse ne jamais rapidement", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Danseur devient danseuse au féminin, ne...jamais est la négation, et rapidement est l'adverbe de manière." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Toutes les règles de la semaine ensemble",
      xpReward: 26,
      story: {
        hook: "Imagine une boîte à outils avec toutes tes nouvelles règles magiques de la semaine.",
        concreteExample: "Cette semaine, tu as appris la/là, sa/ça, quelle/qu'elle, et tout/tous/toute/toutes.",
        reveal: "Chaque fois que tu hésites, tu peux utiliser la bonne règle dans ta tête. Bravo, ta boîte à outils s'agrandit encore !",
        bridgeToConcept: "Réviser l'orthographe, c'est se rappeler quelle règle utiliser pour chaque mot.",
        illustrationEmoji: "🧰"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "Regarde là-bas (on peut dire là-bas ou ici).", illustrationEmoji: "🪄" },
            { text: "Ça me fait plaisir (on peut dire cela).", illustrationEmoji: "😊" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "Quelle belle journée ! (quelle s'accorde avec le nom).", illustrationEmoji: "☀️" },
            { text: "Tous les enfants sont arrivés (tout s'accorde avec le nom).", illustrationEmoji: "🧩" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Regarde ___-bas, un bel arc-en-ciel ! (la/là)", answer: "là", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Là-bas montre un endroit, avec un accent grave sur le a.", strictAccents: true },
        { order: 2, prompt: "Complète : ___ me fait très plaisir. (sa/ça)", answer: "ça", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "Cela me fait très plaisir fonctionne, donc on écrit ça, sans petit mot devant un nom.", strictAccents: true },
        { order: 3, prompt: "Complète : ___ heure est-il ? (quelle/qu'elle)", answer: "quelle", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Quelle est un adjectif accordé avec heure, féminin singulier : quelle heure est-il ?", strictAccents: true },
        { order: 4, prompt: "Complète : ___ les enfants sont arrivés. (tout/toute/tous/toutes)", answer: "tous", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Enfants est masculin pluriel, donc tous, avec un s.", strictAccents: true },
        { order: 5, prompt: "Complète : Je crois ___ arrivera bientôt. (quelle/qu'elle)", answer: "qu'elle", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Je crois qu'il arrivera bientôt fonctionne, donc on écrit qu'elle, en deux mots.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. ___ le monde pense ___ elle viendra bientôt. (tout, qu'elle)", answer: "tout qu'elle", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "Monde est masculin singulier, donc tout ; on pense qu'il viendra fonctionne, donc qu'elle, en deux mots.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Le grand défi de la semaine",
      xpReward: 26,
      story: {
        hook: "Imagine un grand jeu où tu mélanges tout ce que tu as appris cette semaine en calcul mental.",
        concreteExample: "Cette semaine, tu as compté de 10 en 10 et de 100 en 100, calculé des doubles et des moitiés de dizaines rondes, et appris l'astuce pour ajouter 9.",
        reveal: "Aujourd'hui, tu vas utiliser toutes ces méthodes ensemble. Bravo pour cette semaine de calcul mental !",
        bridgeToConcept: "Réviser le calcul mental, c'est choisir la bonne méthode selon le calcul à faire.",
        illustrationEmoji: "🏆"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "450 puis 460 (compter de 10 en 10).", illustrationEmoji: "💶" },
            { text: "Le double de 40 est 80.", illustrationEmoji: "👯" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "La moitié de 60 est 30.", illustrationEmoji: "➗" },
            { text: "27 + 9 = 36 (astuce +10 puis -1).", illustrationEmoji: "🧮" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Quel nombre vient après 700 en comptant de 100 en 100 ?", answer: "800", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Après 700, en ajoutant 100, on trouve 800." },
        { order: 2, prompt: "Quel est le double de 35 ?", answer: "70", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Le double de 35, c'est 35 + 35 = 70." },
        { order: 3, prompt: "Quelle est la moitié de 70 ?", answer: "35", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "La moitié de 70, c'est 35, car 35 + 35 = 70." },
        { order: 4, prompt: "Calcule : 46 + 9", answer: "55", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "46 + 10 = 56, puis 56 - 1 = 55." },
        { order: 5, prompt: "Quel nombre vient après 990 en comptant de 10 en 10 ?", answer: "1000", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Après 990, en ajoutant 10, on trouve 1000." },
        { order: 6, prompt: "Défi : calcule le double de 45, puis ajoute 9 avec l'astuce (+10 puis -1).", answer: "99", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Le double de 45 est 90, puis 90 + 10 = 100, et 100 - 1 = 99." }
      ]
    }
  ]
};
