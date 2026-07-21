import { DayCurriculum } from "@/models/types";

export const day17: DayCurriculum = {
  dayNumber: 17,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Passer d'une fraction décimale à un nombre décimal",
      xpReward: 22,
      story: {
        hook: "Certaines fractions, en dixièmes ou en centièmes, peuvent s'écrire directement comme des nombres décimaux.",
        concreteExample: "Comment écrire 3/10 sous forme de nombre décimal ?",
        reveal: "3/10 signifie 3 dixièmes, ce qui s'écrit 0,3. De même, 25/100 signifie 25 centièmes, ce qui s'écrit 0,25.",
        bridgeToConcept: "Une fraction en dixièmes (x/10) s'écrit 0,x. Une fraction en centièmes (x/100) s'écrit avec deux chiffres après la virgule.",
        illustrationEmoji: "🔟"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "7/10 = 0,7 : sept dixièmes.", illustrationEmoji: "🔢" },
            { text: "45/100 = 0,45 : quarante-cinq centièmes.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "5/100 = 0,05 : il faut penser au zéro devant le 5.", illustrationEmoji: "🔍" },
            { text: "Dans les centièmes, on écrit toujours deux chiffres après la virgule.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Écris 3/10 en nombre décimal.", answer: "0,3", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "3/10 signifie trois dixièmes, ce qui s'écrit 0,3." },
        { order: 2, prompt: "Écris 25/100 en nombre décimal.", answer: "0,25", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "25/100 signifie vingt-cinq centièmes, ce qui s'écrit 0,25." },
        { order: 3, prompt: "Écris 8/10 en nombre décimal.", answer: "0,8", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "8/10 signifie huit dixièmes, ce qui s'écrit 0,8." },
        { order: 4, prompt: "Écris 5/100 en nombre décimal.", answer: "0,05", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "5/100 signifie cinq centièmes, ce qui s'écrit 0,05, avec un zéro devant le 5." },
        { order: 5, prompt: "Écris 73/100 en nombre décimal.", answer: "0,73", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "73/100 signifie soixante-treize centièmes, ce qui s'écrit 0,73." },
        { order: 6, prompt: "Défi : écris 9/10 en nombre décimal, puis écris 4/100 en nombre décimal (réponds : deux nombres séparés par un espace).", answer: "0,9 0,04", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "9/10 s'écrit 0,9. 4/100 s'écrit 0,04, avec un zéro devant le 4." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le subjonctif présent après il faut que",
      xpReward: 22,
      story: {
        hook: "Après l'expression il faut que, on n'utilise pas le présent habituel, mais un autre mode : le subjonctif.",
        concreteExample: "Il faut que je ___ (finir) mes devoirs avant le dîner.",
        reveal: "Il faut que je finisse : le subjonctif présent se forme souvent à partir du radical de ils au présent, suivi des terminaisons -e, -es, -e, -ions, -iez, -ent.",
        bridgeToConcept: "Le subjonctif présent : que je finisse, que tu finisses, qu'il finisse, que nous finissions, que vous finissiez, qu'ils finissent.",
        illustrationEmoji: "📚"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Il faut que tu ranges ta chambre avant de sortir.", illustrationEmoji: "🧹" },
            { text: "Il faut que nous partions à l'heure pour ne pas être en retard.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Pense d'abord au radical de ils au présent : ils finissent → finiss-.", illustrationEmoji: "🔍" },
            { text: "Ajoute -e, -es, -e, -ions, -iez, -ent selon la personne.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Il faut que je ____ (finir) mes devoirs.", answer: "finisse", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Au subjonctif présent, avec je, finir donne finisse : radical finiss- puis -e.", strictAccents: true },
        { order: 2, prompt: "Complète : Il faut que tu ____ (ranger) ta chambre.", answer: "ranges", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Au subjonctif présent, avec tu, ranger donne ranges : radical rang- puis -es.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Il faut qu'elle ____ (partir) à l'heure.",
          options: ["parte", "parts", "partent"],
          answer: "parte",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Au subjonctif présent, avec elle, partir donne parte, sans s ni terminaison de pluriel.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Il faut que nous ____ (finir) ce travail avant midi.", answer: "finissions", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Au subjonctif présent, avec nous, finir donne finissions : radical finiss- puis -ions.", strictAccents: true },
        { order: 5, prompt: "Complète : Il faut que vous ____ (ranger) vos affaires.", answer: "rangiez", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Au subjonctif présent, avec vous, ranger donne rangiez : radical rang- puis -iez.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux verbes. Il faut qu'ils ____ (finir) leurs devoirs et que nous ____ (partir) à l'heure.", answer: "finissent partions", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Tu étais proche ! Avec ils, finir donne finissent. Avec nous, partir donne partions.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Les formes de phrase : affirmative et négative",
      xpReward: 22,
      story: {
        hook: "En plus de son type, une phrase peut affirmer quelque chose ou le nier complètement.",
        concreteExample: "Balkis aime le chocolat. Balkis n'aime pas le chocolat. Quelle différence remarques-tu ?",
        reveal: "La première phrase n'a pas de mot de négation : elle est affirmative. La deuxième contient ne...pas, qui encadre le verbe : elle est négative.",
        bridgeToConcept: "La forme affirmative n'a pas de négation. La forme négative encadre le verbe avec ne...pas, ne...jamais, ne...plus ou ne...rien.",
        illustrationEmoji: "🚫"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Il mange une pomme (affirmative) → Il ne mange pas de pomme (négative).", illustrationEmoji: "🍎" },
            { text: "Elle vient toujours (affirmative) → Elle ne vient jamais (négative).", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour reconnaître la forme d'une phrase",
          steps: [
            { text: "Cherche les mots ne...pas, ne...jamais, ne...plus ou ne...rien.", illustrationEmoji: "🔍" },
            { text: "S'ils sont présents, la phrase est négative. Sinon, elle est affirmative.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Balkis aime le chocolat. Quelle est la forme de cette phrase ?", answer: "affirmative", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Cette phrase ne contient aucun mot de négation : elle est affirmative." },
        { order: 2, prompt: "Balkis n'aime pas le chocolat. Quelle est la forme de cette phrase ?", answer: "négative", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Cette phrase contient ne...pas, qui encadre le verbe : elle est négative." },
        { order: 3, prompt: "Quels mots encadrent le verbe dans la négation ne...pas ? (réponds : ne pas)", answer: "ne pas", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Dans une phrase négative, ne se place avant le verbe et pas se place après." },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Il ne vient jamais ici. est une phrase...",
          options: ["négative", "affirmative", "interrogative"],
          answer: "négative",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Cette phrase contient ne...jamais, qui encadre le verbe : elle est négative."
        },
        { order: 5, prompt: "Nous ne mangeons plus de bonbons. Quelle est la forme de cette phrase ?", answer: "négative", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Cette phrase contient ne...plus, qui encadre le verbe : elle est négative." },
        { order: 6, prompt: "Défi : transforme à la forme négative, avec ne...pas : Il joue dehors.", answer: "il ne joue pas dehors", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "On encadre le verbe joue avec ne...pas : il ne joue pas dehors." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Ni ou n'y",
      xpReward: 22,
      story: {
        hook: "Deux mots qui se prononcent pareil : l'un nie plusieurs choses à la fois, l'autre contient le petit pronom y.",
        concreteExample: "Il ___ pense jamais. Est-ce ni ou n'y ?",
        reveal: "On peut dire il ne pense jamais à cela, avec le pronom y qui remplace à cela, donc on écrit n'y (ne + y). Ni s'utilise pour nier plusieurs éléments à la fois, comme dans ne...ni...ni.",
        bridgeToConcept: "N'y est la contraction de ne et du pronom y (remplace par à cela ou là). Ni relie deux éléments niés ensemble, avec ne...ni...ni.",
        illustrationEmoji: "🔗"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Je n'aime ni les choux ni les épinards : ni...ni nie deux éléments.", illustrationEmoji: "🥦" },
            { text: "Il n'y pense jamais : n'y remplace à cela.", illustrationEmoji: "🤔" }
          ]
        },
        {
          title: "L'astuce du test",
          steps: [
            { text: "Essaie de remplacer par à cela ou là : si ça marche, c'est n'y.", illustrationEmoji: "🔍" },
            { text: "Si le mot relie deux choses niées ensemble, c'est ni.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je n'aime ___ les choux ni les épinards. (ni/n'y)", answer: "ni", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Ni relie ici deux aliments niés ensemble, dans une construction ne...ni...ni.", strictAccents: true },
        { order: 2, prompt: "Complète : Il ___ pense jamais. (ni/n'y)", answer: "n'y", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "On peut dire il ne pense jamais à cela, donc on écrit n'y, la contraction de ne et y.", strictAccents: true },
        { order: 3, prompt: "Complète : Elle ne va ___ à la piscine ni au parc. (ni/n'y)", answer: "ni", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Ni relie ici deux lieux niés ensemble, dans une construction ne...ni...ni.", strictAccents: true },
        { order: 4, prompt: "Complète : Nous ___ allons plus jamais. (ni/n'y)", answer: "n'y", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "On peut dire nous n'allons plus jamais là, donc on écrit n'y, la contraction de ne et y.", strictAccents: true },
        { order: 5, prompt: "Complète : Il n'a ___ argent ni patience. (ni/n'y)", answer: "ni", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Ni relie ici deux éléments niés ensemble, dans une construction ne...ni...ni.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. Je ne veux ___ (ni) chocolat ni bonbons, et je ___ (n'y) pense même plus.", answer: "ni n'y", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Tu étais proche ! Ni chocolat ni bonbons relie deux éléments niés. Je n'y pense plus remplace à cela par y.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Ajouter ou soustraire un nombre proche d'une centaine",
      xpReward: 22,
      story: {
        hook: "Il existe une astuce bien pratique pour calculer rapidement avec des nombres comme 98, 99 ou 101.",
        concreteExample: "Combien font 235 + 98 ?",
        reveal: "235 + 98 = 235 + 100 - 2 = 335 - 2 = 333 : on ajoute la centaine ronde, puis on corrige la petite différence.",
        bridgeToConcept: "Pour ajouter ou soustraire un nombre proche d'une centaine, ajoute ou soustrais la centaine ronde, puis corrige.",
        illustrationEmoji: "💯"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "150 + 99 = 150 + 100 - 1 = 249.", illustrationEmoji: "🔢" },
            { text: "420 - 98 = 420 - 100 + 2 = 322.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "175 + 101 = 175 + 100 + 1 = 276.", illustrationEmoji: "🔍" },
            { text: "460 - 99 = 460 - 100 + 1 = 361.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 200 + 99", answer: "299", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "200 + 100 = 300, puis on enlève 1 : 299." },
        { order: 2, prompt: "Calcule : 350 - 98", answer: "252", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "350 - 100 = 250, puis on ajoute 2 : 252." },
        { order: 3, prompt: "Calcule : 175 + 101", answer: "276", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "175 + 100 = 275, puis on ajoute 1 : 276." },
        { order: 4, prompt: "Calcule : 460 - 99", answer: "361", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "460 - 100 = 360, puis on ajoute 1 : 361." },
        { order: 5, prompt: "Calcule : 320 + 102", answer: "422", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "320 + 100 = 420, puis on ajoute 2 : 422." },
        { order: 6, prompt: "Défi : calcule 500 - 97, puis ajoute 250 + 99. Quel est le résultat final ?", answer: "752", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "500 - 97 = 403, et 250 + 99 = 349, donc 403 + 349 = 752." }
      ]
    }
  ]
};
