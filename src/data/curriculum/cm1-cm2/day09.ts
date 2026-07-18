import { DayCurriculum } from "@/models/types";

export const day09: DayCurriculum = {
  dayNumber: 9,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Les nombres décimaux : dixièmes et centièmes",
      xpReward: 22,
      story: {
        hook: "Imagine que tu mesures une planche qui ne fait pas un nombre entier de mètres.",
        concreteExample: "La planche mesure 3,5 mètres. Que représente le chiffre après la virgule ?",
        reveal: "3,5 signifie 3 mètres entiers et 5 dixièmes de mètre. Le chiffre juste après la virgule est le chiffre des dixièmes, le suivant celui des centièmes.",
        bridgeToConcept: "Dans un nombre décimal, la partie entière est avant la virgule, les dixièmes et les centièmes sont après.",
        illustrationEmoji: "📏"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "Dans 4,25 : 4 est la partie entière, 2 le chiffre des dixièmes, 5 le chiffre des centièmes.", illustrationEmoji: "🔢" },
            { text: "4,25 = 4 + 0,2 + 0,05.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Dans 7,08 : le chiffre des dixièmes est 0, celui des centièmes est 8.", illustrationEmoji: "🔍" },
            { text: "Les zéros comptent aussi après la virgule.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans 3,5, quel est le chiffre des dixièmes ?", answer: "5", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Le chiffre juste après la virgule dans 3,5 est 5, c'est le chiffre des dixièmes." },
        { order: 2, prompt: "Dans 4,25, quel est le chiffre des centièmes ?", answer: "5", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Le deuxième chiffre après la virgule dans 4,25 est 5, c'est le chiffre des centièmes." },
        { order: 3, prompt: "Dans 7,08, quel est le chiffre des dixièmes ?", answer: "0", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Le chiffre juste après la virgule dans 7,08 est 0, c'est le chiffre des dixièmes." },
        { order: 4, prompt: "Quel nombre est le plus grand : 2,7 ou 2,45 ?", answer: "2,7", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "2,7 a 7 dixièmes alors que 2,45 n'en a que 4, donc 2,7 est plus grand." },
        { order: 5, prompt: "Dans 9,63, quel est le chiffre des dixièmes ?", answer: "6", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Le chiffre juste après la virgule dans 9,63 est 6, c'est le chiffre des dixièmes." },
        { order: 6, prompt: "Défi : range du plus petit au plus grand : 5,2 ; 5,08 ; 5,25 (réponds avec des espaces entre les nombres)", answer: "5,08 5,2 5,25", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "5,08 a 0 dixième, 5,2 a 2 dixièmes, 5,25 a 2 dixièmes et 5 centièmes : l'ordre est 5,08 puis 5,2 puis 5,25." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "L'impératif présent",
      xpReward: 22,
      story: {
        hook: "Pour donner un ordre, un conseil ou une consigne, on utilise un mode particulier, sans sujet exprimé.",
        concreteExample: "Écoute : Range ta chambre ! Mangeons ensemble ! Fermez la porte !",
        reveal: "Range, mangeons, fermez sont à l'impératif présent : ce mode n'a que trois personnes (tu, nous, vous) et ne s'utilise jamais avec un pronom sujet. Pour les verbes en -er, la 2e personne du singulier perd son s : tu ranges devient range.",
        bridgeToConcept: "L'impératif présent : range, rangeons, rangez, sans sujet, et sans s à tu pour les verbes en -er.",
        illustrationEmoji: "📢"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Ferme la fenêtre, il fait froid !", illustrationEmoji: "🪟" },
            { text: "Finissons ce travail avant midi.", illustrationEmoji: "📚" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Pas de sujet devant le verbe à l'impératif.", illustrationEmoji: "🔍" },
            { text: "Verbes en -er : pas de s à la 2e personne du singulier (mange, joue, range).", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Mets à l'impératif (tu) : ranger ta chambre.", answer: "range", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "À l'impératif, avec tu, les verbes en -er perdent leur s : range, sans s.", strictAccents: true },
        { order: 2, prompt: "Mets à l'impératif (nous) : manger ensemble.", answer: "mangeons", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "À l'impératif, avec nous, on ajoute -ons : mangeons.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : ___ la porte, s'il te plaît ! (fermer, tu)",
          options: ["ferme", "fermes", "fermez"],
          answer: "ferme",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "À l'impératif, avec tu, les verbes en -er perdent leur s : ferme, sans s.",
          strictAccents: true
        },
        { order: 4, prompt: "Mets à l'impératif (vous) : fermer la fenêtre.", answer: "fermez", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "À l'impératif, avec vous, on ajoute -ez : fermez.", strictAccents: true },
        { order: 5, prompt: "Mets à l'impératif (nous) : finir ce travail avant midi.", answer: "finissons", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "À l'impératif, avec nous, finir donne finissons.", strictAccents: true },
        { order: 6, prompt: "Défi : mets les deux verbes à l'impératif. ___ (tu, écouter) bien la maîtresse et ___ (vous, ranger) vos affaires.", answer: "écoute rangez", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Tu étais proche ! Avec tu, écouter donne écoute, sans s. Avec vous, ranger donne rangez.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "L'accord du verbe avec un sujet complexe",
      xpReward: 22,
      story: {
        hook: "Quand plusieurs personnes ou choses font l'action ensemble, comment accorder le verbe ?",
        concreteExample: "Regarde : Le chat et le chien dorment. Le sujet est composé de deux noms : que fait-on avec le verbe ?",
        reveal: "Le chat et le chien forment un sujet pluriel, comme s'ils étaient remplacés par ils, donc le verbe dorment s'accorde au pluriel, même si chaque nom est singulier.",
        bridgeToConcept: "Quand le sujet est composé de plusieurs noms reliés par et, le verbe se met au pluriel.",
        illustrationEmoji: "🐱"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Mon frère et ma sœur partent en vacances : sujet composé, verbe au pluriel.", illustrationEmoji: "🧳" },
            { text: "Balkis et moi partons ensemble : le verbe s'accorde avec nous.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Remplace le sujet composé par ils, elles ou nous pour vérifier l'accord.", illustrationEmoji: "🔍" },
            { text: "Le chat et le chien → ils dorment.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Le chat et le chien ____ (dormir) sur le tapis.", answer: "dorment", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Le chat et le chien forment un sujet pluriel (ils), donc dormir devient dorment." },
        { order: 2, prompt: "Complète : Mon frère et ma sœur ____ (partir) en vacances.", answer: "partent", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Mon frère et ma sœur forment un sujet pluriel (ils), donc partir devient partent." },
        { order: 3, prompt: "Complète : Balkis et moi ____ (partir) ensemble.", answer: "partons", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Balkis et moi se remplace par nous, donc partir devient partons." },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Le vélo et la trottinette ___ dans le garage.",
          options: ["sont rangés", "est rangé", "sont rangé"],
          answer: "sont rangés",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Le vélo et la trottinette forment un sujet pluriel (ils), donc le verbe et le participe s'accordent au pluriel : sont rangés."
        },
        { order: 5, prompt: "Complète : Toi et tes amis ____ (jouer) dans le jardin.", answer: "jouez", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Toi et tes amis se remplace par vous, donc jouer devient jouez." },
        { order: 6, prompt: "Défi : complète le verbe. Mon chien, mon chat et mon poisson rouge ____ (vivre) tous ensemble à la maison.", answer: "vivent", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Les trois animaux forment un sujet pluriel (ils), donc vivre devient vivent." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Ces ou ses",
      xpReward: 22,
      story: {
        hook: "Deux petits mots qui se prononcent pareil, mais un exprime la possession et l'autre sert à montrer.",
        concreteExample: "Regarde : Balkis range ___ chaussures avant de sortir. Est-ce ces ou ses ?",
        reveal: "Balkis range ses chaussures : ce sont les siennes, donc on écrit ses, pluriel de son ou sa, qui exprime la possession. Ces, pluriel de ce ou cette, sert seulement à montrer, comme dans ces chaussures-là.",
        bridgeToConcept: "Ses est le pluriel de son/sa (possession, remplace par le singulier son/sa). Ces est le pluriel de ce/cette (pour montrer).",
        illustrationEmoji: "👟"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Elle a perdu ses clés : ce sont les siennes, possession.", illustrationEmoji: "🔑" },
            { text: "Regarde ces fleurs-là, comme elles sont belles ! : on montre, ces.", illustrationEmoji: "🌷" }
          ]
        },
        {
          title: "L'astuce du test",
          steps: [
            { text: "Remplace par le singulier : son ou sa → ses.", illustrationEmoji: "🔍" },
            { text: "Remplace par le singulier : ce ou cette → ces.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Balkis range ___ chaussures avant de sortir. (ces/ses)", answer: "ses", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On peut dire sa chaussure au singulier, donc on écrit ses, qui exprime la possession.", strictAccents: true },
        { order: 2, prompt: "Complète : Regarde ___ fleurs, comme elles sont belles ! (ces/ses)", answer: "ces", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "On peut dire cette fleur au singulier, donc on écrit ces, qui sert à montrer.", strictAccents: true },
        { order: 3, prompt: "Complète : Il a oublié ___ affaires à l'école. (ces/ses)", answer: "ses", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On peut dire son affaire au singulier, donc on écrit ses, qui exprime la possession.", strictAccents: true },
        { order: 4, prompt: "Complète : ___ enfants-là jouent très bien ensemble. (ces/ses)", answer: "ces", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "On peut dire cet enfant-là au singulier, donc on écrit ces, qui sert à montrer.", strictAccents: true },
        { order: 5, prompt: "Complète : Elle appelle ___ amis pour le goûter. (ces/ses)", answer: "ses", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "On peut dire son ami au singulier, donc on écrit ses, qui exprime la possession.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. ___ (ces) images sont magnifiques, mais Bayrem préfère ___ (ses) propres dessins.", answer: "ces ses", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Tu étais proche ! Cette image au singulier donne ces, et son dessin au singulier donne ses.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Les tables de multiplication de 11 et 12",
      xpReward: 22,
      story: {
        hook: "Il est temps de continuer plus loin encore avec deux nouvelles tables bien utiles.",
        concreteExample: "Combien font 4 x 11 ?",
        reveal: "4 x 11 = 44 : pour multiplier par 11 un nombre de 1 à 9, on répète simplement son chiffre deux fois.",
        bridgeToConcept: "La table de 11 : 1x11=11, 2x11=22, 3x11=33... La table de 12, c'est la table de 10 plus la table de 2.",
        illustrationEmoji: "🔢"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "7 x 11 = 77 : le chiffre 7 est répété deux fois.", illustrationEmoji: "🔍" },
            { text: "5 x 12 = 5 x 10 + 5 x 2 = 50 + 10 = 60.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "9 x 11 = 99.", illustrationEmoji: "🔍" },
            { text: "8 x 12 = 8 x 10 + 8 x 2 = 80 + 16 = 96.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 3 x 11", answer: "33", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "3 x 11 = 33, le chiffre 3 est répété deux fois." },
        { order: 2, prompt: "Calcule : 6 x 11", answer: "66", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "6 x 11 = 66, le chiffre 6 est répété deux fois." },
        { order: 3, prompt: "Calcule : 4 x 12", answer: "48", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "4 x 12 = 4 x 10 + 4 x 2 = 40 + 8 = 48." },
        { order: 4, prompt: "Calcule : 7 x 12", answer: "84", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "7 x 12 = 7 x 10 + 7 x 2 = 70 + 14 = 84." },
        { order: 5, prompt: "Calcule : 9 x 11", answer: "99", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "9 x 11 = 99, le chiffre 9 est répété deux fois." },
        { order: 6, prompt: "Défi : calcule 8 x 12, puis soustrais 5 x 11. Quel est le résultat ?", answer: "41", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "8 x 12 = 96, 5 x 11 = 55, et 96 - 55 = 41." }
      ]
    }
  ]
};
