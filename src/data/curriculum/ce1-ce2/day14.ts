import { DayCurriculum } from "@/models/types";

export const day14: DayCurriculum = {
  dayNumber: 14,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Les fractions simples : la moitié, le tiers, le quart",
      xpReward: 26,
      story: {
        hook: "Imagine que tu partages une pizza en plusieurs parts égales, mais sans la couper en unités.",
        concreteExample: "Tu partages une pizza en 4 parts égales et tu en manges une part. Quelle fraction de la pizza as-tu mangée ?",
        reveal: "Tu as mangé un quart de la pizza, ça s'écrit 1/4. Le nombre du bas dit en combien de parts on a coupé le tout, le nombre du haut dit combien de parts on a prises. Bravo, tu viens de lire une fraction !",
        bridgeToConcept: "Une fraction comme 1/4 veut dire une part sur quatre parts égales.",
        illustrationEmoji: "🍕"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "1/2, c'est une part sur deux parts égales : la moitié.", illustrationEmoji: "➗" },
            { text: "1/3, c'est une part sur trois parts égales : le tiers.", illustrationEmoji: "➗" }
          ]
        },
        {
          title: "L'astuce pour lire une fraction",
          steps: [
            { text: "Le nombre du bas dit en combien de parts égales on a coupé le tout.", illustrationEmoji: "🔍" },
            { text: "Le nombre du haut dit combien de parts on a prises.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Une pizza est coupée en 2 parts égales. Comment s'appelle une seule part ?", answer: "la moitié", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Une part sur deux parts égales s'appelle la moitié." },
        { order: 2, prompt: "Un gâteau est coupé en 4 parts égales. Comment s'appelle une seule part ?", answer: "le quart", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Une part sur quatre parts égales s'appelle le quart." },
        { order: 3, prompt: "Une tarte est coupée en 3 parts égales. Comment s'appelle une seule part ?", answer: "le tiers", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Une part sur trois parts égales s'appelle le tiers." },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la fraction qui représente le quart.",
          options: ["1/2", "1/3", "1/4"],
          answer: "1/4",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Le quart, c'est une part sur quatre parts égales : 1/4."
        },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la fraction qui représente la moitié.",
          options: ["1/2", "1/3", "1/4"],
          answer: "1/2",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "La moitié, c'est une part sur deux parts égales : 1/2."
        },
        { order: 6, prompt: "Défi : Léa mange la moitié d'un gâteau coupé en 2 parts égales, puis Théo mange le quart d'un autre gâteau coupé en 4 parts égales. Combien de parts ont-ils mangées en tout ?", answer: "2", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Léa mange 1 part et Théo mange 1 part : 1 + 1 = 2 parts en tout." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le futur simple des verbes en -ir comme finir",
      xpReward: 26,
      story: {
        hook: "Tu connais déjà le futur simple des verbes en -er. Découvrons aujourd'hui celui des verbes en -ir comme finir.",
        concreteExample: "Écoute : je finirai, tu finiras, il finira, nous finirons, vous finirez, ils finiront.",
        reveal: "À quoi sert ce temps ? Il annonce une action à venir. Comment le reconnaître ? On garde l'infinitif complet du verbe (finir) et on ajoute -ai, -as, -a, -ons, -ez, -ont, sans le petit -iss- de l'imparfait.",
        bridgeToConcept: "Futur simple des verbes en -ir comme finir : infinitif complet + ai, as, a, ons, ez, ont.",
        illustrationEmoji: "🔮"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Demain, je finirai mon dessin.", illustrationEmoji: "🎨" },
            { text: "Nous choisirons un nouveau jeu ce week-end.", illustrationEmoji: "🎲" }
          ]
        },
        {
          title: "Attention à l'erreur fréquente",
          steps: [
            { text: "Beaucoup d'enfants ajoutent -iss- au futur, comme à l'imparfait. C'est une erreur !", illustrationEmoji: "❌" },
            { text: "Au futur simple, il n'y a jamais de -iss- : je finirai, pas je finissirai.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Demain, je ____ (finir) mon dessin.", answer: "finirai", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Au futur simple, on garde l'infinitif complet finir et on ajoute -ai : je finirai.", strictAccents: true },
        { order: 2, prompt: "Complète : Nous ____ (choisir) un cadeau ensemble.", answer: "choisirons", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "Au futur simple, on garde l'infinitif complet choisir et on ajoute -ons : choisirons.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Vous ____ (grandir) encore un peu.",
          options: ["grandirez", "grandissez", "grandissiez"],
          answer: "grandirez",
          kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.",
          explanationWhenWrong: "Au futur simple, on garde l'infinitif complet grandir et on ajoute -ez : grandirez.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Ils ____ (réussir) leur examen.", answer: "réussiront", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Au futur simple, on garde l'infinitif complet réussir et on ajoute -ont : réussiront.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Tu ____ (réfléchir) avant de répondre.",
          options: ["réfléchiras", "réfléchissais", "réfléchira"],
          answer: "réfléchiras",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.",
          explanationWhenWrong: "Au futur simple, on garde l'infinitif complet réfléchir et on ajoute -as : réfléchiras.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Nous ____ (finir) nos devoirs et vous ____ (choisir) un film ce soir.", answer: "finirons choisirez", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "Nous finirons et vous choisirez : deux futurs simples de verbes en -ir, sans le -iss- de l'imparfait.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Le complément d'objet direct (COD)",
      xpReward: 26,
      story: {
        hook: "Imagine que le verbe pose une petite question, quoi ou qui, et qu'un mot vient y répondre directement.",
        concreteExample: "Regarde : Léa mange une pomme. Léa mange quoi ? Une pomme.",
        reveal: "À quoi sert ce mot ? Il complète le verbe en répondant directement à la question quoi ou qui, sans petit mot devant. Comment le reconnaître ? On pose la question le verbe + qui ou quoi juste après le verbe.",
        bridgeToConcept: "Le complément d'objet direct (COD) répond à la question qui ou quoi posée juste après le verbe, sans préposition.",
        illustrationEmoji: "🎯"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Théo lit un livre : Théo lit quoi ? Un livre. C'est le COD.", illustrationEmoji: "📖" },
            { text: "Camille regarde son chat : Camille regarde qui ? Son chat. C'est le COD.", illustrationEmoji: "🐱" }
          ]
        },
        {
          title: "L'astuce pour trouver le COD",
          steps: [
            { text: "Pose la question le verbe + qui ou quoi.", illustrationEmoji: "❓" },
            { text: "La réponse directe, sans petit mot devant, est le COD.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Léa mange une pomme. Quel est le COD ?", answer: "une pomme", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Léa mange quoi ? Une pomme. C'est le COD." },
        { order: 2, prompt: "Paul regarde son chien. Quel est le COD ?", answer: "son chien", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Paul regarde qui ? Son chien. C'est le COD." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis le COD : Théo lit une histoire passionnante.",
          options: ["Théo", "lit", "une histoire passionnante"],
          answer: "une histoire passionnante",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Théo lit quoi ? Une histoire passionnante. C'est le COD."
        },
        { order: 4, prompt: "Ma soeur dessine une maison. Quel est le COD ?", answer: "une maison", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Ma soeur dessine quoi ? Une maison. C'est le COD." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le COD : Les enfants écoutent la maîtresse.",
          options: ["les enfants", "écoutent", "la maîtresse"],
          answer: "la maîtresse",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Les enfants écoutent qui ? La maîtresse. C'est le COD."
        },
        { order: 6, prompt: "Défi : dans la phrase Camille range soigneusement ses affaires dans son sac, quel est le COD du verbe range ?", answer: "ses affaires", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Camille range quoi ? Ses affaires. C'est le COD, même avec des mots supplémentaires dans la phrase." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Leur ou leurs : le test avec lui",
      xpReward: 26,
      story: {
        hook: "Il existe un petit test magique pour ne jamais confondre leur et leurs.",
        concreteExample: "Regarde : Je ... donne un livre. Est-ce que c'est leur ou leurs ?",
        reveal: "On essaie de remplacer par lui, au singulier : je lui donne un livre. Ça fonctionne ! Donc on écrit leur, sans s, devant un verbe. Si le mot se trouve devant un nom et qu'on peut dire son ou sa, on écrit leurs, avec un s. Bravo, tu as réussi le test !",
        bridgeToConcept: "Devant un verbe et remplaçable par lui, on écrit leur, invariable. Devant un nom pluriel comme déterminant possessif, on écrit leurs, avec un s.",
        illustrationEmoji: "🪄"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Je leur donne un livre : je lui donne un livre fonctionne, donc leur, sans s.", illustrationEmoji: "📖" },
            { text: "Ils rangent leurs affaires : leurs est devant le nom affaires, c'est un déterminant possessif avec un s.", illustrationEmoji: "🎒" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Devant un verbe, remplace par lui : si ça marche, écris leur sans s.", illustrationEmoji: "🔊" },
            { text: "Devant un nom pluriel, écris leurs avec un s, comme leurs jouets.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je ___ raconte une belle histoire. (leur/leurs)", answer: "leur", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Je lui raconte une belle histoire fonctionne, donc on écrit leur, sans s.", strictAccents: true },
        { order: 2, prompt: "Complète : Ils rangent ___ jouets. (leur/leurs)", answer: "leurs", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "Leurs se trouve devant le nom jouets, c'est un déterminant possessif : on écrit leurs, avec un s.", strictAccents: true },
        { order: 3, prompt: "Complète : Nous ___ envoyons une carte postale. (leur/leurs)", answer: "leur", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Nous lui envoyons une carte postale fonctionne, donc on écrit leur, sans s.", strictAccents: true },
        { order: 4, prompt: "Complète : Les enfants cherchent ___ affaires. (leur/leurs)", answer: "leurs", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Leurs se trouve devant le nom affaires, c'est un déterminant possessif : on écrit leurs, avec un s.", strictAccents: true },
        { order: 5, prompt: "Complète : Elle ___ explique la règle. (leur/leurs)", answer: "leur", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Elle lui explique la règle fonctionne, donc on écrit leur, sans s.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. Je ___ donne un conseil et ils rangent ___ cahiers.", answer: "leur leurs", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "Je lui donne un conseil fonctionne, donc leur ; leurs cahiers est devant un nom pluriel, donc leurs.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "La table de multiplication de 9",
      xpReward: 26,
      story: {
        hook: "Imagine que tu comptes des joueurs, avec toujours 9 joueurs par équipe de baseball.",
        concreteExample: "Il y a 3 équipes. Combien de joueurs cela fait-il en tout ?",
        reveal: "3 fois 9, ça fait 27. Bravo, tu viens d'utiliser la table de 9 !",
        bridgeToConcept: "La table de 9 : 1x9=9, 2x9=18, 3x9=27, 4x9=36, 5x9=45...",
        illustrationEmoji: "⚾"
      },
      examples: [
        {
          title: "La table de 9",
          steps: [
            { text: "9 x 2 : c'est 9 + 9 = 18.", illustrationEmoji: "➕" },
            { text: "9 x 3 : c'est 27.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour la table de 9",
          steps: [
            { text: "Multiplie par 10, puis enlève le nombre une fois.", illustrationEmoji: "🙌" },
            { text: "9 x 6 : 10 x 6 = 60, puis 60 - 6 = 54.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 9 x 2", answer: "18", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "9 x 2 = 18." },
        { order: 2, prompt: "Calcule : 9 x 3", answer: "27", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "9 x 3 = 27." },
        { order: 3, prompt: "Calcule : 9 x 4", answer: "36", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "9 x 4 = 36." },
        { order: 4, prompt: "Calcule : 9 x 5", answer: "45", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "9 x 5 = 45." },
        { order: 5, prompt: "Calcule : 9 x 6", answer: "54", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "9 x 6 = 54." },
        { order: 6, prompt: "Défi : calcule 9 x 8", answer: "72", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "9 x 8 = 72." }
      ]
    }
  ]
};
