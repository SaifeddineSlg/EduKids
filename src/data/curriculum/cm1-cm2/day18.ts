import { DayCurriculum } from "@/models/types";

export const day18: DayCurriculum = {
  dayNumber: 18,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Les angles : droit, aigu, obtus",
      xpReward: 22,
      story: {
        hook: "Imagine que tu plies une feuille de papier : chaque coin forme un angle, plus ou moins ouvert.",
        concreteExample: "Le coin d'une feuille de papier forme un angle qui mesure exactement 90 degrés. Comment s'appelle-t-il ?",
        reveal: "C'est un angle droit. Un angle plus petit que 90° est un angle aigu, et un angle plus grand que 90° (mais plus petit que 180°) est un angle obtus.",
        bridgeToConcept: "Angle droit = 90°. Angle aigu < 90°. Angle obtus, entre 90° et 180°.",
        illustrationEmoji: "📐"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "Le coin d'une table forme un angle droit, comme une équerre.", illustrationEmoji: "📏" },
            { text: "Un angle de 45° est plus petit que 90° : c'est un angle aigu.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Un angle de 120° est plus grand que 90° : c'est un angle obtus.", illustrationEmoji: "🔍" },
            { text: "Pour vérifier un angle droit, on utilise une équerre.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Comment appelle-t-on un angle qui mesure exactement 90° ?", answer: "angle droit", acceptedAnswers: ["droit"], kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Un angle qui mesure exactement 90° s'appelle un angle droit." },
        { order: 2, prompt: "Un angle de 45° est-il aigu ou obtus ?", answer: "aigu", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "45° est plus petit que 90°, c'est donc un angle aigu." },
        { order: 3, prompt: "Un angle de 120° est-il aigu ou obtus ?", answer: "obtus", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "120° est plus grand que 90°, c'est donc un angle obtus." },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne réponse : un angle de 90° s'appelle un angle...",
          options: ["droit", "aigu", "obtus"],
          answer: "droit",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Un angle de 90° s'appelle un angle droit, comme le coin d'une feuille de papier."
        },
        { order: 5, prompt: "Un angle de 30° est-il aigu ou obtus ?", answer: "aigu", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "30° est plus petit que 90°, c'est donc un angle aigu." },
        { order: 6, prompt: "Défi : range du plus petit au plus grand : un angle obtus (110°), un angle droit (90°), un angle aigu (40°). Réponds avec les mots séparés par un espace.", answer: "aigu droit obtus", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "40° (aigu) est le plus petit, puis 90° (droit), puis 110° (obtus) est le plus grand." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Les verbes pronominaux au présent",
      xpReward: 22,
      story: {
        hook: "Certains verbes se conjuguent toujours avec un petit pronom qui renvoie au sujet lui-même.",
        concreteExample: "Le matin, je me lave, tu te laves, il se lave... Que remarques-tu devant chaque verbe ?",
        reveal: "Me, te, se sont des pronoms réfléchis : ils renvoient au sujet et accompagnent toujours ces verbes, appelés verbes pronominaux (se laver, se lever, s'habiller...).",
        bridgeToConcept: "Les verbes pronominaux au présent : je me lave, tu te laves, il/elle se lave, nous nous lavons, vous vous lavez, ils/elles se lavent.",
        illustrationEmoji: "🚿"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Chaque matin, elle se lève tôt pour aller à l'école.", illustrationEmoji: "🛏️" },
            { text: "Nous nous habillons rapidement avant de partir.", illustrationEmoji: "👕" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Le pronom réfléchi (me, te, se, nous, vous, se) change selon le sujet.", illustrationEmoji: "🔍" },
            { text: "Ce pronom se place toujours juste devant le verbe conjugué.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Le matin, je ____ (se laver) rapidement.", answer: "me lave", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec je, le pronom réfléchi est me, donc je me lave.", strictAccents: true },
        { order: 2, prompt: "Complète : Tu ____ (se lever) tôt aujourd'hui.", answer: "te lèves", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Avec tu, le pronom réfléchi est te, donc tu te lèves, avec un accent grave sur le e.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Elle ____ (s'habiller) avant de partir.",
          options: ["s'habille", "t'habille", "m'habille"],
          answer: "s'habille",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Avec elle, le pronom réfléchi est se, contracté en s' devant une voyelle : elle s'habille.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Nous ____ (se laver) les mains avant de manger.", answer: "nous lavons", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Avec nous, le pronom réfléchi est nous, donc nous nous lavons.", strictAccents: true },
        { order: 5, prompt: "Complète : Vous ____ (se lever) très tôt le dimanche.", answer: "vous levez", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Avec vous, le pronom réfléchi est vous, donc vous vous levez.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux verbes. Ils ____ (s'habiller) vite et nous ____ (se laver) les mains avant le repas.", answer: "s'habillent nous lavons", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Tu étais proche ! Avec ils, s'habiller donne s'habillent. Avec nous, se laver donne nous lavons.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "La proposition subordonnée relative : qui et que",
      xpReward: 22,
      story: {
        hook: "Un petit mot peut relier une proposition à un nom pour donner davantage de précisions sur lui.",
        concreteExample: "Le livre que je lis est passionnant. Quel petit mot relie les deux propositions ?",
        reveal: "Que introduit la proposition que je lis, qui précise le nom livre. Qui remplace un sujet (le garçon qui court), que remplace un complément (le livre que je lis).",
        bridgeToConcept: "Qui remplace un sujet dans la proposition subordonnée relative. Que remplace un complément d'objet direct.",
        illustrationEmoji: "🔍"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Le garçon qui court est mon frère : qui remplace le sujet du verbe court.", illustrationEmoji: "🏃" },
            { text: "Le livre que je lis est passionnant : que remplace le complément du verbe lis.", illustrationEmoji: "📖" }
          ]
        },
        {
          title: "L'astuce pour choisir entre qui et que",
          steps: [
            { text: "Si le mot remplacé fait l'action (sujet), utilise qui.", illustrationEmoji: "🔍" },
            { text: "Si le mot remplacé subit l'action (complément), utilise que.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans le garçon qui court est mon frère, quel pronom relatif est utilisé ?", answer: "qui", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Qui remplace le sujet du verbe court, c'est le pronom relatif utilisé." },
        { order: 2, prompt: "Dans le livre que je lis est passionnant, quel pronom relatif est utilisé ?", answer: "que", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Que remplace le complément du verbe lis, c'est le pronom relatif utilisé." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : La tarte ___ tu as préparée est délicieuse.",
          options: ["que", "qui", "dont"],
          answer: "que",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "La tarte est le complément du verbe as préparée, donc on utilise que."
        },
        { order: 4, prompt: "Complète : Le chien ___ aboie fait peur aux voisins.", answer: "qui", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Le chien est le sujet du verbe aboie, donc on utilise qui." },
        { order: 5, prompt: "Complète : Le cadeau ___ tu m'as offert me plaît beaucoup.", answer: "que", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Le cadeau est le complément du verbe as offert, donc on utilise que." },
        { order: 6, prompt: "Défi : complète les deux mots. La fille ___ (qui) chante a une belle voix, et la chanson ___ (que) tu préfères passe à la radio.", answer: "qui que", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "La fille est sujet du verbe chante (qui), et la chanson est complément du verbe préfères (que)." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Ça ou sa",
      xpReward: 22,
      story: {
        hook: "Deux mots jumeaux : l'un désigne une chose, l'autre exprime une possession.",
        concreteExample: "___ mère l'attend à la sortie de l'école. Est-ce ça ou sa ?",
        reveal: "On peut dire ma mère l'attend, donc c'est sa, le déterminant possessif. Ça désigne une chose, comme dans j'aime bien ça, et se remplace souvent par cela.",
        bridgeToConcept: "Sa est un déterminant possessif devant un nom (remplace par ma ou ta). Ça est un pronom qui désigne une chose (remplace par cela).",
        illustrationEmoji: "🪞"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Sa mère l'attend à la sortie de l'école : possession, on peut dire ma mère.", illustrationEmoji: "👩" },
            { text: "J'aime bien ça ! : ça désigne une chose, on peut dire cela.", illustrationEmoji: "😊" }
          ]
        },
        {
          title: "L'astuce du test",
          steps: [
            { text: "Essaie de remplacer par ma ou ta : si ça marche, c'est sa.", illustrationEmoji: "🔍" },
            { text: "Essaie de remplacer par cela : si ça marche, c'est ça.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : ___ mère l'attend à la sortie. (ça/sa)", answer: "sa", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On peut dire ma mère l'attend, donc on écrit sa, le déterminant possessif.", strictAccents: true },
        { order: 2, prompt: "Complète : J'aime bien ___ ! (ça/sa)", answer: "ça", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "On peut dire j'aime bien cela, donc on écrit ça, qui désigne une chose.", strictAccents: true },
        { order: 3, prompt: "Complète : Il a perdu ___ trousse ce matin. (ça/sa)", answer: "sa", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On peut dire ma trousse, donc on écrit sa, le déterminant possessif.", strictAccents: true },
        { order: 4, prompt: "Complète : ___ m'étonnerait qu'il pleuve demain. (ça/sa)", answer: "ça", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "On peut dire cela m'étonnerait, donc on écrit ça, qui désigne une idée.", strictAccents: true },
        { order: 5, prompt: "Complète : Balkis retrouve ___ maman à la sortie. (ça/sa)", answer: "sa", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "On peut dire ma maman, donc on écrit sa, le déterminant possessif.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. ___ (ça) alors, Bayrem a oublié ___ (sa) trousse encore une fois !", answer: "ça sa", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Tu étais proche ! Ça alors désigne la surprise (cela alors), et sa trousse exprime la possession (ma trousse).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Multiplier par 15",
      xpReward: 22,
      story: {
        hook: "Il existe une astuce bien pratique pour multiplier rapidement un nombre par 15.",
        concreteExample: "Combien font 6 x 15 ?",
        reveal: "6 x 15 = 6 x 10 + 6 x 5 = 60 + 30 = 90. On multiplie par 10, puis on ajoute la moitié de ce résultat.",
        bridgeToConcept: "Multiplier par 15, c'est multiplier par 10 puis ajouter la moitié du résultat obtenu.",
        illustrationEmoji: "⚡"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "4 x 15 : 4 x 10 = 40, moitié de 40 = 20, total 60.", illustrationEmoji: "🔢" },
            { text: "8 x 15 : 8 x 10 = 80, moitié de 80 = 40, total 120.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "10 x 15 : 10 x 10 = 100, moitié de 100 = 50, total 150.", illustrationEmoji: "🔍" },
            { text: "Cette astuce fonctionne pour tous les nombres.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 2 x 15", answer: "30", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "2 x 10 = 20, moitié de 20 = 10, total 30." },
        { order: 2, prompt: "Calcule : 6 x 15", answer: "90", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "6 x 10 = 60, moitié de 60 = 30, total 90." },
        { order: 3, prompt: "Calcule : 4 x 15", answer: "60", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "4 x 10 = 40, moitié de 40 = 20, total 60." },
        { order: 4, prompt: "Calcule : 10 x 15", answer: "150", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "10 x 10 = 100, moitié de 100 = 50, total 150." },
        { order: 5, prompt: "Calcule : 8 x 15", answer: "120", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "8 x 10 = 80, moitié de 80 = 40, total 120." },
        { order: 6, prompt: "Défi : calcule 12 x 15, puis soustrais 5 x 15. Quel est le résultat ?", answer: "105", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "12 x 15 = 180 et 5 x 15 = 75, donc 180 - 75 = 105." }
      ]
    }
  ]
};
