import { DayCurriculum } from "@/models/types";

export const day01: DayCurriculum = {
  dayNumber: 1,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Compter jusqu'à 20",
      xpReward: 24,
      story: {
        hook: "Imagine que tu ranges tes billes une par une, en comptant à voix haute.",
        concreteExample: "1, 2, 3, 4, 5... jusqu'où peux-tu compter sans te tromper ?",
        reveal: "Les nombres se suivent toujours dans le même ordre : 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, puis 11, 12, 13... jusqu'à 20. Bravo, tu sais compter !",
        bridgeToConcept: "Compter, c'est dire les nombres dans l'ordre, sans en oublier aucun.",
        illustrationEmoji: "🔢"
      },
      examples: [
        {
          title: "Compter des objets du quotidien",
          steps: [
            { text: "Tu as 5 doigts sur une main.", illustrationEmoji: "✋" },
            { text: "Tu as 10 doigts sur tes deux mains.", illustrationEmoji: "🙌" },
            { text: "Si tu ajoutes tes 10 orteils, tu arrives à 20 !", illustrationEmoji: "🦶" }
          ]
        },
        {
          title: "Ranger les nombres dans l'ordre",
          steps: [
            { text: "3, 1, 2 : ces nombres sont dans le désordre.", illustrationEmoji: "🔀" },
            { text: "Rangés dans l'ordre, ça donne : 1, 2, 3.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Quel nombre vient juste après 4 ?", answer: "5", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Après 4, on dit 5." },
        { order: 2, prompt: "Quel nombre vient juste après 9 ?", answer: "10", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Après 9, on dit 10." },
        { order: 3, prompt: "Quel nombre vient juste avant 8 ?", answer: "7", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Juste avant 8, il y a 7." },
        { order: 4, prompt: "Quel nombre vient entre 12 et 14 ?", answer: "13", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Entre 12 et 14, il y a 13." },
        { order: 5, prompt: "Quel nombre vient juste après 19 ?", answer: "20", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Après 19, on dit 20." },
        { order: 6, prompt: "Défi : quel nombre vient juste avant 15 ?", answer: "14", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Juste avant 15, il y a 14." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le verbe être au présent",
      xpReward: 24,
      story: {
        hook: "Il existe un petit mot magique qui sert à dire ce que l'on est.",
        concreteExample: "Écoute : je suis content. Tu es grand. Il est gentil.",
        reveal: "Ce petit mot magique, c'est le verbe être. À quoi sert-il ? Il sert à dire comment on est ou ce que l'on est. Comment le reconnaître ? Il change beaucoup selon la personne : suis, es, est...",
        bridgeToConcept: "Au présent : je suis, tu es, il est, elle est.",
        illustrationEmoji: "✨"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Je suis content d'aller à l'école.", illustrationEmoji: "😊" },
            { text: "Tu es mon ami.", illustrationEmoji: "🤝" },
            { text: "Elle est gentille avec moi.", illustrationEmoji: "💛" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Avec je, on dit toujours suis : je suis.", illustrationEmoji: "🎵" },
            { text: "Avec tu, on dit toujours es : tu es.", illustrationEmoji: "🎵" },
            { text: "Avec il ou elle, on dit toujours est : il est, elle est.", illustrationEmoji: "🎵" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je ____ content.", answer: "suis", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec je, on dit suis : je suis content." },
        { order: 2, prompt: "Complète : Tu ____ mon ami.", answer: "es", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Avec tu, on dit es : tu es mon ami." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Il ____ gentil.",
          options: ["suis", "es", "est"],
          answer: "est",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Avec il, on dit est : il est gentil."
        },
        { order: 4, prompt: "Complète : Elle ____ grande.", answer: "est", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Avec elle, on dit est : elle est grande." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Je ____ fatigué.",
          options: ["suis", "es", "est"],
          answer: "suis",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Avec je, on dit suis : je suis fatigué."
        },
        { order: 6, prompt: "Défi : complète les deux mots. Tu ____ petit et je ____ grand.", answer: "es suis", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Tu es (avec tu) et je suis (avec je)." }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Reconnaître un nom",
      xpReward: 24,
      story: {
        hook: "Imagine que tu dois nommer tout ce que tu vois autour de toi.",
        concreteExample: "Regarde : chat, maison, maîtresse. Ces mots désignent une personne, un animal ou une chose.",
        reveal: "À quoi servent ces mots ? Ils servent à nommer. Comment les reconnaître ? On peut toujours mettre un, une ou des devant : un chat, une maison, des maîtresses.",
        bridgeToConcept: "Ces mots qui nomment une personne, un animal ou une chose s'appellent des noms.",
        illustrationEmoji: "🏷️"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Un chien joue dans le jardin : chien et jardin sont des noms.", illustrationEmoji: "🐶" },
            { text: "Une fille lit un livre : fille et livre sont des noms.", illustrationEmoji: "📖" }
          ]
        },
        {
          title: "L'astuce pour reconnaître un nom",
          steps: [
            { text: "Essaie de mettre un ou une devant le mot.", illustrationEmoji: "🔍" },
            { text: "Si ça fonctionne, comme un ballon ou une table, c'est un nom !", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans la phrase le chat dort, quel est le nom ?", answer: "chat", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On peut dire un chat, donc chat est un nom." },
        { order: 2, prompt: "Dans la phrase la maison est jolie, quel est le nom ?", answer: "maison", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "On peut dire une maison, donc maison est un nom." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis le nom parmi ces mots : court, ballon, joli",
          options: ["court", "ballon", "joli"],
          answer: "ballon",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "On peut dire un ballon, donc ballon est un nom."
        },
        { order: 4, prompt: "Dans la phrase mon frère mange une pomme, quel est le nom qui suit une ?", answer: "pomme", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "On peut dire une pomme, donc pomme est un nom." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le nom parmi ces mots : petit, école, joue",
          options: ["petit", "école", "joue"],
          answer: "école",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "On peut dire une école, donc école est un nom."
        },
        { order: 6, prompt: "Défi : dans la phrase le petit oiseau chante dans l'arbre, cite les deux noms.", answer: "oiseau arbre", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "On peut dire un oiseau et un arbre : ce sont les deux noms de la phrase." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Le ou la : masculin et féminin",
      xpReward: 24,
      story: {
        hook: "Imagine deux paniers : un panier bleu pour les mots masculins, un panier rose pour les mots féminins.",
        concreteExample: "Regarde : le chat va dans quel panier ? Et la table ?",
        reveal: "Le chat, c'est masculin, on dit le chat. La table, c'est féminin, on dit la table. Bravo, tu as trouvé le bon panier !",
        bridgeToConcept: "Devant un nom masculin, on met le. Devant un nom féminin, on met la.",
        illustrationEmoji: "🧺"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Le ballon, le livre, le chien : ce sont des mots masculins.", illustrationEmoji: "🔵" },
            { text: "La balle, la fleur, la maison : ce sont des mots féminins.", illustrationEmoji: "🌸" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Essaie de dire le mot avec le puis avec la.", illustrationEmoji: "🔊" },
            { text: "Celui qui sonne bien à l'oreille, c'est le bon !", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : ___ chat dort. (le ou la)", answer: "le", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Chat est masculin, donc on dit le chat." },
        { order: 2, prompt: "Complète : ___ table est ronde. (le ou la)", answer: "la", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Table est féminin, donc on dit la table." },
        { order: 3, prompt: "Complète : ___ ballon est rouge. (le ou la)", answer: "le", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Ballon est masculin, donc on dit le ballon." },
        { order: 4, prompt: "Complète : ___ fleur sent bon. (le ou la)", answer: "la", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Fleur est féminin, donc on dit la fleur." },
        { order: 5, prompt: "Complète : ___ maison est grande. (le ou la)", answer: "la", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Maison est féminin, donc on dit la maison." },
        { order: 6, prompt: "Défi : complète les deux mots. ___ chien joue avec ___ balle.", answer: "le la", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Le chien (masculin) et la balle (féminin)." }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Ajouter 1, ajouter 2",
      xpReward: 24,
      story: {
        hook: "Imagine que tu reçois un nouveau bonbon à chaque fois : tu comptes un de plus.",
        concreteExample: "Tu as 5 bonbons. On t'en donne 1 de plus. Combien en as-tu maintenant ?",
        reveal: "5 bonbons, plus 1 bonbon, ça fait 6 bonbons. Ajouter 1, c'est juste dire le nombre suivant ! Bravo !",
        bridgeToConcept: "Ajouter 1 à un nombre, c'est trouver le nombre juste après.",
        illustrationEmoji: "🍬"
      },
      examples: [
        {
          title: "Ajouter 1",
          steps: [
            { text: "3 + 1 : le nombre juste après 3, c'est 4.", illustrationEmoji: "➕" },
            { text: "Donc 3 + 1 = 4.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Ajouter 2",
          steps: [
            { text: "3 + 2 : on avance de 2 nombres après 3 : 4, puis 5.", illustrationEmoji: "➕" },
            { text: "Donc 3 + 2 = 5.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 4 + 1", answer: "5", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Le nombre juste après 4, c'est 5." },
        { order: 2, prompt: "Calcule : 7 + 1", answer: "8", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Le nombre juste après 7, c'est 8." },
        { order: 3, prompt: "Calcule : 5 + 2", answer: "7", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Après 5, on avance de 2 : 6, puis 7." },
        { order: 4, prompt: "Calcule : 9 + 2", answer: "11", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Après 9, on avance de 2 : 10, puis 11." },
        { order: 5, prompt: "Calcule : 12 + 1", answer: "13", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Le nombre juste après 12, c'est 13." },
        { order: 6, prompt: "Défi : calcule 15 + 2", answer: "17", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Après 15, on avance de 2 : 16, puis 17." }
      ]
    }
  ]
};
