import { DayCurriculum } from "@/models/types";

export const day11: DayCurriculum = {
  dayNumber: 11,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "La multiplication posée en colonnes",
      xpReward: 24,
      story: {
        hook: "Imagine que tu dois multiplier un grand nombre par un chiffre, en écrivant l'opération en colonnes comme à l'école.",
        concreteExample: "Calcule 234 x 3 en posant l'opération. Comment fait-on ?",
        reveal: "On multiplie les unités : 4 x 3 = 12, on écrit 2 et on retient 1. Puis les dizaines : 3 x 3 = 9, plus la retenue 1 = 10, on écrit 0 et on retient 1. Puis les centaines : 2 x 3 = 6, plus la retenue 1 = 7. Le résultat est 702 !",
        bridgeToConcept: "Pour poser une multiplication, on multiplie les unités, puis les dizaines, puis les centaines, en reportant les retenues.",
        illustrationEmoji: "✖️"
      },
      examples: [
        {
          title: "Un exemple sans retenue",
          steps: [
            { text: "142 x 2 : unités 2 x 2 = 4, dizaines 4 x 2 = 8, centaines 1 x 2 = 2.", illustrationEmoji: "🔢" },
            { text: "On assemble les résultats : 284.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un exemple avec retenues",
          steps: [
            { text: "256 x 3 : unités 6 x 3 = 18, on écrit 8 et on retient 1.", illustrationEmoji: "🔍" },
            { text: "Dizaines 5 x 3 = 15, plus 1 = 16, on écrit 6 et on retient 1. Centaines 2 x 3 = 6, plus 1 = 7 : résultat 768.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Pose et calcule : 123 x 2", answer: "246", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "3x2=6, 2x2=4 (dizaines), 1x2=2 (centaines). Résultat : 246." },
        { order: 2, prompt: "Pose et calcule : 214 x 3", answer: "642", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "4x3=12 (on écrit 2, retenue 1), 1x3=3+1=4, 2x3=6. Résultat : 642." },
        { order: 3, prompt: "Pose et calcule : 145 x 2", answer: "290", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "5x2=10 (on écrit 0, retenue 1), 4x2=8+1=9, 1x2=2. Résultat : 290." },
        { order: 4, prompt: "Pose et calcule : 236 x 3", answer: "708", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "6x3=18 (on écrit 8, retenue 1), 3x3=9+1=10 (on écrit 0, retenue 1), 2x3=6+1=7. Résultat : 708." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le bon résultat de 172 x 4.",
          options: ["688", "678", "698"],
          answer: "688",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "2x4=8, 7x4=28 (on écrit 8, retenue 2), 1x4=4+2=6. Résultat : 688."
        },
        { order: 6, prompt: "Défi : pose et calcule 326 x 4", answer: "1304", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "6x4=24 (on écrit 4, retenue 2), 2x4=8+2=10 (on écrit 0, retenue 1), 3x4=12+1=13. Résultat : 1304." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le présent des verbes aller, faire, dire, venir",
      xpReward: 24,
      story: {
        hook: "Imagine que tu dois utiliser des verbes très fréquents mais qui ne suivent pas les règles habituelles au présent.",
        concreteExample: "Écoute : je vais à l'école, tu fais tes devoirs, il dit bonjour, nous venons de la piscine.",
        reveal: "À quoi servent ces verbes ? À parler d'actions du quotidien. Comment les reconnaître ? Ils changent de forme selon la personne, il faut les apprendre par cœur.",
        bridgeToConcept: "Aller : je vais, tu vas, il va, nous allons, vous allez, ils vont. Faire : je fais, tu fais, il fait, nous faisons, vous faites, ils font.",
        illustrationEmoji: "🚶"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Chaque matin, je vais à l'école à pied.", illustrationEmoji: "🚶" },
            { text: "Tu fais ton lit avant de partir.", illustrationEmoji: "🛏️" },
            { text: "Elle dit toujours merci.", illustrationEmoji: "🙏" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Ces verbes se conjuguent différemment à chaque personne, il faut bien les mémoriser.", illustrationEmoji: "🧠" },
            { text: "Venir : je viens, tu viens, il vient, nous venons, vous venez, ils viennent.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je ____ (aller) à la piscine ce matin.", answer: "vais", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec je, le verbe aller au présent devient vais. Ce verbe est irrégulier, il faut l'apprendre par cœur.", strictAccents: true },
        { order: 2, prompt: "Complète : Tu ____ (faire) tes devoirs avant le dîner.", answer: "fais", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Avec tu, le verbe faire au présent devient fais.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Il ____ (dire) toujours la vérité.",
          options: ["dit", "dis", "disent"],
          answer: "dit",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec il, le verbe dire au présent devient dit, sans s. Dis est pour je ou tu, disent est pour ils.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Nous ____ (venir) de la bibliothèque.", answer: "venons", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Avec nous, le verbe venir au présent devient venons.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Elles ____ (aller) au marché le samedi.",
          options: ["vont", "va", "allons"],
          answer: "vont",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec elles, le verbe aller au présent devient vont. Va est pour il, allons est pour nous.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux verbes. Vous ____ (faire) un gâteau et ils ____ (dire) qu'il est délicieux.", answer: "faites disent", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Vous faites (présent irrégulier de faire) et ils disent (présent irrégulier de dire).", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Les déterminants possessifs",
      xpReward: 24,
      story: {
        hook: "Imagine un petit mot qui montre à qui appartient une chose, avant même de nommer le propriétaire.",
        concreteExample: "Regarde : mon vélo est rouge. Que nous apprend mon sur le vélo ?",
        reveal: "Mon indique que le vélo m'appartient. À quoi sert ce mot ? Il montre la possession. Comment le reconnaître ? Il change selon la personne et le genre ou le nombre du nom : mon, ton, son, notre, votre, leur...",
        bridgeToConcept: "Les déterminants possessifs indiquent à qui appartient une chose : mon/ma/mes, ton/ta/tes, son/sa/ses, notre/nos, votre/vos, leur/leurs.",
        illustrationEmoji: "🔑"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Mon cahier est sur la table.", illustrationEmoji: "📓" },
            { text: "Ta trousse est bien rangée.", illustrationEmoji: "✏️" }
          ]
        },
        {
          title: "L'astuce pour bien l'accorder",
          steps: [
            { text: "Le déterminant possessif s'accorde avec le nom qui suit, pas avec le possesseur.", illustrationEmoji: "🔍" },
            { text: "Sa maison : une maison à lui ou à elle, féminin singulier.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans mon vélo est rouge, quel est le déterminant possessif ?", answer: "mon", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Mon montre que le vélo appartient à celui qui parle, c'est le déterminant possessif." },
        { order: 2, prompt: "Complète : ___ sœur adore lire. (Ma/Mon)", answer: "Ma", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Sœur est féminin singulier, donc on écrit Ma." },
        { order: 3, prompt: "Complète : Nous aimons ___ maison. (notre/nos)", answer: "notre", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Maison est singulier, donc on écrit notre, sans s." },
        { order: 4, prompt: "Complète : Ils gardent ___ jouets bien rangés. (leurs/leur)", answer: "leurs", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Jouets est pluriel, donc leurs prend un s." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : ___ amis sont adorables.",
          options: ["Vos", "Votre", "Leur"],
          answer: "Vos",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Amis est pluriel, donc on écrit Vos, avec un s. Votre est pour le singulier."
        },
        { order: 6, prompt: "Défi : complète les deux mots. Balkis aime ___ (sa) maman et Bayrem aime ___ (ses) grands-parents.", answer: "sa ses", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Sa maman (maman est singulier) et ses grands-parents (grands-parents est pluriel)." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Ça ou sa : le test avec cela",
      xpReward: 24,
      story: {
        hook: "Encore deux mots jumeaux à l'oreille, découvrons comment les différencier.",
        concreteExample: "Regarde : ___ me plaît beaucoup. Est-ce que c'est ça ou sa ?",
        reveal: "On essaie de remplacer par cela : cela me plaît beaucoup, ça fonctionne ! Donc on écrit ça, avec une cédille. Sa est un déterminant possessif, comme son : elle prend sa veste.",
        bridgeToConcept: "Ça (remplaçable par cela) désigne quelque chose. Sa (déterminant possessif, comme sa veste) indique la possession, toujours suivi d'un nom féminin singulier.",
        illustrationEmoji: "🎯"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Ça me plaît beaucoup : on peut dire cela me plaît.", illustrationEmoji: "😊" },
            { text: "Elle prend sa veste avant de sortir : sa veste, la veste à elle.", illustrationEmoji: "🧥" }
          ]
        },
        {
          title: "L'astuce du test",
          steps: [
            { text: "Essaie de remplacer par cela.", illustrationEmoji: "🔍" },
            { text: "Si ça marche, c'est ça. Sinon, c'est sa (possessif).", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : ___ me fait très plaisir. (ça/sa)", answer: "ça", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "On peut dire cela me fait très plaisir, ça fonctionne. Donc on écrit ça, avec une cédille sur le c.", strictAccents: true },
        { order: 2, prompt: "Complète : Elle prend ___ veste avant de sortir. (ça/sa)", answer: "sa", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "On ne peut pas dire cela veste. C'est le déterminant possessif sa, la veste à elle.", strictAccents: true },
        { order: 3, prompt: "Complète : ___ ne me dérange pas du tout. (ça/sa)", answer: "ça", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "On peut dire cela ne me dérange pas, ça fonctionne. Donc on écrit ça.", strictAccents: true },
        { order: 4, prompt: "Complète : Bayrem range ___ trousse dans le sac. (ça/sa)", answer: "sa", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "On ne peut pas dire cela trousse. C'est le possessif sa, la trousse à lui.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : ___ alors, quelle surprise !",
          options: ["Ça", "Sa"],
          answer: "Ça",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "On peut dire cela alors, quelle surprise, donc on écrit Ça.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. ___ (Ça) m'étonne que Balkis ait oublié ___ (sa) trousse.", answer: "Ça sa", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Ça m'étonne (cela m'étonne fonctionne) et sa trousse (le possessif, la trousse à elle).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "La table de multiplication de 7",
      xpReward: 24,
      story: {
        hook: "Imagine que tu comptes les jours de plusieurs semaines, 7 jours à chaque fois.",
        concreteExample: "Il y a 3 semaines. Combien de jours en tout ?",
        reveal: "3 fois 7, ça fait 21. Bravo, tu as trouvé le nombre de jours !",
        bridgeToConcept: "La table de 7 : 1x7=7, 2x7=14, 3x7=21, 4x7=28, 5x7=35...",
        illustrationEmoji: "📅"
      },
      examples: [
        {
          title: "La table de 7",
          steps: [
            { text: "7 x 3 : c'est 7 + 7 + 7 = 21.", illustrationEmoji: "➕" },
            { text: "7 x 5 : on continue, ça fait 35.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour la table de 7",
          steps: [
            { text: "Tu connais déjà 7 x 5 = 35 (table de 5), ajoute 7 deux fois pour obtenir 7 x 7.", illustrationEmoji: "🔍" },
            { text: "7 x 7 = 35 + 7 + 7 = 49.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 7 x 3", answer: "21", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "7 x 3 = 21." },
        { order: 2, prompt: "Calcule : 7 x 5", answer: "35", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "7 x 5 = 35." },
        { order: 3, prompt: "Calcule : 7 x 6", answer: "42", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "7 x 6 = 42." },
        { order: 4, prompt: "Calcule : 7 x 7", answer: "49", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "7 x 7 = 49." },
        { order: 5, prompt: "Calcule : 7 x 8", answer: "56", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "7 x 8 = 56." },
        { order: 6, prompt: "Défi : calcule 7 x 9", answer: "63", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "7 x 9 = 63." }
      ]
    }
  ]
};
