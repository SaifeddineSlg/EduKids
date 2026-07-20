import { DayCurriculum } from "@/models/types";

export const day14: DayCurriculum = {
  dayNumber: 14,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Les nombres décimaux : les dixièmes",
      xpReward: 24,
      story: {
        hook: "Imagine que tu mesures une longueur qui n'est pas un nombre entier, comme 3 mètres et un petit bout en plus.",
        concreteExample: "Une planche mesure 3 mètres et 5 dixièmes de mètre. Comment écrire cette mesure ?",
        reveal: "On écrit 3,5 m. La virgule sépare les mètres entiers (3) des dixièmes (5). 3,5 se lit trois virgule cinq.",
        bridgeToConcept: "Un nombre décimal a une partie entière et une partie décimale séparées par une virgule ; le premier chiffre après la virgule est le chiffre des dixièmes.",
        illustrationEmoji: "📏"
      },
      examples: [
        {
          title: "Lire un nombre décimal",
          steps: [
            { text: "4,2 se lit quatre virgule deux : 4 unités et 2 dixièmes.", illustrationEmoji: "🔢" },
            { text: "0,7 se lit zéro virgule sept : 7 dixièmes.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Comparer deux nombres décimaux",
          steps: [
            { text: "2,3 et 2,6 : la partie entière est égale (2), on compare les dixièmes : 6 est plus grand que 3, donc 2,6 est plus grand.", illustrationEmoji: "🔍" },
            { text: "5,0 est identique à 5.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans le nombre 4,2, combien y a-t-il de dixièmes ?", answer: "2", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Le chiffre après la virgule indique les dixièmes : dans 4,2, il y a 2 dixièmes." },
        { order: 2, prompt: "Écris en chiffres : trois virgule cinq.", answer: "3,5", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Trois unités et cinq dixièmes s'écrivent 3,5." },
        { order: 3, prompt: "Compare 2,3 et 2,6 : lequel est le plus grand ?", answer: "2,6", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "La partie entière est égale (2), et 6 dixièmes est plus grand que 3 dixièmes." },
        { order: 4, prompt: "Dans le nombre 7,9, combien y a-t-il d'unités entières ?", answer: "7", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Le chiffre avant la virgule indique les unités entières : dans 7,9, il y a 7 unités." },
        {
          order: 5,
          type: "mcq",
          prompt: "Comment s'écrit cinq virgule un ?",
          options: ["5,1", "5,10", "51"],
          answer: "5,1",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Cinq unités et un dixième s'écrivent 5,1."
        },
        { order: 6, prompt: "Défi : range ces nombres du plus petit au plus grand : 3,8 - 3,2 - 3,5.", answer: "3,2 3,5 3,8", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "La partie entière est égale (3), on compare les dixièmes : 2, puis 5, puis 8. L'ordre est 3,2 puis 3,5 puis 3,8." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le passé composé des verbes en -ir (participe passé en -i)",
      xpReward: 24,
      story: {
        hook: "Tu sais former le passé composé avec avoir et être, découvrons celui des verbes en -ir comme finir.",
        concreteExample: "Écoute : hier, j'ai fini mon livre. Tu as choisi un cadeau. Elle a grandi cette année.",
        reveal: "Le participe passé des verbes en -ir comme finir se termine par -i (fini, choisi, grandi), pas par -é comme les verbes en -er.",
        bridgeToConcept: "Passé composé de finir : j'ai fini, tu as fini, il a fini, nous avons fini, vous avez fini, ils ont fini.",
        illustrationEmoji: "✅"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Hier, j'ai fini mon livre avant de dormir.", illustrationEmoji: "📖" },
            { text: "Ce matin, tu as choisi ta tenue rapidement.", illustrationEmoji: "👕" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Le participe passé des verbes en -ir comme finir se termine toujours par -i, jamais par -é.", illustrationEmoji: "🔍" },
            { text: "fini, choisi, grandi, réussi...", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Hier, j'____ (finir) mon livre.", answer: "ai fini", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec j', on utilise ai (auxiliaire avoir) suivi du participe passé fini, qui se termine par -i.", strictAccents: true },
        { order: 2, prompt: "Complète : Tu ____ (choisir) ta tenue rapidement.", answer: "as choisi", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Avec tu, on utilise as (auxiliaire avoir) suivi du participe passé choisi.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Elle ____ (grandir) beaucoup cette année.",
          options: ["a grandi", "a grandit", "as grandi"],
          answer: "a grandi",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec elle, on utilise a (auxiliaire avoir) suivi du participe passé grandi, qui se termine par -i, sans t.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Nous ____ (réussir) notre exercice.", answer: "avons réussi", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Avec nous, on utilise avons (auxiliaire avoir) suivi du participe passé réussi.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Ils ____ (réfléchir) longtemps avant de répondre.",
          options: ["ont réfléchi", "ont réfléchit", "ont réfléchis"],
          answer: "ont réfléchi",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec ils, on utilise ont (auxiliaire avoir) suivi du participe passé réfléchi, qui se termine par -i.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux verbes. Vous ____ (applaudir) fort et nous ____ (finir) le spectacle avec joie.", answer: "avez applaudi avons fini", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Vous avez applaudi (avoir au présent + participe passé applaudi) et nous avons fini (avoir au présent + participe passé fini).", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Les adverbes",
      xpReward: 24,
      story: {
        hook: "Imagine un mot qui précise comment, quand ou où se passe une action, sans jamais changer de forme.",
        concreteExample: "Regarde : elle chante joyeusement. Que nous dit joyeusement sur l'action de chanter ?",
        reveal: "Joyeusement précise la manière dont elle chante. À quoi sert ce mot ? Il apporte une précision sur un verbe, un adjectif ou un autre adverbe. Comment le reconnaître ? Il ne s'accorde jamais, contrairement à l'adjectif.",
        bridgeToConcept: "L'adverbe précise le sens d'un verbe (chanter joyeusement), d'un adjectif (très grand) ou d'un autre adverbe (trop vite). Il ne s'accorde jamais.",
        illustrationEmoji: "🎯"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Elle chante joyeusement : joyeusement précise le verbe chante.", illustrationEmoji: "🎵" },
            { text: "Il court très vite : très précise l'adverbe vite.", illustrationEmoji: "🏃" }
          ]
        },
        {
          title: "L'astuce pour reconnaître un adverbe",
          steps: [
            { text: "Beaucoup d'adverbes de manière se terminent par -ment : doucement, rapidement.", illustrationEmoji: "🔍" },
            { text: "L'adverbe ne s'accorde jamais, il garde toujours la même forme.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans elle chante joyeusement, quel est l'adverbe ?", answer: "joyeusement", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Joyeusement précise comment elle chante, c'est un adverbe de manière." },
        { order: 2, prompt: "Dans il court très vite, quel mot précise l'adverbe vite ?", answer: "très", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Très précise l'adverbe vite, c'est aussi un adverbe." },
        { order: 3, prompt: "Dans nous travaillons sérieusement, quel est l'adverbe ?", answer: "sérieusement", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Sérieusement précise comment nous travaillons, c'est un adverbe de manière." },
        { order: 4, prompt: "Dans elle parle doucement, quel est l'adverbe ?", answer: "doucement", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Doucement précise comment elle parle, c'est un adverbe de manière." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis l'adverbe dans la phrase il mange lentement.",
          options: ["lentement", "mange", "il"],
          answer: "lentement",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Lentement précise comment il mange, c'est un adverbe de manière."
        },
        { order: 6, prompt: "Défi : dans il parle doucement et sourit gentiment, cite les deux adverbes.", answer: "doucement gentiment", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Doucement précise comment il parle, et gentiment précise comment il sourit : ce sont deux adverbes de manière." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Tout, tous, toute, toutes : l'accord",
      xpReward: 24,
      story: {
        hook: "Un mot qui change de forme selon le genre et le nombre du nom qu'il accompagne.",
        concreteExample: "Regarde : ___ les enfants sont venus. Comment écrire tout ici ?",
        reveal: "Enfants est masculin pluriel, donc on écrit tous, avec un s. Tout s'accorde comme un adjectif : tout (masculin singulier), toute (féminin singulier), tous (masculin pluriel), toutes (féminin pluriel).",
        bridgeToConcept: "Tout s'accorde avec le nom qui suit : tout le gâteau, toute la tarte, tous les enfants, toutes les filles.",
        illustrationEmoji: "🌍"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Tout le gâteau a disparu : gâteau est masculin singulier.", illustrationEmoji: "🍰" },
            { text: "Toute la classe est présente : classe est féminin singulier.", illustrationEmoji: "🏫" }
          ]
        },
        {
          title: "L'astuce pour bien l'accorder",
          steps: [
            { text: "Regarde le genre et le nombre du nom qui suit tout.", illustrationEmoji: "🔍" },
            { text: "Tous les enfants (masculin pluriel), toutes les filles (féminin pluriel).", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : ___ les enfants sont venus. (tout/tous)", answer: "tous", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Enfants est masculin pluriel, donc tous prend un s.", strictAccents: true },
        { order: 2, prompt: "Complète : ___ la classe est présente. (tout/toute)", answer: "toute", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Classe est féminin singulier, donc on écrit toute, avec un e.", strictAccents: true },
        { order: 3, prompt: "Complète : ___ le gâteau a disparu. (tout/tous)", answer: "tout", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Gâteau est masculin singulier, donc on écrit tout, sans s.", strictAccents: true },
        { order: 4, prompt: "Complète : ___ les filles chantent bien. (tous/toutes)", answer: "toutes", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Filles est féminin pluriel, donc on écrit toutes, avec un e et un s.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : ___ mes amis sont gentils.",
          options: ["Tous", "Tout", "Toutes"],
          answer: "Tous",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Amis est masculin pluriel, donc on écrit Tous, avec un s.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. ___ (Toute) la famille est réunie et ___ (tous) les cousins sont là.", answer: "Toute tous", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Toute la famille (famille est féminin singulier) et tous les cousins (cousins est masculin pluriel).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "L'astuce pour ajouter 11",
      xpReward: 24,
      story: {
        hook: "Après avoir appris l'astuce du 9, découvrons celle du 11.",
        concreteExample: "Tu as 24 billes et on t'en donne 11 de plus. Combien en as-tu maintenant ?",
        reveal: "Au lieu d'ajouter 11, on ajoute 10 puis on ajoute encore 1 : 24 + 10 = 34, puis 34 + 1 = 35. C'est plus rapide !",
        bridgeToConcept: "Pour ajouter 11 à un nombre, on ajoute 10 puis on ajoute encore 1.",
        illustrationEmoji: "⚡"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "15 + 11 : on fait 15 + 10 = 25, puis 25 + 1 = 26.", illustrationEmoji: "🔢" },
            { text: "Donc 15 + 11 = 26.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "38 + 11 : on fait 38 + 10 = 48, puis 48 + 1 = 49.", illustrationEmoji: "🔍" },
            { text: "Donc 38 + 11 = 49.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 12 + 11", answer: "23", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "12 + 10 = 22, puis 22 + 1 = 23." },
        { order: 2, prompt: "Calcule : 27 + 11", answer: "38", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "27 + 10 = 37, puis 37 + 1 = 38." },
        { order: 3, prompt: "Calcule : 45 + 11", answer: "56", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "45 + 10 = 55, puis 55 + 1 = 56." },
        { order: 4, prompt: "Calcule : 63 + 11", answer: "74", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "63 + 10 = 73, puis 73 + 1 = 74." },
        { order: 5, prompt: "Calcule : 58 + 11", answer: "69", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "58 + 10 = 68, puis 68 + 1 = 69." },
        { order: 6, prompt: "Défi : calcule 99 + 11", answer: "110", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "99 + 10 = 109, puis 109 + 1 = 110." }
      ]
    }
  ]
};
