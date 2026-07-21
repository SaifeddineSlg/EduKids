import { DayCurriculum } from "@/models/types";

export const day17: DayCurriculum = {
  dayNumber: 17,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "La division avec reste",
      xpReward: 26,
      story: {
        hook: "Imagine que tu partages des bonbons, mais cette fois, il en reste quelques-uns qu'on ne peut pas partager également.",
        concreteExample: "Tu as 13 bonbons à partager entre 4 amis. Combien chaque ami reçoit-il, et combien en reste-t-il ?",
        reveal: "4 tient 3 fois dans 13 (3 x 4 = 12), et il reste 1 bonbon qu'on ne peut pas partager. On écrit 13 = 4 x 3 + 1. Le reste est 1. Bravo, tu as fait une division avec reste !",
        bridgeToConcept: "Dans une division avec reste, il reste toujours un nombre plus petit que le diviseur.",
        illustrationEmoji: "🍬"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "17 : 5 : combien de fois 5 dans 17 ? 3 fois (3 x 5 = 15).", illustrationEmoji: "1️⃣" },
            { text: "Il reste 17 - 15 = 2.", illustrationEmoji: "✍️" },
            { text: "17 = 5 x 3 + 2. Le reste est 2.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "22 : 4 : combien de fois 4 dans 22 ? 5 fois (5 x 4 = 20).", illustrationEmoji: "1️⃣" },
            { text: "Il reste 22 - 20 = 2. 22 = 4 x 5 + 2.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule 14 : 3. Donne le quotient et le reste (exemple : 4 reste 2).", answer: "4 reste 2", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "3 tient 4 fois dans 14 (4 x 3 = 12), et il reste 14 - 12 = 2. Résultat : 4 reste 2." },
        { order: 2, prompt: "Calcule 19 : 4.", answer: "4 reste 3", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "4 tient 4 fois dans 19 (4 x 4 = 16), et il reste 19 - 16 = 3. Résultat : 4 reste 3." },
        { order: 3, prompt: "Calcule 23 : 5.", answer: "4 reste 3", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "5 tient 4 fois dans 23 (4 x 5 = 20), et il reste 23 - 20 = 3. Résultat : 4 reste 3." },
        { order: 4, prompt: "Calcule 17 : 2.", answer: "8 reste 1", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "2 tient 8 fois dans 17 (8 x 2 = 16), et il reste 17 - 16 = 1. Résultat : 8 reste 1." },
        { order: 5, prompt: "Calcule 26 : 3.", answer: "8 reste 2", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "3 tient 8 fois dans 26 (8 x 3 = 24), et il reste 26 - 24 = 2. Résultat : 8 reste 2." },
        { order: 6, prompt: "Défi : calcule 34 : 5.", answer: "6 reste 4", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "5 tient 6 fois dans 34 (6 x 5 = 30), et il reste 34 - 30 = 4. Résultat : 6 reste 4." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "L'imparfait de aller et faire, toutes les personnes",
      xpReward: 26,
      story: {
        hook: "Tu connais déjà l'imparfait des verbes en -er, -ir, être et avoir. Découvrons aujourd'hui celui d'aller et faire.",
        concreteExample: "Écoute : j'allais, tu allais, il allait, nous allions, vous alliez, ils allaient / je faisais, tu faisais, il faisait, nous faisions, vous faisiez, ils faisaient.",
        reveal: "À quoi sert ce temps ? Il raconte une habitude ou une action qui durait dans le passé. Comment le reconnaître ? Les radicaux all- et fais- restent réguliers, et on ajoute les terminaisons habituelles de l'imparfait : -ais, -ais, -ait, -ions, -iez, -aient.",
        bridgeToConcept: "Aller à l'imparfait : allais, allais, allait, allions, alliez, allaient. Faire à l'imparfait : faisais, faisais, faisait, faisions, faisiez, faisaient.",
        illustrationEmoji: "🕰️"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Chaque été, nous allions à la mer avec nos cousins.", illustrationEmoji: "🏖️" },
            { text: "Vous faisiez souvent du vélo le dimanche.", illustrationEmoji: "🚲" }
          ]
        },
        {
          title: "Attention à l'erreur fréquente",
          steps: [
            { text: "Beaucoup d'enfants oublient le i après nous et vous : il faut écrire nous allions, pas nous allons.", illustrationEmoji: "❌" },
            { text: "On entend toujours le son [i] à l'imparfait avec nous et vous : nous faisions, vous faisiez.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Autrefois, j'____ (aller) à l'école à pied.", answer: "allais", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Avec je, aller à l'imparfait devient allais. Essaie de le lire à voix haute.", strictAccents: true },
        { order: 2, prompt: "Complète : Nous ____ (faire) du sport chaque semaine.", answer: "faisions", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "Avec nous, faire à l'imparfait devient faisions, avec la terminaison -ions.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Vous ____ (aller) au marché le samedi.",
          options: ["alliez", "allez", "iriez"],
          answer: "alliez",
          kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.",
          explanationWhenWrong: "Avec vous, aller à l'imparfait devient alliez, avec la terminaison -iez.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Ils ____ (faire) leurs devoirs ensemble.", answer: "faisaient", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Avec ils, faire à l'imparfait devient faisaient, avec la terminaison -aient.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Tu ____ (aller) chez ta grand-mère.",
          options: ["allais", "allait", "alliez"],
          answer: "allais",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.",
          explanationWhenWrong: "Avec tu, aller à l'imparfait devient allais, avec la terminaison -ais.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Nous ____ (aller) à la piscine et vous ____ (faire) du vélo.", answer: "allions faisiez", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "Nous allions vient d'aller, et vous faisiez vient de faire : deux imparfaits irréguliers dans la même phrase.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "La phrase négative",
      xpReward: 26,
      story: {
        hook: "Imagine une phrase qui dit oui, puis change complètement d'avis et dit non.",
        concreteExample: "Regarde : Je mange une pomme. Je ne mange pas de pomme. Qu'est-ce qui a changé ?",
        reveal: "À quoi servent ces petits mots ? Ne et pas encadrent le verbe pour dire le contraire. Comment les reconnaître ? On trouve toujours ne (ou n') avant le verbe, et pas, plus, jamais ou rien juste après.",
        bridgeToConcept: "La phrase négative encadre le verbe avec ne...pas, ne...plus, ne...jamais ou ne...rien.",
        illustrationEmoji: "🚫"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Je ne veux pas de dessert : ne...pas encadre le verbe veux.", illustrationEmoji: "🍰" },
            { text: "Il ne joue plus dehors : ne...plus encadre le verbe joue.", illustrationEmoji: "⚽" }
          ]
        },
        {
          title: "L'astuce pour reconnaître une négation",
          steps: [
            { text: "Cherche le petit mot ne (ou n') juste avant le verbe.", illustrationEmoji: "🔍" },
            { text: "Cherche ensuite pas, plus, jamais ou rien juste après.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans la phrase Il ne joue pas dehors, quels sont les deux mots de la négation ?", answer: "ne pas", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Ne encadre le verbe joue avec pas : ce sont les deux mots de la négation." },
        { order: 2, prompt: "Dans la phrase Elle ne mange plus de bonbons, quels sont les deux mots de la négation ?", answer: "ne plus", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Ne encadre le verbe mange avec plus : ce sont les deux mots de la négation." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la négation qui complète la phrase : Théo n'a ___ mangé de légumes de toute sa vie.",
          options: ["pas", "plus", "jamais"],
          answer: "jamais",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "De toute sa vie indique qu'il n'a mangé de légumes à aucun moment : on écrit jamais."
        },
        { order: 4, prompt: "Dans la phrase Nous n'avons rien vu, quel est le mot qui suit ne pour former la négation ?", answer: "rien", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Ne encadre le verbe avons vu avec rien : c'est le mot de la négation." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la phrase qui est déjà à la forme négative.",
          options: ["Je joue dehors.", "Je ne joue pas dehors.", "Joue-t-il dehors ?"],
          answer: "Je ne joue pas dehors.",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Seule cette phrase encadre le verbe joue avec ne...pas : elle est à la forme négative."
        },
        { order: 6, prompt: "Défi : transforme cette phrase à la forme négative avec ne...pas : Léa aime les épinards.", answer: "léa n'aime pas les épinards", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "On encadre le verbe aime avec n'...pas : Léa n'aime pas les épinards." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Sa ou ça : le test avec cela",
      xpReward: 26,
      story: {
        hook: "Il existe un petit test magique pour ne jamais confondre sa et ça.",
        concreteExample: "Regarde : ... me fait plaisir. Est-ce que c'est sa ou ça ?",
        reveal: "On essaie de remplacer par cela : cela me fait plaisir. Ça fonctionne ! Donc on écrit ça, sans petit mot devant un nom, car il remplace une chose ou une idée. Si le mot est devant un nom et qu'on peut dire son, on écrit sa. Bravo, tu as réussi le test !",
        bridgeToConcept: "Si on peut remplacer par cela, on écrit ça. Si le mot est devant un nom et qu'on peut dire son (au masculin), on écrit sa, un déterminant possessif.",
        illustrationEmoji: "🪄"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Elle prend sa trousse : on peut dire son crayon (au masculin), donc sa, déterminant possessif.", illustrationEmoji: "🎒" },
            { text: "Ça me fait plaisir : cela me fait plaisir fonctionne, donc ça, sans s.", illustrationEmoji: "😊" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Essaie de remplacer par cela dans ta tête.", illustrationEmoji: "🔊" },
            { text: "Si ça marche, c'est ça. Sinon, regarde si tu peux dire son : c'est sa.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : ___ me fait très plaisir. (sa/ça)", answer: "ça", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Cela me fait très plaisir fonctionne, donc on écrit ça, sans petit mot devant un nom.", strictAccents: true },
        { order: 2, prompt: "Complète : Léa range ___ trousse. (sa/ça)", answer: "sa", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "Léa range son crayon (au masculin) fonctionne, donc on écrit sa, un déterminant possessif.", strictAccents: true },
        { order: 3, prompt: "Complète : ___ ne va pas du tout aujourd'hui. (sa/ça)", answer: "ça", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Cela ne va pas du tout aujourd'hui fonctionne, donc on écrit ça.", strictAccents: true },
        { order: 4, prompt: "Complète : Il prend ___ veste avant de sortir. (sa/ça)", answer: "sa", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Il prend son manteau (au masculin) fonctionne, donc on écrit sa, un déterminant possessif.", strictAccents: true },
        { order: 5, prompt: "Complète : ___ suffit pour aujourd'hui ! (sa/ça)", answer: "ça", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Cela suffit pour aujourd'hui fonctionne, donc on écrit ça.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. Théo range ___ trousse, et ___ lui fait plaisir. (sa/ça)", answer: "sa ça", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "Théo range son crayon fonctionne (possesseur), donc sa ; cela lui fait plaisir fonctionne, donc ça.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Les doubles des nombres ronds jusqu'à 100",
      xpReward: 26,
      story: {
        hook: "Imagine que tu doubles maintenant des paquets entiers de dizaines, pas seulement des petits nombres.",
        concreteExample: "Tu as 30 images. Un ami t'en donne autant. Combien as-tu d'images maintenant ?",
        reveal: "30 et encore 30, ça fait 60. C'est le double de 30 ! Avec des dizaines rondes, c'est aussi facile qu'avec les petits nombres. Bravo !",
        bridgeToConcept: "Le double d'un nombre rond comme 30, c'est comme doubler le chiffre des dizaines : le double de 30 est 60.",
        illustrationEmoji: "👯"
      },
      examples: [
        {
          title: "Calculer un double de dizaine",
          steps: [
            { text: "Le double de 40, c'est 40 + 40 = 80.", illustrationEmoji: "➕" },
            { text: "Le double de 45, c'est 45 + 45 = 90.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour les doubles de dizaines",
          steps: [
            { text: "Double d'abord le chiffre des dizaines, comme pour 4 x 2 = 8 (donc le double de 40 est 80).", illustrationEmoji: "🔍" },
            { text: "Le double de 50 est 100 : facile à retenir.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Quel est le double de 20 ?", answer: "40", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Le double de 20, c'est 20 + 20 = 40." },
        { order: 2, prompt: "Quel est le double de 35 ?", answer: "70", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Le double de 35, c'est 35 + 35 = 70." },
        { order: 3, prompt: "Quel est le double de 40 ?", answer: "80", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Le double de 40, c'est 40 + 40 = 80." },
        { order: 4, prompt: "Quel est le double de 50 ?", answer: "100", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Le double de 50, c'est 50 + 50 = 100." },
        { order: 5, prompt: "Quel est le double de 45 ?", answer: "90", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Le double de 45, c'est 45 + 45 = 90." },
        { order: 6, prompt: "Défi : calcule le double de 60, puis ajoute 5.", answer: "125", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Le double de 60 est 120, puis 120 + 5 = 125." }
      ]
    }
  ]
};
