import { DayCurriculum } from "@/models/types";

export const day04: DayCurriculum = {
  dayNumber: 4,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Le périmètre du rectangle et du carré",
      xpReward: 22,
      story: {
        hook: "Imagine que tu dois entourer un jardin rectangulaire avec une clôture.",
        concreteExample: "Le jardin mesure 5 mètres de long et 3 mètres de large. Quelle longueur de clôture faut-il ?",
        reveal: "On additionne tous les côtés : 5 + 3 + 5 + 3 = 16 mètres. C'est le périmètre du rectangle.",
        bridgeToConcept: "Périmètre du rectangle = (longueur + largeur) x 2. Périmètre du carré = côté x 4.",
        illustrationEmoji: "🌳"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "Un rectangle de 6 cm sur 4 cm : périmètre = (6+4) x 2 = 20 cm.", illustrationEmoji: "📏" },
            { text: "Un carré de 5 cm de côté : périmètre = 5 x 4 = 20 cm.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Un rectangle de 8 m sur 3 m : périmètre = (8+3) x 2 = 22 m.", illustrationEmoji: "🔍" },
            { text: "Un carré de 7 m de côté : périmètre = 7 x 4 = 28 m.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule le périmètre d'un carré de 4 cm de côté.", answer: "16", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Périmètre du carré = côté x 4, donc 4 x 4 = 16 cm." },
        { order: 2, prompt: "Calcule le périmètre d'un rectangle de 5 m sur 3 m.", answer: "16", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "(5+3) x 2 = 16 m." },
        { order: 3, prompt: "Calcule le périmètre d'un carré de 6 cm de côté.", answer: "24", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "6 x 4 = 24 cm." },
        { order: 4, prompt: "Calcule le périmètre d'un rectangle de 7 m sur 2 m.", answer: "18", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "(7+2) x 2 = 18 m." },
        { order: 5, prompt: "Calcule le périmètre d'un carré de 9 cm de côté.", answer: "36", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "9 x 4 = 36 cm." },
        { order: 6, prompt: "Défi : un jardin rectangulaire mesure 10 m sur 6 m. Quelle longueur de clôture faut-il pour en faire le tour ?", answer: "32", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "(10+6) x 2 = 32 m de clôture." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Reconnaître le passé simple",
      xpReward: 22,
      story: {
        hook: "Dans les contes et les histoires, un temps très particulier raconte les actions du passé.",
        concreteExample: "Écoute : il était une fois un roi qui vécut heureux et eut beaucoup d'enfants.",
        reveal: "Vécut et eut sont au passé simple, utilisé surtout à l'écrit, dans les récits et les contes, à la 3e personne (il/elle/ils/elles).",
        bridgeToConcept: "Le passé simple s'utilise à l'écrit pour raconter : il joua, elle finit, ils partirent.",
        illustrationEmoji: "📜"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Le prince arriva au château et rencontra la princesse.", illustrationEmoji: "🏰" },
            { text: "Les enfants coururent dans la forêt et trouvèrent un trésor.", illustrationEmoji: "🌲" }
          ]
        },
        {
          title: "L'astuce pour reconnaître le passé simple",
          steps: [
            { text: "On le trouve surtout dans les contes et les récits écrits.", illustrationEmoji: "🔍" },
            { text: "Il se termine souvent par -a, -it, -ut au singulier.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        {
          order: 1,
          type: "mcq",
          prompt: "Choisis la forme au passé simple : le prince ___ au château.",
          options: ["arriva", "arrive", "arrivera"],
          answer: "arriva",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Arriva est la forme du passé simple : elle raconte une action terminée dans un récit écrit, comme dans un conte.",
          strictAccents: true
        },
        { order: 2, prompt: "Complète au passé simple : elle ____ (finir) son travail avant la nuit.", answer: "finit", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Avec elle, le passé simple de finir est finit, comme au présent, mais ici l'action est terminée dans le récit.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la forme au passé simple : ils ___ dans la forêt.",
          options: ["coururent", "courent", "couraient"],
          answer: "coururent",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Coururent est la forme du passé simple avec ils, reconnaissable à sa terminaison en -urent.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète au passé simple : le roi ____ (avoir) beaucoup d'enfants.", answer: "eut", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Avec il, le passé simple du verbe avoir est eut, qui se prononce comme le mot eu.", strictAccents: true },
        { order: 5, prompt: "Complète au passé simple : la princesse ____ (vivre) heureuse.", answer: "vécut", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Avec elle, le passé simple du verbe vivre est vécut, avec un accent aigu sur le e.", strictAccents: true },
        { order: 6, prompt: "Défi : dans quel type de texte trouve-t-on surtout le passé simple ?", answer: "les contes", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Le passé simple s'utilise surtout à l'écrit, dans les contes et les récits littéraires.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Les adverbes",
      xpReward: 22,
      story: {
        hook: "Imagine un petit mot qui donne plus de précisions sur un verbe, un adjectif ou un autre mot, sans jamais changer.",
        concreteExample: "Regarde : elle court vite. Que nous apprend vite sur la manière de courir ?",
        reveal: "Vite précise comment elle court. C'est un adverbe : il ne s'accorde jamais, contrairement à l'adjectif.",
        bridgeToConcept: "L'adverbe précise un verbe, un adjectif ou un autre adverbe, et il est invariable.",
        illustrationEmoji: "🏃"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Il parle doucement : doucement précise comment il parle.", illustrationEmoji: "🤫" },
            { text: "Elle est très fatiguée : très précise l'adjectif fatiguée.", illustrationEmoji: "😴" }
          ]
        },
        {
          title: "L'astuce pour reconnaître un adverbe",
          steps: [
            { text: "Le mot ne s'accorde jamais, il reste invariable.", illustrationEmoji: "🔍" },
            { text: "Beaucoup d'adverbes se terminent par -ment (doucement, rapidement).", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans elle court vite, quel est l'adverbe ?", answer: "vite", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Vite précise comment elle court, c'est un adverbe." },
        { order: 2, prompt: "Dans il parle doucement, quel est l'adverbe ?", answer: "doucement", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Doucement précise comment il parle, c'est un adverbe." },
        { order: 3, prompt: "Dans elle est très fatiguée, quel est l'adverbe ?", answer: "très", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Très précise l'adjectif fatiguée, c'est un adverbe." },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne réponse : dans il travaille sérieusement, sérieusement est un...",
          options: ["adverbe", "adjectif", "nom"],
          answer: "adverbe",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Sérieusement précise comment il travaille, c'est un adverbe."
        },
        { order: 5, prompt: "Dans nous arrivons bientôt, quel est l'adverbe ?", answer: "bientôt", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Bientôt précise quand nous arrivons, c'est un adverbe." },
        { order: 6, prompt: "Défi : dans elle chante vraiment magnifiquement, cite les deux adverbes.", answer: "vraiment magnifiquement", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Vraiment et magnifiquement sont deux adverbes invariables." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Tout, tous, toute, toutes",
      xpReward: 22,
      story: {
        hook: "Imagine un mot caméléon qui change d'habit selon le nom qu'il accompagne.",
        concreteExample: "Regarde : ___ les enfants sont là. Est-ce que tout prend un s ?",
        reveal: "Les enfants est masculin pluriel, donc on écrit tous, avec un s. Devant un nom féminin singulier, on écrit toute (toute la classe), et devant un nom féminin pluriel, toutes (toutes les filles).",
        bridgeToConcept: "Tout s'accorde avec le nom qu'il accompagne : tout (masc. sing.), tous (masc. plur.), toute (fém. sing.), toutes (fém. plur.).",
        illustrationEmoji: "🦎"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Tout le gâteau a disparu : masculin singulier, tout sans s.", illustrationEmoji: "🎂" },
            { text: "Toutes les filles chantent : féminin pluriel, toutes avec s.", illustrationEmoji: "👧" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Regarde si le nom qui suit est masculin ou féminin, singulier ou pluriel.", illustrationEmoji: "🔍" },
            { text: "Accorde tout comme un adjectif avec ce nom.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : ___ les enfants sont là. (tout/tous/toute/toutes)", answer: "tous", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Enfants est masculin pluriel, donc on écrit tous, avec un s final.", strictAccents: true },
        { order: 2, prompt: "Complète : ___ la classe est sortie. (tout/tous/toute/toutes)", answer: "toute", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Classe est féminin singulier, donc on écrit toute, avec un e final.", strictAccents: true },
        { order: 3, prompt: "Complète : ___ le gâteau a disparu. (tout/tous/toute/toutes)", answer: "tout", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Gâteau est masculin singulier, donc on écrit tout, sans e ni s.", strictAccents: true },
        { order: 4, prompt: "Complète : ___ les filles chantent. (tout/tous/toute/toutes)", answer: "toutes", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Filles est féminin pluriel, donc on écrit toutes, avec un e et un s.", strictAccents: true },
        { order: 5, prompt: "Complète : ___ les garçons jouent dehors. (tout/tous/toute/toutes)", answer: "tous", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Garçons est masculin pluriel, donc on écrit tous, avec un s final.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. ___ (toute) la famille et ___ (tous) les amis étaient réunis.", answer: "toute tous", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Tu étais proche ! Famille est féminin singulier (toute), amis est masculin pluriel (tous).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "La table de multiplication de 9",
      xpReward: 22,
      story: {
        hook: "Imagine que tu comptes des balles rangées en boîtes de 9.",
        concreteExample: "Il y a 4 boîtes de 9 balles. Combien de balles en tout ?",
        reveal: "4 fois 9, ça fait 36. Bravo, tu as trouvé le nombre total de balles !",
        bridgeToConcept: "La table de 9 : 1x9=9, 2x9=18, 3x9=27, 4x9=36, 5x9=45...",
        illustrationEmoji: "⚾"
      },
      examples: [
        {
          title: "L'astuce des doigts pour la table de 9",
          steps: [
            { text: "Pour 9 x 4 : baisse le 4e doigt. À gauche, 3 doigts levés (3 dizaines), à droite 6 (6 unités) : 36.", illustrationEmoji: "🖐️" },
            { text: "Pour 9 x 7 : baisse le 7e doigt. 6 doigts à gauche, 3 à droite : 63.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Une autre astuce",
          steps: [
            { text: "9 x un nombre = ce nombre x 10, moins ce nombre.", illustrationEmoji: "🔍" },
            { text: "9 x 6 : 6 x 10 = 60, moins 6, ça fait 54.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 9 x 3", answer: "27", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "9 x 3 = 27." },
        { order: 2, prompt: "Calcule : 9 x 4", answer: "36", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "9 x 4 = 36." },
        { order: 3, prompt: "Calcule : 9 x 5", answer: "45", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "9 x 5 = 45." },
        { order: 4, prompt: "Calcule : 9 x 6", answer: "54", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "9 x 6 = 54." },
        { order: 5, prompt: "Calcule : 9 x 7", answer: "63", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "9 x 7 = 63." },
        { order: 6, prompt: "Défi : calcule 9 x 8", answer: "72", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "9 x 8 = 72." }
      ]
    }
  ]
};
