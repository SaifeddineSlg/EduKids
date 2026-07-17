import { DayCurriculum } from "@/models/types";

export const day04: DayCurriculum = {
  dayNumber: 4,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Comprendre la multiplication",
      xpReward: 24,
      story: {
        hook: "Imagine que tu dois compter des boîtes d'oeufs, mais additionner serait trop long.",
        concreteExample: "Il y a 4 boîtes de 6 oeufs. Tu pourrais faire 6 + 6 + 6 + 6, mais y a-t-il plus rapide ?",
        reveal: "Oui ! 4 fois 6, ça s'écrit 4 x 6, et ça fait 24. La multiplication remplace une addition répétée. Bravo, tu as compris son sens !",
        bridgeToConcept: "Multiplier, c'est additionner plusieurs fois le même nombre, mais en plus rapide.",
        illustrationEmoji: "🥚"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "3 x 4 veut dire 3 fois le nombre 4.", illustrationEmoji: "🔢" },
            { text: "4 + 4 + 4 = 12.", illustrationEmoji: "➕" },
            { text: "Donc 3 x 4 = 12.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "5 x 3 veut dire 5 fois le nombre 3.", illustrationEmoji: "🔢" },
            { text: "3 + 3 + 3 + 3 + 3 = 15. Donc 5 x 3 = 15.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Transforme en multiplication : 4 + 4 + 4 = ?", answer: "12", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "4 + 4 + 4, c'est 3 x 4 = 12." },
        { order: 2, prompt: "Transforme en multiplication : 5 + 5 + 5 = ?", answer: "15", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "5 + 5 + 5, c'est 3 x 5 = 15." },
        { order: 3, prompt: "Calcule : 3 x 3", answer: "9", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "3 x 3, c'est 3 + 3 + 3 = 9." },
        { order: 4, prompt: "Calcule : 4 x 4", answer: "16", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "4 x 4, c'est 4 + 4 + 4 + 4 = 16." },
        { order: 5, prompt: "Calcule : 3 x 6", answer: "18", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "3 x 6, c'est 6 + 6 + 6 = 18." },
        { order: 6, prompt: "Défi : combien font 4 boîtes de 7 oeufs ?", answer: "28", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "4 x 7 = 28 oeufs en tout." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Aller et faire au présent, toutes les personnes",
      xpReward: 24,
      story: {
        hook: "Tu connais déjà je vais et je fais. Découvrons aujourd'hui toute la chanson d'aller et faire.",
        concreteExample: "Écoute : nous allons, vous allez, ils vont / nous faisons, vous faites, ils font.",
        reveal: "À quoi servent ces verbes ? Aller sert à dire où on se déplace, faire sert à dire quelle action on réalise. Comment les reconnaître ? Ce sont des verbes irréguliers très fréquents.",
        bridgeToConcept: "Aller : vais, vas, va, allons, allez, vont. Faire : fais, fais, fait, faisons, faites, font.",
        illustrationEmoji: "🏃"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Nous allons à la piscine le mercredi.", illustrationEmoji: "🏊" },
            { text: "Vous faites un beau dessin.", illustrationEmoji: "🎨" },
            { text: "Ils vont chez leurs cousins.", illustrationEmoji: "🚗" }
          ]
        },
        {
          title: "Attention à l'erreur fréquente",
          steps: [
            { text: "Beaucoup d'enfants écrivent vous faisez. C'est une erreur !", illustrationEmoji: "❌" },
            { text: "La bonne forme est vous faites, à mémoriser par cœur.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Nous ____ (aller) au parc.", answer: "allons", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec nous, aller devient allons." },
        { order: 2, prompt: "Complète : Vous ____ (faire) un beau dessin.", answer: "faites", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Avec vous, faire devient faites." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Ils ____ (aller) chez leurs cousins.",
          options: ["allons", "allez", "vont"],
          answer: "vont",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Avec ils, aller devient vont."
        },
        { order: 4, prompt: "Complète : Elles ____ (faire) leurs devoirs.", answer: "font", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Avec elles, faire devient font." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Nous ____ (faire) un gâteau.",
          options: ["faisons", "faites", "font"],
          answer: "faisons",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Avec nous, faire devient faisons."
        },
        { order: 6, prompt: "Défi : complète les deux mots. Vous ____ (aller) au marché et ils ____ (faire) les courses.", answer: "allez font", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Vous allez (aller) et ils font (faire)." }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Masculin ou féminin : l'accord de l'adjectif",
      xpReward: 24,
      story: {
        hook: "Imagine que l'adjectif doit toujours s'habiller pareil que le nom qu'il décrit.",
        concreteExample: "Regarde : un chat noir, une chatte noire. Qu'est-ce qui a changé à la fin de l'adjectif ?",
        reveal: "On a ajouté un e ! À quoi ça sert ? Ça montre que chatte est féminin. Comment le reconnaître ? La plupart des adjectifs ajoutent un e au féminin.",
        bridgeToConcept: "Au féminin, on ajoute souvent un e à l'adjectif : noir devient noire.",
        illustrationEmoji: "🐈"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Un garçon petit, une fille petite : on ajoute un e.", illustrationEmoji: "👧" },
            { text: "Un chien gentil, une chienne gentille : on ajoute un e (et parfois on double la consonne).", illustrationEmoji: "🐕" }
          ]
        },
        {
          title: "L'astuce pour accorder",
          steps: [
            { text: "Devant un nom féminin, essaie d'ajouter un e à l'adjectif.", illustrationEmoji: "🔍" },
            { text: "Écoute si ça sonne bien : une robe verte, pas une robe vert.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Accorde : un chat noir -> une chatte ____", answer: "noire", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Au féminin, on ajoute un e : noire." },
        { order: 2, prompt: "Accorde : un petit garçon -> une petite ____ (fille)", answer: "petite", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Au féminin, on ajoute un e : petite." },
        {
          order: 3,
          type: "mcq",
          prompt: "Accorde au féminin : un pull bleu -> une robe ____",
          options: ["bleu", "bleue"],
          answer: "bleue",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Au féminin, on ajoute un e : bleue."
        },
        { order: 4, prompt: "Accorde : un grand jardin -> une grande ____ (maison)", answer: "grande", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Au féminin, on ajoute un e : grande." },
        {
          order: 5,
          type: "mcq",
          prompt: "Accorde au féminin : un livre joli -> une histoire ____",
          options: ["joli", "jolie"],
          answer: "jolie",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Au féminin, on ajoute un e : jolie."
        },
        { order: 6, prompt: "Défi : accorde les deux adjectifs. Un renard rusé et malin -> une renarde ____ et ____", answer: "rusée maligne", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Rusée (ajout d'un e) et maligne (changement plus complexe, à retenir)." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Ou ou où : le test avec ou bien",
      xpReward: 24,
      story: {
        hook: "Il existe un petit test magique pour ne jamais confondre ou et où.",
        concreteExample: "Regarde : tu veux du jus ... de l'eau ? Est-ce que c'est ou ou où ?",
        reveal: "On essaie de remplacer par ou bien : tu veux du jus ou bien de l'eau ? Ça fonctionne ! Donc on écrit ou, sans accent, pour un choix. Bravo !",
        bridgeToConcept: "Si ou bien fonctionne, on écrit ou (un choix). Sinon, on écrit où (un lieu).",
        illustrationEmoji: "🪄"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Où habites-tu ? On essaie ou bien habites-tu, ça ne fonctionne pas. Donc où.", illustrationEmoji: "🏠" },
            { text: "Tu prends le vélo ou la trottinette : ou bien fonctionne. Donc ou.", illustrationEmoji: "🚲" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Remplace toujours par ou bien dans ta tête.", illustrationEmoji: "🔊" },
            { text: "Si ça marche, c'est ou. Sinon, c'est où (un lieu).", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Tu veux un chat ___ un chien ? (ou/où)", answer: "ou", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Un chat ou bien un chien fonctionne, donc ou." },
        { order: 2, prompt: "Complète : ___ vas-tu ce week-end ? (ou/où)", answer: "où", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Ou bien vas-tu ne fonctionne pas, donc où." },
        { order: 3, prompt: "Complète : Je ne sais pas ___ j'ai rangé mes clés. (ou/où)", answer: "où", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Ça parle d'un lieu, donc où." },
        { order: 4, prompt: "Complète : Tu préfères le rouge ___ le bleu ? (ou/où)", answer: "ou", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Le rouge ou bien le bleu fonctionne, donc ou." },
        { order: 5, prompt: "Complète : Dis-moi ___ se trouve la sortie. (ou/où)", answer: "où", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Ça parle d'un lieu, donc où." },
        { order: 6, prompt: "Défi : complète les deux mots. ___ veux-tu aller, à la mer ___ à la montagne ?", answer: "où ou", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Où veux-tu (lieu) et à la mer ou bien à la montagne (choix)." }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Compter de 5 en 5",
      xpReward: 24,
      story: {
        hook: "Imagine que tu ranges tes billes par paquets de 5.",
        concreteExample: "Tu as déjà 5 billes rangées, et tu en ranges 5 de plus. Combien en as-tu maintenant ?",
        reveal: "5 et encore 5, ça fait 10. Compter de 5 en 5 va vite : 0, 5, 10, 15, 20... Bravo !",
        bridgeToConcept: "Compter de 5 en 5, c'est ajouter 5 à chaque fois : 0, 5, 10, 15, 20...",
        illustrationEmoji: "🖐️"
      },
      examples: [
        {
          title: "Sauter de 5 en 5",
          steps: [
            { text: "0, 5, 10, 15, 20 : chaque nombre est 5 de plus que le précédent.", illustrationEmoji: "🖐️" },
            { text: "Après 20 : 25, 30...", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour compter de 5 en 5",
          steps: [
            { text: "Ce sont toujours des nombres qui se terminent par 0 ou par 5.", illustrationEmoji: "🔍" },
            { text: "0, 5, 10, 15, 20, 25, 30...", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Quel nombre vient après 10 en comptant de 5 en 5 ?", answer: "15", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Après 10, en ajoutant 5, on trouve 15." },
        { order: 2, prompt: "Quel nombre vient après 20 en comptant de 5 en 5 ?", answer: "25", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Après 20, en ajoutant 5, on trouve 25." },
        { order: 3, prompt: "Quel nombre vient après 30 en comptant de 5 en 5 ?", answer: "35", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Après 30, en ajoutant 5, on trouve 35." },
        { order: 4, prompt: "Quel nombre vient avant 25 en comptant de 5 en 5 ?", answer: "20", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Avant 25, en enlevant 5, on trouve 20." },
        { order: 5, prompt: "Quel nombre vient après 40 en comptant de 5 en 5 ?", answer: "45", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Après 40, en ajoutant 5, on trouve 45." },
        { order: 6, prompt: "Défi : quel nombre vient après 45 en comptant de 5 en 5 ?", answer: "50", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Après 45, en ajoutant 5, on trouve 50." }
      ]
    }
  ]
};
