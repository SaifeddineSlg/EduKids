import { DayCurriculum } from "@/models/types";

export const day02: DayCurriculum = {
  dayNumber: 2,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Les nombres décimaux : dixièmes et centièmes",
      xpReward: 20,
      story: {
        hook: "Imagine que tu mesures ta taille et qu'elle ne tombe pas juste sur un nombre entier.",
        concreteExample: "Tu mesures 1,45 mètre. Que représentent les chiffres après la virgule ?",
        reveal: "Le 4 après la virgule est le chiffre des dixièmes, le 5 est le chiffre des centièmes. Un nombre décimal a une partie entière et une partie décimale séparées par une virgule.",
        bridgeToConcept: "Dans 1,45 : 1 est la partie entière, 4 les dixièmes, 5 les centièmes.",
        illustrationEmoji: "📏"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "3,7 : 3 est la partie entière, 7 est le chiffre des dixièmes.", illustrationEmoji: "🔢" },
            { text: "3,7 = 3 + 7 dixièmes = 3 unités et 7 dixièmes.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "2,58 : 2 est la partie entière, 5 les dixièmes, 8 les centièmes.", illustrationEmoji: "🔍" },
            { text: "On lit : deux virgule cinquante-huit.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans 1,45, quel est le chiffre des dixièmes ?", answer: "4", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Le chiffre juste après la virgule est le chiffre des dixièmes : 4." },
        { order: 2, prompt: "Dans 2,58, quel est le chiffre des centièmes ?", answer: "8", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Le deuxième chiffre après la virgule est le chiffre des centièmes : 8." },
        { order: 3, prompt: "Quel nombre est le plus grand : 3,5 ou 3,45 ?", answer: "3,5", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "3,5 = 3,50, qui est plus grand que 3,45." },
        { order: 4, prompt: "Écris en chiffres : sept virgule deux", answer: "7,2", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Sept virgule deux s'écrit 7,2." },
        { order: 5, prompt: "Dans 4,09, quel est le chiffre des dixièmes ?", answer: "0", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Le chiffre juste après la virgule est 0." },
        { order: 6, prompt: "Défi : range du plus petit au plus grand : 2,4, 2,04, 2,44 (réponds avec des espaces entre les nombres)", answer: "2,04 2,4 2,44", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "2,04 est le plus petit, puis 2,4 (=2,40), puis 2,44." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le plus-que-parfait",
      xpReward: 20,
      story: {
        hook: "Imagine que tu racontes deux actions passées, l'une avant l'autre. Comment montrer laquelle est arrivée en premier ?",
        concreteExample: "Écoute : quand je suis arrivé, il avait déjà mangé. Il avait mangé se passe avant je suis arrivé.",
        reveal: "Il avait mangé est au plus-que-parfait : il exprime une action passée, antérieure à une autre action passée. Il se forme avec avoir ou être à l'imparfait, suivi du participe passé.",
        bridgeToConcept: "Plus-que-parfait : j'avais mangé, tu avais mangé, il avait mangé ; j'étais parti, elle était partie.",
        illustrationEmoji: "⏮️"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Nous avions déjà fini nos devoirs quand nos amis sont arrivés.", illustrationEmoji: "📚" },
            { text: "Elle était déjà partie quand j'ai appelé.", illustrationEmoji: "☎️" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Avoir ou être à l'imparfait + participe passé.", illustrationEmoji: "🔍" },
            { text: "Ça montre qu'une action s'est passée avant une autre, déjà au passé.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Quand je suis arrivé, il ____ (avoir) déjà mangé.", answer: "avait", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec il, avoir à l'imparfait est avait : il avait mangé." },
        { order: 2, prompt: "Complète : Nous ____ (avoir) déjà fini nos devoirs.", answer: "avions", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Avec nous, avoir à l'imparfait est avions : nous avions fini." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Elle ____ déjà partie quand j'ai appelé.",
          options: ["était", "avait", "fut"],
          answer: "était",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Partir se conjugue avec être : elle était partie."
        },
        { order: 4, prompt: "Complète : Tu ____ (avoir) oublié ton cahier la veille.", answer: "avais", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Avec tu, avoir à l'imparfait est avais : tu avais oublié." },
        { order: 5, prompt: "Complète : Ils ____ (avoir) déjà mangé quand nous sommes arrivés.", answer: "avaient", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Avec ils, avoir à l'imparfait est avaient : ils avaient mangé." },
        { order: 6, prompt: "Défi : complète les deux verbes. Elle ____ (être) déjà sortie quand nous ____ (avoir) fini de manger.", answer: "était avions", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Elle était sortie (être) et nous avions fini (avoir)." }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Les types de phrases",
      xpReward: 20,
      story: {
        hook: "Imagine que chaque phrase a une intention différente : raconter, demander, ordonner ou s'exclamer.",
        concreteExample: "Regarde ces quatre phrases : Il pleut. Pleut-il ? Quelle pluie ! Range ton manteau.",
        reveal: "Il pleut raconte (déclarative). Pleut-il ? demande (interrogative). Quelle pluie ! s'exclame (exclamative). Range ton manteau ordonne (impérative).",
        bridgeToConcept: "Les quatre types de phrases : déclarative (raconte), interrogative (demande), exclamative (s'exclame), impérative (ordonne).",
        illustrationEmoji: "🎭"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Le chat dort. : phrase déclarative, elle raconte un fait.", illustrationEmoji: "🐱" },
            { text: "As-tu fini tes devoirs ? : phrase interrogative, elle pose une question.", illustrationEmoji: "❓" }
          ]
        },
        {
          title: "L'astuce pour reconnaître le type de phrase",
          steps: [
            { text: "Point final → déclarative. Point d'interrogation → interrogative.", illustrationEmoji: "🔍" },
            { text: "Point d'exclamation → exclamative. Ordre sans sujet exprimé → impérative.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Quel est le type de la phrase : Il pleut.", answer: "déclarative", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Elle raconte un fait avec un point final : c'est une phrase déclarative." },
        { order: 2, prompt: "Quel est le type de la phrase : Pleut-il aujourd'hui ?", answer: "interrogative", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Elle pose une question avec un point d'interrogation : c'est une phrase interrogative." },
        { order: 3, prompt: "Quel est le type de la phrase : Quelle belle journée !", answer: "exclamative", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Elle s'exclame avec un point d'exclamation : c'est une phrase exclamative." },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Range ta chambre. est une phrase...",
          options: ["impérative", "déclarative", "interrogative"],
          answer: "impérative",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Elle donne un ordre : c'est une phrase impérative."
        },
        { order: 5, prompt: "Quel est le type de la phrase : Es-tu prêt pour partir ?", answer: "interrogative", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Elle pose une question : c'est une phrase interrogative." },
        { order: 6, prompt: "Défi : donne le type de chacune de ces deux phrases, dans l'ordre. Quel magnifique paysage ! Ferme la porte.", answer: "exclamative impérative", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Quel magnifique paysage ! est exclamative, Ferme la porte. est impérative." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Se ou ce, sa ou ça",
      xpReward: 20,
      story: {
        hook: "Imagine encore des mots jumeaux qui se prononcent pareil mais jouent des rôles différents.",
        concreteExample: "Regarde : ___ chien aboie fort. Est-ce que c'est se ou ce ?",
        reveal: "Ce accompagne un nom (ce chien). Se s'utilise devant un verbe pronominal (il se lave). Pour sa/ça : sa est un possessif (sa maison, on peut dire sa ou ta), ça désigne une chose (j'aime ça).",
        bridgeToConcept: "Ce + nom (ce chien). Se + verbe pronominal (il se lave). Sa + nom, remplaçable par ta (sa maison). Ça désigne une chose, remplaçable par cela.",
        illustrationEmoji: "🐕"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Ce chien aboie fort : ce accompagne le nom chien.", illustrationEmoji: "🐕" },
            { text: "Il se lave les mains : se devant le verbe pronominal se laver.", illustrationEmoji: "🧼" }
          ]
        },
        {
          title: "Sa ou ça",
          steps: [
            { text: "Il aime sa maison : on peut dire ta maison, donc sa.", illustrationEmoji: "🏠" },
            { text: "J'aime bien ça : on peut dire j'aime bien cela, donc ça.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : ___ chien aboie fort. (se/ce)", answer: "ce", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Ce accompagne le nom chien." },
        { order: 2, prompt: "Complète : Il ___ lave les mains avant de manger. (se/ce)", answer: "se", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Se précède le verbe pronominal se laver." },
        { order: 3, prompt: "Complète : Il aime beaucoup ___ maison. (sa/ça)", answer: "sa", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On peut dire ta maison, donc c'est sa." },
        { order: 4, prompt: "Complète : J'aime bien ___, c'est très amusant. (sa/ça)", answer: "ça", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "On peut dire j'aime bien cela, donc c'est ça." },
        { order: 5, prompt: "Complète : ___ livre est passionnant. (se/ce)", answer: "ce", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Ce accompagne le nom livre." },
        { order: 6, prompt: "Défi : complète les trois mots. ___ (ce) chat ___ (se) cache et ___ (ça) l'amuse beaucoup.", answer: "ce se ça", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Ce chat (nom), se cache (verbe pronominal), ça l'amuse (cela l'amuse)." }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Diviser par 10 et 100",
      xpReward: 20,
      story: {
        hook: "Imagine la machine magique qui, cette fois, retire des zéros à un nombre.",
        concreteExample: "Tu as 250 billes réparties en 10 sacs égaux. Combien de billes par sac ?",
        reveal: "250 divisé par 10 = 25. Diviser par 10, c'est retirer un zéro à la fin du nombre.",
        bridgeToConcept: "Diviser par 10 retire un zéro, diviser par 100 retire deux zéros.",
        illustrationEmoji: "🎒"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "480 divisé par 10 = 48 (on retire un zéro).", illustrationEmoji: "🔢" },
            { text: "4800 divisé par 100 = 48 (on retire deux zéros).", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "700 divisé par 10 = 70.", illustrationEmoji: "🔍" },
            { text: "3000 divisé par 100 = 30.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 250 divisé par 10", answer: "25", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Diviser par 10 retire un zéro : 25." },
        { order: 2, prompt: "Calcule : 480 divisé par 10", answer: "48", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Diviser par 10 retire un zéro : 48." },
        { order: 3, prompt: "Calcule : 4800 divisé par 100", answer: "48", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Diviser par 100 retire deux zéros : 48." },
        { order: 4, prompt: "Calcule : 700 divisé par 10", answer: "70", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Diviser par 10 retire un zéro : 70." },
        { order: 5, prompt: "Calcule : 3000 divisé par 100", answer: "30", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Diviser par 100 retire deux zéros : 30." },
        { order: 6, prompt: "Défi : calcule 6000 divisé par 100, puis divise le résultat par 10. Quel est le résultat final ?", answer: "6", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "6000 divisé par 100 = 60, puis 60 divisé par 10 = 6." }
      ]
    }
  ]
};
