import { DayCurriculum } from "@/models/types";

export const day06: DayCurriculum = {
  dayNumber: 6,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Le nombre caché quand on retire",
      xpReward: 24,
      story: {
        hook: "Imagine une tirelire pleine de pièces. Un jour, tu en retires quelques-unes pour acheter un jouet.",
        concreteExample: "Ta tirelire contenait un nombre caché de pièces. Après en avoir retiré 5, il t'en reste 8. Combien de pièces y avait-il au départ ?",
        reveal: "On cherche un nombre qui, une fois qu'on lui retire 5, donne 8. Comme 13 - 5 = 8, le nombre caché est 13. Bravo, tu as retrouvé la quantité de départ !",
        bridgeToConcept: "En mathématiques, on écrit : x - 5 = 8, et on trouve x en ajoutant 5 à 8, donc x = 13.",
        illustrationEmoji: "🐷"
      },
      examples: [
        {
          title: "Exemple 1 : x - 4 = 6",
          steps: [
            { text: "On veut trouver x tel que x - 4 = 6.", illustrationEmoji: "❓" },
            { text: "Pour annuler le -4, on ajoute 4 des deux côtés : 6 + 4 = 10.", illustrationEmoji: "➕" },
            { text: "Donc x = 10. On vérifie : 10 - 4 = 6. Ça marche !", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : x - 9 = 3",
          steps: [
            { text: "x - 9 = 3.", illustrationEmoji: "❓" },
            { text: "On ajoute 9 à 3 : 3 + 9 = 12.", illustrationEmoji: "➕" },
            { text: "Donc x = 12. On vérifie : 12 - 9 = 3. Bravo !", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "x - 2 = 5. Combien vaut x ?", answer: "7", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On ajoute 2 à 5 : 5 + 2 = 7. Donc x = 7." },
        { order: 2, prompt: "x - 6 = 9. Combien vaut x ?", answer: "15", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "On ajoute 6 à 9 : 9 + 6 = 15. Donc x = 15." },
        { order: 3, prompt: "x - 8 = 12. Combien vaut x ?", answer: "20", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On ajoute 8 à 12 : 12 + 8 = 20. Donc x = 20." },
        { order: 4, prompt: "x - 15 = 7. Combien vaut x ?", answer: "22", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "On ajoute 15 à 7 : 7 + 15 = 22. Donc x = 22." },
        { order: 5, prompt: "x - 23 = 19. Combien vaut x ?", answer: "42", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "On ajoute 23 à 19 : 19 + 23 = 42. Donc x = 42." },
        { order: 6, prompt: "Défi : 2x - 3 = 11. Combien vaut x ?", answer: "7", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "On ajoute 3 à 11 : 11 + 3 = 14, puis on partage 14 en 2 : 14 / 2 = 7. Donc x = 7." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "L'imparfait, le temps des souvenirs qui durent",
      xpReward: 24,
      story: {
        hook: "Il existe un temps spécial pour raconter ce qui se passait autrefois, pendant longtemps, comme dans les souvenirs de grands-parents.",
        concreteExample: "Écoute : je jouais, tu jouais, il jouait, nous jouions, vous jouiez, ils jouaient.",
        reveal: "À quoi sert l'imparfait ? Il sert à décrire une action passée qui durait ou se répétait, sans qu'on sache précisément quand elle a commencé ni fini. Comment le reconnaître ? On garde le radical du verbe et on ajoute toujours les mêmes terminaisons. Bravo, tu entends déjà la mélodie du passé qui dure !",
        bridgeToConcept: "Terminaisons à retenir pour l'imparfait des verbes en -er : -ais, -ais, -ait, -ions, -iez, -aient.",
        illustrationEmoji: "🕰️"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Quand j'étais petit, je jouais tous les jours dans le jardin.", illustrationEmoji: "🌳" },
            { text: "Tu regardais souvent des dessins animés le mercredi.", illustrationEmoji: "📺" },
            { text: "Nous habitions autrefois dans une petite maison.", illustrationEmoji: "🏠" }
          ]
        },
        {
          title: "Attention à l'erreur fréquente",
          steps: [
            { text: "Beaucoup d'élèves oublient le i après le radical et écrivent « nous jouons » au lieu de l'imparfait. C'est une confusion avec le présent !", illustrationEmoji: "❌" },
            { text: "À l'imparfait, avec nous et vous, on entend et on écrit toujours un i : nous jouions, vous jouiez.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper, et le résumé",
          steps: [
            { text: "Astuce : pense à un vieux conte qui commence souvent par « il était une fois » : cette sonorité en -ait t'aide à te souvenir de l'imparfait.", illustrationEmoji: "📖" },
            { text: "Résumé : à l'imparfait, toutes les terminaisons commencent par un a, sauf nous et vous qui gardent le i du radical : -ais, -ais, -ait, -ions, -iez, -aient.", illustrationEmoji: "📝" }
          ]
        }
      ],
      questions: [
        {
          order: 1,
          type: "input",
          prompt: "Complète à l'imparfait : Je ____ (jouer) dans le jardin.",
          answer: "jouais",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Avec je, l'imparfait se termine toujours par -ais : je jouais. Essaie de le prononcer lentement, tu entendras le son « è ».",
          strictAccents: true
        },
        {
          order: 2,
          type: "input",
          prompt: "Complète à l'imparfait : Tu ____ (regarder) la télévision.",
          answer: "regardais",
          kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.",
          explanationWhenWrong: "Avec tu, la terminaison est aussi -ais : tu regardais, comme pour je.",
          strictAccents: true
        },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse à l'imparfait : Nous ____ (chanter) tous les soirs.",
          options: ["chantions", "chantons", "chantaient"],
          answer: "chantions",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Avec nous, l'imparfait garde le i du radical et ajoute -ons : nous chantions. Ne confonds pas avec le présent nous chantons.",
          strictAccents: true
        },
        {
          order: 4,
          type: "input",
          prompt: "Complète à l'imparfait : Vous ____ (danser) chaque samedi.",
          answer: "dansiez",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Avec vous, la terminaison est -iez : vous dansiez. N'oublie pas le i avant le z.",
          strictAccents: true
        },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse à l'imparfait : Ils ____ (aimer) se promener.",
          options: ["aimaient", "aimions", "aimez"],
          answer: "aimaient",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Avec ils, la terminaison est -aient : ils aimaient. Ce -aient se prononce comme -ait, mais il faut penser à ajouter le -ent muet.",
          strictAccents: true
        },
        {
          order: 6,
          type: "match",
          prompt: "Défi : associe chaque sujet à la bonne forme de l'imparfait du verbe manger.",
          answer: "Je = mangeais ; Nous = mangions ; Elles = mangeaient",
          matchPairs: [
            { left: "Je", right: "mangeais" },
            { left: "Nous", right: "mangions" },
            { left: "Elles", right: "mangeaient" }
          ],
          kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.",
          explanationWhenWrong: "Je mangeais et elles mangeaient gardent le e après le g pour garder le son doux, mais nous mangions n'a pas besoin de ce e car le i suivant adoucit déjà le g.",
          strictAccents: true
        }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Qui reçoit l'action ? le complément d'objet direct (COD)",
      xpReward: 24,
      story: {
        hook: "Imagine que le verbe lance une action comme un ballon, et que quelqu'un ou quelque chose le reçoit juste après, sans aucun mot entre les deux.",
        concreteExample: "Regarde la phrase : Le chat mange la souris. Que mange le chat ?",
        reveal: "Le chat mange la souris : la souris est ce qui reçoit l'action de manger, directement, sans préposition entre le verbe et elle. On appelle ça le complément d'objet direct, ou COD. Bravo, tu as trouvé qui reçoit l'action !",
        bridgeToConcept: "Pour trouver le COD, on pose la question qui ? ou quoi ? juste après le verbe, sans mot de liaison comme à ou de.",
        illustrationEmoji: "🎯"
      },
      examples: [
        {
          title: "Exemple 1 : Léa lit un livre",
          steps: [
            { text: "Le verbe est lit.", illustrationEmoji: "📖" },
            { text: "Léa lit quoi ? Un livre.", illustrationEmoji: "❓" },
            { text: "Un livre est le COD du verbe lit.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : Le maître interroge les élèves",
          steps: [
            { text: "Le verbe est interroge.", illustrationEmoji: "👩‍🏫" },
            { text: "Le maître interroge qui ? Les élèves.", illustrationEmoji: "❓" },
            { text: "Les élèves est le COD du verbe interroge.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans le chat boit du lait, quel est le COD du verbe boit ?", answer: "du lait", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Le chat boit quoi ? Du lait : c'est le COD, car il n'y a aucune préposition entre le verbe et lui." },
        { order: 2, prompt: "Dans elle regarde un film, quel est le COD du verbe regarde ?", answer: "un film", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Elle regarde quoi ? Un film : c'est le COD." },
        { order: 3, prompt: "Dans les enfants ramassent des fleurs, quel est le COD du verbe ramassent ?", answer: "des fleurs", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Les enfants ramassent quoi ? Des fleurs : c'est le COD." },
        { order: 4, prompt: "Dans mon père répare la voiture, quel est le COD du verbe répare ?", answer: "la voiture", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Mon père répare quoi ? La voiture : c'est le COD." },
        { order: 5, prompt: "Dans nous invitons nos cousins, quel est le COD du verbe invitons ?", answer: "nos cousins", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Nous invitons qui ? Nos cousins : c'est le COD." },
        { order: 6, prompt: "Défi : dans le facteur apporte une lettre à ma voisine, quel est le COD du verbe apporte (et non le complément avec à) ?", answer: "une lettre", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Le facteur apporte quoi ? Une lettre, directement : c'est le COD. À ma voisine est un autre complément, introduit par à, ce n'est donc pas le COD." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "ces ou ses : le test avec ce, cet ou cette",
      xpReward: 24,
      story: {
        hook: "Voici un nouveau petit test magique, cette fois pour ne plus confondre ces et ses.",
        concreteExample: "Regarde : ... enfants jouent dans la cour. Est-ce que c'est ces ou ses ?",
        reveal: "On essaie de remplacer par ce ou cet au singulier : cet enfant joue dans la cour. Ça fonctionne, donc c'est ces, qui désigne des enfants précis, comme du doigt. Bravo, tu as réussi le test !",
        bridgeToConcept: "Si on peut remplacer par ce, cet ou cette au singulier, on écrit ces (démonstratif). Si on peut remplacer par son ou sa au singulier, on écrit ses (possessif, une appartenance).",
        illustrationEmoji: "🪄"
      },
      examples: [
        {
          title: "Exemple 1 : Il range ses affaires",
          steps: [
            { text: "On essaie son ou sa : il range son affaire. Ça fonctionne !", illustrationEmoji: "✅" },
            { text: "Donc on écrit ses, le possessif : ce sont ses affaires à lui.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : Regarde ces beaux nuages",
          steps: [
            { text: "On essaie son ou sa : regarde son beau nuage. Ça ne fonctionne pas.", illustrationEmoji: "🚫" },
            { text: "On essaie ce ou cet : regarde ce beau nuage. Ça fonctionne ! Donc on écrit ces, le démonstratif.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        {
          order: 1,
          prompt: "Complète : ___ enfants adorent les vacances. (ces ou ses)",
          answer: "ces",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "On peut dire cet enfant adore les vacances, donc c'est ces, le démonstratif qui désigne des enfants précis.",
          strictAccents: true
        },
        {
          order: 2,
          prompt: "Complète : Elle a perdu ___ clés. (ces ou ses)",
          answer: "ses",
          kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.",
          explanationWhenWrong: "On peut dire elle a perdu sa clé, donc c'est ses, le possessif : ce sont les clés qui lui appartiennent.",
          strictAccents: true
        },
        {
          order: 3,
          prompt: "Complète : ___ fleurs sentent très bon. (ces ou ses)",
          answer: "ces",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "On peut dire cette fleur sent très bon, donc c'est ces, le démonstratif.",
          strictAccents: true
        },
        {
          order: 4,
          prompt: "Complète : Mon frère range ___ jouets. (ces ou ses)",
          answer: "ses",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "On peut dire il range son jouet, donc c'est ses, le possessif.",
          strictAccents: true
        },
        {
          order: 5,
          prompt: "Complète : Regarde ___ oiseaux dans le ciel. (ces ou ses)",
          answer: "ces",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "On peut dire regarde cet oiseau, donc c'est ces, le démonstratif.",
          strictAccents: true
        },
        {
          order: 6,
          prompt: "Défi : complète les deux mots. Le chat a caché ___ jouets sous ___ coussins-là.",
          answer: "ses ces",
          kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.",
          explanationWhenWrong: "ses jouets (on peut dire son jouet, un possessif) ; ces coussins-là (on peut dire ce coussin-là, un démonstratif).",
          strictAccents: true
        }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Multiplier par 10, 100, 1000 en un éclair",
      xpReward: 24,
      story: {
        hook: "Imagine une fusée qui décolle : à chaque étage, elle ajoute un zéro à sa vitesse.",
        concreteExample: "Pour calculer 24 x 10, il suffit d'ajouter un zéro à la fin de 24.",
        reveal: "24 x 10 = 240. Bravo, tu viens de multiplier par 10 en un éclair, sans poser l'opération !",
        bridgeToConcept: "Pour multiplier par 10, on ajoute un zéro. Pour multiplier par 100, on ajoute deux zéros. Pour multiplier par 1 000, on ajoute trois zéros.",
        illustrationEmoji: "🚀"
      },
      examples: [
        {
          title: "Exemple 1 : 36 x 100",
          steps: [
            { text: "On ajoute deux zéros à 36.", illustrationEmoji: "🔟" },
            { text: "Donc 36 x 100 = 3 600.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : 7 x 1 000",
          steps: [
            { text: "On ajoute trois zéros à 7.", illustrationEmoji: "🔟" },
            { text: "Donc 7 x 1 000 = 7 000.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 8 x 10", answer: "80", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On ajoute un zéro à 8 : 80." },
        { order: 2, prompt: "Calcule : 45 x 10", answer: "450", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "On ajoute un zéro à 45 : 450." },
        { order: 3, prompt: "Calcule : 23 x 100", answer: "2300", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On ajoute deux zéros à 23 : 2 300." },
        { order: 4, prompt: "Calcule : 6 x 100", answer: "600", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "On ajoute deux zéros à 6 : 600." },
        { order: 5, prompt: "Calcule : 9 x 1000", answer: "9000", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "On ajoute trois zéros à 9 : 9 000." },
        { order: 6, prompt: "Défi : calcule 15 x 100, puis ajoute 250.", answer: "1750", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "15 x 100 = 1 500, puis 1 500 + 250 = 1 750." }
      ]
    }
  ]
};
