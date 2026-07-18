import { DayCurriculum } from "@/models/types";

export const day08: DayCurriculum = {
  dayNumber: 8,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "L'aire et le périmètre d'un rectangle",
      xpReward: 24,
      story: {
        hook: "Imagine que tu veux entourer un jardin rectangulaire avec une clôture, puis poser du gazon à l'intérieur.",
        concreteExample: "Un jardin rectangulaire mesure 5 mètres de longueur et 3 mètres de largeur. Quelle longueur de clôture faut-il, et quelle surface de gazon faut-il poser ?",
        reveal: "Pour la clôture, on calcule le périmètre : (5 + 3) x 2 = 16 mètres. Pour le gazon, on calcule l'aire : 5 x 3 = 15 mètres carrés. Bravo, tu as calculé le périmètre et l'aire !",
        bridgeToConcept: "Pour un rectangle : périmètre = (longueur + largeur) x 2, et aire = longueur x largeur.",
        illustrationEmoji: "📐"
      },
      examples: [
        {
          title: "Exemple 1 : un rectangle de 6 cm sur 4 cm",
          steps: [
            { text: "Périmètre : (6 + 4) x 2 = 20 cm.", illustrationEmoji: "📏" },
            { text: "Aire : 6 x 4 = 24 cm².", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : un carré de 5 cm de côté",
          steps: [
            { text: "Un carré est un rectangle avec 4 côtés égaux.", illustrationEmoji: "🟦" },
            { text: "Périmètre : 5 x 4 = 20 cm.", illustrationEmoji: "📏" },
            { text: "Aire : 5 x 5 = 25 cm².", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule le périmètre d'un rectangle de 7 cm sur 3 cm.", answer: "20", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "(7 + 3) x 2 = 20 cm." },
        { order: 2, prompt: "Calcule l'aire d'un rectangle de 7 cm sur 3 cm.", answer: "21", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "7 x 3 = 21 cm²." },
        { order: 3, prompt: "Calcule le périmètre d'un carré de 8 cm de côté.", answer: "32", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "8 x 4 = 32 cm." },
        { order: 4, prompt: "Calcule l'aire d'un carré de 8 cm de côté.", answer: "64", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "8 x 8 = 64 cm²." },
        { order: 5, prompt: "Calcule l'aire d'un rectangle de 12 m sur 5 m.", answer: "60", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "12 x 5 = 60 m²." },
        { order: 6, prompt: "Défi : un rectangle a un périmètre de 24 cm et une largeur de 4 cm. Quelle est sa longueur ?", answer: "8", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "24 / 2 = 12 (la somme longueur + largeur), puis 12 - 4 = 8 cm de longueur." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le passé composé avec avoir",
      xpReward: 24,
      story: {
        hook: "Il existe un temps composé de deux morceaux, comme une phrase construite avec deux briques : un auxiliaire, puis un participe passé.",
        concreteExample: "Écoute : j'ai joué, tu as joué, il a joué, nous avons joué, vous avez joué, ils ont joué.",
        reveal: "À quoi sert le passé composé ? Il sert à raconter une action passée et terminée. Comment le construire ? On prend le verbe avoir conjugué au présent, puis on ajoute le participe passé du verbe (jouer devient joué). Bravo, tu as construit ton premier passé composé !",
        bridgeToConcept: "Passé composé = auxiliaire avoir au présent + participe passé. Pour les verbes en -er, le participe passé se termine toujours par -é.",
        illustrationEmoji: "🧱"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Hier, j'ai regardé un film avec ma famille.", illustrationEmoji: "🎬" },
            { text: "Tu as mangé toute ta salade.", illustrationEmoji: "🥗" },
            { text: "Nous avons visité un beau château.", illustrationEmoji: "🏰" }
          ]
        },
        {
          title: "Attention à l'erreur fréquente",
          steps: [
            { text: "Beaucoup d'élèves oublient l'auxiliaire et écrivent seulement « j'ai jouer » avec l'infinitif. C'est une erreur !", illustrationEmoji: "❌" },
            { text: "Le participe passé d'un verbe en -er se termine toujours par -é, jamais par -er : j'ai joué, pas j'ai jouer.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper, et le résumé",
          steps: [
            { text: "Astuce : remplace le verbe en -er par un verbe comme mordre pour vérifier : on dirait j'ai mordu, donc c'est bien j'ai joué (participe passé), pas j'ai jouer.", illustrationEmoji: "🧠" },
            { text: "Résumé : au passé composé, on conjugue d'abord l'auxiliaire avoir, puis on ajoute le participe passé, qui se termine par -é pour les verbes en -er.", illustrationEmoji: "📝" }
          ]
        }
      ],
      questions: [
        {
          order: 1,
          type: "input",
          prompt: "Complète au passé composé : J'____ (manger) une pomme.",
          answer: "ai mangé",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "On conjugue avoir avec je (ai), puis on ajoute le participe passé mangé : j'ai mangé.",
          strictAccents: true
        },
        {
          order: 2,
          type: "input",
          prompt: "Complète au passé composé : Tu ____ (regarder) un film.",
          answer: "as regardé",
          kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.",
          explanationWhenWrong: "On conjugue avoir avec tu (as), puis on ajoute le participe passé regardé : tu as regardé.",
          strictAccents: true
        },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse au passé composé : Nous ____ (chanter) toute la soirée.",
          options: ["avons chanté", "avons chanter", "avez chanté"],
          answer: "avons chanté",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Avec nous, avoir devient avons, et le participe passé de chanter est chanté : nous avons chanté.",
          strictAccents: true
        },
        {
          order: 4,
          type: "input",
          prompt: "Complète au passé composé : Vous ____ (danser) sur cette musique.",
          answer: "avez dansé",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Avec vous, avoir devient avez, et le participe passé de danser est dansé : vous avez dansé.",
          strictAccents: true
        },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse au passé composé : Elles ____ (aimer) ce spectacle.",
          options: ["ont aimé", "ont aimer", "ont aimée"],
          answer: "ont aimé",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Avec elles, avoir devient ont, et le participe passé de aimer est aimé : elles ont aimé.",
          strictAccents: true
        },
        {
          order: 6,
          type: "match",
          prompt: "Défi : associe chaque sujet à la bonne forme du passé composé du verbe donner.",
          answer: "Il = a donné ; Nous = avons donné ; Ils = ont donné",
          matchPairs: [
            { left: "Il", right: "a donné" },
            { left: "Nous", right: "avons donné" },
            { left: "Ils", right: "ont donné" }
          ],
          kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.",
          explanationWhenWrong: "Dans chaque cas, on conjugue l'auxiliaire avoir selon le sujet (a, avons, ont), puis on ajoute toujours le même participe passé donné.",
          strictAccents: true
        }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "L'adverbe, le mot qui précise le verbe",
      xpReward: 24,
      story: {
        hook: "Imagine un mot qui ne change jamais de forme, mais qui donne plus de précision à une action : comment, quand, ou à quel point elle se passe.",
        concreteExample: "Regarde la phrase : Il court vite. Le mot vite dit comment il court.",
        reveal: "vite précise le verbe court : c'est un adverbe. Contrairement à l'adjectif, l'adverbe ne s'accorde jamais, il reste toujours identique. Bravo, tu as trouvé un adverbe !",
        bridgeToConcept: "Un adverbe précise souvent un verbe (comment, où, quand, combien) et ne s'accorde jamais en genre ou en nombre.",
        illustrationEmoji: "⚡"
      },
      examples: [
        {
          title: "Exemple 1 : Elle parle doucement",
          steps: [
            { text: "doucement précise comment elle parle.", illustrationEmoji: "🗣️" },
            { text: "C'est un adverbe, il ne changerait jamais, même au pluriel.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : Ils arriveront bientôt",
          steps: [
            { text: "bientôt précise quand ils arriveront.", illustrationEmoji: "⏰" },
            { text: "C'est un adverbe.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans il travaille sérieusement, quel mot est l'adverbe ?", answer: "sérieusement", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "sérieusement précise comment il travaille, c'est un adverbe." },
        { order: 2, prompt: "Dans elle chante très bien, cite l'adverbe qui précise le verbe chante.", answer: "bien", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "bien précise comment elle chante, c'est un adverbe (très précise bien, un autre adverbe)." },
        { order: 3, prompt: "Dans nous partirons demain, quel mot est l'adverbe ?", answer: "demain", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "demain précise quand nous partirons, c'est un adverbe." },
        { order: 4, prompt: "Dans il pleut beaucoup aujourd'hui, cite les deux adverbes.", answer: "beaucoup aujourd'hui", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "beaucoup précise combien il pleut, et aujourd'hui précise quand : ce sont deux adverbes." },
        { order: 5, prompt: "Dans elle a répondu poliment, quel mot est l'adverbe ?", answer: "poliment", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "poliment précise comment elle a répondu, c'est un adverbe." },
        { order: 6, prompt: "Défi : dans les élèves écoutent attentivement et travaillent rapidement, cite les deux adverbes.", answer: "attentivement rapidement", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "attentivement précise comment ils écoutent, et rapidement précise comment ils travaillent : les deux se terminent par -ment, une terminaison fréquente pour les adverbes." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "ce ou se : le test du mot qui suit",
      xpReward: 24,
      story: {
        hook: "Encore un petit test magique, cette fois pour ne plus confondre ce et se.",
        concreteExample: "Regarde : ... chat se lave devant ... fenêtre. Est-ce que ce sont les mots ce ou se ?",
        reveal: "On regarde ce qui suit chaque mot : se est suivi d'un verbe (se lave), donc c'est se, le pronom réfléchi. Ce est suivi d'un nom (ce chat, cette fenêtre), donc c'est ce, le déterminant démonstratif. Bravo, tu as bien observé chaque mot !",
        bridgeToConcept: "Si le mot est suivi d'un verbe, on écrit se, comme dans se laver ou se lever. Si le mot est suivi d'un nom, on écrit ce, comme dans ce chat ou ce jardin.",
        illustrationEmoji: "🪄"
      },
      examples: [
        {
          title: "Exemple 1 : Ce jardin est magnifique",
          steps: [
            { text: "ce est suivi du nom jardin.", illustrationEmoji: "🌷" },
            { text: "Donc on écrit ce, le déterminant démonstratif.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : Le chat se cache sous le lit",
          steps: [
            { text: "se est suivi du verbe cache.", illustrationEmoji: "🐱" },
            { text: "Donc on écrit se, le pronom réfléchi.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        {
          order: 1,
          prompt: "Complète : ___ chien aboie fort. (ce ou se)",
          answer: "ce",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "ce est suivi du nom chien, donc c'est ce, le déterminant démonstratif.",
          strictAccents: true
        },
        {
          order: 2,
          prompt: "Complète : Elle ___ prépare pour l'école. (ce ou se)",
          answer: "se",
          kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.",
          explanationWhenWrong: "se est suivi du verbe prépare, donc c'est se, le pronom réfléchi.",
          strictAccents: true
        },
        {
          order: 3,
          prompt: "Complète : ___ livre est passionnant. (ce ou se)",
          answer: "ce",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "ce est suivi du nom livre, donc c'est ce, le déterminant démonstratif.",
          strictAccents: true
        },
        {
          order: 4,
          prompt: "Complète : Il ___ lève tôt tous les matins. (ce ou se)",
          answer: "se",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "se est suivi du verbe lève, donc c'est se, le pronom réfléchi.",
          strictAccents: true
        },
        {
          order: 5,
          prompt: "Complète : ___ dessin est très réussi. (ce ou se)",
          answer: "ce",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "ce est suivi du nom dessin, donc c'est ce, le déterminant démonstratif.",
          strictAccents: true
        },
        {
          order: 6,
          prompt: "Défi : complète les deux mots. ___ garçon ___ dépêche pour ne pas être en retard.",
          answer: "ce se",
          kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.",
          explanationWhenWrong: "ce est suivi du nom garçon, c'est le déterminant démonstratif ; se est suivi du verbe dépêche, c'est le pronom réfléchi.",
          strictAccents: true
        }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Multiplier un grand nombre en le décomposant",
      xpReward: 24,
      story: {
        hook: "Imagine que tu casses un grand nombre en morceaux plus faciles à multiplier, puis que tu recolles les résultats.",
        concreteExample: "Pour calculer 23 x 4, on décompose 23 en 20 + 3.",
        reveal: "20 x 4 = 80, et 3 x 4 = 12. On additionne : 80 + 12 = 92. Donc 23 x 4 = 92. Bravo, tu as décomposé une multiplication !",
        bridgeToConcept: "Pour multiplier un nombre à deux chiffres, on le décompose en dizaines et unités, on multiplie chaque partie, puis on additionne les résultats.",
        illustrationEmoji: "🧩"
      },
      examples: [
        {
          title: "Exemple 1 : 34 x 3",
          steps: [
            { text: "34 = 30 + 4.", illustrationEmoji: "🔟" },
            { text: "30 x 3 = 90, et 4 x 3 = 12.", illustrationEmoji: "✖️" },
            { text: "90 + 12 = 102. Donc 34 x 3 = 102.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : 42 x 5",
          steps: [
            { text: "42 = 40 + 2.", illustrationEmoji: "🔟" },
            { text: "40 x 5 = 200, et 2 x 5 = 10.", illustrationEmoji: "✖️" },
            { text: "200 + 10 = 210. Donc 42 x 5 = 210.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 21 x 4", answer: "84", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "21 = 20 + 1. 20 x 4 = 80, 1 x 4 = 4. 80 + 4 = 84." },
        { order: 2, prompt: "Calcule : 32 x 3", answer: "96", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "32 = 30 + 2. 30 x 3 = 90, 2 x 3 = 6. 90 + 6 = 96." },
        { order: 3, prompt: "Calcule : 24 x 5", answer: "120", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "24 = 20 + 4. 20 x 5 = 100, 4 x 5 = 20. 100 + 20 = 120." },
        { order: 4, prompt: "Calcule : 43 x 4", answer: "172", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "43 = 40 + 3. 40 x 4 = 160, 3 x 4 = 12. 160 + 12 = 172." },
        { order: 5, prompt: "Calcule : 36 x 6", answer: "216", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "36 = 30 + 6. 30 x 6 = 180, 6 x 6 = 36. 180 + 36 = 216." },
        { order: 6, prompt: "Défi : calcule 27 x 8", answer: "216", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "27 = 20 + 7. 20 x 8 = 160, 7 x 8 = 56. 160 + 56 = 216." }
      ]
    }
  ]
};
