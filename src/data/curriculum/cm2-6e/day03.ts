import { DayCurriculum } from "@/models/types";

export const day03: DayCurriculum = {
  dayNumber: 3,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Addition et soustraction de nombres décimaux",
      xpReward: 20,
      story: {
        hook: "Imagine que tu dois additionner le prix de deux articles avec des centimes.",
        concreteExample: "Un cahier coûte 2,50 € et un stylo coûte 1,30 €. Combien cela coûte-t-il en tout ?",
        reveal: "2,50 + 1,30 = 3,80 €. Pour additionner des nombres décimaux, on aligne bien la virgule et on additionne comme des nombres entiers.",
        bridgeToConcept: "Pour additionner ou soustraire des décimaux, on aligne les virgules, puis on calcule colonne par colonne.",
        illustrationEmoji: "💶"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "3,25 + 1,50 : on aligne les virgules, on additionne : 3,25 + 1,50 = 4,75.", illustrationEmoji: "🔢" },
            { text: "5,80 - 2,30 = 3,50 (on soustrait colonne par colonne).", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "4,60 + 3,90 : 60 centièmes + 90 centièmes = 150 centièmes, on reporte 1 dans les unités. Résultat : 8,50.", illustrationEmoji: "🔍" },
            { text: "7,00 - 2,45 = 4,55.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 2,50 + 1,30", answer: "3,80", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "2,50 + 1,30 = 3,80." },
        { order: 2, prompt: "Calcule : 3,25 + 1,50", answer: "4,75", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "3,25 + 1,50 = 4,75." },
        { order: 3, prompt: "Calcule : 5,80 - 2,30", answer: "3,50", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "5,80 - 2,30 = 3,50." },
        { order: 4, prompt: "Calcule : 4,60 + 3,90", answer: "8,50", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "4,60 + 3,90 = 8,50 (60+90 centièmes = 1,50, on reporte)." },
        { order: 5, prompt: "Calcule : 7,00 - 2,45", answer: "4,55", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "7,00 - 2,45 = 4,55." },
        { order: 6, prompt: "Défi : un cahier coûte 3,20 € et un stylo 1,80 €. Tu paies avec un billet de 10 €. Combien te rend-on ?", answer: "5", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "3,20 + 1,80 = 5,00 €, puis 10 - 5 = 5 €." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le futur des verbes du 3e groupe",
      xpReward: 20,
      story: {
        hook: "Certains verbes du 3e groupe ont un radical spécial pour parler du futur.",
        concreteExample: "Écoute : demain, je viendrai te voir. Tu verras, ce sera amusant.",
        reveal: "Viendrai et verras sont au futur, mais avec des radicaux irréguliers (viendr-, verr-) qu'il faut connaître par cœur, suivis des terminaisons habituelles du futur.",
        bridgeToConcept: "Venir au futur : je viendrai, tu viendras... Voir au futur : je verrai, tu verras...",
        illustrationEmoji: "🔮"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Nous viendrons vous rendre visite dimanche.", illustrationEmoji: "🚗" },
            { text: "Ils verront le film demain soir.", illustrationEmoji: "🎬" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Apprends bien le radical irrégulier de chaque verbe.", illustrationEmoji: "🔍" },
            { text: "Les terminaisons restent les mêmes : -ai, -as, -a, -ons, -ez, -ont.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Demain, je ____ (venir) te voir.", answer: "viendrai", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec je, le futur de venir est viendrai." },
        { order: 2, prompt: "Complète : Tu ____ (voir) ce beau spectacle.", answer: "verras", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Avec tu, le futur de voir est verras." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Elle ____ (pouvoir) venir demain.",
          options: ["pourra", "pourras", "pourront"],
          answer: "pourra",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Avec elle, le futur de pouvoir est pourra."
        },
        { order: 4, prompt: "Complète : Nous ____ (venir) vous rendre visite.", answer: "viendrons", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Avec nous, le futur de venir est viendrons." },
        { order: 5, prompt: "Complète : Vous ____ (voir) le résultat bientôt.", answer: "verrez", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Avec vous, le futur de voir est verrez." },
        { order: 6, prompt: "Défi : complète les deux verbes. Ils ____ (venir) demain et ils ____ (voir) toute la famille.", answer: "viendront verront", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Ils viendront (venir) et ils verront (voir)." }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Les formes de phrases : affirmative et négative",
      xpReward: 20,
      story: {
        hook: "Imagine qu'une phrase peut dire oui ou dire non, sans changer de type.",
        concreteExample: "Regarde : Je mange une pomme. Je ne mange pas de pomme. Quelle différence ?",
        reveal: "La première dit oui (forme affirmative), la deuxième dit non (forme négative), grâce à ne...pas qui encadre le verbe.",
        bridgeToConcept: "La forme affirmative dit oui, sans négation. La forme négative dit non, avec ne...pas, ne...jamais, ne...plus, ne...rien.",
        illustrationEmoji: "🙅"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Il aime le chocolat (affirmative) → Il n'aime pas le chocolat (négative).", illustrationEmoji: "🍫" },
            { text: "Elle vient toujours (affirmative) → Elle ne vient jamais (négative).", illustrationEmoji: "🚫" }
          ]
        },
        {
          title: "L'astuce pour reconnaître la forme négative",
          steps: [
            { text: "Cherche les petits mots ne (ou n') associés à pas, jamais, plus ou rien.", illustrationEmoji: "🔍" },
            { text: "S'ils sont présents, la phrase est négative.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Quelle est la forme de la phrase : Je mange une pomme.", answer: "affirmative", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Elle ne contient pas de négation : c'est la forme affirmative." },
        { order: 2, prompt: "Quelle est la forme de la phrase : Je ne mange pas de pomme.", answer: "négative", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Ne...pas encadre le verbe : c'est la forme négative." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Elle ne vient jamais est une phrase...",
          options: ["négative", "affirmative", "interrogative"],
          answer: "négative",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Ne...jamais est une négation : c'est la forme négative."
        },
        { order: 4, prompt: "Transforme à la forme négative : Il aime les épinards.", answer: "il n'aime pas les épinards", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "On ajoute ne...pas autour du verbe : il n'aime pas les épinards." },
        { order: 5, prompt: "Transforme à la forme affirmative : Elle ne veut pas jouer.", answer: "elle veut jouer", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "On retire ne...pas : elle veut jouer." },
        { order: 6, prompt: "Défi : donne la forme de chacune de ces deux phrases, dans l'ordre. Nous ne partons plus. Vous restez ici.", answer: "négative affirmative", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Nous ne partons plus est négative, Vous restez ici est affirmative." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Peu, peux ou peut",
      xpReward: 20,
      story: {
        hook: "Imagine trois mots qui se prononcent pareil mais qui n'ont pas du tout le même rôle.",
        concreteExample: "Regarde : je ___ venir demain. Est-ce que c'est peu, peux ou peut ?",
        reveal: "Je peux vient du verbe pouvoir (avec je ou tu). Il/elle peut est la 3e personne. Peu (sans x ni t) veut dire pas beaucoup, comme dans un peu de sucre.",
        bridgeToConcept: "Peux s'utilise avec je ou tu (pouvoir). Peut s'utilise avec il/elle/on (pouvoir). Peu signifie pas beaucoup.",
        illustrationEmoji: "🤏"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Je peux t'aider si tu veux : peux avec je (pouvoir).", illustrationEmoji: "🙋" },
            { text: "Il peut venir demain : peut avec il (pouvoir).", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Peu, la quantité",
          steps: [
            { text: "Il reste peu de gâteau : peu veut dire pas beaucoup.", illustrationEmoji: "🍰" },
            { text: "Un peu de patience suffit.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je ___ venir demain. (peu/peux/peut)", answer: "peux", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec je, pouvoir donne peux." },
        { order: 2, prompt: "Complète : Il ___ t'aider si tu veux. (peu/peux/peut)", answer: "peut", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Avec il, pouvoir donne peut." },
        { order: 3, prompt: "Complète : Il reste ___ de gâteau. (peu/peux/peut)", answer: "peu", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Peu signifie pas beaucoup, sans x ni t." },
        { order: 4, prompt: "Complète : Tu ___ venir avec nous. (peu/peux/peut)", answer: "peux", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Avec tu, pouvoir donne peux." },
        { order: 5, prompt: "Complète : Elle ___ finir son travail à temps. (peu/peux/peut)", answer: "peut", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Avec elle, pouvoir donne peut." },
        { order: 6, prompt: "Défi : complète les trois mots. Je ___ (peux) t'aider un ___ (peu) si tu ___ (peux) attendre.", answer: "peux peu peux", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Je peux (pouvoir), un peu (quantité), tu peux (pouvoir)." }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Doubles et moitiés de grands nombres",
      xpReward: 20,
      story: {
        hook: "Imagine que tu dois calculer très vite le double ou la moitié d'un grand nombre.",
        concreteExample: "Une usine produit 150 jouets par jour. Combien en produit-elle en deux jours ?",
        reveal: "Le double de 150, c'est 300. Pour trouver le double d'un grand nombre, on peut doubler chaque partie séparément : 100 double en 200, 50 double en 100, total 300.",
        bridgeToConcept: "Pour doubler ou trouver la moitié d'un grand nombre, on décompose en centaines, dizaines et unités.",
        illustrationEmoji: "🏭"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "Double de 240 : double de 200 = 400, double de 40 = 80, total 480.", illustrationEmoji: "🔢" },
            { text: "Moitié de 480 : moitié de 400 = 200, moitié de 80 = 40, total 240.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Double de 350 : double de 300 = 600, double de 50 = 100, total 700.", illustrationEmoji: "🔍" },
            { text: "Moitié de 700 : moitié de 700 = 350.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule le double de 150", answer: "300", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Double de 100=200, double de 50=100, total 300." },
        { order: 2, prompt: "Calcule le double de 240", answer: "480", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Double de 200=400, double de 40=80, total 480." },
        { order: 3, prompt: "Calcule la moitié de 480", answer: "240", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Moitié de 400=200, moitié de 80=40, total 240." },
        { order: 4, prompt: "Calcule le double de 350", answer: "700", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Double de 300=600, double de 50=100, total 700." },
        { order: 5, prompt: "Calcule la moitié de 700", answer: "350", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "700 divisé par 2 = 350." },
        { order: 6, prompt: "Défi : calcule le double de 260, puis la moitié du résultat. Quel est le nombre final ?", answer: "260", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Double de 260 = 520, moitié de 520 = 260 : on retrouve le nombre de départ." }
      ]
    }
  ]
};
