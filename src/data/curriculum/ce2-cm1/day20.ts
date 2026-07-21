import { DayCurriculum } from "@/models/types";

export const day20: DayCurriculum = {
  dayNumber: 20,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Révision : division avec reste, décimaux, centièmes, durées",
      xpReward: 26,
      story: {
        hook: "Cette semaine, tu as appris encore de nouvelles notions en mathématiques. Faisons le tour ensemble !",
        concreteExample: "Tu sais maintenant diviser avec un reste, additionner des décimaux, lire les centièmes et calculer une durée.",
        reveal: "Toutes ces compétences t'aident à résoudre des problèmes de la vie quotidienne.",
        bridgeToConcept: "Révisons : division avec reste, addition de décimaux, centièmes, calcul de durée.",
        illustrationEmoji: "🎓"
      },
      examples: [
        {
          title: "Rappel division et décimaux",
          steps: [
            { text: "20 divisé par 6 : 6 x 3 = 18, il reste 2.", illustrationEmoji: "🔢" },
            { text: "2,3 + 3,4 = 5,7, on additionne dixième par dixième.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Rappel centièmes et durée",
          steps: [
            { text: "3,45 a 4 dixièmes et 5 centièmes.", illustrationEmoji: "💰" },
            { text: "De 14h à 16h30, il s'écoule 2 heures et 30 minutes.", illustrationEmoji: "⏱️" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 17 divisé par 5. Quel est le quotient ?", answer: "3", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "5 x 3 = 15, c'est le plus grand multiple de 5 sous 17, donc le quotient est 3." },
        { order: 2, prompt: "Calcule : 17 divisé par 5. Quel est le reste ?", answer: "2", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "17 - 15 = 2, le reste est 2." },
        { order: 3, prompt: "Calcule : 3,2 + 2,5", answer: "5,7", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Dixièmes 2 + 5 = 7, unités 3 + 2 = 5. Résultat : 5,7." },
        { order: 4, prompt: "Dans le nombre 6,28, combien y a-t-il de centièmes ?", answer: "8", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Le deuxième chiffre après la virgule indique les centièmes : dans 6,28, il y a 8 centièmes." },
        {
          order: 5,
          type: "mcq",
          prompt: "Un cours commence à 9h et finit à 10h30. Combien de temps dure-t-il ?",
          options: ["1 heure et 30 minutes", "30 minutes", "2 heures"],
          answer: "1 heure et 30 minutes",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "De 9h à 10h, 1 heure, puis de 10h à 10h30, 30 minutes de plus : 1 heure et 30 minutes en tout."
        },
        { order: 6, prompt: "Défi : 26 bonbons partagés entre 4 amis. Combien chacun reçoit-il, et combien en reste-t-il ?", answer: "6 2", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "4 x 6 = 24, c'est le plus grand multiple de 4 sous 26. Le reste est 26 - 24 = 2. Chaque ami reçoit 6 bonbons, il en reste 2." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Révision : verbes en -re, pronominaux, imparfait et futur irréguliers",
      xpReward: 26,
      story: {
        hook: "Cette semaine, tu as conjugué de nombreux verbes un peu spéciaux. Récapitulons !",
        concreteExample: "Présent : je vends. Passé composé : je me suis lavé. Imparfait : je voyais. Futur : je pourrai.",
        reveal: "Chaque temps garde ses propres terminaisons, même quand la racine du verbe change.",
        bridgeToConcept: "Révisons : présent des verbes en -re, passé composé des verbes pronominaux, imparfait des verbes irréguliers, futur de pouvoir, voir et vouloir.",
        illustrationEmoji: "🕰️"
      },
      examples: [
        {
          title: "Rappel présent et passé composé",
          steps: [
            { text: "Vendre au présent : je vends, nous vendons.", illustrationEmoji: "🛍️" },
            { text: "Passé composé pronominal : je me suis lavé, elle s'est habillée.", illustrationEmoji: "🚿" }
          ]
        },
        {
          title: "Rappel de l'imparfait et du futur",
          steps: [
            { text: "Imparfait : je voyais, je disais.", illustrationEmoji: "👀" },
            { text: "Futur : je pourrai, tu verras, il voudra.", illustrationEmoji: "🔮" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Tu ____ (attendre) ton tour patiemment.", answer: "attends", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec tu, le présent de attendre est attends.", strictAccents: true },
        { order: 2, prompt: "Complète : Elle ____ (s'habiller) rapidement ce matin.", answer: "s'est habillée", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Avec elle, on utilise s'est (être) suivi du participe passé accordé au féminin : habillée.", strictAccents: true },
        { order: 3, prompt: "Complète : Avant, je ____ (voir) mal sans mes lunettes.", answer: "voyais", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec je, l'imparfait de voir est voyais, avec la racine voy-.", strictAccents: true },
        { order: 4, prompt: "Complète : Demain, je ____ (pouvoir) venir avec toi.", answer: "pourrai", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Avec je, le futur de pouvoir est pourrai, avec la racine pourr-.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Il ____ (prendre) son goûter avant de sortir.",
          options: ["prend", "prends", "prennent"],
          answer: "prend",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec il, le présent de prendre est prend, sans s.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux verbes. Hier soir, je ____ (se coucher) tôt et demain, je ____ (voir) mes cousins.", answer: "me suis couché verrai", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Je me suis couché (passé composé pronominal, masculin singulier) et je verrai (futur du verbe voir).", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Révision : types de phrases, négation, accord sujet-verbe et pronoms possessifs",
      xpReward: 26,
      story: {
        hook: "Cette semaine, tu as découvert de nouveaux outils pour construire tes phrases. Récapitulons !",
        concreteExample: "Range ta chambre ! (impérative). Je ne mange pas de légumes (négation). Les enfants jouent (accord). C'est le mien (pronom possessif).",
        reveal: "Ces notions t'aident à construire des phrases précises et correctement accordées.",
        bridgeToConcept: "Révisons : types de phrases, forme négative, accord sujet-verbe, pronoms possessifs.",
        illustrationEmoji: "🧩"
      },
      examples: [
        {
          title: "Rappel des types de phrases et de la négation",
          steps: [
            { text: "Quelle belle journée ! est une phrase exclamative.", illustrationEmoji: "❗" },
            { text: "Elle ne regarde jamais la télévision : forme négative avec ne...jamais.", illustrationEmoji: "🚫" }
          ]
        },
        {
          title: "Rappel de l'accord et des pronoms possessifs",
          steps: [
            { text: "Les enfants jouent : le verbe s'accorde avec le sujet pluriel.", illustrationEmoji: "🤝" },
            { text: "C'est mon livre. C'est le mien : le mien est un pronom possessif.", illustrationEmoji: "🙌" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Quel est le type de la phrase : Quelle belle journée ! ?", answer: "exclamative", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Elle exprime une émotion et se termine par un point d'exclamation, c'est une phrase exclamative." },
        { order: 2, prompt: "Mets à la forme négative : Il aime les épinards.", answer: "Il n'aime pas les épinards.", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Ne devient n' devant la voyelle du verbe aime." },
        { order: 3, prompt: "Accorde le verbe : Les chats (dormir) ___ sur le canapé.", answer: "dorment", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Chats est pluriel, donc le verbe prend la terminaison -ent : dorment." },
        { order: 4, prompt: "Remplace par un pronom possessif : c'est ta trousse. C'est ___.", answer: "la tienne", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "La tienne remplace ta trousse, un nom féminin singulier." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le type de la phrase : Où habites-tu ?",
          options: ["interrogative", "déclarative", "exclamative"],
          answer: "interrogative",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Elle pose une question, c'est une phrase interrogative."
        },
        { order: 6, prompt: "Défi : mets cette phrase à la forme négative. Les enfants jouent dehors.", answer: "Les enfants ne jouent pas dehors.", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Enfants est pluriel donc jouent, et on encadre le verbe avec ne...pas pour obtenir la phrase négative." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Révision : la/l'a/là, quand/qu'en, quel/qu'elle, sans/s'en",
      xpReward: 26,
      story: {
        hook: "Cette semaine encore plus de mots jumeaux. Récapitulons tous les tests !",
        concreteExample: "La, l'a, là ; quand, qu'en ; quelle, qu'elle ; sans, s'en.",
        reveal: "Chaque mot a son test : les pour la, l'avait pour l'a, ici pour là, lorsque pour quand, l'accord pour quel, avec pour sans.",
        bridgeToConcept: "Utilise toujours le bon test pour choisir la bonne orthographe.",
        illustrationEmoji: "🧠"
      },
      examples: [
        {
          title: "Rappel des tests avec les, l'avait et ici",
          steps: [
            { text: "La maîtresse (on peut dire les maîtresses au pluriel). Il l'a félicité (il l'avait félicité).", illustrationEmoji: "🔍" },
            { text: "Pose-le là (là indique un lieu, comme ici).", illustrationEmoji: "📍" }
          ]
        },
        {
          title: "Rappel des tests avec lorsque, l'accord et avec",
          steps: [
            { text: "Quand pars-tu (on peut dire lorsque pars-tu). Quelle heure (accord avec le nom heure).", illustrationEmoji: "⏰" },
            { text: "Il part sans son sac (sans est le contraire d'avec).", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : ___ maîtresse arrive. (la/l'a/là)", answer: "La", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "La est un article, on peut dire les maîtresses au pluriel.", strictAccents: true },
        { order: 2, prompt: "Complète : ___ pars-tu en vacances ? (quand/qu'en)", answer: "Quand", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "On peut dire lorsque pars-tu, c'est une question de temps, donc on écrit quand.", strictAccents: true },
        { order: 3, prompt: "Complète : ___ heure est-il ? (quelle/qu'elle)", answer: "Quelle", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Quelle s'accorde avec heure, un nom féminin singulier.", strictAccents: true },
        { order: 4, prompt: "Complète : Il part ___ dire au revoir. (sans/s'en)", answer: "sans", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Sans est le contraire d'avec, ici il manque le au revoir.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Le livre est resté ___, sur la table.",
          options: ["là", "la", "l'a"],
          answer: "là",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Là indique un lieu précis, avec un accent grave.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les trois mots. ___ (La) maîtresse pense ___ (qu'elle) arrivera ___ (quand) la cloche sonnera.", answer: "La qu'elle quand", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "La maîtresse (article, on peut dire les maîtresses), qu'elle arrivera (on peut dire qu'il arrivera), quand la cloche sonnera (on peut dire lorsque la cloche sonnera).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Révision : tables de 10 et 11, multiplier par 100, ajouter 19",
      xpReward: 26,
      story: {
        hook: "Cette semaine, ton cerveau est devenu un vrai champion du calcul. Faisons le point !",
        concreteExample: "7 x 11 = 77, 6 x 100 = 600, 24 + 19 = 43. Tu calcules de plus en plus vite !",
        reveal: "Ces automatismes t'aident à calculer rapidement, sans poser l'opération.",
        bridgeToConcept: "Révisons ensemble les tables de 10 et 11, multiplier par 100 et l'astuce pour ajouter 19.",
        illustrationEmoji: "⚡"
      },
      examples: [
        {
          title: "Rappel des tables de 10 et 11",
          steps: [
            { text: "6 x 10 = 60, 7 x 11 = 77.", illustrationEmoji: "🔢" },
            { text: "Multiplier par 100 : on ajoute deux zéros.", illustrationEmoji: "💯" }
          ]
        },
        {
          title: "Rappel de l'astuce du 19 et du comptage de 4 en 4",
          steps: [
            { text: "Ajouter 19 : on ajoute 20 puis on retire 1.", illustrationEmoji: "🔍" },
            { text: "Compter de 4 en 4 : 0, 4, 8, 12...", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 8 x 10", answer: "80", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "8 x 10 = 80, on ajoute un zéro." },
        { order: 2, prompt: "Calcule : 6 x 11", answer: "66", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "6 x 11 = 66, on répète le chiffre 6." },
        { order: 3, prompt: "Calcule : 9 x 100", answer: "900", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "9 x 100 = 900, on ajoute deux zéros." },
        { order: 4, prompt: "Calcule : 32 + 19", answer: "51", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "32 + 20 = 52, puis 52 - 1 = 51." },
        {
          order: 5,
          type: "mcq",
          prompt: "Complète la suite : 20, 24, ___",
          options: ["28", "26", "30"],
          answer: "28",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "24 + 4 = 28."
        },
        { order: 6, prompt: "Défi : calcule 7 x 11, puis ajoute 19 au résultat.", answer: "96", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "7 x 11 = 77, puis 77 + 19 = 96 (77 + 20 = 97, puis 97 - 1 = 96)." }
      ]
    }
  ]
};
