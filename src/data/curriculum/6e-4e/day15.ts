import { DayCurriculum } from "@/models/types";

export const day15: DayCurriculum = {
  dayNumber: 15,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "La grande révision : fractions, aire du triangle, pourcentage inverse et nombres relatifs",
      xpReward: 24,
      story: {
        hook: "Cette semaine, tu as additionné des fractions, calculé l'aire d'un triangle, retrouvé un tout à partir d'un pourcentage, et découvert les nombres relatifs.",
        concreteExample: "Aujourd'hui, on mélange un peu de tout : une fraction, une aire, un pourcentage inverse, et un nombre relatif.",
        reveal: "Tu vas voir que ce sont toujours les mêmes méthodes, réutilisées sur des exemples différents. Bravo, tu es devenu un vrai expert de ces quatre méthodes !",
        bridgeToConcept: "Réviser en mathématiques, c'est reconnaître quelle méthode utiliser selon la question posée.",
        illustrationEmoji: "🧠"
      },
      examples: [
        {
          title: "Exemple 1 : 2/9 + 4/9",
          steps: [
            { text: "On additionne les numérateurs : 2 + 4 = 6, ce qui donne 6/9.", illustrationEmoji: "➕" },
            { text: "6/9 se simplifie en 2/3, en divisant le haut et le bas par 3.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : un triangle de base 8 cm et de hauteur 5 cm",
          steps: [
            { text: "Aire : (8 x 5) / 2 = 40 / 2.", illustrationEmoji: "🔺" },
            { text: "L'aire est de 20 cm².", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 3/7 + 2/7", answer: "5/7", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Les dénominateurs sont identiques, donc on additionne les numérateurs : 3 + 2 = 5, ce qui donne 5/7." },
        { order: 2, prompt: "Calcule l'aire d'un triangle de base 10 cm et de hauteur 4 cm.", answer: "20", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "(10 x 4) / 2 = 40 / 2 = 20 cm²." },
        { order: 3, prompt: "10% d'un nombre vaut 7. Quel est ce nombre ?", answer: "70", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Si 10% vaut 7, alors 100% vaut 7 x 10 = 70." },
        { order: 4, prompt: "Calcule : -6 + 9", answer: "3", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "On part de -6 et on avance de 9 vers la droite : on arrive à 3." },
        { order: 5, prompt: "Calcule 4/8 + 2/8, puis simplifie le résultat.", answer: "3/4", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "4/8 + 2/8 = 6/8, car 4 + 2 = 6. Ensuite, 6/8 se simplifie en 3/4, en divisant le haut et le bas par 2." },
        { order: 6, prompt: "Défi : un triangle a une aire de 24 cm² et une base de 6 cm. Quelle est sa hauteur ? Calcule ensuite -5 + cette hauteur.", answer: "3", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "L'aire vaut (6 x hauteur) / 2 = 24, donc 6 x hauteur = 48, donc la hauteur vaut 8 cm. Ensuite, -5 + 8 = 3." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "La grande révision : verbes irréguliers, impératif, conditionnel et plus-que-parfait",
      xpReward: 24,
      story: {
        hook: "Cette semaine, tu as conjugué des verbes irréguliers, donné des ordres à l'impératif, exprimé la politesse au conditionnel, et raconté une action antérieure au plus-que-parfait.",
        concreteExample: "Compare : elle vient (présent), viens ! (impératif), elle viendrait (conditionnel), elle était venue (plus-que-parfait).",
        reveal: "Chacun de ces temps a un rôle précis : décrire le présent, donner un ordre, exprimer une hypothèse, ou raconter une action encore plus ancienne. Bravo pour cette semaine riche en conjugaison !",
        bridgeToConcept: "Présent irrégulier : formes à apprendre par cœur. Impératif : trois personnes, sans pronom sujet. Conditionnel : radical du futur et terminaisons de l'imparfait. Plus-que-parfait : auxiliaire à l'imparfait et participe passé.",
        illustrationEmoji: "⏳"
      },
      examples: [
        {
          title: "Des exemples de tous les jours, tous les temps mélangés",
          steps: [
            { text: "Elle vient chaque matin (présent).", illustrationEmoji: "🌅" },
            { text: "Viens vite ! (impératif)", illustrationEmoji: "📢" },
            { text: "Elle viendrait si elle pouvait (conditionnel), et elle était déjà venue la semaine dernière (plus-que-parfait).", illustrationEmoji: "⏮️" }
          ]
        },
        {
          title: "Attention à l'erreur fréquente",
          steps: [
            { text: "Beaucoup d'élèves confondent le conditionnel (je viendrais) et le futur (je viendrai), qui se prononcent presque pareil.", illustrationEmoji: "❌" },
            { text: "Le futur annonce une certitude ; le conditionnel exprime un souhait ou une condition.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper, et le résumé",
          steps: [
            { text: "Astuce : pour reconnaître le conditionnel, pense à la terminaison -ais comme à l'imparfait, mais avec le radical du futur.", illustrationEmoji: "🧭" },
            { text: "Résumé : cette semaine, tu as revu des verbes irréguliers, l'impératif pour donner un ordre, le conditionnel pour la politesse ou l'hypothèse, et le plus-que-parfait pour une action encore plus ancienne.", illustrationEmoji: "📝" }
          ]
        }
      ],
      questions: [
        {
          order: 1,
          type: "input",
          prompt: "Complète au présent : Elle ____ (prendre) son sac.",
          answer: "prend",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Avec elle, le verbe prendre se conjugue elle prend, sans terminaison supplémentaire.",
          strictAccents: true
        },
        {
          order: 2,
          type: "input",
          prompt: "Mets à l'impératif (2e personne du singulier) : ____ (venir) ici !",
          answer: "viens",
          kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.",
          explanationWhenWrong: "À l'impératif, avec tu, le verbe venir se conjugue viens.",
          strictAccents: true
        },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse au conditionnel : Je ____ (vouloir) un peu d'eau.",
          options: ["voudrais", "voudrai", "veux"],
          answer: "voudrais",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Le verbe vouloir au conditionnel présent avec je donne je voudrais.",
          strictAccents: true
        },
        {
          order: 4,
          type: "input",
          prompt: "Complète au plus-que-parfait : Il ____ (dire) la vérité avant que je pose la question.",
          answer: "avait dit",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Le verbe dire se conjugue avec avoir : il avait dit, avec l'auxiliaire à l'imparfait.",
          strictAccents: true
        },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse à l'impératif (1re personne du pluriel) : ____ (dire) merci !",
          options: ["disons", "dites", "dis"],
          answer: "disons",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "À l'impératif, avec nous, le verbe dire se conjugue disons.",
          strictAccents: true
        },
        {
          order: 6,
          type: "match",
          prompt: "Défi : associe chaque temps à la forme du verbe venir qui convient, avec le sujet elle.",
          answer: "présent = vient ; conditionnel = viendrait ; plus-que-parfait = était venue",
          matchPairs: [
            { left: "présent", right: "vient" },
            { left: "conditionnel", right: "viendrait" },
            { left: "plus-que-parfait", right: "était venue" }
          ],
          kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.",
          explanationWhenWrong: "elle vient (présent), elle viendrait (conditionnel), elle était venue (plus-que-parfait) : chaque temps a sa propre construction.",
          strictAccents: true
        }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "La grande révision : compléments circonstanciels, phrases, pronoms et voix passive",
      xpReward: 24,
      story: {
        hook: "Cette semaine, tu as précisé où, quand et comment, distingué la phrase simple et la phrase complexe, remplacé des mots par des pronoms, et changé de voix.",
        concreteExample: "Hier, à la piscine, Léa a nagé rapidement pendant que son frère regardait.",
        reveal: "Cette phrase contient des compléments circonstanciels, deux propositions, et pourrait aussi se transformer avec des pronoms ou à la voix passive. Bravo, tu maîtrises tous ces outils de grammaire !",
        bridgeToConcept: "Réviser la grammaire, c'est utiliser plusieurs outils sur la même phrase : les compléments circonstanciels (quand, où, comment), le nombre de propositions, les pronoms compléments, et la voix active ou passive.",
        illustrationEmoji: "🔑"
      },
      examples: [
        {
          title: "Exemple 1 : Hier, dans la cour, les enfants ont joué bruyamment.",
          steps: [
            { text: "Hier = complément circonstanciel de temps.", illustrationEmoji: "🕰️" },
            { text: "dans la cour = complément circonstanciel de lieu, et bruyamment = complément circonstanciel de manière.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : Léa lit le livre. -> Léa le lit. Le chat mange la souris. -> La souris est mangée par le chat.",
          steps: [
            { text: "le remplace le livre, un COD, pour éviter de le répéter.", illustrationEmoji: "🔁" },
            { text: "À la voix passive, le sujet (la souris) subit l'action.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans ce matin, à l'école, les élèves ont chanté joyeusement, quel est le complément circonstanciel de lieu ?", answer: "à l'école", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "à l'école répond à la question où ? c'est le complément circonstanciel de lieu." },
        { order: 2, prompt: "Le vent souffle fort parce que la tempête arrive. Est-ce une phrase simple ou complexe ?", answer: "complexe", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Il y a deux verbes conjugués (souffle, arrive) : c'est une phrase complexe." },
        { order: 3, prompt: "Remplace le COD par un pronom : Il regarde les photos. -> Il ___ regarde.", answer: "les", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "les remplace les photos, un COD au pluriel." },
        { order: 4, prompt: "Le chat griffe le tapis. Transforme cette phrase à la voix passive.", answer: "Le tapis est griffé par le chat.", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "On place le COD (le tapis) en sujet, puis on utilise être et le participe passé griffé, suivi de par le chat." },
        { order: 5, prompt: "Remplace le COI par un pronom : Elle parle à ses amis. -> Elle ___ parle.", answer: "leur", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "leur remplace à ses amis, un COI au pluriel." },
        { order: 6, prompt: "Défi : dans la phrase Hier soir, Léa a offert un cadeau à sa sœur avec joie, cite le complément circonstanciel de temps, puis remplace à sa sœur par un pronom.", answer: "hier soir ; lui", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "hier soir répond à quand ? (temps), et lui remplace à sa sœur, un COI au singulier." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Encore de nouveaux petits tests magiques ensemble",
      xpReward: 24,
      story: {
        hook: "Imagine que tu as ajouté quatre nouveaux outils dans ta boîte à outils de l'orthographe cette semaine.",
        concreteExample: "Cette semaine, tu as appris à tester quand/quant/qu'en, sans/s'en/sens, peut/peu/peux, et quel/quelle/qu'elle.",
        reveal: "Chaque fois que tu hésites, tu peux utiliser le bon test dans ta tête, comme avec les tests des semaines précédentes. Bravo, ta boîte à outils est encore plus complète !",
        bridgeToConcept: "Réviser l'orthographe, c'est se rappeler quel test utiliser pour chaque mot qui se ressemble, et garder ces réflexes toute sa vie.",
        illustrationEmoji: "🧰"
      },
      examples: [
        {
          title: "Exemple 1 : ... arrives-tu ? ... à moi, je reste.",
          steps: [
            { text: "On teste à quel moment (quand) : ça fonctionne, donc quand arrives-tu.", illustrationEmoji: "✅" },
            { text: "On teste à propos de (quant à) : ça fonctionne aussi, donc quant à moi.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : Il part ... dire un mot, il ... va vite.",
          steps: [
            { text: "On teste avec (contraire) : il part sans un mot fonctionne, donc sans.", illustrationEmoji: "✅" },
            { text: "On teste s'en aller : il s'en allait fonctionne, donc il s'en va.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : ___ pars-tu en vacances ? (quand, quant, qu'en)", answer: "quand", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On peut dire à quel moment pars-tu en vacances ? donc c'est quand.", strictAccents: true },
        { order: 2, prompt: "Complète : Il mange ___ faire de bruit. (sans, s'en, sens/sent)", answer: "sans", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "sans est le contraire de avec : il mange sans faire de bruit.", strictAccents: true },
        { order: 3, prompt: "Complète : Je ___ venir demain. (peut, peu, peux)", answer: "peux", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec je, le verbe pouvoir donne peux : je peux venir.", strictAccents: true },
        { order: 4, prompt: "Complète : ___ belle journée ! (quel, quelle, qu'elle)", answer: "quelle", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "journée est un nom féminin singulier, donc on écrit quelle.", strictAccents: true },
        { order: 5, prompt: "Complète : Il reste ___ de temps. (peut, peu, peux)", answer: "peu", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "peu est le contraire de beaucoup de temps : c'est l'adverbe de quantité.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les trois mots. ___ à moi, je crois ___ elle viendra, et je ___ t'aider si besoin.", answer: "quant qu'elle peux", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "quant à moi (à propos de moi) ; qu'elle viendra (on peut dire qu'il viendra) ; je peux t'aider (le verbe pouvoir avec je).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Le grand défi de calcul mental de la semaine",
      xpReward: 24,
      story: {
        hook: "Imagine un grand jeu où tu mélanges divisions par 10, 100 et 1 000, multiplications par 5, astuces de compensation, et multiplication par 9.",
        concreteExample: "Cette semaine, tu as appris à diviser par 10, 100 et 1 000, à multiplier par 5, 25 et 50, à ajouter en passant par la dizaine proche, et à multiplier par 9.",
        reveal: "Aujourd'hui, tu vas utiliser toutes ces méthodes ensemble. Bravo pour cette semaine de calcul mental !",
        bridgeToConcept: "Réviser le calcul mental, c'est choisir la bonne méthode rapide selon le calcul à faire.",
        illustrationEmoji: "🏆"
      },
      examples: [
        {
          title: "Exemple 1 : 480 / 10, puis x 5",
          steps: [
            { text: "480 / 10 = 48.", illustrationEmoji: "➗" },
            { text: "48 x 5 : 48 x 10 = 480, puis 480 / 2 = 240.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : 23 x 9",
          steps: [
            { text: "23 x 10 = 230.", illustrationEmoji: "🔟" },
            { text: "230 - 23 = 207.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 3 600 / 100", answer: "36", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On enlève deux zéros à 3 600 : 36." },
        { order: 2, prompt: "Calcule : 18 x 5", answer: "90", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "18 x 10 = 180, puis 180 / 2 = 90." },
        { order: 3, prompt: "Calcule : 47 + 9 grâce à l'astuce de la dizaine proche.", answer: "56", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "47 + 10 = 57, puis 57 - 1 = 56." },
        { order: 4, prompt: "Calcule : 14 x 9", answer: "126", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "14 x 10 = 140, puis 140 - 14 = 126." },
        { order: 5, prompt: "Calcule : 24 x 25", answer: "600", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "24 x 100 = 2 400, puis 2 400 / 4 = 600." },
        { order: 6, prompt: "Défi : calcule 8 100 / 100, puis multiplie le résultat par 9.", answer: "729", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "8 100 / 100 = 81. Ensuite, 81 x 9 : 81 x 10 = 810, puis 810 - 81 = 729." }
      ]
    }
  ]
};
