import { DayCurriculum } from "@/models/types";

export const day13: DayCurriculum = {
  dayNumber: 13,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "La soustraction posée avec retenue",
      xpReward: 24,
      story: {
        hook: "Imagine que tu dois retirer un nombre à un autre, en écrivant l'opération en colonnes.",
        concreteExample: "Calcule 542 - 187 en posant l'opération. Comment fait-on quand le chiffre du haut est trop petit ?",
        reveal: "Aux unités, 2 - 7 est impossible : on emprunte une dizaine, ce qui donne 12 - 7 = 5. Aux dizaines, il reste 3 (car on a emprunté 1), 3 - 8 est encore impossible : on emprunte une centaine, ce qui donne 13 - 8 = 5. Aux centaines, il reste 4, et 4 - 1 = 3. Résultat : 355 !",
        bridgeToConcept: "Pour poser une soustraction avec retenue, on emprunte une dizaine (ou une centaine) quand le chiffre du haut est trop petit.",
        illustrationEmoji: "➖"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "263 - 148 : aux unités, 3 - 8 est impossible, on emprunte : 13 - 8 = 5.", illustrationEmoji: "🔢" },
            { text: "Aux dizaines, il reste 5, 5 - 4 = 1. Aux centaines, 2 - 1 = 1. Résultat : 115.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "431 - 216 : aux unités, 1 - 6 est impossible, on emprunte : 11 - 6 = 5.", illustrationEmoji: "🔍" },
            { text: "Aux dizaines, il reste 2, 2 - 1 = 1. Aux centaines, 4 - 2 = 2. Résultat : 215.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Pose et calcule : 253 - 127", answer: "126", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Aux unités, on emprunte : 13 - 7 = 6. Aux dizaines, il reste 4, 4 - 2 = 2. Aux centaines, 2 - 1 = 1. Résultat : 126." },
        { order: 2, prompt: "Pose et calcule : 342 - 158", answer: "184", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Aux unités, on emprunte : 12 - 8 = 4. Aux dizaines, il reste 3, on emprunte encore : 13 - 5 = 8. Aux centaines, il reste 2, 2 - 1 = 1. Résultat : 184." },
        { order: 3, prompt: "Pose et calcule : 621 - 345", answer: "276", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Aux unités, on emprunte : 11 - 5 = 6. Aux dizaines, il reste 1, on emprunte encore : 11 - 4 = 7. Aux centaines, il reste 5, 5 - 3 = 2. Résultat : 276." },
        { order: 4, prompt: "Pose et calcule : 456 - 238", answer: "218", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Aux unités, on emprunte : 16 - 8 = 8. Aux dizaines, il reste 4, 4 - 3 = 1. Aux centaines, 4 - 2 = 2. Résultat : 218." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le bon résultat de 372 - 159.",
          options: ["213", "223", "203"],
          answer: "213",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Aux unités, on emprunte : 12 - 9 = 3. Aux dizaines, il reste 6, 6 - 5 = 1. Aux centaines, 3 - 1 = 2. Résultat : 213."
        },
        { order: 6, prompt: "Défi : pose et calcule 500 - 268", answer: "232", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Aux unités, on emprunte : 10 - 8 = 2. Aux dizaines, il reste 9, 9 - 6 = 3. Aux centaines, il reste 4, 4 - 2 = 2. Résultat : 232." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "L'imparfait des verbes en -ir comme finir",
      xpReward: 24,
      story: {
        hook: "Tu sais conjuguer finir au présent et au futur, découvrons maintenant son imparfait.",
        concreteExample: "Écoute : quand j'étais petit, je finissais toujours mon assiette.",
        reveal: "À quoi sert l'imparfait des verbes en -ir ? À raconter une habitude du passé. Comment le reconnaître ? On garde la base finiss- (comme au présent avec nous) et on ajoute -ais, -ais, -ait, -ions, -iez, -aient.",
        bridgeToConcept: "Finir à l'imparfait : je finissais, tu finissais, il finissait, nous finissions, vous finissiez, ils finissaient.",
        illustrationEmoji: "⏳"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Autrefois, elle choisissait toujours le même livre.", illustrationEmoji: "📚" },
            { text: "Chaque soir, nous finissions nos devoirs ensemble.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "La base finiss- est la même qu'au présent avec nous (nous finissons).", illustrationEmoji: "🔍" },
            { text: "On ajoute simplement la terminaison de l'imparfait.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Quand j'étais petit, je ____ (finir) toujours mon assiette.", answer: "finissais", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec je, l'imparfait de finir est finissais, avec la base finiss-.", strictAccents: true },
        { order: 2, prompt: "Complète : Tu ____ (choisir) toujours le même jeu.", answer: "choisissais", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Avec tu, l'imparfait de choisir est choisissais.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Elle ____ (réfléchir) longtemps avant de répondre.",
          options: ["réfléchissait", "réfléchissais", "réfléchissaient"],
          answer: "réfléchissait",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec elle, l'imparfait de réfléchir est réfléchissait. Réfléchissais est pour je ou tu, réfléchissaient est pour ils.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Nous ____ (finir) nos devoirs ensemble chaque soir.", answer: "finissions", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Avec nous, l'imparfait de finir est finissions, avec la terminaison -ions.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Vous ____ (grandir) très vite cette année-là.",
          options: ["grandissiez", "grandissais", "grandissions"],
          answer: "grandissiez",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec vous, l'imparfait de grandir est grandissiez, avec la terminaison -iez.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux verbes. Ils ____ (applaudir) pendant que nous ____ (finir) notre spectacle.", answer: "applaudissaient finissions", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Ils applaudissaient avec la terminaison -aient, et nous finissions avec la terminaison -ions.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "L'attribut du sujet",
      xpReward: 24,
      story: {
        hook: "Imagine un mot qui décrit le sujet, relié par un verbe comme être.",
        concreteExample: "Regarde : le ciel est bleu. Que nous dit bleu sur le ciel ?",
        reveal: "Bleu décrit le ciel, relié par le verbe être. À quoi sert ce mot ? Il donne une qualité au sujet, jamais une action. Comment le reconnaître ? Il suit un verbe d'état (être, sembler, devenir, paraître...).",
        bridgeToConcept: "L'attribut du sujet donne une information sur le sujet, après un verbe d'état comme être, sembler ou devenir.",
        illustrationEmoji: "🌤️"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Le ciel est bleu : bleu est l'attribut du sujet ciel.", illustrationEmoji: "☁️" },
            { text: "Balkis semble fatiguée : fatiguée est l'attribut du sujet Balkis.", illustrationEmoji: "😴" }
          ]
        },
        {
          title: "L'astuce pour le reconnaître",
          steps: [
            { text: "Cherche un verbe d'état : être, sembler, devenir, paraître, rester.", illustrationEmoji: "🔍" },
            { text: "Le mot qui suit et décrit le sujet est l'attribut.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans le ciel est bleu, quel est l'attribut du sujet ?", answer: "bleu", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Bleu décrit le ciel après le verbe être, c'est l'attribut du sujet." },
        { order: 2, prompt: "Dans Balkis semble fatiguée, quel est l'attribut du sujet ?", answer: "fatiguée", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Fatiguée décrit Balkis après le verbe sembler, c'est l'attribut du sujet." },
        { order: 3, prompt: "Dans ce gâteau paraît délicieux, quel est l'attribut du sujet ?", answer: "délicieux", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Délicieux décrit le gâteau après le verbe paraître, c'est l'attribut du sujet." },
        { order: 4, prompt: "Dans les enfants deviennent grands, quel est l'attribut du sujet ?", answer: "grands", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Grands décrit les enfants après le verbe devenir, c'est l'attribut du sujet." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis l'attribut du sujet dans la soupe reste chaude.",
          options: ["chaude", "reste", "soupe"],
          answer: "chaude",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Chaude décrit la soupe après le verbe rester, c'est l'attribut du sujet."
        },
        { order: 6, prompt: "Défi : dans mon frère est devenu très patient cette année, cite l'attribut du sujet.", answer: "patient", acceptedAnswers: ["très patient"], kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Patient décrit mon frère après le verbe devenir, c'est l'attribut du sujet." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Peu, peux, peut",
      xpReward: 24,
      story: {
        hook: "Encore trois mots jumeaux à l'oreille, avec des rôles différents.",
        concreteExample: "Regarde : je ne ___ pas venir demain. Est-ce que c'est peu, peux ou peut ?",
        reveal: "Avec je ou tu, le verbe pouvoir s'écrit peux, avec un x. Avec il ou elle, ça devient peut, avec un t. Peu (sans x ni t) veut dire pas beaucoup, comme dans j'ai peu d'argent.",
        bridgeToConcept: "Peux (je/tu) et peut (il/elle) viennent du verbe pouvoir. Peu veut dire pas beaucoup, le contraire de beaucoup.",
        illustrationEmoji: "🤏"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Je ne peux pas venir demain : peux vient de pouvoir, avec je.", illustrationEmoji: "🙅" },
            { text: "Il peut nager très vite : peut vient de pouvoir, avec il.", illustrationEmoji: "🏊" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "J'ai peu de temps ce soir : peu veut dire pas beaucoup.", illustrationEmoji: "🔍" },
            { text: "Remplace par pouvait pour vérifier peux ou peut, sinon c'est peu.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je ne ___ pas venir demain. (peu/peux/peut)", answer: "peux", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec je, le verbe pouvoir s'écrit peux, avec un x.", strictAccents: true },
        { order: 2, prompt: "Complète : Il ___ nager très vite. (peu/peux/peut)", answer: "peut", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Avec il, le verbe pouvoir s'écrit peut, avec un t.", strictAccents: true },
        { order: 3, prompt: "Complète : J'ai ___ de temps ce soir. (peu/peux/peut)", answer: "peu", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Peu veut dire pas beaucoup, sans x ni t.", strictAccents: true },
        { order: 4, prompt: "Complète : Tu ___ venir avec nous si tu veux. (peu/peux/peut)", answer: "peux", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Avec tu, le verbe pouvoir s'écrit peux, avec un x.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Elle ___ lire toute seule maintenant.",
          options: ["peut", "peux", "peu"],
          answer: "peut",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec elle, le verbe pouvoir s'écrit peut, avec un t.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Balkis ___ (peut) courir vite mais elle a ___ (peu) d'énergie aujourd'hui.", answer: "peut peu", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Peut (verbe pouvoir avec elle) et peu (pas beaucoup d'énergie).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "La table de multiplication de 9",
      xpReward: 24,
      story: {
        hook: "Imagine une astuce spéciale pour trouver très vite les résultats de la table de 9.",
        concreteExample: "4 x 9, comment trouver vite le résultat ?",
        reveal: "Astuce : 4 x 9 = 4 x 10 - 4 = 40 - 4 = 36. Bravo !",
        bridgeToConcept: "La table de 9 : 1x9=9, 2x9=18, 3x9=27, 4x9=36, 5x9=45... Astuce : multiplier par 10 puis retirer le nombre.",
        illustrationEmoji: "🔟"
      },
      examples: [
        {
          title: "La table de 9",
          steps: [
            { text: "9 x 3 : on fait 3 x 10 = 30, puis 30 - 3 = 27.", illustrationEmoji: "➕" },
            { text: "9 x 6 : on fait 6 x 10 = 60, puis 60 - 6 = 54.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour la table de 9",
          steps: [
            { text: "Multiplie toujours par 10 d'abord, puis retire le nombre de départ.", illustrationEmoji: "🔍" },
            { text: "9 x 7 : 7 x 10 = 70, puis 70 - 7 = 63.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 9 x 3", answer: "27", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "9 x 3 = 27." },
        { order: 2, prompt: "Calcule : 9 x 5", answer: "45", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "9 x 5 = 45." },
        { order: 3, prompt: "Calcule : 9 x 6", answer: "54", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "9 x 6 = 54." },
        { order: 4, prompt: "Calcule : 9 x 7", answer: "63", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "9 x 7 = 63." },
        { order: 5, prompt: "Calcule : 9 x 8", answer: "72", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "9 x 8 = 72." },
        { order: 6, prompt: "Défi : calcule 9 x 9", answer: "81", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "9 x 9 = 81." }
      ]
    }
  ]
};
