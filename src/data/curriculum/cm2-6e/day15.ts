import { DayCurriculum } from "@/models/types";

export const day15: DayCurriculum = {
  dayNumber: 15,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Révision : aire, fractions équivalentes, nombres relatifs, durées",
      xpReward: 22,
      story: {
        hook: "Cette semaine, tu as encore beaucoup progressé en mathématiques. Faisons le tour ensemble !",
        concreteExample: "Tu sais maintenant calculer une aire, simplifier une fraction, utiliser des nombres relatifs et calculer une durée.",
        reveal: "Ces compétences te préparent très bien pour le collège.",
        bridgeToConcept: "Révisons : l'aire du carré et du rectangle, les fractions équivalentes, les nombres relatifs, les durées.",
        illustrationEmoji: "🎓"
      },
      examples: [
        {
          title: "Rappel aire et fractions",
          steps: [
            { text: "Un rectangle de 6 m sur 4 m : aire = 24 m².", illustrationEmoji: "🟦" },
            { text: "4/8 = 1/2.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Rappel nombres relatifs et durées",
          steps: [
            { text: "-3 + 5 = 2.", illustrationEmoji: "🌡️" },
            { text: "14h30 + 1h45 = 16h15.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule l'aire d'un rectangle de 6 m de long et 4 m de large.", answer: "24", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "6 x 4 = 24 m²." },
        { order: 2, prompt: "Simplifie la fraction 4/8.", answer: "1/2", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "On divise par 4 : 4/8 = 1/2." },
        { order: 3, prompt: "Calcule : -2 + 4", answer: "2", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "-2 + 4 = 2 (on avance de 4 depuis -2)." },
        { order: 4, prompt: "Un film commence à 14h30 et dure 1h45. À quelle heure se termine-t-il ?", answer: "16h15", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "30min+45min=75min=1h15min, donc 14h+1h+1h15min=16h15." },
        { order: 5, prompt: "Calcule l'aire d'un carré de côté 7 m.", answer: "49", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "7 x 7 = 49 m²." },
        { order: 6, prompt: "Défi : calcule -6 + 8, puis simplifie la fraction 6/9 (indice : divise par 3). Réponds les deux résultats, dans l'ordre.", answer: "2 2/3", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "-6 + 8 = 2, et 6/9 simplifié par 3 donne 2/3." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Révision : passé simple, subjonctif présent, forme passive, accord du participe passé",
      xpReward: 22,
      story: {
        hook: "Cette semaine, tu as découvert de nouveaux temps et modes très utiles. Résumons !",
        concreteExample: "Passé simple : elle rencontra. Subjonctif présent : il faut que tu ranges. Forme passive : le livre est lu. Accord du participe passé : les pommes que j'ai mangées.",
        reveal: "Chaque notion enrichit ta façon de raconter et de bien écrire.",
        bridgeToConcept: "Révisons : le passé simple, le subjonctif présent, la forme passive, l'accord du participe passé avec avoir.",
        illustrationEmoji: "🕰️"
      },
      examples: [
        {
          title: "Rappel passé simple et subjonctif",
          steps: [
            { text: "La petite fille rencontra un loup.", illustrationEmoji: "📖" },
            { text: "Il faut que tu ranges ta chambre.", illustrationEmoji: "🙏" }
          ]
        },
        {
          title: "Rappel forme passive et accord",
          steps: [
            { text: "Le colis est apporté par le facteur.", illustrationEmoji: "📦" },
            { text: "Les pommes que j'ai mangées étaient sucrées.", illustrationEmoji: "🍎" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète au passé simple : la princesse ____ (arriver) au château.", answer: "arriva", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Verbe en -er, 3e personne du singulier : arriva.", strictAccents: true },
        { order: 2, prompt: "Complète au subjonctif : il faut que tu ____ (ranger) ta chambre.", answer: "ranges", kindWhenWrong: "Pas grave, on regarde ça ensemble.", explanationWhenWrong: "Au subjonctif présent, avec tu, ranger devient ranges.", strictAccents: true },
        { order: 3, prompt: "Transforme à la forme passive : le facteur apporte le colis.", answer: "le colis est apporté par le facteur", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Le colis devient sujet passif : le colis est apporté par le facteur.", strictAccents: true },
        { order: 4, prompt: "Complète : les pommes que j'ai ____ (manger) étaient sucrées.", answer: "mangées", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Que (COD, remplaçant les pommes) est placé avant le verbe : accord au féminin pluriel, mangées.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : il faut que je ____ (être) à l'heure.",
          options: ["sois", "suis", "serai"],
          answer: "sois",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.",
          explanationWhenWrong: "Être est irrégulier au subjonctif ; avec je, on écrit sois.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux verbes. Les enfants ____ (jouer, passé simple) toute la journée, et j'ai ____ (voir) ce match à la télévision.", answer: "jouèrent vu", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble.", explanationWhenWrong: "Jouèrent (passé simple, 3e personne du pluriel des verbes en -er) et vu (participe passé de voir, sans accord car le COD ce match est après le verbe).", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Révision : pronoms personnels, déterminants, proposition relative, adverbe",
      xpReward: 22,
      story: {
        hook: "Cette semaine, tu as analysé encore de nombreux mots et propositions. Récapitulons !",
        concreteExample: "Les pronoms personnels, les déterminants, la proposition subordonnée relative, l'adverbe.",
        reveal: "Chaque notion t'aide à mieux construire et à mieux comprendre tes phrases.",
        bridgeToConcept: "Révisons : les pronoms personnels, les déterminants, la proposition subordonnée relative, l'adverbe.",
        illustrationEmoji: "🧩"
      },
      examples: [
        {
          title: "Rappel pronoms et déterminants",
          steps: [
            { text: "Paul lit un livre. Il le lit avec attention.", illustrationEmoji: "📖" },
            { text: "Le chat dort : le est un article défini.", illustrationEmoji: "🐱" }
          ]
        },
        {
          title: "Rappel proposition relative et adverbe",
          steps: [
            { text: "Le livre que je lis est passionnant.", illustrationEmoji: "🔗" },
            { text: "Elle chante bien.", illustrationEmoji: "🎶" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans Paul lit un livre. Il le lit avec attention, que remplace le pronom il ?", answer: "Paul", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Il remplace le sujet Paul : c'est un pronom personnel sujet." },
        { order: 2, prompt: "Dans le chat dort sur le tapis, quel type de déterminant est le ?", answer: "un article défini", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Le est un article défini, il introduit un nom connu ou précis." },
        { order: 3, prompt: "Dans le livre que je lis est passionnant, quelle est la proposition subordonnée relative ?", answer: "que je lis", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Que je lis est introduite par le pronom relatif que : c'est la proposition subordonnée relative." },
        { order: 4, prompt: "Dans elle chante bien, quel est l'adverbe ?", answer: "bien", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Bien précise comment elle chante : c'est un adverbe qui complète le verbe." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : dans ces enfants jouent, ces est...",
          options: ["un déterminant démonstratif", "un article défini", "un pronom personnel"],
          answer: "un déterminant démonstratif",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Ces montre les enfants du doigt, au pluriel : c'est un déterminant démonstratif."
        },
        { order: 6, prompt: "Défi : dans mon frère aime les gâteaux et il les mange toujours sérieusement, cite le pronom complément puis l'adverbe, dans l'ordre.", answer: "les sérieusement", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Les remplace le complément les gâteaux (pronom personnel complément), sérieusement précise le verbe mange (adverbe)." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Révision : ou/où, ces/ses, tout/tous/toute/toutes, la/l'a/l'as/là",
      xpReward: 22,
      story: {
        hook: "Cette semaine, tu as croisé encore beaucoup de mots jumeaux. Récapitulons les tests appris !",
        concreteExample: "Ou/où, ces/ses, tout/tous/toute/toutes, la/l'a/l'as/là.",
        reveal: "Chaque paire a son test précis : ou bien pour ou, ce...-là pour ces, l'accord pour tout, l'avait pour l'a.",
        bridgeToConcept: "Utilise toujours le test appris pour choisir la bonne orthographe.",
        illustrationEmoji: "🧠"
      },
      examples: [
        {
          title: "Rappel ou/où et ces/ses",
          steps: [
            { text: "Tu préfères le thé ou le café ? (choix)", illustrationEmoji: "☕" },
            { text: "Elle range ses affaires (possessif).", illustrationEmoji: "👟" }
          ]
        },
        {
          title: "Rappel tout et la/l'a",
          steps: [
            { text: "Tous les enfants sont arrivés (masculin pluriel).", illustrationEmoji: "🍰" },
            { text: "Il l'a vue hier (verbe avoir).", illustrationEmoji: "📍" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : tu préfères le thé ___ le café ? (ou/où)", answer: "ou", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "On peut dire ou bien : c'est le choix ou, sans accent.", strictAccents: true },
        { order: 2, prompt: "Complète : elle range ___ affaires avant de partir. (ces/ses)", answer: "ses", kindWhenWrong: "Pas grave, on regarde ça ensemble.", explanationWhenWrong: "On peut remplacer par son affaire au singulier : c'est le possessif ses.", strictAccents: true },
        { order: 3, prompt: "Complète : ___ les enfants sont arrivés. (tout/tous/toute/toutes)", answer: "tous", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Enfants est masculin pluriel, donc on écrit tous.", strictAccents: true },
        { order: 4, prompt: "Complète : il ___ vue hier au marché. (la/l'a/l'as/là)", answer: "l'a", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "On peut dire il l'avait vue : c'est le verbe avoir, l'a, avec une apostrophe.", strictAccents: true },
        { order: 5, prompt: "Complète : ___ habites-tu exactement ? (ou/où)", answer: "où", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Ça indique un lieu, jamais remplaçable par ou bien : où, avec un accent grave.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les trois mots. ___ (ces) fleurs sont ___ (là), sur la table, et ___ (toute) la classe les admire.", answer: "ces là toute", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble.", explanationWhenWrong: "Ces fleurs (démonstratif, remplaçable par ces fleurs-là), là (lieu, remplaçable par ici), toute la classe (féminin singulier).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Révision : multiplier par 9, diviser par 4, dizaines rondes, multiplier par 20-30-40",
      xpReward: 22,
      story: {
        hook: "Cette semaine, tu as musclé ton cerveau avec de nouvelles astuces. Faisons le point !",
        concreteExample: "7 x 9 = 63, 48 divisé par 4 = 12, 47 + 30 = 77, 6 x 30 = 180. Tu deviens un champion du calcul mental !",
        reveal: "Ces automatismes te seront très utiles au collège.",
        bridgeToConcept: "Révisons ensemble : multiplier par 9, diviser par 4, additionner/soustraire des dizaines rondes, multiplier par 20, 30 et 40.",
        illustrationEmoji: "⚡"
      },
      examples: [
        {
          title: "Rappel x9 et diviser par 4",
          steps: [
            { text: "8 x 9 : 8 x 10 = 80, puis 80 - 8 = 72.", illustrationEmoji: "✨" },
            { text: "36 divisé par 4 = 9.", illustrationEmoji: "➗" }
          ]
        },
        {
          title: "Rappel dizaines rondes et x20-30-40",
          steps: [
            { text: "63 - 20 = 43.", illustrationEmoji: "🔟" },
            { text: "8 x 30 = 240.", illustrationEmoji: "🔍" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 7 x 9", answer: "63", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "7 x 10 = 70, puis 70 - 7 = 63." },
        { order: 2, prompt: "Calcule : 48 divisé par 4", answer: "12", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "48 divisé par 2 = 24, puis 24 divisé par 2 = 12." },
        { order: 3, prompt: "Calcule : 47 + 30", answer: "77", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On ajoute 3 aux dizaines : 47 + 30 = 77." },
        { order: 4, prompt: "Calcule : 6 x 30", answer: "180", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "6 x 3 = 18, puis on ajoute un zéro : 180." },
        { order: 5, prompt: "Calcule : 63 - 20", answer: "43", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "On retire 2 aux dizaines : 63 - 20 = 43." },
        { order: 6, prompt: "Défi : calcule 8 x 9, puis divise le résultat par 4. Quel est le résultat final ?", answer: "18", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "8 x 9 = 72, puis 72 divisé par 4 = 18." }
      ]
    }
  ]
};
