import { DayCurriculum } from "@/models/types";

export const day04: DayCurriculum = {
  dayNumber: 4,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Cent billes, c est un pourcentage",
      xpReward: 24,
      story: {
        hook: "Imagine un grand sac de 100 billes, exactement 100, pas une de plus.",
        concreteExample: "Sur les 100 billes, 25 sont rouges. Quelle partie du sac est rouge ?",
        reveal: "25 billes rouges sur 100 billes, ca s ecrit 25%. Bravo, tu viens de lire un pourcentage !",
        bridgeToConcept: "Un pourcentage, c est toujours un nombre sur 100. 25% veut dire 25 sur 100.",
        illustrationEmoji: "💯"
      },
      examples: [
        {
          title: "Exemple 1 : 50 billes rouges sur 100",
          steps: [
            { text: "50 sur 100, c est la moitie.", illustrationEmoji: "🔴" },
            { text: "Donc c est 50%.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : une reduction de 10%",
          steps: [
            { text: "Un jouet coute 100 euros, avec 10% de reduction.", illustrationEmoji: "🎁" },
            { text: "10% de 100, c est 10 euros de moins.", illustrationEmoji: "➖" },
            { text: "Le jouet coute maintenant 90 euros.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Sur 100 bonbons, 10 sont au citron. Quel pourcentage ?", answer: "10%", kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "10 sur 100, c est 10%." },
        { order: 2, prompt: "Sur 100 eleves, 75 aiment le sport. Quel pourcentage ?", answer: "75%", kindWhenWrong: "Pas grave 😊 On regarde ca ensemble.", explanationWhenWrong: "75 sur 100, c est 75%." },
        { order: 3, prompt: "Un livre de 100 pages, tu en as lu 40. Quel pourcentage as-tu lu ?", answer: "40%", kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "40 sur 100, c est 40%." },
        { order: 4, prompt: "Un jouet coute 100 euros avec 20% de reduction. Combien d euros de moins ?", answer: "20", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "20% de 100 euros, c est 20 euros de moins." },
        { order: 5, prompt: "Un jouet coute 200 euros avec 10% de reduction. Combien d euros de moins ?", answer: "20", kindWhenWrong: "Ce n est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "10% de 200, c est 200 divise par 10, soit 20 euros." },
        { order: 6, prompt: "Defi : un jouet coute 50 euros avec 20% de reduction. Quel est le nouveau prix ?", answer: "40", kindWhenWrong: "Bravo d avoir essaye ce defi 😊 Regardons ensemble.", explanationWhenWrong: "20% de 50, c est 10. Le nouveau prix est 50 - 10 = 40 euros." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le présent des verbes aller et faire",
      xpReward: 24,
      story: {
        hook: "Comme être et avoir, il existe d'autres verbes très utilisés qui changent beaucoup de forme au présent.",
        concreteExample: "Écoute : je vais à l'école. Tu fais tes devoirs. Vais et fais ne ressemblent pas du tout à aller ou faire !",
        reveal: "Ce sont les verbes aller et faire. À quoi servent-ils ? Aller sert à dire où on se déplace, faire sert à dire quelle action on réalise. Comment les reconnaître ? Comme être et avoir, ce sont des verbes irréguliers très fréquents, à apprendre par cœur.",
        bridgeToConcept: "Terminaisons à retenir : aller → vais, vas, va, allons, allez, vont. Faire → fais, fais, fait, faisons, faites, font.",
        illustrationEmoji: "🏃"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Je vais à la piscine le mercredi.", illustrationEmoji: "🏊" },
            { text: "Tu fais ton lit tous les matins.", illustrationEmoji: "🛏️" },
            { text: "Nous allons au marché avec papa.", illustrationEmoji: "🛒" }
          ]
        },
        {
          title: "Attention à l'erreur fréquente",
          steps: [
            { text: "Beaucoup d'enfants écrivent « vous faisez ». C'est une erreur !", illustrationEmoji: "❌" },
            { text: "La bonne forme est vous faites, une forme à mémoriser car elle ne suit aucune règle simple.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper, et le résumé",
          steps: [
            { text: "Astuce : associe toujours aller à un lieu (je vais où ?) et faire à une action (je fais quoi ?) pour ne jamais les confondre.", illustrationEmoji: "🧭" },
            { text: "Résumé : aller et faire sont deux verbes irréguliers très fréquents, dont chaque forme se mémorise séparément.", illustrationEmoji: "📝" }
          ]
        }
      ],
      questions: [
        {
          order: 1,
          type: "input",
          prompt: "Complète : Je ____ (aller) à la piscine.",
          answer: "vais",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Avec je, aller devient vais."
        },
        {
          order: 2,
          type: "input",
          prompt: "Complète : Tu ____ (faire) le ménage.",
          answer: "fais",
          kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.",
          explanationWhenWrong: "Avec tu, faire devient fais."
        },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Nous ____ (aller) au parc.",
          options: ["allons", "allez", "vont"],
          answer: "allons",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Avec nous, aller devient allons."
        },
        {
          order: 4,
          type: "input",
          prompt: "Complète : Vous ____ (faire) un beau dessin.",
          answer: "faites",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Avec vous, faire devient faites."
        },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Ils ____ (aller) chez leurs cousins.",
          options: ["allons", "allez", "vont"],
          answer: "vont",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Avec ils, aller devient vont."
        },
        {
          order: 6,
          type: "match",
          prompt: "Défi : associe chaque sujet à la bonne forme du verbe faire au présent.",
          answer: "Nous = faisons ; Vous = faites ; Elles = font",
          matchPairs: [
            { left: "Nous", right: "faisons" },
            { left: "Vous", right: "faites" },
            { left: "Elles", right: "font" }
          ],
          kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.",
          explanationWhenWrong: "Nous faisons, vous faites, elles font : chaque forme du verbe faire se mémorise séparément."
        }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Le mot qui decrit un nom",
      xpReward: 24,
      story: {
        hook: "Imagine un artiste qui ajoute de la couleur a un dessin en noir et blanc.",
        concreteExample: "Regarde: un chat. Puis : un petit chat noir. Les mots petit et noir ajoutent quelque chose au nom chat.",
        reveal: "petit et noir sont des adjectifs : ils decrivent le nom, ils lui donnent de la couleur. Bravo, tu as trouve les artistes de la phrase !",
        bridgeToConcept: "Un adjectif se place souvent juste avant ou juste apres le nom, et il decrit ce nom (couleur, taille, forme...).",
        illustrationEmoji: "🎨"
      },
      examples: [
        {
          title: "Exemple 1 : une grande maison bleue",
          steps: [
            { text: "grande decrit la taille de la maison.", illustrationEmoji: "🏠" },
            { text: "bleue decrit la couleur de la maison.", illustrationEmoji: "🎨" },
            { text: "Ce sont deux adjectifs.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : un gentil chien joyeux",
          steps: [
            { text: "gentil et joyeux decrivent le chien.", illustrationEmoji: "🐶" },
            { text: "Ce sont deux adjectifs.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans un petit chat, quel mot est l adjectif ?", answer: "petit", kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "petit decrit le chat, c est l adjectif." },
        { order: 2, prompt: "Dans une jolie fleur, quel mot est l adjectif ?", answer: "jolie", kindWhenWrong: "Pas grave 😊 On regarde ca ensemble.", explanationWhenWrong: "jolie decrit la fleur, c est l adjectif." },
        { order: 3, prompt: "Dans un grand arbre vert, cite les deux adjectifs.", answer: "grand vert", kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "grand et vert decrivent tous les deux l arbre." },
        { order: 4, prompt: "Dans une maison ancienne, quel mot est l adjectif ?", answer: "ancienne", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "ancienne decrit la maison, c est l adjectif." },
        { order: 5, prompt: "Dans un chien fidele et calme, cite les deux adjectifs.", answer: "fidele calme", kindWhenWrong: "Ce n est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "fidele et calme decrivent tous les deux le chien." },
        { order: 6, prompt: "Defi : dans une petite fille curieuse et joyeuse decouvre un tresor cache, cite les trois adjectifs.", answer: "petite curieuse joyeuse", kindWhenWrong: "Bravo d avoir essaye ce defi 😊 Regardons ensemble.", explanationWhenWrong: "petite, curieuse et joyeuse decrivent la fille ; cache decrit tresor mais n est pas demande ici." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "ou ou où : le test avec ou bien",
      xpReward: 24,
      story: {
        hook: "Encore un petit test magique, cette fois pour ou et où.",
        concreteExample: "Regarde: Tu veux du jus ... de l eau ? Est-ce que c est ou ou où ?",
        reveal: "On essaie de remplacer par ou bien : Tu veux du jus ou bien de l eau ? Ca fonctionne ! Donc on ecrit ou sans accent (un choix). Bravo !",
        bridgeToConcept: "Si ou bien fonctionne, on ecrit ou sans accent (un choix). Sinon, on ecrit où avec accent, ca indique un lieu (où est-il ?).",
        illustrationEmoji: "🪄"
      },
      examples: [
        {
          title: "Exemple 1 : Où habites-tu ?",
          steps: [
            { text: "On essaie ou bien : Ou bien habites-tu ? Ca ne fonctionne pas.", illustrationEmoji: "🚫" },
            { text: "Donc on ecrit où avec accent (un lieu).", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : Tu prends le velo ou la trottinette",
          steps: [
            { text: "On essaie ou bien : Tu prends le velo ou bien la trottinette. Ca fonctionne !", illustrationEmoji: "✅" },
            { text: "Donc on ecrit ou sans accent (un choix).", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complete: Tu veux un chat ___ un chien ? (ou/où)", answer: "ou", kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "un chat ou bien un chien fonctionne, donc ou sans accent." },
        { order: 2, prompt: "Complete: ___ vas-tu ce week-end ? (ou/où)", answer: "où", kindWhenWrong: "Pas grave 😊 On regarde ca ensemble.", explanationWhenWrong: "ou bien vas-tu ne fonctionne pas, donc où avec accent (lieu)." },
        { order: 3, prompt: "Complete: Je ne sais pas ___ j ai range mes cles. (ou/où)", answer: "où", kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "ca parle d un lieu, donc où avec accent." },
        { order: 4, prompt: "Complete: Tu preferes le rouge ___ le bleu ? (ou/où)", answer: "ou", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "le rouge ou bien le bleu fonctionne, donc ou sans accent." },
        { order: 5, prompt: "Complete: Dis-moi ___ se trouve la sortie. (ou/où)", answer: "où", kindWhenWrong: "Ce n est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "ca parle d un lieu, donc où avec accent." },
        { order: 6, prompt: "Defi : complete les deux mots. ___ veux-tu aller, à la mer ___ à la montagne ?", answer: "où ou", kindWhenWrong: "Bravo d avoir essaye ce defi 😊 Regardons ensemble.", explanationWhenWrong: "Où veux-tu (lieu, avec accent) et à la mer ou bien à la montagne (choix, sans accent)." }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Partager en parts egales",
      xpReward: 24,
      story: {
        hook: "Imagine que tu dois partager des bonbons entre toi et tes amis, en parts bien egales.",
        concreteExample: "Tu as 12 bonbons a partager entre 3 amis. Combien de bonbons chacun recoit ?",
        reveal: "12 divise par 3, ca fait 4. Chaque ami recoit 4 bonbons. Bravo, tu viens de faire une division !",
        bridgeToConcept: "Diviser, c est partager un nombre en parts egales. 12 / 3 = 4.",
        illustrationEmoji: "🍬"
      },
      examples: [
        {
          title: "Exemple 1 : 20 / 4",
          steps: [
            { text: "20 billes partagees entre 4 amis.", illustrationEmoji: "🔵" },
            { text: "20 / 4 = 5. Chacun recoit 5 billes.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : 18 / 3",
          steps: [
            { text: "18 bonbons partages entre 3 amis.", illustrationEmoji: "🍬" },
            { text: "18 / 3 = 6. Chacun recoit 6 bonbons.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 10 / 2", answer: "5", kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "10 partage en 2 parts egales : 5 chacune." },
        { order: 2, prompt: "Calcule : 15 / 3", answer: "5", kindWhenWrong: "Pas grave 😊 On regarde ca ensemble.", explanationWhenWrong: "15 partage en 3 parts egales : 5 chacune." },
        { order: 3, prompt: "Calcule : 24 / 4", answer: "6", kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "24 partage en 4 parts egales : 6 chacune." },
        { order: 4, prompt: "Calcule : 36 / 6", answer: "6", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "36 partage en 6 parts egales : 6 chacune." },
        { order: 5, prompt: "Calcule : 45 / 5", answer: "9", kindWhenWrong: "Ce n est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "45 partage en 5 parts egales : 9 chacune." },
        { order: 6, prompt: "Defi : calcule 56 / 7", answer: "8", kindWhenWrong: "Bravo d avoir essaye ce defi 😊 Regardons ensemble.", explanationWhenWrong: "56 partage en 7 parts egales : 8 chacune (car 7 x 8 = 56)." }
      ]
    }
  ]
};
