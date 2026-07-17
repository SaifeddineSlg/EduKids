import { DayCurriculum } from "@/models/types";

export const day03: DayCurriculum = {
  dayNumber: 3,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Les nombres jusqu'à 10 000",
      xpReward: 22,
      story: {
        hook: "Imagine que tu comptes les habitants d'une petite ville, avec des milliers de personnes.",
        concreteExample: "Une ville a 3 428 habitants. Comment se décompose ce nombre ?",
        reveal: "3 428, c'est 3 milliers, 4 centaines, 2 dizaines et 8 unités. Chaque chiffre a une place précise.",
        bridgeToConcept: "Les nombres jusqu'à 10 000 se décomposent en milliers, centaines, dizaines et unités.",
        illustrationEmoji: "🏙️"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "5 672 : 5 milliers, 6 centaines, 7 dizaines, 2 unités.", illustrationEmoji: "🔢" },
            { text: "5000 + 600 + 70 + 2 = 5672.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "8 003 : 8 milliers, 0 centaine, 0 dizaine, 3 unités.", illustrationEmoji: "🔍" },
            { text: "Les zéros comptent bien comme des chiffres à leur place.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans 3 428, combien y a-t-il de milliers ?", answer: "3", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Le chiffre des milliers dans 3 428 est 3." },
        { order: 2, prompt: "Dans 5 672, combien y a-t-il de centaines ?", answer: "6", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Le chiffre des centaines dans 5 672 est 6." },
        { order: 3, prompt: "Écris en chiffres : sept mille trois cent quarante", answer: "7340", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Sept mille trois cent quarante s'écrit 7340." },
        { order: 4, prompt: "Quel nombre est le plus grand : 4 999 ou 5 001 ?", answer: "5001", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "5001 est plus grand car son chiffre des milliers (5) est plus élevé que celui de 4999 (4)." },
        { order: 5, prompt: "Dans 8 003, combien y a-t-il d'unités ?", answer: "3", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Le chiffre des unités dans 8 003 est 3." },
        { order: 6, prompt: "Défi : range du plus petit au plus grand : 4200, 2400, 4020 (réponds avec des espaces entre les nombres)", answer: "2400 4020 4200", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "2400 est le plus petit (chiffre des milliers 2), puis 4020, puis 4200." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le conditionnel présent : exprimer un souhait",
      xpReward: 22,
      story: {
        hook: "Imagine que tu rêves de ce que tu ferais si tu avais une baguette magique.",
        concreteExample: "Écoute : si j'avais une baguette magique, je voyagerais partout dans le monde.",
        reveal: "Je voyagerais exprime un souhait, quelque chose qui pourrait arriver. C'est le conditionnel présent : on prend le radical du futur et on ajoute les terminaisons de l'imparfait.",
        bridgeToConcept: "Le conditionnel présent : je jouerais, tu jouerais, il jouerait, nous jouerions, vous joueriez, ils joueraient.",
        illustrationEmoji: "🪄"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Nous aimerions partir en vacances à la mer.", illustrationEmoji: "🏖️" },
            { text: "Elle voudrait un chien pour son anniversaire.", illustrationEmoji: "🐶" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Radical du futur (jouer-) + terminaisons de l'imparfait (-ais, -ais, -ait...).", illustrationEmoji: "🔍" },
            { text: "je jouerais (comme je jouais mais avec le r du futur).", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Si j'avais une baguette magique, je ____ (voyager) partout.", answer: "voyagerais", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec je, le conditionnel de voyager est voyagerais." },
        { order: 2, prompt: "Complète : Tu ____ (aimer) un chien, je le sais bien.", answer: "aimerais", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Avec tu, le conditionnel de aimer est aimerais." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Elle ____ (vouloir) un vélo neuf.",
          options: ["voudrait", "voudrais", "voudraient"],
          answer: "voudrait",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Avec elle, le conditionnel de vouloir est voudrait."
        },
        { order: 4, prompt: "Complète : Nous ____ (aimer) partir en vacances.", answer: "aimerions", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Avec nous, le conditionnel de aimer est aimerions." },
        { order: 5, prompt: "Complète : Vous ____ (pouvoir) venir avec nous.", answer: "pourriez", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Avec vous, le conditionnel de pouvoir est pourriez." },
        { order: 6, prompt: "Défi : complète les deux verbes. Ils ____ (aimer) rester ici et nous ____ (vouloir) bien les accueillir.", answer: "aimeraient voudrions", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Ils aimeraient (aimer) et nous voudrions (vouloir)." }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Le complément d'objet direct et indirect",
      xpReward: 22,
      story: {
        hook: "Imagine que le verbe a besoin d'un complément pour dire sur qui ou sur quoi porte l'action.",
        concreteExample: "Regarde : Balkis mange une pomme. Que mange Balkis ?",
        reveal: "Une pomme répond directement à la question quoi, sans petit mot devant. C'est le complément d'objet direct (COD). Si le complément est relié par à ou de (elle parle à sa sœur), c'est un complément d'objet indirect (COI).",
        bridgeToConcept: "Le COD répond à qui/quoi sans préposition. Le COI répond à qui/quoi avec à ou de.",
        illustrationEmoji: "🍎"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Il lit un livre : un livre est COD (lit quoi ? un livre).", illustrationEmoji: "📖" },
            { text: "Elle parle à sa sœur : à sa sœur est COI (parle à qui ? à sa sœur).", illustrationEmoji: "👭" }
          ]
        },
        {
          title: "L'astuce pour distinguer COD et COI",
          steps: [
            { text: "Pose la question qui/quoi après le verbe, sans mot de liaison : c'est un COD.", illustrationEmoji: "🔍" },
            { text: "Si la réponse est reliée par à ou de : c'est un COI.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans Balkis mange une pomme, quel est le COD ?", answer: "une pomme", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Une pomme répond à quoi, sans préposition : c'est le COD." },
        { order: 2, prompt: "Dans il lit un livre, quel est le COD ?", answer: "un livre", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Un livre répond à quoi, sans préposition : c'est le COD." },
        { order: 3, prompt: "Dans elle parle à sa sœur, quel est le COI ?", answer: "à sa sœur", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "À sa sœur répond à qui, avec la préposition à : c'est le COI." },
        { order: 4, prompt: "Dans nous écrivons une lettre, quel est le COD ?", answer: "une lettre", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Une lettre répond à quoi, sans préposition : c'est le COD." },
        { order: 5, prompt: "Dans il pense à ses vacances, quel est le COI ?", answer: "à ses vacances", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "À ses vacances répond à quoi, avec la préposition à : c'est le COI." },
        { order: 6, prompt: "Défi : dans elle offre un cadeau à son ami, cite le COD puis le COI.", answer: "un cadeau à son ami", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Un cadeau est le COD (offre quoi), à son ami est le COI (offre à qui)." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Quel(le)(s) ou qu'elle(s)",
      xpReward: 22,
      story: {
        hook: "Imagine deux mots jumeaux qui se prononcent pareil mais qui n'ont pas le même rôle.",
        concreteExample: "Regarde : ___ belle robe ! Est-ce que c'est quelle ou qu'elle ?",
        reveal: "Quelle sert à interroger ou s'exclamer sur un nom féminin. Qu'elle veut dire que + elle (elle vient d'un pronom). Ici, on s'exclame sur une robe : quelle.",
        bridgeToConcept: "Quel(le)(s) interroge ou s'exclame devant un nom. Qu'elle(s) remplace que + elle(s), souvent après un verbe.",
        illustrationEmoji: "👗"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Quelle belle robe ! : exclamation devant le nom robe.", illustrationEmoji: "👗" },
            { text: "Je crois qu'elle arrive bientôt : qu'elle = que + elle.", illustrationEmoji: "🚶‍♀️" }
          ]
        },
        {
          title: "L'astuce du test",
          steps: [
            { text: "Essaie de remplacer par que + il : si ça marche, c'est qu'elle.", illustrationEmoji: "🔍" },
            { text: "Sinon, devant un nom, c'est quel(le)(s).", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : ___ belle robe ! (quelle/qu'elle)", answer: "quelle", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Quelle s'exclame devant le nom robe." },
        { order: 2, prompt: "Complète : Je crois ___ arrive bientôt. (quelle/qu'elle)", answer: "qu'elle", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "On peut dire qu'il arrive, donc c'est qu'elle." },
        { order: 3, prompt: "Complète : ___ heure est-il ? (quelle/qu'elle)", answer: "quelle", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Quelle interroge devant le nom heure." },
        { order: 4, prompt: "Complète : Il pense ___ viendra demain. (quelle/qu'elle)", answer: "qu'elle", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "On peut dire qu'il viendra, donc c'est qu'elle." },
        { order: 5, prompt: "Complète : ___ surprise merveilleuse ! (quelle/qu'elle)", answer: "quelle", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Quelle s'exclame devant le nom surprise." },
        { order: 6, prompt: "Défi : complète les deux mots. ___ (quelle) chance ___ (qu'elle) a eue !", answer: "quelle qu'elle", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Quelle chance (exclamation) et qu'elle a eue (que + elle)." }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "La table de multiplication de 8",
      xpReward: 22,
      story: {
        hook: "Imagine que tu comptes des pattes d'araignées, qui en ont 8 chacune.",
        concreteExample: "Il y a 3 araignées. Combien de pattes en tout ?",
        reveal: "3 fois 8, ça fait 24. Bravo, tu as trouvé le nombre de pattes !",
        bridgeToConcept: "La table de 8 : 1x8=8, 2x8=16, 3x8=24, 4x8=32, 5x8=40...",
        illustrationEmoji: "🕷️"
      },
      examples: [
        {
          title: "La table de 8",
          steps: [
            { text: "8 x 3 : c'est le double du double du double de 3. Double de 3=6, double de 6=12, double de 12=24.", illustrationEmoji: "🔍" },
            { text: "8 x 5 : double de 5=10, double de 10=20, double de 20=40.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour la table de 8",
          steps: [
            { text: "Multiplier par 8, c'est faire trois doubles d'affilée.", illustrationEmoji: "🔍" },
            { text: "8 x 6 : double de 6=12, double de 12=24, double de 24=48.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 8 x 3", answer: "24", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "8 x 3 = 24." },
        { order: 2, prompt: "Calcule : 8 x 4", answer: "32", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "8 x 4 = 32." },
        { order: 3, prompt: "Calcule : 8 x 5", answer: "40", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "8 x 5 = 40." },
        { order: 4, prompt: "Calcule : 8 x 6", answer: "48", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "8 x 6 = 48." },
        { order: 5, prompt: "Calcule : 8 x 7", answer: "56", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "8 x 7 = 56." },
        { order: 6, prompt: "Défi : calcule 8 x 9", answer: "72", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "8 x 9 = 72." }
      ]
    }
  ]
};
