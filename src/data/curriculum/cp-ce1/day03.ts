import { DayCurriculum } from "@/models/types";

export const day03: DayCurriculum = {
  dayNumber: 3,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Les doubles",
      xpReward: 24,
      story: {
        hook: "Imagine que tu as le même nombre de bonbons dans chaque main.",
        concreteExample: "Tu as 3 bonbons dans une main, et 3 bonbons dans l'autre main. Combien en as-tu en tout ?",
        reveal: "3 et 3, ça fait 6. Comme c'est le même nombre des deux côtés, on appelle ça un double. Bravo, tu as trouvé le double de 3 !",
        bridgeToConcept: "Un double, c'est additionner deux fois le même nombre : 3 + 3, 4 + 4, 5 + 5...",
        illustrationEmoji: "🙌"
      },
      examples: [
        {
          title: "Des doubles faciles",
          steps: [
            { text: "Le double de 2, c'est 2 + 2 = 4.", illustrationEmoji: "✌️" },
            { text: "Le double de 4, c'est 4 + 4 = 8.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour retenir les doubles",
          steps: [
            { text: "Imagine un miroir : ce que tu as d'un côté, tu l'as aussi de l'autre.", illustrationEmoji: "🪞" },
            { text: "Le double de 5, c'est 5 + 5 = 10, comme tes deux mains !", illustrationEmoji: "🙌" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule le double de 2 : 2 + 2", answer: "4", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "2 + 2 = 4." },
        { order: 2, prompt: "Calcule le double de 3 : 3 + 3", answer: "6", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "3 + 3 = 6." },
        { order: 3, prompt: "Calcule le double de 5 : 5 + 5", answer: "10", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "5 + 5 = 10." },
        { order: 4, prompt: "Calcule le double de 6 : 6 + 6", answer: "12", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "6 + 6 = 12." },
        { order: 5, prompt: "Calcule le double de 8 : 8 + 8", answer: "16", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "8 + 8 = 16." },
        { order: 6, prompt: "Défi : calcule le double de 9 : 9 + 9", answer: "18", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "9 + 9 = 18." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Les verbes en -er au présent",
      xpReward: 24,
      story: {
        hook: "Imagine une petite chanson qui change juste un peu à chaque fois.",
        concreteExample: "Écoute : je joue, tu joues, il joue. Tu entends comme ça se ressemble ?",
        reveal: "À quoi sert le présent ? À dire ce qui se passe maintenant. Comment le reconnaître ? Avec je, on entend e à la fin, avec tu, on entend es, avec il, on entend e aussi.",
        bridgeToConcept: "Au présent : je joue, tu joues, il joue, elle joue.",
        illustrationEmoji: "🎵"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Je chante une chanson.", illustrationEmoji: "🎤" },
            { text: "Tu joues dans le jardin.", illustrationEmoji: "⚽" },
            { text: "Il regarde un dessin animé.", illustrationEmoji: "📺" }
          ]
        },
        {
          title: "Attention à l'erreur fréquente",
          steps: [
            { text: "Beaucoup d'enfants écrivent je joues avec un s. C'est une erreur !", illustrationEmoji: "❌" },
            { text: "Avec je, il ne faut jamais mettre de s : on écrit je joue.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je ____ (jouer) dans le jardin.", answer: "joue", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec je, on dit joue : je joue." },
        { order: 2, prompt: "Complète : Tu ____ (chanter) une belle chanson.", answer: "chantes", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Avec tu, on ajoute un s : tu chantes." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Il ____ (regarder) un dessin animé.",
          options: ["regarde", "regardes", "regardons"],
          answer: "regarde",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Avec il, on dit regarde : il regarde."
        },
        { order: 4, prompt: "Complète : Elle ____ (parler) doucement.", answer: "parle", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Avec elle, on dit parle : elle parle." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Tu ____ (danser) avec ta soeur.",
          options: ["danse", "danses", "dansons"],
          answer: "danses",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Avec tu, on ajoute un s : tu danses."
        },
        { order: 6, prompt: "Défi : complète les deux mots. Je ____ (aimer) quand tu ____ (chanter).", answer: "aime chantes", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Je aime (sans s) et tu chantes (avec s)." }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Un ou une : masculin et féminin",
      xpReward: 24,
      story: {
        hook: "Comme hier avec le et la, il existe aussi un et une.",
        concreteExample: "Regarde : un chat, une table. Comment sais-tu lequel choisir ?",
        reveal: "Chat, c'est masculin, on dit un chat. Table, c'est féminin, on dit une table. Bravo, tu as trouvé le bon mot !",
        bridgeToConcept: "Devant un nom masculin, on met un. Devant un nom féminin, on met une.",
        illustrationEmoji: "🧺"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Un stylo, un cahier, un vélo : ce sont des mots masculins.", illustrationEmoji: "🔵" },
            { text: "Une gomme, une trousse, une école : ce sont des mots féminins.", illustrationEmoji: "🌸" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Essaie de dire le mot avec un puis avec une.", illustrationEmoji: "🔊" },
            { text: "Celui qui sonne bien à l'oreille, c'est le bon !", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : ___ stylo. (un ou une)", answer: "un", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Stylo est masculin, donc on dit un stylo." },
        { order: 2, prompt: "Complète : ___ gomme. (un ou une)", answer: "une", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Gomme est féminin, donc on dit une gomme." },
        { order: 3, prompt: "Complète : ___ cahier. (un ou une)", answer: "un", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Cahier est masculin, donc on dit un cahier." },
        { order: 4, prompt: "Complète : ___ trousse. (un ou une)", answer: "une", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Trousse est féminin, donc on dit une trousse." },
        { order: 5, prompt: "Complète : ___ vélo. (un ou une)", answer: "un", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Vélo est masculin, donc on dit un vélo." },
        { order: 6, prompt: "Défi : complète les deux mots. J'ai ___ crayon et ___ règle.", answer: "un une", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Crayon est masculin (un crayon) et règle est féminin (une règle)." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Le son [k] : c, qu, k",
      xpReward: 24,
      story: {
        hook: "Imagine un son qui se cache derrière plusieurs déguisements différents.",
        concreteExample: "Écoute : cabane, quatre, kilo. Tu entends le même son [k] au début, mais il ne s'écrit pas pareil !",
        reveal: "À quoi ça sert de connaître ces déguisements ? À bien écrire le son [k]. Comment le reconnaître ? Devant a, o, u, ça s'écrit souvent c. Devant e et i, ça s'écrit souvent qu.",
        bridgeToConcept: "Le son [k] peut s'écrire c (cabane), qu (quatre) ou k (kilo).",
        illustrationEmoji: "🔤"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Une cabane, un cadeau : le son [k] s'écrit c devant a.", illustrationEmoji: "🏠" },
            { text: "Qui, quatre : le son [k] s'écrit qu devant i et a.", illustrationEmoji: "🔢" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Devant e et i, le son [k] s'écrit presque toujours qu.", illustrationEmoji: "🔍" },
            { text: "Devant a, o, u, le son [k] s'écrit souvent c.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : un ___ deau (cadeau). (c ou qu)", answer: "ca", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Devant a, le son [k] s'écrit c : cadeau." },
        { order: 2, prompt: "Complète : ___ atre (quatre). (c ou qu)", answer: "qu", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Devant a dans ce mot, le son [k] s'écrit qu : quatre." },
        { order: 3, prompt: "Complète : un ___ilo (kilo). (c, qu ou k)", answer: "k", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Kilo s'écrit avec un k." },
        { order: 4, prompt: "Complète : ___i est là ? (qui). (c ou qu)", answer: "qu", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Devant i, le son [k] s'écrit qu : qui." },
        { order: 5, prompt: "Complète : une ___abane (cabane). (c ou qu)", answer: "c", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Devant a, le son [k] s'écrit c : cabane." },
        { order: 6, prompt: "Défi : complète les deux mots. Le ___oq (coq) a ___atre (quatre) plumes.", answer: "c qu", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Coq (devant o, on écrit c) et quatre (devant a dans ce mot, on écrit qu)." }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Compter de 2 en 2",
      xpReward: 24,
      story: {
        hook: "Imagine que tu sautes toujours par-dessus un nombre, comme à la marelle.",
        concreteExample: "0, 2, 4, 6... Tu sautes toujours de 2 en 2. Quel nombre vient après 6 ?",
        reveal: "Après 6, en sautant de 2, on arrive à 8. Bravo, tu sais compter de 2 en 2 !",
        bridgeToConcept: "Compter de 2 en 2, c'est ajouter 2 à chaque fois : 0, 2, 4, 6, 8, 10...",
        illustrationEmoji: "🐸"
      },
      examples: [
        {
          title: "Sauter de 2 en 2",
          steps: [
            { text: "0, 2, 4, 6, 8, 10 : chaque nombre est 2 de plus que le précédent.", illustrationEmoji: "🐸" },
            { text: "Après 10 : 12, 14, 16...", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour compter de 2 en 2",
          steps: [
            { text: "Ce sont toujours des nombres pairs : 0, 2, 4, 6, 8...", illustrationEmoji: "🔢" },
            { text: "Ils se terminent toujours par 0, 2, 4, 6 ou 8.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Quel nombre vient après 4 en comptant de 2 en 2 ?", answer: "6", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Après 4, en ajoutant 2, on trouve 6." },
        { order: 2, prompt: "Quel nombre vient après 8 en comptant de 2 en 2 ?", answer: "10", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Après 8, en ajoutant 2, on trouve 10." },
        { order: 3, prompt: "Quel nombre vient après 12 en comptant de 2 en 2 ?", answer: "14", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Après 12, en ajoutant 2, on trouve 14." },
        { order: 4, prompt: "Quel nombre vient avant 10 en comptant de 2 en 2 ?", answer: "8", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Avant 10, en enlevant 2, on trouve 8." },
        { order: 5, prompt: "Quel nombre vient après 16 en comptant de 2 en 2 ?", answer: "18", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Après 16, en ajoutant 2, on trouve 18." },
        { order: 6, prompt: "Défi : quel nombre vient après 18 en comptant de 2 en 2 ?", answer: "20", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Après 18, en ajoutant 2, on trouve 20." }
      ]
    }
  ]
};
