import { DayCurriculum } from "@/models/types";

export const day12: DayCurriculum = {
  dayNumber: 12,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "L'aire d'un triangle",
      xpReward: 24,
      story: {
        hook: "Après le rectangle, découvrons comment calculer l'aire d'un triangle.",
        concreteExample: "Un triangle a une base de 8 cm et une hauteur de 5 cm. Quelle est son aire ?",
        reveal: "L'aire d'un triangle est toujours égale à (base x hauteur) / 2. Ici, (8 x 5) / 2 = 40 / 2 = 20. L'aire du triangle est donc 20 cm². Bravo, tu as calculé l'aire d'un triangle !",
        bridgeToConcept: "L'aire d'un triangle se calcule avec la formule (base x hauteur) / 2, où la hauteur est perpendiculaire à la base.",
        illustrationEmoji: "🔺"
      },
      examples: [
        {
          title: "Exemple 1 : base 6 cm, hauteur 4 cm",
          steps: [
            { text: "(6 x 4) / 2 = 24 / 2.", illustrationEmoji: "✖️" },
            { text: "L'aire est de 12 cm².", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : base 10 cm, hauteur 3 cm",
          steps: [
            { text: "(10 x 3) / 2 = 30 / 2.", illustrationEmoji: "✖️" },
            { text: "L'aire est de 15 cm².", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule l'aire d'un triangle de base 8 cm et de hauteur 3 cm.", answer: "12", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "(8 x 3) / 2 = 24 / 2 = 12 cm²." },
        { order: 2, prompt: "Calcule l'aire d'un triangle de base 10 cm et de hauteur 4 cm.", answer: "20", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "(10 x 4) / 2 = 40 / 2 = 20 cm²." },
        { order: 3, prompt: "Calcule l'aire d'un triangle de base 6 cm et de hauteur 5 cm.", answer: "15", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "(6 x 5) / 2 = 30 / 2 = 15 cm²." },
        { order: 4, prompt: "Calcule l'aire d'un triangle de base 14 cm et de hauteur 2 cm.", answer: "14", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "(14 x 2) / 2 = 28 / 2 = 14 cm²." },
        { order: 5, prompt: "Calcule l'aire d'un triangle de base 9 cm et de hauteur 6 cm.", answer: "27", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "(9 x 6) / 2 = 54 / 2 = 27 cm²." },
        { order: 6, prompt: "Défi : un triangle a une aire de 18 cm² et une hauteur de 4 cm. Quelle est sa base ?", answer: "9", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "L'aire vaut (base x 4) / 2 = 18, donc base x 4 = 36, donc la base vaut 36 / 4 = 9 cm." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "L'impératif présent",
      xpReward: 24,
      story: {
        hook: "Quand on donne un ordre ou un conseil, on utilise un temps spécial : l'impératif présent.",
        concreteExample: "Mange tes légumes ! Finissons nos devoirs. Partez maintenant !",
        reveal: "L'impératif n'a que trois personnes : tu, nous et vous, et il s'utilise sans pronom sujet devant le verbe. Pour les verbes en -er, la deuxième personne du singulier perd son s : tu manges devient mange. Bravo, tu as découvert l'impératif présent !",
        bridgeToConcept: "L'impératif présent se conjugue à trois personnes seulement : tu, nous, vous, sans pronom sujet devant le verbe. Les verbes en -er perdent leur s à la deuxième personne du singulier.",
        illustrationEmoji: "📢"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Range ta chambre.", illustrationEmoji: "🧹" },
            { text: "Finissons ce jeu ensemble.", illustrationEmoji: "🎲" },
            { text: "Venez avec nous !", illustrationEmoji: "🙋" }
          ]
        },
        {
          title: "Attention à l'erreur fréquente",
          steps: [
            { text: "Beaucoup d'élèves écrivent « manges » avec un s à l'impératif d'un verbe en -er. C'est une erreur !", illustrationEmoji: "❌" },
            { text: "À l'impératif, les verbes en -er perdent leur s à la deuxième personne du singulier : mange, et non manges.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper, et le résumé",
          steps: [
            { text: "Astuce : pense qu'à l'impératif, il n'y a jamais de pronom sujet devant le verbe.", illustrationEmoji: "🧠" },
            { text: "Résumé : l'impératif présent existe à trois personnes, tu, nous et vous, et les verbes en -er perdent leur s au singulier.", illustrationEmoji: "📝" }
          ]
        }
      ],
      questions: [
        {
          order: 1,
          type: "input",
          prompt: "Mets à l'impératif (2e personne du singulier) : ____ (manger) tes légumes !",
          answer: "mange",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "À l'impératif, les verbes en -er perdent leur s au singulier : mange.",
          strictAccents: true
        },
        {
          order: 2,
          type: "input",
          prompt: "Mets à l'impératif (1re personne du pluriel) : ____ (finir) ce travail.",
          answer: "finissons",
          kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.",
          explanationWhenWrong: "À l'impératif, avec nous, le verbe finir se conjugue finissons.",
          strictAccents: true
        },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse à l'impératif (2e personne du pluriel) : ____ (venir) avec nous !",
          options: ["venez", "venir", "venu"],
          answer: "venez",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "À l'impératif, avec vous, le verbe venir se conjugue venez.",
          strictAccents: true
        },
        {
          order: 4,
          type: "input",
          prompt: "Mets à l'impératif (2e personne du singulier) : ____ (chanter) plus fort !",
          answer: "chante",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "À l'impératif, les verbes en -er perdent leur s au singulier : chante.",
          strictAccents: true
        },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse à l'impératif (1re personne du pluriel) : ____ (aller) à la piscine !",
          options: ["allons", "allez", "va"],
          answer: "allons",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "À l'impératif, avec nous, le verbe aller se conjugue allons.",
          strictAccents: true
        },
        {
          order: 6,
          type: "match",
          prompt: "Défi : associe chaque forme de l'impératif à la personne qui convient.",
          answer: "tu (aller) = Va ; nous (sortir) = Sortons ; vous (prendre) = Prenez",
          matchPairs: [
            { left: "tu (aller)", right: "Va" },
            { left: "nous (sortir)", right: "Sortons" },
            { left: "vous (prendre)", right: "Prenez" }
          ],
          kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.",
          explanationWhenWrong: "Va s'utilise avec tu, Sortons avec nous, et Prenez avec vous : chaque personne de l'impératif a sa propre terminaison.",
          strictAccents: true
        }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "La phrase simple et la phrase complexe",
      xpReward: 24,
      story: {
        hook: "Une phrase peut contenir un seul verbe conjugué, ou plusieurs, reliés entre eux.",
        concreteExample: "Le chat dort. / Le chat dort pendant que les enfants jouent.",
        reveal: "La première phrase n'a qu'un seul verbe conjugué (dort) : c'est une phrase simple. La deuxième en a deux (dort, jouent), reliés par pendant que : c'est une phrase complexe, avec deux propositions. Bravo, tu as distingué les deux types de phrases !",
        bridgeToConcept: "Une phrase simple contient un seul verbe conjugué. Une phrase complexe contient plusieurs verbes conjugués, donc plusieurs propositions, souvent reliées par un mot comme et, quand, parce que ou pendant que.",
        illustrationEmoji: "🧩"
      },
      examples: [
        {
          title: "Exemple 1 : Léa chante.",
          steps: [
            { text: "Il n'y a qu'un seul verbe conjugué : chante.", illustrationEmoji: "🎤" },
            { text: "C'est une phrase simple.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : Léa chante pendant que son frère dessine.",
          steps: [
            { text: "Il y a deux verbes conjugués : chante et dessine.", illustrationEmoji: "🎨" },
            { text: "C'est une phrase complexe, avec deux propositions.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Le vent souffle fort. Est-ce une phrase simple ou complexe ?", answer: "simple", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Il n'y a qu'un seul verbe conjugué (souffle) : c'est une phrase simple." },
        { order: 2, prompt: "Il pleut parce que les nuages sont gris. Est-ce une phrase simple ou complexe ?", answer: "complexe", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Il y a deux verbes conjugués (pleut, sont) : c'est une phrase complexe." },
        { order: 3, prompt: "Combien de verbes conjugués dans : Quand la cloche sonne, les élèves sortent ?", answer: "2", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Il y a deux verbes conjugués : sonne et sortent." },
        { order: 4, prompt: "Les enfants jouent dans la cour. Est-ce une phrase simple ou complexe ?", answer: "simple", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Il n'y a qu'un seul verbe conjugué (jouent) : c'est une phrase simple." },
        { order: 5, prompt: "Elle mange une pomme et elle boit de l'eau. Est-ce une phrase simple ou complexe ?", answer: "complexe", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Il y a deux verbes conjugués (mange, boit) reliés par et : c'est une phrase complexe." },
        { order: 6, prompt: "Défi : combien de propositions (verbes conjugués) dans : Pendant que je lisais, mon frère dessinait et ma sœur chantait ?", answer: "3", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Il y a trois verbes conjugués : lisais, dessinait et chantait, donc trois propositions." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "sans, s'en ou sens/sent : le test du remplacement",
      xpReward: 24,
      story: {
        hook: "Encore trois mots qui se prononcent pareil : sans, s'en, et sens ou sent.",
        concreteExample: "Il part ___ dire au revoir. / Il ___ va sans se retourner. / Je ___ ma glace fondre.",
        reveal: "sans est une préposition qui exprime un manque, le contraire de avec ; s'en est formé de se et en, devant un verbe pronominal comme s'en aller ; sens et sent viennent du verbe sentir (je sens, il sent). Bravo, tu as testé chaque mot !",
        bridgeToConcept: "sans est le contraire de avec ; s'en aller se transforme en il s'en allait (le pronom se + en) ; sens et sent viennent du verbe sentir (je sens, il sent).",
        illustrationEmoji: "🌬️"
      },
      examples: [
        {
          title: "Exemple 1 : Il sort ___ manteau.",
          steps: [
            { text: "On teste avec (contraire) : il sort avec un manteau, donc sans manteau ici signifie le contraire.", illustrationEmoji: "🧥" },
            { text: "Donc on écrit sans.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : Elle ___ va tout de suite.",
          steps: [
            { text: "On peut dire elle s'en allait, avec le pronom se et en.", illustrationEmoji: "🚶" },
            { text: "Donc on écrit s'en.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Il mange ___ faire de bruit. (sans, s'en, sens/sent)", answer: "sans", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "sans est le contraire de avec : il mange sans faire de bruit.", strictAccents: true },
        { order: 2, prompt: "Complète : Le chien ___ va en courant. (sans, s'en, sens/sent)", answer: "s'en", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "On peut dire le chien s'en allait en courant : c'est s'en, avec le pronom se et en.", strictAccents: true },
        { order: 3, prompt: "Complète : Je ___ que quelque chose ne va pas. (sans, s'en, sens/sent)", answer: "sens", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "sens vient du verbe sentir, à la première personne du singulier : je sens.", strictAccents: true },
        { order: 4, prompt: "Complète : Elle ___ le parfum des fleurs. (sans, s'en, sens/sent)", answer: "sent", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "sent vient du verbe sentir, à la troisième personne du singulier : elle sent.", strictAccents: true },
        { order: 5, prompt: "Complète : Il part ___ un mot. (sans, s'en, sens/sent)", answer: "sans", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "sans est le contraire de avec : il part sans un mot.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. Il ___ va ___ dire un mot.", answer: "s'en sans", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "il s'en allait (le pronom se et en), puis sans dire un mot (le contraire de avec dire un mot).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Multiplier par 5, 25 et 50 grâce à des astuces",
      xpReward: 24,
      story: {
        hook: "Multiplier par 5, 25 ou 50 peut se faire très vite grâce à un lien avec 10 et 100.",
        concreteExample: "36 x 5, comment le calculer rapidement ?",
        reveal: "Multiplier par 5, c'est multiplier par 10, puis diviser par 2 : 36 x 10 = 360, puis 360 / 2 = 180. Bravo, tu as calculé rapidement !",
        bridgeToConcept: "Multiplier par 5 = multiplier par 10 puis diviser par 2. Multiplier par 25 = multiplier par 100 puis diviser par 4. Multiplier par 50 = multiplier par 100 puis diviser par 2.",
        illustrationEmoji: "✖️"
      },
      examples: [
        {
          title: "Exemple 1 : 24 x 5",
          steps: [
            { text: "24 x 10 = 240.", illustrationEmoji: "🔟" },
            { text: "240 / 2 = 120.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : 12 x 25",
          steps: [
            { text: "12 x 100 = 1 200.", illustrationEmoji: "💯" },
            { text: "1 200 / 4 = 300.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 18 x 5", answer: "90", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "18 x 10 = 180, puis 180 / 2 = 90." },
        { order: 2, prompt: "Calcule : 8 x 25", answer: "200", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "8 x 100 = 800, puis 800 / 4 = 200." },
        { order: 3, prompt: "Calcule : 14 x 50", answer: "700", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "14 x 100 = 1 400, puis 1 400 / 2 = 700." },
        { order: 4, prompt: "Calcule : 22 x 5", answer: "110", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "22 x 10 = 220, puis 220 / 2 = 110." },
        { order: 5, prompt: "Calcule : 16 x 25", answer: "400", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "16 x 100 = 1 600, puis 1 600 / 4 = 400." },
        { order: 6, prompt: "Défi : calcule 30 x 50, puis divise le résultat par 5.", answer: "300", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "30 x 50 : 30 x 100 = 3 000, puis 3 000 / 2 = 1 500. Ensuite, 1 500 / 5 = 300." }
      ]
    }
  ]
};
