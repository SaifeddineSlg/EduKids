import { DayCurriculum } from "@/models/types";

export const day02: DayCurriculum = {
  dayNumber: 2,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "La division posée simple",
      xpReward: 22,
      story: {
        hook: "Imagine que tu dois partager 84 images entre 4 albums, en parts égales.",
        concreteExample: "84 divisé par 4 : combien de fois 4 dans 8 ? 2 fois (8), il reste 0. Combien de fois 4 dans 4 ? 1 fois, il reste 0.",
        reveal: "Le résultat est 21. On pose la division comme une potence, en cherchant combien de fois le diviseur entre dans chaque chiffre.",
        bridgeToConcept: "Poser une division : on cherche combien de fois le diviseur entre dans le nombre, chiffre par chiffre.",
        illustrationEmoji: "📷"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "63 divisé par 3 : combien de fois 3 dans 6 ? 2 fois, reste 0.", illustrationEmoji: "🔢" },
            { text: "Combien de fois 3 dans 3 ? 1 fois, reste 0. Résultat : 21.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "96 divisé par 4 : combien de fois 4 dans 9 ? 2 fois (8), reste 1.", illustrationEmoji: "🔍" },
            { text: "On abaisse le 6 : 16 divisé par 4 = 4. Résultat : 24.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 48 divisé par 4", answer: "12", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "4 dans 4 = 1, 4 dans 8 = 2, résultat 12." },
        { order: 2, prompt: "Calcule : 63 divisé par 3", answer: "21", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "3 dans 6 = 2, 3 dans 3 = 1, résultat 21." },
        { order: 3, prompt: "Calcule : 84 divisé par 4", answer: "21", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "4 dans 8 = 2, 4 dans 4 = 1, résultat 21." },
        { order: 4, prompt: "Calcule : 96 divisé par 4", answer: "24", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "4 dans 9 = 2 reste 1, on abaisse le 6 : 16 divisé par 4 = 4, résultat 24." },
        { order: 5, prompt: "Calcule : 55 divisé par 5", answer: "11", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "5 dans 5 = 1, 5 dans 5 = 1, résultat 11." },
        { order: 6, prompt: "Défi : calcule 72 divisé par 6", answer: "12", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "6 dans 7 = 1 reste 1, on abaisse le 2 : 12 divisé par 6 = 2, résultat 12." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le passé composé avec être",
      xpReward: 22,
      story: {
        hook: "Certains verbes n'utilisent pas avoir au passé composé, mais leur cousin être.",
        concreteExample: "Écoute : hier, je suis allé à la piscine. Ce temps utilise être (suis) puis le participe passé (allé).",
        reveal: "Certains verbes de mouvement (aller, venir, partir, arriver, entrer, sortir...) forment leur passé composé avec être. Avec être, le participe passé s'accorde avec le sujet.",
        bridgeToConcept: "Passé composé avec être : je suis allé(e), tu es allé(e), il est allé, elle est allée, ils sont allés.",
        illustrationEmoji: "🏊"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Elle est partie tôt ce matin (partie s'accorde au féminin).", illustrationEmoji: "🚶‍♀️" },
            { text: "Ils sont arrivés en retard (arrivés s'accorde au pluriel).", illustrationEmoji: "🏃" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Avec être, le participe passé change selon le sujet : -e pour féminin, -s pour pluriel.", illustrationEmoji: "🔍" },
            { text: "Balkis est venue. Balkis et Bayrem sont venus.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Hier, je ____ (être) allé à la piscine.", answer: "suis", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec je, être au présent devient suis : je suis allé." },
        { order: 2, prompt: "Complète : Tu ____ (être) parti tôt ce matin.", answer: "es", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Avec tu, être au présent devient es : tu es parti." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Elle ____ arrivée en avance.",
          options: ["est", "es", "sont"],
          answer: "est",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Avec elle, être au présent devient est : elle est arrivée."
        },
        { order: 4, prompt: "Complète : Nous ____ (être) venus vous voir.", answer: "sommes", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Avec nous, être au présent devient sommes : nous sommes venus." },
        { order: 5, prompt: "Complète : Ils ____ (être) sortis dans le jardin.", answer: "sont", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Avec ils, être au présent devient sont : ils sont sortis." },
        { order: 6, prompt: "Défi : complète les deux mots. Balkis ____ (être) venue et Bayrem ____ (être) resté à la maison.", answer: "est est", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Balkis est venue et Bayrem est resté : les deux sont au singulier avec est." }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Les pronoms personnels sujets",
      xpReward: 22,
      story: {
        hook: "Imagine que tu remplaces un nom trop long par un petit mot rapide.",
        concreteExample: "Regarde : Balkis joue dans le jardin. Balkis joue → ___ joue. Quel petit mot remplace Balkis ?",
        reveal: "Elle remplace Balkis. Les pronoms personnels sujets (je, tu, il, elle, nous, vous, ils, elles) remplacent le nom qui fait l'action, pour ne pas le répéter.",
        bridgeToConcept: "Les pronoms personnels sujets : je, tu, il, elle, on, nous, vous, ils, elles.",
        illustrationEmoji: "🔄"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Bayrem mange une pomme → Il mange une pomme.", illustrationEmoji: "🍎" },
            { text: "Balkis et Bayrem jouent → Ils jouent.", illustrationEmoji: "👫" }
          ]
        },
        {
          title: "L'astuce pour choisir le bon pronom",
          steps: [
            { text: "Une fille ou plusieurs filles → elle ou elles.", illustrationEmoji: "🔍" },
            { text: "Un garçon, une chose ou un groupe mixte → il ou ils.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Remplace Balkis par un pronom : Balkis joue dans le jardin.", answer: "elle", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Balkis est une fille, on la remplace par elle." },
        { order: 2, prompt: "Remplace Bayrem par un pronom : Bayrem mange une pomme.", answer: "il", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Bayrem est un garçon, on le remplace par il." },
        { order: 3, prompt: "Remplace Balkis et Bayrem par un pronom : Balkis et Bayrem jouent ensemble.", answer: "ils", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Un groupe mixte se remplace par ils." },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne réponse : quel pronom remplace les filles ?",
          options: ["elles", "ils", "il"],
          answer: "elles",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Un groupe de filles se remplace par elles."
        },
        { order: 5, prompt: "Remplace le vélo par un pronom : Le vélo roule vite.", answer: "il", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Le vélo est masculin singulier, on le remplace par il." },
        { order: 6, prompt: "Défi : remplace les deux groupes de mots par des pronoms. Ma sœur et moi lisons, pendant que mes cousines dessinent.", answer: "nous elles", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Ma sœur et moi devient nous, mes cousines devient elles." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "C'est ou s'est",
      xpReward: 22,
      story: {
        hook: "Imagine deux mots jumeaux qui se prononcent pareil mais s'écrivent différemment.",
        concreteExample: "Regarde : Elle ___ trompée de chemin. Est-ce que c'est c'est ou s'est ?",
        reveal: "On peut dire elle s'était trompée, donc c'est s'est (avec un verbe pronominal, comme se tromper). C'est s'utilise pour désigner (c'est mon livre).",
        bridgeToConcept: "S'est s'utilise avec un verbe pronominal (se laver, se tromper...) au passé composé. C'est sert à désigner ou présenter quelque chose.",
        illustrationEmoji: "🪞"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "C'est mon cahier : c'est présente quelque chose.", illustrationEmoji: "📓" },
            { text: "Il s'est lavé les mains : s'est vient du verbe se laver.", illustrationEmoji: "🧼" }
          ]
        },
        {
          title: "L'astuce du test",
          steps: [
            { text: "Essaie de dire s'était à la place : si ça marche, c'est s'est.", illustrationEmoji: "🔍" },
            { text: "Si ça ne marche pas, c'est c'est.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : ___ mon livre préféré. (c'est/s'est)", answer: "c'est", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On ne peut pas dire s'était ici, donc c'est c'est." },
        { order: 2, prompt: "Complète : Il ___ trompé de route. (c'est/s'est)", answer: "s'est", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "On peut dire il s'était trompé, donc c'est s'est." },
        { order: 3, prompt: "Complète : ___ une belle journée aujourd'hui. (c'est/s'est)", answer: "c'est", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On ne peut pas dire s'était ici, donc c'est c'est." },
        { order: 4, prompt: "Complète : Elle ___ coiffée avant de partir. (c'est/s'est)", answer: "s'est", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "On peut dire elle s'était coiffée, donc c'est s'est." },
        { order: 5, prompt: "Complète : ___ décidé, nous partons demain. (c'est/s'est)", answer: "c'est", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "On ne peut pas dire s'était ici, donc c'est c'est." },
        { order: 6, prompt: "Défi : complète les deux mots. ___ (c'est) le chat qui ___ (s'est) caché sous le lit.", answer: "c'est s'est", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "C'est le chat (présentation) qui s'est caché (verbe pronominal se cacher)." }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "La table de multiplication de 7",
      xpReward: 22,
      story: {
        hook: "Imagine que tu comptes les jours de plusieurs semaines complètes.",
        concreteExample: "Il y a 3 semaines. Combien de jours en tout ?",
        reveal: "3 fois 7, ça fait 21. Bravo, tu as trouvé le nombre total de jours !",
        bridgeToConcept: "La table de 7 : 1x7=7, 2x7=14, 3x7=21, 4x7=28, 5x7=35...",
        illustrationEmoji: "📅"
      },
      examples: [
        {
          title: "La table de 7",
          steps: [
            { text: "7 x 4 : c'est 7 x 2 (14) doublé, donc 28.", illustrationEmoji: "🔍" },
            { text: "7 x 6 : c'est 7 x 5 (35) plus 7, donc 42.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour la table de 7",
          steps: [
            { text: "Utilise la table de 5 puis ajoute deux fois le nombre.", illustrationEmoji: "🔍" },
            { text: "7 x 8 : 5 x 8 = 40, plus 2 x 8 = 16, total 56.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 7 x 3", answer: "21", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "7 x 3 = 21." },
        { order: 2, prompt: "Calcule : 7 x 4", answer: "28", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "7 x 4 = 28." },
        { order: 3, prompt: "Calcule : 7 x 5", answer: "35", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "7 x 5 = 35." },
        { order: 4, prompt: "Calcule : 7 x 6", answer: "42", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "7 x 6 = 42." },
        { order: 5, prompt: "Calcule : 7 x 8", answer: "56", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "7 x 8 = 56." },
        { order: 6, prompt: "Défi : calcule 7 x 9", answer: "63", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "7 x 9 = 63." }
      ]
    }
  ]
};
