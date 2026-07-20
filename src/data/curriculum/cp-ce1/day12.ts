import { DayCurriculum } from "@/models/types";

export const day12: DayCurriculum = {
  dayNumber: 12,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "L'addition posée en colonnes",
      xpReward: 24,
      story: {
        hook: "Imagine que tu ranges les unités et les dizaines chacune dans leur propre colonne, comme dans un petit tableau.",
        concreteExample: "Pour calculer 23 + 15, on place les unités sous les unités et les dizaines sous les dizaines.",
        reveal: "3 unités plus 5 unités font 8 unités. 2 dizaines plus 1 dizaine font 3 dizaines. Le résultat est 38 !",
        bridgeToConcept: "Pour additionner en colonnes, on ajoute d'abord les unités, puis les dizaines.",
        illustrationEmoji: "📐"
      },
      examples: [
        {
          title: "Additionner sans retenue",
          steps: [
            { text: "24 + 13 : unités 4 + 3 = 7, dizaines 2 + 1 = 3.", illustrationEmoji: "➕" },
            { text: "Le résultat est 37.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "32 + 45 : unités 2 + 5 = 7, dizaines 3 + 4 = 7.", illustrationEmoji: "➕" },
            { text: "Le résultat est 77.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule en colonnes : 22 + 15", answer: "37", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Unités : 2 + 5 = 7. Dizaines : 2 + 1 = 3. Le résultat est 37." },
        { order: 2, prompt: "Calcule en colonnes : 34 + 23", answer: "57", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Unités : 4 + 3 = 7. Dizaines : 3 + 2 = 5. Le résultat est 57." },
        { order: 3, prompt: "Calcule en colonnes : 41 + 26", answer: "67", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Unités : 1 + 6 = 7. Dizaines : 4 + 2 = 6. Le résultat est 67." },
        { order: 4, prompt: "Calcule en colonnes : 53 + 34", answer: "87", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Unités : 3 + 4 = 7. Dizaines : 5 + 3 = 8. Le résultat est 87." },
        { order: 5, prompt: "Calcule en colonnes : 62 + 17", answer: "79", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Unités : 2 + 7 = 9. Dizaines : 6 + 1 = 7. Le résultat est 79." },
        { order: 6, prompt: "Défi : calcule en colonnes 45 + 32", answer: "77", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Unités : 5 + 2 = 7. Dizaines : 4 + 3 = 7. Le résultat est 77." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le verbe prendre au présent",
      xpReward: 24,
      story: {
        hook: "Il existe un petit mot magique qui sert à dire que l'on saisit quelque chose avec les mains.",
        concreteExample: "Écoute : je prends mon cartable. Tu prends ton goûter. Il prend son vélo.",
        reveal: "Ce mot magique, c'est le verbe prendre. À quoi sert-il ? Il sert à dire que l'on saisit ou que l'on emporte quelque chose. Comment le reconnaître ? Il change selon la personne : prends, prends, prend...",
        bridgeToConcept: "Au présent : je prends, tu prends, il prend, elle prend.",
        illustrationEmoji: "🖐️"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Je prends mon cartable pour aller à l'école.", illustrationEmoji: "🎒" },
            { text: "Tu prends ton goûter avant de sortir.", illustrationEmoji: "🍎" },
            { text: "Il prend son vélo pour se promener.", illustrationEmoji: "🚲" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Avec je et tu, on écrit prends (avec un d, puis un s).", illustrationEmoji: "🎵" },
            { text: "Avec il ou elle, on écrit prend (avec un d, sans s).", illustrationEmoji: "🎵" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je ____ mon cartable.", answer: "prends", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec je, le verbe prendre devient prends : je prends mon cartable. Essaie de le lire à voix haute.", strictAccents: true },
        { order: 2, prompt: "Complète : Tu ____ ton goûter.", answer: "prends", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Avec tu, comme avec je, le verbe prendre devient prends : tu prends ton goûter.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Il ____ son vélo.",
          options: ["prends", "prend", "prenons"],
          answer: "prend",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec il ou elle, le verbe prendre devient prend (sans s) : il prend son vélo.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Elle ____ un livre à la bibliothèque.", answer: "prend", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Avec elle, comme avec il, le verbe prendre devient prend.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Je ____ ma trottinette.",
          options: ["prends", "prend", "prenez"],
          answer: "prends",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec je, on écrit toujours prends (avec un s à la fin).",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Tu ____ ton sac et elle ____ son manteau.", answer: "prends prend", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Tu prends (avec tu, on écrit prends) et elle prend (avec elle, on écrit prend, sans s). Relis la phrase entière à voix haute.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Le point d'interrogation et le point d'exclamation",
      xpReward: 24,
      story: {
        hook: "Imagine que ta voix change selon ce que tu dis : parfois tu poses une question, parfois tu es surpris ou content.",
        concreteExample: "Regarde : Tu viens ? et Quelle belle journée ! Ces deux phrases ne se terminent pas pareil.",
        reveal: "À quoi servent ces signes ? Le point d'interrogation (?) indique une question. Le point d'exclamation (!) indique la surprise, la joie ou un ordre. Comment les reconnaître ? Ils se placent à la toute fin de la phrase.",
        bridgeToConcept: "On termine une question par un point d'interrogation (?) et une phrase de surprise ou de joie par un point d'exclamation (!).",
        illustrationEmoji: "❓"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Où vas-tu ? : c'est une question, on met un point d'interrogation.", illustrationEmoji: "❓" },
            { text: "Quelle belle surprise ! : c'est une exclamation, on met un point d'exclamation.", illustrationEmoji: "❗" }
          ]
        },
        {
          title: "L'astuce pour bien choisir",
          steps: [
            { text: "Si tu peux répondre par oui ou par non, c'est une question : mets un point d'interrogation.", illustrationEmoji: "🔍" },
            { text: "Si la phrase montre de la joie, de la surprise ou un ordre, mets un point d'exclamation.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Aimes-tu le chocolat : point d'interrogation ou point d'exclamation ?", answer: "point d'interrogation", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "C'est une question, on termine par un point d'interrogation : Aimes-tu le chocolat ?" },
        { order: 2, prompt: "Quelle belle journée : point d'interrogation ou point d'exclamation ?", answer: "point d'exclamation", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Cette phrase montre de la joie, on termine par un point d'exclamation : Quelle belle journée !" },
        {
          order: 3,
          type: "mcq",
          prompt: "Où habites-tu : quel signe faut-il ?",
          options: ["point d'interrogation", "point d'exclamation"],
          answer: "point d'interrogation",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "C'est une question, on met un point d'interrogation."
        },
        { order: 4, prompt: "Attention, il y a un serpent : point d'interrogation ou point d'exclamation ?", answer: "point d'exclamation", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Cette phrase montre la surprise et l'alerte, on met un point d'exclamation." },
        {
          order: 5,
          type: "mcq",
          prompt: "Bravo, tu as réussi : quel signe faut-il ?",
          options: ["point d'interrogation", "point d'exclamation"],
          answer: "point d'exclamation",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Cette phrase montre la joie, on met un point d'exclamation."
        },
        { order: 6, prompt: "Défi : Veux-tu venir jouer avec moi : quel signe faut-il ?", answer: "point d'interrogation", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "C'est une question, on termine par un point d'interrogation." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Le son [wa] : oi",
      xpReward: 24,
      story: {
        hook: "Imagine un son qui ressemble à oua, comme le cri d'un petit animal surpris.",
        concreteExample: "Écoute : roi, moi, voir. Tu entends le son [wa] dans chacun de ces mots.",
        reveal: "À quoi ça sert de bien l'entendre ? À savoir écrire ce son avec les deux lettres o et i collées ensemble : oi. Comment le reconnaître ? Chaque fois que tu entends [wa], pense à écrire oi.",
        bridgeToConcept: "Le son [wa] s'écrit presque toujours oi, comme dans roi, moi ou voir.",
        illustrationEmoji: "👑"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Un roi, une reine : le son [wa] s'écrit oi.", illustrationEmoji: "👑" },
            { text: "Moi, toi : le son [wa] s'écrit oi.", illustrationEmoji: "🙋" }
          ]
        },
        {
          title: "Encore un exemple",
          steps: [
            { text: "Voir, boire : le son [wa] s'écrit toujours oi.", illustrationEmoji: "👀" },
            { text: "Ce son s'écrit presque toujours de la même façon : oi.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : le r___ (roi). (oi ou oa)", answer: "oi", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Le son [wa] s'écrit oi : roi. Essaie de le réécrire lentement.", strictAccents: true },
        { order: 2, prompt: "Complète : c'est pour m___ (moi). (oi ou ai)", answer: "oi", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Moi s'écrit avec oi, pour garder le son [wa].", strictAccents: true },
        { order: 3, prompt: "Complète : je veux te v___r (voir). (oi ou ai)", answer: "oi", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Voir s'écrit avec oi, comme roi et moi.", strictAccents: true },
        { order: 4, prompt: "Complète : b___re de l'eau (boire). (oi ou oa)", answer: "oi", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Boire s'écrit avec oi, comme voir.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne écriture : une ét___le (étoile).",
          options: ["oi", "ai", "oa"],
          answer: "oi",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Étoile s'écrit avec oi, le son [wa].",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Le r___ (roi) aime b___re (boire) du lait.", answer: "oi oi", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Roi et boire s'écrivent tous les deux avec oi, le son [wa].", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Ajouter 9",
      xpReward: 24,
      story: {
        hook: "Imagine une astuce magique pour ajouter 9 très vite, sans compter un par un.",
        concreteExample: "Pour calculer 15 + 9, tu peux d'abord ajouter 10, puis enlever 1.",
        reveal: "15 + 10 = 25, puis 25 - 1 = 24. Donc 15 + 9 = 24 ! Ajouter 9, c'est ajouter 10 puis enlever 1.",
        bridgeToConcept: "Pour ajouter 9 rapidement, on ajoute 10 puis on enlève 1.",
        illustrationEmoji: "🧮"
      },
      examples: [
        {
          title: "L'astuce +10 puis -1",
          steps: [
            { text: "7 + 9 : d'abord 7 + 10 = 17.", illustrationEmoji: "➕" },
            { text: "Puis 17 - 1 = 16. Donc 7 + 9 = 16.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "23 + 9 : d'abord 23 + 10 = 33.", illustrationEmoji: "➕" },
            { text: "Puis 33 - 1 = 32. Donc 23 + 9 = 32.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 6 + 9", answer: "15", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "6 + 10 = 16, puis 16 - 1 = 15. Donc 6 + 9 = 15." },
        { order: 2, prompt: "Calcule : 12 + 9", answer: "21", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "12 + 10 = 22, puis 22 - 1 = 21. Donc 12 + 9 = 21." },
        { order: 3, prompt: "Calcule : 18 + 9", answer: "27", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "18 + 10 = 28, puis 28 - 1 = 27. Donc 18 + 9 = 27." },
        { order: 4, prompt: "Calcule : 24 + 9", answer: "33", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "24 + 10 = 34, puis 34 - 1 = 33. Donc 24 + 9 = 33." },
        { order: 5, prompt: "Calcule : 31 + 9", answer: "40", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "31 + 10 = 41, puis 41 - 1 = 40. Donc 31 + 9 = 40." },
        { order: 6, prompt: "Défi : calcule 45 + 9", answer: "54", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "45 + 10 = 55, puis 55 - 1 = 54. Donc 45 + 9 = 54." }
      ]
    }
  ]
};
