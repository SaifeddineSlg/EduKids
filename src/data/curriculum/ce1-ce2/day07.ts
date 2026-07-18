import { DayCurriculum } from "@/models/types";

export const day07: DayCurriculum = {
  dayNumber: 7,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "L'addition posée à trois chiffres, avec retenue",
      xpReward: 25,
      story: {
        hook: "Imagine que tu empiles maintenant trois colonnes : centaines, dizaines et unités, comme un immeuble à trois étages.",
        concreteExample: "Calcule 247 + 186. Aux unités : 7 + 6 = 13. Que fait-on avec ce 13 ?",
        reveal: "13, c'est 1 dizaine et 3 unités. On écrit 3 et on ajoute 1 dizaine aux dizaines : 4 + 8 + 1 = 13. On écrit 3 et on retient encore 1 centaine : 2 + 1 + 1 = 4. Le résultat est 433. Bravo, tu as posé une addition à trois chiffres !",
        bridgeToConcept: "On additionne colonne par colonne, en commençant par les unités, et on pose une retenue chaque fois que ça dépasse 9.",
        illustrationEmoji: "🏢"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "356 + 128 : unités 6 + 8 = 14.", illustrationEmoji: "1️⃣" },
            { text: "On écrit 4, on retient 1 dizaine.", illustrationEmoji: "✍️" },
            { text: "Dizaines : 5 + 2 + 1 = 8. Centaines : 3 + 1 = 4.", illustrationEmoji: "🔟" },
            { text: "Résultat : 484.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "273 + 159 : unités 3 + 9 = 12, on écrit 2, on retient 1.", illustrationEmoji: "1️⃣" },
            { text: "Dizaines : 7 + 5 + 1 = 13, on écrit 3, on retient 1. Centaines : 2 + 1 + 1 = 4. Résultat : 432.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 214 + 178", answer: "392", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "4 + 8 = 12, on écrit 2 et on retient 1. 1 + 7 + 1 = 9. 2 + 1 = 3. Résultat : 392." },
        { order: 2, prompt: "Calcule : 326 + 247", answer: "573", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "6 + 7 = 13, on écrit 3 et on retient 1. 2 + 4 + 1 = 7. 3 + 2 = 5. Résultat : 573." },
        { order: 3, prompt: "Calcule : 458 + 263", answer: "721", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "8 + 3 = 11, on écrit 1 et on retient 1. 5 + 6 + 1 = 12, on écrit 2 et on retient 1. 4 + 2 + 1 = 7. Résultat : 721." },
        { order: 4, prompt: "Calcule : 375 + 186", answer: "561", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "5 + 6 = 11, on écrit 1 et on retient 1. 7 + 8 + 1 = 16, on écrit 6 et on retient 1. 3 + 1 + 1 = 5. Résultat : 561." },
        { order: 5, prompt: "Calcule : 492 + 238", answer: "730", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "2 + 8 = 10, on écrit 0 et on retient 1. 9 + 3 + 1 = 13, on écrit 3 et on retient 1. 4 + 2 + 1 = 7. Résultat : 730." },
        { order: 6, prompt: "Défi : calcule 567 + 295", answer: "862", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "7 + 5 = 12, on écrit 2 et on retient 1. 6 + 9 + 1 = 16, on écrit 6 et on retient 1. 5 + 2 + 1 = 8. Résultat : 862." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "L'imparfait de être et avoir, toutes les personnes",
      xpReward: 25,
      story: {
        hook: "Tu connais déjà l'imparfait des verbes en -er. Découvrons aujourd'hui celui d'être et avoir, deux verbes très irréguliers.",
        concreteExample: "Écoute : j'étais, tu étais, il était, nous étions, vous étiez, ils étaient / j'avais, tu avais, il avait, nous avions, vous aviez, ils avaient.",
        reveal: "À quoi ça sert ? À raconter comment on était, ou ce qu'on avait, dans le passé. Comment les reconnaître ? Le radical change (ét- pour être, av- pour avoir), mais les terminaisons sont les mêmes que pour les verbes en -er : -ais, -ais, -ait, -ions, -iez, -aient.",
        bridgeToConcept: "Être à l'imparfait : étais, étais, était, étions, étiez, étaient. Avoir à l'imparfait : avais, avais, avait, avions, aviez, avaient.",
        illustrationEmoji: "🕰️"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Nous étions très fatigués après la course.", illustrationEmoji: "🏃" },
            { text: "Vous aviez raison depuis le début.", illustrationEmoji: "🙌" }
          ]
        },
        {
          title: "Attention à l'erreur fréquente",
          steps: [
            { text: "Beaucoup d'enfants oublient le i après nous et vous : nous étions, pas nous étons.", illustrationEmoji: "❌" },
            { text: "Il faut toujours écrire nous étions, vous étiez, avec le son [i].", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je ____ (être) content hier soir.", answer: "étais", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Avec je, être à l'imparfait devient étais. Essaie de le lire à voix haute.", strictAccents: true },
        { order: 2, prompt: "Complète : Nous ____ (avoir) de la chance ce jour-là.", answer: "avions", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "Avec nous, avoir à l'imparfait devient avions, avec la terminaison -ions.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Vous ____ (être) très gentils.",
          options: ["étiez", "étaient", "étions"],
          answer: "étiez",
          kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.",
          explanationWhenWrong: "Avec vous, être à l'imparfait devient étiez, avec la terminaison -iez.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Elles ____ (avoir) beaucoup de jouets.", answer: "avaient", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Avec elles, avoir à l'imparfait devient avaient, avec la terminaison -aient.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Tu ____ (être) fatigué après le sport.",
          options: ["étais", "était", "étiez"],
          answer: "étais",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.",
          explanationWhenWrong: "Avec tu, être à l'imparfait devient étais, avec la terminaison -ais.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Nous ____ (être) heureux et ils ____ (avoir) le sourire.", answer: "étions avaient", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "Nous étions vient d'être, et ils avaient vient d'avoir : deux verbes irréguliers à l'imparfait dans la même phrase.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Le groupe nominal",
      xpReward: 25,
      story: {
        hook: "Imagine une petite équipe de mots qui travaillent toujours ensemble autour d'un nom.",
        concreteExample: "Regarde : la petite fille. Combien de mots composent ce groupe, et lequel est le plus important ?",
        reveal: "Il y a trois mots : la, petite, fille. Le nom fille est le mot le plus important, c'est le noyau. La est un déterminant, petite est un adjectif qui l'accompagne.",
        bridgeToConcept: "Le groupe nominal est formé d'un nom (le noyau) et des mots qui l'accompagnent, comme le déterminant et l'adjectif.",
        illustrationEmoji: "👥"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Un grand jardin fleuri : un est le déterminant, jardin est le nom noyau, grand et fleuri sont des adjectifs.", illustrationEmoji: "🌷" },
            { text: "Ma petite soeur : ma est le déterminant, soeur est le nom noyau, petite est l'adjectif.", illustrationEmoji: "👧" }
          ]
        },
        {
          title: "L'astuce pour repérer le nom noyau",
          steps: [
            { text: "Cherche le mot qu'on ne peut pas enlever sans détruire le sens.", illustrationEmoji: "🔍" },
            { text: "Ce mot est presque toujours un nom : c'est le noyau du groupe.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans le groupe nominal la grande maison, quel est le nom noyau ?", answer: "maison", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Maison est le mot le plus important, c'est le nom noyau du groupe." },
        { order: 2, prompt: "Dans le groupe nominal un joli cadeau, quel est le déterminant ?", answer: "un", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Un se place devant le nom cadeau : c'est le déterminant." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis le nom noyau dans mon petit chat noir.",
          options: ["petit", "chat", "noir"],
          answer: "chat",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Chat est le mot le plus important du groupe : c'est le nom noyau."
        },
        { order: 4, prompt: "Dans le groupe nominal les hautes montagnes, quel est l'adjectif ?", answer: "hautes", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Hautes décrit montagnes, c'est l'adjectif du groupe." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le nom noyau dans une belle histoire drôle.",
          options: ["belle", "histoire", "drôle"],
          answer: "histoire",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Histoire est le mot le plus important du groupe : c'est le nom noyau."
        },
        { order: 6, prompt: "Défi : dans le groupe nominal ces trois petits chats gris, cite le déterminant et le nom noyau.", answer: "ces chats", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Ces est le déterminant, et chats est le nom noyau autour duquel s'organisent trois, petits et gris." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "A ou à : le test avec avait",
      xpReward: 25,
      story: {
        hook: "Il existe un petit test magique pour ne jamais confondre a et à.",
        concreteExample: "Regarde : elle ... un chat. Est-ce que c'est a ou à ?",
        reveal: "On essaie de remplacer par avait : elle avait un chat. Ça fonctionne ! Donc on écrit a, sans accent, le verbe avoir. Bravo, tu as réussi le test !",
        bridgeToConcept: "Si avait fonctionne, on écrit a (le verbe avoir). Sinon, on écrit à (avec un accent, comme dans un lieu ou une direction).",
        illustrationEmoji: "🪄"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Il va à l'école : on essaie il va avait l'école, ça ne fonctionne pas. Donc à.", illustrationEmoji: "🏫" },
            { text: "Elle a un beau vélo : elle avait un beau vélo fonctionne. Donc a.", illustrationEmoji: "🚲" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Remplace toujours par avait dans ta tête.", illustrationEmoji: "🔊" },
            { text: "Si ça marche, c'est a. Sinon, c'est à.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Il ___ un chien. (a/à)", answer: "a", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Il avait un chien fonctionne, donc c'est a, le verbe avoir, sans accent.", strictAccents: true },
        { order: 2, prompt: "Complète : Elle va ___ la piscine. (a/à)", answer: "à", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "Elle va avait la piscine ne fonctionne pas, donc c'est à, avec un accent grave.", strictAccents: true },
        { order: 3, prompt: "Complète : Nous allons ___ Paris. (a/à)", answer: "à", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Nous allons avait Paris ne fonctionne pas, donc c'est à, avec un accent.", strictAccents: true },
        { order: 4, prompt: "Complète : Théo ___ un beau vélo. (a/à)", answer: "a", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Théo avait un beau vélo fonctionne, donc c'est a, sans accent.", strictAccents: true },
        { order: 5, prompt: "Complète : Le chat dort ___ côté du feu. (a/à)", answer: "à", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Le chat dort avait côté du feu ne fonctionne pas, donc c'est à, avec un accent.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. Camille ___ rendez-vous ___ 15 heures.", answer: "a à", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "Camille avait rendez-vous fonctionne, donc a sans accent ; avait 15 heures ne fonctionne pas, donc à avec un accent.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "La table de multiplication de 4",
      xpReward: 25,
      story: {
        hook: "Imagine que tu comptes des roues de voiture, avec toujours 4 roues par voiture.",
        concreteExample: "Il y a 3 voitures. Combien de roues faut-il en tout ?",
        reveal: "3 fois 4 roues, ça fait 12 roues. Bravo, tu viens d'utiliser la table de 4 !",
        bridgeToConcept: "La table de 4 : 1x4=4, 2x4=8, 3x4=12, 4x4=16, 5x4=20...",
        illustrationEmoji: "🚗"
      },
      examples: [
        {
          title: "La table de 4",
          steps: [
            { text: "4 x 3 : c'est 4 + 4 + 4 = 12.", illustrationEmoji: "➕" },
            { text: "4 x 5 : c'est le double du double de 5, donc 20.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour la table de 4",
          steps: [
            { text: "Multiplier par 4, c'est faire le double du double.", illustrationEmoji: "🙌" },
            { text: "4 x 6 : le double de 6 est 12, et le double de 12 est 24.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 4 x 2", answer: "8", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "4 x 2 = 8." },
        { order: 2, prompt: "Calcule : 4 x 3", answer: "12", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "4 x 3 = 12." },
        { order: 3, prompt: "Calcule : 4 x 5", answer: "20", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "4 x 5 = 20." },
        { order: 4, prompt: "Calcule : 4 x 6", answer: "24", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "4 x 6 = 24." },
        { order: 5, prompt: "Calcule : 4 x 8", answer: "32", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "4 x 8 = 32." },
        { order: 6, prompt: "Défi : calcule 4 x 9", answer: "36", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "4 x 9 = 36." }
      ]
    }
  ]
};
