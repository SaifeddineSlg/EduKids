import { DayCurriculum } from "@/models/types";

export const day08: DayCurriculum = {
  dayNumber: 8,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Compter et rendre la monnaie",
      xpReward: 24,
      story: {
        hook: "Imagine que tu achètes un jouet à la boutique et que tu dois calculer la monnaie à rendre.",
        concreteExample: "Un jouet coûte 7 euros. Tu payes avec un billet de 10 euros. Combien te rend-on ?",
        reveal: "10 - 7 = 3. On te rend 3 euros. Bravo, tu as calculé la monnaie !",
        bridgeToConcept: "Pour trouver la monnaie à rendre, on soustrait le prix du montant payé.",
        illustrationEmoji: "💶"
      },
      examples: [
        {
          title: "Calculer la monnaie",
          steps: [
            { text: "Un livre coûte 12 euros, tu payes avec 20 euros : 20 - 12 = 8 euros de monnaie.", illustrationEmoji: "🔢" },
            { text: "Une glace coûte 3 euros, tu payes avec 5 euros : 5 - 3 = 2 euros de monnaie.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Additionner plusieurs achats",
          steps: [
            { text: "Un crayon à 2 euros et une gomme à 1 euro : 2 + 1 = 3 euros au total.", illustrationEmoji: "🔍" },
            { text: "Avec 10 euros, il reste 10 - 3 = 7 euros.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Un jouet coûte 8 euros. Tu payes avec un billet de 10 euros. Combien te rend-on ?", answer: "2", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "10 - 8 = 2 euros de monnaie." },
        { order: 2, prompt: "Un livre coûte 14 euros. Tu payes avec un billet de 20 euros. Combien te rend-on ?", answer: "6", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "20 - 14 = 6 euros de monnaie." },
        { order: 3, prompt: "Tu achètes un crayon à 2 euros et un cahier à 5 euros. Combien dépenses-tu en tout ?", answer: "7", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "2 + 5 = 7 euros dépensés." },
        { order: 4, prompt: "Tu as dépensé 7 euros et tu payes avec 10 euros. Combien te reste-t-il en monnaie ?", answer: "3", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "10 - 7 = 3 euros de monnaie." },
        {
          order: 5,
          type: "mcq",
          prompt: "Une glace coûte 4 euros. Tu payes avec 5 euros. Combien te rend-on ?",
          options: ["1", "2", "9"],
          answer: "1",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "5 - 4 = 1 euro de monnaie."
        },
        { order: 6, prompt: "Défi : tu achètes un ballon à 6 euros et un livre à 9 euros. Tu payes avec un billet de 20 euros. Combien te rend-on ?", answer: "5", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "6 + 9 = 15 euros dépensés, puis 20 - 15 = 5 euros de monnaie." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le présent des verbes en -ir comme finir",
      xpReward: 24,
      story: {
        hook: "Découvrons aujourd'hui une nouvelle famille de verbes, ceux qui se terminent par -ir comme finir.",
        concreteExample: "Écoute : je finis mon repas. Tu finis tes devoirs. Il finit sa lecture.",
        reveal: "Ces verbes se conjuguent avec les terminaisons -is, -is, -it, -issons, -issez, -issent. On entend le son \"iss\" aux personnes du pluriel.",
        bridgeToConcept: "Finir au présent : je finis, tu finis, il finit, nous finissons, vous finissez, ils finissent.",
        illustrationEmoji: "🏁"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Elle choisit un livre à la bibliothèque.", illustrationEmoji: "📚" },
            { text: "Nous grandissons chaque année.", illustrationEmoji: "🌱" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Au singulier, la terminaison ne s'entend presque pas : finis, finis, finit.", illustrationEmoji: "👂" },
            { text: "Au pluriel, on entend bien le son \"iss\" : finissons, finissez, finissent.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je ____ (finir) mon repas.", answer: "finis", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec je, le présent de finir est finis.", strictAccents: true },
        { order: 2, prompt: "Complète : Tu ____ (choisir) un livre à la bibliothèque.", answer: "choisis", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Avec tu, le présent de choisir est choisis.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Il ____ (grandir) très vite.",
          options: ["grandit", "grandis", "grandissent"],
          answer: "grandit",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec il, le présent de grandir est grandit, sans s.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Nous ____ (finir) nos devoirs avant le dîner.", answer: "finissons", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Avec nous, le présent de finir est finissons, avec le son \"iss\".", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Elles ____ (réfléchir) avant de répondre.",
          options: ["réfléchissent", "réfléchissons", "réfléchit"],
          answer: "réfléchissent",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec elles, le présent de réfléchir est réfléchissent, avec le son \"iss\" et un ent final.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux verbes. Vous ____ (réussir) votre exercice et nous ____ (applaudir).", answer: "réussissez applaudissons", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Vous réussissez (terminaison -issez) et nous applaudissons (terminaison -issons).", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Les pronoms personnels sujets",
      xpReward: 24,
      story: {
        hook: "Imagine qu'un petit mot remplace le nom pour ne pas se répéter sans cesse.",
        concreteExample: "Regarde : Balkis joue dehors. Balkis rentre pour goûter. Comment éviter de répéter Balkis ?",
        reveal: "On remplace par elle : Balkis joue dehors. Elle rentre pour goûter. Elle est un pronom personnel sujet.",
        bridgeToConcept: "Les pronoms personnels sujets remplacent le nom sujet : je, tu, il, elle, on, nous, vous, ils, elles.",
        illustrationEmoji: "🔄"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Bayrem lit un livre. Il adore les histoires : il remplace Bayrem.", illustrationEmoji: "📖" },
            { text: "Les enfants jouent dehors. Ils rentrent bientôt : ils remplace les enfants.", illustrationEmoji: "🏃" }
          ]
        },
        {
          title: "L'astuce pour les reconnaître",
          steps: [
            { text: "Ces mots remplacent toujours un nom placé avant.", illustrationEmoji: "🔍" },
            { text: "Je, tu, il, elle, on, nous, vous, ils, elles sont les neuf pronoms personnels sujets.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans Balkis joue dehors. Elle rentre pour goûter, quel pronom remplace Balkis ?", answer: "Elle", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Elle remplace Balkis, c'est un pronom personnel sujet féminin singulier." },
        { order: 2, prompt: "Dans les enfants jouent dehors. Ils rentrent bientôt, quel pronom remplace les enfants ?", answer: "Ils", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Ils remplace les enfants, c'est un pronom personnel sujet masculin pluriel." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis le pronom qui remplace mon frère et moi : ___ jouons au ballon.",
          options: ["Nous", "Vous", "Ils"],
          answer: "Nous",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Nous remplace mon frère et moi, car on parle de deux personnes dont soi-même."
        },
        { order: 4, prompt: "Remplace le sujet par un pronom : Le chien aboie fort. ___ aboie fort.", answer: "Il", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Il remplace le chien, un nom masculin singulier." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le pronom qui remplace toi et tes amis : ___ partez en voyage.",
          options: ["Vous", "Nous", "Elles"],
          answer: "Vous",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Vous remplace toi et tes amis, à qui l'on s'adresse directement."
        },
        { order: 6, prompt: "Défi : remplace les deux sujets par des pronoms. Ma sœur chante bien. ___ (Elle) chante bien. Mes cousines dansent. ___ (Elles) dansent.", answer: "Elle Elles", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Elle remplace ma sœur (féminin singulier) et Elles remplace mes cousines (féminin pluriel)." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Ou ou où : le test avec ou bien",
      xpReward: 24,
      story: {
        hook: "Un petit accent change tout le sens d'un mot pourtant identique à l'oreille.",
        concreteExample: "Regarde : ___ vas-tu ? Est-ce que c'est ou ou où ?",
        reveal: "On essaie de remplacer par ou bien : ou bien vas-tu, ça ne veut rien dire. Ici, le mot pose une question de lieu, donc on écrit où, avec un accent grave.",
        bridgeToConcept: "Où (avec accent) indique un lieu ou une question de lieu. Ou (sans accent) relie deux choix, remplaçable par ou bien.",
        illustrationEmoji: "🧭"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Tu préfères le chocolat ou la vanille : on peut dire ou bien, donc ou, sans accent.", illustrationEmoji: "🍫" },
            { text: "Où habites-tu : c'est une question de lieu, donc où, avec un accent.", illustrationEmoji: "🏠" }
          ]
        },
        {
          title: "L'astuce du test",
          steps: [
            { text: "Essaie de remplacer par ou bien.", illustrationEmoji: "🔍" },
            { text: "Si ça marche, c'est ou. Sinon, c'est où (question de lieu).", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Tu préfères le thé ___ le café ? (ou/où)", answer: "ou", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "On peut dire ou bien le café, donc on écrit ou, sans accent.", strictAccents: true },
        { order: 2, prompt: "Complète : ___ habites-tu exactement ? (ou/où)", answer: "où", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "C'est une question de lieu, donc on écrit où, avec un accent grave.", strictAccents: true },
        { order: 3, prompt: "Complète : Je ne sais pas ___ il est parti. (ou/où)", answer: "où", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "C'est une question de lieu (à quel endroit), donc on écrit où, avec un accent.", strictAccents: true },
        { order: 4, prompt: "Complète : Veux-tu du jus ___ de l'eau ? (ou/où)", answer: "ou", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "On peut dire ou bien de l'eau, donc on écrit ou, sans accent.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Dis-moi ___ tu vas ce week-end.",
          options: ["où", "ou"],
          answer: "où",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "C'est une question de lieu, donc on écrit où, avec un accent grave.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Dis-moi ___ (où) tu ranges tes affaires, ici ___ (ou) là-bas.", answer: "où ou", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Où pose une question de lieu (avec accent), et ou relie deux choix, remplaçable par ou bien (sans accent).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "L'astuce pour ajouter 9",
      xpReward: 24,
      story: {
        hook: "Imagine un moyen rapide d'ajouter 9 sans compter un par un.",
        concreteExample: "Tu as 24 billes et on t'en donne 9 de plus. Combien en as-tu maintenant ?",
        reveal: "Au lieu d'ajouter 9, on ajoute 10 puis on retire 1 : 24 + 10 = 34, puis 34 - 1 = 33. C'est plus rapide !",
        bridgeToConcept: "Pour ajouter 9 à un nombre, on ajoute 10 puis on retire 1.",
        illustrationEmoji: "⚡"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "15 + 9 : on fait 15 + 10 = 25, puis 25 - 1 = 24.", illustrationEmoji: "🔢" },
            { text: "Donc 15 + 9 = 24.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "38 + 9 : on fait 38 + 10 = 48, puis 48 - 1 = 47.", illustrationEmoji: "🔍" },
            { text: "Donc 38 + 9 = 47.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 12 + 9", answer: "21", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "12 + 10 = 22, puis 22 - 1 = 21." },
        { order: 2, prompt: "Calcule : 27 + 9", answer: "36", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "27 + 10 = 37, puis 37 - 1 = 36." },
        { order: 3, prompt: "Calcule : 45 + 9", answer: "54", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "45 + 10 = 55, puis 55 - 1 = 54." },
        { order: 4, prompt: "Calcule : 63 + 9", answer: "72", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "63 + 10 = 73, puis 73 - 1 = 72." },
        { order: 5, prompt: "Calcule : 58 + 9", answer: "67", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "58 + 10 = 68, puis 68 - 1 = 67." },
        { order: 6, prompt: "Défi : calcule 99 + 9", answer: "108", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "99 + 10 = 109, puis 109 - 1 = 108." }
      ]
    }
  ]
};
