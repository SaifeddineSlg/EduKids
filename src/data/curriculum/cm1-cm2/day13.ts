import { DayCurriculum } from "@/models/types";

export const day13: DayCurriculum = {
  dayNumber: 13,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Additionner et soustraire des nombres décimaux",
      xpReward: 22,
      story: {
        hook: "Tu sais déjà lire les nombres décimaux. Apprenons maintenant à les additionner et à les soustraire.",
        concreteExample: "Bayrem a 3,5 euros et Balkis lui donne 2,25 euros de plus. Combien a-t-il maintenant ?",
        reveal: "3,5 + 2,25 = 5,75 : on aligne bien la virgule et on additionne les dixièmes et les centièmes comme les autres chiffres.",
        bridgeToConcept: "Pour additionner ou soustraire des nombres décimaux, on aligne toujours la virgule.",
        illustrationEmoji: "💶"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "4,2 + 1,5 = 5,7 : on additionne les dixièmes (2+5=7).", illustrationEmoji: "🔢" },
            { text: "6,8 - 2,3 = 4,5 : on soustrait les dixièmes (8-3=5).", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "3,25 + 1,50 = 4,75 : on aligne bien les centièmes.", illustrationEmoji: "🔍" },
            { text: "5,00 - 1,75 = 3,25 : attention aux retenues sur les centièmes.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 4,2 + 1,5", answer: "5,7", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On aligne la virgule : 4,2 + 1,5 = 5,7." },
        { order: 2, prompt: "Calcule : 6,8 - 2,3", answer: "4,5", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "On aligne la virgule : 6,8 - 2,3 = 4,5." },
        { order: 3, prompt: "Calcule : 3,25 + 1,50", answer: "4,75", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On aligne les centièmes : 3,25 + 1,50 = 4,75." },
        { order: 4, prompt: "Calcule : 7,5 - 2,5", answer: "5", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "7,5 - 2,5 = 5, les dixièmes s'annulent." },
        { order: 5, prompt: "Calcule : 2,4 + 3,8", answer: "6,2", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "2,4 + 3,8 : 4+8=12 dixièmes, on pose 2 et on retient 1 unité, ce qui donne 6,2." },
        { order: 6, prompt: "Défi : Bayrem a 5,50 euros. Il achète un jouet à 2,75 euros. Combien lui reste-t-il ?", answer: "2,75", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "5,50 - 2,75 = 2,75 : il lui reste 2,75 euros." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "L'accord du participe passé avec être",
      xpReward: 22,
      story: {
        hook: "Tu as appris que certains verbes forment leur passé composé avec être. Voyons bien comment accorder le participe.",
        concreteExample: "Balkis est partie. Bayrem est parti. Pourquoi partie et parti ne s'écrivent-ils pas pareil ?",
        reveal: "Avec être, le participe passé s'accorde comme un adjectif avec le sujet : Balkis (fille) est partie, avec un e. Bayrem (garçon) est parti, sans e. Au pluriel, on ajoute un s.",
        bridgeToConcept: "Avec être, le participe passé s'accorde en genre et en nombre avec le sujet : parti, partie, partis, parties.",
        illustrationEmoji: "🚶"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Les filles sont parties tôt ce matin.", illustrationEmoji: "🚶‍♀️" },
            { text: "Les garçons sont partis après le déjeuner.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Cherche si le sujet est féminin ou masculin, singulier ou pluriel.", illustrationEmoji: "🔍" },
            { text: "Ajoute e pour le féminin, s pour le pluriel, comme pour un adjectif.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Balkis est ____ (parti) tôt ce matin.", answer: "partie", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Balkis est une fille, le participe passé s'accorde au féminin : partie, avec un e.", strictAccents: true },
        { order: 2, prompt: "Complète : Bayrem est ____ (parti) après le déjeuner.", answer: "parti", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Bayrem est un garçon, le participe passé reste au masculin singulier : parti, sans e.", strictAccents: true },
        { order: 3, prompt: "Complète : Les filles sont ____ (parti) ensemble.", answer: "parties", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Les filles est féminin pluriel, le participe passé s'accorde : parties, avec un e et un s.", strictAccents: true },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Les garçons sont ___ (arriver) en retard.",
          options: ["arrivés", "arrivée", "arrivé"],
          answer: "arrivés",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Les garçons est masculin pluriel, le participe passé s'accorde : arrivés, avec un s.",
          strictAccents: true
        },
        { order: 5, prompt: "Complète : Ma sœur est ____ (venir) me voir hier.", answer: "venue", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Ma sœur est féminin singulier, le participe passé s'accorde : venue, avec un e.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. Mes cousines sont ____ (arriver) et mon cousin est ____ (rester) à la maison.", answer: "arrivées resté", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Tu étais proche ! Mes cousines est féminin pluriel : arrivées. Mon cousin est masculin singulier : resté.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Les prépositions",
      xpReward: 22,
      story: {
        hook: "De petits mots invariables introduisent souvent un complément, en indiquant un lieu, un temps ou une manière.",
        concreteExample: "Regarde : Balkis part à la piscine avec sa sœur. Quels petits mots introduisent les compléments ?",
        reveal: "À et avec sont des prépositions : elles introduisent un complément (à la piscine, avec sa sœur) et ne changent jamais de forme.",
        bridgeToConcept: "Une préposition (à, de, dans, sur, sous, avec, pour, chez, sans, par...) introduit un complément et reste invariable.",
        illustrationEmoji: "🧭"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Le chat dort sous la table.", illustrationEmoji: "🐱" },
            { text: "Nous partons chez nos grands-parents.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Repère le petit mot invariable placé juste avant le complément.", illustrationEmoji: "🔍" },
            { text: "À, de, dans, sur, sous, avec, pour, chez, sans, par sont des prépositions fréquentes.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans le chat dort sous la table, quelle est la préposition ?", answer: "sous", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Sous introduit le complément la table, c'est une préposition." },
        { order: 2, prompt: "Dans nous partons chez nos grands-parents, quelle est la préposition ?", answer: "chez", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Chez introduit le complément nos grands-parents, c'est une préposition." },
        { order: 3, prompt: "Dans elle marche avec son frère, quelle est la préposition ?", answer: "avec", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec introduit le complément son frère, c'est une préposition." },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la préposition : Il travaille ___ son bureau.",
          options: ["dans", "très", "joli"],
          answer: "dans",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Dans introduit le complément son bureau, c'est une préposition."
        },
        { order: 5, prompt: "Dans ce cadeau est pour toi, quelle est la préposition ?", answer: "pour", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Pour introduit le complément toi, c'est une préposition." },
        { order: 6, prompt: "Défi : dans elle voyage sans ses parents pendant les vacances, cite la préposition.", answer: "sans", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Sans introduit le complément ses parents, c'est une préposition." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Peu, peut ou peux",
      xpReward: 22,
      story: {
        hook: "Trois petits mots qui se prononcent presque pareil : une petite quantité, et le verbe pouvoir.",
        concreteExample: "Bayrem ___ venir demain. Est-ce peu, peut ou peux ?",
        reveal: "On peut dire Bayrem pouvait venir demain, donc c'est peut, le verbe pouvoir à la 3e personne du singulier. Peu exprime une petite quantité (un peu de sucre), et peux s'utilise avec je ou tu.",
        bridgeToConcept: "Peu exprime une petite quantité. Peut est le verbe pouvoir avec il/elle (remplace par pouvait). Peux est le verbe pouvoir avec je/tu.",
        illustrationEmoji: "🤏"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "J'ai mis un peu de sucre dans mon thé : petite quantité.", illustrationEmoji: "🍵" },
            { text: "Il peut venir demain : verbe pouvoir, on peut dire il pouvait.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce du test",
          steps: [
            { text: "Remplace par pouvait : si ça marche, c'est peut. Avec je ou tu, écris peux.", illustrationEmoji: "🔍" },
            { text: "Sinon, s'il s'agit d'une petite quantité, écris peu.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Bayrem ___ venir demain. (peu/peut/peux)", answer: "peut", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On peut dire Bayrem pouvait venir, donc on écrit peut, le verbe pouvoir.", strictAccents: true },
        { order: 2, prompt: "Complète : J'ai mis un ___ de sucre dans mon thé. (peu/peut/peux)", answer: "peu", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Il s'agit d'une petite quantité, donc on écrit peu, sans t ni x.", strictAccents: true },
        { order: 3, prompt: "Complète : Tu ___ m'aider si tu veux. (peu/peut/peux)", answer: "peux", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec tu, le verbe pouvoir s'écrit peux, avec un x.", strictAccents: true },
        { order: 4, prompt: "Complète : Je ___ finir ce travail avant ce soir. (peu/peut/peux)", answer: "peux", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Avec je, le verbe pouvoir s'écrit peux, avec un x.", strictAccents: true },
        { order: 5, prompt: "Complète : Elle a ___ d'amis dans cette ville. (peu/peut/peux)", answer: "peu", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Il s'agit d'une petite quantité, donc on écrit peu, sans t ni x.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. Tu ___ (peux) m'aider un ___ (peu) si tu as le temps.", answer: "peux peu", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Tu étais proche ! Avec tu, le verbe pouvoir donne peux. Ensuite, un peu exprime une petite quantité.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Multiplier par 5, par 50 et par 25",
      xpReward: 22,
      story: {
        hook: "Il existe des astuces bien pratiques pour multiplier rapidement par 5, 50 ou 25.",
        concreteExample: "Combien font 24 x 5 ?",
        reveal: "24 x 5 = 24 x 10 divisé par 2 = 240 divisé par 2 = 120. Multiplier par 5, c'est multiplier par 10 puis diviser par 2.",
        bridgeToConcept: "Multiplier par 5 : x10 puis diviser par 2. Par 50 : x100 puis diviser par 2. Par 25 : x100 puis diviser par 4.",
        illustrationEmoji: "⚡"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "16 x 5 = 160 divisé par 2 = 80.", illustrationEmoji: "🔢" },
            { text: "12 x 50 = 1200 divisé par 2 = 600.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "8 x 25 = 800 divisé par 4 = 200.", illustrationEmoji: "🔍" },
            { text: "20 x 5 = 200 divisé par 2 = 100.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 14 x 5", answer: "70", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "14 x 10 = 140, divisé par 2 = 70." },
        { order: 2, prompt: "Calcule : 18 x 5", answer: "90", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "18 x 10 = 180, divisé par 2 = 90." },
        { order: 3, prompt: "Calcule : 10 x 50", answer: "500", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "10 x 100 = 1000, divisé par 2 = 500." },
        { order: 4, prompt: "Calcule : 6 x 25", answer: "150", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "6 x 100 = 600, divisé par 4 = 150." },
        { order: 5, prompt: "Calcule : 22 x 5", answer: "110", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "22 x 10 = 220, divisé par 2 = 110." },
        { order: 6, prompt: "Défi : calcule 4 x 25, puis ajoute 8 x 5. Quel est le résultat final ?", answer: "140", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "4 x 25 = 100, et 8 x 5 = 40, donc 100 + 40 = 140." }
      ]
    }
  ]
};
