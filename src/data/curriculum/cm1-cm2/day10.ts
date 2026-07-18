import { DayCurriculum } from "@/models/types";

export const day10: DayCurriculum = {
  dayNumber: 10,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Révision : division avec reste, fractions, aire, nombres décimaux",
      xpReward: 24,
      story: {
        hook: "Cette semaine, tu as appris plein de nouvelles notions en mathématiques. Faisons le tour ensemble !",
        concreteExample: "Tu sais maintenant diviser avec un reste, calculer une fraction d'un nombre, trouver une aire et lire un nombre décimal.",
        reveal: "Toutes ces compétences t'aideront pour la suite de ta scolarité.",
        bridgeToConcept: "Révisons : division avec reste, fractions simples, aire du rectangle et du carré, nombres décimaux.",
        illustrationEmoji: "🎓"
      },
      examples: [
        {
          title: "Rappel division et fractions",
          steps: [
            { text: "29 divisé par 4 = 7 reste 1, car 4 x 7 = 28.", illustrationEmoji: "🔢" },
            { text: "La moitié de 12 = 6.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Rappel aire et nombres décimaux",
          steps: [
            { text: "Aire d'un carré de 4 cm de côté = 4 x 4 = 16 cm².", illustrationEmoji: "🔍" },
            { text: "Dans 3,5, le chiffre des dixièmes est 5.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 22 divisé par 5 (donne le quotient et le reste, exemple : 5 reste 2)", answer: "4 reste 2", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "5 x 4 = 20, et 22 - 20 = 2. Le quotient est 4, le reste est 2." },
        { order: 2, prompt: "Calcule le tiers de 9.", answer: "3", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Le tiers de 9, c'est 9 divisé par 3, soit 3." },
        { order: 3, prompt: "Calcule l'aire d'un carré de 6 cm de côté.", answer: "36", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Aire du carré = côté x côté, donc 6 x 6 = 36." },
        { order: 4, prompt: "Dans 4,25, quel est le chiffre des centièmes ?", answer: "5", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Le deuxième chiffre après la virgule dans 4,25 est 5, c'est le chiffre des centièmes." },
        { order: 5, prompt: "Calcule la moitié de 30.", answer: "15", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "La moitié de 30, c'est 30 divisé par 2, soit 15." },
        { order: 6, prompt: "Défi : calcule l'aire d'un rectangle de 5 m sur 3 m, puis ajoute le quotient de 38 divisé par 6 (sans le reste). Quel est le résultat ?", answer: "21", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "L'aire du rectangle = 5 x 3 = 15. 38 divisé par 6 = 6 reste 2, donc le quotient est 6. 15 + 6 = 21." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Révision : futur simple, imparfait, passé simple, impératif",
      xpReward: 24,
      story: {
        hook: "Cette semaine, tu as voyagé entre plusieurs temps et modes du verbe. Résumons !",
        concreteExample: "Futur simple : je jouerai. Imparfait : je jouais. Passé simple : il sauta. Impératif : range ta chambre !",
        reveal: "Chaque temps a son rôle : annoncer l'avenir, raconter le passé, décrire une habitude ou donner un ordre.",
        bridgeToConcept: "Futur simple, imparfait, passé simple des verbes en -er, impératif présent : quatre outils essentiels pour bien s'exprimer.",
        illustrationEmoji: "🕰️"
      },
      examples: [
        {
          title: "Rappel futur simple et imparfait",
          steps: [
            { text: "Futur simple : demain, je jouerai au parc.", illustrationEmoji: "🔮" },
            { text: "Imparfait : autrefois, je jouais tous les jours.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Rappel passé simple et impératif",
          steps: [
            { text: "Passé simple : le chat sauta sur la table.", illustrationEmoji: "📜" },
            { text: "Impératif : range ta chambre !", illustrationEmoji: "📢" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Demain, je ____ (jouer) au parc.", answer: "jouerai", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec je, le futur simple de jouer est jouerai : infinitif jouer puis -ai.", strictAccents: true },
        { order: 2, prompt: "Complète à l'imparfait : Quand j'étais petit, je ____ (jouer) dans le jardin.", answer: "jouais", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Avec je, l'imparfait de jouer est jouais : radical jou- puis -ais.", strictAccents: true },
        { order: 3, prompt: "Complète au passé simple : Le chat ____ (sauter) sur la table.", answer: "sauta", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec il, le passé simple de sauter est sauta : radical saut- puis -a.", strictAccents: true },
        { order: 4, prompt: "Mets à l'impératif (tu) : ranger ta chambre.", answer: "range", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "À l'impératif, avec tu, les verbes en -er perdent leur s : range, sans s.", strictAccents: true },
        { order: 5, prompt: "Complète : Nous ____ (partir) en voyage l'année prochaine.", answer: "partirons", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Avec nous, le futur simple de partir est partirons : infinitif partir puis -ons.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux verbes. Ils ____ (arriver, passé simple) juste à temps et nous ____ (être, imparfait) très contents.", answer: "arrivèrent étions", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Tu étais proche ! Avec ils, arriver au passé simple donne arrivèrent. Avec nous, être à l'imparfait donne étions.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Révision : déterminants, compléments circonstanciels, phrases, accords",
      xpReward: 24,
      story: {
        hook: "Cette semaine, tu as appris à mieux analyser les phrases. Récapitulons !",
        concreteExample: "Déterminants, compléments circonstanciels, phrase simple ou complexe, accord du verbe avec un sujet composé.",
        reveal: "Toutes ces notions t'aident à mieux construire et comprendre les phrases.",
        bridgeToConcept: "Révisons : déterminants, compléments circonstanciels, phrase simple/complexe, accord sujet-verbe.",
        illustrationEmoji: "🧩"
      },
      examples: [
        {
          title: "Rappel déterminants et compléments",
          steps: [
            { text: "Le chien aboie : le est un article.", illustrationEmoji: "🐕" },
            { text: "Il court dans la forêt : dans la forêt est un complément de lieu.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Rappel phrases et accords",
          steps: [
            { text: "Le chat dort : phrase simple, un seul verbe conjugué.", illustrationEmoji: "🐱" },
            { text: "Le chat et le chien dorment : sujet composé, verbe au pluriel.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans le chien aboie, quel type de déterminant est le ?", answer: "article", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Le annonce simplement le nom chien, c'est un article." },
        { order: 2, prompt: "Dans il court dans la forêt, quel est le complément circonstanciel de lieu ?", answer: "dans la forêt", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Dans la forêt répond à la question où, c'est le complément circonstanciel de lieu." },
        { order: 3, prompt: "Le chat dort. Est-ce une phrase simple ou complexe ?", answer: "simple", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "La phrase ne contient qu'un seul verbe conjugué (dort), c'est une phrase simple." },
        { order: 4, prompt: "Complète : Le chat et le chien ____ (dormir) sur le tapis.", answer: "dorment", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Le chat et le chien forment un sujet pluriel (ils), donc dormir devient dorment." },
        { order: 5, prompt: "Dans elle range sa chambre le matin, quel est le complément circonstanciel de temps ?", answer: "le matin", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Le matin répond à la question quand, c'est le complément circonstanciel de temps." },
        { order: 6, prompt: "Défi : combien de propositions y a-t-il dans la phrase suivante, et quel est le complément circonstanciel de lieu ? Quand il pleut, je reste à la maison et je lis un livre. (réponds : nombre puis complément, exemple : 2 dehors)", answer: "3 à la maison", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Il y a trois verbes conjugués (pleut, reste, lis), donc trois propositions. À la maison répond à où, c'est le complément circonstanciel de lieu." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Révision : a/à, ou/où, leur/leurs, ces/ses",
      xpReward: 24,
      story: {
        hook: "Cette semaine, tu as croisé encore beaucoup de mots jumeaux. Récapitulons les tests appris !",
        concreteExample: "A/à, ou/où, leur/leurs, ces/ses.",
        reveal: "Chaque paire a son test : avait pour a, ou bien pour ou, le nombre du nom pour leur(s), le singulier pour ces/ses.",
        bridgeToConcept: "Utilise toujours le test appris pour choisir la bonne orthographe.",
        illustrationEmoji: "🧠"
      },
      examples: [
        {
          title: "Rappel des tests a/à et ou/où",
          steps: [
            { text: "Bayrem a un chat noir (on peut dire avait) ; il va à l'école (impossible avec avait).", illustrationEmoji: "🔍" },
            { text: "Tu préfères le chocolat ou la vanille (ou bien) ; où habites-tu (lieu).", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Rappel des tests leur(s) et ces/ses",
          steps: [
            { text: "Leur maison (nom singulier) ; leurs amis (nom pluriel).", illustrationEmoji: "🏠" },
            { text: "Balkis range ses chaussures (possession) ; regarde ces fleurs-là (on montre).", illustrationEmoji: "👟" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Bayrem ___ un chat noir. (a/à)", answer: "a", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On peut dire Bayrem avait un chat noir, donc on écrit a, le verbe avoir, sans accent.", strictAccents: true },
        { order: 2, prompt: "Complète : ___ habites-tu exactement ? (ou/où)", answer: "où", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "On ne peut pas dire ou bien habites-tu, donc on écrit où, avec accent, qui indique le lieu.", strictAccents: true },
        { order: 3, prompt: "Complète : ___ maison est très grande. (leur/leurs)", answer: "leur", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Maison est singulier, donc leur, déterminant possessif, ne prend pas de s.", strictAccents: true },
        { order: 4, prompt: "Complète : Balkis range ___ chaussures avant de sortir. (ces/ses)", answer: "ses", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "On peut dire sa chaussure au singulier, donc on écrit ses, qui exprime la possession.", strictAccents: true },
        { order: 5, prompt: "Complète : Tu préfères le chocolat ___ la vanille ? (ou/où)", answer: "ou", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "On peut dire le chocolat ou bien la vanille, donc on écrit ou, sans accent.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les trois mots. Il va ___ (à) l'école avec ___ (ses) amis ___ (ou) sa sœur.", answer: "à ses ou", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Tu étais proche ! Il va à l'école : impossible de dire avait, donc à avec accent. Ses amis : on peut dire son ami, possession. Ou sa sœur : on peut dire ou bien sa sœur.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Révision : x10/x100/x1000, doubles, moitiés, tables de 11 et 12",
      xpReward: 24,
      story: {
        hook: "Cette semaine, tu as musclé ton cerveau avec de nouvelles astuces de calcul. Faisons le point !",
        concreteExample: "24 x 10 = 240, le double de 25 = 50, 6 x 11 = 66. Tu deviens un champion du calcul mental !",
        reveal: "Ces automatismes t'aideront pour toutes tes années de calcul futures.",
        bridgeToConcept: "Révisons ensemble : multiplier par 10/100/1000, doubles et moitiés, dizaines et centaines, tables de 11 et 12.",
        illustrationEmoji: "⚡"
      },
      examples: [
        {
          title: "Rappel des astuces de multiplication",
          steps: [
            { text: "36 x 100 = 3600 : on ajoute deux zéros.", illustrationEmoji: "🔢" },
            { text: "7 x 11 = 77 : le chiffre est répété deux fois.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Rappel doubles, moitiés et centaines",
          steps: [
            { text: "Le double de 36 = 72, la moitié de 50 = 25.", illustrationEmoji: "🔍" },
            { text: "480 - 30 = 450 : on soustrait aux dizaines.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 24 x 10", answer: "240", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "24 x 10 = 240, on ajoute un zéro." },
        { order: 2, prompt: "Calcule le double de 25.", answer: "50", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Le double de 25, c'est 25 + 25, soit 50." },
        { order: 3, prompt: "Calcule : 480 - 30", answer: "450", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "480 - 30 = 450, on soustrait seulement aux dizaines." },
        { order: 4, prompt: "Calcule : 6 x 11", answer: "66", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "6 x 11 = 66, le chiffre 6 est répété deux fois." },
        { order: 5, prompt: "Calcule la moitié de 60.", answer: "30", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "La moitié de 60, c'est 60 divisé par 2, soit 30." },
        { order: 6, prompt: "Défi : calcule 7 x 12, puis ajoute 36 x 10. Quel est le résultat final ?", answer: "444", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "7 x 12 = 84, 36 x 10 = 360, et 84 + 360 = 444." }
      ]
    }
  ]
};
