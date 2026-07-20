import { DayCurriculum } from "@/models/types";

export const day13: DayCurriculum = {
  dayNumber: 13,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Les nombres relatifs",
      xpReward: 20,
      story: {
        hook: "Imagine un thermomètre qui affiche des températures en dessous de zéro.",
        concreteExample: "Il fait -3°C ce matin, puis la température monte de 5 degrés. Quelle température fait-il maintenant ?",
        reveal: "-3 + 5 = 2. Les nombres relatifs incluent les nombres négatifs (avec un signe -) et positifs (avec ou sans signe +).",
        bridgeToConcept: "Un nombre relatif est précédé d'un signe + (positif) ou - (négatif). Sur une droite graduée, les négatifs sont à gauche de zéro, les positifs à droite.",
        illustrationEmoji: "🌡️"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "-5 est plus petit que -2, car -5 est plus loin à gauche de zéro.", illustrationEmoji: "🔢" },
            { text: "-2 + 4 = 2 (on avance de 4 depuis -2).", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "0 est plus grand que -3, mais plus petit que 3.", illustrationEmoji: "🔍" },
            { text: "-10 + 10 = 0.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Quelle température fait-il si -3°C monte de 5 degrés ?", answer: "2", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "-3 + 5 = 2." },
        { order: 2, prompt: "Quel est le plus petit nombre entre -5 et -2 ?", answer: "-5", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "-5 est plus loin à gauche de zéro que -2, donc -5 est plus petit." },
        { order: 3, prompt: "Calcule : -2 + 4", answer: "2", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "-2 + 4 = 2 (on avance de 4 depuis -2)." },
        { order: 4, prompt: "Quel est le plus grand nombre entre 0 et -3 ?", answer: "0", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "0 est toujours plus grand que tout nombre négatif." },
        { order: 5, prompt: "Calcule : -10 + 10", answer: "0", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "-10 + 10 = 0." },
        { order: 6, prompt: "Défi : il fait -6°C, puis la température monte de 8 degrés. Quelle température fait-il maintenant ?", answer: "2", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "-6 + 8 = 2." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "La forme passive",
      xpReward: 20,
      story: {
        hook: "Imagine une phrase où ce n'est plus le sujet qui fait l'action, mais qui la subit.",
        concreteExample: "Écoute : le chat mange la souris (forme active). La souris est mangée par le chat (forme passive). Quelle différence ?",
        reveal: "À la forme passive, le sujet subit l'action au lieu de la faire. Elle se forme avec être + participe passé, suivi de par + celui qui fait l'action.",
        bridgeToConcept: "Forme passive = être (conjugué) + participe passé + par + agent. Le participe passé s'accorde toujours avec le sujet.",
        illustrationEmoji: "🐭"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "Le facteur apporte le colis (active) → le colis est apporté par le facteur (passive).", illustrationEmoji: "📦" },
            { text: "Les enfants lisent le livre (active) → le livre est lu par les enfants (passive).", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Marie a peint ce tableau (active) → ce tableau a été peint par Marie (passive).", illustrationEmoji: "🎨" },
            { text: "Le participe passé peint s'accorde avec tableau, masculin singulier.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Transforme à la forme passive : le chat mange la souris.", answer: "la souris est mangée par le chat", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "À la forme passive, le sujet la souris subit l'action : la souris est mangée par le chat.", strictAccents: true },
        { order: 2, prompt: "Transforme à la forme passive : le facteur apporte le colis.", answer: "le colis est apporté par le facteur", kindWhenWrong: "Pas grave, on regarde ça ensemble.", explanationWhenWrong: "Le colis devient sujet passif : le colis est apporté par le facteur.", strictAccents: true },
        { order: 3, prompt: "Dans le livre est lu par les enfants, quel est le sujet qui subit l'action ?", answer: "le livre", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Le livre subit l'action de lire : c'est le sujet de la phrase passive.", strictAccents: true },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne réponse à la forme passive : ce tableau ____ peint par Marie.",
          options: ["a été", "a", "était peint par"],
          answer: "a été",
          kindWhenWrong: "Pas grave du tout, on y retourne ensemble.",
          explanationWhenWrong: "La forme passive au passé composé se construit avec l'auxiliaire être conjugué avec avoir, suivi du participe passé : a été peint.",
          strictAccents: true
        },
        { order: 5, prompt: "Transforme à la forme passive : les enfants lisent le livre.", answer: "le livre est lu par les enfants", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Le livre devient sujet passif : le livre est lu par les enfants.", strictAccents: true },
        { order: 6, prompt: "Défi : transforme à la forme passive : le vent a renversé l'arbre.", answer: "l'arbre a été renversé par le vent", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble.", explanationWhenWrong: "L'arbre devient sujet passif, avec l'auxiliaire être au passé composé : l'arbre a été renversé par le vent.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "La proposition subordonnée relative",
      xpReward: 20,
      story: {
        hook: "Imagine une petite proposition qui vient donner plus d'informations sur un nom, introduite par qui, que, où ou dont.",
        concreteExample: "Regarde : le livre que je lis est passionnant. Que apporte que je lis ?",
        reveal: "Que je lis est une proposition subordonnée relative : elle complète le nom livre et est introduite par le pronom relatif que.",
        bridgeToConcept: "La proposition subordonnée relative complète un nom et commence par un pronom relatif : qui (sujet), que (COD), où (lieu/temps), dont (de qui/de quoi).",
        illustrationEmoji: "🔗"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "Le garçon qui court vite est mon voisin : qui remplace le garçon, sujet du verbe court.", illustrationEmoji: "🏃" },
            { text: "La maison où j'habite est grande : où indique le lieu.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Le livre dont je parle est passionnant : dont remplace de ce livre.", illustrationEmoji: "📚" },
            { text: "La proposition relative apporte une précision sur le nom qui la précède.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans le livre que je lis est passionnant, quelle est la proposition subordonnée relative ?", answer: "que je lis", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Que je lis est introduite par le pronom relatif que : c'est la proposition subordonnée relative." },
        { order: 2, prompt: "Dans le garçon qui court vite est mon voisin, quel pronom relatif introduit la proposition ?", answer: "qui", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Qui remplace le garçon et est sujet du verbe court : c'est le pronom relatif." },
        { order: 3, prompt: "Dans la maison où j'habite est grande, que remplace le pronom où ?", answer: "la maison", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Où remplace la maison et indique le lieu." },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne réponse : dans le livre dont je parle est passionnant, dont remplace...",
          options: ["de ce livre", "ce livre", "à ce livre"],
          answer: "de ce livre",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Dont remplace un complément introduit par de : ici, je parle de ce livre."
        },
        { order: 5, prompt: "Dans le repas que ma mère prépare sent très bon, quelle est la proposition subordonnée relative ?", answer: "que ma mère prépare", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Que ma mère prépare complète le nom repas et est introduite par le pronom relatif que." },
        { order: 6, prompt: "Défi : dans le chien qui aboie appartient à ma voisine dont le jardin est fleuri, cite les deux propositions subordonnées relatives, dans l'ordre.", answer: "qui aboie dont le jardin est fleuri", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Qui aboie complète chien (sujet), dont le jardin est fleuri complète ma voisine (introduite par dont)." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Tout, tous, toute, toutes",
      xpReward: 20,
      story: {
        hook: "Imagine un mot qui change souvent d'habit selon le genre et le nombre du nom qu'il accompagne.",
        concreteExample: "Regarde : ___ les enfants sont arrivés. Est-ce que c'est tout, tous, toute ou toutes ?",
        reveal: "Tous s'accorde au masculin pluriel avec enfants. Tout (masculin singulier), toute (féminin singulier), toutes (féminin pluriel) s'accordent de la même façon avec le nom qu'ils accompagnent.",
        bridgeToConcept: "Tout/tous/toute/toutes s'accordent en genre et en nombre avec le nom qu'ils accompagnent : tout le gâteau, tous les gâteaux, toute la tarte, toutes les tartes.",
        illustrationEmoji: "🍰"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "Tout le gâteau a disparu : masculin singulier.", illustrationEmoji: "🎂" },
            { text: "Tous les gâteaux ont disparu : masculin pluriel.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Toute la tarte est mangée : féminin singulier.", illustrationEmoji: "🥧" },
            { text: "Toutes les tartes sont mangées : féminin pluriel.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : ___ les enfants sont arrivés. (tout/tous/toute/toutes)", answer: "tous", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Enfants est masculin pluriel, donc on écrit tous.", strictAccents: true },
        { order: 2, prompt: "Complète : ___ la classe a applaudi. (tout/tous/toute/toutes)", answer: "toute", kindWhenWrong: "Pas grave, on regarde ça ensemble.", explanationWhenWrong: "Classe est féminin singulier, donc on écrit toute.", strictAccents: true },
        { order: 3, prompt: "Complète : ___ le gâteau a disparu. (tout/tous/toute/toutes)", answer: "tout", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Gâteau est masculin singulier, donc on écrit tout.", strictAccents: true },
        { order: 4, prompt: "Complète : ___ les filles chantent bien. (tout/tous/toute/toutes)", answer: "toutes", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Filles est féminin pluriel, donc on écrit toutes.", strictAccents: true },
        { order: 5, prompt: "Complète : ___ la nuit, il a plu. (tout/tous/toute/toutes)", answer: "toute", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Nuit est féminin singulier, donc on écrit toute.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. ___ (tous) les élèves ont fini ___ (toutes) leurs lectures.", answer: "tous toutes", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble.", explanationWhenWrong: "Élèves est masculin pluriel (tous), lectures est féminin pluriel (toutes).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Additionner et soustraire des dizaines rondes",
      xpReward: 20,
      story: {
        hook: "Imagine que tu calcules très vite des sommes avec des dizaines rondes, sans poser l'opération.",
        concreteExample: "Tu as 47 billes, puis tu en gagnes 30 de plus. Combien en as-tu maintenant ?",
        reveal: "47 + 30 = 77. On ajoute simplement 3 aux dizaines : 4 devient 7.",
        bridgeToConcept: "Pour additionner ou soustraire une dizaine ronde, on modifie seulement le chiffre des dizaines, les unités ne changent pas.",
        illustrationEmoji: "🔟"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "63 - 20 = 43 : on retire 2 aux dizaines, 6 devient 4.", illustrationEmoji: "🔢" },
            { text: "58 + 30 = 88 : on ajoute 3 aux dizaines, 5 devient 8.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "72 - 40 = 32.", illustrationEmoji: "🔍" },
            { text: "26 + 50 = 76.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 47 + 30", answer: "77", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On ajoute 3 aux dizaines : 47 + 30 = 77." },
        { order: 2, prompt: "Calcule : 63 - 20", answer: "43", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "On retire 2 aux dizaines : 63 - 20 = 43." },
        { order: 3, prompt: "Calcule : 58 + 30", answer: "88", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On ajoute 3 aux dizaines : 58 + 30 = 88." },
        { order: 4, prompt: "Calcule : 72 - 40", answer: "32", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "On retire 4 aux dizaines : 72 - 40 = 32." },
        { order: 5, prompt: "Calcule : 26 + 50", answer: "76", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "On ajoute 5 aux dizaines : 26 + 50 = 76." },
        { order: 6, prompt: "Défi : calcule 84 - 60, puis ajoute 30 au résultat. Quel est le résultat final ?", answer: "54", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "84 - 60 = 24, puis 24 + 30 = 54." }
      ]
    }
  ]
};
