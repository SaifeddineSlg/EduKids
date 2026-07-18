import { DayCurriculum } from "@/models/types";

export const day07: DayCurriculum = {
  dayNumber: 7,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Des fractions différentes qui disent la même chose",
      xpReward: 24,
      story: {
        hook: "Imagine deux façons différentes de couper le même gâteau, mais qui donnent exactement la même part.",
        concreteExample: "Une pizza coupée en 4 parts dont tu manges 2 parts, et une pizza identique coupée en 8 parts dont tu manges 4 parts. As-tu mangé la même quantité dans les deux cas ?",
        reveal: "2/4 et 4/8 représentent la même quantité : la moitié de la pizza. On dit que ce sont des fractions équivalentes. Bravo, tu as reconnu deux fractions égales !",
        bridgeToConcept: "Deux fractions sont équivalentes quand on multiplie ou on divise le haut et le bas par le même nombre : 2/4 = (2 x 2) / (4 x 2) = 4/8.",
        illustrationEmoji: "🍕"
      },
      examples: [
        {
          title: "Exemple 1 : simplifier 6/8",
          steps: [
            { text: "On cherche un nombre qui divise 6 et 8. Ici, c'est 2.", illustrationEmoji: "🔎" },
            { text: "6 / 2 = 3 et 8 / 2 = 4.", illustrationEmoji: "➗" },
            { text: "Donc 6/8 = 3/4.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : trouver une fraction équivalente à 1/3",
          steps: [
            { text: "On multiplie le haut et le bas par le même nombre, par exemple 3.", illustrationEmoji: "✖️" },
            { text: "1 x 3 = 3 et 3 x 3 = 9.", illustrationEmoji: "➗" },
            { text: "Donc 1/3 = 3/9.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Simplifie la fraction 2/4 en divisant le haut et le bas par 2.", answer: "1/2", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "2 / 2 = 1 et 4 / 2 = 2, donc 2/4 = 1/2." },
        { order: 2, prompt: "Simplifie la fraction 4/6 en divisant le haut et le bas par 2.", answer: "2/3", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "4 / 2 = 2 et 6 / 2 = 3, donc 4/6 = 2/3." },
        { order: 3, prompt: "Trouve une fraction équivalente à 1/2 en multipliant le haut et le bas par 3.", answer: "3/6", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "1 x 3 = 3 et 2 x 3 = 6, donc 1/2 = 3/6." },
        { order: 4, prompt: "Simplifie la fraction 9/12 en divisant le haut et le bas par 3.", answer: "3/4", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "9 / 3 = 3 et 12 / 3 = 4, donc 9/12 = 3/4." },
        { order: 5, prompt: "Simplifie la fraction 10/15 en divisant le haut et le bas par 5.", answer: "2/3", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "10 / 5 = 2 et 15 / 5 = 3, donc 10/15 = 2/3." },
        { order: 6, prompt: "Défi : simplifie la fraction 12/16 le plus possible.", answer: "3/4", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "12 et 16 se divisent tous les deux par 4 : 12 / 4 = 3 et 16 / 4 = 4, donc 12/16 = 3/4." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le futur simple, le temps qui annonce demain",
      xpReward: 24,
      story: {
        hook: "Il existe un temps qui sert à annoncer ce qui va se passer plus tard, comme une promesse pour demain.",
        concreteExample: "Écoute : je jouerai, tu joueras, il jouera, nous jouerons, vous jouerez, ils joueront.",
        reveal: "À quoi sert le futur simple ? Il sert à annoncer une action qui n'a pas encore eu lieu. Comment le reconnaître ? On garde l'infinitif du verbe en entier, et on ajoute les terminaisons du verbe avoir : -ai, -as, -a, -ons, -ez, -ont. Bravo, tu entends déjà la promesse du futur !",
        bridgeToConcept: "Terminaisons à retenir pour le futur simple des verbes en -er : -erai, -eras, -era, -erons, -erez, -eront.",
        illustrationEmoji: "🔮"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Demain, je jouerai avec mes amis au parc.", illustrationEmoji: "⚽" },
            { text: "L'année prochaine, tu changeras de classe.", illustrationEmoji: "🎒" },
            { text: "Bientôt, nous fêterons son anniversaire.", illustrationEmoji: "🎂" }
          ]
        },
        {
          title: "Attention à l'erreur fréquente",
          steps: [
            { text: "Beaucoup d'élèves oublient le r de l'infinitif et écrivent « je jouai » au lieu de je jouerai. C'est une confusion avec un autre temps !", illustrationEmoji: "❌" },
            { text: "Au futur simple, on garde toujours l'infinitif complet avant d'ajouter la terminaison : je jouer + ai = je jouerai.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper, et le résumé",
          steps: [
            { text: "Astuce : les terminaisons du futur ressemblent au verbe avoir au présent (ai, as, a, ons, ez, ont), collées après l'infinitif.", illustrationEmoji: "🧠" },
            { text: "Résumé : pour former le futur simple d'un verbe en -er, on ne touche pas à l'infinitif, on ajoute seulement la terminaison à la fin.", illustrationEmoji: "📝" }
          ]
        }
      ],
      questions: [
        {
          order: 1,
          type: "input",
          prompt: "Complète au futur simple : Je ____ (chanter) à la fête.",
          answer: "chanterai",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "On garde l'infinitif chanter en entier et on ajoute -ai : je chanterai.",
          strictAccents: true
        },
        {
          order: 2,
          type: "input",
          prompt: "Complète au futur simple : Tu ____ (danser) avec nous.",
          answer: "danseras",
          kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.",
          explanationWhenWrong: "On garde l'infinitif danser et on ajoute -as : tu danseras.",
          strictAccents: true
        },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse au futur simple : Nous ____ (regarder) le feu d'artifice.",
          options: ["regardons", "regarderons", "regardions"],
          answer: "regarderons",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "On garde l'infinitif regarder et on ajoute -ons : nous regarderons.",
          strictAccents: true
        },
        {
          order: 4,
          type: "input",
          prompt: "Complète au futur simple : Vous ____ (voyager) cet été.",
          answer: "voyagerez",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "On garde l'infinitif voyager et on ajoute -ez : vous voyagerez.",
          strictAccents: true
        },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse au futur simple : Elles ____ (arriver) demain matin.",
          options: ["arrivent", "arriveront", "arrivaient"],
          answer: "arriveront",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "On garde l'infinitif arriver et on ajoute -ont : elles arriveront.",
          strictAccents: true
        },
        {
          order: 6,
          type: "match",
          prompt: "Défi : associe chaque sujet à la bonne forme du futur simple du verbe aimer.",
          answer: "Je = aimerai ; Nous = aimerons ; Ils = aimeront",
          matchPairs: [
            { left: "Je", right: "aimerai" },
            { left: "Nous", right: "aimerons" },
            { left: "Ils", right: "aimeront" }
          ],
          kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.",
          explanationWhenWrong: "Dans chaque cas, on garde l'infinitif aimer en entier, puis on ajoute la terminaison du futur : -ai, -ons, -ont.",
          strictAccents: true
        }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "À qui, de quoi ? le complément d'objet indirect (COI)",
      xpReward: 24,
      story: {
        hook: "Parfois, l'action du verbe n'arrive pas directement sur quelqu'un : elle passe par un petit mot de liaison comme à ou de.",
        concreteExample: "Regarde la phrase : Léa parle à sa sœur. Léa parle à qui ?",
        reveal: "Léa parle à sa sœur : à sa sœur reçoit l'action, mais avec le petit mot à entre le verbe et elle. On appelle ça le complément d'objet indirect, ou COI. Bravo, tu as trouvé le complément relié par une préposition !",
        bridgeToConcept: "Pour trouver le COI, on pose la question à qui ?, à quoi ?, de qui ? ou de quoi ? juste après le verbe.",
        illustrationEmoji: "🔗"
      },
      examples: [
        {
          title: "Exemple 1 : Le loup pense à son repas",
          steps: [
            { text: "Le verbe est pense.", illustrationEmoji: "🐺" },
            { text: "Le loup pense à quoi ? À son repas.", illustrationEmoji: "❓" },
            { text: "À son repas est le COI du verbe pense.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : Nous parlons de nos vacances",
          steps: [
            { text: "Le verbe est parlons.", illustrationEmoji: "🗣️" },
            { text: "Nous parlons de quoi ? De nos vacances.", illustrationEmoji: "❓" },
            { text: "De nos vacances est le COI du verbe parlons.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans elle téléphone à sa grand-mère, quel est le COI du verbe téléphone ?", answer: "à sa grand-mère", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Elle téléphone à qui ? À sa grand-mère : c'est le COI, relié par la préposition à." },
        { order: 2, prompt: "Dans il pense à ses vacances, quel est le COI du verbe pense ?", answer: "à ses vacances", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Il pense à quoi ? À ses vacances : c'est le COI." },
        { order: 3, prompt: "Dans nous parlons de notre voyage, quel est le COI du verbe parlons ?", answer: "de notre voyage", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Nous parlons de quoi ? De notre voyage : c'est le COI." },
        { order: 4, prompt: "Dans les enfants obéissent à leurs parents, quel est le COI du verbe obéissent ?", answer: "à leurs parents", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Les enfants obéissent à qui ? À leurs parents : c'est le COI." },
        { order: 5, prompt: "Dans elle se souvient de son enfance, quel est le COI du verbe se souvient ?", answer: "de son enfance", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Elle se souvient de quoi ? De son enfance : c'est le COI." },
        { order: 6, prompt: "Défi : dans le professeur explique la leçon à ses élèves, quel est le COI du verbe explique (et non le COD) ?", answer: "à ses élèves", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Le professeur explique quoi ? La leçon : c'est le COD. Le professeur explique à qui ? À ses élèves : c'est le COI, relié par la préposition à." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "on ou ont : le test avec avaient",
      xpReward: 24,
      story: {
        hook: "Voici un nouveau petit test magique, cette fois pour ne plus confondre on et ont.",
        concreteExample: "Regarde : Ils ... beaucoup de jouets. Est-ce que c'est on ou ont ?",
        reveal: "On essaie de remplacer par avaient : Ils avaient beaucoup de jouets. Ça fonctionne ! Donc on écrit ont, le verbe avoir. Bravo, tu as réussi le test !",
        bridgeToConcept: "Si avaient fonctionne, on écrit ont (verbe avoir). Sinon, on écrit on, qu'on peut remplacer par il, le pronom.",
        illustrationEmoji: "🪄"
      },
      examples: [
        {
          title: "Exemple 1 : On joue dans la cour",
          steps: [
            { text: "On essaie avaient : Avaient joue dans la cour. Ça ne fonctionne pas.", illustrationEmoji: "🚫" },
            { text: "On essaie il : Il joue dans la cour. Ça fonctionne ! Donc on écrit on, le pronom.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : Elles ont un beau jardin",
          steps: [
            { text: "On essaie avaient : Elles avaient un beau jardin. Ça fonctionne !", illustrationEmoji: "✅" },
            { text: "Donc on écrit ont, le verbe avoir.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        {
          order: 1,
          prompt: "Complète : ___ va à la piscine demain. (on ou ont)",
          answer: "on",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "On peut dire il va à la piscine, donc c'est on, le pronom.",
          strictAccents: true
        },
        {
          order: 2,
          prompt: "Complète : Mes cousins ___ un chien adorable. (on ou ont)",
          answer: "ont",
          kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.",
          explanationWhenWrong: "Mes cousins avaient un chien adorable fonctionne, donc c'est ont, le verbe avoir.",
          strictAccents: true
        },
        {
          order: 3,
          prompt: "Complète : ___ mange une glace à la plage. (on ou ont)",
          answer: "on",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "On peut dire il mange une glace, donc c'est on, le pronom.",
          strictAccents: true
        },
        {
          order: 4,
          prompt: "Complète : Les enfants ___ trouvé un trésor. (on ou ont)",
          answer: "ont",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Les enfants avaient trouvé un trésor fonctionne, donc c'est ont, le verbe avoir.",
          strictAccents: true
        },
        {
          order: 5,
          prompt: "Complète : ___ regarde un beau film ce soir. (on ou ont)",
          answer: "on",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "On peut dire il regarde un beau film, donc c'est on, le pronom.",
          strictAccents: true
        },
        {
          order: 6,
          prompt: "Défi : complète les deux mots. ___ dit que les oiseaux ___ construit leur nid dans le grand chêne.",
          answer: "on ont",
          kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.",
          explanationWhenWrong: "On dit (on peut dire il dit, le pronom) ; les oiseaux avaient construit fonctionne, donc ont, le verbe avoir.",
          strictAccents: true
        }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Doubler et prendre la moitié en un clin d'œil",
      xpReward: 24,
      story: {
        hook: "Imagine un miroir magique : il peut doubler ce que tu vois, ou couper exactement en deux.",
        concreteExample: "Pour doubler 34, on double les dizaines et les unités séparément : 30 double = 60, 4 double = 8.",
        reveal: "60 + 8 = 68. Donc le double de 34 est 68. Bravo, tu as doublé un nombre en un clin d'œil !",
        bridgeToConcept: "Pour doubler un nombre, on peut doubler les dizaines et les unités séparément, puis additionner. Pour prendre la moitié, on fait l'inverse.",
        illustrationEmoji: "🪞"
      },
      examples: [
        {
          title: "Exemple 1 : le double de 45",
          steps: [
            { text: "40 double = 80, et 5 double = 10.", illustrationEmoji: "✖️" },
            { text: "80 + 10 = 90. Donc le double de 45 est 90.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : la moitié de 48",
          steps: [
            { text: "40 / 2 = 20, et 8 / 2 = 4.", illustrationEmoji: "➗" },
            { text: "20 + 4 = 24. Donc la moitié de 48 est 24.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule le double de 23.", answer: "46", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "20 double = 40, 3 double = 6, donc 40 + 6 = 46." },
        { order: 2, prompt: "Calcule la moitié de 36.", answer: "18", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "30 / 2 = 15, 6 / 2 = 3, donc 15 + 3 = 18." },
        { order: 3, prompt: "Calcule le double de 57.", answer: "114", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "50 double = 100, 7 double = 14, donc 100 + 14 = 114." },
        { order: 4, prompt: "Calcule la moitié de 84.", answer: "42", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "80 / 2 = 40, 4 / 2 = 2, donc 40 + 2 = 42." },
        { order: 5, prompt: "Calcule le double de 68.", answer: "136", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "60 double = 120, 8 double = 16, donc 120 + 16 = 136." },
        { order: 6, prompt: "Défi : calcule la moitié de 250.", answer: "125", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "200 / 2 = 100, 50 / 2 = 25, donc 100 + 25 = 125." }
      ]
    }
  ]
};
