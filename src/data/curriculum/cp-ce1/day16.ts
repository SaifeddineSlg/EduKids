import { DayCurriculum } from "@/models/types";

export const day16: DayCurriculum = {
  dayNumber: 16,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "La soustraction posée en colonnes",
      xpReward: 24,
      story: {
        hook: "Tu sais déjà additionner en colonnes. Aujourd'hui, tu vas apprendre à soustraire de la même façon.",
        concreteExample: "Pour calculer 38 - 15, on place les unités sous les unités et les dizaines sous les dizaines.",
        reveal: "8 unités moins 5 unités font 3 unités. 3 dizaines moins 1 dizaine font 2 dizaines. Le résultat est 23 !",
        bridgeToConcept: "Pour soustraire en colonnes, on enlève d'abord les unités, puis les dizaines.",
        illustrationEmoji: "📐"
      },
      examples: [
        {
          title: "Soustraire sans retenue",
          steps: [
            { text: "27 - 13 : unités 7 - 3 = 4, dizaines 2 - 1 = 1.", illustrationEmoji: "➖" },
            { text: "Le résultat est 14.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "49 - 26 : unités 9 - 6 = 3, dizaines 4 - 2 = 2.", illustrationEmoji: "➖" },
            { text: "Le résultat est 23.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule en colonnes : 28 - 15", answer: "13", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Unités : 8 - 5 = 3. Dizaines : 2 - 1 = 1. Le résultat est 13." },
        { order: 2, prompt: "Calcule en colonnes : 39 - 24", answer: "15", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Unités : 9 - 4 = 5. Dizaines : 3 - 2 = 1. Le résultat est 15." },
        { order: 3, prompt: "Calcule en colonnes : 47 - 23", answer: "24", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Unités : 7 - 3 = 4. Dizaines : 4 - 2 = 2. Le résultat est 24." },
        { order: 4, prompt: "Calcule en colonnes : 58 - 34", answer: "24", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Unités : 8 - 4 = 4. Dizaines : 5 - 3 = 2. Le résultat est 24." },
        { order: 5, prompt: "Calcule en colonnes : 69 - 45", answer: "24", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Unités : 9 - 5 = 4. Dizaines : 6 - 4 = 2. Le résultat est 24." },
        { order: 6, prompt: "Défi : calcule en colonnes 76 - 52", answer: "24", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Unités : 6 - 2 = 4. Dizaines : 7 - 5 = 2. Le résultat est 24." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le verbe venir au présent",
      xpReward: 24,
      story: {
        hook: "Il existe un petit mot magique qui sert à dire que l'on arrive quelque part.",
        concreteExample: "Écoute : je viens de l'école. Tu viens avec moi. Il vient à la fête.",
        reveal: "Ce mot magique, c'est le verbe venir. À quoi sert-il ? Il sert à dire que l'on arrive ou que l'on se déplace vers un endroit. Comment le reconnaître ? Il change selon la personne : viens, viens, vient...",
        bridgeToConcept: "Au présent : je viens, tu viens, il vient, elle vient.",
        illustrationEmoji: "🚶"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Je viens de la piscine.", illustrationEmoji: "🏊" },
            { text: "Tu viens jouer avec nous.", illustrationEmoji: "⚽" },
            { text: "Il vient à mon anniversaire.", illustrationEmoji: "🎂" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Avec je et tu, on écrit viens (avec un s).", illustrationEmoji: "🎵" },
            { text: "Avec il ou elle, on écrit vient (avec un t).", illustrationEmoji: "🎵" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je ____ de la piscine.", answer: "viens", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec je, le verbe venir devient viens : je viens de la piscine. Essaie de le lire à voix haute.", strictAccents: true },
        { order: 2, prompt: "Complète : Tu ____ jouer avec nous.", answer: "viens", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Avec tu, comme avec je, le verbe venir devient viens.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Il ____ à mon anniversaire.",
          options: ["viens", "vient", "venons"],
          answer: "vient",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec il ou elle, le verbe venir devient vient (avec un t) : il vient à la fête.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Elle ____ dîner chez nous.", answer: "vient", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Avec elle, comme avec il, le verbe venir devient vient.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Je ____ te voir demain.",
          options: ["viens", "vient", "venez"],
          answer: "viens",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec je, on écrit toujours viens (avec un s à la fin).",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Tu ____ avec moi et elle ____ aussi.", answer: "viens vient", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Tu viens (avec tu, on écrit viens) et elle vient (avec elle, on écrit vient). Relis la phrase entière à voix haute.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Le sujet du verbe",
      xpReward: 24,
      story: {
        hook: "Dans chaque phrase, quelqu'un ou quelque chose fait l'action du verbe.",
        concreteExample: "Regarde : Le chien aboie. Qui aboie ? C'est le chien.",
        reveal: "Le chien est le sujet du verbe aboie. À quoi sert le sujet ? Il indique qui fait l'action. Comment le trouver ? On pose la question qui est-ce qui... devant le verbe.",
        bridgeToConcept: "Le sujet du verbe répond à la question qui est-ce qui fait l'action ?",
        illustrationEmoji: "🔍"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "La maîtresse écrit au tableau. -> Qui écrit ? La maîtresse.", illustrationEmoji: "👩‍🏫" },
            { text: "Les enfants chantent. -> Qui chante ? Les enfants.", illustrationEmoji: "🎶" }
          ]
        },
        {
          title: "L'astuce pour le trouver",
          steps: [
            { text: "On pose la question qui est-ce qui devant le verbe.", illustrationEmoji: "❓" },
            { text: "La réponse à cette question est le sujet.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans le chat dort, quel est le sujet du verbe dort ?", answer: "le chat", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Qui dort ? Le chat. Le chat est donc le sujet du verbe dort." },
        { order: 2, prompt: "Dans les oiseaux volent, quel est le sujet du verbe volent ?", answer: "les oiseaux", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Qui vole ? Les oiseaux. Les oiseaux sont donc le sujet du verbe volent." },
        {
          order: 3,
          type: "mcq",
          prompt: "Dans Léo dessine un dragon, quel est le sujet ?",
          options: ["Léo", "dessine", "un dragon"],
          answer: "Léo",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Qui dessine ? Léo. Léo est donc le sujet du verbe dessine."
        },
        { order: 4, prompt: "Dans ma sœur range sa chambre, quel est le sujet ?", answer: "ma sœur", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Qui range sa chambre ? Ma sœur. Ma sœur est donc le sujet du verbe range." },
        {
          order: 5,
          type: "mcq",
          prompt: "Dans les enfants jouent dans le jardin, quel est le sujet ?",
          options: ["les enfants", "jouent", "le jardin"],
          answer: "les enfants",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Qui joue dans le jardin ? Les enfants. Les enfants sont donc le sujet du verbe jouent."
        },
        { order: 6, prompt: "Défi : dans le petit garçon mange une pomme, cite le sujet complet du verbe mange.", answer: "le petit garçon", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Qui mange une pomme ? Le petit garçon. Le sujet complet est donc le petit garçon." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Le son [ɔ̃] : on, om",
      xpReward: 24,
      story: {
        hook: "Il existe un son qui résonne dans le nez, comme quand on dit non.",
        concreteExample: "Écoute : un pont, un ballon, une ombre. Tu entends ce petit son qui chante dans le nez ?",
        reveal: "Ce son s'appelle [ɔ̃]. Comment s'écrit-il ? La plupart du temps avec on, mais devant les lettres m, b, p, il s'écrit om.",
        bridgeToConcept: "Le son [ɔ̃] s'écrit on, sauf devant m, b, p où il s'écrit om.",
        illustrationEmoji: "🎈"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Un ballon, un pont, un dragon (le son [ɔ̃] s'écrit on).", illustrationEmoji: "🎈" },
            { text: "Une ombre, un nombre, une bombe (devant b, on écrit om).", illustrationEmoji: "🌑" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Devant m, b, p, le son [ɔ̃] s'écrit toujours om.", illustrationEmoji: "🔍" },
            { text: "Dans tous les autres cas, il s'écrit on.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : un ball___ (ballon). (on ou om)", answer: "on", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Ballon s'écrit avec on, car la lettre suivante n'est pas m, b ou p.", strictAccents: true },
        { order: 2, prompt: "Complète : une ___bre (ombre). (on ou om)", answer: "om", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Devant la lettre b, le son [ɔ̃] s'écrit om : ombre.", strictAccents: true },
        { order: 3, prompt: "Complète : un n___bre (nombre). (on ou om)", answer: "om", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Devant la lettre b, le son [ɔ̃] s'écrit om : nombre.", strictAccents: true },
        { order: 4, prompt: "Complète : un p___t (pont). (on ou om)", answer: "on", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Pont s'écrit avec on, car la lettre suivante n'est pas m, b ou p.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne écriture du son [ɔ̃] dans le mot compter.",
          options: ["c-on-pter", "c-om-pter"],
          answer: "c-om-pter",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Devant la lettre p, le son [ɔ̃] s'écrit om : compter.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Un drag___ (dragon) vole au-dessus d'une ___bre (ombre).", answer: "on om", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Dragon s'écrit avec on (pas de m, b, p après), et ombre s'écrit avec om (devant la lettre b).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Ajouter 20 à un nombre",
      xpReward: 24,
      story: {
        hook: "Tu sais déjà ajouter 10 à un nombre. Aujourd'hui, tu vas apprendre à ajouter 20.",
        concreteExample: "Pour calculer 34 + 20, on ajoute simplement 2 dizaines au nombre.",
        reveal: "34, c'est 3 dizaines et 4 unités. En ajoutant 2 dizaines, on obtient 5 dizaines et 4 unités, soit 54 !",
        bridgeToConcept: "Pour ajouter 20 à un nombre, on ajoute 2 dizaines et les unités ne changent pas.",
        illustrationEmoji: "➕"
      },
      examples: [
        {
          title: "Ajouter 20 à un nombre",
          steps: [
            { text: "23 + 20 : on ajoute 2 dizaines à 23.", illustrationEmoji: "➕" },
            { text: "23 + 20 = 43.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Encore un exemple",
          steps: [
            { text: "45 + 20 : on ajoute 2 dizaines à 45.", illustrationEmoji: "➕" },
            { text: "45 + 20 = 65.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 12 + 20", answer: "32", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On ajoute 2 dizaines à 12 : 12 + 20 = 32." },
        { order: 2, prompt: "Calcule : 34 + 20", answer: "54", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "On ajoute 2 dizaines à 34 : 34 + 20 = 54." },
        { order: 3, prompt: "Calcule : 51 + 20", answer: "71", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On ajoute 2 dizaines à 51 : 51 + 20 = 71." },
        { order: 4, prompt: "Calcule : 27 + 20", answer: "47", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "On ajoute 2 dizaines à 27 : 27 + 20 = 47." },
        { order: 5, prompt: "Calcule : 63 + 20", answer: "83", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "On ajoute 2 dizaines à 63 : 63 + 20 = 83." },
        { order: 6, prompt: "Défi : calcule 45 + 20, puis ajoute encore 10.", answer: "75", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "45 + 20 = 65, puis 65 + 10 = 75." }
      ]
    }
  ]
};
