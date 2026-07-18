import { DayCurriculum } from "@/models/types";

export const day06: DayCurriculum = {
  dayNumber: 6,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "La division avec reste",
      xpReward: 22,
      story: {
        hook: "Imagine que tu dois partager 29 billes entre 4 amis, en parts égales.",
        concreteExample: "29 divisé par 4 : combien de fois 4 dans 29 ? 7 fois (28), et il reste 1 bille qu'on ne peut pas partager.",
        reveal: "Le résultat est 7, reste 1. Le quotient est 7 et le reste est 1, car 4 x 7 = 28 et 29 - 28 = 1.",
        bridgeToConcept: "Dans une division avec reste, le reste est toujours plus petit que le diviseur.",
        illustrationEmoji: "🔴"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "17 divisé par 5 : combien de fois 5 dans 17 ? 3 fois (15), il reste 2.", illustrationEmoji: "🔢" },
            { text: "17 = 5 x 3 + 2. Le quotient est 3, le reste est 2.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "38 divisé par 6 : combien de fois 6 dans 38 ? 6 fois (36), il reste 2.", illustrationEmoji: "🔍" },
            { text: "Le reste (2) est toujours plus petit que le diviseur (6).", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 13 divisé par 4 (donne le quotient et le reste, exemple : 5 reste 2)", answer: "3 reste 1", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "4 x 3 = 12, et 13 - 12 = 1. Le quotient est 3, le reste est 1." },
        { order: 2, prompt: "Calcule : 22 divisé par 5 (donne le quotient et le reste)", answer: "4 reste 2", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "5 x 4 = 20, et 22 - 20 = 2. Le quotient est 4, le reste est 2." },
        { order: 3, prompt: "Calcule : 29 divisé par 4 (donne le quotient et le reste)", answer: "7 reste 1", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "4 x 7 = 28, et 29 - 28 = 1. Le quotient est 7, le reste est 1." },
        { order: 4, prompt: "Calcule : 38 divisé par 6 (donne le quotient et le reste)", answer: "6 reste 2", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "6 x 6 = 36, et 38 - 36 = 2. Le quotient est 6, le reste est 2." },
        { order: 5, prompt: "Calcule : 47 divisé par 5 (donne le quotient et le reste)", answer: "9 reste 2", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "5 x 9 = 45, et 47 - 45 = 2. Le quotient est 9, le reste est 2." },
        { order: 6, prompt: "Défi : calcule 53 divisé par 6 (donne le quotient et le reste)", answer: "8 reste 5", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "6 x 8 = 48, et 53 - 48 = 5. Le quotient est 8, le reste est 5, bien plus petit que le diviseur 6." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le futur simple",
      xpReward: 22,
      story: {
        hook: "Demain, que feras-tu ? Le futur simple permet d'annoncer une action qui n'a pas encore eu lieu.",
        concreteExample: "Écoute : demain, je jouerai au parc avec mes amis.",
        reveal: "Je jouerai est au futur simple : on garde l'infinitif du verbe (jouer) et on ajoute les terminaisons -ai, -as, -a, -ons, -ez, -ont.",
        bridgeToConcept: "Le futur simple : je jouerai, tu joueras, il jouera, nous jouerons, vous jouerez, ils joueront.",
        illustrationEmoji: "🔮"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Demain, nous partirons en voyage.", illustrationEmoji: "🧳" },
            { text: "L'année prochaine, ils entreront au collège.", illustrationEmoji: "🏫" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Pour les verbes en -er, garde l'infinitif entier et ajoute la terminaison.", illustrationEmoji: "🔍" },
            { text: "Jouer + ai = je jouerai.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Demain, je ____ (jouer) au parc.", answer: "jouerai", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec je, le futur simple de jouer est jouerai : on garde l'infinitif jouer et on ajoute -ai.", strictAccents: true },
        { order: 2, prompt: "Complète : Tu ____ (manger) une glace ce soir.", answer: "mangeras", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Avec tu, le futur simple de manger est mangeras : infinitif manger puis -as.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Elle ____ (chanter) à la fête.",
          options: ["chantera", "chanteras", "chanteront"],
          answer: "chantera",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Avec elle, le futur simple de chanter est chantera, avec un a et non un s.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Nous ____ (partir) en voyage l'année prochaine.", answer: "partirons", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Avec nous, le futur simple de partir est partirons : infinitif partir puis -ons.", strictAccents: true },
        { order: 5, prompt: "Complète : Vous ____ (finir) vos devoirs avant le dîner.", answer: "finirez", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Avec vous, le futur simple de finir est finirez : infinitif finir puis -ez.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux verbes. Ils ____ (entrer) au collège et nous ____ (avoir) de nouveaux professeurs.", answer: "entreront aurons", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Tu étais proche ! Avec ils, entrer donne entreront. Le verbe avoir est irrégulier au futur : son radical devient aur-, donc nous aurons.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Les déterminants : articles, possessifs, démonstratifs",
      xpReward: 22,
      story: {
        hook: "Devant presque chaque nom se cache un petit mot qui l'annonce : le déterminant.",
        concreteExample: "Regarde : ___ chien aboie. Quel petit mot peut-on mettre avant chien ?",
        reveal: "Le, un, mon, ce sont tous des déterminants : ils annoncent le nom qui suit et donnent des indications, comme le genre, le nombre ou la possession.",
        bridgeToConcept: "Les articles (le, la, les, un, une, des), les possessifs (mon, ton, son...) et les démonstratifs (ce, cet, cette, ces) sont des déterminants.",
        illustrationEmoji: "🐕"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Le chat dort sur mon lit : le est un article, mon est un possessif.", illustrationEmoji: "🐱" },
            { text: "Cette fleur est belle : cette est un démonstratif.", illustrationEmoji: "🌸" }
          ]
        },
        {
          title: "L'astuce pour reconnaître un déterminant",
          steps: [
            { text: "L'article annonce simplement le nom (le, la, les, un, une, des).", illustrationEmoji: "🔍" },
            { text: "Le possessif indique à qui appartient la chose, le démonstratif montre quelque chose.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans le chien aboie, quel type de déterminant est le ?", answer: "article", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Le annonce simplement le nom chien, c'est un article." },
        { order: 2, prompt: "Dans mon lit est confortable, quel type de déterminant est mon ?", answer: "possessif", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Mon indique à qui appartient le lit, c'est un possessif." },
        { order: 3, prompt: "Dans cette fleur est belle, quel type de déterminant est cette ?", answer: "démonstratif", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Cette montre la fleur dont on parle, c'est un démonstratif." },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne réponse : dans ces enfants jouent, ces est un déterminant...",
          options: ["démonstratif", "possessif", "article"],
          answer: "démonstratif",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Ces montre les enfants dont on parle, c'est un déterminant démonstratif."
        },
        { order: 5, prompt: "Dans une pomme est tombée, quel type de déterminant est une ?", answer: "article", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Une annonce simplement le nom pomme, c'est un article." },
        { order: 6, prompt: "Défi : cite les trois déterminants, dans l'ordre. Ses amis ont visité cette ville avec un guide.", answer: "ses cette un", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Ses est un possessif, cette un démonstratif, un un article." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "A ou à",
      xpReward: 22,
      story: {
        hook: "Un tout petit accent peut changer complètement le rôle d'un mot dans la phrase.",
        concreteExample: "Regarde : Bayrem ___ un chat noir. Est-ce que c'est a ou à ?",
        reveal: "On peut dire Bayrem avait un chat noir, donc c'est a, le verbe avoir au présent, sans accent. À, avec accent grave, est une préposition qui ne peut jamais être remplacée par avait.",
        bridgeToConcept: "Test : si on peut remplacer par avait, on écrit a (verbe avoir). Sinon, on écrit à (préposition), avec l'accent grave.",
        illustrationEmoji: "✏️"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Elle a un beau cahier : on peut dire elle avait un beau cahier, donc a, sans accent.", illustrationEmoji: "📓" },
            { text: "Il va à l'école : on ne peut pas dire il va avait l'école, donc à, avec accent.", illustrationEmoji: "🏫" }
          ]
        },
        {
          title: "L'astuce du test",
          steps: [
            { text: "Essaie de remplacer par avait.", illustrationEmoji: "🔍" },
            { text: "Ça marche → a. Ça ne marche pas → à.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Bayrem ___ un chat noir. (a/à)", answer: "a", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On peut dire Bayrem avait un chat noir, donc on écrit a, le verbe avoir, sans accent.", strictAccents: true },
        { order: 2, prompt: "Complète : Elle va ___ l'école à pied. (a/à)", answer: "à", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "On ne peut pas dire elle va avait l'école, donc on écrit à, la préposition, avec l'accent grave.", strictAccents: true },
        { order: 3, prompt: "Complète : Il ___ mangé toute la tarte. (a/à)", answer: "a", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On peut dire il avait mangé toute la tarte, donc on écrit a, l'auxiliaire avoir, sans accent.", strictAccents: true },
        { order: 4, prompt: "Complète : Nous partons ___ la mer cet été. (a/à)", answer: "à", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "On ne peut pas dire nous partons avait la mer, donc on écrit à, la préposition, avec l'accent grave.", strictAccents: true },
        { order: 5, prompt: "Complète : Ma sœur ___ beaucoup d'amis. (a/à)", answer: "a", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "On peut dire ma sœur avait beaucoup d'amis, donc on écrit a, le verbe avoir, sans accent.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. Balkis ___ (a) rendez-vous ___ (à) 15 heures.", answer: "a à", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Tu étais proche ! Balkis avait rendez-vous fonctionne, donc a sans accent. Mais avait 15 heures ne fonctionne pas, donc à, avec l'accent grave.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Multiplier par 10, 100 et 1000",
      xpReward: 22,
      story: {
        hook: "Il existe une astuce magique pour multiplier très vite par 10, 100 ou 1000.",
        concreteExample: "Combien font 24 x 10 ?",
        reveal: "24 x 10 = 240 : il suffit d'ajouter un zéro à droite du nombre.",
        bridgeToConcept: "Multiplier par 10 : ajoute un zéro. Par 100 : ajoute deux zéros. Par 1000 : ajoute trois zéros.",
        illustrationEmoji: "0️⃣"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "36 x 10 = 360 : un zéro ajouté.", illustrationEmoji: "🔢" },
            { text: "36 x 100 = 3600 : deux zéros ajoutés.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce des zéros",
          steps: [
            { text: "Compte le nombre de zéros dans 10, 100 ou 1000.", illustrationEmoji: "🔍" },
            { text: "Ajoute ce nombre de zéros à la fin du nombre de départ.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 24 x 10", answer: "240", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "24 x 10 = 240, on ajoute un zéro." },
        { order: 2, prompt: "Calcule : 36 x 100", answer: "3600", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "36 x 100 = 3600, on ajoute deux zéros." },
        { order: 3, prompt: "Calcule : 7 x 1000", answer: "7000", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "7 x 1000 = 7000, on ajoute trois zéros." },
        { order: 4, prompt: "Calcule : 58 x 10", answer: "580", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "58 x 10 = 580, on ajoute un zéro." },
        { order: 5, prompt: "Calcule : 12 x 100", answer: "1200", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "12 x 100 = 1200, on ajoute deux zéros." },
        { order: 6, prompt: "Défi : calcule 9 x 1000, puis ajoute 24 x 10. Quel est le total ?", answer: "9240", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "9 x 1000 = 9000, 24 x 10 = 240, et 9000 + 240 = 9240." }
      ]
    }
  ]
};
