import { DayCurriculum } from "@/models/types";

export const day02: DayCurriculum = {
  dayNumber: 2,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "L'addition avec retenue",
      xpReward: 24,
      story: {
        hook: "Imagine que tu ranges des jetons dans deux colonnes, dizaines et unités, mais qu'une colonne déborde !",
        concreteExample: "Calcule 27 + 15. D'abord les unités : 7 + 5 = 12. Que fait-on avec ce 12 ?",
        reveal: "12, c'est 1 dizaine et 2 unités. On écrit 2 et on ajoute 1 dizaine de plus aux dizaines : 2 + 1 + 1 = 4. Le résultat est 42. Bravo, tu as utilisé une retenue !",
        bridgeToConcept: "Quand l'addition des unités dépasse 9, on pose une retenue dans la colonne des dizaines.",
        illustrationEmoji: "➕"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "38 + 24 : unités 8 + 4 = 12.", illustrationEmoji: "1️⃣" },
            { text: "On écrit 2, on retient 1 dizaine.", illustrationEmoji: "✍️" },
            { text: "Dizaines : 3 + 2 + 1 (retenue) = 6.", illustrationEmoji: "🔟" },
            { text: "Résultat : 62.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "46 + 27 : unités 6 + 7 = 13.", illustrationEmoji: "1️⃣" },
            { text: "On écrit 3, on retient 1.", illustrationEmoji: "✍️" },
            { text: "Dizaines : 4 + 2 + 1 = 7. Résultat : 73.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 18 + 15", answer: "33", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "8 + 5 = 13, on écrit 3 et on retient 1. 1 + 1 + 1 = 3. Résultat : 33." },
        { order: 2, prompt: "Calcule : 26 + 17", answer: "43", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "6 + 7 = 13, on écrit 3 et on retient 1. 2 + 1 + 1 = 4. Résultat : 43." },
        { order: 3, prompt: "Calcule : 35 + 28", answer: "63", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "5 + 8 = 13, on écrit 3 et on retient 1. 3 + 2 + 1 = 6. Résultat : 63." },
        { order: 4, prompt: "Calcule : 47 + 36", answer: "83", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "7 + 6 = 13, on écrit 3 et on retient 1. 4 + 3 + 1 = 8. Résultat : 83." },
        { order: 5, prompt: "Calcule : 54 + 29", answer: "83", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "4 + 9 = 13, on écrit 3 et on retient 1. 5 + 2 + 1 = 8. Résultat : 83." },
        { order: 6, prompt: "Défi : calcule 68 + 47", answer: "115", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "8 + 7 = 15, on écrit 5 et on retient 1. 6 + 4 + 1 = 11. Résultat : 115." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Être et avoir au présent, toutes les personnes",
      xpReward: 24,
      story: {
        hook: "Tu connais déjà je suis et j'ai. Découvrons aujourd'hui toute la chanson d'être et avoir.",
        concreteExample: "Écoute : nous sommes, vous êtes, ils sont / nous avons, vous avez, ils ont.",
        reveal: "À quoi servent ces verbes ? Être et avoir sont utilisés dans presque toutes les phrases. Comment les reconnaître ? Ce sont des verbes irréguliers, ils changent complètement selon la personne.",
        bridgeToConcept: "Être : suis, es, est, sommes, êtes, sont. Avoir : ai, as, a, avons, avez, ont.",
        illustrationEmoji: "✨"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Nous sommes en retard ce matin.", illustrationEmoji: "⏰" },
            { text: "Vous êtes très gentils.", illustrationEmoji: "😊" },
            { text: "Ils ont de la chance.", illustrationEmoji: "🍀" }
          ]
        },
        {
          title: "Attention à l'erreur fréquente",
          steps: [
            { text: "Beaucoup d'enfants oublient l'accent circonflexe : vous etes au lieu de vous êtes.", illustrationEmoji: "❌" },
            { text: "Il faut toujours écrire vous êtes, avec un accent sur le e.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Nous ____ (être) prêts.", answer: "sommes", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Le verbe être est irrégulier : avec nous, il devient sommes. Essaie de le lire à voix haute.", strictAccents: true },
        { order: 2, prompt: "Complète : Vous ____ (avoir) de la chance.", answer: "avez", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "Avec vous, avoir devient avez, avec un z à la fin.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Ils ____ (être) contents.",
          options: ["sommes", "êtes", "sont"],
          answer: "sont",
          kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.",
          explanationWhenWrong: "Avec ils, être devient sont, sans accent cette fois.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Elles ____ (avoir) de beaux jouets.", answer: "ont", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Avec elles, avoir devient ont, comme avec ils.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Vous ____ (être) très gentils.",
          options: ["sommes", "êtes", "sont"],
          answer: "êtes",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.",
          explanationWhenWrong: "Tu étais proche ! Avec vous, être devient êtes, avec un accent circonflexe sur le e.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Nous ____ (avoir) raison et vous ____ (être) d'accord.", answer: "avons êtes", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "Nous avons vient d'avoir, et vous êtes vient d'être : deux verbes irréguliers différents dans la même phrase.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "L'adjectif qualificatif",
      xpReward: 24,
      story: {
        hook: "Imagine un artiste qui ajoute de la couleur à un dessin en noir et blanc.",
        concreteExample: "Regarde : un chat. Puis : un petit chat noir. Que font les mots petit et noir ?",
        reveal: "À quoi servent-ils ? Ils décrivent le nom chat, ils lui donnent des détails. Comment les reconnaître ? On peut les enlever sans détruire la phrase : un chat reste correct.",
        bridgeToConcept: "L'adjectif qualificatif décrit le nom : sa couleur, sa taille, sa forme...",
        illustrationEmoji: "🎨"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Une grande maison bleue : grande et bleue décrivent maison.", illustrationEmoji: "🏠" },
            { text: "Un gentil chien joyeux : gentil et joyeux décrivent chien.", illustrationEmoji: "🐶" }
          ]
        },
        {
          title: "L'astuce pour reconnaître un adjectif",
          steps: [
            { text: "Essaie d'enlever le mot de la phrase.", illustrationEmoji: "🔍" },
            { text: "Si la phrase reste correcte sans lui, c'est un adjectif !", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans un petit chat, quel mot est l'adjectif ?", answer: "petit", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Petit décrit le chat, c'est l'adjectif." },
        { order: 2, prompt: "Dans une jolie fleur, quel mot est l'adjectif ?", answer: "jolie", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Jolie décrit la fleur, c'est l'adjectif." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis l'adjectif : un grand arbre vert",
          options: ["arbre", "grand", "un"],
          answer: "grand",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Grand décrit l'arbre, c'est un adjectif (vert aussi, mais on demandait un seul mot)."
        },
        { order: 4, prompt: "Dans une maison ancienne, quel mot est l'adjectif ?", answer: "ancienne", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Ancienne décrit la maison, c'est l'adjectif." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis l'adjectif : un chien fidèle et calme",
          options: ["chien", "fidèle", "un"],
          answer: "fidèle",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Fidèle décrit le chien, c'est un adjectif (calme aussi)."
        },
        { order: 6, prompt: "Défi : dans une petite fille curieuse et joyeuse, cite les trois adjectifs.", answer: "petite curieuse joyeuse", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Petite, curieuse et joyeuse décrivent toutes les trois la fille." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Le son [g] : g ou gu",
      xpReward: 24,
      story: {
        hook: "Imagine un son grave, comme un gros camion : gronde, gronde !",
        concreteExample: "Écoute : gâteau, guitare. Tu entends le même son [g], mais ça ne s'écrit pas pareil devant chaque lettre !",
        reveal: "À quoi ça sert de connaître la règle ? À bien écrire ce son. Comment le reconnaître ? Devant a, o, u, le son [g] s'écrit g. Devant e et i, il s'écrit gu pour garder le son dur.",
        bridgeToConcept: "Devant a, o, u : on écrit g (gâteau). Devant e, i : on écrit gu (guitare).",
        illustrationEmoji: "🎸"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Un gâteau, un garçon : g devant a et devant o.", illustrationEmoji: "🍰" },
            { text: "Une guitare, un guide : gu devant a et i (pour garder le son dur).", illustrationEmoji: "🎸" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Devant e et i, sans le u, le g ferait un son doux comme dans je.", illustrationEmoji: "🔍" },
            { text: "On ajoute donc un u pour garder le son [g] dur : guerre, guide.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : un ___âteau (gâteau). (g ou gu)", answer: "g", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Devant la lettre a, on écrit simplement g : gâteau.", strictAccents: true },
        { order: 2, prompt: "Complète : une ___itare (guitare). (g ou gu)", answer: "gu", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "Tu étais proche ! Devant i, il faut ajouter un u pour garder le son [g] dur : guitare.", strictAccents: true },
        { order: 3, prompt: "Complète : un ___arçon (garçon). (g ou gu)", answer: "g", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Devant la lettre a, un seul g suffit : garçon.", strictAccents: true },
        { order: 4, prompt: "Complète : la ___erre (guerre). (g ou gu)", answer: "gu", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Devant e, sans le u, le g ferait un son doux. On écrit donc gu : guerre.", strictAccents: true },
        { order: 5, prompt: "Complète : un ___oûter (goûter). (g ou gu)", answer: "g", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Devant o, on écrit simplement g : goûter.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. Le ___ide (guide) mange un ___âteau (gâteau).", answer: "gu g", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "Guide s'écrit avec gu devant i, et gâteau s'écrit avec un seul g devant a.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "La table de multiplication de 5",
      xpReward: 24,
      story: {
        hook: "Imagine que tu comptes des pièces de monnaie qui valent chacune 5 centimes.",
        concreteExample: "Tu as 4 pièces de 5 centimes. Combien d'argent as-tu en tout ?",
        reveal: "4 fois 5, ça fait 20. Multiplier par 5, c'est facile : les résultats se terminent toujours par 0 ou par 5 ! Bravo !",
        bridgeToConcept: "La table de 5 : 1x5=5, 2x5=10, 3x5=15, 4x5=20, 5x5=25...",
        illustrationEmoji: "🪙"
      },
      examples: [
        {
          title: "La table de 5",
          steps: [
            { text: "5 x 3 : c'est 5 + 5 + 5 = 15.", illustrationEmoji: "➕" },
            { text: "5 x 6 : on continue, ça fait 30.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour la table de 5",
          steps: [
            { text: "Si le nombre est pair, le résultat se termine par 0.", illustrationEmoji: "🔍" },
            { text: "Si le nombre est impair, le résultat se termine par 5.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 5 x 2", answer: "10", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "5 x 2 = 10." },
        { order: 2, prompt: "Calcule : 5 x 4", answer: "20", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "5 x 4 = 20." },
        { order: 3, prompt: "Calcule : 5 x 5", answer: "25", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "5 x 5 = 25." },
        { order: 4, prompt: "Calcule : 5 x 7", answer: "35", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "5 x 7 = 35." },
        { order: 5, prompt: "Calcule : 5 x 8", answer: "40", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "5 x 8 = 40." },
        { order: 6, prompt: "Défi : calcule 5 x 9", answer: "45", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "5 x 9 = 45." }
      ]
    }
  ]
};
