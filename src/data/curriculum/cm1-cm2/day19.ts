import { DayCurriculum } from "@/models/types";

export const day19: DayCurriculum = {
  dayNumber: 19,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Les unités de longueur et les conversions",
      xpReward: 22,
      story: {
        hook: "Mesurer une fourmi ou la distance entre deux villes ne se fait pas avec la même unité.",
        concreteExample: "Combien y a-t-il de centimètres dans 3 mètres ?",
        reveal: "1 mètre vaut 100 centimètres, donc 3 mètres valent 3 x 100, soit 300 centimètres.",
        bridgeToConcept: "Les unités de longueur : 1 km = 1000 m, 1 m = 100 cm, 1 cm = 10 mm.",
        illustrationEmoji: "📏"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "5 mètres = 5 x 100 = 500 centimètres.", illustrationEmoji: "🔢" },
            { text: "2 kilomètres = 2 x 1000 = 2000 mètres.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "4 centimètres = 4 x 10 = 40 millimètres.", illustrationEmoji: "🔍" },
            { text: "Pour convertir vers une unité plus petite, on multiplie.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Combien de centimètres dans 3 mètres ?", answer: "300", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "1 mètre = 100 centimètres, donc 3 mètres = 300 centimètres." },
        { order: 2, prompt: "Combien de mètres dans 2 kilomètres ?", answer: "2000", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "1 kilomètre = 1000 mètres, donc 2 kilomètres = 2000 mètres." },
        { order: 3, prompt: "Combien de millimètres dans 4 centimètres ?", answer: "40", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "1 centimètre = 10 millimètres, donc 4 centimètres = 40 millimètres." },
        { order: 4, prompt: "Combien de centimètres dans 7 mètres ?", answer: "700", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "1 mètre = 100 centimètres, donc 7 mètres = 700 centimètres." },
        { order: 5, prompt: "Combien de kilomètres dans 3000 mètres ?", answer: "3", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "1000 mètres font 1 kilomètre, donc 3000 mètres font 3 kilomètres." },
        { order: 6, prompt: "Défi : convertis 2 mètres en centimètres, puis ajoute 15 centimètres. Quel est le résultat en centimètres ?", answer: "215", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "2 mètres = 200 centimètres, puis 200 + 15 = 215 centimètres." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le futur simple des verbes irréguliers : être, avoir, aller, faire",
      xpReward: 22,
      story: {
        hook: "Tu sais déjà conjuguer les verbes réguliers au futur simple. Découvrons maintenant quatre verbes irréguliers essentiels.",
        concreteExample: "Demain, je serai content, j'aurai un cadeau, j'irai chez mamie et je ferai du vélo.",
        reveal: "Être, avoir, aller et faire ont un radical irrégulier au futur : ser-, aur-, ir-, fer-, suivi des terminaisons habituelles -ai, -as, -a, -ons, -ez, -ont.",
        bridgeToConcept: "Futur simple irrégulier : je serai, j'aurai, j'irai, je ferai.",
        illustrationEmoji: "🔮"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Demain, nous serons en vacances.", illustrationEmoji: "🏖️" },
            { text: "L'année prochaine, ils auront un nouveau vélo.", illustrationEmoji: "🚲" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Retiens bien les radicaux irréguliers : ser-, aur-, ir-, fer-.", illustrationEmoji: "🔍" },
            { text: "Ajoute ensuite les terminaisons habituelles du futur simple.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Demain, je ____ (être) content.", answer: "serai", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Au futur simple, avec je, être devient serai : radical ser- puis -ai.", strictAccents: true },
        { order: 2, prompt: "Complète : Tu ____ (avoir) un beau cadeau.", answer: "auras", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Au futur simple, avec tu, avoir devient auras : radical aur- puis -as.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Elle ____ (aller) chez sa grand-mère.",
          options: ["ira", "irai", "iras"],
          answer: "ira",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Au futur simple, avec elle, aller devient ira : radical ir- puis -a.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Nous ____ (faire) du vélo ce week-end.", answer: "ferons", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Au futur simple, avec nous, faire devient ferons : radical fer- puis -ons.", strictAccents: true },
        { order: 5, prompt: "Complète : Vous ____ (être) fiers de vous.", answer: "serez", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Au futur simple, avec vous, être devient serez : radical ser- puis -ez.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux verbes. Ils ____ (avoir) une surprise et nous ____ (aller) à la fête ensemble.", answer: "auront irons", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Tu étais proche ! Avec ils, avoir donne auront. Avec nous, aller donne irons.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Les compléments du nom",
      xpReward: 22,
      story: {
        hook: "Un nom peut être précisé par un petit groupe de mots, souvent relié par un mot de liaison.",
        concreteExample: "Le vélo de Bayrem est rouge. Quel groupe de mots précise le nom vélo ?",
        reveal: "De Bayrem précise à qui appartient le vélo. C'est le complément du nom, souvent introduit par de, à ou en.",
        bridgeToConcept: "Le complément du nom précise un nom, il est souvent introduit par de, à ou en (un sac à dos, une table en bois).",
        illustrationEmoji: "🚲"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "La maison de mes grands-parents est très grande.", illustrationEmoji: "🏡" },
            { text: "Un sac à dos bleu attend dans l'entrée.", illustrationEmoji: "🎒" }
          ]
        },
        {
          title: "L'astuce pour trouver un complément du nom",
          steps: [
            { text: "Cherche le petit mot de liaison (de, à, en) placé juste après un nom.", illustrationEmoji: "🔍" },
            { text: "Le groupe de mots qui suit précise ce nom : c'est le complément du nom.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans le vélo de Bayrem est rouge, quel est le complément du nom vélo ?", answer: "de Bayrem", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "De Bayrem précise à qui appartient le vélo, c'est le complément du nom." },
        { order: 2, prompt: "Dans la maison de mes grands-parents est grande, quel est le complément du nom maison ?", answer: "de mes grands-parents", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "De mes grands-parents précise à qui appartient la maison, c'est le complément du nom." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : dans un sac à dos bleu, à dos est le complément du nom...",
          options: ["sac", "chien", "table"],
          answer: "sac",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "À dos précise le nom sac, c'est son complément du nom."
        },
        { order: 4, prompt: "Dans une table en bois, quel est le complément du nom table ?", answer: "en bois", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "En bois précise la matière de la table, c'est le complément du nom." },
        { order: 5, prompt: "Dans le cahier de Balkis est neuf, quel est le complément du nom cahier ?", answer: "de Balkis", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "De Balkis précise à qui appartient le cahier, c'est le complément du nom." },
        { order: 6, prompt: "Défi : dans la robe de ma sœur et le chapeau en laine sont posés sur le lit, cite les deux compléments du nom, dans l'ordre.", answer: "de ma sœur en laine", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "De ma sœur précise le nom robe, et en laine précise le nom chapeau." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Plutôt ou plus tôt",
      xpReward: 22,
      story: {
        hook: "Deux expressions qui se prononcent presque pareil : l'une exprime une préférence, l'autre parle du temps.",
        concreteExample: "Je préfère le chocolat, ___ que la vanille. Est-ce plutôt ou plus tôt ?",
        reveal: "On préfère le chocolat plutôt que la vanille : plutôt exprime une préférence, en un seul mot. Plus tôt, en deux mots, est le contraire de plus tard et concerne le temps.",
        bridgeToConcept: "Plutôt (un mot) exprime une préférence, remplaçable par de préférence. Plus tôt (deux mots) est le contraire de plus tard.",
        illustrationEmoji: "⏰"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Elle préfère lire plutôt que regarder la télévision : préférence.", illustrationEmoji: "📖" },
            { text: "Il est arrivé plus tôt que prévu ce matin : contraire de plus tard.", illustrationEmoji: "⏰" }
          ]
        },
        {
          title: "L'astuce du test",
          steps: [
            { text: "Essaie de remplacer par de préférence : si ça marche, c'est plutôt.", illustrationEmoji: "🔍" },
            { text: "Si le mot parle du temps et s'oppose à plus tard, écris plus tôt en deux mots.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je préfère le chocolat, ___ que la vanille. (plutôt/plus tôt)", answer: "plutôt", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On peut dire de préférence le chocolat, donc on écrit plutôt, en un seul mot.", strictAccents: true },
        { order: 2, prompt: "Complète : Il est arrivé ___ que prévu ce matin. (plutôt/plus tôt)", answer: "plus tôt", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Il s'agit du contraire de plus tard, donc on écrit plus tôt, en deux mots.", strictAccents: true },
        { order: 3, prompt: "Complète : Nous devrions partir ___ demain matin. (plutôt/plus tôt)", answer: "plus tôt", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Il s'agit du contraire de plus tard, donc on écrit plus tôt, en deux mots.", strictAccents: true },
        { order: 4, prompt: "Complète : Elle aime ___ le sport que la lecture. (plutôt/plus tôt)", answer: "plutôt", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "On peut dire de préférence le sport, donc on écrit plutôt, en un seul mot.", strictAccents: true },
        { order: 5, prompt: "Complète : Range ta chambre ___ que de jouer. (plutôt/plus tôt)", answer: "plutôt", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "On peut dire de préférence ranger, donc on écrit plutôt, en un seul mot.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. Bayrem préfère jouer dehors ___ (plutôt) que de regarder la télévision, et il se lève ___ (plus tôt) que sa sœur.", answer: "plutôt plus tôt", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Tu étais proche ! Plutôt exprime une préférence, et plus tôt s'oppose à plus tard, en deux mots.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Calculer 75 % d'un nombre",
      xpReward: 22,
      story: {
        hook: "Tu sais déjà trouver 10 %, 25 % et 50 % d'un nombre. Découvrons maintenant 75 %.",
        concreteExample: "Combien font 75 % de 40 ?",
        reveal: "75 %, c'est trois quarts. On trouve d'abord le quart de 40 (10), puis on le multiplie par 3 : 75 % de 40 = 30.",
        bridgeToConcept: "75 % d'un nombre = les trois quarts de ce nombre = (le nombre divisé par 4) multiplié par 3.",
        illustrationEmoji: "📊"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "75 % de 80 : le quart de 80 est 20, donc 3 x 20 = 60.", illustrationEmoji: "🔢" },
            { text: "75 % de 200 : le quart de 200 est 50, donc 3 x 50 = 150.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "75 % de 100 : le quart de 100 est 25, donc 3 x 25 = 75.", illustrationEmoji: "🔍" },
            { text: "Plus le nombre de départ est grand, plus 75 % l'est aussi.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 75 % de 40", answer: "30", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Le quart de 40 est 10, donc 3 x 10 = 30." },
        { order: 2, prompt: "Calcule : 75 % de 80", answer: "60", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Le quart de 80 est 20, donc 3 x 20 = 60." },
        { order: 3, prompt: "Calcule : 75 % de 20", answer: "15", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Le quart de 20 est 5, donc 3 x 5 = 15." },
        { order: 4, prompt: "Calcule : 75 % de 200", answer: "150", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Le quart de 200 est 50, donc 3 x 50 = 150." },
        { order: 5, prompt: "Calcule : 75 % de 100", answer: "75", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Le quart de 100 est 25, donc 3 x 25 = 75." },
        { order: 6, prompt: "Défi : calcule 75 % de 400, puis ajoute 25 % de 40. Quel est le résultat ?", answer: "310", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "75 % de 400 = 300, et 25 % de 40 = 10, donc 300 + 10 = 310." }
      ]
    }
  ]
};
