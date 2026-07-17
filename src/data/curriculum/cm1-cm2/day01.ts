import { DayCurriculum } from "@/models/types";

export const day01: DayCurriculum = {
  dayNumber: 1,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "La multiplication posée avec retenue",
      xpReward: 22,
      story: {
        hook: "Imagine que tu dois calculer combien coûtent 27 paquets de bonbons à 4 euros chacun.",
        concreteExample: "27 x 4 : on multiplie d'abord les unités, 7 x 4 = 28, on pose 8 et on retient 2. Puis 2 x 4 = 8, plus la retenue 2, ça fait 10.",
        reveal: "Le résultat est 108. La multiplication posée fonctionne comme l'addition posée : on retient quand le résultat dépasse 9.",
        bridgeToConcept: "Poser une multiplication : on multiplie les unités puis les dizaines, en gérant les retenues.",
        illustrationEmoji: "🍬"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "34 x 6 : unités d'abord, 4 x 6 = 24, on pose 4 et on retient 2.", illustrationEmoji: "🔢" },
            { text: "3 x 6 = 18, plus la retenue 2, ça fait 20. Résultat : 204.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "52 x 3 : 2 x 3 = 6, on pose 6, pas de retenue.", illustrationEmoji: "🔍" },
            { text: "5 x 3 = 15, résultat final : 156.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 23 x 3", answer: "69", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "3x3=9, 2x3=6, résultat 69, sans retenue." },
        { order: 2, prompt: "Calcule : 16 x 4", answer: "64", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "6x4=24 (pose 4, retiens 2), 1x4=4+2=6, résultat 64." },
        { order: 3, prompt: "Calcule : 27 x 4", answer: "108", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "7x4=28 (pose 8, retiens 2), 2x4=8+2=10, résultat 108." },
        { order: 4, prompt: "Calcule : 34 x 6", answer: "204", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "4x6=24 (pose 4, retiens 2), 3x6=18+2=20, résultat 204." },
        { order: 5, prompt: "Calcule : 45 x 5", answer: "225", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "5x5=25 (pose 5, retiens 2), 4x5=20+2=22, résultat 225." },
        { order: 6, prompt: "Défi : calcule 58 x 7", answer: "406", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "8x7=56 (pose 6, retiens 5), 5x7=35+5=40, résultat 406." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le passé composé avec avoir",
      xpReward: 22,
      story: {
        hook: "Aujourd'hui, découvrons un temps composé de deux morceaux pour raconter ce qui s'est déjà passé.",
        concreteExample: "Écoute : hier, j'ai mangé une pomme. Ce temps a deux parties : ai (avoir) et mangé (participe passé).",
        reveal: "Le passé composé se forme avec avoir conjugué au présent, suivi du participe passé du verbe. Pour les verbes en -er, le participe passé se termine en -é.",
        bridgeToConcept: "Passé composé avec avoir : j'ai mangé, tu as mangé, il a mangé, nous avons mangé, vous avez mangé, ils ont mangé.",
        illustrationEmoji: "🍎"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Hier, nous avons joué au ballon toute l'après-midi.", illustrationEmoji: "⚽" },
            { text: "Ils ont regardé un film ce week-end.", illustrationEmoji: "🎬" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Conjugue avoir au présent, puis ajoute le participe passé.", illustrationEmoji: "🔍" },
            { text: "Pour les verbes en -er, le participe passé se termine toujours en -é.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Hier, j'____ (avoir) mangé une pomme.", answer: "ai", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec je, avoir au présent devient ai : j'ai mangé." },
        { order: 2, prompt: "Complète : Tu ____ (avoir) regardé la télévision hier soir.", answer: "as", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Avec tu, avoir au présent devient as : tu as regardé." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Elle ____ joué dans le jardin.",
          options: ["a", "as", "ont"],
          answer: "a",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Avec elle, avoir au présent devient a : elle a joué."
        },
        { order: 4, prompt: "Complète : Nous ____ (avoir) parlé de nos vacances.", answer: "avons", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Avec nous, avoir au présent devient avons : nous avons parlé." },
        { order: 5, prompt: "Complète : Vous ____ (avoir) rangé toute la maison.", answer: "avez", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Avec vous, avoir au présent devient avez : vous avez rangé." },
        { order: 6, prompt: "Défi : complète les deux mots. Ils ____ (avoir) chanté et nous ____ (avoir) dansé toute la soirée.", answer: "ont avons", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Ils ont chanté (ils) et nous avons dansé (nous)." }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "La nature des mots : nom, verbe, adjectif",
      xpReward: 22,
      story: {
        hook: "Imagine que chaque mot d'une phrase porte une étiquette qui dit son métier.",
        concreteExample: "Regarde : Le petit chat dort. Quel mot désigne un être ? Lequel décrit ? Lequel indique une action ?",
        reveal: "Chat est un nom (il désigne un être), petit est un adjectif (il décrit), dort est un verbe (il indique une action). Chaque mot a une nature précise.",
        bridgeToConcept: "Le nom désigne une personne, un animal ou une chose. L'adjectif décrit le nom. Le verbe indique une action ou un état.",
        illustrationEmoji: "🏷️"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Une jolie fleur pousse : fleur est un nom, jolie un adjectif, pousse un verbe.", illustrationEmoji: "🌸" },
            { text: "Le grand garçon court vite : garçon est un nom, grand un adjectif, court un verbe.", illustrationEmoji: "🏃" }
          ]
        },
        {
          title: "L'astuce pour reconnaître la nature d'un mot",
          steps: [
            { text: "Peut-on mettre un/une/le/la devant ? Alors c'est un nom.", illustrationEmoji: "🔍" },
            { text: "Le mot décrit le nom ? C'est un adjectif. Le mot se conjugue ? C'est un verbe.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans le petit chat dort, quelle est la nature du mot chat ?", answer: "nom", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Chat désigne un être, c'est un nom." },
        { order: 2, prompt: "Dans le petit chat dort, quelle est la nature du mot petit ?", answer: "adjectif", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Petit décrit le chat, c'est un adjectif." },
        { order: 3, prompt: "Dans le petit chat dort, quelle est la nature du mot dort ?", answer: "verbe", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Dort indique une action, c'est un verbe." },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne réponse : dans une jolie fleur pousse, jolie est un...",
          options: ["adjectif", "nom", "verbe"],
          answer: "adjectif",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Jolie décrit la fleur, c'est un adjectif."
        },
        { order: 5, prompt: "Dans le grand garçon court vite, quelle est la nature du mot garçon ?", answer: "nom", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Garçon désigne un être, c'est un nom." },
        { order: 6, prompt: "Défi : dans la belle maison brille au soleil, cite le nom, l'adjectif et le verbe (dans cet ordre, séparés par un espace).", answer: "maison belle brille", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Maison est le nom, belle l'adjectif, brille le verbe." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "On ou on n' : la liaison devant une voyelle",
      xpReward: 22,
      story: {
        hook: "Imagine le petit mot on qui change parfois d'habit devant certains mots.",
        concreteExample: "Regarde : ___ arrive bientôt. Est-ce que c'est on ou on n' ?",
        reveal: "Devant un mot qui commence par une voyelle (a, e, i, o, u), on ajoute un n' pour faire la liaison : on n'arrive. Devant une consonne, on reste simple : on part.",
        bridgeToConcept: "On n' s'utilise devant un verbe qui commence par une voyelle, pour faciliter la prononciation.",
        illustrationEmoji: "🔊"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "On part demain matin : part commence par une consonne, on reste simple.", illustrationEmoji: "🚗" },
            { text: "On n'oublie jamais ses amis : oublie commence par une voyelle, on ajoute n'.", illustrationEmoji: "👫" }
          ]
        },
        {
          title: "L'astuce du test",
          steps: [
            { text: "Regarde la première lettre du mot juste après on.", illustrationEmoji: "🔍" },
            { text: "Voyelle → on n'. Consonne → on tout seul.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : ___ arrive bientôt. (on/on n')", answer: "on n'", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Arrive commence par une voyelle, donc on n'." },
        { order: 2, prompt: "Complète : ___ joue dans le jardin. (on/on n')", answer: "on", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Joue commence par une consonne, donc on tout seul." },
        { order: 3, prompt: "Complète : ___ oublie jamais ses amis. (on/on n')", answer: "on n'", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Oublie commence par une voyelle, donc on n'." },
        { order: 4, prompt: "Complète : ___ part demain matin. (on/on n')", answer: "on", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Part commence par une consonne, donc on tout seul." },
        { order: 5, prompt: "Complète : ___ invite toute la classe. (on/on n')", answer: "on n'", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Invite commence par une voyelle, donc on n'." },
        { order: 6, prompt: "Défi : complète les deux mots. ___ (on) range la salle et ___ (on n') attend plus longtemps.", answer: "on on n'", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "On range (consonne) et on n'attend (voyelle)." }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "La table de multiplication de 6",
      xpReward: 22,
      story: {
        hook: "Imagine que tu comptes des œufs rangés par boîtes de 6.",
        concreteExample: "Il y a 4 boîtes de 6 œufs. Combien d'œufs en tout ?",
        reveal: "4 fois 6, ça fait 24. Bravo, tu as trouvé le nombre total d'œufs !",
        bridgeToConcept: "La table de 6 : 1x6=6, 2x6=12, 3x6=18, 4x6=24, 5x6=30...",
        illustrationEmoji: "🥚"
      },
      examples: [
        {
          title: "La table de 6",
          steps: [
            { text: "6 x 3 : c'est le double de 3 x 3 (9), donc 18.", illustrationEmoji: "🔍" },
            { text: "6 x 5 : c'est le double de 5 x 3 (15), donc 30.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour la table de 6",
          steps: [
            { text: "Multiplier par 6, c'est multiplier par 5 puis ajouter le nombre une fois.", illustrationEmoji: "🔍" },
            { text: "6 x 7 : 5 x 7 = 35, plus 7, ça fait 42.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 6 x 3", answer: "18", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "6 x 3 = 18." },
        { order: 2, prompt: "Calcule : 6 x 5", answer: "30", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "6 x 5 = 30." },
        { order: 3, prompt: "Calcule : 6 x 6", answer: "36", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "6 x 6 = 36." },
        { order: 4, prompt: "Calcule : 6 x 7", answer: "42", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "6 x 7 = 42." },
        { order: 5, prompt: "Calcule : 6 x 8", answer: "48", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "6 x 8 = 48." },
        { order: 6, prompt: "Défi : calcule 6 x 9", answer: "54", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "6 x 9 = 54." }
      ]
    }
  ]
};
