import { DayCurriculum } from "@/models/types";

export const day17: DayCurriculum = {
  dayNumber: 17,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Les grands nombres jusqu'au milliard",
      xpReward: 20,
      story: {
        hook: "Imagine que tu lis un article qui parle de millions et de milliards d'habitants sur Terre.",
        concreteExample: "La Terre compte environ 8 000 000 000 d'habitants. Comment lire ce très grand nombre ?",
        reveal: "8 000 000 000 se lit huit milliards. Dans les grands nombres, on groupe les chiffres par tranches de trois : unités, milliers, millions, milliards.",
        bridgeToConcept: "Pour lire un grand nombre, on le découpe en tranches de trois chiffres à partir de la droite : unités, milliers, millions, milliards.",
        illustrationEmoji: "🌍"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "3 250 000 se lit trois millions deux cent cinquante mille.", illustrationEmoji: "🔢" },
            { text: "On repère les tranches : 3 (millions), 250 (milliers), 000 (unités).", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "1 500 000 000 se lit un milliard cinq cents millions.", illustrationEmoji: "🔍" },
            { text: "245 000 se lit deux cent quarante-cinq mille.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Comment se lit le nombre 3 250 000 ?", answer: "trois millions deux cent cinquante mille", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On découpe en tranches : 3 (millions), 250 (milliers) : trois millions deux cent cinquante mille." },
        { order: 2, prompt: "Comment se lit le nombre 1 500 000 000 ?", answer: "un milliard cinq cents millions", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "On découpe en tranches : 1 (milliard), 500 (millions) : un milliard cinq cents millions." },
        { order: 3, prompt: "Écris en chiffres : deux millions trois cent mille", answer: "2 300 000", acceptedAnswers: ["2300000"], kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Deux millions s'écrit 2 000 000, trois cent mille s'écrit 300 000 : ensemble, 2 300 000." },
        { order: 4, prompt: "Dans le nombre 4 582 000 000, quel chiffre représente les milliards ?", answer: "4", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "La première tranche à gauche indique les milliards : 4." },
        { order: 5, prompt: "Écris en chiffres : cinq cent mille", answer: "500 000", acceptedAnswers: ["500000"], kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Cinq cent mille s'écrit 500 000." },
        { order: 6, prompt: "Défi : la France compte environ 68 000 000 d'habitants. Comment se lit ce nombre ?", answer: "soixante-huit millions", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "68 (millions) se lit soixante-huit millions." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "L'accord du participe passé des verbes pronominaux",
      xpReward: 20,
      story: {
        hook: "Imagine que tu racontes une action que l'on fait à soi-même, avec un petit mot se ou s' devant le verbe.",
        concreteExample: "Écoute : elle s'est lavée avant de partir. Pourquoi lavée prend-il un e ?",
        reveal: "Avec les verbes pronominaux (se laver), le participe passé s'accorde le plus souvent avec le sujet, comme avec être : elle s'est lavée, au féminin.",
        bridgeToConcept: "Verbe pronominal au passé composé = se/s' + être conjugué + participe passé, qui s'accorde le plus souvent avec le sujet.",
        illustrationEmoji: "🚿"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "Il s'est levé tôt ce matin (masculin, sans e).", illustrationEmoji: "⏰" },
            { text: "Elle s'est levée tôt ce matin (féminin, avec e).", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Ils se sont habillés rapidement (masculin pluriel, avec s).", illustrationEmoji: "👕" },
            { text: "Elles se sont habillées rapidement (féminin pluriel, avec es).", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : il ____ (se lever) tôt ce matin.", answer: "s'est levé", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Se lever se conjugue avec être ; avec il, le participe passé s'accorde au masculin : s'est levé.", strictAccents: true },
        { order: 2, prompt: "Complète : elle ____ (se laver) avant de partir.", answer: "s'est lavée", kindWhenWrong: "Pas grave, on regarde ça ensemble.", explanationWhenWrong: "Avec elle, le participe passé s'accorde au féminin : s'est lavée.", strictAccents: true },
        { order: 3, prompt: "Complète : ils ____ (s'habiller) rapidement.", answer: "se sont habillés", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Avec ils, le participe passé s'accorde au masculin pluriel : se sont habillés.", strictAccents: true },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne réponse : elles ____ (se promener) dans le parc.",
          options: ["se sont promenées", "se sont promené", "s'ont promenées"],
          answer: "se sont promenées",
          kindWhenWrong: "Pas grave du tout, on y retourne ensemble.",
          explanationWhenWrong: "Avec elles, le participe passé s'accorde au féminin pluriel : se sont promenées.",
          strictAccents: true
        },
        { order: 5, prompt: "Complète : mes sœurs ____ (se dépêcher) pour ne pas être en retard.", answer: "se sont dépêchées", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Mes sœurs est féminin pluriel : le participe passé s'accorde, se sont dépêchées.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux verbes. Ma sœur ____ (se coiffer) avant de sortir et mes frères ____ (se préparer) rapidement.", answer: "s'est coiffée se sont préparés", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble.", explanationWhenWrong: "Ma sœur (féminin singulier) : s'est coiffée. Mes frères (masculin pluriel) : se sont préparés.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Les degrés de l'adjectif : comparatif et superlatif",
      xpReward: 20,
      story: {
        hook: "Imagine que tu compares la taille de deux amis, ou que tu désignes le plus grand de toute la classe.",
        concreteExample: "Regarde : Léo est plus grand que Sam. Léo est le plus grand de la classe. Quelle différence ?",
        reveal: "Plus grand que compare deux éléments : c'est le comparatif. Le plus grand de désigne le plus haut degré parmi plusieurs : c'est le superlatif.",
        bridgeToConcept: "Le comparatif compare (plus... que, moins... que, aussi... que). Le superlatif désigne le degré le plus élevé (le plus..., le moins...).",
        illustrationEmoji: "📏"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "Elle est plus rapide que son frère : comparatif de supériorité.", illustrationEmoji: "🏃" },
            { text: "Il est aussi fort que son ami : comparatif d'égalité.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Ce gâteau est le plus délicieux de tous : superlatif.", illustrationEmoji: "🍰" },
            { text: "Bon devient meilleur au comparatif, et le meilleur au superlatif (forme irrégulière).", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans Léo est plus grand que Sam, quel est le type de comparaison ?", answer: "comparatif de supériorité", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Plus... que exprime une supériorité : c'est un comparatif de supériorité." },
        { order: 2, prompt: "Dans il est aussi fort que son ami, quel est le type de comparaison ?", answer: "comparatif d'égalité", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Aussi... que exprime une égalité : c'est un comparatif d'égalité." },
        { order: 3, prompt: "Dans ce gâteau est le plus délicieux de tous, comment appelle-t-on cette construction ?", answer: "un superlatif", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Le plus... de désigne le degré le plus élevé parmi plusieurs : c'est un superlatif." },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne réponse : au comparatif, bon devient...",
          options: ["meilleur", "plus bon", "le meilleur"],
          answer: "meilleur",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Bon a une forme irrégulière au comparatif de supériorité : meilleur (et non plus bon)."
        },
        { order: 5, prompt: "Dans elle est moins grande que sa sœur, quel est le type de comparaison ?", answer: "comparatif d'infériorité", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Moins... que exprime une infériorité : c'est un comparatif d'infériorité." },
        { order: 6, prompt: "Défi : transforme au superlatif de supériorité : cette maison est belle (indice : la plus...).", answer: "la plus belle", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Au superlatif de supériorité, belle devient la plus belle." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Ni ou n'y",
      xpReward: 20,
      story: {
        hook: "Imagine deux petits mots qui se prononcent pareil mais qui n'ont pas du tout le même rôle.",
        concreteExample: "Regarde : je ne veux ___ pomme ___ banane. Est-ce que c'est ni ou n'y ?",
        reveal: "Ni relie deux éléments niés (ni... ni...). N'y (n' + y) s'utilise devant un verbe, remplaçable par ne pas y.",
        bridgeToConcept: "Ni relie deux négations (ni... ni...). N'y = ne + y, devant un verbe, remplaçable par ne pas y.",
        illustrationEmoji: "🚫"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Je ne veux ni pomme ni banane : ni relie deux négations.", illustrationEmoji: "🍎" },
            { text: "Je n'y vais jamais : n'y devant le verbe vais, remplaçable par ne vais pas là.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Il n'aime ni le froid ni la pluie : deux négations reliées.", illustrationEmoji: "🌧️" },
            { text: "Nous n'y pensons plus : n'y devant le verbe pensons.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : je ne veux ___ pomme ___ banane. (ni/n'y)", answer: "ni ni", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Ni relie les deux éléments niés : ni pomme ni banane.", strictAccents: true },
        { order: 2, prompt: "Complète : je ___ vais jamais le dimanche. (ni/n'y)", answer: "n'y", kindWhenWrong: "Pas grave, on regarde ça ensemble.", explanationWhenWrong: "N'y est placé devant le verbe vais, remplaçable par ne vais pas là : n'y.", strictAccents: true },
        { order: 3, prompt: "Complète : il n'aime ___ le froid ___ la pluie. (ni/n'y)", answer: "ni ni", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Ni relie les deux éléments niés : ni le froid ni la pluie.", strictAccents: true },
        { order: 4, prompt: "Complète : nous ___ pensons plus du tout. (ni/n'y)", answer: "n'y", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "N'y est placé devant le verbe pensons : n'y.", strictAccents: true },
        { order: 5, prompt: "Complète : elle ne mange ___ viande ___ poisson. (ni/n'y)", answer: "ni ni", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Ni relie les deux éléments niés : ni viande ni poisson.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les trois mots. Je ___ (n'y) crois plus, car il ne fait ___ (ni) beau ___ (ni) chaud aujourd'hui.", answer: "n'y ni ni", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble.", explanationWhenWrong: "N'y est devant le verbe crois, ni... ni... relie les deux éléments niés beau et chaud.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Ajouter ou soustraire 9 (astuce +10 -1)",
      xpReward: 20,
      story: {
        hook: "Imagine une astuce très rapide pour ajouter ou soustraire 9, sans compter un par un.",
        concreteExample: "Calcule 34 + 9 en utilisant l'astuce du +10 -1.",
        reveal: "34 + 10 = 44, puis 44 - 1 = 43. Donc 34 + 9 = 43.",
        bridgeToConcept: "Ajouter 9 = ajouter 10 puis retirer 1. Soustraire 9 = retirer 10 puis ajouter 1.",
        illustrationEmoji: "⚡"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "27 + 9 : 27 + 10 = 37, puis 37 - 1 = 36.", illustrationEmoji: "🔢" },
            { text: "52 - 9 : 52 - 10 = 42, puis 42 + 1 = 43.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "48 + 9 : 48 + 10 = 58, puis 58 - 1 = 57.", illustrationEmoji: "🔍" },
            { text: "71 - 9 : 71 - 10 = 61, puis 61 + 1 = 62.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 34 + 9", answer: "43", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "34 + 10 = 44, puis 44 - 1 = 43." },
        { order: 2, prompt: "Calcule : 27 + 9", answer: "36", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "27 + 10 = 37, puis 37 - 1 = 36." },
        { order: 3, prompt: "Calcule : 52 - 9", answer: "43", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "52 - 10 = 42, puis 42 + 1 = 43." },
        { order: 4, prompt: "Calcule : 48 + 9", answer: "57", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "48 + 10 = 58, puis 58 - 1 = 57." },
        { order: 5, prompt: "Calcule : 71 - 9", answer: "62", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "71 - 10 = 61, puis 61 + 1 = 62." },
        { order: 6, prompt: "Défi : calcule 63 + 9, puis soustrais 9 du résultat. Quel est le résultat final ?", answer: "63", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "63 + 9 = 72, puis 72 - 9 = 63 : on retrouve le nombre de départ." }
      ]
    }
  ]
};
