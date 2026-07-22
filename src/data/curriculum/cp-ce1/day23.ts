import { DayCurriculum } from "@/models/types";

export const day23: DayCurriculum = {
  dayNumber: 23,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Lire l'heure : les demi-heures",
      xpReward: 24,
      story: {
        hook: "La grande aiguille peut aussi s'arrêter juste entre deux nombres, sur le 6.",
        concreteExample: "Regarde une horloge où la petite aiguille est entre le 3 et le 4, et la grande aiguille est sur le 6.",
        reveal: "Quand la grande aiguille est sur le 6, il est et demie. Ici, il est 3 heures et demie, car la petite aiguille vient de dépasser le 3.",
        bridgeToConcept: "Quand la grande aiguille est sur le 6, on dit l'heure et demie.",
        illustrationEmoji: "🕜"
      },
      examples: [
        {
          title: "Lire une demi-heure",
          steps: [
            { text: "La petite aiguille est entre le 8 et le 9, la grande est sur le 6.", illustrationEmoji: "🕣" },
            { text: "Il est donc 8 heures et demie.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "La petite aiguille est entre le 1 et le 2, la grande est sur le 6.", illustrationEmoji: "🕜" },
            { text: "Il est donc 1 heure et demie.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "La petite aiguille est entre le 2 et le 3, la grande est sur le 6. Quelle heure est-il ?", answer: "2 heures et demie", acceptedAnswers: ["2h30"], kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "La grande aiguille sur le 6 veut dire et demie : il est 2 heures et demie." },
        { order: 2, prompt: "La petite aiguille est entre le 5 et le 6, la grande est sur le 6. Quelle heure est-il ?", answer: "5 heures et demie", acceptedAnswers: ["5h30"], kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "La grande aiguille sur le 6 veut dire et demie : il est 5 heures et demie." },
        {
          order: 3,
          type: "mcq",
          prompt: "Quand la grande aiguille est sur le 6, que dit-on ?",
          options: ["et demie", "et quart", "pile"],
          answer: "et demie",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Sur le 6, on dit toujours et demie."
        },
        { order: 4, prompt: "La petite aiguille est entre le 9 et le 10, la grande est sur le 6. Quelle heure est-il ?", answer: "9 heures et demie", acceptedAnswers: ["9h30"], kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "La grande aiguille sur le 6 veut dire et demie : il est 9 heures et demie." },
        {
          order: 5,
          type: "mcq",
          prompt: "La petite aiguille est entre le 11 et le 12, la grande est sur le 6. Quelle heure est-il ?",
          options: ["11 heures et demie", "11 heures pile", "12 heures et demie"],
          answer: "11 heures et demie",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "La petite aiguille vient de dépasser le 11 : il est 11 heures et demie."
        },
        { order: 6, prompt: "Défi : la petite aiguille est entre le 6 et le 7, la grande est sur le 6. Quelle heure est-il ? Puis dis quelle heure il sera dans une demi-heure.", answer: "6 heures et demie 7 heures", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Il est 6 heures et demie. Une demi-heure plus tard, la grande aiguille revient sur le 12 et il est 7 heures." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le verbe boire au présent",
      xpReward: 24,
      story: {
        hook: "Un verbe permet de dire qu'on avale un liquide.",
        concreteExample: "Écoute : je bois de l'eau. Tu bois du lait. Il boit du jus.",
        reveal: "Ce verbe qui dit qu'on avale un liquide, c'est le verbe boire. Je bois, tu bois, il boit, elle boit : ça se prononce presque pareil mais ne s'écrit pas tout à fait de la même façon.",
        bridgeToConcept: "Au présent : je bois, tu bois, il boit, elle boit.",
        illustrationEmoji: "🥛"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Je bois de l'eau à midi.", illustrationEmoji: "💧" },
            { text: "Tu bois du lait au petit-déjeuner.", illustrationEmoji: "🥛" },
            { text: "Elle boit du jus d'orange.", illustrationEmoji: "🍊" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Je bois et tu bois s'écrivent pareil : b-o-i-s.", illustrationEmoji: "🎵" },
            { text: "Il boit et elle boit s'écrivent avec un t : b-o-i-t.", illustrationEmoji: "🎵" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je ____ (boire) de l'eau.", answer: "bois", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec je, le verbe boire devient bois : je bois de l'eau.", strictAccents: true },
        { order: 2, prompt: "Complète : Tu ____ (boire) ton chocolat chaud.", answer: "bois", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Avec tu, le verbe boire devient bois, comme avec je.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Il ____ (boire) du jus.",
          options: ["bois", "boit", "buvons"],
          answer: "boit",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec il, le verbe boire devient boit, avec un t.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Elle ____ (boire) du lait.", answer: "boit", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Avec elle, comme avec il, le verbe boire devient boit.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Je ____ (boire) mon jus d'orange.",
          options: ["bois", "boit", "buvez"],
          answer: "bois",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec je, on écrit bois, terminé par un s.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Je ____ (boire) de l'eau et tu ____ (boire) du lait.", answer: "bois bois", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Je bois et tu bois s'écrivent tous les deux bois, avec un s à la fin.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Les mots invariables",
      xpReward: 24,
      story: {
        hook: "Certains petits mots ne changent jamais, quelle que soit la phrase.",
        concreteExample: "Regarde : dans, sur, avec, mais, et. Ces mots restent toujours pareils.",
        reveal: "Ces mots qui ne changent jamais s'appellent des mots invariables. Ils n'ont ni masculin, ni féminin, ni singulier, ni pluriel.",
        bridgeToConcept: "Un mot invariable garde toujours la même écriture, dans toutes les phrases.",
        illustrationEmoji: "🔒"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Le chat est sur la table. Les chats sont sur les tables. Sur ne change jamais.", illustrationEmoji: "🐱" },
            { text: "Je joue avec mon frère. Je joue avec mes frères. Avec ne change jamais.", illustrationEmoji: "👦" }
          ]
        },
        {
          title: "L'astuce pour les reconnaître",
          steps: [
            { text: "Essaie de mettre la phrase au pluriel.", illustrationEmoji: "🔍" },
            { text: "Si le petit mot ne change pas, c'est un mot invariable.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Le chat dort dans la maison. Le mot dans change-t-il si on dit les chats dorment dans les maisons ? (oui ou non)", answer: "non", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Dans reste toujours pareil, même au pluriel : c'est un mot invariable." },
        { order: 2, prompt: "Parmi ces mots, lequel est invariable : avec ou chat ?", answer: "avec", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Avec ne change jamais, contrairement à chat qui peut devenir chats." },
        {
          order: 3,
          type: "mcq",
          prompt: "Quel mot est invariable dans la phrase je joue avec ma sœur ?",
          options: ["avec", "joue", "sœur"],
          answer: "avec",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Avec ne change jamais : c'est un mot invariable."
        },
        { order: 4, prompt: "Parmi ces mots, lequel est invariable : mais ou pomme ?", answer: "mais", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Mais ne change jamais, contrairement à pomme qui peut devenir pommes." },
        {
          order: 5,
          type: "mcq",
          prompt: "Quel mot est invariable dans la phrase le ballon est sous la table ?",
          options: ["sous", "ballon", "table"],
          answer: "sous",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Sous ne change jamais : c'est un mot invariable."
        },
        { order: 6, prompt: "Défi : cite deux mots invariables parmi cette liste : dans, chien, avec, maison.", answer: "dans avec", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Dans et avec ne changent jamais, contrairement à chien et maison qui peuvent devenir chiens et maisons." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "La lettre g : son doux et son dur",
      xpReward: 24,
      story: {
        hook: "La lettre g peut chanter deux musiques bien différentes selon la lettre qui la suit.",
        concreteExample: "Écoute : dans gomme, le g fait un son dur [g]. Dans girafe, le g fait un son doux [ʒ].",
        reveal: "Devant a, o, u, la lettre g fait le son dur, comme dans gomme, gâteau, légume. Devant e, i, la lettre g fait le son doux, comme dans girafe, pigeon, magie.",
        bridgeToConcept: "G devant a, o, u fait un son dur ; g devant e, i fait un son doux.",
        illustrationEmoji: "🦒"
      },
      examples: [
        {
          title: "Le son dur de g",
          steps: [
            { text: "Une gomme, un gâteau, une figure : devant o, â et u, le g est dur.", illustrationEmoji: "🍰" },
            { text: "Un légume : devant u, le g est dur.", illustrationEmoji: "🥦" }
          ]
        },
        {
          title: "Le son doux de g",
          steps: [
            { text: "Une girafe, un pigeon : devant i et e, le g est doux.", illustrationEmoji: "🦒" },
            { text: "Pour garder le son doux devant a ou o, on ajoute un e : il nageait, une orangeade.", illustrationEmoji: "💡" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans le mot gomme, quel son fait la lettre g : dur ou doux ?", answer: "dur", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Devant o, la lettre g fait un son dur : gomme.", strictAccents: true },
        { order: 2, prompt: "Dans le mot girafe, quel son fait la lettre g : dur ou doux ?", answer: "doux", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Devant i, la lettre g fait un son doux : girafe.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Quel son fait le g dans le mot pigeon ?",
          options: ["dur", "doux"],
          answer: "doux",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Devant e, la lettre g fait un son doux : pigeon.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : une f___ure (figure). (g ou j)", answer: "g", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Figure s'écrit avec un g, qui fait un son dur devant u.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Quel mot a un g qui fait un son dur ?",
          options: ["légume", "girafe", "pigeon"],
          answer: "légume",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Dans légume, le g est suivi de u : il fait un son dur.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : le g de gâteau et le g de nageur font-ils le même son ? (oui ou non)", answer: "non", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Gâteau a un g dur (devant â) et nageur a un g doux (devant e) : ce sont deux sons différents.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Ajouter 30 à un nombre",
      xpReward: 24,
      story: {
        hook: "Ajouter 30, c'est ajouter 3 dizaines d'un coup.",
        concreteExample: "24 + 30 : tu ajoutes 3 dizaines à 24.",
        reveal: "24 + 30 = 54, car on ajoute seulement aux dizaines : 2 dizaines + 3 dizaines = 5 dizaines. Les unités ne changent pas.",
        bridgeToConcept: "Pour ajouter 30, on ajoute 3 dizaines et les unités ne changent pas.",
        illustrationEmoji: "➕"
      },
      examples: [
        {
          title: "Ajouter 30",
          steps: [
            { text: "15 + 30 : 1 dizaine + 3 dizaines = 4 dizaines.", illustrationEmoji: "➕" },
            { text: "Donc 15 + 30 = 45.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "42 + 30 : 4 dizaines + 3 dizaines = 7 dizaines.", illustrationEmoji: "➕" },
            { text: "Donc 42 + 30 = 72.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 23 + 30", answer: "53", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "2 dizaines + 3 dizaines = 5 dizaines. Donc 23 + 30 = 53." },
        { order: 2, prompt: "Calcule : 16 + 30", answer: "46", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "1 dizaine + 3 dizaines = 4 dizaines. Donc 16 + 30 = 46." },
        {
          order: 3,
          type: "mcq",
          prompt: "Quand on ajoute 30, que se passe-t-il ?",
          options: ["On ajoute 3 dizaines", "On ajoute 3 unités", "On ajoute 30 unités et 3 dizaines"],
          answer: "On ajoute 3 dizaines",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Ajouter 30, c'est ajouter 3 dizaines. Les unités ne changent pas."
        },
        { order: 4, prompt: "Calcule : 45 + 30", answer: "75", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "4 dizaines + 3 dizaines = 7 dizaines. Donc 45 + 30 = 75." },
        {
          order: 5,
          type: "mcq",
          prompt: "Calcule : 38 + 30",
          options: ["68", "58", "78"],
          answer: "68",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "3 dizaines + 3 dizaines = 6 dizaines. Donc 38 + 30 = 68."
        },
        { order: 6, prompt: "Défi : calcule 27 + 30, puis ajoute encore 30 au résultat.", answer: "87", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "27 + 30 = 57, puis 57 + 30 = 87." }
      ]
    }
  ]
};
