import { DayCurriculum } from "@/models/types";

export const day20: DayCurriculum = {
  dayNumber: 20,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Révision : fractions, grands nombres, conversions de longueur, aire du triangle",
      xpReward: 22,
      story: {
        hook: "Cette semaine, tu as encore beaucoup progressé en mathématiques. Faisons le tour ensemble !",
        concreteExample: "Tu sais maintenant additionner des fractions, lire de grands nombres, convertir des longueurs et calculer l'aire d'un triangle.",
        reveal: "Ces compétences te préparent très bien pour le collège.",
        bridgeToConcept: "Révisons : addition de fractions de même dénominateur, grands nombres jusqu'au milliard, conversions d'unités de longueur, aire du triangle.",
        illustrationEmoji: "🎓"
      },
      examples: [
        {
          title: "Rappel fractions et grands nombres",
          steps: [
            { text: "1/4 + 2/4 = 3/4.", illustrationEmoji: "🍕" },
            { text: "3 250 000 se lit trois millions deux cent cinquante mille.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Rappel conversions et aire du triangle",
          steps: [
            { text: "3 m = 300 cm.", illustrationEmoji: "📏" },
            { text: "Un triangle de base 6 cm et de hauteur 4 cm : aire = 12 cm².", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 2/6 + 3/6", answer: "5/6", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "2 + 3 = 5, le dénominateur reste 6 : 5/6." },
        { order: 2, prompt: "Comment se lit le nombre 1 500 000 000 ?", answer: "un milliard cinq cents millions", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "On découpe en tranches : 1 (milliard), 500 (millions) : un milliard cinq cents millions." },
        { order: 3, prompt: "Convertis : 250 cm en m", answer: "2,5", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "100 cm = 1 m, donc 250 cm = 2,5 m." },
        { order: 4, prompt: "Calcule l'aire d'un triangle de base 8 cm et de hauteur 5 cm.", answer: "20", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "(8 x 5) divisé par 2 = 40 divisé par 2 = 20 cm²." },
        { order: 5, prompt: "Convertis : 2 km en m", answer: "2000", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "1 km = 1000 m, donc 2 km = 2000 m." },
        { order: 6, prompt: "Défi : calcule 3/8 + 4/8, puis calcule l'aire d'un triangle de base 10 m et de hauteur 3 m. Réponds les deux résultats, dans l'ordre.", answer: "7/8 15", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "3/8 + 4/8 = 7/8, et (10 x 3) divisé par 2 = 15 m²." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Révision : futur antérieur, accord des pronominaux, subjonctif passé, verbes en -indre/-soudre",
      xpReward: 22,
      story: {
        hook: "Cette semaine, tu as découvert de nouveaux temps et modes très utiles. Résumons !",
        concreteExample: "Futur antérieur : j'aurai mangé. Pronominaux : elle s'est lavée. Subjonctif passé : que tu aies réussi. Présent en -indre : je peins.",
        reveal: "Chaque notion enrichit ta façon de raconter et de bien écrire.",
        bridgeToConcept: "Révisons : le futur antérieur, l'accord du participe passé des verbes pronominaux, le subjonctif passé, le présent des verbes en -indre et -soudre.",
        illustrationEmoji: "🕰️"
      },
      examples: [
        {
          title: "Rappel futur antérieur et pronominaux",
          steps: [
            { text: "Quand tu arriveras, j'aurai déjà mangé mon repas.", illustrationEmoji: "⏭️" },
            { text: "Elle s'est lavée avant de partir.", illustrationEmoji: "🚿" }
          ]
        },
        {
          title: "Rappel subjonctif passé et verbes en -indre",
          steps: [
            { text: "Je suis content que tu aies réussi ton examen.", illustrationEmoji: "🎉" },
            { text: "Je peins un joli tableau, nous peignons la maison.", illustrationEmoji: "🎨" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : quand tu arriveras, j'____ (manger) déjà mon repas.", answer: "aurai mangé", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Au futur antérieur avec je, manger donne aurai mangé.", strictAccents: true },
        { order: 2, prompt: "Complète : elle ____ (se laver) avant de partir.", answer: "s'est lavée", kindWhenWrong: "Pas grave, on regarde ça ensemble.", explanationWhenWrong: "Avec elle, le participe passé du verbe pronominal se laver s'accorde au féminin : s'est lavée.", strictAccents: true },
        { order: 3, prompt: "Complète : je suis content que tu ____ (avoir) réussi ton examen.", answer: "aies", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Avoir au subjonctif présent avec tu donne aies.", strictAccents: true },
        { order: 4, prompt: "Complète : Nous ____ (peindre) la maison en bleu.", answer: "peignons", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Au pluriel, peindre prend un gn ; avec nous, on écrit peignons.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : ils ____ (arriver) avant la nuit.",
          options: ["seront arrivés", "auront arrivé", "seront arrivé"],
          answer: "seront arrivés",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.",
          explanationWhenWrong: "Arriver se conjugue avec être ; avec ils, le participe passé s'accorde au masculin pluriel : seront arrivés.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux verbes. Ils ____ (craindre) l'hiver et nous sommes contents qu'ils ____ (avoir) préparé du bois.", answer: "craignent aient", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble.", explanationWhenWrong: "Craindre au présent avec ils donne craignent ; avoir au subjonctif passé avec ils donne aient.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Révision : complément du nom, degrés de l'adjectif, subordonnée conjonctive, complément d'agent",
      xpReward: 22,
      story: {
        hook: "Cette semaine, tu as analysé encore de nombreux compléments et constructions. Récapitulons !",
        concreteExample: "Le complément du nom, les degrés de l'adjectif, la proposition subordonnée conjonctive, le complément d'agent.",
        reveal: "Chaque notion t'aide à mieux comprendre et à mieux construire tes phrases.",
        bridgeToConcept: "Révisons : le complément du nom, le comparatif et le superlatif, la proposition subordonnée conjonctive, le complément d'agent.",
        illustrationEmoji: "🧩"
      },
      examples: [
        {
          title: "Rappel complément du nom et degrés de l'adjectif",
          steps: [
            { text: "Le vélo de mon frère est neuf : de mon frère est le complément du nom.", illustrationEmoji: "🚲" },
            { text: "Ce gâteau est le plus délicieux de tous : superlatif.", illustrationEmoji: "📏" }
          ]
        },
        {
          title: "Rappel subordonnée conjonctive et complément d'agent",
          steps: [
            { text: "Je pense que tu as raison : proposition subordonnée conjonctive.", illustrationEmoji: "💭" },
            { text: "Le colis est apporté par le facteur : par le facteur est le complément d'agent.", illustrationEmoji: "📦" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans le vélo de mon frère est neuf, quel est le complément du nom ?", answer: "de mon frère", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "De mon frère précise le nom vélo, introduit par la préposition de : c'est le complément du nom." },
        { order: 2, prompt: "Dans ce gâteau est le plus délicieux de tous, comment appelle-t-on cette construction ?", answer: "un superlatif", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Le plus... de désigne le degré le plus élevé : c'est un superlatif." },
        { order: 3, prompt: "Dans je pense que tu as raison, quelle est la proposition subordonnée conjonctive ?", answer: "que tu as raison", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Que tu as raison complète le verbe pense : c'est la proposition subordonnée conjonctive." },
        { order: 4, prompt: "Dans le colis est apporté par le facteur, quel est le complément d'agent ?", answer: "par le facteur", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Par le facteur indique qui accomplit l'action d'apporter : c'est le complément d'agent." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : au comparatif, bon devient...",
          options: ["meilleur", "plus bon", "le meilleur"],
          answer: "meilleur",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Bon a une forme irrégulière au comparatif de supériorité : meilleur."
        },
        { order: 6, prompt: "Défi : dans le livre de mon amie est le plus passionnant de tous et je pense qu'il a été écrit par un grand auteur, cite le complément du nom, puis le complément d'agent, dans l'ordre.", answer: "de mon amie par un grand auteur", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "De mon amie précise livre (complément du nom), par un grand auteur indique qui a écrit (complément d'agent)." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Révision : et/est, ni/n'y, c'est/s'est, près/prêt",
      xpReward: 22,
      story: {
        hook: "Cette semaine, tu as croisé encore beaucoup de mots jumeaux. Récapitulons les tests appris !",
        concreteExample: "Et/est, ni/n'y, c'est/s'est, près/prêt.",
        reveal: "Chaque paire a son test précis : était pour est, ne...pas y pour n'y, cela est pour c'est, contraire de loin pour près.",
        bridgeToConcept: "Utilise toujours le test appris pour choisir la bonne orthographe.",
        illustrationEmoji: "🧠"
      },
      examples: [
        {
          title: "Rappel et/est et ni/n'y",
          steps: [
            { text: "Le chat et le chien jouent ensemble ; elle est très gentille.", illustrationEmoji: "🔗" },
            { text: "Je ne veux ni pomme ni banane ; je n'y vais jamais.", illustrationEmoji: "🚫" }
          ]
        },
        {
          title: "Rappel c'est/s'est et près/prêt",
          steps: [
            { text: "C'est mon anniversaire ; elle s'est levée tôt.", illustrationEmoji: "🎂" },
            { text: "L'école est tout près ; je suis prêt à partir.", illustrationEmoji: "📍" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : le chat ___ le chien jouent ensemble. (et/est)", answer: "et", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "On peut dire et puis : c'est le mot de liaison et.", strictAccents: true },
        { order: 2, prompt: "Complète : je ___ vais jamais le dimanche. (ni/n'y)", answer: "n'y", kindWhenWrong: "Pas grave, on regarde ça ensemble.", explanationWhenWrong: "N'y est placé devant le verbe vais, remplaçable par ne vais pas là.", strictAccents: true },
        { order: 3, prompt: "Complète : ___ mon anniversaire aujourd'hui. (c'est/s'est)", answer: "c'est", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "On peut dire cela est mon anniversaire : c'est c'est.", strictAccents: true },
        { order: 4, prompt: "Complète : je suis ___ à partir maintenant. (près/prêt)", answer: "prêt", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Ça signifie préparé, au masculin : prêt, avec un accent circonflexe.", strictAccents: true },
        { order: 5, prompt: "Complète : il n'aime ___ le froid ___ la pluie. (ni/n'y)", answer: "ni ni", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Ni relie les deux éléments niés : ni le froid ni la pluie.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les quatre mots. ___ (c'est) une belle journée ___ (et) mon frère ___ (s'est) levé tôt car il est ___ (près) de partir en voyage.", answer: "c'est et s'est près", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble.", explanationWhenWrong: "C'est présente (cela est), et relie (et puis), s'est accompagne le verbe pronominal se lever, près exprime la proximité.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Révision : diviser par 5, +9/-9, multiplier par 8 et par 15",
      xpReward: 22,
      story: {
        hook: "Cette semaine, tu as musclé ton cerveau avec de nouvelles astuces. Faisons le point !",
        concreteExample: "60 divisé par 5 = 12, 34 + 9 = 43, 6 x 8 = 48, 6 x 15 = 90. Tu deviens un champion du calcul mental !",
        reveal: "Ces automatismes te seront très utiles au collège.",
        bridgeToConcept: "Révisons ensemble : diviser par 5, ajouter ou soustraire 9, multiplier par 8, multiplier par 15.",
        illustrationEmoji: "⚡"
      },
      examples: [
        {
          title: "Rappel diviser par 5 et +9/-9",
          steps: [
            { text: "80 divisé par 5 : 80 divisé par 10 = 8, puis 8 x 2 = 16.", illustrationEmoji: "➗" },
            { text: "27 + 9 : 27 + 10 = 37, puis 37 - 1 = 36.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Rappel multiplier par 8 et par 15",
          steps: [
            { text: "5 x 8 : 5 double = 10, 10 double = 20, 20 double = 40.", illustrationEmoji: "✨" },
            { text: "4 x 15 : 4 x 10 = 40, moitié de 40 = 20, 40 + 20 = 60.", illustrationEmoji: "🔍" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 80 divisé par 5", answer: "16", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "80 divisé par 10 = 8, puis 8 x 2 = 16." },
        { order: 2, prompt: "Calcule : 27 + 9", answer: "36", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "27 + 10 = 37, puis 37 - 1 = 36." },
        { order: 3, prompt: "Calcule : 5 x 8", answer: "40", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "5 double = 10, 10 double = 20, 20 double = 40." },
        { order: 4, prompt: "Calcule : 4 x 15", answer: "60", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "4 x 10 = 40, moitié de 40 = 20, 40 + 20 = 60." },
        { order: 5, prompt: "Calcule : 52 - 9", answer: "43", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "52 - 10 = 42, puis 42 + 1 = 43." },
        { order: 6, prompt: "Défi : calcule 9 x 8, puis divise le résultat par 4 (indice : divise par 2 deux fois). Quel est le résultat final ?", answer: "18", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "9 x 8 = 72, puis 72 divisé par 2 = 36, puis 36 divisé par 2 = 18." }
      ]
    }
  ]
};
