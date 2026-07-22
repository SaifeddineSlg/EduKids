import { DayCurriculum } from "@/models/types";

export const day22: DayCurriculum = {
  dayNumber: 22,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "La soustraction posée avec retenue",
      xpReward: 24,
      story: {
        hook: "Parfois, dans une soustraction, le chiffre du haut est plus petit que celui du bas aux unités.",
        concreteExample: "42 - 17 : aux unités, 2 est plus petit que 7. Il faut emprunter !",
        reveal: "On emprunte 1 dizaine au 4 : le 2 devient 12. 12 - 7 = 5. Le 4 devient 3 (on a emprunté une dizaine) : 3 - 1 = 2. Le résultat est 25.",
        bridgeToConcept: "Quand le chiffre du haut est plus petit que celui du bas, on emprunte 1 dizaine.",
        illustrationEmoji: "➖"
      },
      examples: [
        {
          title: "Soustraire avec un emprunt",
          steps: [
            { text: "42 - 17 : aux unités, 2 est plus petit que 7, on emprunte une dizaine : 12 - 7 = 5.", illustrationEmoji: "🔢" },
            { text: "Aux dizaines : 3 (4 moins la dizaine empruntée) - 1 = 2.", illustrationEmoji: "➖" },
            { text: "Le résultat est 25.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "53 - 26 : aux unités, 3 est plus petit que 6, on emprunte : 13 - 6 = 7.", illustrationEmoji: "🔢" },
            { text: "Aux dizaines : 4 - 2 = 2.", illustrationEmoji: "➖" },
            { text: "Le résultat est 27.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule en colonnes : 31 - 14", answer: "17", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Aux unités, 1 est plus petit que 4, on emprunte : 11 - 4 = 7. Aux dizaines : 2 - 1 = 1. Le résultat est 17." },
        { order: 2, prompt: "Calcule en colonnes : 62 - 35", answer: "27", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Aux unités, 2 est plus petit que 5, on emprunte : 12 - 5 = 7. Aux dizaines : 5 - 3 = 2. Le résultat est 27." },
        {
          order: 3,
          type: "mcq",
          prompt: "Que fait-on quand le chiffre du haut est plus petit aux unités ?",
          options: ["On emprunte une dizaine", "On ajoute 10 au résultat final", "On échange les deux nombres"],
          answer: "On emprunte une dizaine",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Quand le chiffre du haut est plus petit aux unités, on emprunte 1 dizaine pour pouvoir soustraire."
        },
        { order: 4, prompt: "Calcule en colonnes : 71 - 48", answer: "23", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Aux unités, 1 est plus petit que 8, on emprunte : 11 - 8 = 3. Aux dizaines : 6 - 4 = 2. Le résultat est 23." },
        {
          order: 5,
          type: "mcq",
          prompt: "Calcule en colonnes : 84 - 57",
          options: ["27", "37", "17"],
          answer: "27",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Aux unités, 4 est plus petit que 7, on emprunte : 14 - 7 = 7. Aux dizaines : 7 - 5 = 2. Le résultat est 27."
        },
        { order: 6, prompt: "Défi : calcule en colonnes 93 - 46", answer: "47", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Aux unités, 3 est plus petit que 6, on emprunte : 13 - 6 = 7. Aux dizaines : 8 - 4 = 4. Le résultat est 47." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le verbe savoir au présent",
      xpReward: 24,
      story: {
        hook: "Un verbe permet de dire qu'on connaît une information ou qu'on est capable de faire quelque chose.",
        concreteExample: "Écoute : je sais nager. Tu sais lire. Il sait compter.",
        reveal: "Ce verbe qui dit qu'on connaît quelque chose, c'est le verbe savoir. Je sais, tu sais, il sait, elle sait : ça se termine toujours par un s ou un t qui se prononcent pareil.",
        bridgeToConcept: "Au présent : je sais, tu sais, il sait, elle sait.",
        illustrationEmoji: "🧠"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Je sais compter jusqu'à cent.", illustrationEmoji: "🔢" },
            { text: "Tu sais nager dans la piscine.", illustrationEmoji: "🏊" },
            { text: "Elle sait lire toute seule.", illustrationEmoji: "📖" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Je sais et tu sais s'écrivent pareil : s-a-i-s.", illustrationEmoji: "🎵" },
            { text: "Il sait et elle sait s'écrivent avec un t : s-a-i-t.", illustrationEmoji: "🎵" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je ____ (savoir) faire du vélo.", answer: "sais", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec je, le verbe savoir devient sais : je sais faire du vélo.", strictAccents: true },
        { order: 2, prompt: "Complète : Tu ____ (savoir) où est le ballon.", answer: "sais", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Avec tu, le verbe savoir devient sais, comme avec je : tu sais.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Il ____ (savoir) chanter.",
          options: ["sais", "sait", "savons"],
          answer: "sait",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec il, le verbe savoir devient sait, avec un t.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Elle ____ (savoir) danser.", answer: "sait", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Avec elle, comme avec il, le verbe savoir devient sait.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Je ____ (savoir) faire ce jeu.",
          options: ["sais", "sait", "savez"],
          answer: "sais",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec je, on écrit sais, terminé par un s.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Je ____ (savoir) lire et tu ____ (savoir) écrire.", answer: "sais sais", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Je sais et tu sais s'écrivent tous les deux sais, avec un s à la fin.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Trouver l'infinitif d'un verbe conjugué",
      xpReward: 24,
      story: {
        hook: "Chaque verbe conjugué vient d'un mot de base qu'on retrouve dans le dictionnaire.",
        concreteExample: "Il chante vient de quel mot ? Chanter ! Elle finit vient de quel mot ? Finir !",
        reveal: "Ce mot de base, c'est l'infinitif du verbe. On le retrouve en se demandant : que fait-on ? Chanter, finir, dormir sont des infinitifs.",
        bridgeToConcept: "L'infinitif est la forme du verbe qu'on trouve dans le dictionnaire, avant de le conjuguer.",
        illustrationEmoji: "📚"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Il joue vient de l'infinitif jouer.", illustrationEmoji: "⚽" },
            { text: "Elle dort vient de l'infinitif dormir.", illustrationEmoji: "😴" }
          ]
        },
        {
          title: "L'astuce pour trouver l'infinitif",
          steps: [
            { text: "Essaie de dire il faut... devant le verbe.", illustrationEmoji: "🔍" },
            { text: "Il faut chanter, il faut finir : tu obtiens l'infinitif !", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Quel est l'infinitif du verbe dans il mange ?", answer: "manger", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Il faut manger : l'infinitif de mange est manger." },
        { order: 2, prompt: "Quel est l'infinitif du verbe dans elle saute ?", answer: "sauter", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Il faut sauter : l'infinitif de saute est sauter." },
        {
          order: 3,
          type: "mcq",
          prompt: "Quel est l'infinitif du verbe dans il finit ?",
          options: ["finir", "finit", "finissons"],
          answer: "finir",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Il faut finir : l'infinitif de finit est finir."
        },
        { order: 4, prompt: "Quel est l'infinitif du verbe dans elle part ?", answer: "partir", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Il faut partir : l'infinitif de part est partir." },
        {
          order: 5,
          type: "mcq",
          prompt: "Quel est l'infinitif du verbe dans il dort ?",
          options: ["dort", "dormir", "dormons"],
          answer: "dormir",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Il faut dormir : l'infinitif de dort est dormir."
        },
        { order: 6, prompt: "Défi : trouve l'infinitif des deux verbes. Il chante et elle danse.", answer: "chanter danser", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Il faut chanter et il faut danser : les infinitifs sont chanter et danser." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "L'homophone ou et où",
      xpReward: 24,
      story: {
        hook: "Deux petits mots se prononcent pareil mais n'ont pas du tout le même rôle.",
        concreteExample: "Tu préfères le rouge ou le bleu ? Où est ton cahier ?",
        reveal: "Ou (sans accent) sert à choisir entre deux choses, comme rouge ou bleu. Où (avec un accent grave) sert à demander un endroit, comme où est ton cahier.",
        bridgeToConcept: "Ou (sans accent) propose un choix ; où (avec accent grave) indique un lieu.",
        illustrationEmoji: "📍"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Veux-tu du jus ou de l'eau ? (un choix, sans accent)", illustrationEmoji: "🧃" },
            { text: "Où habites-tu ? (un lieu, avec accent)", illustrationEmoji: "🏠" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Remplace le mot par ou bien : si ça fonctionne, c'est ou sans accent.", illustrationEmoji: "🔍" },
            { text: "Si le mot parle d'un endroit, c'est où avec l'accent grave.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Tu veux du chocolat ___ de la vanille ? (ou ou où)", answer: "ou", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "On peut dire ou bien : c'est un choix, donc on écrit ou sans accent.", strictAccents: true },
        { order: 2, prompt: "Complète : ___ est ton cartable ? (ou ou où)", answer: "où", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Où sert à demander un endroit : on écrit où avec l'accent grave.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis le bon mot : Veux-tu jouer dedans ___ dehors ?",
          options: ["ou", "où"],
          answer: "ou",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "On peut dire ou bien : c'est un choix, donc on écrit ou sans accent.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Je ne sais pas ___ il est parti. (ou ou où)", answer: "où", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Où indique un lieu : on écrit où avec l'accent grave.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le bon mot : Tu préfères le vélo ___ la trottinette ?",
          options: ["ou", "où"],
          answer: "ou",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "On peut dire ou bien : c'est un choix, donc pas d'accent.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. ___ vas-tu : à la piscine ___ au parc ?", answer: "où ou", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Où (lieu, avec accent) vas-tu : à la piscine ou (choix, sans accent) au parc ?", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Soustraire 11 (méthode -10 puis -1)",
      xpReward: 24,
      story: {
        hook: "Soustraire 11, c'est presque comme soustraire 10, avec un petit pas de plus.",
        concreteExample: "35 - 11 : d'abord tu enlèves 10, puis tu enlèves encore 1.",
        reveal: "35 - 10 = 25, puis 25 - 1 = 24. Donc 35 - 11 = 24. Soustraire 11, c'est soustraire 10 puis soustraire 1 !",
        bridgeToConcept: "Pour soustraire 11, on enlève d'abord 10, puis on enlève encore 1.",
        illustrationEmoji: "➖"
      },
      examples: [
        {
          title: "La méthode -10 puis -1",
          steps: [
            { text: "27 - 11 : 27 - 10 = 17.", illustrationEmoji: "➖" },
            { text: "17 - 1 = 16.", illustrationEmoji: "➖" },
            { text: "Donc 27 - 11 = 16.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "48 - 11 : 48 - 10 = 38.", illustrationEmoji: "➖" },
            { text: "38 - 1 = 37. Donc 48 - 11 = 37.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 23 - 11", answer: "12", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "23 - 10 = 13, puis 13 - 1 = 12." },
        { order: 2, prompt: "Calcule : 36 - 11", answer: "25", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "36 - 10 = 26, puis 26 - 1 = 25." },
        {
          order: 3,
          type: "mcq",
          prompt: "Quelle est la bonne méthode pour soustraire 11 ?",
          options: ["Enlever 10 puis enlever 1", "Enlever 1 puis enlever 1", "Enlever 20"],
          answer: "Enlever 10 puis enlever 1",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Pour soustraire 11, on enlève d'abord 10, puis on enlève encore 1."
        },
        { order: 4, prompt: "Calcule : 49 - 11", answer: "38", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "49 - 10 = 39, puis 39 - 1 = 38." },
        {
          order: 5,
          type: "mcq",
          prompt: "Calcule : 57 - 11",
          options: ["46", "45", "36"],
          answer: "46",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "57 - 10 = 47, puis 47 - 1 = 46."
        },
        { order: 6, prompt: "Défi : calcule 60 - 11, puis enlève encore 11 au résultat.", answer: "38", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "60 - 11 = 49, puis 49 - 11 = 38." }
      ]
    }
  ]
};
