import { DayCurriculum } from "@/models/types";

export const day14: DayCurriculum = {
  dayNumber: 14,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Les grands nombres jusqu'à 1 000 000",
      xpReward: 22,
      story: {
        hook: "Après les milliers, il existe une classe encore plus grande de nombres : les millions.",
        concreteExample: "Une ville compte 850 000 habitants. Comment lire ce nombre ?",
        reveal: "850 000 se lit huit cent cinquante mille : 8 centaines de mille, 5 dizaines de mille. Au-delà de 999 999, on entre dans la classe des millions.",
        bridgeToConcept: "Les grands nombres se décomposent en classes : unités, milliers, millions, séparées par un espace.",
        illustrationEmoji: "🌍"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "1 250 000 se lit un million deux cent cinquante mille.", illustrationEmoji: "🔢" },
            { text: "620 000 : 6 centaines de mille, 2 dizaines de mille.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "999 999 + 1 = 1 000 000 : on entre dans la classe des millions.", illustrationEmoji: "🔍" },
            { text: "Un million s'écrit avec six zéros : 1 000 000.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Écris en chiffres : huit cent cinquante mille", answer: "850000", acceptedAnswers: ["850 000"], kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Huit cent cinquante mille s'écrit 850 000." },
        { order: 2, prompt: "Dans 620 000, combien y a-t-il de centaines de mille ?", answer: "6", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Le chiffre des centaines de mille dans 620 000 est 6." },
        { order: 3, prompt: "Quel nombre est le plus grand : 750 000 ou 705 000 ?", answer: "750000", acceptedAnswers: ["750 000"], kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "750 000 a 5 dizaines de mille contre 0 pour 705 000, donc 750 000 est plus grand." },
        { order: 4, prompt: "Combien de zéros contient un million ?", answer: "6", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Un million s'écrit 1 000 000, avec six zéros." },
        { order: 5, prompt: "Écris en chiffres : un million deux cent mille", answer: "1200000", acceptedAnswers: ["1 200 000"], kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Un million deux cent mille s'écrit 1 200 000." },
        { order: 6, prompt: "Défi : range du plus petit au plus grand : 999999, 1000000, 890000 (réponds avec des espaces entre les nombres, sans espace à l'intérieur des nombres)", answer: "890000 999999 1000000", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "890 000 est le plus petit, puis 999 999, puis 1 000 000 qui entre dans la classe des millions." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Distinguer futur simple et conditionnel présent",
      xpReward: 22,
      story: {
        hook: "Futur simple et conditionnel présent se ressemblent beaucoup à l'oral, mais leur sens est différent.",
        concreteExample: "Demain, je jouerai au parc. Si j'avais le temps, je jouerais au parc. Quelle différence entends-tu ?",
        reveal: "Jouerai, au futur simple, annonce un fait certain à venir. Jouerais, au conditionnel présent, exprime un souhait ou une condition. À l'écrit, le futur s'écrit avec ai, le conditionnel avec ais.",
        bridgeToConcept: "Futur simple : radical + ai, as, a, ons, ez, ont. Conditionnel présent : radical + ais, ais, ait, ions, iez, aient.",
        illustrationEmoji: "🔀"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Demain, il pleuvra sûrement : futur simple, c'est certain.", illustrationEmoji: "☔" },
            { text: "S'il faisait beau, nous sortirions : conditionnel, c'est une condition.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Écoute la fin du mot : -ai, -as, -a c'est le futur ; -ais, -ait c'est le conditionnel.", illustrationEmoji: "🔍" },
            { text: "Pense à la phrase avec si pour reconnaître le conditionnel.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète au futur simple : Demain, je ____ (jouer) au parc.", answer: "jouerai", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec je, le futur simple de jouer est jouerai : radical jouer- puis -ai.", strictAccents: true },
        { order: 2, prompt: "Complète au conditionnel présent : Si j'avais le temps, je ____ (jouer) au parc.", answer: "jouerais", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Avec je, le conditionnel présent de jouer est jouerais : radical jouer- puis -ais.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Demain, il ___ (pleuvoir) sûrement.",
          options: ["pleuvra", "pleuvrait", "pleuvait"],
          answer: "pleuvra",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Pleuvra est la forme du futur simple : c'est une annonce certaine, sans condition.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète au conditionnel présent : S'il faisait beau, nous ____ (sortir).", answer: "sortirions", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Avec nous, le conditionnel présent de sortir est sortirions : radical sortir- puis -ions.", strictAccents: true },
        { order: 5, prompt: "Complète au futur simple : L'année prochaine, vous ____ (déménager).", answer: "déménagerez", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Avec vous, le futur simple de déménager est déménagerez : radical déménager- puis -ez.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux verbes. Demain, nous ____ (partir, futur simple) tôt, mais si nous étions en retard, nous ____ (partir, conditionnel) plus tard.", answer: "partirons partirions", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Tu étais proche ! Avec nous, le futur simple de partir est partirons, et le conditionnel présent est partirions.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Les conjonctions de coordination",
      xpReward: 22,
      story: {
        hook: "Une phrase peut contenir plusieurs propositions reliées par de petits mots de liaison.",
        concreteExample: "Il pleut, mais nous sortons quand même. Quel petit mot relie les deux propositions ?",
        reveal: "Mais relie deux propositions en montrant une opposition. Les conjonctions de coordination (mais, ou, et, donc, or, ni, car) relient des propositions ou des mots de même nature.",
        bridgeToConcept: "Les conjonctions de coordination : mais, ou, et, donc, or, ni, car relient deux propositions ou deux mots.",
        illustrationEmoji: "🔗"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Il veut du chocolat ou de la vanille : ou relie deux choix.", illustrationEmoji: "🍫" },
            { text: "Elle est fatiguée, car elle a beaucoup travaillé : car explique la cause.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Retiens la phrase : mais où est donc Ornicar, pour les sept conjonctions.", illustrationEmoji: "🔍" },
            { text: "Repère le petit mot qui relie deux propositions ou deux mots.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans il pleut, mais nous sortons quand même, quelle est la conjonction de coordination ?", answer: "mais", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Mais relie les deux propositions en montrant une opposition." },
        { order: 2, prompt: "Dans il veut du chocolat ou de la vanille, quelle est la conjonction de coordination ?", answer: "ou", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Ou relie les deux choix possibles." },
        { order: 3, prompt: "Dans elle est fatiguée, car elle a beaucoup travaillé, quelle est la conjonction de coordination ?", answer: "car", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Car relie les deux propositions en expliquant la cause." },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la conjonction : Il fait froid, ___ je mets un manteau.",
          options: ["donc", "très", "joli"],
          answer: "donc",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Donc relie les deux propositions en montrant une conséquence."
        },
        { order: 5, prompt: "Dans il n'aime ni les épinards ni les carottes, quelle conjonction est répétée ?", answer: "ni", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Ni relie deux éléments dans une phrase négative." },
        { order: 6, prompt: "Défi : récite dans l'ordre les sept conjonctions de coordination (séparées par un espace).", answer: "mais ou et donc or ni car", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Les sept conjonctions de coordination sont mais, ou, et, donc, or, ni, car." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Quand, qu'en ou quant",
      xpReward: 22,
      story: {
        hook: "Trois mots qui se prononcent pareil : le temps, une contraction, et un mot qui introduit un sujet.",
        concreteExample: "___ arrives-tu ? Est-ce quand, qu'en ou quant ?",
        reveal: "On interroge sur le moment, donc on écrit quand, avec un d. Qu'en est la contraction de que et en (je pense qu'en travaillant, tu réussiras). Quant à s'utilise pour introduire un sujet (quant à moi, je reste).",
        bridgeToConcept: "Quand interroge ou indique le temps (remplace par à quel moment). Quant à introduit un sujet. Qu'en est la contraction de que et en.",
        illustrationEmoji: "⏳"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Quand pars-tu en vacances ? : question sur le temps.", illustrationEmoji: "🗓️" },
            { text: "Quant à moi, je préfère rester à la maison : quant à introduit un sujet.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce du test",
          steps: [
            { text: "Remplace par à quel moment : si ça marche, c'est quand.", illustrationEmoji: "🔍" },
            { text: "Devant à, pense à quant à, qui introduit un sujet précis.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : ___ arrives-tu ? (quand/qu'en/quant)", answer: "quand", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On peut remplacer par à quel moment arrives-tu, donc on écrit quand, avec un d.", strictAccents: true },
        { order: 2, prompt: "Complète : ___ à moi, je reste ici. (quand/qu'en/quant)", answer: "quant", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Devant à moi, on écrit quant, qui introduit un sujet précis.", strictAccents: true },
        { order: 3, prompt: "Complète : Je pense ___ travaillant bien, tu réussiras. (quand/qu'en/quant)", answer: "qu'en", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Il s'agit de la contraction de que et en, donc on écrit qu'en.", strictAccents: true },
        { order: 4, prompt: "Complète : ___ commence l'école ? (quand/qu'en/quant)", answer: "quand", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "On peut remplacer par à quel moment commence l'école, donc on écrit quand.", strictAccents: true },
        { order: 5, prompt: "Complète : ___ à mon frère, il adore le foot. (quand/qu'en/quant)", answer: "quant", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Devant à mon frère, on écrit quant, qui introduit un sujet précis.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. ___ (quand) pars-tu, et ___ (quant) à ta sœur, vient-elle aussi ?", answer: "quand quant", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Tu étais proche ! Quand pars-tu interroge sur le temps, et quant à ta sœur introduit un nouveau sujet.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Calculer des pourcentages simples",
      xpReward: 22,
      story: {
        hook: "Le pourcentage, c'est une manière de dire une fraction sur 100.",
        concreteExample: "Combien font 10 % de 200 ?",
        reveal: "10 % de 200, c'est 200 divisé par 10, soit 20. Pour trouver 50 %, on divise par 2 ; pour 25 %, on divise par 4.",
        bridgeToConcept: "10 % = diviser par 10. 50 % = diviser par 2. 25 % = diviser par 4.",
        illustrationEmoji: "📊"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "10 % de 300 = 300 divisé par 10 = 30.", illustrationEmoji: "🔢" },
            { text: "50 % de 80 = 80 divisé par 2 = 40.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "25 % de 40 = 40 divisé par 4 = 10.", illustrationEmoji: "🔍" },
            { text: "10 % de 90 = 9.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 10 % de 200", answer: "20", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "10 % de 200, c'est 200 divisé par 10, soit 20." },
        { order: 2, prompt: "Calcule : 50 % de 80", answer: "40", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "50 % de 80, c'est 80 divisé par 2, soit 40." },
        { order: 3, prompt: "Calcule : 25 % de 40", answer: "10", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "25 % de 40, c'est 40 divisé par 4, soit 10." },
        { order: 4, prompt: "Calcule : 10 % de 150", answer: "15", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "10 % de 150, c'est 150 divisé par 10, soit 15." },
        { order: 5, prompt: "Calcule : 50 % de 60", answer: "30", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "50 % de 60, c'est 60 divisé par 2, soit 30." },
        { order: 6, prompt: "Défi : calcule 25 % de 200, puis ajoute 10 % de 100. Quel est le résultat final ?", answer: "60", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "25 % de 200 = 50, et 10 % de 100 = 10, donc 50 + 10 = 60." }
      ]
    }
  ]
};
