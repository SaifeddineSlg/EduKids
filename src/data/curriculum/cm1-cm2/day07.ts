import { DayCurriculum } from "@/models/types";

export const day07: DayCurriculum = {
  dayNumber: 7,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Les fractions simples : moitié, tiers, quart",
      xpReward: 22,
      story: {
        hook: "Imagine que tu dois partager une tablette de chocolat en parts égales avec tes amis.",
        concreteExample: "Une tablette a 12 carrés. Quelle est la moitié de 12 ?",
        reveal: "La moitié de 12, c'est 6 (12 divisé par 2). Le tiers de 12 serait 4 (12 divisé par 3), et le quart serait 3 (12 divisé par 4).",
        bridgeToConcept: "La moitié = diviser par 2. Le tiers = diviser par 3. Le quart = diviser par 4.",
        illustrationEmoji: "🍫"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "La moitié de 20 : 20 divisé par 2 = 10.", illustrationEmoji: "🔢" },
            { text: "Le tiers de 9 : 9 divisé par 3 = 3.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Le quart de 16 : 16 divisé par 4 = 4.", illustrationEmoji: "🔍" },
            { text: "Pour trouver une fraction d'un nombre, on divise par le dénominateur.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule la moitié de 12.", answer: "6", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "La moitié de 12, c'est 12 divisé par 2, soit 6." },
        { order: 2, prompt: "Calcule le tiers de 9.", answer: "3", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Le tiers de 9, c'est 9 divisé par 3, soit 3." },
        { order: 3, prompt: "Calcule le quart de 16.", answer: "4", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Le quart de 16, c'est 16 divisé par 4, soit 4." },
        { order: 4, prompt: "Calcule la moitié de 30.", answer: "15", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "La moitié de 30, c'est 30 divisé par 2, soit 15." },
        { order: 5, prompt: "Calcule le tiers de 21.", answer: "7", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Le tiers de 21, c'est 21 divisé par 3, soit 7." },
        { order: 6, prompt: "Défi : calcule le quart de 40, puis ajoute la moitié de 8. Quel est le résultat ?", answer: "14", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Le quart de 40 = 10, la moitié de 8 = 4, et 10 + 4 = 14." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "L'imparfait",
      xpReward: 22,
      story: {
        hook: "Pour raconter comment les choses étaient avant, ou ce qui se répétait souvent, on utilise un temps du passé bien pratique.",
        concreteExample: "Écoute : quand j'étais petit, je jouais tous les jours dans le jardin.",
        reveal: "Je jouais est à l'imparfait : on prend le radical du verbe à la première personne du pluriel au présent (nous jouons → jou-) et on ajoute les terminaisons -ais, -ais, -ait, -ions, -iez, -aient.",
        bridgeToConcept: "L'imparfait : je jouais, tu jouais, il jouait, nous jouions, vous jouiez, ils jouaient.",
        illustrationEmoji: "🧸"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Autrefois, nous habitions à la campagne.", illustrationEmoji: "🏡" },
            { text: "Chaque été, elle nageait dans la rivière.", illustrationEmoji: "🏊‍♀️" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Prends le radical de nous au présent : nous finissons → finiss-.", illustrationEmoji: "🔍" },
            { text: "Ajoute -ais, -ais, -ait, -ions, -iez, -aient.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète à l'imparfait : Quand j'étais petit, je ____ (jouer) dans le jardin.", answer: "jouais", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec je, l'imparfait de jouer est jouais : radical jou- puis -ais.", strictAccents: true },
        { order: 2, prompt: "Complète à l'imparfait : Tu ____ (habiter) à la campagne autrefois.", answer: "habitais", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Avec tu, l'imparfait de habiter est habitais : radical habit- puis -ais.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Chaque été, elle ____ (nager) dans la rivière.",
          options: ["nageait", "nageais", "nageaient"],
          answer: "nageait",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Avec elle, l'imparfait de nager est nageait, avec un t et non un s.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète à l'imparfait : Nous ____ (finir) toujours nos devoirs avant le dîner.", answer: "finissions", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Avec nous, l'imparfait de finir est finissions : radical finiss- puis -ions.", strictAccents: true },
        { order: 5, prompt: "Complète à l'imparfait : Vous ____ (avoir) souvent de bonnes idées.", answer: "aviez", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Avec vous, l'imparfait de avoir est aviez, à partir du radical av-.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux verbes. Ils ____ (être) heureux et nous ____ (aller) souvent à la plage.", answer: "étaient allions", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Tu étais proche ! Avec ils, être donne étaient. Avec nous, aller donne allions.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Les compléments circonstanciels : lieu, temps, manière",
      xpReward: 22,
      story: {
        hook: "Une phrase peut donner plein de précisions : où, quand et comment se passe une action.",
        concreteExample: "Regarde : hier, dans le jardin, Balkis a joué joyeusement. Où joue-t-elle ? Quand ? Comment ?",
        reveal: "Dans le jardin répond à où (complément de lieu), hier répond à quand (complément de temps), joyeusement répond à comment (complément de manière).",
        bridgeToConcept: "Le complément circonstanciel de lieu répond à où, celui de temps répond à quand, celui de manière répond à comment.",
        illustrationEmoji: "🌍"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Elle range sa chambre le matin : complément de temps.", illustrationEmoji: "🕗" },
            { text: "Il court dans la forêt : complément de lieu.", illustrationEmoji: "🌲" }
          ]
        },
        {
          title: "L'astuce pour trouver un complément circonstanciel",
          steps: [
            { text: "Il travaille avec attention : complément de manière.", illustrationEmoji: "🔍" },
            { text: "Pose la question où, quand ou comment pour trouver le complément.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans il court dans la forêt, quel est le complément circonstanciel de lieu ?", answer: "dans la forêt", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Dans la forêt répond à la question où, c'est le complément circonstanciel de lieu." },
        { order: 2, prompt: "Dans elle range sa chambre le matin, quel est le complément circonstanciel de temps ?", answer: "le matin", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Le matin répond à la question quand, c'est le complément circonstanciel de temps." },
        { order: 3, prompt: "Dans il travaille avec attention, quel est le complément circonstanciel de manière ?", answer: "avec attention", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec attention répond à la question comment, c'est le complément circonstanciel de manière." },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne réponse : dans nous partons demain, demain est un complément circonstanciel de...",
          options: ["temps", "lieu", "manière"],
          answer: "temps",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Demain répond à la question quand, c'est un complément circonstanciel de temps."
        },
        { order: 5, prompt: "Dans les oiseaux chantent joyeusement, quel est le complément circonstanciel de manière ?", answer: "joyeusement", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Joyeusement répond à la question comment, c'est le complément circonstanciel de manière." },
        { order: 6, prompt: "Défi : dans hier, à la piscine, il a nagé rapidement, cite le complément de temps, le complément de lieu et le complément de manière, dans cet ordre.", answer: "hier à la piscine rapidement", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Hier répond à quand (temps), à la piscine répond à où (lieu), rapidement répond à comment (manière)." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Ou ou où",
      xpReward: 22,
      story: {
        hook: "Deux petits mots identiques à l'oreille, mais un accent change tout leur sens.",
        concreteExample: "Regarde : Tu préfères le chocolat ___ la vanille ? Est-ce ou ou où ?",
        reveal: "On peut remplacer par ou bien : tu préfères le chocolat ou bien la vanille. C'est ou, sans accent, qui exprime un choix.",
        bridgeToConcept: "Ou, sans accent, exprime un choix et se remplace par ou bien. Où, avec accent, indique un lieu ou un moment et ne se remplace jamais par ou bien.",
        illustrationEmoji: "🍦"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Veux-tu du jus ou de l'eau ? : on peut dire ou bien de l'eau.", illustrationEmoji: "🥤" },
            { text: "Où habites-tu ? : lieu, aucun remplacement possible.", illustrationEmoji: "🏠" }
          ]
        },
        {
          title: "L'astuce du test",
          steps: [
            { text: "Essaie de remplacer par ou bien.", illustrationEmoji: "🔍" },
            { text: "Ça marche → ou. Ça ne marche pas → où.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Tu préfères le chocolat ___ la vanille ? (ou/où)", answer: "ou", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On peut dire le chocolat ou bien la vanille, donc on écrit ou, sans accent.", strictAccents: true },
        { order: 2, prompt: "Complète : ___ habites-tu exactement ? (ou/où)", answer: "où", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "On ne peut pas dire ou bien habites-tu, donc on écrit où, avec accent, qui indique le lieu.", strictAccents: true },
        { order: 3, prompt: "Complète : Je ne sais pas ___ elle a rangé mes affaires. (ou/où)", answer: "où", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On ne peut pas dire ou bien elle a rangé, donc on écrit où, avec accent, qui indique le lieu.", strictAccents: true },
        { order: 4, prompt: "Complète : Veux-tu du jus ___ de l'eau ? (ou/où)", answer: "ou", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "On peut dire du jus ou bien de l'eau, donc on écrit ou, sans accent.", strictAccents: true },
        { order: 5, prompt: "Complète : Le pays ___ elle est née est très loin. (ou/où)", answer: "où", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "On ne peut pas dire ou bien elle est née, donc on écrit où, avec accent, qui indique le lieu.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. Dis-moi ___ (où) tu vas, ___ (ou) je ne t'accompagnerai pas.", answer: "où ou", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Tu étais proche ! Dis-moi où tu vas indique le lieu (accent), et ou je ne t'accompagnerai pas peut se dire ou bien je ne t'accompagnerai pas (sans accent).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Les doubles et les moitiés",
      xpReward: 22,
      story: {
        hook: "Doubler un nombre ou le partager en deux : deux astuces essentielles pour calculer plus vite dans ta tête.",
        concreteExample: "Quel est le double de 14 ?",
        reveal: "Le double de 14, c'est 28 (14 + 14). La moitié de 28 serait 14.",
        bridgeToConcept: "Le double d'un nombre, c'est ce nombre multiplié par 2. La moitié, c'est ce nombre divisé par 2.",
        illustrationEmoji: "➗"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "Le double de 25 : 25 + 25 = 50.", illustrationEmoji: "🔢" },
            { text: "La moitié de 50 : 50 divisé par 2 = 25.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Le double de 36 : 36 + 36 = 72.", illustrationEmoji: "🔍" },
            { text: "La moitié de 18 : 18 divisé par 2 = 9.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule le double de 14.", answer: "28", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Le double de 14, c'est 14 + 14, soit 28." },
        { order: 2, prompt: "Calcule la moitié de 28.", answer: "14", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "La moitié de 28, c'est 28 divisé par 2, soit 14." },
        { order: 3, prompt: "Calcule le double de 25.", answer: "50", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Le double de 25, c'est 25 + 25, soit 50." },
        { order: 4, prompt: "Calcule la moitié de 60.", answer: "30", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "La moitié de 60, c'est 60 divisé par 2, soit 30." },
        { order: 5, prompt: "Calcule le double de 45.", answer: "90", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Le double de 45, c'est 45 + 45, soit 90." },
        { order: 6, prompt: "Défi : calcule le double de 32, puis calcule la moitié de ce résultat. Quel nombre obtiens-tu à la fin ?", answer: "32", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Le double de 32 = 64, et la moitié de 64 = 32. On retrouve le nombre de départ !" }
      ]
    }
  ]
};
