import { DayCurriculum } from "@/models/types";

export const day08: DayCurriculum = {
  dayNumber: 8,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Les nombres pairs et impairs",
      xpReward: 24,
      story: {
        hook: "Imagine que tu partages des bonbons entre deux amis, sans en casser aucun.",
        concreteExample: "Tu as 6 bonbons. Peux-tu les partager en 2 tas égaux ? Et avec 7 bonbons ?",
        reveal: "6 bonbons se partagent en 2 tas égaux de 3 : 6 est un nombre pair. Avec 7 bonbons, il en reste toujours un tout seul : 7 est un nombre impair.",
        bridgeToConcept: "Un nombre pair se partage en deux parts égales. Un nombre impair, non.",
        illustrationEmoji: "🍬"
      },
      examples: [
        {
          title: "Reconnaître un nombre pair",
          steps: [
            { text: "8 se termine par 8 : c'est un nombre pair.", illustrationEmoji: "🔢" },
            { text: "Les nombres pairs se terminent toujours par 0, 2, 4, 6 ou 8.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Reconnaître un nombre impair",
          steps: [
            { text: "9 se termine par 9 : c'est un nombre impair.", illustrationEmoji: "🔢" },
            { text: "Les nombres impairs se terminent toujours par 1, 3, 5, 7 ou 9.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Le nombre 4 est-il pair ou impair ?", answer: "pair", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "4 se termine par 4, c'est un nombre pair." },
        { order: 2, prompt: "Le nombre 7 est-il pair ou impair ?", answer: "impair", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "7 se termine par 7, c'est un nombre impair." },
        {
          order: 3,
          type: "mcq",
          prompt: "Le nombre 12 est-il pair ou impair ?",
          options: ["pair", "impair"],
          answer: "pair",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "12 se termine par 2, c'est un nombre pair."
        },
        { order: 4, prompt: "Le nombre 15 est-il pair ou impair ?", answer: "impair", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "15 se termine par 5, c'est un nombre impair." },
        {
          order: 5,
          type: "mcq",
          prompt: "Le nombre 20 est-il pair ou impair ?",
          options: ["pair", "impair"],
          answer: "pair",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "20 se termine par 0, c'est un nombre pair."
        },
        { order: 6, prompt: "Défi : parmi 13 et 18, lequel est un nombre pair ?", answer: "18", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "18 se termine par 8, c'est un nombre pair. 13 se termine par 3, c'est un nombre impair." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le verbe faire au présent",
      xpReward: 24,
      story: {
        hook: "Il existe un petit mot magique qui sert à dire ce que l'on fabrique ou ce que l'on réalise.",
        concreteExample: "Écoute : je fais un dessin. Tu fais un gâteau. Il fait ses devoirs.",
        reveal: "Ce mot magique, c'est le verbe faire. À quoi sert-il ? Il sert à dire ce que l'on fait. Comment le reconnaître ? Il change selon la personne : fais, fais, fait...",
        bridgeToConcept: "Au présent : je fais, tu fais, il fait, elle fait.",
        illustrationEmoji: "🎨"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Je fais un joli dessin.", illustrationEmoji: "🖍️" },
            { text: "Tu fais tes devoirs le soir.", illustrationEmoji: "📚" },
            { text: "Il fait un gâteau au chocolat.", illustrationEmoji: "🍫" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Avec je et tu, on écrit fais (avec un s).", illustrationEmoji: "🎵" },
            { text: "Avec il ou elle, on écrit fait (avec un t).", illustrationEmoji: "🎵" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je ____ (faire) un dessin.", answer: "fais", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec je, le verbe faire devient fais : je fais un dessin. Essaie de le lire à voix haute.", strictAccents: true },
        { order: 2, prompt: "Complète : Tu ____ (faire) tes devoirs.", answer: "fais", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Avec tu, le verbe faire devient fais : tu fais tes devoirs.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Il ____ (faire) un gâteau.",
          options: ["fais", "fait", "faisons"],
          answer: "fait",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec il ou elle, le verbe faire devient fait (avec un t) : il fait un gâteau.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Elle ____ (faire) du sport.", answer: "fait", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Avec elle, comme avec il, le verbe faire devient fait : elle fait du sport.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Je ____ (faire) un beau château de sable.",
          options: ["fais", "fait", "faisons"],
          answer: "fais",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec je, le verbe faire devient fais (avec un s) : je fais un château.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Tu ____ (faire) un dessin pendant qu'elle ____ (faire) un gâteau.", answer: "fais fait", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Tu fais (avec tu, un s) et elle fait (avec elle, un t). Relis la phrase entière pour bien la sentir.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "La phrase : majuscule et point",
      xpReward: 24,
      story: {
        hook: "Imagine une petite maison pour chaque idée que tu écris : elle a une porte d'entrée et une porte de sortie.",
        concreteExample: "Regarde : Le chat dort. Comment sais-tu où la phrase commence et où elle finit ?",
        reveal: "La phrase commence par une majuscule (la porte d'entrée) et finit par un point (la porte de sortie). À quoi ça sert ? À bien séparer les idées. Comment le reconnaître ? Cherche la lettre majuscule au début et le point à la fin.",
        bridgeToConcept: "Une phrase commence toujours par une majuscule et se termine par un point.",
        illustrationEmoji: "🚪"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Le chien joue dans le jardin. -> majuscule au début, point à la fin.", illustrationEmoji: "🐶" },
            { text: "Ma sœur lit un livre. -> majuscule au début, point à la fin.", illustrationEmoji: "📖" }
          ]
        },
        {
          title: "L'astuce pour bien écrire une phrase",
          steps: [
            { text: "Avant d'écrire, pense à la majuscule.", illustrationEmoji: "🔤" },
            { text: "À la fin de ton idée, n'oublie pas le point.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        {
          order: 1,
          type: "mcq",
          prompt: "Quelle phrase respecte bien les règles d'écriture ?",
          options: ["le chat dort.", "Le chat dort", "Le chat dort."],
          answer: "Le chat dort.",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Une phrase bien écrite commence par une majuscule et se termine par un point : Le chat dort."
        },
        { order: 2, prompt: "Par quelle sorte de lettre commence toujours une phrase ?", answer: "majuscule", acceptedAnswers: ["une majuscule", "la majuscule"], kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Une phrase commence toujours par une majuscule." },
        { order: 3, prompt: "Par quel signe se termine toujours une phrase ?", answer: "point", acceptedAnswers: ["un point", "le point"], kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Une phrase se termine toujours par un point." },
        {
          order: 4,
          type: "mcq",
          prompt: "Quelle phrase respecte bien les règles d'écriture ?",
          options: ["elle joue dans le jardin.", "Elle joue dans le jardin", "Elle joue dans le jardin."],
          answer: "Elle joue dans le jardin.",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Une phrase bien écrite commence par une majuscule et se termine par un point : Elle joue dans le jardin."
        },
        { order: 5, prompt: "Dans la phrase mal écrite le soleil brille, quelle lettre faut-il mettre en majuscule ?", answer: "l", acceptedAnswers: ["L", "le l"], kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Il faut mettre une majuscule au tout premier mot de la phrase : Le soleil brille." },
        { order: 6, prompt: "Défi : la phrase les enfants jouent est mal écrite. Cite les deux règles à corriger : la lettre à mettre en majuscule et le signe à ajouter à la fin.", answer: "l point", acceptedAnswers: ["L point", "la lettre l et le point", "l et point"], kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Il faut mettre une majuscule au l de les, et ajouter un point à la fin : Les enfants jouent." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Les accents : é, è, ê",
      xpReward: 24,
      story: {
        hook: "Imagine des petits chapeaux et des petites cannes qui se posent sur la lettre e pour changer sa musique.",
        concreteExample: "Écoute : un été, une forêt, un père. Tu entends que le e ne sonne pas pareil selon l'accent !",
        reveal: "À quoi servent ces accents ? Ils changent le son du e. Comment les reconnaître ? L'accent aigu é fait le son [é] comme dans été. L'accent grave è fait le son [è] comme dans père. L'accent circonflexe ê fait aussi le son [è], comme dans forêt.",
        bridgeToConcept: "Le e peut porter un accent aigu (é), un accent grave (è) ou un accent circonflexe (ê) pour changer son son.",
        illustrationEmoji: "🎩"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Un été, une école : l'accent aigu é fait le son [é].", illustrationEmoji: "☀️" },
            { text: "Une mère, un père : l'accent grave è fait le son [è].", illustrationEmoji: "👪" }
          ]
        },
        {
          title: "Un dernier exemple",
          steps: [
            { text: "Une forêt, une fenêtre : l'accent circonflexe ê fait aussi le son [è].", illustrationEmoji: "🌳" },
            { text: "Sans accent, le e se prononce souvent différemment, comme dans le.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Écris le mot correctement : ete (avec l'accent qui manque, comme la saison chaude).", answer: "été", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "On écrit été avec un accent aigu sur les deux e : été. Essaie de le réécrire lentement.", strictAccents: true },
        { order: 2, prompt: "Écris le mot correctement : mere (avec l'accent qui manque).", answer: "mère", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "On écrit mère avec un accent grave : mère. Tu étais proche !", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Quel accent porte le mot forêt sur le e ?",
          options: ["accent aigu (é)", "accent grave (è)", "accent circonflexe (ê)"],
          answer: "accent circonflexe (ê)",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Forêt s'écrit avec un accent circonflexe sur le e : forêt.",
          strictAccents: true
        },
        { order: 4, prompt: "Écris le mot correctement : pere (avec l'accent qui manque).", answer: "père", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "On écrit père avec un accent grave : père. Relis-le à voix haute.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Quel accent porte le mot école sur le e ?",
          options: ["accent aigu (é)", "accent grave (è)", "accent circonflexe (ê)"],
          answer: "accent aigu (é)",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "École s'écrit avec un accent aigu sur le e : école.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : écris correctement les deux mots. fenetre et ecole (avec les accents qui manquent).", answer: "fenêtre école", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Fenêtre s'écrit avec un accent circonflexe et école avec un accent aigu. Relis bien les deux mots l'un après l'autre.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Les compléments à 10",
      xpReward: 24,
      story: {
        hook: "Imagine que tu dois toujours arriver pile à 10, comme pour remplir une boîte de 10 œufs.",
        concreteExample: "Ta boîte a déjà 7 œufs. Combien faut-il en ajouter pour arriver à 10 ?",
        reveal: "7 et combien font 10 ? Il faut ajouter 3. 7 + 3 = 10. Ce sont les compléments à 10 !",
        bridgeToConcept: "Trouver le complément à 10, c'est chercher combien il manque pour arriver à 10.",
        illustrationEmoji: "🥚"
      },
      examples: [
        {
          title: "Trouver le complément à 10",
          steps: [
            { text: "6 et combien font 10 ? 6 + 4 = 10, donc il manque 4.", illustrationEmoji: "🥚" },
            { text: "Le complément à 10 de 6, c'est 4.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Encore un exemple",
          steps: [
            { text: "8 et combien font 10 ? 8 + 2 = 10, donc il manque 2.", illustrationEmoji: "🥚" },
            { text: "Le complément à 10 de 8, c'est 2.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Combien faut-il ajouter à 7 pour faire 10 ?", answer: "3", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "7 + 3 = 10, donc il faut ajouter 3." },
        { order: 2, prompt: "Combien faut-il ajouter à 4 pour faire 10 ?", answer: "6", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "4 + 6 = 10, donc il faut ajouter 6." },
        { order: 3, prompt: "Combien faut-il ajouter à 9 pour faire 10 ?", answer: "1", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "9 + 1 = 10, donc il faut ajouter 1." },
        { order: 4, prompt: "Combien faut-il ajouter à 2 pour faire 10 ?", answer: "8", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "2 + 8 = 10, donc il faut ajouter 8." },
        { order: 5, prompt: "Combien faut-il ajouter à 5 pour faire 10 ?", answer: "5", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "5 + 5 = 10, donc il faut ajouter 5." },
        { order: 6, prompt: "Défi : trouve le complément à 10 de 6, puis ajoute-le au double de 2.", answer: "8", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Le complément à 10 de 6 est 4, et le double de 2 est 4. 4 + 4 = 8." }
      ]
    }
  ]
};
