import { DayCurriculum } from "@/models/types";

export const day19: DayCurriculum = {
  dayNumber: 19,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Résoudre un problème à deux étapes",
      xpReward: 26,
      story: {
        hook: "Parfois, pour résoudre un problème, il faut faire deux calculs l'un après l'autre.",
        concreteExample: "Léo a 12 billes. Il en gagne 5, puis il en perd 3. Combien de billes a-t-il maintenant ?",
        reveal: "D'abord 12 + 5 = 17, puis 17 - 3 = 14. Léo a donc 14 billes ! On avance étape par étape, sans se presser.",
        bridgeToConcept: "Pour résoudre un problème à deux étapes, on fait le premier calcul, puis on utilise ce résultat pour faire le deuxième calcul.",
        illustrationEmoji: "🧩"
      },
      examples: [
        {
          title: "Un problème en deux étapes",
          steps: [
            { text: "Emma a 20 bonbons. Elle en donne 6 à son frère, puis en mange 4.", illustrationEmoji: "🍬" },
            { text: "20 - 6 = 14, puis 14 - 4 = 10. Il lui reste 10 bonbons.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Tom a 8 euros. Il reçoit 10 euros, puis dépense 5 euros.", illustrationEmoji: "💶" },
            { text: "8 + 10 = 18, puis 18 - 5 = 13. Il lui reste 13 euros.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Nina a 10 billes. Elle en gagne 6, puis en perd 2. Combien de billes a-t-elle maintenant ?", answer: "14", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "10 + 6 = 16, puis 16 - 2 = 14. Nina a donc 14 billes." },
        { order: 2, prompt: "Un panier contient 15 pommes. On en enlève 5, puis on en ajoute 3. Combien reste-t-il de pommes ?", answer: "13", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "15 - 5 = 10, puis 10 + 3 = 13. Il reste donc 13 pommes." },
        {
          order: 3,
          type: "mcq",
          prompt: "Léa a 7 euros. Elle reçoit 8 euros, puis dépense 4 euros. Combien lui reste-t-il ?",
          options: ["11", "15", "19"],
          answer: "11",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "7 + 8 = 15, puis 15 - 4 = 11. Il lui reste donc 11 euros."
        },
        { order: 4, prompt: "Un sac contient 20 billes. On en enlève 12, puis on en ajoute 9. Combien reste-t-il de billes ?", answer: "17", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "20 - 12 = 8, puis 8 + 9 = 17. Il reste donc 17 billes." },
        {
          order: 5,
          type: "mcq",
          prompt: "Sami a 30 images. Il en donne 10 à un ami, puis en reçoit 6. Combien a-t-il d'images maintenant ?",
          options: ["26", "20", "46"],
          answer: "26",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "30 - 10 = 20, puis 20 + 6 = 26. Sami a donc 26 images."
        },
        { order: 6, prompt: "Défi : Yasmine a 18 bonbons. Elle en mange 5, puis sa maman lui en donne 7 de plus. Combien de bonbons a-t-elle maintenant ?", answer: "20", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "18 - 5 = 13, puis 13 + 7 = 20. Yasmine a donc 20 bonbons." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le futur proche : je vais + verbe",
      xpReward: 24,
      story: {
        hook: "Pour parler de ce qui va se passer très bientôt, on utilise une petite formule magique.",
        concreteExample: "Écoute : je vais manger. Tu vas jouer. Il va dormir.",
        reveal: "Cette formule s'appelle le futur proche. À quoi sert-elle ? Elle sert à dire ce qui va se passer bientôt. Comment la reconnaître ? On utilise le verbe aller conjugué, suivi d'un verbe à l'infinitif.",
        bridgeToConcept: "Le futur proche se forme avec le verbe aller conjugué, suivi d'un autre verbe à l'infinitif : je vais manger, tu vas jouer, il va dormir.",
        illustrationEmoji: "⏭️"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Je vais manger une pomme.", illustrationEmoji: "🍎" },
            { text: "Tu vas jouer dans le jardin.", illustrationEmoji: "⚽" },
            { text: "Il va dormir bientôt.", illustrationEmoji: "😴" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "On conjugue seulement le verbe aller : vais, vas, va.", illustrationEmoji: "🎵" },
            { text: "Le deuxième verbe reste à l'infinitif, sans changer.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je ____ (aller) manger une pomme.", answer: "vais", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec je, le verbe aller devient vais : je vais manger. Essaie de le lire à voix haute.", strictAccents: true },
        { order: 2, prompt: "Complète : Tu ____ (aller) jouer dans le jardin.", answer: "vas", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Avec tu, le verbe aller devient vas : tu vas jouer.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Il ____ (aller) dormir bientôt.",
          options: ["vais", "vas", "va"],
          answer: "va",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec il ou elle, le verbe aller devient va : il va dormir.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Elle ____ (aller) lire une histoire.", answer: "va", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Avec elle, comme avec il, le verbe aller devient va.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la phrase correcte au futur proche.",
          options: ["Je vais manger une pomme.", "Je vais mange une pomme.", "Je va manger une pomme."],
          answer: "Je vais manger une pomme.",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Au futur proche, le deuxième verbe reste à l'infinitif : je vais manger.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Tu ____ (aller) chanter et elle ____ (aller) danser.", answer: "vas va", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Tu vas (avec tu, on écrit vas) et elle va (avec elle, on écrit va). Relis la phrase entière à voix haute.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "L'ordre alphabétique",
      xpReward: 24,
      story: {
        hook: "Toutes les lettres de l'alphabet ont une place bien précise, toujours dans le même ordre.",
        concreteExample: "Regarde : a, b, c, d... Pour ranger des mots, on regarde d'abord leur première lettre.",
        reveal: "Chat vient avant lion, car c vient avant l dans l'alphabet. À quoi ça sert ? À ranger des mots dans un ordre, comme dans un dictionnaire. Comment faire ? On compare la première lettre de chaque mot.",
        bridgeToConcept: "Pour ranger des mots dans l'ordre alphabétique, on compare leur première lettre selon l'ordre de l'alphabet : a, b, c, d...",
        illustrationEmoji: "🔠"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Chat, lion, ours : c vient avant l, qui vient avant o.", illustrationEmoji: "🔤" },
            { text: "Chat, lion, ours est donc déjà dans l'ordre alphabétique.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour comparer",
          steps: [
            { text: "On regarde la première lettre de chaque mot.", illustrationEmoji: "🔍" },
            { text: "On les range comme dans l'alphabet : a avant b avant c...", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Quel mot vient en premier dans l'ordre alphabétique : banane ou pomme ?", answer: "banane", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "B vient avant p dans l'alphabet, donc banane vient avant pomme." },
        { order: 2, prompt: "Quel mot vient en premier dans l'ordre alphabétique : chat ou arbre ?", answer: "arbre", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "A vient avant c dans l'alphabet, donc arbre vient avant chat." },
        {
          order: 3,
          type: "mcq",
          prompt: "Range ces mots dans l'ordre alphabétique : lion, chat, ours.",
          options: ["chat, lion, ours", "lion, ours, chat", "ours, chat, lion"],
          answer: "chat, lion, ours",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "C vient avant l, qui vient avant o : chat, lion, ours."
        },
        { order: 4, prompt: "Quel mot vient en premier dans l'ordre alphabétique : école ou dinosaure ?", answer: "dinosaure", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "D vient avant é (e) dans l'alphabet, donc dinosaure vient avant école." },
        {
          order: 5,
          type: "mcq",
          prompt: "Range ces mots dans l'ordre alphabétique : vélo, ami, tigre.",
          options: ["ami, tigre, vélo", "vélo, ami, tigre", "tigre, vélo, ami"],
          answer: "ami, tigre, vélo",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "A vient avant t, qui vient avant v : ami, tigre, vélo."
        },
        { order: 6, prompt: "Défi : range ces trois mots dans l'ordre alphabétique : soleil, maison, jardin.", answer: "jardin, maison, soleil", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "J vient avant m, qui vient avant s : jardin, maison, soleil." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "L'homophone on et ont",
      xpReward: 24,
      story: {
        hook: "Encore deux petits mots qui se prononcent pareil, mais qui ne s'écrivent pas pareil et ne veulent pas dire la même chose.",
        concreteExample: "Regarde : on joue dans le jardin. Les enfants ont un ballon. Le premier remplace quelqu'un, le second vient du verbe avoir.",
        reveal: "À quoi ça sert de les différencier ? À bien écrire chaque mot selon son sens. Comment le reconnaître ? Si tu peux remplacer le mot par avaient, c'est ont (verbe avoir). Sinon, c'est on (comme il ou elle).",
        bridgeToConcept: "On écrit on (comme il, elle, on peut dire il joue) ou ont (verbe avoir, on peut dire avaient).",
        illustrationEmoji: "🔤"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "On joue dans le jardin. (on peut dire : il joue dans le jardin)", illustrationEmoji: "🌳" },
            { text: "Les enfants ont un ballon. (on peut dire : les enfants avaient un ballon)", illustrationEmoji: "⚽" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Essaie de remplacer par avaient dans ta tête.", illustrationEmoji: "🔍" },
            { text: "Si ça fonctionne, écris ont. Sinon, écris on.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : ___ joue dans la cour. (on ou ont)", answer: "on", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "On peut dire il joue dans la cour, donc on écrit on.", strictAccents: true },
        { order: 2, prompt: "Complète : Les filles ___ une trottinette. (on ou ont)", answer: "ont", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "On peut dire les filles avaient une trottinette, donc on écrit ont.", strictAccents: true },
        { order: 3, prompt: "Complète : ___ mange une glace. (on ou ont)", answer: "on", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "On peut dire il mange une glace, donc on écrit on.", strictAccents: true },
        { order: 4, prompt: "Complète : Mes parents ___ un chat. (on ou ont)", answer: "ont", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "On peut dire mes parents avaient un chat, donc on écrit ont.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le bon mot : Ils ___ soif.",
          options: ["on", "ont"],
          answer: "ont",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "On peut dire ils avaient soif, donc on écrit ont.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. ___ (on) va au parc où les enfants ___ (ont) un cerf-volant.", answer: "on ont", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "On (comme il, on peut dire il va) et ont (verbe avoir, on peut dire avaient un cerf-volant).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Soustraire 8 (méthode -10 puis +2)",
      xpReward: 24,
      story: {
        hook: "Tu sais déjà soustraire 9 en utilisant une astuce. Aujourd'hui, tu vas apprendre une astuce pour soustraire 8.",
        concreteExample: "Pour calculer 23 - 8, on peut d'abord enlever 10, puis ajouter 2.",
        reveal: "23 - 10 = 13, puis 13 + 2 = 15. Donc 23 - 8 = 15 ! C'est plus rapide que de compter un par un.",
        bridgeToConcept: "Pour soustraire 8, on enlève 10 puis on ajoute 2.",
        illustrationEmoji: "➖"
      },
      examples: [
        {
          title: "L'astuce -10 puis +2",
          steps: [
            { text: "34 - 8 : on enlève 10, puis on ajoute 2.", illustrationEmoji: "➖" },
            { text: "34 - 10 = 24, puis 24 + 2 = 26.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "45 - 8 : on enlève 10, puis on ajoute 2.", illustrationEmoji: "➖" },
            { text: "45 - 10 = 35, puis 35 + 2 = 37.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 22 - 8", answer: "14", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "22 - 10 = 12, puis 12 + 2 = 14. Donc 22 - 8 = 14." },
        { order: 2, prompt: "Calcule : 33 - 8", answer: "25", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "33 - 10 = 23, puis 23 + 2 = 25. Donc 33 - 8 = 25." },
        { order: 3, prompt: "Calcule : 47 - 8", answer: "39", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "47 - 10 = 37, puis 37 + 2 = 39. Donc 47 - 8 = 39." },
        { order: 4, prompt: "Calcule : 56 - 8", answer: "48", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "56 - 10 = 46, puis 46 + 2 = 48. Donc 56 - 8 = 48." },
        { order: 5, prompt: "Calcule : 61 - 8", answer: "53", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "61 - 10 = 51, puis 51 + 2 = 53. Donc 61 - 8 = 53." },
        { order: 6, prompt: "Défi : calcule 40 - 8, puis enlève encore 2.", answer: "30", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "40 - 8 = 32, puis 32 - 2 = 30." }
      ]
    }
  ]
};
