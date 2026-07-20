import { DayCurriculum } from "@/models/types";

export const day11: DayCurriculum = {
  dayNumber: 11,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "L'aire du carré et du rectangle",
      xpReward: 20,
      story: {
        hook: "Imagine que tu dois recouvrir le sol d'une salle de classe rectangulaire avec des carreaux.",
        concreteExample: "Une salle mesure 6 mètres de long et 4 mètres de large. Combien de mètres carrés faut-il pour la recouvrir ?",
        reveal: "L'aire d'un rectangle est longueur x largeur : 6 x 4 = 24 mètres carrés (m²).",
        bridgeToConcept: "Aire du rectangle = longueur x largeur. Aire du carré = côté x côté. L'aire se mesure en unités carrées (m², cm²...).",
        illustrationEmoji: "🟦"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "Un carré de côté 5 cm : aire = 5 x 5 = 25 cm².", illustrationEmoji: "🔢" },
            { text: "On écrit toujours l'aire avec l'unité au carré, comme cm² ou m².", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Un rectangle de 9 m sur 4 m : aire = 9 x 4 = 36 m².", illustrationEmoji: "🔍" },
            { text: "Un jardin carré de côté 7 m a une aire de 7 x 7 = 49 m².", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule l'aire d'un rectangle de 6 m de long et 4 m de large.", answer: "24", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "6 x 4 = 24 m²." },
        { order: 2, prompt: "Calcule l'aire d'un carré de côté 5 cm.", answer: "25", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "5 x 5 = 25 cm²." },
        { order: 3, prompt: "Calcule l'aire d'un rectangle de 9 m sur 4 m.", answer: "36", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "9 x 4 = 36 m²." },
        { order: 4, prompt: "Calcule l'aire d'un carré de côté 7 m.", answer: "49", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "7 x 7 = 49 m²." },
        { order: 5, prompt: "Calcule l'aire d'un rectangle de 8 cm sur 3 cm.", answer: "24", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "8 x 3 = 24 cm²." },
        { order: 6, prompt: "Défi : un terrain rectangulaire mesure 12 m de long et 5 m de large. Quelle est son aire ?", answer: "60", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "12 x 5 = 60 m²." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le passé simple à la 3e personne",
      xpReward: 20,
      story: {
        hook: "Dans les contes et les récits, on raconte souvent des actions au passé avec un temps spécial : le passé simple.",
        concreteExample: "Écoute : il était une fois une petite fille qui rencontra un loup dans la forêt.",
        reveal: "Rencontra est au passé simple : pour les verbes en -er, à la 3e personne du singulier, on ajoute -a ; au pluriel, -èrent.",
        bridgeToConcept: "Passé simple des verbes en -er : il/elle chanta, ils/elles chantèrent. Être : il fut, ils furent. Avoir : il eut, ils eurent.",
        illustrationEmoji: "📖"
      },
      examples: [
        {
          title: "Des exemples de récit",
          steps: [
            { text: "La princesse traversa la forêt et arriva au château.", illustrationEmoji: "🏰" },
            { text: "Les enfants jouèrent toute la journée dans le parc.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Être et avoir, irréguliers",
          steps: [
            { text: "Il fut très surpris par cette nouvelle.", illustrationEmoji: "⚠️" },
            { text: "Ils eurent beaucoup de chance ce jour-là.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète au passé simple : la petite fille ____ (rencontrer) un loup.", answer: "rencontra", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Verbe en -er, 3e personne du singulier : on ajoute -a, rencontra.", strictAccents: true },
        { order: 2, prompt: "Complète au passé simple : les enfants ____ (jouer) toute la journée.", answer: "jouèrent", kindWhenWrong: "Pas grave, on regarde ça ensemble.", explanationWhenWrong: "Verbe en -er, 3e personne du pluriel : on ajoute -èrent, jouèrent.", strictAccents: true },
        { order: 3, prompt: "Complète au passé simple : il ____ (être) très surpris.", answer: "fut", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Être est irrégulier au passé simple ; à la 3e personne du singulier, on écrit fut.", strictAccents: true },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne réponse : ils ____ (avoir) beaucoup de chance.",
          options: ["eurent", "avaient", "eut"],
          answer: "eurent",
          kindWhenWrong: "Pas grave du tout, on y retourne ensemble.",
          explanationWhenWrong: "Avoir est irrégulier au passé simple ; à la 3e personne du pluriel, on écrit eurent.",
          strictAccents: true
        },
        { order: 5, prompt: "Complète au passé simple : la princesse ____ (arriver) au château.", answer: "arriva", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Verbe en -er, 3e personne du singulier : arriva.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux verbes au passé simple. Le chevalier ____ (arriver) au village et les villageois ____ (crier) de joie.", answer: "arriva crièrent", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble.", explanationWhenWrong: "Arriver et crier sont des verbes en -er ; 3e personne du singulier -a (arriva), 3e personne du pluriel -èrent (crièrent).", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Les pronoms personnels sujets et compléments",
      xpReward: 20,
      story: {
        hook: "Imagine des petits mots magiques qui remplacent un nom pour ne pas le répéter sans cesse.",
        concreteExample: "Regarde : Marie mange une pomme. Elle la mange avec plaisir. Que remplacent elle et la ?",
        reveal: "Elle remplace Marie (pronom personnel sujet), la remplace une pomme (pronom personnel complément).",
        bridgeToConcept: "Les pronoms personnels sujets (je, tu, il, elle, nous, vous, ils, elles) remplacent le sujet. Les pronoms personnels compléments (me, te, le, la, nous, vous, les, lui, leur) remplacent un complément.",
        illustrationEmoji: "🔄"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Paul lit un livre. Il le lit avec attention.", illustrationEmoji: "📖" },
            { text: "Ma sœur téléphone à son amie. Elle lui téléphone souvent.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Repère d'abord ce que le pronom remplace : un sujet ou un complément ?", illustrationEmoji: "🔍" },
            { text: "Les pronoms compléments se placent souvent juste avant le verbe.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans Paul lit un livre. Il le lit avec attention, que remplace le pronom il ?", answer: "Paul", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Il remplace le sujet Paul : c'est un pronom personnel sujet." },
        { order: 2, prompt: "Dans Paul lit un livre. Il le lit avec attention, que remplace le pronom le ?", answer: "un livre", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Le remplace le complément un livre : c'est un pronom personnel complément." },
        { order: 3, prompt: "Dans ma sœur téléphone à son amie. Elle lui téléphone souvent, que remplace lui ?", answer: "à son amie", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Lui remplace le complément à son amie : c'est un pronom personnel complément (COI)." },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne réponse : dans nous mangeons des fraises, nous est un pronom personnel...",
          options: ["sujet", "complément", "possessif"],
          answer: "sujet",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Nous remplace le groupe sujet et fait l'action du verbe : c'est un pronom personnel sujet."
        },
        { order: 5, prompt: "Dans les enfants jouent, ils s'amusent bien, que remplace ils ?", answer: "les enfants", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Ils remplace le sujet les enfants : c'est un pronom personnel sujet." },
        { order: 6, prompt: "Défi : dans mon frère aime les gâteaux et il les mange toujours, cite le pronom sujet puis le pronom complément, dans l'ordre.", answer: "il les", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Il remplace le sujet mon frère (pronom sujet), les remplace le complément les gâteaux (pronom complément)." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Ou ou où",
      xpReward: 20,
      story: {
        hook: "Imagine deux petits mots identiques à l'oreille mais qui n'ont pas le même rôle : l'un propose un choix, l'autre indique un lieu.",
        concreteExample: "Regarde : tu préfères le thé ___ le café ? Est-ce que c'est ou ou où ?",
        reveal: "Ou (sans accent) exprime un choix, remplaçable par ou bien. Où (avec accent grave) indique un lieu ou un moment, jamais remplaçable par ou bien.",
        bridgeToConcept: "Ou = choix, remplaçable par ou bien, sans accent. Où = lieu ou temps, avec un accent grave, jamais remplaçable par ou bien.",
        illustrationEmoji: "🧭"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Tu préfères le thé ou le café ? : choix, remplaçable par ou bien.", illustrationEmoji: "☕" },
            { text: "Où habites-tu ? : lieu, on ne peut pas dire ou bien habites-tu.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce du test",
          steps: [
            { text: "Sais-tu où se trouve la gare ? : lieu.", illustrationEmoji: "🚉" },
            { text: "Veux-tu du jus ou de l'eau ? : choix.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : tu préfères le thé ___ le café ? (ou/où)", answer: "ou", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "On peut dire ou bien : c'est le choix ou, sans accent.", strictAccents: true },
        { order: 2, prompt: "Complète : ___ habites-tu exactement ? (ou/où)", answer: "où", kindWhenWrong: "Pas grave, on regarde ça ensemble.", explanationWhenWrong: "Ça indique un lieu, jamais remplaçable par ou bien : où, avec un accent grave.", strictAccents: true },
        { order: 3, prompt: "Complète : sais-tu ___ se trouve la gare ? (ou/où)", answer: "où", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Ça indique un lieu : où, avec un accent grave.", strictAccents: true },
        { order: 4, prompt: "Complète : veux-tu du jus ___ de l'eau ? (ou/où)", answer: "ou", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "On peut dire ou bien : c'est le choix ou, sans accent.", strictAccents: true },
        { order: 5, prompt: "Complète : je ne sais pas ___ j'ai posé mes clés. (ou/où)", answer: "où", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Ça indique un lieu : où, avec un accent grave.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. Dis-moi ___ (où) tu vas et si tu préfères marcher ___ (ou) prendre le bus.", answer: "où ou", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble.", explanationWhenWrong: "Où indique le lieu (avec accent), ou exprime un choix, remplaçable par ou bien (sans accent).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Multiplier par 9",
      xpReward: 20,
      story: {
        hook: "Imagine une astuce très rapide pour multiplier par 9, sans apprendre toute la table par cœur.",
        concreteExample: "Calcule 7 x 9 en utilisant l'astuce du x10 moins 1 fois le nombre.",
        reveal: "7 x 10 = 70, puis 70 - 7 = 63. Donc 7 x 9 = 63.",
        bridgeToConcept: "Multiplier par 9 = multiplier par 10, puis soustraire le nombre de départ.",
        illustrationEmoji: "✨"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "8 x 9 : 8 x 10 = 80, puis 80 - 8 = 72.", illustrationEmoji: "🔢" },
            { text: "6 x 9 : 6 x 10 = 60, puis 60 - 6 = 54.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "12 x 9 : 12 x 10 = 120, puis 120 - 12 = 108.", illustrationEmoji: "🔍" },
            { text: "15 x 9 : 15 x 10 = 150, puis 150 - 15 = 135.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 7 x 9", answer: "63", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "7 x 10 = 70, puis 70 - 7 = 63." },
        { order: 2, prompt: "Calcule : 8 x 9", answer: "72", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "8 x 10 = 80, puis 80 - 8 = 72." },
        { order: 3, prompt: "Calcule : 6 x 9", answer: "54", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "6 x 10 = 60, puis 60 - 6 = 54." },
        { order: 4, prompt: "Calcule : 12 x 9", answer: "108", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "12 x 10 = 120, puis 120 - 12 = 108." },
        { order: 5, prompt: "Calcule : 15 x 9", answer: "135", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "15 x 10 = 150, puis 150 - 15 = 135." },
        { order: 6, prompt: "Défi : calcule 20 x 9, en utilisant l'astuce du x10 moins le nombre.", answer: "180", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "20 x 10 = 200, puis 200 - 20 = 180." }
      ]
    }
  ]
};
