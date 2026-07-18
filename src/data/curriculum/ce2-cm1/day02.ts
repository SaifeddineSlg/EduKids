import { DayCurriculum } from "@/models/types";

export const day02: DayCurriculum = {
  dayNumber: 2,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "La division : partager en parts égales",
      xpReward: 24,
      story: {
        hook: "Imagine que tu dois partager des billes entre tes amis, de façon parfaitement égale.",
        concreteExample: "Tu as 20 billes à partager entre 4 amis. Combien de billes chacun reçoit-il ?",
        reveal: "20 divisé par 4, ça fait 5. Chaque ami reçoit 5 billes. Bravo, tu viens de faire une division !",
        bridgeToConcept: "Diviser, c'est partager un nombre en parts égales.",
        illustrationEmoji: "🔵"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "18 divisé par 3 : on cherche combien de fois 3 dans 18.", illustrationEmoji: "🔍" },
            { text: "3 x 6 = 18, donc 18 divisé par 3 = 6.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "24 divisé par 4 : on cherche combien de fois 4 dans 24.", illustrationEmoji: "🔍" },
            { text: "4 x 6 = 24, donc 24 divisé par 4 = 6.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 10 divisé par 2", answer: "5", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "2 x 5 = 10, donc 10 divisé par 2 = 5." },
        { order: 2, prompt: "Calcule : 15 divisé par 3", answer: "5", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "3 x 5 = 15, donc 15 divisé par 3 = 5." },
        { order: 3, prompt: "Calcule : 21 divisé par 3", answer: "7", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "3 x 7 = 21, donc 21 divisé par 3 = 7." },
        { order: 4, prompt: "Calcule : 32 divisé par 4", answer: "8", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "4 x 8 = 32, donc 32 divisé par 4 = 8." },
        { order: 5, prompt: "Calcule : 45 divisé par 5", answer: "9", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "5 x 9 = 45, donc 45 divisé par 5 = 9." },
        { order: 6, prompt: "Défi : 36 billes partagées entre 6 amis. Combien chacun reçoit-il ?", answer: "6", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "6 x 6 = 36, donc chaque ami reçoit 6 billes." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le futur simple de être, avoir, aller, faire",
      xpReward: 24,
      story: {
        hook: "Tu as appris le futur des verbes en -er. Aujourd'hui, découvrons le futur des verbes magiques !",
        concreteExample: "Écoute : je serai grand. J'aurai un vélo. J'irai à la piscine. Je ferai un gâteau.",
        reveal: "À quoi sert le futur ? À dire ce qui se passera plus tard. Comment reconnaître ces verbes ? Ils changent complètement : serai, aurai, irai, ferai...",
        bridgeToConcept: "Être : je serai. Avoir : j'aurai. Aller : j'irai. Faire : je ferai.",
        illustrationEmoji: "🔮"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Demain, je serai content de te revoir.", illustrationEmoji: "😊" },
            { text: "L'année prochaine, tu auras 10 ans.", illustrationEmoji: "🎂" },
            { text: "Ce soir, nous irons au cinéma.", illustrationEmoji: "🎬" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Ces verbes ne suivent pas la règle habituelle, il faut les apprendre par cœur.", illustrationEmoji: "🧠" },
            { text: "serai, seras, sera, serons, serez, seront.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Demain, je ____ (être) content.", answer: "serai", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec je, le verbe être au futur devient serai. Ce verbe change complètement, il faut l'apprendre par cœur.", strictAccents: true },
        { order: 2, prompt: "Complète : Tu ____ (avoir) 10 ans bientôt.", answer: "auras", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Avec tu, le verbe avoir au futur devient auras. Tu étais peut-être proche, pense au son \"ras\" à la fin.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Il ____ (aller) à la piscine demain.",
          options: ["ira", "iras", "irai"],
          answer: "ira",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec il, le verbe aller au futur devient ira. Iras est pour tu, irai est pour je.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Nous ____ (faire) un gâteau ce week-end.", answer: "ferons", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Avec nous, le verbe faire au futur devient ferons.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Ils ____ (être) fiers de toi.",
          options: ["seront", "serez", "serons"],
          answer: "seront",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec ils, le verbe être au futur devient seront. Serez est pour vous, serons est pour nous.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Vous ____ (avoir) de la chance et nous ____ (aller) vous voir.", answer: "aurez irons", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Vous aurez (futur du verbe avoir) et nous irons (futur du verbe aller). Ces deux verbes sont irréguliers au futur, ils ne suivent pas la règle habituelle.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Le complément du nom",
      xpReward: 24,
      story: {
        hook: "Imagine qu'un nom a besoin d'un petit ami pour donner plus de détails sur lui.",
        concreteExample: "Regarde : un vélo de course. Que nous apprend de course sur le vélo ?",
        reveal: "De course précise quel genre de vélo c'est. À quoi sert ce groupe de mots ? Il complète le nom en donnant plus de précisions. Comment le reconnaître ? Il vient juste après le nom, souvent introduit par de, à ou en.",
        bridgeToConcept: "Le complément du nom apporte une précision sur le nom, relié par de, à ou en.",
        illustrationEmoji: "🧩"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Une tasse de café : de café précise la tasse.", illustrationEmoji: "☕" },
            { text: "Un sac à dos : à dos précise le sac.", illustrationEmoji: "🎒" }
          ]
        },
        {
          title: "L'astuce pour trouver le complément du nom",
          steps: [
            { text: "Cherche un petit mot (de, à, en) juste après un nom.", illustrationEmoji: "🔍" },
            { text: "Le groupe de mots qui suit précise ce nom.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans un vélo de course, quel est le complément du nom vélo ?", answer: "de course", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "De course précise le vélo, c'est le complément du nom." },
        { order: 2, prompt: "Dans une tasse de café, quel est le complément du nom tasse ?", answer: "de café", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "De café précise la tasse, c'est le complément du nom." },
        { order: 3, prompt: "Dans un sac à dos, quel est le complément du nom sac ?", answer: "à dos", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "À dos précise le sac, c'est le complément du nom." },
        { order: 4, prompt: "Dans une salle de bain, quel est le complément du nom salle ?", answer: "de bain", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "De bain précise la salle, c'est le complément du nom." },
        { order: 5, prompt: "Dans un moulin à vent, quel est le complément du nom moulin ?", answer: "à vent", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "À vent précise le moulin, c'est le complément du nom." },
        { order: 6, prompt: "Défi : dans une boîte de chocolats en carton, cite le complément du nom boîte.", answer: "de chocolats", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "De chocolats précise la boîte : c'est le complément du nom principal." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Mais ou mes, ces ou ses",
      xpReward: 24,
      story: {
        hook: "Imagine deux paires de jumeaux qui se ressemblent à l'oreille mais qui ne s'écrivent pas pareil.",
        concreteExample: "Regarde : j'aime le chocolat, ___ pas trop sucré. Est-ce que c'est mais ou mes ?",
        reveal: "Mais relie deux idées contraires (comme pourtant). Mes veut dire plusieurs choses à moi. Ici, on oppose deux idées : mais. Bravo, tu as trouvé la différence !",
        bridgeToConcept: "Mais relie deux idées opposées. Mes veut dire plusieurs choses à moi (mes jouets).",
        illustrationEmoji: "👯"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "J'aime les chats, mais pas les araignées : mais oppose deux idées.", illustrationEmoji: "🐱" },
            { text: "Voici mes jouets préférés : mes veut dire plusieurs jouets à moi.", illustrationEmoji: "🧸" }
          ]
        },
        {
          title: "Ces ou ses",
          steps: [
            { text: "Ces enfants jouent dehors : ces montre des enfants qu'on désigne (comme ceux-là).", illustrationEmoji: "👉" },
            { text: "Il range ses jouets : ses veut dire les jouets à lui.", illustrationEmoji: "🧸" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : J'aime le sport, ___ je préfère la lecture. (mais/mes)", answer: "mais", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Mais oppose deux idées, comme \"pourtant\" : j'aime le sport, mais je préfère la lecture.", strictAccents: true },
        { order: 2, prompt: "Complète : Voici ___ crayons de couleur. (mais/mes)", answer: "mes", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Mes veut dire plusieurs crayons qui m'appartiennent. Essaie de le lire à voix haute : voici mes crayons.", strictAccents: true },
        { order: 3, prompt: "Complète : ___ enfants jouent dans la cour. (ces/ses)", answer: "ces", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Ces désigne des enfants précis, comme si on montrait du doigt : ces enfants-là.", strictAccents: true },
        { order: 4, prompt: "Complète : Il range ___ affaires avant de partir. (ces/ses)", answer: "ses", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Ses veut dire les affaires qui appartiennent à lui.", strictAccents: true },
        { order: 5, prompt: "Complète : Elle voulait venir, ___ elle était malade. (mais/mes)", answer: "mais", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Mais oppose deux idées ici : elle voulait venir, mais elle était malade.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. J'aime ___ (mes) jouets, ___ (mais) je préfère ceux de mon frère.", answer: "mes mais", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Mes jouets veut dire plusieurs jouets à moi, et mais oppose deux idées : j'aime mes jouets, mais je préfère ceux de mon frère.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "La table de multiplication de 4",
      xpReward: 24,
      story: {
        hook: "Imagine que tu comptes des pattes d'animaux à 4 pattes, comme des chiens.",
        concreteExample: "Il y a 3 chiens. Combien de pattes en tout ?",
        reveal: "3 fois 4, ça fait 12. Bravo, tu as trouvé le nombre de pattes !",
        bridgeToConcept: "La table de 4 : 1x4=4, 2x4=8, 3x4=12, 4x4=16, 5x4=20...",
        illustrationEmoji: "🐕"
      },
      examples: [
        {
          title: "La table de 4",
          steps: [
            { text: "4 x 3 : c'est le double du double de 3. Double de 3 = 6, double de 6 = 12.", illustrationEmoji: "🙌" },
            { text: "4 x 5 : double de 5 = 10, double de 10 = 20.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour la table de 4",
          steps: [
            { text: "Multiplier par 4, c'est faire un double, puis encore un double.", illustrationEmoji: "🔍" },
            { text: "4 x 6 : double de 6 = 12, double de 12 = 24.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 4 x 3", answer: "12", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "4 x 3 = 12." },
        { order: 2, prompt: "Calcule : 4 x 5", answer: "20", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "4 x 5 = 20." },
        { order: 3, prompt: "Calcule : 4 x 6", answer: "24", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "4 x 6 = 24." },
        { order: 4, prompt: "Calcule : 4 x 7", answer: "28", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "4 x 7 = 28." },
        { order: 5, prompt: "Calcule : 4 x 8", answer: "32", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "4 x 8 = 32." },
        { order: 6, prompt: "Défi : calcule 4 x 9", answer: "36", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "4 x 9 = 36." }
      ]
    }
  ]
};
