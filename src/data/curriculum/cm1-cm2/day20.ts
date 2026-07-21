import { DayCurriculum } from "@/models/types";

export const day20: DayCurriculum = {
  dayNumber: 20,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Révision : décimaux x entier, fractions décimales, angles, longueurs",
      xpReward: 24,
      story: {
        hook: "Cette semaine, tu as découvert plein de nouvelles notions en mathématiques. Faisons le tour ensemble !",
        concreteExample: "Tu sais maintenant multiplier un décimal, convertir une fraction en décimal, reconnaître un angle et convertir des longueurs.",
        reveal: "Toutes ces compétences t'aideront pour la suite de ta scolarité.",
        bridgeToConcept: "Révisons : multiplication d'un décimal par un entier, fractions décimales, angles, unités de longueur.",
        illustrationEmoji: "🎓"
      },
      examples: [
        {
          title: "Rappel décimaux et fractions",
          steps: [
            { text: "2,3 x 2 = 4,6.", illustrationEmoji: "🔢" },
            { text: "25/100 = 0,25.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Rappel angles et longueurs",
          steps: [
            { text: "Un angle de 90° est un angle droit.", illustrationEmoji: "📐" },
            { text: "3 mètres = 300 centimètres.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 1,4 x 3", answer: "4,2", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "14 x 3 = 42, puis on replace la virgule : 4,2." },
        { order: 2, prompt: "Écris 8/10 en nombre décimal.", answer: "0,8", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "8/10 signifie huit dixièmes, ce qui s'écrit 0,8." },
        { order: 3, prompt: "Un angle de 120° est-il aigu ou obtus ?", answer: "obtus", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "120° est plus grand que 90°, c'est donc un angle obtus." },
        { order: 4, prompt: "Combien de centimètres dans 7 mètres ?", answer: "700", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "1 mètre = 100 centimètres, donc 7 mètres = 700 centimètres." },
        { order: 5, prompt: "Écris 5/100 en nombre décimal.", answer: "0,05", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "5/100 signifie cinq centièmes, ce qui s'écrit 0,05, avec un zéro devant le 5." },
        { order: 6, prompt: "Défi : calcule 2,5 x 3, puis ajoute le nombre de centimètres dans 2 mètres. Quel est le résultat ?", answer: "207,5", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "2,5 x 3 = 7,5. 2 mètres = 200 centimètres. 7,5 + 200 = 207,5." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Révision : accord avec avoir, subjonctif, verbes pronominaux, futur irrégulier",
      xpReward: 24,
      story: {
        hook: "Cette semaine, tu as approfondi ta connaissance des verbes. Résumons !",
        concreteExample: "Avec avoir, le participe reste invariable. Il faut que je finisse. Je me lave. Demain, je serai content.",
        reveal: "Chaque règle t'aide à mieux conjuguer et à mieux t'exprimer.",
        bridgeToConcept: "Accord du participe passé avec avoir, subjonctif présent après il faut que, verbes pronominaux, futur simple des verbes irréguliers.",
        illustrationEmoji: "🕰️"
      },
      examples: [
        {
          title: "Rappel accord et subjonctif",
          steps: [
            { text: "Elle a mangé une pomme : mangé reste invariable avec avoir.", illustrationEmoji: "🍎" },
            { text: "Il faut que tu ranges ta chambre : subjonctif présent.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Rappel pronominaux et futur irrégulier",
          steps: [
            { text: "Le matin, je me lave et tu te lèves.", illustrationEmoji: "🚿" },
            { text: "Demain, je serai content et j'aurai un cadeau.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Elle a ____ (manger) une pomme.", answer: "mangé", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec avoir, le participe passé reste invariable : mangé.", strictAccents: true },
        { order: 2, prompt: "Complète : Il faut que je ____ (finir) mes devoirs.", answer: "finisse", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Au subjonctif présent, avec je, finir donne finisse.", strictAccents: true },
        { order: 3, prompt: "Complète : Le matin, je ____ (se laver) rapidement.", answer: "me lave", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec je, le pronom réfléchi est me, donc je me lave.", strictAccents: true },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Elle ____ (aller) chez sa grand-mère.",
          options: ["ira", "irai", "iras"],
          answer: "ira",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Au futur simple, avec elle, aller devient ira : radical ir- puis -a.",
          strictAccents: true
        },
        { order: 5, prompt: "Complète : Tu ____ (se lever) tôt aujourd'hui.", answer: "te lèves", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Avec tu, le pronom réfléchi est te, donc tu te lèves.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux verbes. Balkis a ____ (ranger) sa chambre et demain, nous ____ (être) fiers d'elle.", answer: "rangé serons", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Tu étais proche ! Avec avoir, rangé reste invariable. Avec nous au futur simple, être donne serons.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Révision : types de phrases, formes, propositions relatives, complément du nom",
      xpReward: 24,
      story: {
        hook: "Cette semaine, tu as enrichi ton analyse des phrases. Récapitulons !",
        concreteExample: "Types de phrases, forme affirmative ou négative, propositions relatives avec qui et que, compléments du nom.",
        reveal: "Toutes ces notions t'aident à mieux construire et enrichir tes phrases.",
        bridgeToConcept: "Révisons : types de phrases, formes affirmative/négative, propositions subordonnées relatives, compléments du nom.",
        illustrationEmoji: "🧩"
      },
      examples: [
        {
          title: "Rappel types et formes",
          steps: [
            { text: "Range ta chambre ! est une phrase injonctive.", illustrationEmoji: "🎭" },
            { text: "Balkis n'aime pas le chocolat est une phrase négative.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Rappel relatives et complément du nom",
          steps: [
            { text: "Le livre que je lis est passionnant : que remplace un complément.", illustrationEmoji: "📖" },
            { text: "Le vélo de Bayrem est rouge : de Bayrem est le complément du nom.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Quelle belle journée ! Quel est le type de cette phrase ?", answer: "exclamative", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Cette phrase exprime un sentiment fort et se termine par un point d'exclamation : c'est une phrase exclamative." },
        { order: 2, prompt: "Balkis n'aime pas le chocolat. Quelle est la forme de cette phrase ?", answer: "négative", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Cette phrase contient ne...pas, qui encadre le verbe : elle est négative." },
        { order: 3, prompt: "Dans le livre que je lis est passionnant, quel pronom relatif est utilisé ?", answer: "que", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Que remplace le complément du verbe lis, c'est le pronom relatif utilisé." },
        { order: 4, prompt: "Dans le vélo de Bayrem est rouge, quel est le complément du nom vélo ?", answer: "de Bayrem", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "De Bayrem précise à qui appartient le vélo, c'est le complément du nom." },
        { order: 5, prompt: "Le chien qui aboie fait peur aux voisins. Quel pronom relatif est utilisé ?", answer: "qui", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Le chien est le sujet du verbe aboie, donc on utilise qui." },
        { order: 6, prompt: "Défi : dans range ta chambre, mais tu ne ranges jamais tes affaires, cite le type de la première phrase, puis la forme de la deuxième.", answer: "injonctive négative", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Range ta chambre donne un ordre : phrase injonctive. Tu ne ranges jamais contient ne...jamais : forme négative." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Révision : sans/s'en, ni/n'y, ça/sa, plutôt/plus tôt",
      xpReward: 24,
      story: {
        hook: "Cette semaine, tu as croisé encore de nombreux mots jumeaux. Récapitulons les tests appris !",
        concreteExample: "Sans ou s'en, ni ou n'y, ça ou sa, plutôt ou plus tôt.",
        reveal: "Chaque paire a son test : un verbe pronominal en -en pour s'en, à cela pour n'y, cela pour ça, de préférence pour plutôt.",
        bridgeToConcept: "Utilise toujours le test appris pour choisir la bonne orthographe.",
        illustrationEmoji: "🧠"
      },
      examples: [
        {
          title: "Rappel des tests sans/s'en et ni/n'y",
          steps: [
            { text: "Il part sans son parapluie (sans avoir) ; elle s'en va (s'en aller).", illustrationEmoji: "☂️" },
            { text: "Je n'aime ni les choux ni les épinards ; il n'y pense jamais (à cela).", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Rappel des tests ça/sa et plutôt/plus tôt",
          steps: [
            { text: "Sa mère l'attend (ma mère) ; j'aime bien ça (cela).", illustrationEmoji: "🪞" },
            { text: "Je préfère le chocolat plutôt que la vanille (de préférence) ; il est arrivé plus tôt que prévu (contraire de plus tard).", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Il part ___ son parapluie. (sans/s'en)", answer: "sans", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On ne peut pas dire il part s'en son parapluie, donc on écrit sans, qui signifie sans avoir.", strictAccents: true },
        { order: 2, prompt: "Complète : Il ___ pense jamais. (ni/n'y)", answer: "n'y", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "On peut dire il ne pense jamais à cela, donc on écrit n'y, la contraction de ne et y.", strictAccents: true },
        { order: 3, prompt: "Complète : ___ mère l'attend à la sortie. (ça/sa)", answer: "sa", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On peut dire ma mère l'attend, donc on écrit sa, le déterminant possessif.", strictAccents: true },
        { order: 4, prompt: "Complète : Je préfère le chocolat, ___ que la vanille. (plutôt/plus tôt)", answer: "plutôt", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "On peut dire de préférence le chocolat, donc on écrit plutôt, en un seul mot.", strictAccents: true },
        { order: 5, prompt: "Complète : Je n'aime ___ les choux ni les épinards. (ni/n'y)", answer: "ni", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Ni relie ici deux aliments niés ensemble, dans une construction ne...ni...ni.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les trois mots. Bayrem est parti ___ (sans) argent, et il aime ___ (plutôt) marcher, mais ___ (ça) ne l'a pas empêché d'arriver à l'heure.", answer: "sans plutôt ça", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Sans argent signifie sans avoir d'argent. Plutôt marcher exprime une préférence. Ça désigne la situation, remplaçable par cela.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Révision : x20/30/40, proche d'une centaine, x15, 75 %",
      xpReward: 24,
      story: {
        hook: "Cette semaine, tu as musclé ton cerveau avec de nouvelles astuces de calcul. Faisons le point !",
        concreteExample: "6 x 30 = 180, 350 - 98 = 252, 6 x 15 = 90, 75 % de 80 = 60.",
        reveal: "Ces automatismes t'aideront pour toutes tes années de calcul futures.",
        bridgeToConcept: "Révisons : multiplier par des dizaines rondes, ajouter ou soustraire un nombre proche d'une centaine, multiplier par 15, calculer 75 %.",
        illustrationEmoji: "⚡"
      },
      examples: [
        {
          title: "Rappel multiplications par dizaines et centaines",
          steps: [
            { text: "8 x 20 = 160.", illustrationEmoji: "🔢" },
            { text: "460 - 99 = 361.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Rappel x15 et pourcentages",
          steps: [
            { text: "4 x 15 = 60.", illustrationEmoji: "🔍" },
            { text: "75 % de 200 = 150.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 6 x 30", answer: "180", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "6 x 3 = 18, puis 18 x 10 = 180." },
        { order: 2, prompt: "Calcule : 350 - 98", answer: "252", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "350 - 100 = 250, puis on ajoute 2 : 252." },
        { order: 3, prompt: "Calcule : 4 x 15", answer: "60", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "4 x 10 = 40, moitié de 40 = 20, total 60." },
        { order: 4, prompt: "Calcule : 75 % de 80", answer: "60", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Le quart de 80 est 20, donc 3 x 20 = 60." },
        { order: 5, prompt: "Calcule : 8 x 20", answer: "160", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "8 x 2 = 16, puis 16 x 10 = 160." },
        { order: 6, prompt: "Défi : calcule 6 x 15, puis ajoute 75 % de 40. Quel est le résultat final ?", answer: "120", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "6 x 15 = 90, et 75 % de 40 = 30, donc 90 + 30 = 120." }
      ]
    }
  ]
};
