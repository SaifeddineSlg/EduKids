import { DayCurriculum } from "@/models/types";

export const day06: DayCurriculum = {
  dayNumber: 6,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Lire et écrire les nombres jusqu'à 10 000",
      xpReward: 24,
      story: {
        hook: "Imagine que tu dois compter tous les élèves de plusieurs écoles réunies pour une grande fête.",
        concreteExample: "Une école compte 3 245 élèves. Comment lire ce nombre à voix haute ?",
        reveal: "On lit trois mille deux cent quarante-cinq. Le chiffre tout à gauche indique les milliers, puis viennent les centaines, les dizaines et les unités.",
        bridgeToConcept: "Un nombre à quatre chiffres se décompose en milliers, centaines, dizaines et unités.",
        illustrationEmoji: "🏫"
      },
      examples: [
        {
          title: "Décomposer un nombre",
          steps: [
            { text: "6 328 se décompose en 6 milliers, 3 centaines, 2 dizaines et 8 unités.", illustrationEmoji: "🔢" },
            { text: "On le lit : six mille trois cent vingt-huit.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Comparer deux nombres",
          steps: [
            { text: "5 120 et 5 210 : on compare d'abord les milliers, ils sont égaux (5).", illustrationEmoji: "🔍" },
            { text: "On compare ensuite les centaines : 2 est plus grand que 1, donc 5 210 est le plus grand.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans le nombre 4 267, combien y a-t-il de milliers ?", answer: "4", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Le chiffre tout à gauche indique les milliers : dans 4 267, il y a 4 milliers." },
        { order: 2, prompt: "Écris en chiffres : trois mille cinq cent douze.", answer: "3512", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Trois mille (3000) plus cinq cent douze (512) donnent 3512." },
        { order: 3, prompt: "Compare 6 340 et 6 430 : lequel est le plus grand ?", answer: "6430", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Les milliers sont égaux (6), mais 4 centaines dans 6430 sont plus grandes que 3 centaines dans 6340." },
        { order: 4, prompt: "Dans le nombre 8 056, combien y a-t-il de centaines ?", answer: "0", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Dans 8 056, après les 8 milliers, il y a 0 centaine, puis 5 dizaines et 6 unités." },
        {
          order: 5,
          type: "mcq",
          prompt: "Comment s'écrit sept mille quatre-vingt-dix en chiffres ?",
          options: ["7090", "7190", "790"],
          answer: "7090",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Sept mille (7000) plus quatre-vingt-dix (90) donnent 7090."
        },
        { order: 6, prompt: "Défi : range ces nombres du plus petit au plus grand : 4521, 4251, 4512.", answer: "4251 4512 4521", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Les milliers sont tous égaux à 4. On compare les centaines : 4251 a 2 centaines, c'est le plus petit. 4512 et 4521 ont 5 centaines, mais 4512 a 1 dizaine contre 2 pour 4521, donc 4512 est plus petit. L'ordre est : 4251, 4512, 4521." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le passé composé avec avoir",
      xpReward: 24,
      story: {
        hook: "Imagine que tu racontes à ta maîtresse ce que tu as fait hier, une action déjà terminée.",
        concreteExample: "Écoute : hier, j'ai mangé une glace. Tu as joué au ballon. Il a regardé un film.",
        reveal: "Le passé composé se forme avec deux mots : l'auxiliaire avoir conjugué au présent (ai, as, a...) suivi du participe passé du verbe (mangé, joué, regardé).",
        bridgeToConcept: "Passé composé : j'ai mangé, tu as mangé, il a mangé, nous avons mangé, vous avez mangé, ils ont mangé.",
        illustrationEmoji: "🕰️"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Hier, j'ai regardé un beau dessin animé.", illustrationEmoji: "📺" },
            { text: "Ce matin, tu as rangé ta chambre.", illustrationEmoji: "🧹" }
          ]
        },
        {
          title: "L'astuce pour former le passé composé",
          steps: [
            { text: "On conjugue avoir au présent : j'ai, tu as, il a, nous avons, vous avez, ils ont.", illustrationEmoji: "🔍" },
            { text: "On ajoute le participe passé du verbe en -er, qui se termine toujours par -é.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Hier, j'____ (manger) une glace.", answer: "ai mangé", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec j', on utilise ai (auxiliaire avoir) suivi du participe passé mangé, qui se termine par -é.", strictAccents: true },
        { order: 2, prompt: "Complète : Tu ____ (jouer) au ballon ce matin.", answer: "as joué", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Avec tu, on utilise as (auxiliaire avoir) suivi du participe passé joué.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Il ____ (regarder) un film hier soir.",
          options: ["a regardé", "a regarde", "as regardé"],
          answer: "a regardé",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec il, on utilise a (auxiliaire avoir) suivi du participe passé regardé, avec un é final.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Nous ____ (chanter) toute la soirée.", answer: "avons chanté", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Avec nous, on utilise avons (auxiliaire avoir) suivi du participe passé chanté.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Elles ____ (danser) pendant la fête.",
          options: ["ont dansé", "ont danser", "avons dansé"],
          answer: "ont dansé",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec elles, on utilise ont (auxiliaire avoir) suivi du participe passé dansé, jamais l'infinitif danser.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux verbes. Vous ____ (parler) fort et nous ____ (écouter) attentivement.", answer: "avez parlé avons écouté", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Vous avez parlé (avoir au présent + participe passé parlé) et nous avons écouté (avoir au présent + participe passé écouté).", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Les déterminants : articles définis et indéfinis",
      xpReward: 24,
      story: {
        hook: "Imagine un petit mot qui se place toujours juste devant le nom pour l'annoncer.",
        concreteExample: "Regarde : le chat dort. Un chat miaule. Quelle est la différence entre le et un ?",
        reveal: "Le chat désigne un chat précis, déjà connu. Un chat désigne un chat quelconque, non précisé. Le, la, les sont des articles définis ; un, une, des sont des articles indéfinis.",
        bridgeToConcept: "Les articles définis (le, la, les) désignent quelque chose de précis. Les articles indéfinis (un, une, des) désignent quelque chose de non précisé.",
        illustrationEmoji: "📚"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "La maîtresse explique la leçon : la désigne une personne précise, déjà connue.", illustrationEmoji: "👩‍🏫" },
            { text: "Un enfant lève la main : un désigne un enfant quelconque, pas encore précisé.", illustrationEmoji: "🙋" }
          ]
        },
        {
          title: "L'astuce pour les reconnaître",
          steps: [
            { text: "Le, la, les, l' : articles définis, pour quelque chose de connu.", illustrationEmoji: "🔍" },
            { text: "Un, une, des : articles indéfinis, pour quelque chose de non précisé.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans la maîtresse explique la leçon, l'article la est-il défini ou indéfini ?", answer: "défini", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "La désigne une personne précise et déjà connue, c'est un article défini." },
        { order: 2, prompt: "Dans un enfant lève la main, l'article un est-il défini ou indéfini ?", answer: "indéfini", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Un désigne un enfant quelconque, non précisé, c'est un article indéfini." },
        { order: 3, prompt: "Complète avec l'article défini qui convient : le vent souffle sur ___ montagne. (le/la/les)", answer: "la", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Montagne est féminin singulier, donc l'article défini est la." },
        { order: 4, prompt: "Complète : Il porte ___ chapeau rouge. (un/une)", answer: "un", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Chapeau est masculin singulier, donc l'article indéfini est un." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le bon article : ___ enfants jouent dans la cour.",
          options: ["Les", "Des", "La"],
          answer: "Les",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Enfants est pluriel et désigne des enfants précis, donc l'article qui convient est Les. Des serait indéfini, et La est féminin singulier, cela ne convient pas."
        },
        { order: 6, prompt: "Défi : complète les deux articles. ___ (Un) chien aboie près de ___ (la) maison.", answer: "Un la", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Un chien (article indéfini, chien non précisé) aboie près de la maison (article défini, maison précise)." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "On ou ont : le test avec avaient",
      xpReward: 24,
      story: {
        hook: "Il existe un test facile pour ne plus confondre on et ont.",
        concreteExample: "Regarde : les enfants ___ mangé leur goûter. Est-ce que c'est on ou ont ?",
        reveal: "On essaie de remplacer par avaient : les enfants avaient mangé leur goûter, ça fonctionne ! Donc on écrit ont, le verbe avoir. Bravo, tu as réussi le test !",
        bridgeToConcept: "Si avaient fonctionne, on écrit ont (verbe avoir). Sinon, on écrit on (remplaçable par il), sans t.",
        illustrationEmoji: "🔍"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "On joue dans le jardin : on essaie avaient, ça ne fonctionne pas. On peut dire il joue. Donc on, sans t.", illustrationEmoji: "🌳" },
            { text: "Ils ont fini leur repas : on essaie avaient, ça fonctionne. Donc ont, avec un t.", illustrationEmoji: "🍽️" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Remplace par avaient dans ta tête.", illustrationEmoji: "🔊" },
            { text: "Si ça marche, c'est ont. Sinon, c'est on (remplaçable par il).", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Les enfants ___ mangé leur goûter. (on/ont)", answer: "ont", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "On peut dire les enfants avaient mangé, ça fonctionne. Donc on écrit ont, le verbe avoir.", strictAccents: true },
        { order: 2, prompt: "Complète : ___ joue dans le jardin. (On/Ont)", answer: "On", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "On peut remplacer par il joue, ça fonctionne. Donc on écrit on, sans t.", strictAccents: true },
        { order: 3, prompt: "Complète : Mes parents ___ acheté un nouveau vélo. (on/ont)", answer: "ont", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Mes parents avaient acheté fonctionne, donc on écrit ont, avec un t.", strictAccents: true },
        { order: 4, prompt: "Complète : ___ va au cinéma ce soir. (On/Ont)", answer: "On", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "On peut dire il va au cinéma, donc on écrit on, sans t.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Les oiseaux ___ construit leur nid.",
          options: ["ont", "on"],
          answer: "ont",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Les oiseaux avaient construit fonctionne, donc on écrit ont, avec un t.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. ___ (On) dit que les chats ___ (ont) neuf vies.", answer: "On ont", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "On dit (remplaçable par il dit) et ont neuf vies (remplaçable par avaient neuf vies).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "La table de multiplication de 5",
      xpReward: 24,
      story: {
        hook: "Imagine que tu comptes les doigts de plusieurs mains, 5 doigts à chaque fois.",
        concreteExample: "Il y a 4 mains. Combien de doigts en tout ?",
        reveal: "4 fois 5, ça fait 20. Bravo, tu as trouvé le nombre de doigts !",
        bridgeToConcept: "La table de 5 : 1x5=5, 2x5=10, 3x5=15, 4x5=20, 5x5=25...",
        illustrationEmoji: "🖐️"
      },
      examples: [
        {
          title: "La table de 5",
          steps: [
            { text: "5 x 4 : on compte de 5 en 5, 5, 10, 15, 20.", illustrationEmoji: "➕" },
            { text: "5 x 6 : on continue, ça fait 30.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour la table de 5",
          steps: [
            { text: "Les résultats se terminent toujours par 0 ou par 5.", illustrationEmoji: "🔍" },
            { text: "5 x 7 : se termine par 5, ça fait 35.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 5 x 3", answer: "15", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "5 x 3 = 15." },
        { order: 2, prompt: "Calcule : 5 x 6", answer: "30", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "5 x 6 = 30." },
        { order: 3, prompt: "Calcule : 5 x 7", answer: "35", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "5 x 7 = 35." },
        { order: 4, prompt: "Calcule : 5 x 8", answer: "40", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "5 x 8 = 40." },
        { order: 5, prompt: "Calcule : 5 x 9", answer: "45", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "5 x 9 = 45." },
        { order: 6, prompt: "Défi : calcule 5 x 12", answer: "60", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "5 x 12 = 60." }
      ]
    }
  ]
};
