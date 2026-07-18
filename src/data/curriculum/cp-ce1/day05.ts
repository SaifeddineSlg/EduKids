import { DayCurriculum } from "@/models/types";

export const day05: DayCurriculum = {
  dayNumber: 5,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "La grande révision de la semaine",
      xpReward: 24,
      story: {
        hook: "Imagine que tu es un champion des nombres qui a appris plein de choses cette semaine.",
        concreteExample: "Cette semaine, tu as appris à compter, à additionner, à faire des doubles, et à comparer des nombres.",
        reveal: "Aujourd'hui, on mélange un peu tout ça pour vérifier que tu es devenu un vrai champion. Bravo pour cette semaine de travail !",
        bridgeToConcept: "Réviser, c'est réutiliser ce qu'on a appris sur des exemples un peu différents.",
        illustrationEmoji: "🏆"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "Le nombre juste après 7, c'est 8.", illustrationEmoji: "🔢" },
            { text: "4 + 3 = 7.", illustrationEmoji: "➕" },
            { text: "Le double de 4, c'est 4 + 4 = 8.", illustrationEmoji: "🙌" }
          ]
        },
        {
          title: "Comparer pour vérifier",
          steps: [
            { text: "8 est plus grand que 5.", illustrationEmoji: "📈" },
            { text: "En comptant de 10 en 10 : 10, 20, 30.", illustrationEmoji: "🔟" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Quel nombre vient juste après 13 ?", answer: "14", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Après 13, on dit 14." },
        { order: 2, prompt: "Calcule : 5 + 4", answer: "9", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "5 + 4 = 9." },
        { order: 3, prompt: "Calcule le double de 7 : 7 + 7", answer: "14", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "7 + 7 = 14." },
        { order: 4, prompt: "Quel est le plus grand nombre entre 11 et 9 ?", answer: "11", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "11 vient après 9 en comptant, donc 11 est plus grand." },
        { order: 5, prompt: "Quel nombre vient après 20 en comptant de 10 en 10 ?", answer: "30", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Après 20, en ajoutant 10, on trouve 30." },
        { order: 6, prompt: "Défi : calcule 9 - 2, puis ajoute le double de 3.", answer: "13", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "9 - 2 = 7, puis le double de 3 est 6. 7 + 6 = 13." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Revoir tous les verbes de la semaine",
      xpReward: 24,
      story: {
        hook: "Imagine un petit concert où tous les verbes de la semaine viennent chanter ensemble.",
        concreteExample: "Cette semaine, tu as rencontré être, avoir, aller, et les verbes en -er.",
        reveal: "Chaque verbe a sa petite musique, mais tu les connais maintenant un peu mieux. Bravo pour cette semaine de travail !",
        bridgeToConcept: "Réviser la conjugaison, c'est se rappeler la musique de chaque verbe.",
        illustrationEmoji: "🎤"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "Je suis content (verbe être).", illustrationEmoji: "✨" },
            { text: "Tu as un vélo (verbe avoir).", illustrationEmoji: "🎒" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "Il va à l'école (verbe aller).", illustrationEmoji: "🚶" },
            { text: "Elle joue dans le jardin (verbe en -er).", illustrationEmoji: "⚽" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je ____ (être) content.", answer: "suis", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec je, le verbe être devient suis : je suis content. Essaie de le lire à voix haute.", strictAccents: true },
        { order: 2, prompt: "Complète : Tu ____ (avoir) un chat.", answer: "as", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Avec tu, le verbe avoir devient as : tu as un chat.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Il ____ (aller) à la piscine.",
          options: ["vais", "vas", "va"],
          answer: "va",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec il, le verbe aller devient va : il va à la piscine.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Elle ____ (chanter) une chanson.", answer: "chante", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Avec elle, un verbe en -er se termine par e : elle chante.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Tu ____ (jouer) dans le jardin.",
          options: ["joue", "joues", "jouons"],
          answer: "joues",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec tu, un verbe en -er se termine par es : tu joues.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les trois mots. Je ____ (être) content car j'____ (avoir) un cadeau et je ____ (aller) le montrer.", answer: "suis ai vais", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Je suis (être), j'ai (avoir) et je vais (aller). Relis la phrase entière pour bien la sentir.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Nom, verbe, masculin-féminin : la grande révision",
      xpReward: 24,
      story: {
        hook: "Imagine trois clés différentes qui ouvrent chacune une porte : le nom, le verbe, et le masculin-féminin.",
        concreteExample: "Regarde : le petit chat court. Peux-tu retrouver le nom, le verbe, et dire si chat est masculin ou féminin ?",
        reveal: "chat est un nom, court est le verbe, et chat est masculin (on dit le chat). Bravo, tu as utilisé les trois clés !",
        bridgeToConcept: "Réviser la grammaire, c'est utiliser plusieurs clés différentes sur la même phrase.",
        illustrationEmoji: "🔑"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "Ma soeur dessine : soeur est un nom, dessine est le verbe.", illustrationEmoji: "🎨" },
            { text: "Une fleur pousse : fleur est féminin (une fleur).", illustrationEmoji: "🌸" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "Des chiens courent : chiens est au pluriel.", illustrationEmoji: "🐶" },
            { text: "Un livre est posé : livre est masculin et au singulier.", illustrationEmoji: "📖" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans le chien court, quel est le nom ?", answer: "chien", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On peut dire un chien, donc chien est un nom." },
        { order: 2, prompt: "Dans le chien court, quel est le verbe ?", answer: "court", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Court dit l'action, c'est le verbe." },
        {
          order: 3,
          type: "mcq",
          prompt: "Table est-il masculin ou féminin ?",
          options: ["masculin", "féminin"],
          answer: "féminin",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "On dit une table, donc table est féminin."
        },
        { order: 4, prompt: "des ballons : singulier ou pluriel ?", answer: "pluriel", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Des ballons, il y en a plusieurs : pluriel." },
        {
          order: 5,
          type: "mcq",
          prompt: "Dans la maîtresse parle, quel est le verbe ?",
          options: ["maîtresse", "parle"],
          answer: "parle",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Parle dit l'action, c'est le verbe."
        },
        { order: 6, prompt: "Défi : dans les petits oiseaux chantent, cite le nom au pluriel.", answer: "oiseaux", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Oiseaux est au pluriel (plusieurs oiseaux)." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Toutes les règles de la semaine ensemble",
      xpReward: 24,
      story: {
        hook: "Imagine une boîte à outils avec toutes tes règles magiques de la semaine.",
        concreteExample: "Cette semaine, tu as appris le/la, un/une, le pluriel avec s, le son [k], et m devant m, b, p.",
        reveal: "Chaque fois que tu hésites, tu peux utiliser la bonne règle dans ta tête. Bravo, ta boîte à outils est complète !",
        bridgeToConcept: "Réviser l'orthographe, c'est se rappeler quelle règle utiliser pour chaque mot.",
        illustrationEmoji: "🧰"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "Le chat (masculin), la table (féminin).", illustrationEmoji: "🐱" },
            { text: "Un ballon, des ballons (on ajoute un s).", illustrationEmoji: "⚽" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "Quatre (le son [k] s'écrit qu devant a dans ce mot).", illustrationEmoji: "🔢" },
            { text: "Un timbre (m devant b).", illustrationEmoji: "✉️" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : ___ maison est jolie. (le ou la)", answer: "la", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Maison est un mot féminin, donc on dit la maison. Essaie de le relire à voix haute.", strictAccents: true },
        { order: 2, prompt: "Écris au pluriel : un jouet -> des ___", answer: "jouets", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "On ajoute un s à la fin du mot : des jouets.", strictAccents: true },
        { order: 3, prompt: "Complète : ___atre chats jouent. (c ou qu)", answer: "qu", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Dans ce mot, le son [k] s'écrit qu : quatre. C'est une exception à retenir par cœur.", strictAccents: true },
        { order: 4, prompt: "Complète : un ti___bre. (n ou m)", answer: "m", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Devant la lettre b, on écrit m : timbre. Pense à la règle m devant m, b, p.", strictAccents: true },
        { order: 5, prompt: "Complète : ___ crayon est cassé. (un ou une)", answer: "un", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Crayon est un mot masculin, donc on dit un crayon.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. ___ ballon (le/la) et ___ tables (des). Combien y a-t-il de tables : une seule ou plusieurs ?", answer: "le des plusieurs", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Le ballon est masculin (le ballon) et des tables est au pluriel : il y a donc plusieurs tables.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Le grand défi de la semaine",
      xpReward: 24,
      story: {
        hook: "Imagine un grand jeu où tu mélanges tout ce que tu as appris cette semaine en calcul.",
        concreteExample: "Cette semaine, tu as appris à ajouter 1 et 2, à enlever 1 et 2, à faire des doubles, et à compter de 2 en 2 et de 10 en 10.",
        reveal: "Aujourd'hui, tu vas utiliser toutes ces méthodes ensemble. Bravo pour cette semaine de calcul mental !",
        bridgeToConcept: "Réviser le calcul mental, c'est choisir la bonne méthode selon le calcul à faire.",
        illustrationEmoji: "🏆"
      },
      examples: [
        {
          title: "Un peu de tout, mélangé",
          steps: [
            { text: "8 + 1 = 9 (ajouter 1).", illustrationEmoji: "➕" },
            { text: "Le double de 6 : 6 + 6 = 12.", illustrationEmoji: "🙌" }
          ]
        },
        {
          title: "Encore un peu de révision",
          steps: [
            { text: "10 - 2 = 8 (enlever 2).", illustrationEmoji: "➖" },
            { text: "En comptant de 10 en 10 : 20, 30, 40.", illustrationEmoji: "🔟" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 6 + 1", answer: "7", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Le nombre juste après 6, c'est 7." },
        { order: 2, prompt: "Calcule : 9 - 2", answer: "7", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Avant 9, on recule de 2 : 8, puis 7." },
        { order: 3, prompt: "Calcule le double de 5 : 5 + 5", answer: "10", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "5 + 5 = 10." },
        { order: 4, prompt: "Quel nombre vient après 14 en comptant de 2 en 2 ?", answer: "16", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Après 14, en ajoutant 2, on trouve 16." },
        { order: 5, prompt: "Quel nombre vient après 30 en comptant de 10 en 10 ?", answer: "40", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Après 30, en ajoutant 10, on trouve 40." },
        { order: 6, prompt: "Défi : calcule le double de 4, puis ajoute 2.", answer: "10", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Le double de 4 est 8, puis 8 + 2 = 10." }
      ]
    }
  ]
};
