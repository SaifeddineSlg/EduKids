import { DayCurriculum } from "@/models/types";

export const day20: DayCurriculum = {
  dayNumber: 20,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "La révision de la semaine (4)",
      xpReward: 24,
      story: {
        hook: "Imagine que tu es devenu un champion de la soustraction posée, des formes géométriques, de l'heure et des problèmes.",
        concreteExample: "Cette semaine, tu as appris la soustraction en colonnes, les formes géométriques, l'heure et les problèmes à deux étapes.",
        reveal: "Aujourd'hui, on mélange un peu tout ça pour vérifier que tu es devenu un vrai champion. Bravo pour cette semaine de travail !",
        bridgeToConcept: "Réviser, c'est réutiliser ce qu'on a appris sur des exemples un peu différents.",
        illustrationEmoji: "🏆"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "36 - 14 = 22 en colonnes.", illustrationEmoji: "➖" },
            { text: "Un triangle a trois côtés.", illustrationEmoji: "🔺" },
            { text: "La petite aiguille sur le 8 et la grande sur le 12 : il est 8 heures.", illustrationEmoji: "🕗" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "Léo a 10 billes, il en gagne 4 puis en perd 2 : il lui en reste 12.", illustrationEmoji: "🧩" },
            { text: "Le cercle n'a pas de côtés.", illustrationEmoji: "⚪" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule en colonnes : 48 - 25", answer: "23", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Unités : 8 - 5 = 3. Dizaines : 4 - 2 = 2. Le résultat est 23." },
        { order: 2, prompt: "Combien de côtés a un rectangle ?", answer: "4", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Un rectangle a quatre côtés." },
        { order: 3, prompt: "La petite aiguille est sur le 6 et la grande sur le 12. Quelle heure est-il ?", answer: "6 heures", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "La petite aiguille indique le nombre d'heures : il est 6 heures.", acceptedAnswers: ["6h", "6"] },
        { order: 4, prompt: "Nina a 12 images. Elle en gagne 5, puis en donne 3. Combien d'images a-t-elle maintenant ?", answer: "14", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "12 + 5 = 17, puis 17 - 3 = 14. Nina a donc 14 images." },
        {
          order: 5,
          type: "mcq",
          prompt: "Quelle forme n'a pas de côtés ?",
          options: ["le cercle", "le carré", "le triangle"],
          answer: "le cercle",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Le cercle est tout rond, il n'a pas de côtés."
        },
        { order: 6, prompt: "Défi : calcule en colonnes 57 - 23, puis dis combien de côtés a la forme du résultat si on l'imagine comme un carré.", answer: "34 4", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Unités : 7 - 3 = 4. Dizaines : 5 - 2 = 3. Le résultat est 34, et un carré a 4 côtés." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Revoir les verbes de la semaine (4)",
      xpReward: 24,
      story: {
        hook: "Imagine un petit concert où venir, finir, dormir et le futur proche viennent chanter ensemble.",
        concreteExample: "Cette semaine, tu as rencontré venir, les verbes en -ir comme finir, dormir, et le futur proche avec aller.",
        reveal: "Chaque verbe a sa petite musique, mais tu les connais maintenant un peu mieux. Bravo pour cette semaine de travail !",
        bridgeToConcept: "Réviser la conjugaison, c'est se rappeler la musique de chaque verbe.",
        illustrationEmoji: "🎤"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "Je viens de l'école (verbe venir).", illustrationEmoji: "🚶" },
            { text: "Tu finis ton goûter (verbe finir).", illustrationEmoji: "🍪" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "Il dort déjà (verbe dormir).", illustrationEmoji: "😴" },
            { text: "Elle va chanter (futur proche).", illustrationEmoji: "🎵" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je ____ (venir) de la piscine.", answer: "viens", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec je, le verbe venir devient viens : je viens de la piscine.", strictAccents: true },
        { order: 2, prompt: "Complète : Tu ____ (finir) ton dessin.", answer: "finis", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Avec tu, le verbe finir devient finis : tu finis ton dessin.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Il ____ (dormir) déjà.",
          options: ["dors", "dort", "dormons"],
          answer: "dort",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec il, le verbe dormir devient dort : il dort déjà.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Elle ____ (aller) danser ce soir.", answer: "va", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Au futur proche, avec elle, le verbe aller devient va : elle va danser.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Tu ____ (venir) avec nous.",
          options: ["viens", "vient", "venez"],
          answer: "viens",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec tu, le verbe venir devient viens.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les trois mots. Je ____ (venir) chez toi, je ____ (finir) mes devoirs et je ____ (aller) jouer.", answer: "viens finis vais", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Je viens (venir), je finis (finir) et je vais (aller, futur proche). Relis la phrase entière à voix haute.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Sujet, synonymes et contraires : la grande révision",
      xpReward: 24,
      story: {
        hook: "Imagine quatre clés différentes qui ouvrent chacune une porte : le sujet, les synonymes, les contraires et l'ordre alphabétique.",
        concreteExample: "Regarde : le petit chat joue. Peux-tu retrouver le sujet, un synonyme de joue, et le contraire de petit ?",
        reveal: "Le petit chat est le sujet, joue peut se dire s'amuse, et le contraire de petit est grand. Bravo, tu as utilisé plusieurs clés !",
        bridgeToConcept: "Réviser la grammaire, c'est utiliser plusieurs clés différentes sur la même phrase.",
        illustrationEmoji: "🔑"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "Les enfants chantent. -> Qui chante ? Les enfants (le sujet).", illustrationEmoji: "🎶" },
            { text: "Content et joyeux sont des synonymes.", illustrationEmoji: "😊" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "Grand est le contraire de petit.", illustrationEmoji: "⚖️" },
            { text: "Chat vient avant lion dans l'ordre alphabétique.", illustrationEmoji: "🔠" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans le chien aboie, quel est le sujet du verbe aboie ?", answer: "le chien", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Qui aboie ? Le chien. Le chien est donc le sujet du verbe aboie." },
        { order: 2, prompt: "Quel mot est un synonyme de content ?", answer: "joyeux", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Content et joyeux veulent dire presque la même chose : ce sont des synonymes." },
        {
          order: 3,
          type: "mcq",
          prompt: "Quel est le contraire de grand ?",
          options: ["petit", "joli", "rapide"],
          answer: "petit",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Grand et petit veulent dire des choses opposées : ce sont des contraires."
        },
        { order: 4, prompt: "Quel mot vient en premier dans l'ordre alphabétique : chat ou souris ?", answer: "chat", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "C vient avant s dans l'alphabet, donc chat vient avant souris." },
        {
          order: 5,
          type: "mcq",
          prompt: "Dans les oiseaux chantent, quel est le sujet ?",
          options: ["les oiseaux", "chantent", "aucun"],
          answer: "les oiseaux",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Qui chante ? Les oiseaux. Les oiseaux sont donc le sujet du verbe chantent."
        },
        { order: 6, prompt: "Défi : cite le contraire de chaud, puis dis si ce mot vient avant ou après chaud dans l'ordre alphabétique.", answer: "froid après", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Le contraire de chaud est froid. C vient avant f dans l'alphabet, donc froid vient après chaud." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Les sons et les homophones : la grande révision (2)",
      xpReward: 24,
      story: {
        hook: "Imagine une boîte à outils encore plus grande avec toutes tes nouvelles règles magiques de la semaine.",
        concreteExample: "Cette semaine, tu as appris le son [ɔ̃], le son [j], et les homophones son/sont et on/ont.",
        reveal: "Chaque fois que tu hésites, tu peux utiliser la bonne règle dans ta tête. Bravo, ta boîte à outils s'agrandit encore !",
        bridgeToConcept: "Réviser l'orthographe, c'est se rappeler quelle règle utiliser pour chaque mot.",
        illustrationEmoji: "🧰"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "Un ballon (le son [ɔ̃] s'écrit on).", illustrationEmoji: "🎈" },
            { text: "Un soleil (le son [j] s'écrit eil).", illustrationEmoji: "☀️" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "Son chat dort (on peut dire mon chat).", illustrationEmoji: "🐱" },
            { text: "Les enfants ont un ballon (on peut dire avaient).", illustrationEmoji: "⚽" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : un b___bon (bonbon). (on ou om)", answer: "on", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Bonbon s'écrit avec on, car la lettre suivante n'est pas m, b ou p.", strictAccents: true },
        { order: 2, prompt: "Complète : un trav___ (travail). (ail ou eil)", answer: "ail", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Travail s'écrit avec ail, après la lettre a.", strictAccents: true },
        { order: 3, prompt: "Complète : Léo prend ___ vélo. (son ou sont)", answer: "son", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "On peut dire Léo prend mon vélo, donc on écrit son.", strictAccents: true },
        { order: 4, prompt: "Complète : Les garçons ___ contents. (son ou sont)", answer: "sont", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "On peut dire les garçons étaient contents, donc on écrit sont.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le bon mot : ___ joue dans la cour.",
          options: ["on", "ont"],
          answer: "on",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "On peut dire il joue dans la cour, donc on écrit on.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les trois mots. ___ (on) voit un p___t (pont) où les enfants ___ (ont) un cerf-volant.", answer: "on on ont", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "On (comme il), pont s'écrit avec on (pas de m, b, p après), et ont (verbe avoir, on peut dire avaient).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Le grand défi de la semaine (4)",
      xpReward: 24,
      story: {
        hook: "Imagine un grand jeu où tu mélanges tout ce que tu as appris cette semaine en calcul.",
        concreteExample: "Cette semaine, tu as appris à ajouter 20, à soustraire 20, à ajouter 8, et à soustraire 8.",
        reveal: "Aujourd'hui, tu vas utiliser toutes ces méthodes ensemble. Bravo pour cette semaine de calcul mental !",
        bridgeToConcept: "Réviser le calcul mental, c'est choisir la bonne méthode selon le calcul à faire.",
        illustrationEmoji: "🏆"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "23 + 20 = 43 (on ajoute 2 dizaines).", illustrationEmoji: "➕" },
            { text: "15 + 8 = 23 (+10 puis -2).", illustrationEmoji: "➕" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "45 - 20 = 25 (on enlève 2 dizaines).", illustrationEmoji: "➖" },
            { text: "23 - 8 = 15 (-10 puis +2).", illustrationEmoji: "➖" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 34 + 20", answer: "54", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On ajoute 2 dizaines à 34 : 34 + 20 = 54." },
        { order: 2, prompt: "Calcule : 58 - 20", answer: "38", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "On enlève 2 dizaines à 58 : 58 - 20 = 38." },
        { order: 3, prompt: "Calcule : 24 + 8", answer: "32", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "24 + 10 = 34, puis 34 - 2 = 32. Donc 24 + 8 = 32." },
        { order: 4, prompt: "Calcule : 33 - 8", answer: "25", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "33 - 10 = 23, puis 23 + 2 = 25. Donc 33 - 8 = 25." },
        { order: 5, prompt: "Calcule : 42 + 20", answer: "62", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "On ajoute 2 dizaines à 42 : 42 + 20 = 62." },
        { order: 6, prompt: "Défi : calcule 50 - 20, puis ajoute 8 au résultat.", answer: "38", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "50 - 20 = 30, puis 30 + 8 = 38." }
      ]
    }
  ]
};
