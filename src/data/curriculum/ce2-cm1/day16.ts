import { DayCurriculum } from "@/models/types";

export const day16: DayCurriculum = {
  dayNumber: 16,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "La division avec reste",
      xpReward: 24,
      story: {
        hook: "Imagine que tu partages des bonbons entre tes amis, mais qu'il en reste toujours quelques-uns que tu ne peux pas partager.",
        concreteExample: "Tu as 17 bonbons à partager entre 3 amis. Combien chacun reçoit-il, et combien en reste-t-il ?",
        reveal: "3 x 5 = 15, c'est le plus grand multiple de 3 sous 17. Il reste 17 - 15 = 2. Chaque ami reçoit 5 bonbons, et il en reste 2. Bravo, tu as fait une division avec reste !",
        bridgeToConcept: "Dans une division avec reste, on cherche le plus grand multiple du diviseur qui ne dépasse pas le nombre à partager ; ce qu'il reste est le reste.",
        illustrationEmoji: "🍬"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "20 divisé par 6 : 6 x 3 = 18, c'est le plus grand multiple de 6 sous 20.", illustrationEmoji: "🔍" },
            { text: "Le reste est 20 - 18 = 2. Donc 20 = 6 x 3 + 2.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "25 divisé par 4 : 4 x 6 = 24, c'est le plus grand multiple de 4 sous 25.", illustrationEmoji: "🔍" },
            { text: "Le reste est 25 - 24 = 1. Donc 25 = 4 x 6 + 1.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 14 divisé par 3. Quel est le quotient ?", answer: "4", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "3 x 4 = 12, c'est le plus grand multiple de 3 sous 14, donc le quotient est 4." },
        { order: 2, prompt: "Calcule : 14 divisé par 3. Quel est le reste ?", answer: "2", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "14 - 12 = 2, le reste est 2." },
        { order: 3, prompt: "Calcule : 22 divisé par 5. Quel est le quotient ?", answer: "4", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "5 x 4 = 20, c'est le plus grand multiple de 5 sous 22, donc le quotient est 4." },
        { order: 4, prompt: "Calcule : 22 divisé par 5. Quel est le reste ?", answer: "2", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "22 - 20 = 2, le reste est 2." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : dans 17 divisé par 4, quel est le reste ?",
          options: ["1", "4", "0"],
          answer: "1",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "4 x 4 = 16, c'est le plus grand multiple de 4 sous 17. Le reste est 17 - 16 = 1."
        },
        { order: 6, prompt: "Défi : 31 bonbons partagés entre 6 amis. Combien chacun reçoit-il, et combien en reste-t-il ?", answer: "5 1", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "6 x 5 = 30, c'est le plus grand multiple de 6 sous 31. Le reste est 31 - 30 = 1. Chaque ami reçoit 5 bonbons, il en reste 1." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le présent des verbes en -re comme vendre",
      xpReward: 24,
      story: {
        hook: "Découvrons aujourd'hui une nouvelle famille de verbes, ceux qui se terminent par -re comme vendre.",
        concreteExample: "Écoute : je vends des fleurs. Tu vends des gâteaux. Il vend des jouets.",
        reveal: "À quoi sert ce temps ? À dire ce qui se passe maintenant. Comment reconnaître ces verbes ? Au singulier, on n'entend jamais la terminaison -re de l'infinitif : je vends, tu vends, il vend.",
        bridgeToConcept: "Vendre au présent : je vends, tu vends, il vend, nous vendons, vous vendez, ils vendent.",
        illustrationEmoji: "🛍️"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Elle vend des fleurs au marché.", illustrationEmoji: "🌸" },
            { text: "Nous attendons le bus depuis dix minutes.", illustrationEmoji: "🚌" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Au singulier (je, tu, il), on n'entend jamais la terminaison -re de l'infinitif.", illustrationEmoji: "🔍" },
            { text: "Vendre devient je vends, tu vends, il vend : le d se garde même avec il.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je ____ (vendre) des gâteaux à la fête.", answer: "vends", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec je, le présent de vendre est vends.", strictAccents: true },
        { order: 2, prompt: "Complète : Tu ____ (attendre) ton tour patiemment.", answer: "attends", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Avec tu, le présent de attendre est attends.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Il ____ (prendre) son goûter avant de sortir.",
          options: ["prend", "prends", "prennent"],
          answer: "prend",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec il, le présent de prendre est prend, sans s. Prends est pour je ou tu, prennent est pour ils.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Nous ____ (vendre) nos vieux jouets.", answer: "vendons", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Avec nous, le présent de vendre est vendons.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Elles ____ (attendre) leurs parents devant l'école.",
          options: ["attendent", "attendons", "attendez"],
          answer: "attendent",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec elles, le présent de attendre est attendent, avec la terminaison -ent.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux verbes. Vous ____ (vendre) des fruits et ils ____ (prendre) leur temps pour choisir.", answer: "vendez prennent", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Vous vendez (terminaison -ez) et ils prennent (le verbe prendre double le n au pluriel).", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Les types de phrases",
      xpReward: 24,
      story: {
        hook: "Imagine quatre façons différentes de dire une phrase, selon ce que tu veux exprimer.",
        concreteExample: "Regarde : Balkis joue dehors. Balkis joue-t-elle dehors ? Comme Balkis joue bien dehors ! Joue dehors ! Quelle est la différence entre ces phrases ?",
        reveal: "La première raconte un fait (déclarative), la deuxième pose une question (interrogative), la troisième exprime une émotion (exclamative), la quatrième donne un ordre (impérative).",
        bridgeToConcept: "Il existe quatre types de phrases : déclarative (raconte, point), interrogative (question, point d'interrogation), exclamative (émotion, point d'exclamation), impérative (ordre).",
        illustrationEmoji: "❗"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Le chat dort sur le canapé : phrase déclarative.", illustrationEmoji: "🐈" },
            { text: "Est-ce que tu viens avec moi ? : phrase interrogative.", illustrationEmoji: "❓" }
          ]
        },
        {
          title: "Exclamative et impérative",
          steps: [
            { text: "Quelle belle journée ! : phrase exclamative.", illustrationEmoji: "☀️" },
            { text: "Range ta chambre ! : phrase impérative.", illustrationEmoji: "📢" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Quel est le type de la phrase : Le chat dort sur le canapé. ?", answer: "déclarative", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Elle raconte un fait et se termine par un point, c'est une phrase déclarative." },
        { order: 2, prompt: "Quel est le type de la phrase : Est-ce que tu viens avec moi ? ?", answer: "interrogative", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Elle pose une question et se termine par un point d'interrogation, c'est une phrase interrogative." },
        { order: 3, prompt: "Quel est le type de la phrase : Quelle belle journée ! ?", answer: "exclamative", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Elle exprime une émotion et se termine par un point d'exclamation, c'est une phrase exclamative." },
        { order: 4, prompt: "Quel est le type de la phrase : Range ta chambre ! ?", answer: "impérative", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Elle donne un ordre, c'est une phrase impérative." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le type de la phrase : Où habites-tu ?",
          options: ["interrogative", "déclarative", "exclamative"],
          answer: "interrogative",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Elle pose une question, c'est une phrase interrogative."
        },
        { order: 6, prompt: "Défi : donne le type de ces deux phrases. Comme ce gâteau est délicieux ! Ferme la porte, s'il te plaît !", answer: "exclamative impérative", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Comme ce gâteau est délicieux ! exprime une émotion (exclamative), et Ferme la porte ! donne un ordre (impérative)." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "La, l'a ou là",
      xpReward: 24,
      story: {
        hook: "Encore trois mots jumeaux à l'oreille, avec des rôles bien différents.",
        concreteExample: "Regarde : il a laissé son sac ___. Est-ce que c'est la, l'a ou là ?",
        reveal: "On essaie de remplacer par ici : il a laissé son sac ici, ça fonctionne. Là indique un lieu, avec un accent grave. La est un article (remplaçable par les au pluriel), l'a vient du verbe avoir (remplaçable par l'avait).",
        bridgeToConcept: "La est un article ou un pronom (remplaçable par les). L'a vient du verbe avoir (remplaçable par l'avait). Là indique un lieu (remplaçable par ici).",
        illustrationEmoji: "📍"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "La maîtresse explique la leçon : on peut dire les maîtresses au pluriel, donc la.", illustrationEmoji: "👩‍🏫" },
            { text: "Il l'a félicité pour son dessin : on peut dire il l'avait félicité, donc l'a.", illustrationEmoji: "🎨" }
          ]
        },
        {
          title: "Où est là ?",
          steps: [
            { text: "Pose ton sac là : là indique un lieu, comme ici.", illustrationEmoji: "📍" },
            { text: "Le stylo est resté là-bas, sur la table.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : ___ maîtresse arrive. (la/l'a/là)", answer: "La", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "La est un article, on peut dire les maîtresses au pluriel.", strictAccents: true },
        { order: 2, prompt: "Complète : Il ___ félicité pour son dessin. (la/l'a/là)", answer: "l'a", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "On peut dire il l'avait félicité, donc on écrit l'a, avec une apostrophe.", strictAccents: true },
        { order: 3, prompt: "Complète : Pose ton sac ___. (la/l'a/là)", answer: "là", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Là indique un lieu, comme ici, avec un accent grave.", strictAccents: true },
        { order: 4, prompt: "Complète : Balkis ___ range dans son sac. (la/l'a/là)", answer: "la", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "La remplace un nom féminin singulier (par exemple la trousse), on peut dire les au pluriel.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Le livre est resté ___, sur la table.",
          options: ["là", "la", "l'a"],
          answer: "là",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Là indique un lieu précis, avec un accent grave.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les trois mots. ___ (La) maîtresse ___ (l'a) félicité et lui a dit de le poser ___ (là).", answer: "La l'a là", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "La maîtresse (article), l'a félicité (l'avait félicité fonctionne), là (indique un lieu précis).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Les tables de multiplication de 10 et de 11",
      xpReward: 24,
      story: {
        hook: "Imagine compter des crayons par paquets de 10, ou des œufs par boîtes de 11.",
        concreteExample: "Il y a 4 boîtes de 10 crayons. Combien de crayons en tout ?",
        reveal: "4 fois 10, ça fait 40. Pour multiplier par 10, on ajoute simplement un zéro !",
        bridgeToConcept: "Multiplier par 10 : on ajoute un zéro (3 x 10 = 30). Multiplier par 11 (pour les nombres de 1 à 9) : on répète le chiffre (4 x 11 = 44).",
        illustrationEmoji: "🔟"
      },
      examples: [
        {
          title: "La table de 10",
          steps: [
            { text: "7 x 10 : on ajoute un zéro, ça fait 70.", illustrationEmoji: "➕" },
            { text: "9 x 10 : ça fait 90.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "La table de 11 (nombres de 1 à 9)",
          steps: [
            { text: "3 x 11 : on répète le chiffre 3, ça fait 33.", illustrationEmoji: "🔍" },
            { text: "7 x 11 : on répète le chiffre 7, ça fait 77.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 6 x 10", answer: "60", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "6 x 10 = 60, on ajoute un zéro." },
        { order: 2, prompt: "Calcule : 8 x 10", answer: "80", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "8 x 10 = 80, on ajoute un zéro." },
        { order: 3, prompt: "Calcule : 5 x 11", answer: "55", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "5 x 11 = 55, on répète le chiffre 5." },
        { order: 4, prompt: "Calcule : 8 x 11", answer: "88", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "8 x 11 = 88, on répète le chiffre 8." },
        {
          order: 5,
          type: "mcq",
          prompt: "Calcule : 9 x 11",
          options: ["99", "91", "98"],
          answer: "99",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "9 x 11 = 99, on répète le chiffre 9."
        },
        { order: 6, prompt: "Défi : calcule 12 x 10, puis ajoute 9 x 11 au résultat.", answer: "219", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "12 x 10 = 120, 9 x 11 = 99, 120 + 99 = 219." }
      ]
    }
  ]
};
