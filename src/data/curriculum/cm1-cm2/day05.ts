import { DayCurriculum } from "@/models/types";

export const day05: DayCurriculum = {
  dayNumber: 5,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Révision : multiplication, division, nombres, périmètre",
      xpReward: 24,
      story: {
        hook: "Cette semaine, tu as appris plein de choses en mathématiques. Faisons le tour ensemble !",
        concreteExample: "Tu sais maintenant multiplier et diviser en posant l'opération, lire les grands nombres et calculer un périmètre.",
        reveal: "Toutes ces compétences t'aideront pour la suite de ta scolarité.",
        bridgeToConcept: "Révisons : multiplication posée, division posée, nombres jusqu'à 10 000, périmètre.",
        illustrationEmoji: "🎓"
      },
      examples: [
        {
          title: "Rappel multiplication et division",
          steps: [
            { text: "23 x 3 : 3x3=9, 2x3=6, résultat 69.", illustrationEmoji: "🔢" },
            { text: "48 divisé par 4 = 12 car 4 x 12 = 48.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Rappel nombres et périmètre",
          steps: [
            { text: "Dans 5 672, le chiffre des centaines est 6.", illustrationEmoji: "🔍" },
            { text: "Périmètre d'un carré de 4 cm = 4 x 4 = 16 cm.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 16 x 4", answer: "64", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "6x4=24 (pose 4, retiens 2), 1x4=4+2=6, résultat 64." },
        { order: 2, prompt: "Calcule : 63 divisé par 3", answer: "21", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "3 dans 6=2, 3 dans 3=1, résultat 21." },
        { order: 3, prompt: "Dans 3 428, combien y a-t-il de milliers ?", answer: "3", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Le chiffre des milliers dans 3 428 est 3." },
        { order: 4, prompt: "Calcule le périmètre d'un rectangle de 5 m sur 3 m.", answer: "16", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "(5+3) x 2 = 16 m." },
        { order: 5, prompt: "Calcule : 7 x 6", answer: "42", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "7 x 6 = 42." },
        { order: 6, prompt: "Défi : calcule 84 divisé par 4, puis multiplie le résultat par 3. Quel est le résultat final ?", answer: "63", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "84 divisé par 4 = 21, puis 21 x 3 = 63." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Révision : passé composé, conditionnel, passé simple",
      xpReward: 24,
      story: {
        hook: "Tu as voyagé cette semaine à travers plusieurs temps du passé et du souhait. Résumons !",
        concreteExample: "Passé composé : j'ai mangé, je suis allé. Conditionnel : je voyagerais. Passé simple : il arriva.",
        reveal: "Chaque temps a son rôle : raconter le passé récent, exprimer un souhait, ou écrire un récit littéraire.",
        bridgeToConcept: "Passé composé, conditionnel présent, passé simple : trois temps essentiels pour bien s'exprimer.",
        illustrationEmoji: "🕰️"
      },
      examples: [
        {
          title: "Rappel passé composé",
          steps: [
            { text: "Avec avoir : j'ai mangé, tu as regardé.", illustrationEmoji: "🍎" },
            { text: "Avec être : je suis allé, elle est partie.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Rappel conditionnel et passé simple",
          steps: [
            { text: "Conditionnel : je voyagerais, elle voudrait.", illustrationEmoji: "🪄" },
            { text: "Passé simple : il arriva, elle finit.", illustrationEmoji: "📜" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Hier, j'____ (avoir) mangé une pomme.", answer: "ai", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec je, le verbe avoir au présent devient ai : j'ai mangé, au passé composé.", strictAccents: true },
        { order: 2, prompt: "Complète : Hier, je ____ (être) allé à la piscine.", answer: "suis", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Avec je, le verbe être au présent devient suis : je suis allé, car aller se conjugue avec être.", strictAccents: true },
        { order: 3, prompt: "Complète : Si j'avais une baguette magique, je ____ (voyager) partout.", answer: "voyagerais", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec je, le conditionnel présent de voyager est voyagerais.", strictAccents: true },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la forme au passé simple : le prince ___ au château.",
          options: ["arriva", "arrive", "arrivera"],
          answer: "arriva",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Arriva est la forme du passé simple, utilisée pour raconter dans un récit écrit.",
          strictAccents: true
        },
        { order: 5, prompt: "Complète : Nous ____ (avoir) parlé de nos vacances.", answer: "avons", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Avec nous, le verbe avoir au présent devient avons : nous avons parlé.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux verbes. Ils ____ (être) arrivés et ils ____ (vouloir) se reposer.", answer: "sont voudraient", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Tu étais proche ! Ils sont arrivés est un passé composé avec être, et ils voudraient est le conditionnel présent de vouloir.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Révision : nature des mots, pronoms, COD/COI, adverbes",
      xpReward: 24,
      story: {
        hook: "Cette semaine, tu as appris à analyser les mots et les phrases plus finement. Récapitulons !",
        concreteExample: "Nature des mots, pronoms personnels, COD/COI, adverbes : tout s'imbrique pour construire une phrase.",
        reveal: "Comprendre le rôle de chaque mot t'aide à mieux écrire et à mieux comprendre ce que tu lis.",
        bridgeToConcept: "Révisons : nature des mots, pronoms personnels sujets, COD/COI, adverbes.",
        illustrationEmoji: "🧩"
      },
      examples: [
        {
          title: "Rappel nature et pronoms",
          steps: [
            { text: "Le petit chat dort : chat (nom), petit (adjectif), dort (verbe).", illustrationEmoji: "🐱" },
            { text: "Balkis joue → Elle joue.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Rappel COD/COI et adverbes",
          steps: [
            { text: "Elle mange une pomme (COD) ; elle parle à sa sœur (COI).", illustrationEmoji: "🍎" },
            { text: "Elle court vite : vite est un adverbe invariable.", illustrationEmoji: "🏃" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans le petit chat dort, quelle est la nature du mot petit ?", answer: "adjectif", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Petit décrit le chat, c'est un adjectif." },
        { order: 2, prompt: "Remplace Bayrem par un pronom : Bayrem mange une pomme.", answer: "il", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Bayrem est un garçon, on le remplace par il." },
        { order: 3, prompt: "Dans Balkis mange une pomme, quel est le COD ?", answer: "une pomme", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Une pomme répond à quoi, sans préposition : c'est le COD." },
        { order: 4, prompt: "Dans elle parle à sa sœur, quel est le COI ?", answer: "à sa sœur", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "À sa sœur répond à qui, avec la préposition à : c'est le COI." },
        { order: 5, prompt: "Dans elle court vite, quel est l'adverbe ?", answer: "vite", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Vite précise comment elle court, c'est un adverbe." },
        { order: 6, prompt: "Défi : dans elle offre gentiment un cadeau à son ami, cite le COD, le COI et l'adverbe (dans cet ordre).", answer: "un cadeau à son ami gentiment", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Un cadeau est le COD, à son ami le COI, gentiment l'adverbe." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Révision : on/on n', c'est/s'est, quel(le)(s)/qu'elle(s), tout/tous/toute/toutes",
      xpReward: 24,
      story: {
        hook: "Cette semaine, tu as croisé beaucoup de mots jumeaux. Récapitulons les tests appris !",
        concreteExample: "On/on n', c'est/s'est, quelle/qu'elle, tout/tous/toute/toutes.",
        reveal: "Chaque paire a son test : voyelle pour on n', s'était pour s'est, que + il pour qu'elle, accord du nom pour tout.",
        bridgeToConcept: "Utilise toujours le test appris pour choisir la bonne orthographe.",
        illustrationEmoji: "🧠"
      },
      examples: [
        {
          title: "Rappel des tests",
          steps: [
            { text: "On n'oublie jamais (voyelle) ; il s'est trompé (on peut dire s'était trompé).", illustrationEmoji: "🔍" },
            { text: "Quelle belle robe ! (exclamation) ; je crois qu'elle arrive (que + il).", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Rappel de tout",
          steps: [
            { text: "Tous les enfants (masculin pluriel) ; toute la classe (féminin singulier).", illustrationEmoji: "👦" },
            { text: "Toutes les filles (féminin pluriel) ; tout le gâteau (masculin singulier).", illustrationEmoji: "👧" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : ___ arrive bientôt. (on/on n')", answer: "on n'", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Arrive commence par une voyelle, donc on ajoute n' pour la liaison : on n'arrive.", strictAccents: true },
        { order: 2, prompt: "Complète : Il ___ trompé de route. (c'est/s'est)", answer: "s'est", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "On peut dire il s'était trompé, donc on écrit s'est, le verbe pronominal se tromper au passé composé.", strictAccents: true },
        { order: 3, prompt: "Complète : ___ heure est-il ? (quelle/qu'elle)", answer: "quelle", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On interroge directement devant le nom heure, donc on écrit quelle.", strictAccents: true },
        { order: 4, prompt: "Complète : ___ les enfants sont là. (tout/tous/toute/toutes)", answer: "tous", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Enfants est masculin pluriel, donc on écrit tous, avec un s final.", strictAccents: true },
        { order: 5, prompt: "Complète : ___ la classe est sortie. (tout/tous/toute/toutes)", answer: "toute", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Classe est féminin singulier, donc on écrit toute, avec un e final.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les trois mots. ___ (on n') attend plus, ___ (c'est) l'heure ___ (qu'elle) a choisie.", answer: "on n' c'est qu'elle", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Tu étais proche ! On n'attend commence par une voyelle, c'est l'heure présente quelque chose, et qu'elle a choisie remplace que + elle a choisie.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Révision : tables de 6, 7, 8 et 9",
      xpReward: 24,
      story: {
        hook: "Cette semaine, tu as musclé ton cerveau avec de grandes tables de multiplication. Faisons le point !",
        concreteExample: "6 x 7 = 42, 8 x 9 = 72. Tu deviens un champion du calcul mental !",
        reveal: "Ces automatismes t'aideront pour toutes tes années de calcul futures.",
        bridgeToConcept: "Révisons ensemble les tables de 6, 7, 8 et 9.",
        illustrationEmoji: "⚡"
      },
      examples: [
        {
          title: "Rappel des tables",
          steps: [
            { text: "Table de 6 : 6, 12, 18, 24, 30, 36, 42, 48, 54.", illustrationEmoji: "🔢" },
            { text: "Table de 8 : 8, 16, 24, 32, 40, 48, 56, 64, 72.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Rappel des tables (suite)",
          steps: [
            { text: "Table de 7 : 7, 14, 21, 28, 35, 42, 49, 56, 63.", illustrationEmoji: "🔍" },
            { text: "Table de 9 : 9, 18, 27, 36, 45, 54, 63, 72, 81.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 6 x 7", answer: "42", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "6 x 7 = 42." },
        { order: 2, prompt: "Calcule : 7 x 8", answer: "56", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "7 x 8 = 56." },
        { order: 3, prompt: "Calcule : 8 x 9", answer: "72", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "8 x 9 = 72." },
        { order: 4, prompt: "Calcule : 9 x 6", answer: "54", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "9 x 6 = 54." },
        { order: 5, prompt: "Calcule : 7 x 7", answer: "49", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "7 x 7 = 49." },
        { order: 6, prompt: "Défi : calcule 8 x 6, puis ajoute le résultat de 9 x 3. Quel est le total ?", answer: "75", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "8 x 6 = 48, 9 x 3 = 27, 48 + 27 = 75." }
      ]
    }
  ]
};
