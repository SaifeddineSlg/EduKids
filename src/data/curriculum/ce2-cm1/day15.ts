import { DayCurriculum } from "@/models/types";

export const day15: DayCurriculum = {
  dayNumber: 15,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Révision : multiplication posée, aire, soustraction posée, décimaux",
      xpReward: 26,
      story: {
        hook: "Cette semaine, tu as appris encore plus de choses en mathématiques. Faisons le tour ensemble !",
        concreteExample: "Tu sais maintenant poser une multiplication, calculer une aire, poser une soustraction avec retenue et lire des nombres décimaux.",
        reveal: "Toutes ces compétences t'aident à résoudre des problèmes de plus en plus complexes.",
        bridgeToConcept: "Révisons : multiplication posée, aire du rectangle et du carré, soustraction posée, nombres décimaux.",
        illustrationEmoji: "🎓"
      },
      examples: [
        {
          title: "Rappel multiplication posée et aire",
          steps: [
            { text: "234 x 3 : on multiplie unités, dizaines, centaines avec les retenues. Résultat : 702.", illustrationEmoji: "🔢" },
            { text: "Aire d'un rectangle : longueur x largeur.", illustrationEmoji: "🟩" }
          ]
        },
        {
          title: "Rappel soustraction et décimaux",
          steps: [
            { text: "253 - 127 = 126, avec une retenue empruntée aux dizaines.", illustrationEmoji: "➖" },
            { text: "4,2 se lit quatre virgule deux : 2 dixièmes.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Pose et calcule : 214 x 3", answer: "642", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "4x3=12 (on écrit 2, retenue 1), 1x3=3+1=4, 2x3=6. Résultat : 642." },
        { order: 2, prompt: "Un rectangle mesure 7 m de longueur et 3 m de largeur. Calcule son aire.", answer: "21", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "7 x 3 = 21 mètres carrés." },
        { order: 3, prompt: "Pose et calcule : 342 - 158", answer: "184", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec deux retenues successives, 342 - 158 = 184." },
        { order: 4, prompt: "Dans le nombre 4,2, combien y a-t-il de dixièmes ?", answer: "2", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Le chiffre après la virgule indique les dixièmes : dans 4,2, il y a 2 dixièmes." },
        {
          order: 5,
          type: "mcq",
          prompt: "Comment s'écrit cinq virgule un ?",
          options: ["5,1", "5,10", "51"],
          answer: "5,1",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Cinq unités et un dixième s'écrivent 5,1."
        },
        { order: 6, prompt: "Défi : Léa pose 145 x 2, puis calcule l'aire d'un carré de 6 m de côté. Quelle est la somme des deux résultats ?", answer: "326", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "145 x 2 = 290, et l'aire du carré est 6 x 6 = 36. On additionne : 290 + 36 = 326." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Révision : verbes en -ir à tous les temps, verbes irréguliers",
      xpReward: 26,
      story: {
        hook: "Cette semaine, tu as conjugué finir à plusieurs temps et découvert des verbes irréguliers. Récapitulons !",
        concreteExample: "Présent : je vais, je fais. Futur : je finirai. Imparfait : je finissais. Passé composé : j'ai fini.",
        reveal: "Chaque temps a ses propres terminaisons, mais la base du verbe reste souvent reconnaissable.",
        bridgeToConcept: "Révisons : présent des verbes irréguliers, futur, imparfait et passé composé des verbes en -ir.",
        illustrationEmoji: "🕰️"
      },
      examples: [
        {
          title: "Rappel du présent et du futur",
          steps: [
            { text: "Présent : je vais, tu fais, il dit, nous venons.", illustrationEmoji: "🚶" },
            { text: "Futur : je finirai, tu choisiras.", illustrationEmoji: "🔮" }
          ]
        },
        {
          title: "Rappel de l'imparfait et du passé composé",
          steps: [
            { text: "Imparfait : je finissais, tu choisissais.", illustrationEmoji: "⏳" },
            { text: "Passé composé : j'ai fini, tu as choisi.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je ____ (aller) à la piscine ce matin.", answer: "vais", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec je, le verbe aller au présent devient vais.", strictAccents: true },
        { order: 2, prompt: "Complète : Demain, tu ____ (choisir) un nouveau vélo.", answer: "choisiras", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Avec tu, le futur de choisir est choisiras.", strictAccents: true },
        { order: 3, prompt: "Complète : Quand j'étais petit, je ____ (finir) toujours mon assiette.", answer: "finissais", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec je, l'imparfait de finir est finissais.", strictAccents: true },
        { order: 4, prompt: "Complète : Hier, tu ____ (choisir) ta tenue rapidement.", answer: "as choisi", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Avec tu, on utilise as (avoir) suivi du participe passé choisi.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Ils ____ (dire) toujours la vérité.",
          options: ["disent", "dit", "dis"],
          answer: "disent",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec ils, le verbe dire au présent devient disent. Dit est pour il, dis est pour je ou tu.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux verbes. Nous ____ (venir) de l'école et nous ____ (finir) déjà nos devoirs.", answer: "venons avons fini", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Nous venons (présent irrégulier de venir) et nous avons fini (passé composé de finir, participe passé en -i).", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Révision : déterminants possessifs, démonstratifs, attribut du sujet et adverbes",
      xpReward: 26,
      story: {
        hook: "Cette semaine, tu as enrichi encore tes phrases. Récapitulons !",
        concreteExample: "Mon vélo (possessif), ce livre (démonstratif), le ciel est bleu (attribut), elle chante joyeusement (adverbe).",
        reveal: "Ces mots précisent la possession, la désignation, la qualité du sujet ou la manière d'agir.",
        bridgeToConcept: "Révisons : déterminants possessifs, déterminants démonstratifs, attribut du sujet, adverbes.",
        illustrationEmoji: "🧩"
      },
      examples: [
        {
          title: "Rappel des déterminants",
          steps: [
            { text: "Mon vélo est rouge : déterminant possessif.", illustrationEmoji: "🔑" },
            { text: "Cette fleur sent bon : déterminant démonstratif.", illustrationEmoji: "👉" }
          ]
        },
        {
          title: "Rappel de l'attribut et de l'adverbe",
          steps: [
            { text: "Le ciel est bleu : bleu est l'attribut du sujet.", illustrationEmoji: "🌤️" },
            { text: "Elle chante joyeusement : joyeusement est un adverbe.", illustrationEmoji: "🎯" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans mon vélo est rouge, quel est le déterminant possessif ?", answer: "mon", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Mon montre que le vélo appartient à celui qui parle, c'est le déterminant possessif." },
        { order: 2, prompt: "Complète : ___ fleur sent très bon. (Cette/Ce)", answer: "Cette", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Fleur est féminin singulier, donc on écrit Cette." },
        { order: 3, prompt: "Dans le ciel est bleu, quel est l'attribut du sujet ?", answer: "bleu", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Bleu décrit le ciel après le verbe être, c'est l'attribut du sujet." },
        { order: 4, prompt: "Dans elle chante joyeusement, quel est l'adverbe ?", answer: "joyeusement", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Joyeusement précise comment elle chante, c'est un adverbe de manière." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : ___ enfants jouent dans la cour.",
          options: ["Ces", "Cette", "Cet"],
          answer: "Ces",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Enfants est pluriel, donc on écrit Ces."
        },
        { order: 6, prompt: "Défi : complète les deux mots. Balkis aime ___ (sa) maison et pense que ___ (ce) quartier est très agréable.", answer: "sa ce", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Sa maison (déterminant possessif, singulier) et ce quartier (déterminant démonstratif, masculin singulier)." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Révision : ça/sa, ce/se, peu/peux/peut, tout/tous/toute/toutes",
      xpReward: 26,
      story: {
        hook: "Cette semaine encore plus de mots jumeaux. Récapitulons tous les tests !",
        concreteExample: "Ça ou sa, ce ou se, peu, peux ou peut, tout, tous, toute ou toutes.",
        reveal: "Chaque mot a son test : cela pour ça, un nom après ce, pouvoir pour peux et peut, l'accord en genre et en nombre pour tout.",
        bridgeToConcept: "Utilise toujours le bon test pour choisir la bonne orthographe.",
        illustrationEmoji: "🧠"
      },
      examples: [
        {
          title: "Rappel des tests avec cela et le nom qui suit",
          steps: [
            { text: "Ça me plaît (cela me plaît fonctionne). Elle prend sa veste (possessif, suivi d'un nom).", illustrationEmoji: "🔍" },
            { text: "Ce chat dort (un nom suit). Il se lave (un verbe suit).", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Rappel de peu/peux/peut et de tout",
          steps: [
            { text: "Je ne peux pas (je), il peut (il), j'ai peu de temps (pas beaucoup).", illustrationEmoji: "🤏" },
            { text: "Tous les enfants (masculin pluriel), toute la classe (féminin singulier).", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : ___ me fait très plaisir. (ça/sa)", answer: "ça", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "On peut dire cela me fait très plaisir, donc on écrit ça, avec une cédille.", strictAccents: true },
        { order: 2, prompt: "Complète : ___ chat dort sur le canapé. (ce/se)", answer: "ce", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Chat est un nom, donc on écrit ce, le déterminant démonstratif.", strictAccents: true },
        { order: 3, prompt: "Complète : Il ne ___ pas venir demain. (peu/peux/peut)", answer: "peut", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec il, le verbe pouvoir s'écrit peut, avec un t.", strictAccents: true },
        { order: 4, prompt: "Complète : ___ les enfants sont venus. (tout/tous)", answer: "tous", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Enfants est masculin pluriel, donc tous prend un s.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : J'ai ___ de temps ce soir.",
          options: ["peu", "peux", "peut"],
          answer: "peu",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Peu veut dire pas beaucoup, sans x ni t.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les trois mots. ___ (Ça) me plaît que ___ (tous) les enfants ___ (se) préparent pour la fête.", answer: "Ça tous se", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Ça (cela me plaît fonctionne), tous (enfants est masculin pluriel), se (préparent est un verbe).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Révision : tables de 7, 8, 9 et astuce du 11",
      xpReward: 26,
      story: {
        hook: "Cette semaine, ton cerveau est devenu encore plus rapide. Faisons le point !",
        concreteExample: "7 x 8 = 56, 9 x 6 = 54, 27 + 11 = 38. Tu deviens un champion du calcul mental !",
        reveal: "Ces automatismes t'aident à calculer de plus en plus vite, sans poser l'opération.",
        bridgeToConcept: "Révisons ensemble les tables de 7, 8, 9 et l'astuce pour ajouter 11.",
        illustrationEmoji: "⚡"
      },
      examples: [
        {
          title: "Rappel des tables",
          steps: [
            { text: "Table de 7 : 7, 14, 21, 28, 35, 42, 49, 56, 63, 70.", illustrationEmoji: "🔢" },
            { text: "Table de 8 : 8, 16, 24, 32, 40, 48, 56, 64, 72, 80.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Rappel de la table de 9 et de l'astuce du 11",
          steps: [
            { text: "Table de 9 : multiplie par 10 puis retire le nombre.", illustrationEmoji: "🔍" },
            { text: "Ajouter 11 : on ajoute 10 puis 1.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 7 x 6", answer: "42", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "7 x 6 = 42." },
        { order: 2, prompt: "Calcule : 8 x 7", answer: "56", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "8 x 7 = 56." },
        { order: 3, prompt: "Calcule : 9 x 5", answer: "45", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "9 x 5 = 45." },
        { order: 4, prompt: "Calcule : 45 + 11", answer: "56", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "45 + 10 = 55, puis 55 + 1 = 56." },
        {
          order: 5,
          type: "mcq",
          prompt: "Calcule : 9 x 8",
          options: ["72", "81", "64"],
          answer: "72",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "9 x 8 = 72."
        },
        { order: 6, prompt: "Défi : calcule 7 x 8, puis ajoute 11 au résultat.", answer: "67", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "7 x 8 = 56, puis 56 + 11 = 67." }
      ]
    }
  ]
};
