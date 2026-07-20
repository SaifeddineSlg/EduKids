import { DayCurriculum } from "@/models/types";

export const day13: DayCurriculum = {
  dayNumber: 13,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "La division posée simple, sans reste",
      xpReward: 26,
      story: {
        hook: "Imagine que tu partages un grand nombre de bonbons, colonne par colonne, comme pour les autres opérations posées.",
        concreteExample: "Calcule 84 : 4. Combien de fois 4 tient-il dans 8 (les dizaines) ?",
        reveal: "4 tient 2 fois dans 8 (2 x 4 = 8). Puis on descend le 4 des unités : combien de fois 4 tient-il dans 4 ? Une fois. Le résultat est 21. Bravo, tu as posé une division !",
        bridgeToConcept: "Pour poser une division, on cherche combien de fois le diviseur tient dans chaque partie du nombre, en commençant par la gauche.",
        illustrationEmoji: "➗"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "96 : 3 : combien de fois 3 dans 9 ? 3 fois (3 x 3 = 9).", illustrationEmoji: "1️⃣" },
            { text: "On descend le 6 : combien de fois 3 dans 6 ? 2 fois.", illustrationEmoji: "✍️" },
            { text: "Résultat : 32.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "48 : 4 : combien de fois 4 dans 4 ? 1 fois.", illustrationEmoji: "1️⃣" },
            { text: "Combien de fois 4 dans 8 ? 2 fois. Résultat : 12.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 63 : 3", answer: "21", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Combien de fois 3 dans 6 ? 2 fois. Combien de fois 3 dans 3 ? 1 fois. Résultat : 21." },
        { order: 2, prompt: "Calcule : 84 : 4", answer: "21", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Combien de fois 4 dans 8 ? 2 fois. Combien de fois 4 dans 4 ? 1 fois. Résultat : 21." },
        { order: 3, prompt: "Calcule : 55 : 5", answer: "11", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Combien de fois 5 dans 5 ? 1 fois. Combien de fois 5 dans 5 ? 1 fois. Résultat : 11." },
        { order: 4, prompt: "Calcule : 96 : 3", answer: "32", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Combien de fois 3 dans 9 ? 3 fois. Combien de fois 3 dans 6 ? 2 fois. Résultat : 32." },
        { order: 5, prompt: "Calcule : 48 : 4", answer: "12", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Combien de fois 4 dans 4 ? 1 fois. Combien de fois 4 dans 8 ? 2 fois. Résultat : 12." },
        { order: 6, prompt: "Défi : calcule 88 : 4", answer: "22", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Combien de fois 4 dans 8 ? 2 fois. Combien de fois 4 dans 8 ? 2 fois. Résultat : 22." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "L'imparfait des verbes en -ir comme finir",
      xpReward: 26,
      story: {
        hook: "Tu connais déjà l'imparfait des verbes en -er. Découvrons aujourd'hui celui des verbes en -ir comme finir.",
        concreteExample: "Écoute : je finissais, tu finissais, il finissait, nous finissions, vous finissiez, ils finissaient.",
        reveal: "À quoi sert ce temps ? Il raconte une action passée qui durait. Comment le reconnaître ? On garde le petit -iss- à toutes les personnes, puis on ajoute les terminaisons de l'imparfait : -ais, -ais, -ait, -ions, -iez, -aient.",
        bridgeToConcept: "Imparfait des verbes en -ir comme finir : radical + iss + ais, ais, ait, ions, iez, aient.",
        illustrationEmoji: "📖"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Autrefois, je finissais toujours mes devoirs avant le dîner.", illustrationEmoji: "📚" },
            { text: "Chaque soir, nous choisissions une histoire à lire.", illustrationEmoji: "📖" }
          ]
        },
        {
          title: "Attention à l'erreur fréquente",
          steps: [
            { text: "Beaucoup d'enfants oublient le -iss- à l'imparfait et écrivent je finais. C'est une erreur !", illustrationEmoji: "❌" },
            { text: "Il faut toujours garder le -iss- : je finissais, nous finissions.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je ____ (finir) toujours mes devoirs.", answer: "finissais", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Avec je, l'imparfait de finir garde le -iss- : je finissais.", strictAccents: true },
        { order: 2, prompt: "Complète : Nous ____ (choisir) un livre chaque soir.", answer: "choisissions", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "Avec nous, l'imparfait de choisir garde le -iss- et ajoute -ions : choisissions.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Vous ____ (grandir) très vite.",
          options: ["grandissiez", "grandissez", "grandissaient"],
          answer: "grandissiez",
          kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.",
          explanationWhenWrong: "Avec vous, l'imparfait de grandir garde le -iss- et ajoute -iez : grandissiez.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Ils ____ (réfléchir) longtemps avant de répondre.", answer: "réfléchissaient", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Avec ils, l'imparfait de réfléchir garde le -iss- et ajoute -aient : réfléchissaient.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Tu ____ (réussir) tous tes exercices.",
          options: ["réussissais", "réussissait", "réussissiez"],
          answer: "réussissais",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.",
          explanationWhenWrong: "Avec tu, l'imparfait de réussir garde le -iss- et ajoute -ais : réussissais.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Nous ____ (finir) nos devoirs pendant que vous ____ (choisir) un jeu.", answer: "finissions choisissiez", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "Nous finissions et vous choisissiez : deux imparfaits de verbes en -ir, chacun avec le -iss-.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Les types de phrases",
      xpReward: 26,
      story: {
        hook: "Imagine trois façons différentes de dire ce que tu penses : raconter, demander, ou s'exclamer.",
        concreteExample: "Regarde : Le chat dort. Le chat dort-il ? Comme il dort bien ! Ces trois phrases parlent du chat, mais sont-elles pareilles ?",
        reveal: "À quoi servent ces différences ? Elles montrent l'intention : raconter, poser une question, ou exprimer une émotion. Comment les reconnaître ? Le point (.) pour raconter, le point d'interrogation (?) pour demander, le point d'exclamation (!) pour s'exclamer.",
        bridgeToConcept: "La phrase déclarative se termine par un point, l'interrogative par un point d'interrogation, l'exclamative par un point d'exclamation.",
        illustrationEmoji: "❓"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Il fait beau aujourd'hui. : phrase déclarative, elle raconte.", illustrationEmoji: "☀️" },
            { text: "Fait-il beau aujourd'hui ? : phrase interrogative, elle demande.", illustrationEmoji: "❓" }
          ]
        },
        {
          title: "L'astuce pour les reconnaître",
          steps: [
            { text: "Regarde la ponctuation à la fin de la phrase.", illustrationEmoji: "🔍" },
            { text: "Un point d'exclamation montre une émotion forte : Quelle belle journée !", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Quel type de phrase est Le chien aboie. ?", answer: "déclarative", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Cette phrase se termine par un point et raconte quelque chose : elle est déclarative." },
        { order: 2, prompt: "Quel type de phrase est Où habites-tu ? ?", answer: "interrogative", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Cette phrase se termine par un point d'interrogation et pose une question : elle est interrogative." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis le type de phrase : Comme ce gâteau est délicieux !",
          options: ["déclarative", "interrogative", "exclamative"],
          answer: "exclamative",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Cette phrase se termine par un point d'exclamation et exprime une émotion : elle est exclamative."
        },
        { order: 4, prompt: "Quel type de phrase est Veux-tu venir avec moi ? ?", answer: "interrogative", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Cette phrase se termine par un point d'interrogation et pose une question : elle est interrogative." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le type de phrase : Le soleil se couche derrière les montagnes.",
          options: ["déclarative", "interrogative", "exclamative"],
          answer: "déclarative",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Cette phrase se termine par un point et raconte quelque chose : elle est déclarative."
        },
        { order: 6, prompt: "Défi : transforme cette phrase déclarative en phrase interrogative. Tu aimes le chocolat.", answer: "aimes-tu le chocolat", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Pour poser une question, on peut inverser le sujet et le verbe : aimes-tu le chocolat ?" }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Mes ou mais : le test avec cependant",
      xpReward: 26,
      story: {
        hook: "Il existe un petit test magique pour ne jamais confondre mes et mais.",
        concreteExample: "Regarde : J'aime le chocolat, ... je préfère la vanille. Est-ce que c'est mes ou mais ?",
        reveal: "On essaie de remplacer par cependant : j'aime le chocolat, cependant je préfère la vanille. Ça fonctionne ! Donc on écrit mais, pour opposer deux idées. Bravo, tu as réussi le test !",
        bridgeToConcept: "Si cependant fonctionne, on écrit mais (pour opposer). Sinon, si on peut dire mon ou ma au singulier, on écrit mes (le possessif pluriel).",
        illustrationEmoji: "🪄"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "J'ai rangé mes affaires : j'ai rangé mon affaire (au singulier) fonctionne, donc mes.", illustrationEmoji: "🎒" },
            { text: "Il est fatigué, mais il continue : il est fatigué, cependant il continue fonctionne. Donc mais.", illustrationEmoji: "💪" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Essaie d'abord de remplacer par cependant.", illustrationEmoji: "🔊" },
            { text: "Si ça marche, c'est mais. Sinon, essaie mon ou ma au singulier : si ça marche, c'est mes.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : J'aime lire, ___ je préfère jouer dehors. (mes/mais)", answer: "mais", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "J'aime lire, cependant je préfère jouer dehors fonctionne, donc on écrit mais.", strictAccents: true },
        { order: 2, prompt: "Complète : Je range ___ jouets dans ma chambre. (mes/mais)", answer: "mes", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "Je range mon jouet (au singulier) fonctionne, donc on écrit mes.", strictAccents: true },
        { order: 3, prompt: "Complète : Il pleut, ___ nous sortons quand même. (mes/mais)", answer: "mais", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Il pleut, cependant nous sortons quand même fonctionne, donc on écrit mais.", strictAccents: true },
        { order: 4, prompt: "Complète : ___ parents arrivent bientôt. (mes/mais)", answer: "mes", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Mon parent arrive bientôt (au singulier) fonctionne, donc on écrit mes.", strictAccents: true },
        { order: 5, prompt: "Complète : Elle est petite, ___ très rapide. (mes/mais)", answer: "mais", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Elle est petite, cependant très rapide fonctionne, donc on écrit mais.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. J'ai fini ___ devoirs, ___ je dois encore réviser.", answer: "mes mais", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "J'ai fini mon devoir (au singulier) fonctionne, donc mes ; cependant je dois encore réviser fonctionne, donc mais.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "La table de multiplication de 8",
      xpReward: 26,
      story: {
        hook: "Imagine que tu comptes des tentacules de poulpes, avec toujours 8 tentacules chacun.",
        concreteExample: "Il y a 3 poulpes. Combien de tentacules cela fait-il en tout ?",
        reveal: "3 fois 8, ça fait 24. Bravo, tu viens d'utiliser la table de 8 !",
        bridgeToConcept: "La table de 8 : 1x8=8, 2x8=16, 3x8=24, 4x8=32, 5x8=40...",
        illustrationEmoji: "🐙"
      },
      examples: [
        {
          title: "La table de 8",
          steps: [
            { text: "8 x 2 : c'est le double de 8, donc 16.", illustrationEmoji: "➕" },
            { text: "8 x 4 : c'est le double de 4 x 4, donc 32.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour la table de 8",
          steps: [
            { text: "8, c'est le double de 4 : utilise la table de 4 puis double le résultat.", illustrationEmoji: "🙌" },
            { text: "8 x 6 : 4 x 6 = 24, donc le double est 48.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 8 x 2", answer: "16", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "8 x 2 = 16." },
        { order: 2, prompt: "Calcule : 8 x 3", answer: "24", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "8 x 3 = 24." },
        { order: 3, prompt: "Calcule : 8 x 4", answer: "32", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "8 x 4 = 32." },
        { order: 4, prompt: "Calcule : 8 x 5", answer: "40", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "8 x 5 = 40." },
        { order: 5, prompt: "Calcule : 8 x 6", answer: "48", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "8 x 6 = 48." },
        { order: 6, prompt: "Défi : calcule 8 x 7", answer: "56", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "8 x 7 = 56." }
      ]
    }
  ]
};
