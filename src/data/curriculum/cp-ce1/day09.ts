import { DayCurriculum } from "@/models/types";

export const day09: DayCurriculum = {
  dayNumber: 9,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Résoudre un petit problème",
      xpReward: 24,
      story: {
        hook: "Imagine une petite histoire avec des nombres cachés dedans, comme une énigme à résoudre.",
        concreteExample: "Léo a 5 billes. Son ami lui en donne 3 de plus. Combien de billes Léo a-t-il maintenant ?",
        reveal: "On cherche le mot-clé : donne de plus, ça veut dire qu'il faut additionner. 5 + 3 = 8. Léo a 8 billes !",
        bridgeToConcept: "Pour résoudre un problème, on cherche d'abord ce que l'on connaît, puis on choisit d'additionner ou de soustraire.",
        illustrationEmoji: "🧩"
      },
      examples: [
        {
          title: "Un problème d'addition",
          steps: [
            { text: "Sara a 4 bonbons. Sa mamie lui en donne 2 de plus.", illustrationEmoji: "🍬" },
            { text: "4 + 2 = 6. Sara a 6 bonbons.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un problème de soustraction",
          steps: [
            { text: "Tom a 9 billes. Il en perd 3.", illustrationEmoji: "⚪" },
            { text: "9 - 3 = 6. Il reste 6 billes à Tom.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Nina a 6 crayons. Sa maman lui en donne 2 de plus. Combien Nina a-t-elle de crayons ?", answer: "8", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On donne 2 de plus, donc on additionne : 6 + 2 = 8." },
        { order: 2, prompt: "Léo a 10 billes. Il en donne 4 à son ami. Combien de billes reste-t-il à Léo ?", answer: "6", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "On donne des billes, donc on soustrait : 10 - 4 = 6." },
        { order: 3, prompt: "Ana a 3 gâteaux. Son papa en fait 5 de plus. Combien de gâteaux Ana a-t-elle en tout ?", answer: "8", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On fait des gâteaux en plus, donc on additionne : 3 + 5 = 8." },
        { order: 4, prompt: "Tom a 12 images. Il en perd 5. Combien d'images lui reste-t-il ?", answer: "7", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "On perd des images, donc on soustrait : 12 - 5 = 7." },
        { order: 5, prompt: "Mia a 7 fleurs. Elle en cueille 6 de plus. Combien de fleurs Mia a-t-elle maintenant ?", answer: "13", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "On cueille des fleurs en plus, donc on additionne : 7 + 6 = 13." },
        { order: 6, prompt: "Défi : Léa a 9 bonbons. Elle en mange 3, puis sa mamie lui en donne 5 de plus. Combien de bonbons Léa a-t-elle maintenant ?", answer: "11", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "9 - 3 = 6, puis 6 + 5 = 11." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le verbe dire au présent",
      xpReward: 24,
      story: {
        hook: "Il existe un petit mot magique qui sert à rapporter ce que quelqu'un raconte.",
        concreteExample: "Écoute : je dis bonjour. Tu dis merci. Il dit une histoire.",
        reveal: "Ce mot magique, c'est le verbe dire. À quoi sert-il ? Il sert à rapporter des paroles. Comment le reconnaître ? Il change selon la personne : dis, dis, dit...",
        bridgeToConcept: "Au présent : je dis, tu dis, il dit, elle dit.",
        illustrationEmoji: "💬"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Je dis bonjour à la maîtresse.", illustrationEmoji: "👋" },
            { text: "Tu dis merci poliment.", illustrationEmoji: "🙏" },
            { text: "Elle dit une belle histoire.", illustrationEmoji: "📖" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Avec je et tu, on écrit dis (avec un s).", illustrationEmoji: "🎵" },
            { text: "Avec il ou elle, on écrit dit (avec un t).", illustrationEmoji: "🎵" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je ____ (dire) bonjour.", answer: "dis", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec je, le verbe dire devient dis : je dis bonjour. Essaie de le lire à voix haute.", strictAccents: true },
        { order: 2, prompt: "Complète : Tu ____ (dire) merci.", answer: "dis", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Avec tu, le verbe dire devient dis : tu dis merci.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Il ____ (dire) une histoire.",
          options: ["dis", "dit", "disons"],
          answer: "dit",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec il ou elle, le verbe dire devient dit (avec un t) : il dit une histoire.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Elle ____ (dire) au revoir.", answer: "dit", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Avec elle, comme avec il, le verbe dire devient dit : elle dit au revoir.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Je ____ (dire) toujours la vérité.",
          options: ["dis", "dit", "disons"],
          answer: "dis",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec je, le verbe dire devient dis (avec un s) : je dis la vérité.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Tu ____ (dire) bonjour pendant qu'il ____ (dire) au revoir.", answer: "dis dit", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Tu dis (avec tu, un s) et il dit (avec il, un t). Relis la phrase entière pour bien la sentir.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Masculin et féminin des adjectifs",
      xpReward: 24,
      story: {
        hook: "Imagine que les adjectifs changent un peu de vêtements selon qu'ils décrivent un mot masculin ou féminin.",
        concreteExample: "Regarde : un petit chien, une petite fleur. Qu'est-ce qui a changé à la fin de l'adjectif ?",
        reveal: "On a ajouté un e à la fin ! À quoi ça sert ? Ça montre que l'adjectif décrit un mot féminin. Comment le reconnaître ? Devant un nom féminin, on ajoute souvent un e à l'adjectif.",
        bridgeToConcept: "Pour accorder un adjectif au féminin, on ajoute souvent un e à la fin.",
        illustrationEmoji: "👗"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Un grand chien, une grande maison.", illustrationEmoji: "🐶" },
            { text: "Un joli dessin, une jolie fleur.", illustrationEmoji: "🌸" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Si le nom est féminin, pense à ajouter un e à l'adjectif.", illustrationEmoji: "🔍" },
            { text: "Un petit garçon, une petite fille.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Accorde l'adjectif : un grand chat, une grand_ maison.", answer: "grande", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Maison est féminin, on ajoute un e à l'adjectif : grande." },
        { order: 2, prompt: "Accorde l'adjectif : un petit garçon, une petit_ fille.", answer: "petite", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Fille est féminin, on ajoute un e à l'adjectif : petite." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis le bon adjectif : une ___ fleur (joli ou jolie)",
          options: ["joli", "jolie"],
          answer: "jolie",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Fleur est féminin, on écrit jolie, avec un e."
        },
        { order: 4, prompt: "Accorde l'adjectif : un joli dessin, une joli_ image.", answer: "jolie", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Image est féminin, on ajoute un e à l'adjectif : jolie." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le bon adjectif : un ___ chien (grand ou grande)",
          options: ["grand", "grande"],
          answer: "grand",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Chien est masculin, on écrit grand, sans e."
        },
        { order: 6, prompt: "Défi : accorde les adjectifs. Le chien est grand_ (grand) et la maison est grand_ (grand) aussi.", answer: "grand grande", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Chien est masculin (grand, sans e) et maison est féminin (grande, avec un e)." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Le pluriel en x : les mots en -eu et -ou",
      xpReward: 24,
      story: {
        hook: "Imagine des mots un peu coquins qui n'aiment pas le s au pluriel et préfèrent un x.",
        concreteExample: "Regarde : un cheveu, des cheveux. Un chou, des choux. Tu vois la lettre à la fin ?",
        reveal: "Au lieu d'un s, on met un x ! À quoi ça sert ? Ça montre qu'il y en a plusieurs, comme le s. Comment le reconnaître ? Beaucoup de mots qui se terminent par -eu prennent un x au pluriel, et quelques mots en -ou aussi.",
        bridgeToConcept: "Certains mots en -eu ou -ou prennent un x au pluriel, au lieu d'un s.",
        illustrationEmoji: "💇"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Un cheveu, des cheveux.", illustrationEmoji: "💇" },
            { text: "Un chou, des choux.", illustrationEmoji: "🥬" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Un genou, des genoux.", illustrationEmoji: "🦵" },
            { text: "Un jeu, des jeux.", illustrationEmoji: "🎲" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Écris au pluriel : un cheveu -> des ___", answer: "cheveux", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Cheveu se termine par -eu, on ajoute un x au pluriel : des cheveux.", strictAccents: true },
        { order: 2, prompt: "Écris au pluriel : un chou -> des ___", answer: "choux", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Chou fait partie des mots en -ou qui prennent un x au pluriel : des choux.", strictAccents: true },
        { order: 3, prompt: "Écris au pluriel : un genou -> des ___", answer: "genoux", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Genou fait partie des mots en -ou qui prennent un x au pluriel : des genoux.", strictAccents: true },
        { order: 4, prompt: "Écris au pluriel : un jeu -> des ___", answer: "jeux", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Jeu se termine par -eu, on ajoute un x au pluriel : des jeux.", strictAccents: true },
        { order: 5, prompt: "Écris au pluriel : un feu -> des ___", answer: "feux", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Feu se termine par -eu, on ajoute un x au pluriel : des feux.", strictAccents: true },
        { order: 6, prompt: "Défi : écris au pluriel les deux mots. un chou, un cheveu -> des ___, des ___", answer: "choux cheveux", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Des choux et des cheveux : les deux mots prennent un x au pluriel. Relis bien les deux mots l'un après l'autre.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Ajouter 3",
      xpReward: 24,
      story: {
        hook: "Imagine que tu avances de trois cases d'un coup sur un jeu de l'oie.",
        concreteExample: "Tu es sur la case 4. Tu avances de 3 cases. Sur quelle case arrives-tu ?",
        reveal: "4 + 3 : on avance de 3 nombres après 4 : 5, puis 6, puis 7. Tu arrives sur la case 7 !",
        bridgeToConcept: "Ajouter 3, c'est avancer de 3 nombres après le nombre de départ.",
        illustrationEmoji: "🎲"
      },
      examples: [
        {
          title: "Ajouter 3",
          steps: [
            { text: "5 + 3 : on avance de 3 nombres après 5 : 6, 7, 8.", illustrationEmoji: "➕" },
            { text: "Donc 5 + 3 = 8.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Encore un exemple",
          steps: [
            { text: "9 + 3 : on avance de 3 nombres après 9 : 10, 11, 12.", illustrationEmoji: "➕" },
            { text: "Donc 9 + 3 = 12.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 4 + 3", answer: "7", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Après 4, on avance de 3 : 5, 6, 7." },
        { order: 2, prompt: "Calcule : 6 + 3", answer: "9", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Après 6, on avance de 3 : 7, 8, 9." },
        { order: 3, prompt: "Calcule : 10 + 3", answer: "13", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Après 10, on avance de 3 : 11, 12, 13." },
        { order: 4, prompt: "Calcule : 14 + 3", answer: "17", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Après 14, on avance de 3 : 15, 16, 17." },
        { order: 5, prompt: "Calcule : 17 + 3", answer: "20", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Après 17, on avance de 3 : 18, 19, 20." },
        { order: 6, prompt: "Défi : calcule 8 + 3, puis ajoute encore 3.", answer: "14", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "8 + 3 = 11, puis 11 + 3 = 14." }
      ]
    }
  ]
};
