import { DayCurriculum } from "@/models/types";

export const day09: DayCurriculum = {
  dayNumber: 9,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Résoudre un problème à deux étapes",
      xpReward: 24,
      story: {
        hook: "Imagine une histoire mathématique où il faut faire deux calculs à la suite pour trouver la réponse.",
        concreteExample: "Bayrem a 15 billes. Il en gagne 8, puis il en donne 6 à son ami. Combien de billes a-t-il maintenant ?",
        reveal: "On fait d'abord 15 + 8 = 23, puis 23 - 6 = 17. Bayrem a maintenant 17 billes. Bravo, tu as résolu un problème à deux étapes !",
        bridgeToConcept: "Pour résoudre un problème à deux étapes, on repère l'ordre des actions et on calcule étape par étape.",
        illustrationEmoji: "🧮"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "Léa a 20 euros, elle achète un livre à 8 euros : 20 - 8 = 12 euros.", illustrationEmoji: "🔢" },
            { text: "Elle reçoit ensuite 5 euros de sa grand-mère : 12 + 5 = 17 euros.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Une classe compte 24 élèves, 3 sont absents : 24 - 3 = 21 présents.", illustrationEmoji: "🔍" },
            { text: "Ils se mettent par groupes de 3 : 21 divisé par 3 = 7 groupes.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Bayrem a 15 billes. Il en gagne 8, puis il en donne 6. Combien de billes a-t-il maintenant ?", answer: "17", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "15 + 8 = 23, puis 23 - 6 = 17 billes." },
        { order: 2, prompt: "Léa a 20 euros. Elle achète un livre à 8 euros, puis reçoit 5 euros. Combien d'euros a-t-elle maintenant ?", answer: "17", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "20 - 8 = 12, puis 12 + 5 = 17 euros." },
        { order: 3, prompt: "Une classe compte 24 élèves, 3 sont absents. Ils se mettent par groupes de 3. Combien de groupes cela fait-il ?", answer: "7", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "24 - 3 = 21 élèves présents, puis 21 divisé par 3 = 7 groupes." },
        { order: 4, prompt: "Un fermier a 30 poules. Il en vend 12, puis il en achète 5. Combien de poules a-t-il maintenant ?", answer: "23", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "30 - 12 = 18, puis 18 + 5 = 23 poules." },
        {
          order: 5,
          type: "mcq",
          prompt: "Un sac contient 18 bonbons. On en mange 6, puis on en ajoute 10. Combien y a-t-il de bonbons maintenant ?",
          options: ["22", "24", "16"],
          answer: "22",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "18 - 6 = 12, puis 12 + 10 = 22 bonbons."
        },
        { order: 6, prompt: "Défi : Balkis a 40 euros. Elle dépense 15 euros pour un jeu, puis 12 euros pour un livre. Combien lui reste-t-il ?", answer: "13", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "40 - 15 = 25 euros, puis 25 - 12 = 13 euros." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "L'impératif présent",
      xpReward: 24,
      story: {
        hook: "Imagine que tu donnes un ordre ou un conseil à quelqu'un, sans dire le sujet.",
        concreteExample: "Écoute : Range ta chambre ! Finissons nos devoirs ! Mangez vos légumes !",
        reveal: "L'impératif sert à donner un ordre, un conseil ou une consigne. On ne dit jamais le sujet (tu, nous, vous), et il n'existe qu'à trois personnes.",
        bridgeToConcept: "L'impératif présent : range (tu), rangeons (nous), rangez (vous). Attention, les verbes en -er perdent le s à la 2e personne : tu ranges devient range !",
        illustrationEmoji: "📢"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Ferme la porte, s'il te plaît !", illustrationEmoji: "🚪" },
            { text: "Prenons notre temps pour bien faire.", illustrationEmoji: "⏳" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Pour les verbes en -er, on retire le s de la 2e personne du singulier : tu manges devient mange !", illustrationEmoji: "🔍" },
            { text: "Pour les autres verbes, on garde souvent le s : finis, prends.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Mets à l'impératif (tu) : ranger ta chambre.", answer: "Range", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "À l'impératif, tu ranges perd son s final : range ta chambre !", strictAccents: true },
        { order: 2, prompt: "Mets à l'impératif (nous) : finir nos devoirs.", answer: "Finissons", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "À l'impératif, nous finissons devient finissons, sans changement.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne forme pour donner un ordre à un ami (tu) : ___ tes légumes !",
          options: ["Mange", "Manges", "Mangez"],
          answer: "Mange",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "À l'impératif avec tu, les verbes en -er perdent leur s final : mange, pas manges.",
          strictAccents: true
        },
        { order: 4, prompt: "Mets à l'impératif (vous) : fermer la fenêtre.", answer: "Fermez", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "À l'impératif avec vous, fermer devient fermez.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne forme pour donner un conseil à un groupe (vous) : ___ prudents sur la route !",
          options: ["Soyez", "Êtes", "Soyons"],
          answer: "Soyez",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "À l'impératif avec vous, le verbe être devient soyez, une forme irrégulière à apprendre par cœur.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : mets les deux verbes à l'impératif. ___ (Prendre, tu) ton manteau et ___ (aller, nous) à l'école.", answer: "Prends Allons", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Prends (tu, impératif de prendre) et allons (nous, impératif d'aller).", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Le pluriel des noms en -al",
      xpReward: 24,
      story: {
        hook: "Imagine un mot qui change complètement de fin quand il devient pluriel.",
        concreteExample: "Regarde : un cheval, des ___. Comment écrire le pluriel de cheval ?",
        reveal: "Un cheval devient des chevaux : le -al se transforme en -aux ! C'est la règle des noms en -al.",
        bridgeToConcept: "Les noms en -al font leur pluriel en -aux : un cheval → des chevaux, un journal → des journaux.",
        illustrationEmoji: "🐴"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Un animal, des animaux.", illustrationEmoji: "🐾" },
            { text: "Un journal, des journaux.", illustrationEmoji: "📰" }
          ]
        },
        {
          title: "L'exception à connaître",
          steps: [
            { text: "Un carnaval fait exception : des carnavals, avec un simple s.", illustrationEmoji: "🎭" },
            { text: "Bal et festival suivent aussi cette exception : des bals, des festivals.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : un cheval, des ___", answer: "chevaux", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Un cheval prend -aux au pluriel : des chevaux." },
        { order: 2, prompt: "Complète : un journal, des ___", answer: "journaux", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Un journal prend -aux au pluriel : des journaux." },
        { order: 3, prompt: "Complète : un animal, des ___", answer: "animaux", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Un animal prend -aux au pluriel : des animaux." },
        { order: 4, prompt: "Complète : un hôpital, des ___", answer: "hôpitaux", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Un hôpital prend -aux au pluriel : des hôpitaux." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : un carnaval, des...",
          options: ["carnavals", "carnavaux", "carnaval"],
          answer: "carnavals",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Carnaval est une exception : il prend un simple s au pluriel, pas -aux."
        },
        { order: 6, prompt: "Défi : complète les deux mots. J'ai lu un beau ___ (journal) et j'ai vu un ___ (animal) au zoo : des beaux ___ et des ___ sauvages.", answer: "journaux animaux", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Journal et animal prennent tous les deux -aux au pluriel." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "C'est ou s'est : le test avec cela est",
      xpReward: 24,
      story: {
        hook: "Deux petits mots à l'apostrophe qui se ressemblent mais n'ont pas le même rôle.",
        concreteExample: "Regarde : ___ une belle journée. Est-ce que c'est c'est ou s'est ?",
        reveal: "On essaie de remplacer par cela est : cela est une belle journée, ça fonctionne ! Donc on écrit c'est. S'est s'utilise avec un verbe pronominal, comme se lever : il s'est levé.",
        bridgeToConcept: "C'est (remplaçable par cela est) présente ou désigne quelque chose. S'est s'utilise devant un participe passé, avec un verbe pronominal (se laver, se lever...).",
        illustrationEmoji: "🔍"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "C'est une belle journée : on peut dire cela est une belle journée.", illustrationEmoji: "☀️" },
            { text: "Il s'est levé tôt ce matin : s'est vient du verbe se lever.", illustrationEmoji: "🛏️" }
          ]
        },
        {
          title: "L'astuce du test",
          steps: [
            { text: "Essaie de remplacer par cela est.", illustrationEmoji: "🔍" },
            { text: "Si ça marche, c'est c'est. Sinon, c'est s'est (verbe pronominal).", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : ___ une belle journée aujourd'hui. (c'est/s'est)", answer: "c'est", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "On peut dire cela est une belle journée, ça fonctionne. Donc on écrit c'est.", strictAccents: true },
        { order: 2, prompt: "Complète : Il ___ lavé avant de partir. (c'est/s'est)", answer: "s'est", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "On ne peut pas dire cela est lavé. Il s'agit du verbe pronominal se laver, donc on écrit s'est.", strictAccents: true },
        { order: 3, prompt: "Complète : ___ mon meilleur ami. (c'est/s'est)", answer: "c'est", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "On peut dire cela est mon meilleur ami, donc on écrit c'est.", strictAccents: true },
        { order: 4, prompt: "Complète : Elle ___ blessée en tombant. (c'est/s'est)", answer: "s'est", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Il s'agit du verbe pronominal se blesser, donc on écrit s'est.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : ___ vraiment gentil de ta part.",
          options: ["c'est", "s'est"],
          answer: "c'est",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "On peut dire cela est vraiment gentil, donc on écrit c'est.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. ___ (C'est) un beau matin et Bayrem ___ (s'est) réveillé tôt.", answer: "C'est s'est", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "C'est (cela est un beau matin) et s'est réveillé (verbe pronominal se réveiller).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Compter de 5 en 5",
      xpReward: 24,
      story: {
        hook: "Imagine que tu comptes des pièces de monnaie, en avançant toujours de 5.",
        concreteExample: "Tu commences à 0 et tu comptes de 5 en 5 : 0, 5, 10... Que vient-il après 10 ?",
        reveal: "Après 10, tu ajoutes encore 5 : ça fait 15. Compter de 5 en 5, c'est ajouter 5 à chaque fois.",
        bridgeToConcept: "Compter de 5 en 5 : 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50.",
        illustrationEmoji: "🪙"
      },
      examples: [
        {
          title: "Compter en avançant",
          steps: [
            { text: "0, 5, 10, 15, 20 : chaque nombre ajoute 5 au précédent.", illustrationEmoji: "🔍" },
            { text: "25, 30, 35, 40 : on continue toujours d'ajouter 5.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Compter en reculant",
          steps: [
            { text: "On peut aussi compter à l'envers : 50, 45, 40, 35...", illustrationEmoji: "🔍" },
            { text: "Chaque nombre retire 5 au précédent.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète la suite : 0, 5, 10, ___", answer: "15", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "10 + 5 = 15." },
        { order: 2, prompt: "Complète la suite : 15, 20, ___", answer: "25", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "20 + 5 = 25." },
        { order: 3, prompt: "Complète la suite : 25, 30, ___", answer: "35", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "30 + 5 = 35." },
        { order: 4, prompt: "Complète la suite : 35, 40, ___", answer: "45", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "40 + 5 = 45." },
        { order: 5, prompt: "Complète la suite à l'envers : 50, 45, ___", answer: "40", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "45 - 5 = 40." },
        { order: 6, prompt: "Défi : complète la suite : 20, 25, 30, ___, ___", answer: "35 40", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "30 + 5 = 35, puis 35 + 5 = 40." }
      ]
    }
  ]
};
