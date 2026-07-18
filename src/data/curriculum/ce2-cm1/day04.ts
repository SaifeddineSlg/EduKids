import { DayCurriculum } from "@/models/types";

export const day04: DayCurriculum = {
  dayNumber: 4,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Lire l'heure sur une horloge",
      xpReward: 24,
      story: {
        hook: "Imagine une horloge avec une petite aiguille et une grande aiguille qui tournent toute la journée.",
        concreteExample: "La petite aiguille est sur le 3, la grande aiguille est sur le 12. Quelle heure est-il ?",
        reveal: "Il est 3 heures pile. La petite aiguille indique l'heure, la grande aiguille indique les minutes.",
        bridgeToConcept: "Quand la grande aiguille est sur le 12, c'est une heure pile.",
        illustrationEmoji: "🕒"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "Petite aiguille sur le 6, grande aiguille sur le 12 : il est 6 heures.", illustrationEmoji: "🕕" },
            { text: "Petite aiguille sur le 9, grande aiguille sur le 6 : il est 9 heures et demie.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Quand la grande aiguille est sur le 6, il s'est écoulé une demi-heure (30 minutes).", illustrationEmoji: "🔍" },
            { text: "Petite aiguille entre le 4 et le 5, grande aiguille sur le 6 : il est 4 heures et demie.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "La petite aiguille est sur le 3, la grande sur le 12. Quelle heure est-il ?", answer: "3 heures", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Grande aiguille sur 12 = heure pile, ici 3 heures." },
        { order: 2, prompt: "La petite aiguille est sur le 8, la grande sur le 12. Quelle heure est-il ?", answer: "8 heures", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Grande aiguille sur 12 = heure pile, ici 8 heures." },
        { order: 3, prompt: "La petite aiguille est entre le 5 et le 6, la grande sur le 6. Quelle heure est-il ?", answer: "5 heures et demie", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Grande aiguille sur 6 = et demie, ici 5 heures et demie." },
        { order: 4, prompt: "Combien de minutes dans une demi-heure ?", answer: "30", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Une demi-heure, c'est 30 minutes." },
        { order: 5, prompt: "Combien de minutes dans une heure entière ?", answer: "60", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Une heure entière, c'est 60 minutes." },
        { order: 6, prompt: "Défi : la petite aiguille est entre le 11 et le 12, la grande sur le 6. Quelle heure est-il ?", answer: "11 heures et demie", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Grande aiguille sur 6 = et demie, ici 11 heures et demie." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "L'imparfait de être et avoir",
      xpReward: 24,
      story: {
        hook: "Continuons notre voyage dans le passé avec deux verbes très spéciaux.",
        concreteExample: "Écoute : quand j'étais petit, j'avais un chien qui s'appelait Rex.",
        reveal: "J'étais et j'avais décrivent le passé. Ces deux verbes ont une racine spéciale à l'imparfait : ét- pour être, av- pour avoir, puis les mêmes terminaisons -ais, -ais, -ait, -ions, -iez, -aient.",
        bridgeToConcept: "Être à l'imparfait : j'étais, tu étais, il était... Avoir à l'imparfait : j'avais, tu avais, il avait...",
        illustrationEmoji: "🐕"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Nous étions heureux de nous retrouver.", illustrationEmoji: "😊" },
            { text: "Ils avaient beaucoup de jouets quand ils étaient enfants.", illustrationEmoji: "🧸" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Être à l'imparfait commence toujours par ét-.", illustrationEmoji: "🔍" },
            { text: "Avoir à l'imparfait commence toujours par av-.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Quand j'étais petit, j'____ (avoir) un chien.", answer: "avais", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec j', l'imparfait de avoir est avais. La racine av- reste toujours la même.", strictAccents: true },
        { order: 2, prompt: "Complète : Tu ____ (être) très content ce jour-là.", answer: "étais", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Avec tu, l'imparfait de être est étais. La racine ét- reste toujours la même.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Elle ____ (avoir) toujours faim l'après-midi.",
          options: ["avait", "avais", "avaient"],
          answer: "avait",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec elle, l'imparfait de avoir est avait. Avais est pour je ou tu, avaient est pour ils.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Nous ____ (être) très fiers de notre travail.", answer: "étions", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Avec nous, l'imparfait de être est étions, avec la terminaison -ions.", strictAccents: true },
        { order: 5, prompt: "Complète : Vous ____ (avoir) raison depuis le début.", answer: "aviez", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec vous, l'imparfait de avoir est aviez, avec la terminaison -iez.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux verbes. Ils ____ (être) fatigués car ils ____ (avoir) beaucoup marché.", answer: "étaient avaient", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Ils étaient (imparfait de être, racine ét-) et ils avaient (imparfait de avoir, racine av-).", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Le pluriel des noms en -eu et -eau",
      xpReward: 24,
      story: {
        hook: "Imagine un jeu qui devient plusieurs jeux d'un coup de baguette magique.",
        concreteExample: "Regarde : un jeu, des ___. Comment écrire le pluriel de jeu ?",
        reveal: "Un jeu devient des jeux : on ajoute un x, pas un s ! C'est la règle spéciale des noms en -eu et -eau.",
        bridgeToConcept: "Les noms en -eu et -eau prennent un x au pluriel : un jeu → des jeux, un château → des châteaux.",
        illustrationEmoji: "🎲"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Un cheveu, des cheveux.", illustrationEmoji: "💇" },
            { text: "Un bateau, des bateaux.", illustrationEmoji: "⛵" }
          ]
        },
        {
          title: "L'exception à connaître",
          steps: [
            { text: "Un pneu fait exception : des pneus, avec un simple s.", illustrationEmoji: "🚗" },
            { text: "Toutes les autres suivent la règle du x.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : un jeu, des ___", answer: "jeux", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Un jeu prend un x au pluriel : des jeux." },
        { order: 2, prompt: "Complète : un château, des ___", answer: "châteaux", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Un château prend un x au pluriel : des châteaux." },
        { order: 3, prompt: "Complète : un cheveu, des ___", answer: "cheveux", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Un cheveu prend un x au pluriel : des cheveux." },
        { order: 4, prompt: "Complète : un bateau, des ___", answer: "bateaux", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Un bateau prend un x au pluriel : des bateaux." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : un pneu, des...",
          options: ["pneus", "pneux", "pneuxs"],
          answer: "pneus",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Pneu est une exception : il prend un simple s au pluriel."
        },
        { order: 6, prompt: "Défi : complète les deux mots. J'ai vu un beau ___ (chapeau) et un joli ___ (oiseau) au pluriel : des beaux ___ et des jolis ___.", answer: "chapeaux oiseaux", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Chapeau et oiseau prennent tous les deux un x au pluriel." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Leur ou leurs",
      xpReward: 24,
      story: {
        hook: "Imagine un mot magique qui change parfois d'habit selon ce qu'il désigne.",
        concreteExample: "Regarde : les enfants rangent ___ jouets. Est-ce que leur prend un s ?",
        reveal: "Les enfants ont plusieurs jouets, donc on écrit leurs, avec un s. Mais si chacun n'a qu'une seule chose (comme leur maison), on n'écrit pas de s.",
        bridgeToConcept: "Leurs prend un s quand la chose possédée est au pluriel (leurs jouets). Leur reste sans s quand la chose possédée est au singulier (leur maison).",
        illustrationEmoji: "🏠"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Les enfants rangent leurs jouets : plusieurs jouets, donc leurs avec un s.", illustrationEmoji: "🧸" },
            { text: "Les enfants aiment leur maison : une seule maison chacun, donc leur sans s.", illustrationEmoji: "🏠" }
          ]
        },
        {
          title: "L'astuce du test",
          steps: [
            { text: "Regarde le mot juste après leur/leurs : est-il au singulier ou au pluriel ?", illustrationEmoji: "🔍" },
            { text: "Mot au pluriel → leurs. Mot au singulier → leur.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Les enfants rangent ___ jouets. (leur/leurs)", answer: "leurs", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Jouets est au pluriel, donc leurs prend un s.", strictAccents: true },
        { order: 2, prompt: "Complète : Ils aiment ___ maison. (leur/leurs)", answer: "leur", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Maison est au singulier (chacun n'a qu'une seule maison), donc leur ne prend pas de s.", strictAccents: true },
        { order: 3, prompt: "Complète : Les élèves écoutent ___ maîtresse. (leur/leurs)", answer: "leur", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Maîtresse est au singulier, donc leur ne prend pas de s.", strictAccents: true },
        { order: 4, prompt: "Complète : Les chats attrapent ___ souris. (leur/leurs)", answer: "leurs", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Souris est au pluriel ici, donc leurs prend un s.", strictAccents: true },
        { order: 5, prompt: "Complète : Elles adorent ___ chien. (leur/leurs)", answer: "leur", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Chien est au singulier, donc leur ne prend pas de s.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. Les parents préparent ___ (leur) repas et rangent ___ (leurs) affaires.", answer: "leur leurs", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Leur repas (mot au singulier, donc leur sans s) et leurs affaires (mot au pluriel, donc leurs avec un s).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Compter de 3 en 3",
      xpReward: 24,
      story: {
        hook: "Imagine que tu sautes de marche en marche, en avançant toujours de 3.",
        concreteExample: "Tu commences à 0, et tu sautes de 3 en 3 : 0, 3, 6... Que vient-il après 6 ?",
        reveal: "Après 6, tu ajoutes encore 3 : ça fait 9. Compter de 3 en 3, c'est ajouter 3 à chaque fois.",
        bridgeToConcept: "Compter de 3 en 3 : 0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30.",
        illustrationEmoji: "🦘"
      },
      examples: [
        {
          title: "Compter en avançant",
          steps: [
            { text: "0, 3, 6, 9, 12 : chaque nombre ajoute 3 au précédent.", illustrationEmoji: "🔍" },
            { text: "15, 18, 21, 24 : on continue toujours d'ajouter 3.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Compter en reculant",
          steps: [
            { text: "On peut aussi compter à l'envers : 30, 27, 24, 21...", illustrationEmoji: "🔍" },
            { text: "Chaque nombre retire 3 au précédent.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète la suite : 0, 3, 6, ___", answer: "9", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "6 + 3 = 9." },
        { order: 2, prompt: "Complète la suite : 9, 12, ___", answer: "15", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "12 + 3 = 15." },
        { order: 3, prompt: "Complète la suite : 15, 18, ___", answer: "21", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "18 + 3 = 21." },
        { order: 4, prompt: "Complète la suite : 21, 24, ___", answer: "27", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "24 + 3 = 27." },
        { order: 5, prompt: "Complète la suite à l'envers : 30, 27, ___", answer: "24", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "27 - 3 = 24." },
        { order: 6, prompt: "Défi : complète la suite : 12, 15, 18, ___, ___", answer: "21 24", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "18 + 3 = 21, puis 21 + 3 = 24." }
      ]
    }
  ]
};
