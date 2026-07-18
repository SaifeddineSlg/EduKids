import { DayCurriculum } from "@/models/types";

export const day10: DayCurriculum = {
  dayNumber: 10,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "La grande révision de la semaine",
      xpReward: 25,
      story: {
        hook: "Imagine que tu es un champion des nombres qui a encore appris plein de choses cette semaine.",
        concreteExample: "Cette semaine, tu as appris les nombres jusqu'à 1000, l'addition posée à trois chiffres, la soustraction posée à trois chiffres et la multiplication posée.",
        reveal: "Aujourd'hui, on mélange un peu tout ça pour vérifier que tu es devenu un vrai champion. Bravo pour cette semaine de travail !",
        bridgeToConcept: "Réviser, c'est réutiliser ce qu'on a appris sur des exemples un peu différents.",
        illustrationEmoji: "🏆"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "347, c'est 3 centaines, 4 dizaines et 7 unités.", illustrationEmoji: "💯" },
            { text: "215 + 178 : unités 5+8=13, on retient 1. Dizaines 1+7+1=9. Centaines 2+1=3. Résultat : 393.", illustrationEmoji: "➕" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "432 - 158 : unités 2-8 impossible, on emprunte. 12-8=4. Dizaines 2(3-1)-5 impossible, on emprunte : 12-5=7. Centaines 3(4-1)-1=2. Résultat : 274.", illustrationEmoji: "➖" },
            { text: "132 x 3 : unités 2x3=6. Dizaines 3x3=9. Centaines 1x3=3. Résultat : 396.", illustrationEmoji: "✖️" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Combien de centaines dans le nombre 587 ?", answer: "5", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "587, c'est 5 centaines, 8 dizaines et 7 unités." },
        { order: 2, prompt: "Calcule : 236 + 149", answer: "385", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "6+9=15, on écrit 5 et on retient 1. 3+4+1=8. 2+1=3. Résultat : 385." },
        { order: 3, prompt: "Calcule : 524 - 268", answer: "256", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "4-8 impossible, on emprunte : 14-8=6. Dizaines 1-6 impossible, on emprunte : 11-6=5. Centaines 4-2=2. Résultat : 256." },
        { order: 4, prompt: "Calcule : 213 x 4", answer: "852", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Unités 3x4=12, on écrit 2, on retient 1. Dizaines 1x4+1=5. Centaines 2x4=8. Résultat : 852." },
        { order: 5, prompt: "Quel nombre vient juste avant 500 ?", answer: "499", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Juste avant 500, il y a 499." },
        { order: 6, prompt: "Défi : calcule 318 + 246, puis enlève 100.", answer: "464", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "318 + 246 = 564, puis 564 - 100 = 464." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Revoir l'imparfait et le futur simple de la semaine",
      xpReward: 25,
      story: {
        hook: "Imagine deux grandes portes : l'une ouvre vers le passé, avec l'imparfait, et l'autre vers demain, avec le futur simple.",
        concreteExample: "Cette semaine, tu as rencontré l'imparfait des verbes en -er, l'imparfait de être et avoir, le futur simple des verbes en -er, et le futur simple de être et avoir.",
        reveal: "Chaque temps a sa propre musique, et tu la connais maintenant un peu mieux. Bravo pour cette semaine de travail !",
        bridgeToConcept: "Réviser la conjugaison, c'est se rappeler la musique complète de chaque temps.",
        illustrationEmoji: "🎼"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "Autrefois, nous jouions dans ce parc (imparfait).", illustrationEmoji: "📖" },
            { text: "Vous étiez très gentils (imparfait d'être).", illustrationEmoji: "🕰️" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "Demain, ils joueront dans le jardin (futur simple).", illustrationEmoji: "🔮" },
            { text: "Nous serons prêts et vous aurez le sourire (futur simple d'être et avoir).", illustrationEmoji: "⏳" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Autrefois, je ____ (chanter) tous les soirs.", answer: "chantais", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "À l'imparfait, avec je, on ajoute -ais : je chantais.", strictAccents: true },
        { order: 2, prompt: "Complète : Hier, nous ____ (être) fatigués.", answer: "étions", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "Avec nous, être à l'imparfait devient étions.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Demain, vous ____ (regarder) un film.",
          options: ["regarderez", "regardiez", "regardez"],
          answer: "regarderez",
          kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.",
          explanationWhenWrong: "Au futur simple, avec vous, on garde l'infinitif regarder et on ajoute -ez : regarderez.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Plus tard, ils ____ (avoir) une belle maison.", answer: "auront", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Au futur simple, avec ils, avoir devient auront.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Autrefois, tu ____ (aimer) les vacances.",
          options: ["aimais", "aimeras", "aimait"],
          answer: "aimais",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.",
          explanationWhenWrong: "À l'imparfait, avec tu, on ajoute -ais : tu aimais.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les trois mots. Hier, nous ____ (avoir) peur, mais demain nous ____ (être) courageux et vous ____ (jouer) avec nous.", answer: "avions serons jouerez", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "Nous avions est à l'imparfait, nous serons et vous jouerez sont au futur simple : bien distinguer le passé et l'avenir.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Noms, groupe nominal et accords : la grande révision",
      xpReward: 25,
      story: {
        hook: "Imagine une grande boîte à outils remplie de tout ce que tu as appris cette semaine sur les noms.",
        concreteExample: "Regarde : ces jolies fleurs de Camille. Peux-tu retrouver le nom propre, le nom noyau, et vérifier l'accord de l'adjectif ?",
        reveal: "Camille est le nom propre, fleurs est le nom noyau du groupe nominal, et jolies est accordé au féminin pluriel comme fleurs. Bravo, tu as utilisé toutes tes connaissances !",
        bridgeToConcept: "Réviser la grammaire, c'est utiliser plusieurs outils différents sur la même phrase.",
        illustrationEmoji: "🧰"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "Théo habite à Lyon : Théo et Lyon sont des noms propres.", illustrationEmoji: "🏙️" },
            { text: "Un grand jardin fleuri : jardin est le nom noyau du groupe nominal.", illustrationEmoji: "🌷" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "Un chapeau, des chapeaux : le pluriel des noms en -eau prend un x.", illustrationEmoji: "🎩" },
            { text: "Des petites fleurs jolies : le déterminant, le nom et l'adjectif s'accordent tous ensemble.", illustrationEmoji: "🧩" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans la phrase Léa joue avec Rex, quel mot est un nom propre ?", answer: "Léa", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Léa désigne une personne précise, avec une majuscule : c'est un nom propre." },
        { order: 2, prompt: "Dans le groupe nominal une jolie fleur, quel est le nom noyau ?", answer: "fleur", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Fleur est le mot le plus important du groupe : c'est le nom noyau." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis le bon pluriel de gâteau.",
          options: ["gâteaus", "gâteaux"],
          answer: "gâteaux",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Les noms en -eau prennent un x au pluriel : des gâteaux."
        },
        { order: 4, prompt: "Accorde : des ____ maisons (grand/grande/grandes)", answer: "grandes", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Maisons est féminin pluriel, donc l'adjectif s'accorde : grandes." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le nom propre dans cette liste.",
          options: ["ville", "Marseille", "maison"],
          answer: "Marseille",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Marseille est un lieu précis, avec une majuscule : c'est un nom propre."
        },
        { order: 6, prompt: "Défi : dans le groupe nominal ces deux petits chats gris de Camille, cite le nom noyau et le nom propre.", answer: "chats Camille", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Chats est le nom noyau du groupe nominal, et Camille est le nom propre, avec une majuscule." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Toutes les règles de la semaine ensemble",
      xpReward: 25,
      story: {
        hook: "Imagine une boîte à outils avec toutes tes nouvelles règles magiques de la semaine.",
        concreteExample: "Cette semaine, tu as appris c/qu, a/à, est/et, et m devant m, b, p.",
        reveal: "Chaque fois que tu hésites, tu peux utiliser la bonne règle dans ta tête. Bravo, ta boîte à outils s'agrandit encore !",
        bridgeToConcept: "Réviser l'orthographe, c'est se rappeler quelle règle utiliser pour chaque mot.",
        illustrationEmoji: "🧰"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "Une guitare (qu devant i), un cadeau (c devant a).", illustrationEmoji: "🎸" },
            { text: "Il a un chat (a, verbe avoir) ; elle va à l'école (à, avec accent).", illustrationEmoji: "🏫" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "Le ciel est bleu (est, verbe être) ; Léa et Théo jouent (et, pour relier).", illustrationEmoji: "☁️" },
            { text: "Important, tomber (m devant p et devant b).", illustrationEmoji: "🔔" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : ___atre (quatre). (c ou qu)", answer: "qu", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Devant e, sans le u, le c ferait un son doux : on écrit qu, comme dans quatre.", strictAccents: true },
        { order: 2, prompt: "Complète : Il ___ un beau vélo. (a/à)", answer: "a", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "Il avait un beau vélo fonctionne, donc c'est a, le verbe avoir, sans accent.", strictAccents: true },
        { order: 3, prompt: "Complète : Elle ___ contente. (est/et)", answer: "est", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Elle était contente fonctionne, donc c'est est, le verbe être.", strictAccents: true },
        { order: 4, prompt: "Complète : i___portant (important). (m ou n)", answer: "m", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Devant la lettre p, on écrit toujours m : important.", strictAccents: true },
        { order: 5, prompt: "Complète : Nous allons ___ Paris. (a/à)", answer: "à", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Nous allons avait Paris ne fonctionne pas, donc c'est à, avec un accent.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. Le ___artable (cartable) est i___portant (important) pour l'école.", answer: "c m", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "Cartable s'écrit avec un c devant a, et important s'écrit avec un m devant p.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Le grand défi de la semaine",
      xpReward: 25,
      story: {
        hook: "Imagine un grand jeu où tu mélanges toutes les nouvelles tables, doubles et moitiés de la semaine.",
        concreteExample: "Cette semaine, tu as appris la table de 3, la table de 4, les doubles, et les moitiés.",
        reveal: "Aujourd'hui, tu vas utiliser toutes ces méthodes ensemble. Bravo pour cette semaine de calcul mental !",
        bridgeToConcept: "Réviser le calcul mental, c'est choisir la bonne méthode selon le calcul à faire.",
        illustrationEmoji: "🏆"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "3 x 6 = 18 (table de 3).", illustrationEmoji: "✖️" },
            { text: "4 x 5 = 20 (table de 4).", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "Le double de 8 est 16.", illustrationEmoji: "👯" },
            { text: "La moitié de 18 est 9.", illustrationEmoji: "➗" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 3 x 6", answer: "18", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "3 x 6 = 18." },
        { order: 2, prompt: "Calcule : 4 x 7", answer: "28", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "4 x 7 = 28." },
        { order: 3, prompt: "Quel est le double de 9 ?", answer: "18", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Le double de 9, c'est 9 + 9 = 18." },
        { order: 4, prompt: "Quelle est la moitié de 12 ?", answer: "6", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "La moitié de 12, c'est 6, car 6 + 6 = 12." },
        { order: 5, prompt: "Calcule : 3 x 8", answer: "24", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "3 x 8 = 24." },
        { order: 6, prompt: "Défi : calcule le double de 4 x 3.", answer: "24", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "4 x 3 = 12, puis le double de 12 est 24." }
      ]
    }
  ]
};
