import { DayCurriculum } from "@/models/types";

export const day13: DayCurriculum = {
  dayNumber: 13,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "La monnaie : les euros",
      xpReward: 24,
      story: {
        hook: "Imagine que tu vas à la boulangerie avec des pièces et des billets dans ta poche.",
        concreteExample: "Tu as une pièce de 2 euros et une pièce de 1 euro. Combien d'euros as-tu en tout ?",
        reveal: "2 euros plus 1 euro, ça fait 3 euros. On additionne les euros comme on additionne des nombres. Bravo, tu sais compter de l'argent !",
        bridgeToConcept: "Pour compter de l'argent, on additionne la valeur de chaque pièce ou billet.",
        illustrationEmoji: "💶"
      },
      examples: [
        {
          title: "Compter des pièces",
          steps: [
            { text: "Une pièce de 2 euros et une pièce de 2 euros font 4 euros.", illustrationEmoji: "🪙" },
            { text: "2 + 2 = 4 euros.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Compter des pièces et des billets",
          steps: [
            { text: "Un billet de 5 euros et une pièce de 1 euro font 6 euros.", illustrationEmoji: "💶" },
            { text: "5 + 1 = 6 euros.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Tu as une pièce de 1 euro et une pièce de 2 euros. Combien d'euros as-tu ?", answer: "3", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "1 euro plus 2 euros, ça fait 3 euros." },
        { order: 2, prompt: "Tu as deux pièces de 2 euros. Combien d'euros as-tu ?", answer: "4", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "2 euros plus 2 euros, ça fait 4 euros." },
        { order: 3, prompt: "Tu as un billet de 5 euros et une pièce de 2 euros. Combien d'euros as-tu ?", answer: "7", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "5 euros plus 2 euros, ça fait 7 euros." },
        { order: 4, prompt: "Tu as trois pièces de 2 euros. Combien d'euros as-tu ?", answer: "6", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "2 euros plus 2 euros plus 2 euros, ça fait 6 euros." },
        { order: 5, prompt: "Tu as un billet de 10 euros et une pièce de 1 euro. Combien d'euros as-tu ?", answer: "11", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "10 euros plus 1 euro, ça fait 11 euros." },
        { order: 6, prompt: "Défi : tu as un billet de 5 euros, une pièce de 2 euros et une pièce de 1 euro. Combien d'euros as-tu ?", answer: "8", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "5 euros plus 2 euros plus 1 euro, ça fait 8 euros." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le verbe vouloir au présent",
      xpReward: 24,
      story: {
        hook: "Il existe un petit mot magique qui sert à dire ce que l'on souhaite.",
        concreteExample: "Écoute : je veux un gâteau. Tu veux jouer. Il veut dormir.",
        reveal: "Ce mot magique, c'est le verbe vouloir. À quoi sert-il ? Il sert à dire ce que l'on souhaite ou ce que l'on désire. Comment le reconnaître ? Il change selon la personne : veux, veux, veut...",
        bridgeToConcept: "Au présent : je veux, tu veux, il veut, elle veut.",
        illustrationEmoji: "🌟"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Je veux un gâteau au chocolat.", illustrationEmoji: "🍰" },
            { text: "Tu veux jouer dans le jardin.", illustrationEmoji: "⚽" },
            { text: "Il veut dormir un peu plus tard.", illustrationEmoji: "🛏️" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Avec je et tu, on écrit veux (avec un x).", illustrationEmoji: "🎵" },
            { text: "Avec il ou elle, on écrit veut (avec un t).", illustrationEmoji: "🎵" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je ____ un gâteau.", answer: "veux", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec je, le verbe vouloir devient veux : je veux un gâteau. Essaie de le lire à voix haute.", strictAccents: true },
        { order: 2, prompt: "Complète : Tu ____ jouer dehors.", answer: "veux", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Avec tu, comme avec je, le verbe vouloir devient veux.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Il ____ dormir.",
          options: ["veux", "veut", "voulons"],
          answer: "veut",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec il ou elle, le verbe vouloir devient veut (avec un t) : il veut dormir.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Elle ____ un verre d'eau.", answer: "veut", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Avec elle, comme avec il, le verbe vouloir devient veut.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Je ____ regarder un dessin animé.",
          options: ["veux", "veut", "voulez"],
          answer: "veux",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec je, on écrit toujours veux (avec un x à la fin).",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Tu ____ un jouet et elle ____ un livre.", answer: "veux veut", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Tu veux (avec tu, on écrit veux) et elle veut (avec elle, on écrit veut). Relis la phrase entière à voix haute.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "L'accord de l'adjectif : singulier et pluriel",
      xpReward: 24,
      story: {
        hook: "Imagine un adjectif qui doit s'habiller comme le nom qu'il accompagne.",
        concreteExample: "Regarde : un petit chien, des petits chiens. Qu'est-ce qui a changé à la fin de petit ?",
        reveal: "On a ajouté un s ! À quoi ça sert ? Ça montre que l'adjectif suit le nom : s'il y a plusieurs chiens, l'adjectif prend un s aussi. Comment le reconnaître ? Si le nom est au pluriel (des), l'adjectif prend un s.",
        bridgeToConcept: "L'adjectif s'accorde avec le nom : au pluriel, on ajoute un s à l'adjectif comme au nom.",
        illustrationEmoji: "👕"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Un grand arbre, des grands arbres.", illustrationEmoji: "🌳" },
            { text: "Une jolie fleur, des jolies fleurs.", illustrationEmoji: "🌸" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Regarde si le nom est au pluriel (des).", illustrationEmoji: "🔍" },
            { text: "Si oui, ajoute un s à l'adjectif aussi.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Écris au pluriel : un petit chien -> des ___ chiens", answer: "petits", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Petit devient petits au pluriel : on ajoute un s, comme pour le nom chiens." },
        { order: 2, prompt: "Écris au pluriel : une jolie fleur -> des ___ fleurs", answer: "jolies", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Jolie devient jolies au pluriel : on ajoute un s." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis l'accord correct : des ___ maisons (grand).",
          options: ["grand", "grande", "grandes"],
          answer: "grandes",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Maisons est féminin pluriel, donc l'adjectif devient grandes."
        },
        { order: 4, prompt: "Écris au pluriel : un beau dessin -> des ___ dessins", answer: "beaux", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Beau devient beaux au pluriel : c'est une exception, on ajoute un x et non un s." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis l'accord correct : des ballons ___ (rouge).",
          options: ["rouge", "rouges", "rougi"],
          answer: "rouges",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Ballons est masculin pluriel, donc l'adjectif devient rouges (on ajoute un s)."
        },
        { order: 6, prompt: "Défi : écris au pluriel les deux mots. un petit chat, une grande maison -> des ___ chats, des ___ maisons", answer: "petits grandes", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Petit devient petits (masculin pluriel) et grande devient grandes (féminin pluriel)." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "L'homophone a et à",
      xpReward: 24,
      story: {
        hook: "Imagine deux petits mots qui se prononcent pareil, mais qui ne s'écrivent pas pareil et ne veulent pas dire la même chose.",
        concreteExample: "Regarde : il a un chat et il va à l'école. Le premier a vient du verbe avoir, le second à est un petit mot invariable.",
        reveal: "À quoi ça sert de les différencier ? À bien écrire chaque mot selon son sens. Comment le reconnaître ? Si tu peux remplacer le mot par avait, c'est a (sans accent). Sinon, c'est à (avec un accent grave).",
        bridgeToConcept: "On écrit a (verbe avoir, on peut dire avait) ou à (petit mot invariable, jamais avait).",
        illustrationEmoji: "🔤"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Il a un vélo. (on peut dire : il avait un vélo)", illustrationEmoji: "🚲" },
            { text: "Il va à la piscine. (on ne peut pas dire : il va avait la piscine)", illustrationEmoji: "🏊" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Essaie de remplacer par avait dans ta tête.", illustrationEmoji: "🔍" },
            { text: "Si ça fonctionne, écris a. Sinon, écris à.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Il ___ un ballon rouge. (a ou à)", answer: "a", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "On peut dire il avait un ballon rouge, donc on écrit a sans accent.", strictAccents: true },
        { order: 2, prompt: "Complète : Elle va ___ l'école. (a ou à)", answer: "à", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "On ne peut pas dire elle va avait l'école, donc on écrit à avec un accent grave.", strictAccents: true },
        { order: 3, prompt: "Complète : Il ___ mangé une pomme. (a ou à)", answer: "a", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "On peut dire il avait mangé une pomme, donc on écrit a sans accent.", strictAccents: true },
        { order: 4, prompt: "Complète : Le chat dort ___ côté du feu. (a ou à)", answer: "à", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "On ne peut pas dire avait côté, donc on écrit à avec un accent grave.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le bon mot : Elle ___ une jolie robe.",
          options: ["a", "à"],
          answer: "a",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "On peut dire elle avait une jolie robe, donc on écrit a sans accent.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Il ___ (a) un cadeau et il le donne ___ (à) sa sœur.", answer: "a à", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Il a (verbe avoir, on peut dire avait) et à sa sœur (petit mot invariable, on ne peut pas dire avait).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Soustraire 9",
      xpReward: 24,
      story: {
        hook: "Comme pour ajouter 9, il existe une astuce magique pour soustraire 9 très vite.",
        concreteExample: "Pour calculer 24 - 9, tu peux d'abord enlever 10, puis ajouter 1.",
        reveal: "24 - 10 = 14, puis 14 + 1 = 15. Donc 24 - 9 = 15 ! Soustraire 9, c'est enlever 10 puis ajouter 1.",
        bridgeToConcept: "Pour soustraire 9 rapidement, on enlève 10 puis on ajoute 1.",
        illustrationEmoji: "🧮"
      },
      examples: [
        {
          title: "L'astuce -10 puis +1",
          steps: [
            { text: "16 - 9 : d'abord 16 - 10 = 6.", illustrationEmoji: "➖" },
            { text: "Puis 6 + 1 = 7. Donc 16 - 9 = 7.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "32 - 9 : d'abord 32 - 10 = 22.", illustrationEmoji: "➖" },
            { text: "Puis 22 + 1 = 23. Donc 32 - 9 = 23.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 15 - 9", answer: "6", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "15 - 10 = 5, puis 5 + 1 = 6. Donc 15 - 9 = 6." },
        { order: 2, prompt: "Calcule : 21 - 9", answer: "12", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "21 - 10 = 11, puis 11 + 1 = 12. Donc 21 - 9 = 12." },
        { order: 3, prompt: "Calcule : 27 - 9", answer: "18", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "27 - 10 = 17, puis 17 + 1 = 18. Donc 27 - 9 = 18." },
        { order: 4, prompt: "Calcule : 33 - 9", answer: "24", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "33 - 10 = 23, puis 23 + 1 = 24. Donc 33 - 9 = 24." },
        { order: 5, prompt: "Calcule : 40 - 9", answer: "31", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "40 - 10 = 30, puis 30 + 1 = 31. Donc 40 - 9 = 31." },
        { order: 6, prompt: "Défi : calcule 56 - 9", answer: "47", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "56 - 10 = 46, puis 46 + 1 = 47. Donc 56 - 9 = 47." }
      ]
    }
  ]
};
