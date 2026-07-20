import { DayCurriculum } from "@/models/types";

export const day15: DayCurriculum = {
  dayNumber: 15,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "La grande révision de la semaine",
      xpReward: 26,
      story: {
        hook: "Imagine que tu es un champion des nombres qui a encore appris plein de choses cette semaine.",
        concreteExample: "Cette semaine, tu as appris la division, les nombres jusqu'à 10000, la division posée, et les fractions simples.",
        reveal: "Aujourd'hui, on mélange un peu tout ça pour vérifier que tu es devenu un vrai champion. Bravo pour cette semaine de travail !",
        bridgeToConcept: "Réviser, c'est réutiliser ce qu'on a appris sur des exemples un peu différents.",
        illustrationEmoji: "🏆"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "12 : 3 = 4 (division simple).", illustrationEmoji: "➗" },
            { text: "4328, c'est 4 milliers, 3 centaines, 2 dizaines et 8 unités.", illustrationEmoji: "🔢" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "84 : 4 = 21 (division posée).", illustrationEmoji: "✅" },
            { text: "1/2 est la moitié d'un tout.", illustrationEmoji: "🍕" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 20 : 4", answer: "5", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "20, c'est 4+4+4+4+4, donc 20 : 4 = 5." },
        { order: 2, prompt: "Combien de milliers dans le nombre 5678 ?", answer: "5", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "5678, c'est 5 milliers, 6 centaines, 7 dizaines et 8 unités." },
        { order: 3, prompt: "Calcule : 63 : 3", answer: "21", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Combien de fois 3 dans 6 ? 2 fois. Combien de fois 3 dans 3 ? 1 fois. Résultat : 21." },
        { order: 4, prompt: "Une tarte coupée en 4 parts égales : comment s'appelle une seule part ?", answer: "le quart", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Une part sur quatre parts égales s'appelle le quart." },
        { order: 5, prompt: "Calcule : 48 : 4", answer: "12", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Combien de fois 4 dans 4 ? 1 fois. Combien de fois 4 dans 8 ? 2 fois. Résultat : 12." },
        { order: 6, prompt: "Défi : calcule 96 : 3, puis ajoute 10.", answer: "42", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "96 : 3 = 32, puis 32 + 10 = 42." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Revoir le passé composé et les verbes en -ir de la semaine",
      xpReward: 26,
      story: {
        hook: "Imagine un grand carnet où tu notes tout ce que tu as fait, ce que tu faisais avant, et ce que tu feras bientôt.",
        concreteExample: "Cette semaine, tu as rencontré le passé composé avec avoir, le passé composé avec être, l'imparfait des verbes en -ir, et le futur simple des verbes en -ir.",
        reveal: "Chaque temps raconte un moment différent, et tu les reconnais maintenant un peu mieux. Bravo pour cette semaine de travail !",
        bridgeToConcept: "Réviser la conjugaison, c'est se rappeler quel temps utiliser selon le moment de l'action.",
        illustrationEmoji: "🎼"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "J'ai joué au ballon hier (passé composé avec avoir).", illustrationEmoji: "🗓️" },
            { text: "Elle est allée à l'école ce matin (passé composé avec être).", illustrationEmoji: "🚶" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "Autrefois, nous finissions toujours nos devoirs (imparfait en -ir).", illustrationEmoji: "📖" },
            { text: "Demain, je finirai mon dessin (futur simple en -ir).", illustrationEmoji: "🔮" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Hier, j'____ (jouer) avec mes amis.", answer: "ai joué", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Le passé composé se forme avec avoir : j'ai joué, avec un é à la fin du participe passé.", strictAccents: true },
        { order: 2, prompt: "Complète : Ce matin, elle ____ (aller) chez sa grand-mère.", answer: "est allée", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "Aller se conjugue avec être, et le participe passé s'accorde : elle est allée.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Autrefois, nous ____ (choisir) nos jeux ensemble.",
          options: ["choisissions", "choisirons", "choisissons"],
          answer: "choisissions",
          kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.",
          explanationWhenWrong: "À l'imparfait, avec nous, choisir garde le -iss- et ajoute -ions : choisissions.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Demain, je ____ (finir) mon dessin.", answer: "finirai", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Au futur simple, on garde l'infinitif complet finir et on ajoute -ai : je finirai.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Ils ____ (partir) très tôt ce matin.",
          options: ["sont partis", "ont parti", "sont partie"],
          answer: "sont partis",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.",
          explanationWhenWrong: "Partir se conjugue avec être, et le participe passé s'accorde au pluriel : sont partis.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les trois mots. Hier, nous ____ (regarder) un film, autrefois vous ____ (grandir) vite, et demain ils ____ (réussir) leur examen.", answer: "avons regardé grandissiez réussiront", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "Nous avons regardé est au passé composé, vous grandissiez est à l'imparfait, et ils réussiront est au futur simple : bien distinguer les trois temps.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Déterminants, pronoms et phrases : la grande révision",
      xpReward: 26,
      story: {
        hook: "Imagine une grande boîte à outils remplie de tout ce que tu as appris cette semaine sur la phrase.",
        concreteExample: "Regarde : Léa mange une pomme. Peux-tu retrouver le déterminant, le pronom qui pourrait remplacer Léa, le type de phrase, et le COD ?",
        reveal: "Une est le déterminant, elle pourrait remplacer Léa, la phrase est déclarative, et une pomme est le COD du verbe mange. Bravo, tu as utilisé toutes tes connaissances !",
        bridgeToConcept: "Réviser la grammaire, c'est utiliser plusieurs outils différents sur la même phrase.",
        illustrationEmoji: "🧰"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "Le chat dort : le est le déterminant, il pourrait remplacer chat.", illustrationEmoji: "🐱" },
            { text: "Théo mange un gâteau : un gâteau est le COD du verbe mange.", illustrationEmoji: "🍰" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "Fait-il beau ? est une phrase interrogative.", illustrationEmoji: "❓" },
            { text: "Comme c'est beau ! est une phrase exclamative.", illustrationEmoji: "✨" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans la phrase Une fleur pousse, quel mot est le déterminant ?", answer: "une", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Une se place juste avant fleur : c'est le déterminant." },
        { order: 2, prompt: "Par quel pronom remplacer les enfants dans Les enfants jouent ?", answer: "ils", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Les enfants est masculin pluriel, on le remplace par ils." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis le type de phrase : Quelle belle journée !",
          options: ["déclarative", "interrogative", "exclamative"],
          answer: "exclamative",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Cette phrase se termine par un point d'exclamation et exprime une émotion : elle est exclamative."
        },
        { order: 4, prompt: "Léa lit un livre. Quel est le COD ?", answer: "un livre", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Léa lit quoi ? Un livre. C'est le COD." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le type de phrase : Veux-tu venir avec moi ?",
          options: ["déclarative", "interrogative", "exclamative"],
          answer: "interrogative",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Cette phrase se termine par un point d'interrogation et pose une question : elle est interrogative."
        },
        { order: 6, prompt: "Défi : dans la phrase Camille range ses jouets, cite le déterminant, le COD, et dis quel pronom pourrait remplacer Camille.", answer: "ses jouets elle", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Ses est le déterminant, jouets est le COD complet (ses jouets), et Camille est une fille : on la remplace par elle." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Toutes les règles de la semaine ensemble",
      xpReward: 26,
      story: {
        hook: "Imagine une boîte à outils avec toutes tes nouvelles règles magiques de la semaine.",
        concreteExample: "Cette semaine, tu as appris ces/ses, on/ont, mes/mais, et leur/leurs.",
        reveal: "Chaque fois que tu hésites, tu peux utiliser la bonne règle dans ta tête. Bravo, ta boîte à outils s'agrandit encore !",
        bridgeToConcept: "Réviser l'orthographe, c'est se rappeler quelle règle utiliser pour chaque mot.",
        illustrationEmoji: "🧰"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "Ces fleurs sont belles (on peut dire cette fleur).", illustrationEmoji: "🌸" },
            { text: "Il range ses affaires (on peut dire son affaire).", illustrationEmoji: "🎒" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "Ils ont de la chance (on peut dire ils avaient).", illustrationEmoji: "🍀" },
            { text: "Je leur parle (on peut dire je lui parle).", illustrationEmoji: "🗣️" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : ___ enfants jouent dehors. (ces/ses)", answer: "ces", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Cet enfant joue dehors fonctionne, on montre quelque chose, donc on écrit ces.", strictAccents: true },
        { order: 2, prompt: "Complète : Elle range ___ crayons. (ces/ses)", answer: "ses", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "Elle range son crayon (au singulier, un possesseur) fonctionne, donc on écrit ses.", strictAccents: true },
        { order: 3, prompt: "Complète : Ils ___ trouvé la solution. (on/ont)", answer: "ont", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Ils avaient trouvé la solution fonctionne, donc on écrit ont.", strictAccents: true },
        { order: 4, prompt: "Complète : J'aime lire, ___ je préfère jouer. (mes/mais)", answer: "mais", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "J'aime lire, cependant je préfère jouer fonctionne, donc on écrit mais.", strictAccents: true },
        { order: 5, prompt: "Complète : Ils rangent ___ affaires. (leur/leurs)", answer: "leurs", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Leurs se trouve devant le nom affaires, c'est un déterminant possessif : on écrit leurs, avec un s.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les trois mots. ___ dit que Théo range ___ jouets, ___ il doit encore ranger sa chambre.", answer: "on ses mais", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "Avaient dit ne fonctionne pas, donc on ; Théo range son jouet fonctionne, donc ses ; cependant il doit encore ranger fonctionne, donc mais.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Le grand défi de la semaine",
      xpReward: 26,
      story: {
        hook: "Imagine un grand jeu où tu mélanges toutes les nouvelles tables de la semaine.",
        concreteExample: "Cette semaine, tu as appris la table de 6, la table de 7, la table de 8, et la table de 9.",
        reveal: "Aujourd'hui, tu vas utiliser toutes ces tables ensemble. Bravo pour cette semaine de calcul mental !",
        bridgeToConcept: "Réviser le calcul mental, c'est choisir la bonne table selon le calcul à faire.",
        illustrationEmoji: "🏆"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "6 x 4 = 24 (table de 6).", illustrationEmoji: "✖️" },
            { text: "7 x 5 = 35 (table de 7).", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "8 x 3 = 24 (table de 8).", illustrationEmoji: "✖️" },
            { text: "9 x 4 = 36 (table de 9).", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 6 x 5", answer: "30", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "6 x 5 = 30." },
        { order: 2, prompt: "Calcule : 7 x 4", answer: "28", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "7 x 4 = 28." },
        { order: 3, prompt: "Calcule : 8 x 3", answer: "24", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "8 x 3 = 24." },
        { order: 4, prompt: "Calcule : 9 x 5", answer: "45", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "9 x 5 = 45." },
        { order: 5, prompt: "Calcule : 6 x 7", answer: "42", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "6 x 7 = 42." },
        { order: 6, prompt: "Défi : calcule 8 x 9", answer: "72", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "8 x 9 = 72." }
      ]
    }
  ]
};
