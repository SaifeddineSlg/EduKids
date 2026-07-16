import { DayCurriculum } from "@/models/types";

export const day05: DayCurriculum = {
  dayNumber: 5,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "La grande revision de la semaine",
      xpReward: 24,
      story: {
        hook: "Imagine que tu es un detective qui a resolu plein d enquetes cette semaine : boites cachees, pizzas et pourcentages.",
        concreteExample: "Aujourd hui, on melange un peu de tout : une boite cachee, une pizza a partager, et un petit pourcentage.",
        reveal: "Tu vas voir que ce sont toujours les memes methodes : chercher ce qui manque, partager en parts egales, compter sur 100. Bravo, tu es un vrai detective des nombres !",
        bridgeToConcept: "Reviser, c est reutiliser les memes methodes sur des exemples un peu differents.",
        illustrationEmoji: "🕵️"
      },
      examples: [
        {
          title: "Exemple 1 : x + 7 = 15",
          steps: [
            { text: "On enleve 7 a 15 : 15 - 7 = 8.", illustrationEmoji: "➖" },
            { text: "Donc x = 8.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : une tarte coupee en 5, on en mange 2",
          steps: [
            { text: "2 parts sur 5.", illustrationEmoji: "🥧" },
            { text: "On ecrit 2/5.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "x + 3 = 8. Combien vaut x ?", answer: "5", kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "8 - 3 = 5. Donc x = 5." },
        { order: 2, prompt: "Une pizza coupee en 6 parts, tu en manges 2. Quelle fraction ?", answer: "2/6", kindWhenWrong: "Pas grave 😊 On regarde ca ensemble.", explanationWhenWrong: "2 parts sur 6, donc 2/6." },
        { order: 3, prompt: "Sur 100 fleurs, 30 sont rouges. Quel pourcentage ?", answer: "30%", kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "30 sur 100, c est 30%." },
        { order: 4, prompt: "2x + 4 = 16. Combien vaut x ?", answer: "6", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "16 - 4 = 12, puis 12 / 2 = 6." },
        { order: 5, prompt: "Un jouet de 100 euros a 15% de reduction. Combien d euros de moins ?", answer: "15", kindWhenWrong: "Ce n est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "15% de 100, c est 15 euros de moins." },
        { order: 6, prompt: "Defi : x + 5 = 12, et une pizza coupee en 4 dont on mange x parts. Quelle fraction as-tu mangee ?", answer: "7/4", kindWhenWrong: "Bravo d avoir essaye ce defi 😊 Regardons ensemble.", explanationWhenWrong: "x = 12 - 5 = 7. La fraction mangee (imaginaire, pour s entrainer) s ecrit 7/4." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Revoir tous les verbes de la semaine",
      xpReward: 24,
      story: {
        hook: "Imagine un grand concert ou tous les verbes de la semaine viennent chanter ensemble.",
        concreteExample: "Cette semaine, on a rencontre les verbes en -er, en -ir, etre, avoir, aller, faire.",
        reveal: "Chaque verbe a sa petite musique, mais tu les connais maintenant tous un peu mieux. Bravo pour cette semaine de travail !",
        bridgeToConcept: "Reviser la conjugaison, c est se rappeler la musique de chaque groupe de verbes.",
        illustrationEmoji: "🎤"
      },
      examples: [
        {
          title: "Exemple 1 : verbe en -er",
          steps: [
            { text: "Nous chantons (terminaison ons).", illustrationEmoji: "🎵" }
          ]
        },
        {
          title: "Exemple 2 : verbe etre",
          steps: [
            { text: "Ils sont contents (verbe irregulier).", illustrationEmoji: "✨" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complete: Je ____ (parler) doucement.", answer: "parle", kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec je, parler devient parle." },
        { order: 2, prompt: "Complete: Tu ____ (finir) ton repas.", answer: "finis", kindWhenWrong: "Pas grave 😊 On regarde ca ensemble.", explanationWhenWrong: "Avec tu, finir devient finis." },
        { order: 3, prompt: "Complete: Nous ____ (etre) prets.", answer: "sommes", kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec nous, etre devient sommes." },
        { order: 4, prompt: "Complete: Vous ____ (avoir) raison.", answer: "avez", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Avec vous, avoir devient avez." },
        { order: 5, prompt: "Complete: Ils ____ (aller) a la fete.", answer: "vont", kindWhenWrong: "Ce n est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Avec ils, aller devient vont." },
        { order: 6, prompt: "Defi : complete les trois mots. Je ____ (faire) un gateau, tu ____ (choisir) le glacage, et nous ____ (etre) fiers.", answer: "fais choisis sommes", kindWhenWrong: "Bravo d avoir essaye ce defi 😊 Regardons ensemble.", explanationWhenWrong: "Je fais (faire), tu choisis (choisir), nous sommes (etre)." }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Nature, sujet et adjectif : la grande revision",
      xpReward: 24,
      story: {
        hook: "Imagine trois cles differentes qui ouvrent chacune une porte : la nature du mot, le sujet, et l adjectif.",
        concreteExample: "Regarde: Le petit chat mange. Peux-tu retrouver la nature de chat, le sujet du verbe mange, et l adjectif ?",
        reveal: "chat est un nom, chat est aussi le sujet de mange, et petit est l adjectif. Bravo, tu as utilise les trois cles !",
        bridgeToConcept: "Reviser la grammaire, c est utiliser plusieurs cles differentes sur la meme phrase.",
        illustrationEmoji: "🔑"
      },
      examples: [
        {
          title: "Exemple 1 : Ma grande soeur dessine",
          steps: [
            { text: "soeur = nom.", illustrationEmoji: "🔤" },
            { text: "Ma grande soeur = sujet du verbe dessine.", illustrationEmoji: "🎭" },
            { text: "grande = adjectif.", illustrationEmoji: "🎨" }
          ]
        },
        {
          title: "Exemple 2 : Le petit oiseau chante",
          steps: [
            { text: "oiseau = nom.", illustrationEmoji: "🔤" },
            { text: "Le petit oiseau = sujet du verbe chante.", illustrationEmoji: "🎭" },
            { text: "petit = adjectif.", illustrationEmoji: "🎨" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans le chien court, quelle est la nature du mot chien ?", answer: "nom", kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "chien designe un etre, c est un nom." },
        { order: 2, prompt: "Dans le chien court, quel est le sujet du verbe court ?", answer: "le chien", kindWhenWrong: "Pas grave 😊 On regarde ca ensemble.", explanationWhenWrong: "C est le chien qui court, donc c est le sujet." },
        { order: 3, prompt: "Dans une jolie fleur pousse, quel mot est l adjectif ?", answer: "jolie", kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "jolie decrit la fleur, c est l adjectif." },
        { order: 4, prompt: "Dans ma petite soeur joue, quel est le sujet du verbe joue ?", answer: "ma petite soeur", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "C est ma petite soeur qui joue, donc c est le sujet complet." },
        { order: 5, prompt: "Dans le grand arbre vert, cite les deux adjectifs.", answer: "grand vert", kindWhenWrong: "Ce n est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "grand et vert decrivent l arbre." },
        { order: 6, prompt: "Defi : dans les petits oiseaux joyeux chantent dans le jardin fleuri, quel est le sujet du verbe chantent ?", answer: "les petits oiseaux joyeux", kindWhenWrong: "Bravo d avoir essaye ce defi 😊 Regardons ensemble.", explanationWhenWrong: "Ce sont les petits oiseaux joyeux qui chantent, c est le sujet complet." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Tous les petits tests magiques ensemble",
      xpReward: 24,
      story: {
        hook: "Imagine une boite a outils avec tous tes petits tests magiques de la semaine : avait, etaient, etait, ou bien.",
        concreteExample: "Cette semaine, tu as appris a tester a/à, son/sont, et/est, ou/où.",
        reveal: "Chaque fois que tu hesites, tu peux utiliser le bon test dans ta tete. Bravo, ta boite a outils est complete !",
        bridgeToConcept: "Reviser l orthographe, c est se rappeler quel test utiliser pour chaque mot qui se ressemble.",
        illustrationEmoji: "🧰"
      },
      examples: [
        {
          title: "Exemple 1 : Il ... un ballon",
          steps: [
            { text: "Test avait : Il avait un ballon. Ca fonctionne.", illustrationEmoji: "✅" },
            { text: "Donc a sans accent.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : Les enfants ... la ou ils habitent",
          steps: [
            { text: "Test etaient : Les enfants etaient la. Ca fonctionne.", illustrationEmoji: "✅" },
            { text: "Donc sont.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complete: Elle ___ une jolie robe. (a ou à)", answer: "a", kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Elle avait une jolie robe fonctionne, donc a sans accent." },
        { order: 2, prompt: "Complete: Nous allons ___ la plage. (a ou à)", answer: "à", kindWhenWrong: "Pas grave 😊 On regarde ca ensemble.", explanationWhenWrong: "avait ne fonctionne pas ici, donc à avec accent." },
        { order: 3, prompt: "Complete: Mes cousins ___ arrives hier. (son ou sont)", answer: "sont", kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Mes cousins etaient arrives fonctionne, donc sont." },
        { order: 4, prompt: "Complete: Le ciel ___ gris aujourd hui. (et ou est)", answer: "est", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Le ciel etait gris fonctionne, donc est." },
        { order: 5, prompt: "Complete: Tu prefere le the ___ le chocolat chaud ? (ou/où)", answer: "ou", kindWhenWrong: "Ce n est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "le the ou bien le chocolat fonctionne, donc ou sans accent." },
        { order: 6, prompt: "Defi : complete les trois mots. Il ___ range ses affaires ___ ses jouets, mais il ne sait plus ___ il a mis ses cles.", answer: "a et où", kindWhenWrong: "Bravo d avoir essaye ce defi 😊 Regardons ensemble.", explanationWhenWrong: "Il a range (avait fonctionne), affaires et jouets (relie deux mots), et où (lieu, avec accent)." }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Le grand defi de la semaine",
      xpReward: 24,
      story: {
        hook: "Imagine un grand jeu ou tu melanges additions, soustractions, multiplications et divisions.",
        concreteExample: "Cette semaine, tu as appris a ranger par familles, faire des bonds, et partager en parts egales.",
        reveal: "Aujourd hui, tu vas utiliser toutes ces methodes ensemble. Bravo pour cette semaine de calcul mental !",
        bridgeToConcept: "Reviser le calcul mental, c est choisir la bonne methode selon le calcul a faire.",
        illustrationEmoji: "🏆"
      },
      examples: [
        {
          title: "Exemple 1 : 25 + 16",
          steps: [
            { text: "Dizaines : 20 + 10 = 30.", illustrationEmoji: "🔟" },
            { text: "Unites : 5 + 6 = 11.", illustrationEmoji: "1️⃣" },
            { text: "Total : 30 + 11 = 41.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : 6 x 5",
          steps: [
            { text: "6 bonds de 5 : 5, 10, 15, 20, 25, 30.", illustrationEmoji: "🦘" },
            { text: "Donc 6 x 5 = 30.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 14 + 9", answer: "23", kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "10 + 4 = 14. 4 + 9 = 13. 10 + 13 = 23." },
        { order: 2, prompt: "Calcule : 32 - 15", answer: "17", kindWhenWrong: "Pas grave 😊 On regarde ca ensemble.", explanationWhenWrong: "32 - 10 = 22, puis 22 - 5 = 17." },
        { order: 3, prompt: "Calcule : 5 x 6", answer: "30", kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "5 bonds de 6 : 6, 12, 18, 24, 30." },
        { order: 4, prompt: "Calcule : 40 / 5", answer: "8", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "40 partage en 5 parts egales : 8 chacune." },
        { order: 5, prompt: "Calcule : 27 + 48", answer: "75", kindWhenWrong: "Ce n est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Dizaines : 20 + 40 = 60. Unites : 7 + 8 = 15. Total : 75." },
        { order: 6, prompt: "Defi : calcule (8 x 4) - 12", answer: "20", kindWhenWrong: "Bravo d avoir essaye ce defi 😊 Regardons ensemble.", explanationWhenWrong: "8 x 4 = 32, puis 32 - 12 = 20." }
      ]
    }
  ]
};
