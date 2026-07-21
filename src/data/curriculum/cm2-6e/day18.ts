import { DayCurriculum } from "@/models/types";

export const day18: DayCurriculum = {
  dayNumber: 18,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Les conversions d'unités de longueur",
      xpReward: 20,
      story: {
        hook: "Imagine que tu dois convertir la longueur d'un terrain de football en différentes unités.",
        concreteExample: "Un terrain mesure 100 m de long. Combien cela fait-il en centimètres ?",
        reveal: "100 m = 10 000 cm, car 1 m = 100 cm. Pour convertir en une unité plus petite, on multiplie ; pour convertir en une unité plus grande, on divise.",
        bridgeToConcept: "1 km = 1000 m, 1 m = 100 cm, 1 cm = 10 mm. On multiplie pour passer à une unité plus petite, on divise pour passer à une unité plus grande.",
        illustrationEmoji: "📏"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "3 m = 300 cm (on multiplie par 100).", illustrationEmoji: "🔢" },
            { text: "250 cm = 2,5 m (on divise par 100).", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "2 km = 2000 m (on multiplie par 1000).", illustrationEmoji: "🔍" },
            { text: "5 cm = 50 mm (on multiplie par 10).", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Convertis : 3 m en cm", answer: "300", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "1 m = 100 cm, donc 3 m = 300 cm." },
        { order: 2, prompt: "Convertis : 250 cm en m", answer: "2,5", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "100 cm = 1 m, donc 250 cm = 2,5 m." },
        { order: 3, prompt: "Convertis : 2 km en m", answer: "2000", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "1 km = 1000 m, donc 2 km = 2000 m." },
        { order: 4, prompt: "Convertis : 5 cm en mm", answer: "50", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "1 cm = 10 mm, donc 5 cm = 50 mm." },
        { order: 5, prompt: "Convertis : 4000 m en km", answer: "4", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "1000 m = 1 km, donc 4000 m = 4 km." },
        { order: 6, prompt: "Défi : un coureur parcourt 1,5 km. Combien de mètres a-t-il parcourus ?", answer: "1500", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "1 km = 1000 m, donc 1,5 km = 1500 m." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le subjonctif passé",
      xpReward: 20,
      story: {
        hook: "Imagine que tu exprimes un sentiment ou un doute à propos d'une action déjà terminée.",
        concreteExample: "Écoute : je suis content que tu aies réussi ton examen.",
        reveal: "Que tu aies réussi est au subjonctif passé : il exprime un sentiment ou un doute sur une action déjà accomplie. Il se forme avec avoir ou être au subjonctif présent, suivi du participe passé.",
        bridgeToConcept: "Subjonctif passé = avoir ou être au subjonctif présent + participe passé. Que j'aie mangé, que je sois parti(e).",
        illustrationEmoji: "🎉"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "Je suis content que tu aies réussi ton examen.", illustrationEmoji: "🏆" },
            { text: "Il faut que nous ayons fini avant midi.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Elle est heureuse que ses amis soient venus.", illustrationEmoji: "🎈" },
            { text: "Je doute qu'il ait compris la leçon.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : je suis content que tu ____ (avoir) réussi ton examen.", answer: "aies", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Avoir au subjonctif présent avec tu donne aies : que tu aies réussi.", strictAccents: true },
        { order: 2, prompt: "Complète : il faut que nous ____ (avoir) fini avant midi.", answer: "ayons", kindWhenWrong: "Pas grave, on regarde ça ensemble.", explanationWhenWrong: "Avoir au subjonctif présent avec nous donne ayons : que nous ayons fini.", strictAccents: true },
        { order: 3, prompt: "Complète : elle est heureuse que ses amis ____ (être) venus.", answer: "soient", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Être au subjonctif présent avec ses amis (ils) donne soient : qu'ils soient venus.", strictAccents: true },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne réponse : je doute qu'il ____ (avoir) compris la leçon.",
          options: ["ait", "a", "avait"],
          answer: "ait",
          kindWhenWrong: "Pas grave du tout, on y retourne ensemble.",
          explanationWhenWrong: "Avoir au subjonctif présent avec il donne ait : qu'il ait compris.",
          strictAccents: true
        },
        { order: 5, prompt: "Complète : je suis contente que tu ____ (être) arrivé à l'heure.", answer: "sois", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Être au subjonctif présent avec tu donne sois : que tu sois arrivé.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux verbes. Nous sommes heureux qu'elle ____ (avoir) gagné le concours et que vous ____ (être) venus nous voir.", answer: "ait soyez", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble.", explanationWhenWrong: "Avoir au subjonctif avec elle donne ait, être au subjonctif avec vous donne soyez.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "La proposition subordonnée conjonctive",
      xpReward: 20,
      story: {
        hook: "Imagine une proposition qui complète un verbe, introduite par le mot que, et qui répond à quoi ?",
        concreteExample: "Regarde : je pense que tu as raison. Que complète que tu as raison ?",
        reveal: "Que tu as raison complète le verbe pense et répond à la question quoi ? : c'est une proposition subordonnée conjonctive, aussi appelée complétive.",
        bridgeToConcept: "La proposition subordonnée conjonctive est introduite par que et complète un verbe, souvent comme complément d'objet direct du verbe principal.",
        illustrationEmoji: "💭"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "Je crois que tu as raison : que tu as raison est le complément du verbe crois.", illustrationEmoji: "🤔" },
            { text: "Elle espère qu'il viendra : que introduit la proposition subordonnée.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Nous savons que la réunion commence à 10 heures.", illustrationEmoji: "🔍" },
            { text: "Il pense que ce livre est passionnant.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans je pense que tu as raison, quelle est la proposition subordonnée conjonctive ?", answer: "que tu as raison", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Que tu as raison complète le verbe pense : c'est la proposition subordonnée conjonctive." },
        { order: 2, prompt: "Dans elle espère qu'il viendra, quel mot introduit la proposition subordonnée ?", answer: "que", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Que introduit la proposition subordonnée conjonctive." },
        { order: 3, prompt: "Dans nous savons que la réunion commence à 10 heures, quelle est la proposition subordonnée conjonctive ?", answer: "que la réunion commence à 10 heures", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Que la réunion commence à 10 heures complète le verbe savons : c'est la proposition subordonnée conjonctive." },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne réponse : dans il pense que ce livre est passionnant, que ce livre est passionnant est...",
          options: ["une proposition subordonnée conjonctive", "une proposition relative", "un groupe nominal"],
          answer: "une proposition subordonnée conjonctive",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Introduite par que et complétant le verbe pense, c'est une proposition subordonnée conjonctive."
        },
        { order: 5, prompt: "Dans je souhaite que tu réussisses, quelle est la proposition subordonnée conjonctive ?", answer: "que tu réussisses", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Que tu réussisses complète le verbe souhaite : c'est la proposition subordonnée conjonctive." },
        { order: 6, prompt: "Défi : dans je sais que tu travailles bien et je pense que tu réussiras, cite les deux propositions subordonnées conjonctives, dans l'ordre.", answer: "que tu travailles bien que tu réussiras", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Que tu travailles bien complète sais, que tu réussiras complète pense : ce sont les deux propositions subordonnées conjonctives." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "C'est ou s'est",
      xpReward: 20,
      story: {
        hook: "Imagine deux petits mots qui se prononcent pareil mais qui s'utilisent dans des contextes différents.",
        concreteExample: "Regarde : ___ mon anniversaire aujourd'hui. Est-ce que c'est c'est ou s'est ?",
        reveal: "C'est (ce + est) présente ou désigne quelque chose, remplaçable par cela est. S'est s'utilise avec un verbe pronominal au passé composé, remplaçable par se + être.",
        bridgeToConcept: "C'est = ce + est, remplaçable par cela est. S'est = pronom réfléchi se + est, devant le participe passé d'un verbe pronominal.",
        illustrationEmoji: "🎂"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "C'est mon anniversaire aujourd'hui : on peut dire cela est mon anniversaire.", illustrationEmoji: "🎁" },
            { text: "Elle s'est levée tôt : verbe pronominal se lever au passé composé.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "C'est une bonne idée : présentation, remplaçable par cela est.", illustrationEmoji: "💡" },
            { text: "Il s'est habillé rapidement : verbe pronominal s'habiller.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : ___ mon anniversaire aujourd'hui. (c'est/s'est)", answer: "c'est", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "On peut dire cela est mon anniversaire : c'est c'est, avec ce + est.", strictAccents: true },
        { order: 2, prompt: "Complète : elle ___ levée tôt ce matin. (c'est/s'est)", answer: "s'est", kindWhenWrong: "Pas grave, on regarde ça ensemble.", explanationWhenWrong: "C'est le verbe pronominal se lever au passé composé : s'est levée.", strictAccents: true },
        { order: 3, prompt: "Complète : ___ une très bonne idée. (c'est/s'est)", answer: "c'est", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "On peut dire cela est une bonne idée : c'est c'est.", strictAccents: true },
        { order: 4, prompt: "Complète : il ___ habillé rapidement avant de partir. (c'est/s'est)", answer: "s'est", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "C'est le verbe pronominal s'habiller au passé composé : s'est habillé.", strictAccents: true },
        { order: 5, prompt: "Complète : ___ la maison de mon grand-père. (c'est/s'est)", answer: "c'est", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "On peut dire cela est la maison de mon grand-père : c'est c'est.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les trois mots. ___ (c'est) une belle journée : mon frère ___ (s'est) levé tôt et ___ (c'est) lui qui a préparé le petit-déjeuner.", answer: "c'est s'est c'est", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble.", explanationWhenWrong: "C'est présente (cela est), s'est accompagne le verbe pronominal se lever, c'est présente à nouveau.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Multiplier par 8 (doubler trois fois)",
      xpReward: 20,
      story: {
        hook: "Imagine une astuce pour multiplier vite par 8, en doublant trois fois de suite.",
        concreteExample: "Calcule 6 x 8 en doublant trois fois.",
        reveal: "6 double = 12, 12 double = 24, 24 double = 48. Donc 6 x 8 = 48.",
        bridgeToConcept: "Multiplier par 8 = doubler le nombre trois fois de suite (car 8 = 2 x 2 x 2).",
        illustrationEmoji: "✨"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "5 x 8 : 5 double = 10, 10 double = 20, 20 double = 40.", illustrationEmoji: "🔢" },
            { text: "9 x 8 : 9 double = 18, 18 double = 36, 36 double = 72.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "7 x 8 : 7 double = 14, 14 double = 28, 28 double = 56.", illustrationEmoji: "🔍" },
            { text: "4 x 8 : 4 double = 8, 8 double = 16, 16 double = 32.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 6 x 8", answer: "48", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "6 double = 12, 12 double = 24, 24 double = 48." },
        { order: 2, prompt: "Calcule : 5 x 8", answer: "40", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "5 double = 10, 10 double = 20, 20 double = 40." },
        { order: 3, prompt: "Calcule : 9 x 8", answer: "72", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "9 double = 18, 18 double = 36, 36 double = 72." },
        { order: 4, prompt: "Calcule : 7 x 8", answer: "56", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "7 double = 14, 14 double = 28, 28 double = 56." },
        { order: 5, prompt: "Calcule : 4 x 8", answer: "32", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "4 double = 8, 8 double = 16, 16 double = 32." },
        { order: 6, prompt: "Défi : calcule 8 x 8, en doublant trois fois.", answer: "64", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "8 double = 16, 16 double = 32, 32 double = 64." }
      ]
    }
  ]
};
