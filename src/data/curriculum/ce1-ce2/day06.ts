import { DayCurriculum } from "@/models/types";

export const day06: DayCurriculum = {
  dayNumber: 6,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Les nombres jusqu'à 1000",
      xpReward: 24,
      story: {
        hook: "Imagine que tu ranges maintenant tes jetons par grands paquets de cent, comme des sacs remplis de dix sachets de dix.",
        concreteExample: "Tu as 2 sacs de cent jetons, 3 paquets de dix jetons, et 5 jetons tout seuls. Combien de jetons as-tu en tout ?",
        reveal: "2 sacs de cent, ça fait 200. Avec 3 paquets de dix, ça fait 30 de plus. Et 5 jetons tout seuls. En tout : 200 + 30 + 5 = 235. Bravo, tu viens de lire un nombre à trois chiffres !",
        bridgeToConcept: "Un nombre comme 235 veut dire 2 centaines, 3 dizaines et 5 unités.",
        illustrationEmoji: "💯"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "418, c'est 4 centaines (400), 1 dizaine (10) et 8 unités (8).", illustrationEmoji: "🔟" },
            { text: "702, c'est 7 centaines (700), 0 dizaine et 2 unités (2).", illustrationEmoji: "🔟" }
          ]
        },
        {
          title: "L'astuce pour lire les nombres",
          steps: [
            { text: "Le premier chiffre dit combien de centaines.", illustrationEmoji: "🔍" },
            { text: "Les deux chiffres suivants disent combien de dizaines et d'unités restent.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Combien de centaines dans le nombre 456 ?", answer: "4", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "456, c'est 4 centaines, 5 dizaines et 6 unités." },
        { order: 2, prompt: "Combien de dizaines dans le nombre 683 ?", answer: "8", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "683, c'est 6 centaines, 8 dizaines et 3 unités." },
        { order: 3, prompt: "Combien d'unités dans le nombre 927 ?", answer: "7", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "927, c'est 9 centaines, 2 dizaines et 7 unités." },
        { order: 4, prompt: "Quel nombre a 3 centaines, 2 dizaines et 4 unités ?", answer: "324", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "3 centaines (300), 2 dizaines (20) et 4 unités (4), ça fait 324." },
        { order: 5, prompt: "Quel nombre vient juste après 399 ?", answer: "400", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Après 399, on passe à la centaine suivante : 400." },
        { order: 6, prompt: "Défi : quel nombre vient juste avant 1000 ?", answer: "999", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Juste avant 1000, il y a 999, le plus grand nombre à trois chiffres." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "L'imparfait des verbes en -er, toutes les personnes",
      xpReward: 24,
      story: {
        hook: "Imagine que tu racontes une histoire qui s'est passée il y a longtemps, comme un conte qui commence par il était une fois.",
        concreteExample: "Écoute : je jouais, tu jouais, il jouait, nous jouions, vous jouiez, ils jouaient. Tu entends ce son [è] à chaque fois ?",
        reveal: "À quoi sert ce temps ? L'imparfait sert à raconter une action passée qui durait ou se répétait. Comment le reconnaître ? On entend toujours le son [è], et on ajoute -ais, -ais, -ait, -ions, -iez, -aient devant le radical du verbe.",
        bridgeToConcept: "Terminaisons de l'imparfait : -ais, -ais, -ait, -ions, -iez, -aient.",
        illustrationEmoji: "📖"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Autrefois, nous jouions dans ce parc tous les mercredis.", illustrationEmoji: "🌳" },
            { text: "Chaque été, vous regardiez les étoiles depuis le jardin.", illustrationEmoji: "🌟" }
          ]
        },
        {
          title: "Attention à l'erreur fréquente",
          steps: [
            { text: "Beaucoup d'enfants oublient le i après nous et vous : il faut écrire nous jouions, pas nous jouons.", illustrationEmoji: "❌" },
            { text: "À l'imparfait, on entend toujours le son [è] : je jouais, pas je joue.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je ____ (jouer) dans le jardin chaque jour.", answer: "jouais", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "À l'imparfait, avec je, on ajoute -ais : je jouais. Essaie de le lire à voix haute.", strictAccents: true },
        { order: 2, prompt: "Complète : Nous ____ (regarder) la télévision le soir.", answer: "regardions", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "Avec nous, l'imparfait se termine par -ions : nous regardions.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Vous ____ (chanter) une chanson autrefois.",
          options: ["chantiez", "chantez", "chantaient"],
          answer: "chantiez",
          kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.",
          explanationWhenWrong: "Avec vous, l'imparfait se termine par -iez : vous chantiez.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Ils ____ (danser) ensemble autrefois.", answer: "dansaient", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Avec ils, l'imparfait se termine par -aient : ils dansaient.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Tu ____ (aimer) les vacances.",
          options: ["aimais", "aimait", "aimiez"],
          answer: "aimais",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.",
          explanationWhenWrong: "Avec tu, l'imparfait se termine par -ais : tu aimais.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Nous ____ (chercher) des coquillages et elles ____ (trouver) des trésors.", answer: "cherchions trouvaient", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "Nous cherchions avec -ions, et elles trouvaient avec -aient : deux terminaisons de l'imparfait dans la même phrase.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Le nom commun et le nom propre",
      xpReward: 24,
      story: {
        hook: "Imagine deux familles de mots : ceux qui désignent une chose en général, et ceux qui désignent quelqu'un de précis.",
        concreteExample: "Regarde : chien et Rex. Lequel désigne un animal en général, et lequel désigne un animal précis ?",
        reveal: "Chien est un nom commun, il désigne n'importe quel chien. Rex est un nom propre, il désigne un chien précis, avec une majuscule. Comment les reconnaître ? Le nom propre commence toujours par une majuscule.",
        bridgeToConcept: "Le nom commun désigne une chose en général ; le nom propre désigne quelqu'un ou quelque chose de précis et prend une majuscule.",
        illustrationEmoji: "🏷️"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Ville est un nom commun ; Paris est un nom propre, avec une majuscule.", illustrationEmoji: "🏙️" },
            { text: "Fille est un nom commun ; Léa est un nom propre, avec une majuscule.", illustrationEmoji: "👧" }
          ]
        },
        {
          title: "L'astuce pour les reconnaître",
          steps: [
            { text: "Regarde si le mot commence par une majuscule.", illustrationEmoji: "🔍" },
            { text: "Si oui, et qu'il désigne quelqu'un ou un lieu précis, c'est un nom propre.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans la phrase Le chat de Léa dort, quel mot est un nom propre ?", answer: "Léa", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Léa désigne une personne précise et commence par une majuscule : c'est un nom propre." },
        { order: 2, prompt: "Dans la phrase Le chien s'appelle Rex, quel mot est un nom commun ?", answer: "chien", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Chien désigne un animal en général, sans majuscule : c'est un nom commun." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis le nom propre dans cette liste.",
          options: ["ville", "Paris", "maison"],
          answer: "Paris",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Paris est un lieu précis et commence par une majuscule : c'est un nom propre."
        },
        { order: 4, prompt: "Dans la phrase Paul joue avec son ballon, quel mot est un nom propre ?", answer: "Paul", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Paul désigne une personne précise, avec une majuscule : c'est un nom propre." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le nom commun dans cette liste.",
          options: ["Marseille", "fleur", "Thomas"],
          answer: "fleur",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Fleur désigne une chose en général, sans majuscule : c'est un nom commun."
        },
        { order: 6, prompt: "Défi : dans la phrase Camille et Théo jouent avec leur chien Rex à Nice, cite les quatre noms propres.", answer: "Camille Théo Rex Nice", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Camille, Théo, Rex et Nice désignent chacun quelqu'un ou un lieu précis, avec une majuscule : ce sont des noms propres." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Le son [k] : c ou qu",
      xpReward: 24,
      story: {
        hook: "Imagine un son dur qui claque : [k], comme un coup de tambour.",
        concreteExample: "Écoute : cacao, quatre. Tu entends le même son [k], mais l'écriture change selon la lettre qui suit !",
        reveal: "À quoi sert de connaître la règle ? À bien écrire ce son. Comment le reconnaître ? Devant a, o, u, on écrit c (cacao). Devant e et i, il faut écrire qu pour garder le son dur (quatre, qui).",
        bridgeToConcept: "Devant a, o, u : on écrit c (cacao). Devant e, i : on écrit qu (quatre, qui).",
        illustrationEmoji: "🥁"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Un cacao, un cadeau : c devant a.", illustrationEmoji: "🎁" },
            { text: "Quatre, qui : qu devant e et i, pour garder le son dur.", illustrationEmoji: "🔢" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Devant e et i, sans le u, le c ferait un son doux comme dans cerise.", illustrationEmoji: "🔍" },
            { text: "On ajoute donc un u pour garder le son [k] dur : quand, quitter.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : un ___adeau (cadeau). (c ou qu)", answer: "c", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Devant la lettre a, on écrit simplement c : cadeau.", strictAccents: true },
        { order: 2, prompt: "Complète : ___atre (quatre). (c ou qu)", answer: "qu", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "Tu étais proche ! Devant a mais issu du son [k] suivi d'un e muet dans quatre, il faut écrire qu : quatre.", strictAccents: true },
        { order: 3, prompt: "Complète : un ___asque (casque). (c ou qu)", answer: "c", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Devant la lettre a, un seul c suffit : casque.", strictAccents: true },
        { order: 4, prompt: "Complète : la ___estion (question). (c ou qu)", answer: "qu", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Devant e, sans le u, le c ferait un son doux. On écrit donc qu : question.", strictAccents: true },
        { order: 5, prompt: "Complète : un ___oq (coq). (c ou qu)", answer: "c", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Devant o, on écrit simplement c : coq.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. ___atre (quatre) enfants ouvrent un ___adeau (cadeau).", answer: "qu c", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "Quatre s'écrit avec qu, et cadeau s'écrit avec un seul c devant a.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "La table de multiplication de 3",
      xpReward: 24,
      story: {
        hook: "Imagine que tu distribues toujours 3 images à chaque enfant.",
        concreteExample: "Il y a 4 enfants. Combien d'images faut-il en tout ?",
        reveal: "4 fois 3 images, ça fait 12 images. Bravo, tu viens d'utiliser la table de 3 !",
        bridgeToConcept: "La table de 3 : 1x3=3, 2x3=6, 3x3=9, 4x3=12, 5x3=15...",
        illustrationEmoji: "🖼️"
      },
      examples: [
        {
          title: "La table de 3",
          steps: [
            { text: "3 x 4 : c'est 3 + 3 + 3 + 3 = 12.", illustrationEmoji: "➕" },
            { text: "3 x 6 : c'est le triple de 6, donc 18.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour la table de 3",
          steps: [
            { text: "Multiplier par 3, c'est ajouter le nombre trois fois.", illustrationEmoji: "🙌" },
            { text: "3 x 7, c'est 21 : le triple de 7.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 3 x 2", answer: "6", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "3 x 2 = 6." },
        { order: 2, prompt: "Calcule : 3 x 4", answer: "12", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "3 x 4 = 12." },
        { order: 3, prompt: "Calcule : 3 x 5", answer: "15", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "3 x 5 = 15." },
        { order: 4, prompt: "Calcule : 3 x 7", answer: "21", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "3 x 7 = 21." },
        { order: 5, prompt: "Calcule : 3 x 8", answer: "24", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "3 x 8 = 24." },
        { order: 6, prompt: "Défi : calcule 3 x 9", answer: "27", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "3 x 9 = 27." }
      ]
    }
  ]
};
