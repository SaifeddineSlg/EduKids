import { DayCurriculum } from "@/models/types";

export const day24: DayCurriculum = {
  dayNumber: 24,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Les nombres jusqu'à 100 000",
      xpReward: 22,
      story: {
        hook: "Imagine que tu ranges maintenant tes jetons par paquets géants de dix mille, comme des cartons remplis de dix cartons de mille.",
        concreteExample: "Tu as 4 cartons de dix mille jetons, 5 cartons de mille, 3 sacs de cent, 2 paquets de dix et 6 jetons tout seuls. Combien de jetons as-tu en tout ?",
        reveal: "4 cartons de dix mille, ça fait 40000. Avec 5 cartons de mille, ça fait 5000 de plus. Avec 3 sacs de cent, ça fait 300 de plus. Avec 2 paquets de dix, ça fait 20 de plus. Et 6 jetons tout seuls. En tout : 40000 + 5000 + 300 + 20 + 6 = 45326. Bravo, tu viens de lire un très grand nombre !",
        bridgeToConcept: "Un nombre comme 45326 veut dire 4 dizaines de mille, 5 milliers, 3 centaines, 2 dizaines et 6 unités.",
        illustrationEmoji: "🔢"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "23450, c'est 2 dizaines de mille (20000), 3 milliers (3000), 4 centaines (400), 5 dizaines (50) et 0 unité.", illustrationEmoji: "🔟" },
            { text: "67003, c'est 6 dizaines de mille (60000), 7 milliers (7000), 0 centaine, 0 dizaine et 3 unités (3).", illustrationEmoji: "🔟" }
          ]
        },
        {
          title: "L'astuce pour lire les grands nombres",
          steps: [
            { text: "Les deux premiers chiffres disent combien de dizaines de mille et de milliers.", illustrationEmoji: "🔍" },
            { text: "Les trois chiffres suivants disent combien de centaines, de dizaines et d'unités restent.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Combien de dizaines de mille dans le nombre 54832 ?", answer: "5", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "54832, c'est 5 dizaines de mille, 4 milliers, 8 centaines, 3 dizaines et 2 unités." },
        { order: 2, prompt: "Combien de milliers dans le nombre 54832 ?", answer: "4", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "54832, c'est 5 dizaines de mille, 4 milliers, 8 centaines, 3 dizaines et 2 unités." },
        { order: 3, prompt: "Quel nombre a 7 dizaines de mille, 2 milliers, 3 centaines, 0 dizaine et 5 unités ?", answer: "72305", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "7 dizaines de mille (70000), 2 milliers (2000), 3 centaines (300), 0 dizaine et 5 unités (5), ça fait 72305." },
        {
          order: 4,
          type: "mcq",
          prompt: "Quel nombre vient juste après 39999 ?",
          options: ["40000", "39909", "40001"],
          answer: "40000",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Après 39999, on passe à la dizaine de mille suivante : 40000."
        },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le plus grand nombre.",
          options: ["68999", "69001", "68998"],
          answer: "69001",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "69001 a un chiffre des dizaines de mille et des milliers plus grand que les deux autres nombres : c'est le plus grand."
        },
        { order: 6, prompt: "Défi : quel nombre vient juste avant 100000 ?", answer: "99999", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Juste avant 100000, il y a 99999, le plus grand nombre à cinq chiffres." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le futur simple des verbes voir et prendre",
      xpReward: 22,
      story: {
        hook: "Tu connais déjà le présent de voir et prendre. Découvrons aujourd'hui leur futur simple.",
        concreteExample: "Écoute : je verrai, tu verras, il verra, nous verrons, vous verrez, ils verront / je prendrai, tu prendras, il prendra, nous prendrons, vous prendrez, ils prendront.",
        reveal: "À quoi ça sert ? À annoncer une action à venir. Comment le reconnaître ? Voir garde son radical verr-, avec deux r, et prendre garde son radical prendr-, tous deux suivis des terminaisons -ai, -as, -a, -ons, -ez, -ont.",
        bridgeToConcept: "Voir au futur simple : verrai, verras, verra, verrons, verrez, verront. Prendre au futur simple : prendrai, prendras, prendra, prendrons, prendrez, prendront.",
        illustrationEmoji: "🔮"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Demain, je verrai un film avec mes parents.", illustrationEmoji: "🎬" },
            { text: "L'année prochaine, vous prendrez l'avion.", illustrationEmoji: "✈️" }
          ]
        },
        {
          title: "Attention à l'erreur fréquente",
          steps: [
            { text: "Beaucoup d'enfants oublient un r et écrivent je verai. C'est une erreur !", illustrationEmoji: "❌" },
            { text: "Voir au futur s'écrit toujours avec deux r : je verrai, tu verras.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Demain, je ____ (voir) mes cousins.", answer: "verrai", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Le futur de voir s'écrit avec deux r : avec je, on écrit verrai.", strictAccents: true },
        { order: 2, prompt: "Complète : Nous ____ (prendre) le train samedi.", answer: "prendrons", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "Le futur de prendre garde le radical prendr- : avec nous, on écrit prendrons.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Vous ____ (voir) un beau paysage.",
          options: ["verrez", "voirez", "verrai"],
          answer: "verrez",
          kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.",
          explanationWhenWrong: "Le futur de voir s'écrit avec deux r : avec vous, on écrit verrez.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Ils ____ (prendre) leur goûter avant de sortir.", answer: "prendront", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Le futur de prendre garde le radical prendr- : avec ils, on écrit prendront.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Tu ____ (voir) ta maîtresse demain.",
          options: ["verras", "voiras", "verra"],
          answer: "verras",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.",
          explanationWhenWrong: "Le futur de voir s'écrit avec deux r : avec tu, on écrit verras.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Elle ____ (voir) ses amis et nous ____ (prendre) le bus ensemble.", answer: "verra prendrons", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "Elle verra vient de voir, avec deux r, et nous prendrons vient de prendre, avec le radical prendr-.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Les antonymes (les contraires)",
      xpReward: 22,
      story: {
        hook: "Imagine deux mots qui veulent dire tout le contraire l'un de l'autre.",
        concreteExample: "Regarde : grand et petit. Que remarques-tu sur leur sens ?",
        reveal: "À quoi servent-ils ? Les antonymes permettent de préciser une idée en donnant son contraire, et d'enrichir un texte. Comment les reconnaître ? Un antonyme a un sens opposé au mot de départ ; il est parfois formé avec un petit mot comme in-, mal- ou dé- (heureux devient malheureux).",
        bridgeToConcept: "Les antonymes sont des mots de sens opposé : grand et petit, chaud et froid.",
        illustrationEmoji: "⚖️"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Grand et petit sont des antonymes.", illustrationEmoji: "📏" },
            { text: "Jour et nuit sont des antonymes.", illustrationEmoji: "🌗" }
          ]
        },
        {
          title: "L'astuce pour trouver un antonyme",
          steps: [
            { text: "Cherche le mot qui veut dire le contraire.", illustrationEmoji: "🔍" },
            { text: "Parfois, on ajoute un petit mot comme in-, mal- ou dé- pour former un contraire : heureux devient malheureux.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Trouve l'antonyme du mot chaud.", answer: "froid", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Froid est le contraire de chaud : c'est un antonyme." },
        { order: 2, prompt: "Trouve l'antonyme du mot rapide.", answer: "lent", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Lent est le contraire de rapide : c'est un antonyme." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis l'antonyme du mot content.",
          options: ["joyeux", "triste", "heureux"],
          answer: "triste",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Triste est le contraire de content : c'est un antonyme."
        },
        { order: 4, prompt: "Trouve l'antonyme du mot jour.", answer: "nuit", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Nuit est le contraire de jour : c'est un antonyme." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis l'antonyme du mot propre.",
          options: ["sale", "beau", "joli"],
          answer: "sale",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Sale est le contraire de propre : c'est un antonyme."
        },
        { order: 6, prompt: "Défi : trouve les antonymes des mots grand et fort.", answer: "petit faible", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Petit est le contraire de grand, et faible est le contraire de fort." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "La ou l'a : le test avec l'avait",
      xpReward: 22,
      story: {
        hook: "Deux petits mots se prononcent pareil : la et l'a. Apprenons à ne plus les confondre.",
        concreteExample: "Regarde : La maison est grande. Il l'a vue hier. Comment faire la différence ?",
        reveal: "À quoi sert cette distinction ? La est un article ou un pronom placé devant un nom ou un verbe ; l'a est le pronom l' suivi du verbe avoir. Comment le reconnaître ? Si on peut dire l'avait à la place, on écrit l'a. Sinon, on écrit la.",
        bridgeToConcept: "La (article ou pronom) ; l'a se remplace par l'avait (pronom + verbe avoir).",
        illustrationEmoji: "🔍"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "La maison est grande : la est un article devant le nom maison.", illustrationEmoji: "🏠" },
            { text: "Il l'a vue hier : on peut dire il l'avait vue hier, donc l'a.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Si on peut dire l'avait, on écrit l'a.", illustrationEmoji: "🔍" },
            { text: "Sinon, on écrit la.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : ___ maîtresse explique la leçon. (la/l'a)", answer: "la", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "On ne peut pas dire l'avait maîtresse : c'est un article, on écrit la.", strictAccents: true },
        { order: 2, prompt: "Complète : Il ___ appelée hier soir. (la/l'a)", answer: "l'a", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "On peut dire il l'avait appelée hier soir, donc on écrit l'a.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis le bon mot : Je vois ___ voiture de mon père.",
          options: ["la", "l'a"],
          answer: "la",
          kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.",
          explanationWhenWrong: "On ne peut pas dire l'avait voiture : c'est un article, on écrit la.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Elle ___ rangée dans le tiroir. (la/l'a)", answer: "l'a", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "On peut dire elle l'avait rangée dans le tiroir, donc on écrit l'a.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le bon mot : Il ___ félicitée pour son dessin.",
          options: ["la", "l'a"],
          answer: "l'a",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.",
          explanationWhenWrong: "On peut dire il l'avait félicitée pour son dessin, donc on écrit l'a.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. ___ maîtresse ___ félicité pour son beau travail. (la/l'a)", answer: "la l'a", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "La maîtresse est un article devant un nom, donc la ; elle l'avait félicité fonctionne, donc l'a.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Multiplier par 10 et par 100 mentalement",
      xpReward: 22,
      story: {
        hook: "Imagine une astuce magique pour multiplier très vite par 10 et par 100.",
        concreteExample: "23 x 10, ça fait combien ?",
        reveal: "Pour multiplier par 10, on ajoute simplement un zéro à la fin du nombre : 23 x 10 = 230. Pour multiplier par 100, on ajoute deux zéros : 23 x 100 = 2300. Bravo, tu as utilisé l'astuce du zéro !",
        bridgeToConcept: "Pour multiplier par 10, on ajoute un zéro. Pour multiplier par 100, on ajoute deux zéros.",
        illustrationEmoji: "✖️"
      },
      examples: [
        {
          title: "L'astuce des zéros",
          steps: [
            { text: "23 x 10 = 230 (on ajoute un zéro).", illustrationEmoji: "0️⃣" },
            { text: "23 x 100 = 2300 (on ajoute deux zéros).", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Encore un exemple",
          steps: [
            { text: "45 x 10 = 450.", illustrationEmoji: "0️⃣" },
            { text: "45 x 100 = 4500.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 34 x 10", answer: "340", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On ajoute un zéro à 34 : 340." },
        { order: 2, prompt: "Calcule : 56 x 100", answer: "5600", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "On ajoute deux zéros à 56 : 5600." },
        { order: 3, prompt: "Calcule : 78 x 10", answer: "780", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On ajoute un zéro à 78 : 780." },
        { order: 4, prompt: "Calcule : 12 x 100", answer: "1200", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "On ajoute deux zéros à 12 : 1200." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le bon résultat de 90 x 10.",
          options: ["900", "9000", "90"],
          answer: "900",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "On ajoute un zéro à 90 : 900."
        },
        { order: 6, prompt: "Défi : calcule 25 x 10 puis multiplie le résultat par 10 (donne le résultat final).", answer: "2500", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "25 x 10 = 250, puis 250 x 10 = 2500." }
      ]
    }
  ]
};
