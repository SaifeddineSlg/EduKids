import { DayCurriculum } from "@/models/types";

export const day22: DayCurriculum = {
  dayNumber: 22,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Arrondir un nombre à la dizaine ou à la centaine près",
      xpReward: 22,
      story: {
        hook: "Imagine que tu veux donner un nombre plus simple, proche du nombre exact.",
        concreteExample: "Le nombre 47 est-il plus proche de 40 ou de 50 ?",
        reveal: "On regarde le chiffre des unités : 0, 1, 2, 3, 4 arrondissent en dessous ; 5, 6, 7, 8, 9 arrondissent au-dessus. 47 a un 7 aux unités, donc on arrondit à 50. Bravo, tu sais arrondir un nombre !",
        bridgeToConcept: "Pour arrondir à la dizaine, on regarde le chiffre des unités : s'il est 5 ou plus, on arrondit au-dessus ; sinon, on arrondit en dessous.",
        illustrationEmoji: "🔢"
      },
      examples: [
        {
          title: "Arrondir un nombre à la dizaine",
          steps: [
            { text: "32 a un 2 aux unités, plus petit que 5 : on arrondit à 30.", illustrationEmoji: "⬇️" },
            { text: "68 a un 8 aux unités, 5 ou plus : on arrondit à 70.", illustrationEmoji: "⬆️" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "85 a un 5 aux unités : on arrondit à 90.", illustrationEmoji: "⬆️" },
            { text: "24 a un 4 aux unités : on arrondit à 20.", illustrationEmoji: "⬇️" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Arrondis 43 à la dizaine la plus proche.", answer: "40", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "43 a un 3 aux unités, plus petit que 5 : on arrondit à 40." },
        { order: 2, prompt: "Arrondis 76 à la dizaine la plus proche.", answer: "80", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "76 a un 6 aux unités, 5 ou plus : on arrondit à 80." },
        { order: 3, prompt: "Arrondis 25 à la dizaine la plus proche.", answer: "30", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "25 a un 5 aux unités : on arrondit au-dessus, à 30." },
        {
          order: 4,
          type: "mcq",
          prompt: "Arrondis 91 à la dizaine la plus proche. Choisis la bonne réponse.",
          options: ["80", "90", "100"],
          answer: "90",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "91 a un 1 aux unités, plus petit que 5 : on arrondit à 90."
        },
        {
          order: 5,
          type: "mcq",
          prompt: "Arrondis 58 à la dizaine la plus proche. Choisis la bonne réponse.",
          options: ["50", "60", "70"],
          answer: "60",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "58 a un 8 aux unités, 5 ou plus : on arrondit à 60."
        },
        { order: 6, prompt: "Défi : arrondis 347 à la centaine la plus proche (indice : regarde le chiffre des dizaines).", answer: "300", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "347 a un 4 aux dizaines, plus petit que 5 : on arrondit à la centaine en dessous, 300." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "L'impératif présent des verbes en -er",
      xpReward: 22,
      story: {
        hook: "Il existe un mode spécial pour donner un ordre, un conseil ou une consigne : l'impératif présent.",
        concreteExample: "Écoute : Chante ! Chantons ! Chantez ! Que remarques-tu sur la forme avec tu ?",
        reveal: "À quoi ça sert ? À donner un ordre, un conseil ou une consigne. Comment le reconnaître ? Il n'y a pas de sujet exprimé, et seulement trois personnes : tu, nous, vous. Pour les verbes en -er, la forme avec tu perd son s : tu chantes devient Chante !",
        bridgeToConcept: "Impératif présent des verbes en -er : Chante ! Chantons ! Chantez ! Attention, pas de s à la forme avec tu.",
        illustrationEmoji: "📢"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Range ta chambre !", illustrationEmoji: "🧹" },
            { text: "Écoutons la maîtresse !", illustrationEmoji: "👂" }
          ]
        },
        {
          title: "Attention à l'erreur fréquente",
          steps: [
            { text: "Beaucoup d'enfants écrivent Chantes ! avec un s. C'est une erreur !", illustrationEmoji: "❌" },
            { text: "À l'impératif, les verbes en -er ne prennent jamais de s avec tu : Chante ! Mange ! Écoute !", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète à l'impératif (tu) : ____ (manger) tes légumes !", answer: "mange", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "À l'impératif avec tu, les verbes en -er perdent leur s : mange, jamais manges.", strictAccents: true },
        { order: 2, prompt: "Complète à l'impératif (nous) : ____ (regarder) ce bel arc-en-ciel !", answer: "regardons", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "À l'impératif avec nous, on ajoute la terminaison -ons : regardons.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse à l'impératif (vous) : ____ (fermer) la porte !",
          options: ["fermez", "fermes", "ferme"],
          answer: "fermez",
          kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.",
          explanationWhenWrong: "À l'impératif avec vous, on ajoute la terminaison -ez : fermez.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète à l'impératif (tu) : ____ (écouter) bien la consigne !", answer: "écoute", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "À l'impératif avec tu, les verbes en -er perdent leur s : écoute, jamais écoutes.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse à l'impératif (tu) : ____ (donner) ton avis !",
          options: ["donne", "donnes", "donnez"],
          answer: "donne",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.",
          explanationWhenWrong: "À l'impératif avec tu, les verbes en -er perdent leur s : donne, jamais donnes.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots à l'impératif. ____ (jouer) dehors (à nous) et ____ (ranger) tes affaires (à tu).", answer: "jouons range", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "Jouons prend la terminaison -ons pour nous, et range perd son s pour tu.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Le complément du nom",
      xpReward: 22,
      story: {
        hook: "Imagine un petit groupe de mots qui vient donner une précision sur un nom.",
        concreteExample: "Regarde : un vélo de course. Que précise le groupe de mots de course ?",
        reveal: "À quoi sert-il ? Il précise le nom vélo, en donnant un renseignement sur son usage. Comment le reconnaître ? Il suit un nom et il est souvent introduit par une préposition comme de, à ou en.",
        bridgeToConcept: "Le complément du nom précise un nom ; il est relié à lui par une préposition comme de, à ou en.",
        illustrationEmoji: "🔗"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Une table en bois : en bois précise la matière de la table.", illustrationEmoji: "🪵" },
            { text: "Un sac de sport : de sport précise l'usage du sac.", illustrationEmoji: "🎒" }
          ]
        },
        {
          title: "L'astuce pour le repérer",
          steps: [
            { text: "Cherche le nom, puis regarde le petit groupe de mots qui le suit et le précise.", illustrationEmoji: "🔍" },
            { text: "Il est souvent introduit par de, à ou en.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans la phrase Elle porte une robe de laine, quel est le complément du nom robe ?", answer: "de laine", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "De laine précise la matière de la robe : c'est le complément du nom." },
        { order: 2, prompt: "Dans la phrase Il conduit une voiture de course, quel est le complément du nom voiture ?", answer: "de course", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "De course précise le type de voiture : c'est le complément du nom." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis le complément du nom : un verre à eau.",
          options: ["un verre", "à eau", "eau"],
          answer: "à eau",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "À eau précise l'usage du verre : c'est le complément du nom."
        },
        { order: 4, prompt: "Dans la phrase Le chapeau de paille est joli, quel est le complément du nom chapeau ?", answer: "de paille", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "De paille précise la matière du chapeau : c'est le complément du nom." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le complément du nom : une boîte en carton.",
          options: ["une boîte", "en carton", "carton"],
          answer: "en carton",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "En carton précise la matière de la boîte : c'est le complément du nom."
        },
        { order: 6, prompt: "Défi : dans la phrase Le sac de sport et la table en bois sont dans le garage, cite les deux compléments du nom.", answer: "de sport en bois", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "De sport précise le sac, et en bois précise la table : ce sont les deux compléments du nom." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "C'est ou s'est : le test avec c'était",
      xpReward: 22,
      story: {
        hook: "Deux petits mots se prononcent pareil mais ne s'écrivent pas de la même façon : c'est et s'est.",
        concreteExample: "Regarde : C'est mon cahier. Il s'est levé tôt. Comment faire la différence ?",
        reveal: "À quoi sert cette distinction ? C'est présente ou désigne quelque chose ; s'est accompagne un verbe pronominal, une action qu'on fait à soi-même. Comment le reconnaître ? Si on peut dire c'était, on écrit c'est. Si on peut dire je me suis, on écrit s'est.",
        bridgeToConcept: "C'est se remplace par c'était (Il présente quelque chose). S'est se remplace par je me suis (verbe pronominal).",
        illustrationEmoji: "🔍"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "C'est mon cahier : on peut dire c'était mon cahier.", illustrationEmoji: "📒" },
            { text: "Il s'est levé tôt : on peut dire je me suis levé tôt.", illustrationEmoji: "⏰" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Si on peut dire c'était, on écrit c'est.", illustrationEmoji: "🔍" },
            { text: "Si on peut dire je me suis, on écrit s'est.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : ___ un beau jour d'été. (c'est/s'est)", answer: "c'est", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "On peut dire c'était un beau jour d'été, donc on écrit c'est.", strictAccents: true },
        { order: 2, prompt: "Complète : Elle ___ coiffée avant de partir. (c'est/s'est)", answer: "s'est", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "On peut dire je me suis coiffée avant de partir, donc on écrit s'est.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis le bon mot : ___ une bonne idée.",
          options: ["c'est", "s'est"],
          answer: "c'est",
          kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.",
          explanationWhenWrong: "On peut dire c'était une bonne idée, donc on écrit c'est.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Il ___ blessé au genou. (c'est/s'est)", answer: "s'est", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "On peut dire je me suis blessé au genou, donc on écrit s'est.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le bon mot : ___ mon anniversaire aujourd'hui.",
          options: ["c'est", "s'est"],
          answer: "c'est",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.",
          explanationWhenWrong: "On peut dire c'était mon anniversaire aujourd'hui, donc on écrit c'est.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. ___ elle qui ___ trompée de chemin. (c'est/s'est)", answer: "c'est s'est", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "C'était elle qui... fonctionne, donc c'est ; je me suis trompée fonctionne, donc s'est.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Ajouter 11 mentalement : ajouter 10 puis ajouter 1",
      xpReward: 22,
      story: {
        hook: "Imagine une astuce magique pour ajouter 11 très vite, sans compter un par un.",
        concreteExample: "Tu as 23 images et tu en reçois 11 de plus. Combien en as-tu maintenant ?",
        reveal: "Au lieu de compter 11 par 11, on ajoute 10 (23 + 10 = 33), puis on ajoute 1 (33 + 1 = 34). Tu as 34 images. Bravo, tu as utilisé l'astuce du 11 !",
        bridgeToConcept: "Pour ajouter 11 mentalement, on ajoute 10 puis on ajoute 1.",
        illustrationEmoji: "🧮"
      },
      examples: [
        {
          title: "L'astuce du 11",
          steps: [
            { text: "16 + 11 : on fait 16 + 10 = 26, puis 26 + 1 = 27.", illustrationEmoji: "➕" },
            { text: "34 + 11 : on fait 34 + 10 = 44, puis 44 + 1 = 45.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Encore un exemple",
          steps: [
            { text: "52 + 11 : on fait 52 + 10 = 62, puis 62 + 1 = 63.", illustrationEmoji: "➕" },
            { text: "C'est plus rapide que compter un par un !", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 14 + 11", answer: "25", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "14 + 10 = 24, puis 24 + 1 = 25." },
        { order: 2, prompt: "Calcule : 27 + 11", answer: "38", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "27 + 10 = 37, puis 37 + 1 = 38." },
        { order: 3, prompt: "Calcule : 45 + 11", answer: "56", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "45 + 10 = 55, puis 55 + 1 = 56." },
        { order: 4, prompt: "Calcule : 58 + 11", answer: "69", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "58 + 10 = 68, puis 68 + 1 = 69." },
        { order: 5, prompt: "Calcule : 72 + 11", answer: "83", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "72 + 10 = 82, puis 82 + 1 = 83." },
        { order: 6, prompt: "Défi : calcule 89 + 11 en utilisant l'astuce (ajoute 10, puis ajoute 1).", answer: "100", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "89 + 10 = 99, puis 99 + 1 = 100." }
      ]
    }
  ]
};
