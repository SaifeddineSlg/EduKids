import { DayCurriculum } from "@/models/types";

export const day13: DayCurriculum = {
  dayNumber: 13,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Retrouver le tout à partir d'un pourcentage",
      xpReward: 24,
      story: {
        hook: "Tu sais calculer un pourcentage d'un nombre ; aujourd'hui, on fait l'inverse : retrouver le nombre de départ.",
        concreteExample: "10% d'un nombre vaut 8. Quel est ce nombre ?",
        reveal: "Si 10% vaut 8, alors 100%, c'est-à-dire le tout, vaut 8 x 10 = 80. Bravo, tu as retrouvé le nombre de départ !",
        bridgeToConcept: "Pour retrouver le tout, on calcule d'abord la valeur de 1%, puis on multiplie par 100. Avec des pourcentages simples comme 10%, 25% ou 50%, on peut aussi utiliser l'opération inverse directement.",
        illustrationEmoji: "🔄"
      },
      examples: [
        {
          title: "Exemple 1 : 20% d'un nombre vaut 14",
          steps: [
            { text: "1% vaut 14 / 20 = 0,7.", illustrationEmoji: "➗" },
            { text: "100% vaut donc 0,7 x 100 = 70.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : 50% d'un nombre vaut 30",
          steps: [
            { text: "50%, c'est la moitié, donc le tout est le double.", illustrationEmoji: "✖️" },
            { text: "30 x 2 = 60.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "10% d'un nombre vaut 6. Quel est ce nombre ?", answer: "60", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Si 10% vaut 6, alors 100% vaut 6 x 10 = 60." },
        { order: 2, prompt: "50% d'un nombre vaut 25. Quel est ce nombre ?", answer: "50", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "50%, c'est la moitié, donc le tout est le double de 25, soit 50." },
        { order: 3, prompt: "25% d'un nombre vaut 9. Quel est ce nombre ?", answer: "36", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "25%, c'est le quart, donc le tout vaut 9 x 4 = 36." },
        { order: 4, prompt: "10% d'un nombre vaut 12. Quel est ce nombre ?", answer: "120", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Si 10% vaut 12, alors 100% vaut 12 x 10 = 120." },
        { order: 5, prompt: "50% d'un nombre vaut 45. Quel est ce nombre ?", answer: "90", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "50%, c'est la moitié, donc le tout est le double de 45, soit 90." },
        { order: 6, prompt: "Défi : 25% d'un nombre vaut 11. Quel est ce nombre, puis quelle est sa moitié ?", answer: "22", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "25% vaut 11, donc le tout vaut 11 x 4 = 44. La moitié de 44 est 22." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le conditionnel présent, pour la politesse et l'hypothèse",
      xpReward: 24,
      story: {
        hook: "Pour exprimer un souhait poli ou une idée qui dépend d'une condition, on utilise un temps un peu magique : le conditionnel présent.",
        concreteExample: "Je voudrais un verre d'eau, s'il te plaît. Si j'avais un chien, je serais heureux.",
        reveal: "Le conditionnel présent se forme comme le futur simple, souvent à partir de l'infinitif, mais avec les terminaisons de l'imparfait : -ais, -ais, -ait, -ions, -iez, -aient. Bravo, tu as découvert le conditionnel présent !",
        bridgeToConcept: "Le conditionnel présent se forme avec le radical du futur (souvent l'infinitif) et les terminaisons de l'imparfait : -ais, -ais, -ait, -ions, -iez, -aient.",
        illustrationEmoji: "🌟"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Je voudrais partir en vacances.", illustrationEmoji: "✈️" },
            { text: "Tu pourrais m'aider, s'il te plaît ?", illustrationEmoji: "🙏" },
            { text: "Nous aimerions visiter ce musée.", illustrationEmoji: "🏛️" }
          ]
        },
        {
          title: "Attention à l'erreur fréquente",
          steps: [
            { text: "Beaucoup d'élèves confondent le futur (je jouerai) et le conditionnel (je jouerais), qui se prononcent presque pareil. C'est une erreur facile à faire !", illustrationEmoji: "❌" },
            { text: "Le futur exprime une certitude (demain, je jouerai), le conditionnel exprime un souhait ou une condition (je jouerais si j'avais le temps).", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper, et le résumé",
          steps: [
            { text: "Astuce : pense à la terminaison -ais comme à l'imparfait pour reconnaître le conditionnel : je jouerais, comme je jouais, mais avec le radical du futur.", illustrationEmoji: "🧠" },
            { text: "Résumé : le conditionnel présent sert à exprimer la politesse ou une hypothèse, et se forme avec le radical du futur et les terminaisons de l'imparfait.", illustrationEmoji: "📝" }
          ]
        }
      ],
      questions: [
        {
          order: 1,
          type: "input",
          prompt: "Complète au conditionnel : Je ____ (vouloir) un jus d'orange, s'il te plaît.",
          answer: "voudrais",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Le verbe vouloir au conditionnel présent avec je donne je voudrais.",
          strictAccents: true
        },
        {
          order: 2,
          type: "input",
          prompt: "Complète au conditionnel : Si j'avais le temps, je ____ (venir) te voir.",
          answer: "viendrais",
          kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.",
          explanationWhenWrong: "Le verbe venir au conditionnel présent avec je donne je viendrais.",
          strictAccents: true
        },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse au conditionnel : Tu ____ (pouvoir) fermer la fenêtre, s'il te plaît ?",
          options: ["pourrais", "pourras", "peux"],
          answer: "pourrais",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Le verbe pouvoir au conditionnel présent avec tu donne tu pourrais.",
          strictAccents: true
        },
        {
          order: 4,
          type: "input",
          prompt: "Complète au conditionnel : Nous ____ (aimer) visiter ce château.",
          answer: "aimerions",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Le verbe aimer au conditionnel présent avec nous donne nous aimerions.",
          strictAccents: true
        },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse au conditionnel : Si elles avaient un jardin, elles ____ (planter) des fleurs.",
          options: ["planteraient", "plantaient", "planteront"],
          answer: "planteraient",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Le verbe planter au conditionnel présent avec elles donne elles planteraient.",
          strictAccents: true
        },
        {
          order: 6,
          type: "match",
          prompt: "Défi : associe chaque sujet à la bonne forme du conditionnel du verbe être.",
          answer: "Je = serais ; Vous = seriez ; Ils = seraient",
          matchPairs: [
            { left: "Je (être)", right: "serais" },
            { left: "Vous (être)", right: "seriez" },
            { left: "Ils (être)", right: "seraient" }
          ],
          kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.",
          explanationWhenWrong: "Le verbe être au conditionnel présent donne je serais, vous seriez, ils seraient.",
          strictAccents: true
        }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Les pronoms personnels compléments : le, la, les, lui, leur",
      xpReward: 24,
      story: {
        hook: "Pour éviter de répéter toujours le même nom, on peut le remplacer par un petit mot magique : un pronom complément.",
        concreteExample: "Léa range son livre. -> Léa le range. / Léa parle à son frère. -> Léa lui parle.",
        reveal: "le remplace ici un COD masculin singulier (son livre), et lui remplace un COI singulier (à son frère). Bravo, tu as remplacé les compléments par des pronoms !",
        bridgeToConcept: "le, la et les remplacent un COD (quoi, qui). lui et leur remplacent un COI (à qui).",
        illustrationEmoji: "🔁"
      },
      examples: [
        {
          title: "Exemple 1 : Il range ses affaires. -> Il les range.",
          steps: [
            { text: "les remplace ses affaires, un COD au pluriel.", illustrationEmoji: "🎒" },
            { text: "Le pronom les évite de répéter le nom.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : Elle écrit à sa cousine. -> Elle lui écrit.",
          steps: [
            { text: "lui remplace à sa cousine, un COI au singulier.", illustrationEmoji: "✉️" },
            { text: "Le pronom lui évite de répéter le nom.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Remplace le COD par un pronom : Léa mange la pomme. -> Léa ___ mange.", answer: "la", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "la remplace la pomme, un COD féminin singulier." },
        { order: 2, prompt: "Remplace le COD par un pronom : Il regarde le film. -> Il ___ regarde.", answer: "le", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "le remplace le film, un COD masculin singulier." },
        { order: 3, prompt: "Remplace le COD par un pronom : Elle range les jouets. -> Elle ___ range.", answer: "les", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "les remplace les jouets, un COD au pluriel." },
        { order: 4, prompt: "Remplace le COI par un pronom : Il parle à son ami. -> Il ___ parle.", answer: "lui", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "lui remplace à son ami, un COI au singulier." },
        { order: 5, prompt: "Remplace le COI par un pronom : Elle offre un cadeau à ses parents. -> Elle ___ offre un cadeau.", answer: "leur", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "leur remplace à ses parents, un COI au pluriel." },
        { order: 6, prompt: "Défi : remplace les deux compléments par des pronoms. Léa donne le livre à son frère. -> Léa ___ ___ donne.", answer: "le lui", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "le remplace le livre (COD), et lui remplace à son frère (COI) : Léa le lui donne." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "peut, peu ou peux : le test du verbe pouvoir",
      xpReward: 24,
      story: {
        hook: "Trois mots qui se prononcent pareil : peut, peu, et peux, mais qui n'ont pas du tout le même rôle.",
        concreteExample: "Il ___ venir. / Il reste ___ de gâteau. / Je ___ t'aider.",
        reveal: "peut et peux viennent du verbe pouvoir (il peut, je peux, tu peux), tandis que peu est un adverbe de quantité, le contraire de beaucoup. Bravo, tu as testé chaque mot !",
        bridgeToConcept: "peut et peux viennent du verbe pouvoir (il peut, je peux, tu peux) ; peu est un adverbe de quantité, contraire de beaucoup.",
        illustrationEmoji: "🤏"
      },
      examples: [
        {
          title: "Exemple 1 : Il ___ nager.",
          steps: [
            { text: "On peut dire il pouvait nager, donc c'est le verbe pouvoir.", illustrationEmoji: "🏊" },
            { text: "Donc on écrit peut.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : Il reste ___ de temps.",
          steps: [
            { text: "peu est le contraire de beaucoup de temps.", illustrationEmoji: "⏱️" },
            { text: "Donc on écrit peu, un adverbe de quantité.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je ___ venir demain. (peut, peu, peux)", answer: "peux", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec je, le verbe pouvoir donne peux : je peux venir.", strictAccents: true },
        { order: 2, prompt: "Complète : Il ___ partir maintenant. (peut, peu, peux)", answer: "peut", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Avec il, le verbe pouvoir donne peut : il peut partir.", strictAccents: true },
        { order: 3, prompt: "Complète : Il y a ___ de monde aujourd'hui. (peut, peu, peux)", answer: "peu", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "peu est le contraire de beaucoup de monde : c'est l'adverbe de quantité.", strictAccents: true },
        { order: 4, prompt: "Complète : Tu ___ finir ton dessin. (peut, peu, peux)", answer: "peux", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Avec tu, le verbe pouvoir donne peux : tu peux finir.", strictAccents: true },
        { order: 5, prompt: "Complète : Elle ___ répondre à la question. (peut, peu, peux)", answer: "peut", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Avec elle, le verbe pouvoir donne peut : elle peut répondre.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. Il ___ venir, mais il reste ___ de temps avant le départ.", answer: "peut peu", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "il peut venir (le verbe pouvoir), puis il reste peu de temps (l'adverbe de quantité, contraire de beaucoup).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Additionner en passant par la dizaine proche",
      xpReward: 24,
      story: {
        hook: "Pour ajouter un nombre proche d'une dizaine ronde, comme 9 ou 99, il existe une astuce très rapide.",
        concreteExample: "36 + 9, comment le calculer rapidement ?",
        reveal: "On ajoute 10, puis on enlève 1 : 36 + 10 = 46, puis 46 - 1 = 45. Bravo, tu as trouvé une méthode plus rapide !",
        bridgeToConcept: "Pour ajouter 9, on ajoute 10 puis on enlève 1. Pour ajouter 99, on ajoute 100 puis on enlève 1. Pour soustraire 9, on enlève 10 puis on ajoute 1.",
        illustrationEmoji: "🧮"
      },
      examples: [
        {
          title: "Exemple 1 : 47 + 9",
          steps: [
            { text: "47 + 10 = 57.", illustrationEmoji: "➕" },
            { text: "57 - 1 = 56.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : 58 - 9",
          steps: [
            { text: "58 - 10 = 48.", illustrationEmoji: "➖" },
            { text: "48 + 1 = 49.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 24 + 9", answer: "33", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "24 + 10 = 34, puis 34 - 1 = 33." },
        { order: 2, prompt: "Calcule : 63 - 9", answer: "54", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "63 - 10 = 53, puis 53 + 1 = 54." },
        { order: 3, prompt: "Calcule : 145 + 99", answer: "244", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "145 + 100 = 245, puis 245 - 1 = 244." },
        { order: 4, prompt: "Calcule : 82 + 9", answer: "91", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "82 + 10 = 92, puis 92 - 1 = 91." },
        { order: 5, prompt: "Calcule : 200 - 99", answer: "101", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "200 - 100 = 100, puis 100 + 1 = 101." },
        { order: 6, prompt: "Défi : calcule 76 + 9, puis ajoute 99 au résultat.", answer: "184", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "76 + 9 : 76 + 10 = 86, puis 86 - 1 = 85. Ensuite, 85 + 99 : 85 + 100 = 185, puis 185 - 1 = 184." }
      ]
    }
  ]
};
