import { DayCurriculum } from "@/models/types";

export const day19: DayCurriculum = {
  dayNumber: 19,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "La monnaie : les euros et les centimes",
      xpReward: 26,
      story: {
        hook: "Imagine que tu vas acheter un jouet et que tu dois compter tes pièces et tes billets.",
        concreteExample: "Tu as un billet de 10 euros, une pièce de 2 euros et une pièce de 1 euro. Combien d'argent as-tu en tout ?",
        reveal: "10 + 2 + 1, ça fait 13 euros. On additionne simplement la valeur de chaque pièce et de chaque billet. Bravo, tu as compté de la monnaie !",
        bridgeToConcept: "Pour compter de la monnaie, on additionne la valeur de tous les billets et de toutes les pièces.",
        illustrationEmoji: "💶"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "Un billet de 5 euros et une pièce de 2 euros : 5 + 2 = 7 euros.", illustrationEmoji: "💵" },
            { text: "Deux pièces de 1 euro et une pièce de 50 centimes : 1 + 1 + 0,50 = 2,50 euros.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Un billet de 20 euros et une pièce de 5 euros : 20 + 5 = 25 euros.", illustrationEmoji: "💵" },
            { text: "Trois pièces de 2 euros : 2 + 2 + 2 = 6 euros.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Tu as un billet de 10 euros et une pièce de 5 euros. Combien as-tu en tout ?", answer: "15 euros", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "10 + 5 = 15 : tu as 15 euros en tout." },
        { order: 2, prompt: "Tu as deux pièces de 2 euros et une pièce de 1 euro. Combien as-tu en tout ?", answer: "5 euros", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "2 + 2 + 1 = 5 : tu as 5 euros en tout." },
        { order: 3, prompt: "Tu as un billet de 20 euros et une pièce de 2 euros. Combien as-tu en tout ?", answer: "22 euros", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "20 + 2 = 22 : tu as 22 euros en tout." },
        {
          order: 4,
          type: "mcq",
          prompt: "Un jouet coûte 8 euros. Tu payes avec un billet de 10 euros. Combien te rend-on ?",
          options: ["1 euro", "2 euros", "3 euros"],
          answer: "2 euros",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "10 - 8 = 2 : on te rend 2 euros."
        },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la somme correspondant à un billet de 5 euros et trois pièces de 1 euro.",
          options: ["6 euros", "7 euros", "8 euros"],
          answer: "8 euros",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "5 + 1 + 1 + 1 = 8 : ça fait 8 euros en tout."
        },
        { order: 6, prompt: "Défi : tu as un billet de 10 euros, une pièce de 5 euros et deux pièces de 1 euro. Combien as-tu en tout ?", answer: "17 euros", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "10 + 5 + 1 + 1 = 17 : tu as 17 euros en tout." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le futur simple de aller et faire, toutes les personnes",
      xpReward: 26,
      story: {
        hook: "Tu connais déjà le futur simple des verbes réguliers. Découvrons aujourd'hui celui d'aller et faire, très irréguliers au futur.",
        concreteExample: "Écoute : j'irai, tu iras, il ira, nous irons, vous irez, ils iront / je ferai, tu feras, il fera, nous ferons, vous ferez, ils feront.",
        reveal: "À quoi ça sert ? À annoncer où on ira, ou ce qu'on fera, plus tard. Comment le reconnaître ? Les radicaux ir- et fer- sont complètement irréguliers, très différents des infinitifs aller et faire, mais les terminaisons -ai, -as, -a, -ons, -ez, -ont restent les mêmes.",
        bridgeToConcept: "Aller au futur simple : irai, iras, ira, irons, irez, iront. Faire au futur simple : ferai, feras, fera, ferons, ferez, feront.",
        illustrationEmoji: "🔮"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Demain, nous irons à la piscine.", illustrationEmoji: "🏊" },
            { text: "L'été prochain, vous ferez un beau voyage.", illustrationEmoji: "✈️" }
          ]
        },
        {
          title: "Attention à l'erreur fréquente",
          steps: [
            { text: "Beaucoup d'enfants écrivent j'allerai au lieu de j'irai. C'est une erreur !", illustrationEmoji: "❌" },
            { text: "Le futur d'aller est complètement irrégulier : j'irai, jamais j'allerai.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Demain, j'____ (aller) chez ma cousine.", answer: "irai", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Le futur d'aller est irrégulier : avec je, on écrit irai, jamais allerai.", strictAccents: true },
        { order: 2, prompt: "Complète : Nous ____ (faire) un gâteau ce week-end.", answer: "ferons", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "Le futur de faire est irrégulier : avec nous, on écrit ferons, avec le radical fer-.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Vous ____ (aller) au cinéma samedi.",
          options: ["allerez", "irez", "alliez"],
          answer: "irez",
          kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.",
          explanationWhenWrong: "Le futur d'aller est irrégulier : avec vous, on écrit irez, jamais allerez.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Ils ____ (faire) leurs devoirs après le goûter.", answer: "feront", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Le futur de faire est irrégulier : avec ils, on écrit feront, avec le radical fer-.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Tu ____ (aller) à la fête de l'école.",
          options: ["iras", "allera", "iront"],
          answer: "iras",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.",
          explanationWhenWrong: "Le futur d'aller est irrégulier : avec tu, on écrit iras, avec le radical ir-.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Nous ____ (aller) à la mer et vous ____ (faire) du bateau.", answer: "irons ferez", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "Nous irons vient d'aller, et vous ferez vient de faire : deux futurs très irréguliers dans la même phrase.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Les adverbes de manière en -ment",
      xpReward: 26,
      story: {
        hook: "Imagine un mot qui vient toujours aider un verbe à dire comment se passe une action.",
        concreteExample: "Regarde : Léa marche. Léa marche lentement. Qu'est-ce que le mot lentement ajoute à la phrase ?",
        reveal: "À quoi sert ce mot ? Il dit comment Léa marche : lentement. Comment le reconnaître ? Beaucoup d'adverbes de manière se terminent par -ment, souvent formés à partir de l'adjectif au féminin : lente devient lentement.",
        bridgeToConcept: "L'adverbe de manière dit comment se fait l'action ; beaucoup se terminent par -ment, formés sur l'adjectif au féminin.",
        illustrationEmoji: "🏃"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Elle parle doucement : doucement dit comment elle parle.", illustrationEmoji: "🤫" },
            { text: "Il court rapidement : rapidement dit comment il court.", illustrationEmoji: "🏃" }
          ]
        },
        {
          title: "L'astuce pour former un adverbe en -ment",
          steps: [
            { text: "Prends l'adjectif au féminin : lente, douce, rapide.", illustrationEmoji: "🔍" },
            { text: "Ajoute -ment à la fin : lentement, doucement, rapidement.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Forme l'adverbe à partir de l'adjectif lente.", answer: "lentement", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On ajoute -ment à l'adjectif féminin lente : lentement." },
        { order: 2, prompt: "Forme l'adverbe à partir de l'adjectif douce.", answer: "doucement", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "On ajoute -ment à l'adjectif féminin douce : doucement." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis l'adverbe qui correspond à l'adjectif heureuse.",
          options: ["heureusement", "heureument", "heureusesment"],
          answer: "heureusement",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "On ajoute -ment à l'adjectif féminin heureuse : heureusement."
        },
        { order: 4, prompt: "Dans la phrase Elle chante joyeusement, quel mot est l'adverbe ?", answer: "joyeusement", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Joyeusement dit comment elle chante : c'est l'adverbe de manière." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis l'adverbe qui correspond à l'adjectif rapide.",
          options: ["rapidement", "rapidesment", "rapidémment"],
          answer: "rapidement",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "On ajoute -ment à l'adjectif rapide, déjà terminé par un e : rapidement."
        },
        { order: 6, prompt: "Défi : forme les deux adverbes. À partir de calme, on forme ____ ; à partir de franche, on forme ____.", answer: "calmement franchement", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Calme donne calmement, et franche donne franchement : on ajoute -ment à l'adjectif féminin." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Tout, tous, toute, toutes : l'accord",
      xpReward: 26,
      story: {
        hook: "Il existe une règle magique pour bien accorder le petit mot tout selon ce qu'il accompagne.",
        concreteExample: "Regarde : tout le gâteau, toute la tarte, tous les gâteaux, toutes les tartes. Qu'est-ce qui change à chaque fois ?",
        reveal: "À quoi sert cet accord ? Il montre si le mot qui suit est masculin ou féminin, singulier ou pluriel. Comment le reconnaître ? Tout s'accorde comme un adjectif avec le nom qui suit : masculin singulier (tout), féminin singulier (toute), masculin pluriel (tous), féminin pluriel (toutes).",
        bridgeToConcept: "Tout s'accorde avec le nom qui suit : tout (masculin singulier), toute (féminin singulier), tous (masculin pluriel), toutes (féminin pluriel).",
        illustrationEmoji: "🧩"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Tout le gâteau a disparu : tout est masculin singulier, comme gâteau.", illustrationEmoji: "🍰" },
            { text: "Toutes les fleurs sont belles : toutes est féminin pluriel, comme fleurs.", illustrationEmoji: "🌸" }
          ]
        },
        {
          title: "L'astuce pour bien accorder tout",
          steps: [
            { text: "Regarde si le nom qui suit est masculin ou féminin, singulier ou pluriel.", illustrationEmoji: "🔍" },
            { text: "Accorde tout de la même façon : tous les enfants, toutes les filles.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : ___ le gâteau a disparu. (tout/toute/tous/toutes)", answer: "tout", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Gâteau est masculin singulier, donc tout, sans lettre supplémentaire.", strictAccents: true },
        { order: 2, prompt: "Complète : ___ les enfants sont arrivés. (tout/toute/tous/toutes)", answer: "tous", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "Enfants est masculin pluriel, donc tous, avec un s.", strictAccents: true },
        { order: 3, prompt: "Complète : ___ la classe a applaudi. (tout/toute/tous/toutes)", answer: "toute", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Classe est féminin singulier, donc toute, avec un e.", strictAccents: true },
        { order: 4, prompt: "Complète : ___ les fleurs sont belles. (tout/toute/tous/toutes)", answer: "toutes", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Fleurs est féminin pluriel, donc toutes, avec un e et un s.", strictAccents: true },
        { order: 5, prompt: "Complète : ___ le monde est content. (tout/toute/tous/toutes)", answer: "tout", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Monde est masculin singulier, donc tout, sans lettre supplémentaire.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. ___ les élèves ont rangé ___ leurs affaires. (tout/toute/tous/toutes)", answer: "tous toutes", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "Élèves est masculin pluriel, donc tous ; affaires est féminin pluriel, donc toutes.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Ajouter 9 mentalement : ajouter 10 puis enlever 1",
      xpReward: 26,
      story: {
        hook: "Imagine une astuce magique pour ajouter 9 très vite, sans compter un par un.",
        concreteExample: "Tu as 24 billes et tu en gagnes 9 de plus. Combien en as-tu maintenant ?",
        reveal: "Au lieu de compter 9 par 9, on ajoute 10 (24 + 10 = 34), puis on enlève 1 (34 - 1 = 33). Le résultat est 33. Bravo, tu as utilisé l'astuce du 9 !",
        bridgeToConcept: "Pour ajouter 9 mentalement, on ajoute 10 puis on enlève 1.",
        illustrationEmoji: "🧮"
      },
      examples: [
        {
          title: "L'astuce du 9",
          steps: [
            { text: "27 + 9 : on fait 27 + 10 = 37, puis 37 - 1 = 36.", illustrationEmoji: "➕" },
            { text: "45 + 9 : on fait 45 + 10 = 55, puis 55 - 1 = 54.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Encore un exemple",
          steps: [
            { text: "63 + 9 : on fait 63 + 10 = 73, puis 73 - 1 = 72.", illustrationEmoji: "➕" },
            { text: "C'est plus rapide que compter un par un !", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 15 + 9", answer: "24", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "15 + 10 = 25, puis 25 - 1 = 24." },
        { order: 2, prompt: "Calcule : 28 + 9", answer: "37", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "28 + 10 = 38, puis 38 - 1 = 37." },
        { order: 3, prompt: "Calcule : 46 + 9", answer: "55", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "46 + 10 = 56, puis 56 - 1 = 55." },
        { order: 4, prompt: "Calcule : 52 + 9", answer: "61", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "52 + 10 = 62, puis 62 - 1 = 61." },
        { order: 5, prompt: "Calcule : 74 + 9", answer: "83", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "74 + 10 = 84, puis 84 - 1 = 83." },
        { order: 6, prompt: "Défi : calcule 99 + 9 en utilisant l'astuce (ajoute 10, puis enlève 1).", answer: "108", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "99 + 10 = 109, puis 109 - 1 = 108." }
      ]
    }
  ]
};
