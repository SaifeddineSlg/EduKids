import { DayCurriculum } from "@/models/types";

export const day16: DayCurriculum = {
  dayNumber: 16,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Comparer et ranger les nombres jusqu'à 10 000",
      xpReward: 26,
      story: {
        hook: "Imagine deux nombres qui se demandent lequel est le plus grand, comme dans une petite compétition.",
        concreteExample: "Compare 3542 et 3489. Lequel est le plus grand ?",
        reveal: "On compare d'abord les milliers : 3 = 3, c'est égal. Puis les centaines : 5 est plus grand que 4. Donc 3542 est plus grand que 3489. On écrit 3542 > 3489. Bravo, tu as comparé deux nombres !",
        bridgeToConcept: "Pour comparer deux nombres, on compare d'abord les chiffres de gauche ; dès qu'un chiffre est différent, il indique le nombre le plus grand.",
        illustrationEmoji: "⚖️"
      },
      examples: [
        {
          title: "Comparer chiffre par chiffre",
          steps: [
            { text: "2350 et 2350 ont les mêmes chiffres : ils sont égaux, on écrit 2350 = 2350.", illustrationEmoji: "🟰" },
            { text: "4210 et 4300 : les milliers sont égaux (4 = 4), mais 2 est plus petit que 3, donc 4210 < 4300.", illustrationEmoji: "🔍" }
          ]
        },
        {
          title: "L'astuce pour ranger des nombres",
          steps: [
            { text: "Range d'abord par nombre de chiffres : un nombre à 4 chiffres est toujours plus grand qu'un nombre à 3 chiffres.", illustrationEmoji: "📏" },
            { text: "Ensuite, compare chiffre par chiffre en partant de la gauche.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Compare : 4256 ___ 4198 (utilise <, > ou =)", answer: ">", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Les milliers sont égaux (4 = 4), mais 2 est plus grand que 1 : 4256 > 4198." },
        { order: 2, prompt: "Compare : 3105 ___ 3150 (utilise <, > ou =)", answer: "<", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Les milliers et les centaines sont égaux, mais 0 est plus petit que 5 aux dizaines : 3105 < 3150." },
        { order: 3, prompt: "Compare : 999 ___ 1000 (utilise <, > ou =)", answer: "<", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "999 a trois chiffres, 1000 en a quatre : un nombre à quatre chiffres est toujours plus grand, donc 999 < 1000." },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis le plus grand nombre parmi ces trois.",
          options: ["2890", "2980", "2809"],
          answer: "2980",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Les milliers sont égaux (2 = 2), et 9 est le plus grand chiffre des centaines parmi 8, 9 et 8 : 2980 est le plus grand."
        },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le plus petit nombre parmi ces trois.",
          options: ["5643", "5436", "5634"],
          answer: "5436",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Les milliers sont égaux (5 = 5), et 4 est le plus petit chiffre des centaines parmi 6, 4 et 6 : 5436 est le plus petit."
        },
        { order: 6, prompt: "Défi : range ces nombres du plus petit au plus grand : 4302, 4230, 4320.", answer: "4230 4302 4320", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "En comparant les dizaines et les unités, l'ordre du plus petit au plus grand est 4230, puis 4302, puis 4320." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le passé composé avec avoir, verbes en -ir comme finir",
      xpReward: 26,
      story: {
        hook: "Tu connais déjà le passé composé des verbes en -er avec avoir. Découvrons aujourd'hui celui des verbes en -ir comme finir.",
        concreteExample: "Écoute : j'ai fini, tu as fini, il a fini, nous avons fini, vous avez fini, ils ont fini.",
        reveal: "À quoi sert ce temps ? Il raconte une action déjà terminée. Comment le reconnaître ? Le participe passé des verbes comme finir se termine par un i, et non par un é comme pour les verbes en -er.",
        bridgeToConcept: "Passé composé des verbes en -ir comme finir : avoir au présent + participe passé en i (fini).",
        illustrationEmoji: "📗"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Hier, j'ai fini mon repas avant tout le monde.", illustrationEmoji: "🍽️" },
            { text: "Nous avons choisi un beau cadeau pour Léa.", illustrationEmoji: "🎁" }
          ]
        },
        {
          title: "Attention à l'erreur fréquente",
          steps: [
            { text: "Beaucoup d'enfants écrivent j'ai finit, avec un t. C'est une erreur !", illustrationEmoji: "❌" },
            { text: "Le participe passé de finir s'écrit fini, sans t : j'ai fini.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : J'____ (finir) mon dessin.", answer: "ai fini", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Le passé composé se forme avec avoir : j'ai fini, avec un i à la fin du participe passé, sans t.", strictAccents: true },
        { order: 2, prompt: "Complète : Tu ____ (choisir) ton dessert.", answer: "as choisi", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "Avec tu, on écrit tu as choisi : as vient d'avoir, et choisi se termine par i.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Nous ____ (grandir) beaucoup cette année.",
          options: ["avons grandi", "avons grandit", "avons grandis"],
          answer: "avons grandi",
          kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.",
          explanationWhenWrong: "Avec nous, on écrit avons grandi : le participe passé des verbes comme grandir se termine par i, jamais par t ni par s.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Vous ____ (réussir) votre examen.", answer: "avez réussi", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Avec vous, on écrit avez réussi : avez vient d'avoir, et réussi se termine par i.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Ils ____ (réfléchir) longtemps.",
          options: ["ont réfléchi", "ont réfléchit", "ont réfléchis"],
          answer: "ont réfléchi",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.",
          explanationWhenWrong: "Avec ils, on écrit ont réfléchi : ont vient d'avoir, et réfléchi se termine par i, sans lettre en trop.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Elle ____ (finir) ses devoirs et ils ____ (choisir) un film.", answer: "a fini ont choisi", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "Elle a fini et ils ont choisi : deux passés composés avec avoir, chacun avec un participe passé en i.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Le complément d'objet indirect (COI)",
      xpReward: 26,
      story: {
        hook: "Imagine que certains verbes ont besoin d'un petit mot comme à ou de avant de trouver leur complément.",
        concreteExample: "Regarde : Léa parle à sa mère. Léa parle à qui ?",
        reveal: "Léa parle à qui ? À sa mère. Ce complément est relié au verbe par le petit mot à : c'est un complément d'objet indirect. Comment le reconnaître ? Il répond à la question à qui, à quoi, de qui ou de quoi, avec une préposition juste devant.",
        bridgeToConcept: "Le complément d'objet indirect (COI) répond à la question à qui, à quoi, de qui ou de quoi, avec une préposition (à, de) juste avant.",
        illustrationEmoji: "💬"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Théo pense à ses vacances : Théo pense à quoi ? À ses vacances. C'est le COI.", illustrationEmoji: "🏖️" },
            { text: "Camille parle à son frère : Camille parle à qui ? À son frère. C'est le COI.", illustrationEmoji: "👦" }
          ]
        },
        {
          title: "L'astuce pour trouver le COI",
          steps: [
            { text: "Pose la question le verbe + à qui, à quoi, de qui ou de quoi.", illustrationEmoji: "❓" },
            { text: "S'il y a une préposition (à, de) juste avant la réponse, c'est un COI.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Léa parle à sa mère. Quel est le COI ?", answer: "à sa mère", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Léa parle à qui ? À sa mère. C'est le COI." },
        { order: 2, prompt: "Paul pense à son ami. Quel est le COI ?", answer: "à son ami", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Paul pense à qui ? À son ami. C'est le COI." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis le COI : Camille profite de ses vacances.",
          options: ["Camille", "profite", "de ses vacances"],
          answer: "de ses vacances",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Camille profite de quoi ? De ses vacances. C'est le COI."
        },
        { order: 4, prompt: "Théo obéit à ses parents. Quel est le COI ?", answer: "à ses parents", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Théo obéit à qui ? À ses parents. C'est le COI." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le COI : Les enfants parlent de leur voyage.",
          options: ["les enfants", "parlent", "de leur voyage"],
          answer: "de leur voyage",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Les enfants parlent de quoi ? De leur voyage. C'est le COI."
        },
        { order: 6, prompt: "Défi : dans la phrase Léa écrit une lettre à sa grand-mère, cite le COD et le COI.", answer: "une lettre à sa grand-mère", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Léa écrit quoi ? Une lettre, c'est le COD. Léa écrit à qui ? À sa grand-mère, c'est le COI." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Là ou la : le test avec là-bas",
      xpReward: 26,
      story: {
        hook: "Il existe un petit test magique pour ne jamais confondre la et là.",
        concreteExample: "Regarde : Pose le livre ... . Est-ce que c'est la ou là ?",
        reveal: "On essaie de remplacer par là-bas ou ici : pose le livre là-bas. Ça fonctionne ! Donc on écrit là, avec un accent grave, pour montrer un endroit. Bravo, tu as réussi le test !",
        bridgeToConcept: "Si on peut remplacer par là-bas ou ici, on écrit là (avec un accent, pour un lieu). Sinon, si c'est un déterminant devant un nom féminin, on écrit la, sans accent.",
        illustrationEmoji: "🪄"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Range la trousse dans ton sac : la est devant le nom trousse, sans accent, c'est un déterminant.", illustrationEmoji: "🎒" },
            { text: "Regarde là-bas, un bel oiseau ! : là montre un endroit, avec un accent.", illustrationEmoji: "🐦" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Essaie de remplacer par là-bas ou ici dans ta tête.", illustrationEmoji: "🔊" },
            { text: "Si ça marche, c'est là, avec un accent. Sinon, c'est la, sans accent.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Pose ton sac ___. (la/là)", answer: "là", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Pose ton sac ici fonctionne, donc c'est là, avec un accent grave, pour montrer un endroit.", strictAccents: true },
        { order: 2, prompt: "Complète : Range ___ trousse dans ton cartable. (la/là)", answer: "la", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "La est devant le nom trousse, sans accent : c'est un déterminant.", strictAccents: true },
        { order: 3, prompt: "Complète : Regarde ___-bas, un bel arc-en-ciel ! (la/là)", answer: "là", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Là-bas montre un endroit, avec un accent grave sur le a.", strictAccents: true },
        { order: 4, prompt: "Complète : Léa prend ___ balle rouge. (la/là)", answer: "la", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "La est devant le nom balle, sans accent : c'est un déterminant.", strictAccents: true },
        { order: 5, prompt: "Complète : Assieds-toi ___, à côté de moi. (la/là)", answer: "là", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Assieds-toi ici fonctionne, donc c'est là, avec un accent grave.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. Pose ___ trousse ___, sur la table. (la/là)", answer: "la là", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "La trousse est un déterminant devant un nom, sans accent ; ici, sur la table fonctionne pour là, avec un accent.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Compter de 10 en 10 et de 100 en 100",
      xpReward: 26,
      story: {
        hook: "Imagine que tu ranges des billets de banque, d'abord des billets de 10 euros, puis des billets de 100 euros.",
        concreteExample: "Tu as déjà 340 euros et tu ajoutes un billet de 10 euros. Combien as-tu maintenant ?",
        reveal: "340 + 10, ça fait 350. Compter de 10 en 10 est facile : seul le chiffre des dizaines change. Bravo !",
        bridgeToConcept: "Compter de 10 en 10, c'est ajouter 10 à chaque fois ; compter de 100 en 100, c'est ajouter 100 à chaque fois.",
        illustrationEmoji: "💶"
      },
      examples: [
        {
          title: "Compter de 10 en 10",
          steps: [
            { text: "230, 240, 250, 260 : le chiffre des dizaines augmente à chaque fois.", illustrationEmoji: "➕" },
            { text: "Après 590, on trouve 600 : le chiffre des centaines change.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Compter de 100 en 100",
          steps: [
            { text: "300, 400, 500, 600 : le chiffre des centaines augmente à chaque fois.", illustrationEmoji: "➕" },
            { text: "Après 900, on trouve 1000 : on passe aux milliers.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Quel nombre vient après 450 en comptant de 10 en 10 ?", answer: "460", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Après 450, en ajoutant 10, on trouve 460." },
        { order: 2, prompt: "Quel nombre vient après 700 en comptant de 100 en 100 ?", answer: "800", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Après 700, en ajoutant 100, on trouve 800." },
        { order: 3, prompt: "Quel nombre vient avant 520 en comptant de 10 en 10 ?", answer: "510", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avant 520, en enlevant 10, on trouve 510." },
        { order: 4, prompt: "Quel nombre vient après 990 en comptant de 10 en 10 ?", answer: "1000", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Après 990, en ajoutant 10, on trouve 1000." },
        { order: 5, prompt: "Quel nombre vient après 2300 en comptant de 100 en 100 ?", answer: "2400", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Après 2300, en ajoutant 100, on trouve 2400." },
        { order: 6, prompt: "Défi : quel nombre vient après 4990 en comptant de 10 en 10 ?", answer: "5000", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Après 4990, en ajoutant 10, on trouve 5000." }
      ]
    }
  ]
};
