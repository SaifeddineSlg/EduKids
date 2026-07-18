import { DayCurriculum } from "@/models/types";

export const day10: DayCurriculum = {
  dayNumber: 10,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Révision : grands nombres, périmètre, monnaie, problèmes",
      xpReward: 26,
      story: {
        hook: "Cette semaine, tu as découvert plein de nouvelles notions en mathématiques. Faisons le tour ensemble !",
        concreteExample: "Tu sais maintenant lire les grands nombres, calculer un périmètre, rendre la monnaie et résoudre un problème à deux étapes.",
        reveal: "Toutes ces compétences t'aident dans la vie de tous les jours : compter, mesurer, faire des achats.",
        bridgeToConcept: "Révisons : nombres jusqu'à 10 000, périmètre, monnaie, problèmes à deux étapes.",
        illustrationEmoji: "🎓"
      },
      examples: [
        {
          title: "Rappel nombres et périmètre",
          steps: [
            { text: "3 512 se décompose en 3 milliers, 5 centaines, 1 dizaine, 2 unités.", illustrationEmoji: "🔢" },
            { text: "Périmètre d'un rectangle : (longueur + largeur) x 2.", illustrationEmoji: "📏" }
          ]
        },
        {
          title: "Rappel monnaie et problèmes",
          steps: [
            { text: "Pour rendre la monnaie, on soustrait le prix du montant payé.", illustrationEmoji: "💶" },
            { text: "Un problème à deux étapes se résout calcul par calcul.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans le nombre 5 634, combien y a-t-il de centaines ?", answer: "6", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Après les 5 milliers, le chiffre des centaines est 6." },
        { order: 2, prompt: "Un rectangle mesure 7 m de longueur et 4 m de largeur. Calcule son périmètre.", answer: "22", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "(7 + 4) x 2 = 22 mètres." },
        { order: 3, prompt: "Un jouet coûte 9 euros. Tu payes avec un billet de 10 euros. Combien te rend-on ?", answer: "1", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "10 - 9 = 1 euro de monnaie." },
        { order: 4, prompt: "Un carré a des côtés de 5 m. Calcule son périmètre.", answer: "20", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "4 x 5 = 20 mètres." },
        {
          order: 5,
          type: "mcq",
          prompt: "Comment s'écrit quatre mille deux cents en chiffres ?",
          options: ["4200", "4020", "420"],
          answer: "4200",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Quatre mille (4000) plus deux cents (200) donnent 4200."
        },
        { order: 6, prompt: "Défi : Léa a 25 euros. Elle achète un jeu à 10 euros, puis un livre à 8 euros. Combien lui reste-t-il ?", answer: "7", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "25 - 10 = 15 euros, puis 15 - 8 = 7 euros." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Révision : passé composé et présent des verbes en -ir",
      xpReward: 26,
      story: {
        hook: "Cette semaine, tu as appris à raconter le passé et à donner des ordres. Résumons !",
        concreteExample: "Passé composé : j'ai mangé, je suis allé. Présent : je finis. Impératif : range ta chambre !",
        reveal: "Le passé composé raconte une action terminée, le présent des verbes en -ir suit sa propre règle, et l'impératif donne un ordre sans dire le sujet.",
        bridgeToConcept: "Révisons le passé composé avec avoir et être, le présent des verbes en -ir, et l'impératif.",
        illustrationEmoji: "🕰️"
      },
      examples: [
        {
          title: "Rappel du passé composé",
          steps: [
            { text: "Avec avoir : j'ai mangé, tu as joué.", illustrationEmoji: "🍽️" },
            { text: "Avec être : je suis allé, elle est partie.", illustrationEmoji: "🚶" }
          ]
        },
        {
          title: "Rappel présent -ir et impératif",
          steps: [
            { text: "Finir au présent : je finis, nous finissons.", illustrationEmoji: "🏁" },
            { text: "À l'impératif, range ta chambre (sans s pour les verbes en -er).", illustrationEmoji: "📢" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Hier, j'____ (manger) une glace.", answer: "ai mangé", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec j', on utilise ai (auxiliaire avoir) suivi du participe passé mangé.", strictAccents: true },
        { order: 2, prompt: "Complète : Hier, elle ____ (partir) très tôt.", answer: "est partie", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Avec elle, on utilise est (être) suivi du participe passé accordé au féminin : partie.", strictAccents: true },
        { order: 3, prompt: "Complète : Nous ____ (finir) nos devoirs avant le dîner.", answer: "finissons", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec nous, le présent de finir est finissons, avec le son \"iss\".", strictAccents: true },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne forme pour donner un ordre à un ami (tu) : ___ tes légumes !",
          options: ["Mange", "Manges", "Mangez"],
          answer: "Mange",
          kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊",
          explanationWhenWrong: "À l'impératif avec tu, les verbes en -er perdent leur s final : mange, pas manges.",
          strictAccents: true
        },
        { order: 5, prompt: "Complète : Ils ____ (venir) nous voir hier.", answer: "sont venus", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec ils, on utilise sont (être) suivi du participe passé venus, accordé au masculin pluriel.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux verbes. Vous ____ (parler) fort et nous ____ (écouter) attentivement.", answer: "avez parlé avons écouté", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Vous avez parlé (avoir au présent + participe passé parlé) et nous avons écouté (avoir au présent + participe passé écouté).", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Révision : déterminants, adjectifs, pronoms et pluriels en -al",
      xpReward: 26,
      story: {
        hook: "Cette semaine, tu as enrichi tes phrases avec de nouveaux outils grammaticaux. Récapitulons !",
        concreteExample: "Le chat noir joue. Il est un pronom, noir un adjectif, le un déterminant.",
        reveal: "Ces mots travaillent ensemble pour construire des phrases précises et vivantes.",
        bridgeToConcept: "Révisons : articles définis et indéfinis, adjectif qualificatif, pronoms personnels sujets, pluriel des noms en -al.",
        illustrationEmoji: "🧩"
      },
      examples: [
        {
          title: "Rappel des déterminants et adjectifs",
          steps: [
            { text: "La maîtresse (article défini) explique la leçon.", illustrationEmoji: "👩‍🏫" },
            { text: "Une jolie fleur (adjectif qualificatif) pousse dans le jardin.", illustrationEmoji: "🌸" }
          ]
        },
        {
          title: "Rappel des pronoms et pluriels",
          steps: [
            { text: "Balkis joue dehors. Elle (pronom) rentre bientôt.", illustrationEmoji: "🔄" },
            { text: "Un cheval, des chevaux (pluriel en -al devient -aux).", illustrationEmoji: "🐴" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans un enfant lève la main, l'article un est-il défini ou indéfini ?", answer: "indéfini", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Un désigne un enfant quelconque, non précisé, c'est un article indéfini." },
        { order: 2, prompt: "Accorde l'adjectif : une fleur (joli) ___.", answer: "jolie", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Fleur est féminin singulier, donc l'adjectif s'accorde : jolie, avec un e." },
        { order: 3, prompt: "Dans les enfants jouent dehors. Ils rentrent bientôt, quel pronom remplace les enfants ?", answer: "Ils", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Ils remplace les enfants, c'est un pronom personnel sujet masculin pluriel." },
        { order: 4, prompt: "Complète : un journal, des ___", answer: "journaux", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Un journal prend -aux au pluriel : des journaux." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le pronom qui remplace toi et tes amis : ___ partez en voyage.",
          options: ["Vous", "Nous", "Elles"],
          answer: "Vous",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Vous remplace toi et tes amis, à qui l'on s'adresse directement."
        },
        { order: 6, prompt: "Défi : complète les deux mots. J'ai vu un ___ (animal) au zoo et des beaux ___ (chevaux) dans le pré.", answer: "animal chevaux", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Animal reste au singulier ici, et cheval devient chevaux au pluriel, avec -aux." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Révision : on/ont, son/sont, ou/où, c'est/s'est",
      xpReward: 26,
      story: {
        hook: "Cette semaine, tu as croisé encore plus de mots jumeaux. Récapitulons tous les tests !",
        concreteExample: "On ou ont, son ou sont, ou ou où, c'est ou s'est.",
        reveal: "Chaque paire a son propre test : avaient pour ont, étaient pour sont, ou bien pour ou, cela est pour c'est.",
        bridgeToConcept: "Utilise toujours le bon test pour choisir la bonne orthographe.",
        illustrationEmoji: "🧠"
      },
      examples: [
        {
          title: "Rappel des tests avec avaient et étaient",
          steps: [
            { text: "Les enfants ont mangé (avaient mangé fonctionne, donc ont). On joue (il joue fonctionne, donc on).", illustrationEmoji: "🔍" },
            { text: "Il prend son cartable (pas de test étaient possible, donc son). Ils sont fatigués (étaient fatigués fonctionne, donc sont).", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Rappel des tests avec ou bien et cela est",
          steps: [
            { text: "Tu préfères le thé ou le café (ou bien le café fonctionne, donc ou). Où habites-tu (question de lieu, donc où).", illustrationEmoji: "🧭" },
            { text: "C'est une belle journée (cela est fonctionne, donc c'est). Il s'est levé (verbe pronominal, donc s'est).", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Les enfants ___ mangé leur goûter. (on/ont)", answer: "ont", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "On peut dire les enfants avaient mangé, ça fonctionne. Donc on écrit ont, le verbe avoir.", strictAccents: true },
        { order: 2, prompt: "Complète : Il prend ___ cartable avant de partir. (son/sont)", answer: "son", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "On ne peut pas dire il prend étaient cartable. Donc on écrit son, qui veut dire à lui.", strictAccents: true },
        { order: 3, prompt: "Complète : Tu préfères le thé ___ le café ? (ou/où)", answer: "ou", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "On peut dire ou bien le café, donc on écrit ou, sans accent.", strictAccents: true },
        { order: 4, prompt: "Complète : ___ une belle journée aujourd'hui. (c'est/s'est)", answer: "c'est", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "On peut dire cela est une belle journée, ça fonctionne. Donc on écrit c'est.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Les chats ___ endormis sur le canapé.",
          options: ["sont", "son"],
          answer: "sont",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Les chats étaient endormis fonctionne, donc on écrit sont.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les trois mots. ___ (C'est) vrai que les oiseaux ___ (ont) construit leur nid ___ (où) le vent est faible.", answer: "C'est ont où", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "C'est (cela est vrai fonctionne), ont (les oiseaux avaient construit fonctionne), où (question de lieu, avec un accent).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Révision : tables de 5 et 6, ajouter 9, compter de 5 en 5",
      xpReward: 26,
      story: {
        hook: "Cette semaine, ton cerveau a musclé encore plus vite. Faisons le point !",
        concreteExample: "5 x 6 = 30, 6 x 7 = 42, 27 + 9 = 36. Tu deviens un champion du calcul mental !",
        reveal: "Ces automatismes te permettent de calculer de plus en plus vite, sans poser l'opération.",
        bridgeToConcept: "Révisons ensemble les tables de 5 et 6, l'astuce pour ajouter 9, et compter de 5 en 5.",
        illustrationEmoji: "⚡"
      },
      examples: [
        {
          title: "Rappel des tables",
          steps: [
            { text: "Table de 5 : 5, 10, 15, 20, 25, 30, 35, 40, 45, 50.", illustrationEmoji: "🔢" },
            { text: "Table de 6 : 6, 12, 18, 24, 30, 36, 42, 48, 54, 60.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Rappel de l'astuce du 9 et du comptage",
          steps: [
            { text: "Ajouter 9 : on ajoute 10 puis on retire 1.", illustrationEmoji: "🔍" },
            { text: "Compter de 5 en 5 : 0, 5, 10, 15, 20...", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 5 x 7", answer: "35", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "5 x 7 = 35." },
        { order: 2, prompt: "Calcule : 6 x 8", answer: "48", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "6 x 8 = 48." },
        { order: 3, prompt: "Calcule : 34 + 9", answer: "43", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "34 + 10 = 44, puis 44 - 1 = 43." },
        { order: 4, prompt: "Complète la suite : 30, 35, ___", answer: "40", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "35 + 5 = 40." },
        {
          order: 5,
          type: "mcq",
          prompt: "Calcule : 6 x 9",
          options: ["54", "56", "48"],
          answer: "54",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "6 x 9 = 54."
        },
        { order: 6, prompt: "Défi : calcule 5 x 8, puis ajoute 9 au résultat.", answer: "49", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "5 x 8 = 40, puis 40 + 9 = 49." }
      ]
    }
  ]
};
