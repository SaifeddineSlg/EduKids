import { DayCurriculum } from "@/models/types";

export const day11: DayCurriculum = {
  dayNumber: 11,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Comprendre la division",
      xpReward: 26,
      story: {
        hook: "Imagine que tu dois partager des billes en parts égales entre tes amis, sans qu'il en reste.",
        concreteExample: "Tu as 12 billes à partager entre 3 amis. Combien de billes chaque ami reçoit-il ?",
        reveal: "12 divisé par 3, ça fait 4. Chaque ami reçoit 4 billes. La division sert à partager un nombre en parts égales. Bravo, tu viens de faire une division !",
        bridgeToConcept: "Diviser, c'est partager un nombre en plusieurs parts égales.",
        illustrationEmoji: "➗"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "12 : 3 se lit douze divisé par trois.", illustrationEmoji: "🔢" },
            { text: "On cherche combien de fois 3 tient dans 12 : 3+3+3+3=12, donc 4 fois.", illustrationEmoji: "➕" },
            { text: "12 : 3 = 4.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "20 : 4 se lit vingt divisé par quatre.", illustrationEmoji: "🔢" },
            { text: "4+4+4+4+4=20, donc 5 fois. 20 : 4 = 5.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 10 : 2", answer: "5", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "10, c'est 2+2+2+2+2, donc 10 : 2 = 5." },
        { order: 2, prompt: "Calcule : 15 : 3", answer: "5", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "15, c'est 3+3+3+3+3, donc 15 : 3 = 5." },
        { order: 3, prompt: "Calcule : 20 : 4", answer: "5", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "20, c'est 4+4+4+4+4, donc 20 : 4 = 5." },
        { order: 4, prompt: "Calcule : 25 : 5", answer: "5", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "25, c'est 5+5+5+5+5, donc 25 : 5 = 5." },
        { order: 5, prompt: "Calcule : 18 : 3", answer: "6", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "18, c'est 3+3+3+3+3+3, donc 18 : 3 = 6." },
        { order: 6, prompt: "Défi : 8 amis se partagent 24 images en parts égales. Combien d'images chacun reçoit-il ?", answer: "3", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "24 : 8 = 3, car 3+3+3+3+3+3+3+3 = 24. Chaque ami reçoit 3 images." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le passé composé avec avoir, verbes en -er",
      xpReward: 26,
      story: {
        hook: "Imagine que tu racontes à ta maîtresse ce que tu as fait hier, une action déjà terminée.",
        concreteExample: "Écoute : j'ai joué, tu as joué, il a joué, nous avons joué, vous avez joué, ils ont joué.",
        reveal: "À quoi sert ce temps ? Le passé composé sert à raconter une action déjà terminée. Comment le former ? On utilise l'auxiliaire avoir au présent, suivi du participe passé du verbe : joué, avec un é comme pour les verbes en -er.",
        bridgeToConcept: "Passé composé = avoir au présent + participe passé (verbe en -er -> radical + é).",
        illustrationEmoji: "🗓️"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Hier, j'ai regardé un film avec ma famille.", illustrationEmoji: "📺" },
            { text: "Nous avons chanté toute la soirée.", illustrationEmoji: "🎤" }
          ]
        },
        {
          title: "Attention à l'erreur fréquente",
          steps: [
            { text: "Beaucoup d'enfants oublient l'auxiliaire avoir et écrivent j'ai joue. C'est une erreur !", illustrationEmoji: "❌" },
            { text: "Le participe passé des verbes en -er se termine toujours par é : j'ai joué.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : J'____ (jouer) au ballon hier.", answer: "ai joué", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Le passé composé se forme avec avoir : j'ai joué, avec un é à la fin du participe passé.", strictAccents: true },
        { order: 2, prompt: "Complète : Tu ____ (regarder) un beau film.", answer: "as regardé", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "Avec tu, on écrit tu as regardé : as vient d'avoir, et regardé se termine par é.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Nous ____ (chanter) une belle chanson.",
          options: ["avons chanté", "avons chantez", "avons chante"],
          answer: "avons chanté",
          kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.",
          explanationWhenWrong: "Avec nous, on écrit avons chanté : le participe passé des verbes en -er se termine toujours par é.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Vous ____ (manger) une pomme.", answer: "avez mangé", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Avec vous, on écrit avez mangé : avez vient d'avoir, et mangé se termine par é.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Ils ____ (danser) toute la soirée.",
          options: ["ont dansé", "ont danse", "ont dansez"],
          answer: "ont dansé",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.",
          explanationWhenWrong: "Avec ils, on écrit ont dansé : ont vient d'avoir, et dansé se termine par é.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Elle ____ (trouver) son livre et ils ____ (chercher) leurs clés.", answer: "a trouvé ont cherché", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "Elle a trouvé et ils ont cherché : deux passés composés avec avoir, chacun avec un participe passé en é.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Les déterminants",
      xpReward: 26,
      story: {
        hook: "Imagine un petit mot qui se place toujours juste devant le nom, comme un garde du corps.",
        concreteExample: "Regarde : chat, un chat, le chat, mon chat. Quel petit mot change à chaque fois devant chat ?",
        reveal: "À quoi sert ce petit mot ? Il annonce le nom et donne une information : un nombre, une précision ou un possesseur. Comment le reconnaître ? Il se place juste avant le nom : le, la, les, un, une, des, mon, ma, mes...",
        bridgeToConcept: "Le déterminant se place devant le nom et l'annonce : le, la, les, un, une, des, mon, ma, mes...",
        illustrationEmoji: "🔑"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Le chat dort : le est un déterminant, il annonce chat.", illustrationEmoji: "🐱" },
            { text: "Une fleur pousse : une est un déterminant, il annonce fleur.", illustrationEmoji: "🌸" }
          ]
        },
        {
          title: "L'astuce pour reconnaître un déterminant",
          steps: [
            { text: "Cherche le petit mot juste avant le nom.", illustrationEmoji: "🔍" },
            { text: "S'il annonce le nom (le, un, mon...), c'est un déterminant.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans la phrase Le chien court, quel mot est le déterminant ?", answer: "le", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Le se place juste avant chien : c'est le déterminant." },
        { order: 2, prompt: "Dans la phrase Une fleur pousse, quel mot est le déterminant ?", answer: "une", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Une se place juste avant fleur : c'est le déterminant." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis le déterminant dans mon petit chat noir.",
          options: ["mon", "petit", "noir"],
          answer: "mon",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Mon annonce le nom chat, c'est le déterminant (petit et noir sont des adjectifs)."
        },
        { order: 4, prompt: "Dans la phrase Les enfants jouent, quel mot est le déterminant ?", answer: "les", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Les se place juste avant enfants : c'est le déterminant." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le déterminant dans des beaux dessins.",
          options: ["des", "beaux", "dessins"],
          answer: "des",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Des annonce le nom dessins, c'est le déterminant."
        },
        { order: 6, prompt: "Défi : dans la phrase Ma soeur range ses jouets dans sa chambre, cite les trois déterminants.", answer: "ma ses sa", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Ma (devant soeur), ses (devant jouets) et sa (devant chambre) sont les trois déterminants de la phrase." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Ces ou ses : le test du singulier",
      xpReward: 26,
      story: {
        hook: "Il existe un petit test magique pour ne jamais confondre ces et ses.",
        concreteExample: "Regarde : ... enfants jouent dans le jardin. Est-ce que c'est ces ou ses ?",
        reveal: "On essaie de remplacer par cet au singulier : cet enfant joue dans le jardin. Ça fonctionne, on montre quelque chose, donc on écrit ces. Si on peut remplacer par son ou sa, c'est un possesseur, donc on écrit ses. Bravo, tu as réussi le test !",
        bridgeToConcept: "Si on peut dire ce, cet ou cette au singulier (on montre), on écrit ces. Si on peut dire son ou sa (un possesseur), on écrit ses.",
        illustrationEmoji: "🪄"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Ces fleurs sont belles : cette fleur est belle fonctionne, donc ces.", illustrationEmoji: "🌸" },
            { text: "Il prend ses affaires : il prend son affaire (au singulier) fonctionne, donc ses, un possesseur.", illustrationEmoji: "🎒" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Essaie de mettre la phrase au singulier avec ce, cet ou cette.", illustrationEmoji: "🔊" },
            { text: "Si ça montre quelque chose, c'est ces. Si c'est un possesseur, c'est ses.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : ___ enfants jouent dehors. (ces/ses)", answer: "ces", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Cet enfant joue dehors fonctionne, on montre quelque chose, donc on écrit ces.", strictAccents: true },
        { order: 2, prompt: "Complète : Léa range ___ crayons. (ces/ses)", answer: "ses", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "Léa range son crayon (au singulier, un possesseur) fonctionne, donc on écrit ses.", strictAccents: true },
        { order: 3, prompt: "Complète : ___ maisons sont grandes. (ces/ses)", answer: "ces", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Cette maison est grande fonctionne, on montre quelque chose, donc on écrit ces.", strictAccents: true },
        { order: 4, prompt: "Complète : Il appelle ___ amis. (ces/ses)", answer: "ses", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Il appelle son ami (au singulier, un possesseur) fonctionne, donc on écrit ses.", strictAccents: true },
        { order: 5, prompt: "Complète : Regarde ___ étoiles dans le ciel. (ces/ses)", answer: "ces", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Regarde cette étoile fonctionne, on montre quelque chose, donc on écrit ces.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. Théo prend ___ affaires et regarde ___ nuages dans le ciel.", answer: "ses ces", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "Théo prend son affaire fonctionne (possesseur), donc ses ; regarde ce nuage fonctionne (on montre), donc ces.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "La table de multiplication de 6",
      xpReward: 26,
      story: {
        hook: "Imagine que tu comptes des oeufs rangés par boîtes de 6.",
        concreteExample: "Tu as 3 boîtes de 6 oeufs. Combien d'oeufs as-tu en tout ?",
        reveal: "3 fois 6, ça fait 18. Bravo, tu viens d'utiliser la table de 6 !",
        bridgeToConcept: "La table de 6 : 1x6=6, 2x6=12, 3x6=18, 4x6=24, 5x6=30...",
        illustrationEmoji: "🥚"
      },
      examples: [
        {
          title: "La table de 6",
          steps: [
            { text: "6 x 3 : c'est 6 + 6 + 6 = 18.", illustrationEmoji: "➕" },
            { text: "6 x 4 : c'est le double de 3 x 4, donc 24.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour la table de 6",
          steps: [
            { text: "6, c'est le double de 3 : utilise la table de 3 puis double le résultat.", illustrationEmoji: "🙌" },
            { text: "6 x 7 : 3 x 7 = 21, donc le double est 42.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 6 x 2", answer: "12", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "6 x 2 = 12." },
        { order: 2, prompt: "Calcule : 6 x 3", answer: "18", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "6 x 3 = 18." },
        { order: 3, prompt: "Calcule : 6 x 5", answer: "30", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "6 x 5 = 30." },
        { order: 4, prompt: "Calcule : 6 x 6", answer: "36", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "6 x 6 = 36." },
        { order: 5, prompt: "Calcule : 6 x 8", answer: "48", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "6 x 8 = 48." },
        { order: 6, prompt: "Défi : calcule 6 x 9", answer: "54", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "6 x 9 = 54." }
      ]
    }
  ]
};
