import { DayCurriculum } from "@/models/types";

export const day15: DayCurriculum = {
  dayNumber: 15,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Révision : durées, fractions, nombres décimaux, grands nombres",
      xpReward: 24,
      story: {
        hook: "Cette semaine, tu as découvert plein de nouvelles notions en mathématiques. Faisons le tour ensemble !",
        concreteExample: "Tu sais calculer une durée, comparer des fractions, additionner des décimaux et lire les grands nombres.",
        reveal: "Toutes ces compétences t'aideront pour la suite de ta scolarité.",
        bridgeToConcept: "Révisons : durées, comparaison de fractions, addition et soustraction de décimaux, grands nombres jusqu'à 1 000 000.",
        illustrationEmoji: "🎓"
      },
      examples: [
        {
          title: "Rappel durées et fractions",
          steps: [
            { text: "De 9h15 à 9h45, il s'écoule 30 minutes.", illustrationEmoji: "🕘" },
            { text: "5/8 est plus grand que 3/8, car 5 est plus grand que 3.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Rappel décimaux et grands nombres",
          steps: [
            { text: "4,2 + 1,5 = 5,7.", illustrationEmoji: "🔢" },
            { text: "850 000 se lit huit cent cinquante mille.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Combien de minutes s'écoulent entre 10h00 et 10h40 ?", answer: "40", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "De 10h00 à 10h40, il s'écoule 40 minutes." },
        { order: 2, prompt: "Quelle fraction est la plus grande : 2/6 ou 4/6 ?", answer: "4/6", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Même dénominateur 6, et 4 est plus grand que 2, donc 4/6 est la plus grande." },
        { order: 3, prompt: "Calcule : 6,8 - 2,3", answer: "4,5", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On aligne la virgule : 6,8 - 2,3 = 4,5." },
        { order: 4, prompt: "Dans 620 000, combien y a-t-il de centaines de mille ?", answer: "6", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Le chiffre des centaines de mille dans 620 000 est 6." },
        { order: 5, prompt: "Range du plus petit au plus grand : 5/9, 1/9, 8/9 (réponds avec des espaces entre les fractions)", answer: "1/9 5/9 8/9", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Même dénominateur 9 : on range simplement les numérateurs dans l'ordre 1, 5, 8." },
        { order: 6, prompt: "Défi : un film commence à 16h10 et dure 1h20. À quelle heure se termine-t-il, puis calcule 3,25 + 1,50. (réponds : heure puis somme, exemple : 17h30 4,75)", answer: "17h30 4,75", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "16h10 plus 1h20 donne 17h30. Puis 3,25 + 1,50 = 4,75." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Révision : passé simple du 2e groupe, plus-que-parfait, accord avec être, futur/conditionnel",
      xpReward: 24,
      story: {
        hook: "Cette semaine, tu as revisité plusieurs temps et accords du verbe. Résumons !",
        concreteExample: "Passé simple : elle choisit. Plus-que-parfait : il avait fini. Accord : elle est partie. Futur et conditionnel : je jouerai, je jouerais.",
        reveal: "Chaque temps et chaque accord a sa règle précise, à bien retenir.",
        bridgeToConcept: "Passé simple du 2e groupe, plus-que-parfait, accord du participe passé avec être, distinction futur simple et conditionnel présent.",
        illustrationEmoji: "🕰️"
      },
      examples: [
        {
          title: "Rappel passé simple et plus-que-parfait",
          steps: [
            { text: "Elle choisit une robe rouge (passé simple).", illustrationEmoji: "📖" },
            { text: "Il avait fini ses devoirs avant de sortir (plus-que-parfait).", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Rappel accord et futur/conditionnel",
          steps: [
            { text: "Balkis est partie tôt (accord avec être).", illustrationEmoji: "🚶" },
            { text: "Demain, je jouerai ; si j'avais le temps, je jouerais.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète au passé simple : elle ____ (choisir) une robe rouge.", answer: "choisit", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec elle, le passé simple de choisir est choisit : radical chois- puis -it.", strictAccents: true },
        { order: 2, prompt: "Complète au plus-que-parfait : il ____ (avoir, finir) ses devoirs avant de sortir.", answer: "avait fini", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Avec il, avoir à l'imparfait donne avait, suivi du participe passé fini.", strictAccents: true },
        { order: 3, prompt: "Complète : Balkis est ____ (parti) tôt ce matin.", answer: "partie", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Balkis est une fille, le participe passé s'accorde au féminin : partie.", strictAccents: true },
        { order: 4, prompt: "Complète au futur simple : Demain, je ____ (jouer) au parc.", answer: "jouerai", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Avec je, le futur simple de jouer est jouerai : radical jouer- puis -ai.", strictAccents: true },
        { order: 5, prompt: "Complète au conditionnel présent : Si j'avais le temps, je ____ (jouer) au parc.", answer: "jouerais", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Avec je, le conditionnel présent de jouer est jouerais : radical jouer- puis -ais.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux verbes. Les filles sont ____ (arriver, accord avec être) et nous ____ (avoir, manger, plus-que-parfait) avant leur venue.", answer: "arrivées avions mangé", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Tu étais proche ! Les filles est féminin pluriel : arrivées. Avec nous, le plus-que-parfait de manger est avions mangé.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Révision : pronoms compléments, attribut du sujet, prépositions, coordination",
      xpReward: 24,
      story: {
        hook: "Cette semaine, tu as enrichi ton analyse des phrases. Récapitulons !",
        concreteExample: "Pronoms compléments, attribut du sujet, prépositions, conjonctions de coordination.",
        reveal: "Toutes ces notions t'aident à mieux construire et enrichir tes phrases.",
        bridgeToConcept: "Révisons : pronoms personnels compléments, attribut du sujet, prépositions, conjonctions de coordination.",
        illustrationEmoji: "🧩"
      },
      examples: [
        {
          title: "Rappel pronoms et attribut",
          steps: [
            { text: "Bayrem lit le livre → Bayrem le lit.", illustrationEmoji: "🔁" },
            { text: "Balkis est heureuse : heureuse est attribut du sujet.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Rappel prépositions et coordination",
          steps: [
            { text: "Le chat dort sous la table : sous est une préposition.", illustrationEmoji: "🧭" },
            { text: "Il pleut, mais nous sortons quand même : mais relie deux propositions.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Remplace le complément par un pronom : Elle regarde la télévision.", answer: "la", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "La télévision est féminin singulier, on la remplace par la." },
        { order: 2, prompt: "Dans Balkis est heureuse, quel est l'attribut du sujet ?", answer: "heureuse", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Heureuse qualifie Balkis après le verbe d'état est, c'est l'attribut du sujet." },
        { order: 3, prompt: "Dans le chat dort sous la table, quelle est la préposition ?", answer: "sous", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Sous introduit le complément la table, c'est une préposition." },
        { order: 4, prompt: "Dans il pleut, mais nous sortons quand même, quelle est la conjonction de coordination ?", answer: "mais", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Mais relie les deux propositions en montrant une opposition." },
        { order: 5, prompt: "Remplace le complément par un pronom : Il parle à son ami. Il ___ parle.", answer: "lui", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "À son ami est un complément introduit par à, on le remplace par lui." },
        { order: 6, prompt: "Défi : dans Bayrem paraît fatigué, mais il reste avec ses amis, cite l'attribut du sujet puis la conjonction de coordination.", answer: "fatigué mais", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Fatigué qualifie Bayrem après le verbe d'état paraît, et mais relie les deux propositions." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Révision : et/est, son/sont, peu/peut/peux, quand/qu'en/quant",
      xpReward: 24,
      story: {
        hook: "Cette semaine, tu as croisé encore de nombreux mots jumeaux. Récapitulons les tests appris !",
        concreteExample: "Et ou est, son ou sont, peu, peut ou peux, quand, qu'en ou quant.",
        reveal: "Chaque paire ou trio a son test : était pour est, étaient pour sont, pouvait pour peut, à quel moment pour quand.",
        bridgeToConcept: "Utilise toujours le test appris pour choisir la bonne orthographe.",
        illustrationEmoji: "🧠"
      },
      examples: [
        {
          title: "Rappel des tests et/est et son/sont",
          steps: [
            { text: "Bayrem et Balkis jouent ensemble (et relie) ; il est content (est, verbe être).", illustrationEmoji: "🔗" },
            { text: "Bayrem range son cartable (possession) ; ils sont contents (verbe être).", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Rappel des tests peu/peut/peux et quand/qu'en/quant",
          steps: [
            { text: "J'ai mis un peu de sucre (petite quantité) ; il peut venir (verbe pouvoir).", illustrationEmoji: "🤏" },
            { text: "Quand pars-tu ? (temps) ; quant à moi, je reste (introduit un sujet).", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Bayrem ___ Balkis jouent ensemble. (et/est)", answer: "et", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On ne peut pas dire Bayrem était Balkis, donc on écrit et, qui relie les deux prénoms.", strictAccents: true },
        { order: 2, prompt: "Complète : Ils ___ contents de leur journée. (son/sont)", answer: "sont", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "On peut dire ils étaient contents, donc on écrit sont, le verbe être.", strictAccents: true },
        { order: 3, prompt: "Complète : Bayrem ___ venir demain. (peu/peut/peux)", answer: "peut", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On peut dire Bayrem pouvait venir, donc on écrit peut, le verbe pouvoir.", strictAccents: true },
        { order: 4, prompt: "Complète : ___ arrives-tu ? (quand/qu'en/quant)", answer: "quand", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "On peut remplacer par à quel moment arrives-tu, donc on écrit quand.", strictAccents: true },
        { order: 5, prompt: "Complète : Il adore ___ chien. (son/sont)", answer: "son", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "On peut dire mon chien, donc on écrit son, le déterminant possessif.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les trois mots. Le ciel ___ (est) bleu, ___ (quant) à moi, je préfère un ___ (peu) de soleil.", answer: "est quant peu", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Le ciel était bleu fonctionne, donc est. Quant à moi introduit un sujet. Un peu de soleil exprime une petite quantité.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Révision : division par 10/100/1000, quarts, multiplication par 5/25/50, pourcentages",
      xpReward: 24,
      story: {
        hook: "Cette semaine, tu as musclé ton cerveau avec de nouvelles astuces de calcul. Faisons le point !",
        concreteExample: "3400 divisé par 100 = 34, le quart de 40 = 10, 14 x 5 = 70, 10 % de 200 = 20.",
        reveal: "Ces automatismes t'aideront pour toutes tes années de calcul futures.",
        bridgeToConcept: "Révisons : diviser par 10/100/1000, quart et trois quarts, multiplier par 5, 25 et 50, pourcentages simples.",
        illustrationEmoji: "⚡"
      },
      examples: [
        {
          title: "Rappel divisions et quarts",
          steps: [
            { text: "4000 divisé par 1000 = 4.", illustrationEmoji: "🔢" },
            { text: "Le quart de 20 = 5.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Rappel multiplications et pourcentages",
          steps: [
            { text: "14 x 5 = 70.", illustrationEmoji: "🔍" },
            { text: "50 % de 80 = 40.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 3400 divisé par 100", answer: "34", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "3400 divisé par 100 = 34, on enlève deux zéros." },
        { order: 2, prompt: "Calcule le quart de 40.", answer: "10", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Le quart de 40, c'est 40 divisé par 4, soit 10." },
        { order: 3, prompt: "Calcule : 14 x 5", answer: "70", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "14 x 10 = 140, divisé par 2 = 70." },
        { order: 4, prompt: "Calcule : 10 % de 200", answer: "20", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "10 % de 200, c'est 200 divisé par 10, soit 20." },
        { order: 5, prompt: "Calcule : 4000 divisé par 1000", answer: "4", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "4000 divisé par 1000 = 4, on enlève trois zéros." },
        { order: 6, prompt: "Défi : calcule 6 x 25, puis ajoute 50 % de 60. Quel est le résultat final ?", answer: "180", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "6 x 25 = 150, et 50 % de 60 = 30, donc 150 + 30 = 180." }
      ]
    }
  ]
};
