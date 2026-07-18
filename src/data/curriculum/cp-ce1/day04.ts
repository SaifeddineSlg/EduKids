import { DayCurriculum } from "@/models/types";

export const day04: DayCurriculum = {
  dayNumber: 4,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Comparer des nombres",
      xpReward: 24,
      story: {
        hook: "Imagine deux tas de bonbons : tu veux savoir lequel en a le plus.",
        concreteExample: "Un tas a 7 bonbons, l'autre en a 4. Lequel a le plus de bonbons ?",
        reveal: "7 est plus grand que 4, donc le premier tas a le plus de bonbons. Bravo, tu as comparé deux nombres !",
        bridgeToConcept: "Comparer, c'est dire quel nombre est le plus grand ou le plus petit.",
        illustrationEmoji: "⚖️"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "9 est plus grand que 3.", illustrationEmoji: "📈" },
            { text: "2 est plus petit que 8.", illustrationEmoji: "📉" }
          ]
        },
        {
          title: "L'astuce pour comparer",
          steps: [
            { text: "Regarde les deux nombres dans la file des nombres.", illustrationEmoji: "🔢" },
            { text: "Celui qui vient après dans le comptage est le plus grand.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Quel est le plus grand nombre entre 5 et 8 ?", answer: "8", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "8 vient après 5 en comptant, donc 8 est plus grand." },
        { order: 2, prompt: "Quel est le plus petit nombre entre 6 et 3 ?", answer: "3", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "3 vient avant 6 en comptant, donc 3 est plus petit." },
        { order: 3, prompt: "Quel est le plus grand nombre entre 12 et 15 ?", answer: "15", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "15 vient après 12 en comptant, donc 15 est plus grand." },
        { order: 4, prompt: "Quel est le plus petit nombre entre 9 et 11 ?", answer: "9", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "9 vient avant 11 en comptant, donc 9 est plus petit." },
        { order: 5, prompt: "Quel est le plus grand nombre entre 17 et 14 ?", answer: "17", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "17 vient après 14 en comptant, donc 17 est plus grand." },
        { order: 6, prompt: "Défi : range du plus petit au plus grand : 8, 3, 5. Quel nombre vient en premier ?", answer: "3", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "En rangeant du plus petit au plus grand : 3, 5, 8. Le premier est 3." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le verbe aller au présent",
      xpReward: 24,
      story: {
        hook: "Il existe un petit mot magique qui sert à dire où l'on se rend.",
        concreteExample: "Écoute : je vais à l'école. Tu vas au parc. Il va à la piscine.",
        reveal: "Ce petit mot magique, c'est le verbe aller. À quoi sert-il ? Il sert à dire où l'on se déplace. Comment le reconnaître ? Il change beaucoup : vais, vas, va...",
        bridgeToConcept: "Au présent : je vais, tu vas, il va, elle va.",
        illustrationEmoji: "🚶"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Je vais à l'école le matin.", illustrationEmoji: "🏫" },
            { text: "Tu vas au parc avec papa.", illustrationEmoji: "🌳" },
            { text: "Elle va à la piscine le mercredi.", illustrationEmoji: "🏊" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Avec je, on dit vais (je vais).", illustrationEmoji: "🎵" },
            { text: "Avec tu, on dit vas (tu vas).", illustrationEmoji: "🎵" },
            { text: "Avec il ou elle, on dit va (il va, elle va).", illustrationEmoji: "🎵" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je ____ à l'école.", answer: "vais", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec je, le verbe aller devient vais : je vais à l'école. Essaie de le lire à voix haute.", strictAccents: true },
        { order: 2, prompt: "Complète : Tu ____ au parc.", answer: "vas", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Avec tu, le verbe aller devient vas : tu vas au parc. Tu étais proche !", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Il ____ à la piscine.",
          options: ["vais", "vas", "va"],
          answer: "va",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec il ou elle, le verbe aller devient va : il va à la piscine.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Elle ____ chez sa mamie.", answer: "va", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Avec elle, comme avec il, le verbe aller devient va : elle va chez sa mamie.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Je ____ au marché avec maman.",
          options: ["vais", "vas", "va"],
          answer: "vais",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec je, on dit toujours vais : je vais au marché.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Tu ____ à l'école et il ____ au sport.", answer: "vas va", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Tu vas à l'école (avec tu, on écrit vas) et il va au sport (avec il, on écrit va). Relis la phrase entière à voix haute.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Singulier ou pluriel",
      xpReward: 24,
      story: {
        hook: "Imagine que tu regardes une image : parfois il y a un seul objet, parfois plusieurs.",
        concreteExample: "Regarde : un chat, puis des chats. Y a-t-il un seul chat ou plusieurs ?",
        reveal: "Un chat, il y en a un seul : c'est le singulier. Des chats, il y en a plusieurs : c'est le pluriel. Bravo, tu as bien vu !",
        bridgeToConcept: "Singulier veut dire un seul. Pluriel veut dire plusieurs.",
        illustrationEmoji: "🐱🐱🐱"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Une pomme : il y en a une seule, c'est le singulier.", illustrationEmoji: "🍎" },
            { text: "Des pommes : il y en a plusieurs, c'est le pluriel.", illustrationEmoji: "🍎🍎🍎" }
          ]
        },
        {
          title: "L'astuce pour reconnaître",
          steps: [
            { text: "Si tu vois un ou une devant, c'est le singulier.", illustrationEmoji: "🔍" },
            { text: "Si tu vois des devant, c'est le pluriel.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "un chien : singulier ou pluriel ?", answer: "singulier", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Un chien, c'est un seul : singulier." },
        { order: 2, prompt: "des ballons : singulier ou pluriel ?", answer: "pluriel", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Des ballons, il y en a plusieurs : pluriel." },
        {
          order: 3,
          type: "mcq",
          prompt: "une fleur : singulier ou pluriel ?",
          options: ["singulier", "pluriel"],
          answer: "singulier",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Une fleur, c'est une seule : singulier."
        },
        { order: 4, prompt: "des maisons : singulier ou pluriel ?", answer: "pluriel", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Des maisons, il y en a plusieurs : pluriel." },
        {
          order: 5,
          type: "mcq",
          prompt: "un livre : singulier ou pluriel ?",
          options: ["singulier", "pluriel"],
          answer: "singulier",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Un livre, c'est un seul : singulier."
        },
        { order: 6, prompt: "Défi : des crayons et une gomme. Quel mot est au singulier ?", answer: "gomme", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Une gomme est au singulier (une seule), des crayons est au pluriel." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "m devant m, b, p",
      xpReward: 24,
      story: {
        hook: "Il existe une règle magique pour bien écrire certains mots avec le son [in] ou [an].",
        concreteExample: "Regarde : un timbre. Pourquoi ce n devient-il un m devant le b ?",
        reveal: "Devant les lettres m, b et p, on remplace toujours le n par un m. Timbre s'écrit avec un m car il y a un b juste après ! Bravo, tu as trouvé la règle magique !",
        bridgeToConcept: "Devant m, b, p : on écrit toujours m à la place de n.",
        illustrationEmoji: "✉️"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Une jambe : devant b, on écrit m (jam-be), pas n.", illustrationEmoji: "🦵" },
            { text: "Important : devant p, on écrit m (im-portant), pas n.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Chaque fois que tu vois ou entends m, b ou p juste après, pense m !", illustrationEmoji: "🧠" },
            { text: "Exemple : campagne, tomber, embrasser.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : un ti___bre (timbre). (n ou m)", answer: "m", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Devant la lettre b, on remplace toujours le n par un m : timbre. Essaie de le réécrire lentement.", strictAccents: true },
        { order: 2, prompt: "Complète : une ja___be (jambe). (n ou m)", answer: "m", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Devant la lettre b, on écrit m : jambe. Tu étais proche !", strictAccents: true },
        { order: 3, prompt: "Complète : i___portant (important). (n ou m)", answer: "m", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Devant la lettre p, on écrit m : important. Pense à la règle m devant m, b, p.", strictAccents: true },
        { order: 4, prompt: "Complète : la ca___pagne (campagne). (n ou m)", answer: "m", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Devant la lettre p, on écrit m : campagne. Relis-le à voix haute.", strictAccents: true },
        { order: 5, prompt: "Complète : to___ber (tomber). (n ou m)", answer: "m", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Devant la lettre b, on écrit m : tomber. N'oublie pas la règle m devant m, b, p.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. Il me se___ble (semble) qu'il faut e___porter (emporter) un parapluie.", answer: "m m", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Semble s'écrit avec m (devant b) et emporter s'écrit avec m (devant p) : les deux suivent la règle m devant m, b, p.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Compter de 10 en 10",
      xpReward: 24,
      story: {
        hook: "Imagine que tu ranges tes billes par paquets de 10.",
        concreteExample: "Tu as déjà 10 billes rangées, et tu en ranges 10 de plus. Combien en as-tu maintenant ?",
        reveal: "10 et encore 10, ça fait 20. Compter de 10 en 10 va très vite : 10, 20, 30... Bravo !",
        bridgeToConcept: "Compter de 10 en 10, c'est ajouter 10 à chaque fois : 0, 10, 20, 30...",
        illustrationEmoji: "🔟"
      },
      examples: [
        {
          title: "Sauter de 10 en 10",
          steps: [
            { text: "0, 10, 20, 30 : chaque nombre est 10 de plus que le précédent.", illustrationEmoji: "🔟" },
            { text: "Après 30 : 40, 50...", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour compter de 10 en 10",
          steps: [
            { text: "Regarde juste le premier chiffre : il avance de 1 à chaque fois.", illustrationEmoji: "🔍" },
            { text: "1, 2, 3... deviennent 10, 20, 30...", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Quel nombre vient après 10 en comptant de 10 en 10 ?", answer: "20", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Après 10, en ajoutant 10, on trouve 20." },
        { order: 2, prompt: "Quel nombre vient après 20 en comptant de 10 en 10 ?", answer: "30", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Après 20, en ajoutant 10, on trouve 30." },
        { order: 3, prompt: "Quel nombre vient après 30 en comptant de 10 en 10 ?", answer: "40", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Après 30, en ajoutant 10, on trouve 40." },
        { order: 4, prompt: "Quel nombre vient avant 30 en comptant de 10 en 10 ?", answer: "20", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Avant 30, en enlevant 10, on trouve 20." },
        { order: 5, prompt: "Quel nombre vient après 40 en comptant de 10 en 10 ?", answer: "50", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Après 40, en ajoutant 10, on trouve 50." },
        { order: 6, prompt: "Défi : quel nombre vient après 50 en comptant de 10 en 10 ?", answer: "60", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Après 50, en ajoutant 10, on trouve 60." }
      ]
    }
  ]
};
