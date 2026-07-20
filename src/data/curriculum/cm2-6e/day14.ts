import { DayCurriculum } from "@/models/types";

export const day14: DayCurriculum = {
  dayNumber: 14,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Les durées : additionner et soustraire des heures",
      xpReward: 20,
      story: {
        hook: "Imagine que tu dois calculer combien de temps dure un film ou un trajet.",
        concreteExample: "Un film commence à 14h30 et dure 1h45. À quelle heure se termine-t-il ?",
        reveal: "14h30 + 1h45 = 16h15. On additionne les heures entre elles et les minutes entre elles, en reportant 60 minutes en 1 heure si besoin.",
        bridgeToConcept: "1 heure = 60 minutes. Pour additionner des durées, on additionne les heures et les minutes séparément, puis on convertit si les minutes dépassent 60.",
        illustrationEmoji: "🕐"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "2h20 + 1h50 : 2h+1h=3h, 20min+50min=70min=1h10min, total 4h10.", illustrationEmoji: "🔢" },
            { text: "3h00 - 1h30 = 1h30.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "1h45 + 0h30 : 45min+30min=75min=1h15min, total 2h15.", illustrationEmoji: "🔍" },
            { text: "5h15 - 2h45 = 2h30.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Un film commence à 14h30 et dure 1h45. À quelle heure se termine-t-il ?", answer: "16h15", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "30min+45min=75min=1h15min, donc 14h+1h+1h15min=16h15." },
        { order: 2, prompt: "Calcule : 2h20 + 1h50", answer: "4h10", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "2h+1h=3h, 20min+50min=70min=1h10min, total 4h10." },
        { order: 3, prompt: "Calcule : 3h00 - 1h30", answer: "1h30", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "3h00 - 1h30 = 1h30." },
        { order: 4, prompt: "Calcule : 1h45 + 0h30", answer: "2h15", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "45min+30min=75min=1h15min, donc 1h+1h15min=2h15." },
        { order: 5, prompt: "Calcule : 5h15 - 2h45", answer: "2h30", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "5h15 - 2h45 = 2h30." },
        { order: 6, prompt: "Défi : un match commence à 10h50 et dure 2h20. À quelle heure se termine-t-il ?", answer: "13h10", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "50min+20min=70min=1h10min, donc 10h+2h+1h10min=13h10." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "L'accord du participe passé avec avoir",
      xpReward: 20,
      story: {
        hook: "Imagine une règle un peu plus difficile : parfois, le participe passé avec avoir s'accorde, parfois non.",
        concreteExample: "Écoute : j'ai mangé les pommes. Les pommes que j'ai mangées étaient sucrées.",
        reveal: "Dans la première phrase, mangé ne s'accorde pas (le COD les pommes est après le verbe). Dans la deuxième, mangées s'accorde au féminin pluriel car le COD (que, remplaçant les pommes) est placé avant le verbe.",
        bridgeToConcept: "Avec avoir, le participe passé s'accorde avec le COD seulement si celui-ci est placé avant le verbe.",
        illustrationEmoji: "🍎"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "J'ai vu ce film : pas d'accord, le COD ce film est après.", illustrationEmoji: "🎬" },
            { text: "Ce film, je l'ai vu : accord avec le COD placé avant (masculin singulier).", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Les lettres que j'ai écrites sont sur la table : accord au féminin pluriel, écrites, car que (lettres) est avant.", illustrationEmoji: "✉️" },
            { text: "J'ai écrit des lettres : pas d'accord, le COD est après le verbe.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : j'ai ____ (manger) les pommes.", answer: "mangé", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Le COD les pommes est placé après le verbe : pas d'accord, on écrit mangé.", strictAccents: true },
        { order: 2, prompt: "Complète : les pommes que j'ai ____ (manger) étaient sucrées.", answer: "mangées", kindWhenWrong: "Pas grave, on regarde ça ensemble.", explanationWhenWrong: "Que (COD, remplaçant les pommes) est placé avant le verbe : le participe passé s'accorde au féminin pluriel, mangées.", strictAccents: true },
        { order: 3, prompt: "Complète : j'ai ____ (voir) ce film hier soir.", answer: "vu", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Le COD ce film est placé après le verbe : pas d'accord, on écrit vu.", strictAccents: true },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne réponse : ce film, je l'ai ____ (voir) hier soir.",
          options: ["vu", "vue", "vus"],
          answer: "vu",
          kindWhenWrong: "Pas grave du tout, on y retourne ensemble.",
          explanationWhenWrong: "L' (COD, remplaçant ce film, masculin singulier) est placé avant le verbe : le participe passé s'accorde, vu.",
          strictAccents: true
        },
        { order: 5, prompt: "Complète : les lettres que j'ai ____ (écrire) sont sur la table.", answer: "écrites", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Que (COD, remplaçant les lettres) est placé avant le verbe : le participe passé s'accorde au féminin pluriel, écrites.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux verbes. J'ai ____ (acheter) des fleurs, et ces fleurs, je les ai ____ (offrir) à ma mère.", answer: "acheté offertes", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble.", explanationWhenWrong: "Acheté ne s'accorde pas (le COD des fleurs est après le verbe) ; offertes s'accorde au féminin pluriel car les (COD, remplaçant fleurs) est placé avant.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "L'adverbe",
      xpReward: 20,
      story: {
        hook: "Imagine un mot qui précise un verbe, un adjectif ou un autre adverbe, mais qui ne change jamais de forme.",
        concreteExample: "Regarde : elle chante bien. Elle est très heureuse. Que précisent bien et très ?",
        reveal: "Bien précise le verbe chante (comment elle chante), très précise l'adjectif heureuse (à quel point). Ce sont des adverbes, toujours invariables.",
        bridgeToConcept: "L'adverbe précise un verbe, un adjectif ou un autre adverbe. Il est toujours invariable, contrairement à l'adjectif.",
        illustrationEmoji: "🎶"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "Il court vite : vite précise le verbe court.", illustrationEmoji: "🏃" },
            { text: "Elle est très gentille : très précise l'adjectif gentille.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Il parle trop fort : trop précise l'adverbe fort.", illustrationEmoji: "🔊" },
            { text: "Les adverbes ne s'accordent jamais, quel que soit le sujet.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans elle chante bien, quel est l'adverbe et que précise-t-il ?", answer: "bien, il précise le verbe chante", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Bien précise comment elle chante, il complète le verbe chante : c'est un adverbe." },
        { order: 2, prompt: "Dans elle est très heureuse, quel est l'adverbe et que précise-t-il ?", answer: "très, il précise l'adjectif heureuse", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Très précise à quel point elle est heureuse, il complète l'adjectif heureuse : c'est un adverbe." },
        { order: 3, prompt: "Dans il court vite, quel est l'adverbe ?", answer: "vite", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Vite précise comment il court : c'est un adverbe qui complète le verbe." },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne réponse : dans il parle trop fort, trop est un adverbe qui précise...",
          options: ["l'adverbe fort", "le verbe parle", "le sujet il"],
          answer: "l'adverbe fort",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Trop précise à quel point il parle fort : il complète l'adverbe fort."
        },
        { order: 5, prompt: "Les adverbes s'accordent-ils en genre et en nombre ?", answer: "non", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Les adverbes sont toujours invariables, ils ne s'accordent jamais." },
        { order: 6, prompt: "Défi : dans elle travaille sérieusement et elle réussit bien, cite les deux adverbes qui précisent chacun un verbe, dans l'ordre.", answer: "sérieusement bien", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Sérieusement précise le verbe travaille, bien précise le verbe réussit : ce sont deux adverbes, tous deux invariables." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "La, l'a, l'as ou là",
      xpReward: 20,
      story: {
        hook: "Imagine quatre petits mots qui se prononcent presque pareil mais qui s'écrivent tous différemment.",
        concreteExample: "Regarde : je vois ma sœur, je ___ regarde. Est-ce que c'est la, l'a, l'as ou là ?",
        reveal: "La est un pronom ou un article, remplaçable par le au masculin. L'a et l'as viennent du verbe avoir (il l'a vu, tu l'as vu), remplaçables par l'avait/l'avais. Là indique un lieu, comme ici.",
        bridgeToConcept: "La = pronom/article, remplaçable par le. L'a/l'as = avoir + a/as, remplaçables par l'avait/l'avais. Là = lieu, remplaçable par ici.",
        illustrationEmoji: "📍"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "Je la regarde : la est un pronom, remplaçable par le (je le regarde).", illustrationEmoji: "👀" },
            { text: "Il l'a vue hier : on peut dire il l'avait vue, donc l'a (verbe avoir).", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Tu l'as trouvée où ? : on peut dire tu l'avais trouvée, donc l'as.", illustrationEmoji: "🔍" },
            { text: "Pose ce livre là : là indique un lieu, remplaçable par ici.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : je ___ regarde attentivement. (la/l'a/l'as/là)", answer: "la", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "On peut remplacer par le (je le regarde) : c'est le pronom la, sans apostrophe.", strictAccents: true },
        { order: 2, prompt: "Complète : il ___ vue hier au marché. (la/l'a/l'as/là)", answer: "l'a", kindWhenWrong: "Pas grave, on regarde ça ensemble.", explanationWhenWrong: "On peut dire il l'avait vue : c'est le verbe avoir, l'a, avec une apostrophe.", strictAccents: true },
        { order: 3, prompt: "Complète : tu ___ trouvée où, cette clé ? (la/l'a/l'as/là)", answer: "l'as", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "On peut dire tu l'avais trouvée : c'est le verbe avoir, l'as, avec une apostrophe.", strictAccents: true },
        { order: 4, prompt: "Complète : pose ce livre ___, sur la table. (la/l'a/l'as/là)", answer: "là", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Ça indique un lieu, remplaçable par ici : là, avec un accent grave.", strictAccents: true },
        { order: 5, prompt: "Complète : ma mère ___ appelée ce matin. (la/l'a/l'as/là)", answer: "l'a", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "On peut dire ma mère l'avait appelée : c'est le verbe avoir, l'a, avec une apostrophe.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les trois mots. Ma sœur ___ (l'a) trouvée ___ (là), sur la table, et maintenant elle ___ (la) range.", answer: "l'a là la", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble.", explanationWhenWrong: "L'a (verbe avoir, remplaçable par l'avait), là (lieu, remplaçable par ici), la (pronom, remplaçable par le).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Multiplier par 20, 30 et 40",
      xpReward: 20,
      story: {
        hook: "Imagine une astuce pour multiplier vite par 20, 30 ou 40, en passant par la table de 2, 3 ou 4.",
        concreteExample: "Calcule 6 x 30 en utilisant 6 x 3, puis en ajoutant un zéro.",
        reveal: "6 x 3 = 18, puis on ajoute un zéro : 6 x 30 = 180.",
        bridgeToConcept: "Pour multiplier par 20, 30, 40..., on multiplie par 2, 3, 4..., puis on ajoute un zéro au résultat.",
        illustrationEmoji: "🔟"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "5 x 20 : 5 x 2 = 10, puis on ajoute un zéro : 100.", illustrationEmoji: "🔢" },
            { text: "7 x 40 : 7 x 4 = 28, puis on ajoute un zéro : 280.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "8 x 30 : 8 x 3 = 24, puis on ajoute un zéro : 240.", illustrationEmoji: "🔍" },
            { text: "9 x 20 : 9 x 2 = 18, puis on ajoute un zéro : 180.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 6 x 30", answer: "180", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "6 x 3 = 18, puis on ajoute un zéro : 180." },
        { order: 2, prompt: "Calcule : 5 x 20", answer: "100", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "5 x 2 = 10, puis on ajoute un zéro : 100." },
        { order: 3, prompt: "Calcule : 7 x 40", answer: "280", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "7 x 4 = 28, puis on ajoute un zéro : 280." },
        { order: 4, prompt: "Calcule : 8 x 30", answer: "240", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "8 x 3 = 24, puis on ajoute un zéro : 240." },
        { order: 5, prompt: "Calcule : 9 x 20", answer: "180", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "9 x 2 = 18, puis on ajoute un zéro : 180." },
        { order: 6, prompt: "Défi : calcule 7 x 30, puis ajoute 20 au résultat. Quel est le résultat final ?", answer: "230", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "7 x 30 = 210, puis 210 + 20 = 230." }
      ]
    }
  ]
};
