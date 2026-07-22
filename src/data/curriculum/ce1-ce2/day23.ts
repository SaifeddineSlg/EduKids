import { DayCurriculum } from "@/models/types";

export const day23: DayCurriculum = {
  dayNumber: 23,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "La division posée avec reste",
      xpReward: 22,
      story: {
        hook: "Tu sais déjà calculer une division avec reste de tête. Aujourd'hui, apprenons à la poser en colonne.",
        concreteExample: "Pose la division 57 : 4.",
        reveal: "Combien de fois 4 dans 5 ? 1 fois (4), il reste 1. On abaisse le 7 : on obtient 17. Combien de fois 4 dans 17 ? 4 fois (16), il reste 1. Le quotient est 14 et le reste est 1. Bravo, tu as posé une division avec reste !",
        bridgeToConcept: "Pour poser une division avec reste, on cherche combien de fois le diviseur tient dans chaque partie du nombre, en abaissant les chiffres un par un.",
        illustrationEmoji: "➗"
      },
      examples: [
        {
          title: "Poser une division avec reste",
          steps: [
            { text: "57 : 4 : combien de fois 4 dans 5 ? 1 fois (4), reste 1.", illustrationEmoji: "🔢" },
            { text: "On abaisse le 7 : on obtient 17. Combien de fois 4 dans 17 ? 4 fois (16), reste 1. Quotient : 14, reste 1.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "75 : 6 : combien de fois 6 dans 7 ? 1 fois (6), reste 1.", illustrationEmoji: "🔢" },
            { text: "On abaisse le 5 : on obtient 15. Combien de fois 6 dans 15 ? 2 fois (12), reste 3. Quotient : 12, reste 3.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Pose et calcule : 58 : 4 (donne le quotient et le reste)", answer: "14 reste 2", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "4 tient 1 fois dans 5 (reste 1), puis 4 tient 4 fois dans 18 (16, reste 2) : quotient 14, reste 2." },
        { order: 2, prompt: "Pose et calcule : 67 : 5", answer: "13 reste 2", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "5 tient 1 fois dans 6 (reste 1), puis 5 tient 3 fois dans 17 (15, reste 2) : quotient 13, reste 2." },
        { order: 3, prompt: "Pose et calcule : 49 : 3", answer: "16 reste 1", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "3 tient 1 fois dans 4 (reste 1), puis 3 tient 6 fois dans 19 (18, reste 1) : quotient 16, reste 1." },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis le bon résultat de 77 : 6.",
          options: ["12 reste 5", "13 reste 5", "12 reste 6"],
          answer: "12 reste 5",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "6 tient 1 fois dans 7 (reste 1), puis 6 tient 2 fois dans 17 (12, reste 5) : quotient 12, reste 5."
        },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le bon résultat de 86 : 7.",
          options: ["12 reste 2", "11 reste 9", "12 reste 3"],
          answer: "12 reste 2",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "7 tient 1 fois dans 8 (reste 1), puis 7 tient 2 fois dans 16 (14, reste 2) : quotient 12, reste 2."
        },
        { order: 6, prompt: "Défi : pose et calcule 95 : 8.", answer: "11 reste 7", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "8 tient 1 fois dans 9 (reste 1), puis 8 tient 1 fois dans 15 (8, reste 7) : quotient 11, reste 7." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le passé composé avec être, verbes en -ir comme partir et sortir",
      xpReward: 22,
      story: {
        hook: "Certains verbes en -ir qui montrent un déplacement utilisent être, et non avoir, au passé composé.",
        concreteExample: "Écoute : Elle est partie tôt ce matin. Ils sont sortis dans le jardin. Que remarques-tu à la fin du participe passé ?",
        reveal: "À quoi ça sert ? À parler d'une action passée de déplacement, comme partir ou sortir. Comment le reconnaître ? On utilise être, et le participe passé s'accorde en genre et en nombre avec le sujet : parti, partie, partis, parties.",
        bridgeToConcept: "Passé composé avec être : le participe passé s'accorde avec le sujet : il est parti, elle est partie, ils sont partis, elles sont parties.",
        illustrationEmoji: "🚪"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Elle est partie tôt ce matin.", illustrationEmoji: "🌅" },
            { text: "Ils sont sortis dans le jardin.", illustrationEmoji: "🌳" }
          ]
        },
        {
          title: "Attention à l'erreur fréquente",
          steps: [
            { text: "Beaucoup d'enfants oublient d'accorder le participe passé : elle est parti est une erreur !", illustrationEmoji: "❌" },
            { text: "Avec être, le participe passé s'accorde avec le sujet : elle est partie, avec un e.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Elle ____ (partir) en vacances hier.", answer: "est partie", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Elle est le sujet, féminin singulier : le participe passé s'accorde, elle est partie.", strictAccents: true },
        { order: 2, prompt: "Complète : Ils ____ (sortir) dans la cour pour jouer.", answer: "sont sortis", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "Ils est le sujet, masculin pluriel : le participe passé s'accorde, ils sont sortis.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Nous ____ (partir), Camille et moi.",
          options: ["sommes partis", "avons parti", "sommes parti"],
          answer: "sommes partis",
          kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.",
          explanationWhenWrong: "Partir se conjugue avec être, et le participe passé s'accorde avec le sujet pluriel : sommes partis.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Elles ____ (sortir) sous la pluie.", answer: "sont sorties", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Elles est le sujet, féminin pluriel : le participe passé s'accorde, elles sont sorties.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Tu ____ (partir) trop tôt, Léa.",
          options: ["es partie", "as parti", "es parti"],
          answer: "es partie",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.",
          explanationWhenWrong: "Léa est une fille : le participe passé s'accorde au féminin, tu es partie.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Paul ____ (partir) le premier et ses sœurs ____ (sortir) juste après.", answer: "est parti sont sorties", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "Paul est masculin singulier : est parti ; ses sœurs est féminin pluriel : sont sorties.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Les synonymes",
      xpReward: 22,
      story: {
        hook: "Imagine deux mots différents qui veulent dire presque la même chose.",
        concreteExample: "Regarde : content et heureux. Que remarques-tu sur leur sens ?",
        reveal: "À quoi servent-ils ? Les synonymes permettent d'enrichir son vocabulaire et d'éviter de répéter toujours le même mot. Comment les reconnaître ? Deux mots sont synonymes quand ils ont un sens proche et qu'on peut souvent les remplacer l'un par l'autre dans une phrase.",
        bridgeToConcept: "Les synonymes sont des mots différents qui ont un sens proche : content et heureux, grand et immense.",
        illustrationEmoji: "📚"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Content et heureux sont synonymes : Je suis content = Je suis heureux.", illustrationEmoji: "😊" },
            { text: "Grand et immense sont synonymes : une grande maison = une maison immense.", illustrationEmoji: "🏠" }
          ]
        },
        {
          title: "L'astuce pour trouver un synonyme",
          steps: [
            { text: "Cherche un mot qui garde presque le même sens dans la phrase.", illustrationEmoji: "🔍" },
            { text: "Essaie de remplacer le mot : si la phrase garde son sens, c'est un synonyme.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Trouve un synonyme du mot content.", answer: "heureux", acceptedAnswers: ["joyeux"], kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Content et heureux ont le même sens : ce sont des synonymes." },
        { order: 2, prompt: "Trouve un synonyme du mot grand.", answer: "immense", acceptedAnswers: ["énorme"], kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Grand et immense ont un sens proche : ce sont des synonymes." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis le synonyme du mot joli.",
          options: ["laid", "beau", "triste"],
          answer: "beau",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Joli et beau ont le même sens : ce sont des synonymes."
        },
        { order: 4, prompt: "Trouve un synonyme du mot petit.", answer: "minuscule", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Petit et minuscule ont un sens proche : ce sont des synonymes." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le synonyme du mot rapide.",
          options: ["lent", "vite", "triste"],
          answer: "vite",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Rapide et vite expriment tous les deux une grande vitesse : ce sont des synonymes."
        },
        { order: 6, prompt: "Défi : trouve les synonymes des mots peur et fatigué.", answer: "crainte épuisé", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Crainte est un synonyme de peur, et épuisé est un synonyme de fatigué." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Peu, peux ou peut : le test avec beaucoup",
      xpReward: 22,
      story: {
        hook: "Trois petits mots se prononcent pareil : peu, peux et peut. Apprenons à ne plus les confondre.",
        concreteExample: "Regarde : Il mange peu le matin. Tu peux venir avec moi. Elle peut chanter. Comment les distinguer ?",
        reveal: "À quoi sert cette distinction ? Peu est un adverbe de quantité, le contraire de beaucoup. Peux et peut sont des formes du verbe pouvoir. Comment le reconnaître ? Si on peut remplacer par beaucoup, c'est peu. Si le mot est une forme de pouvoir (avec tu ou il/elle), c'est peux ou peut.",
        bridgeToConcept: "Peu (adverbe, contraire de beaucoup) ; peux (avec tu, verbe pouvoir) ; peut (avec il/elle, verbe pouvoir).",
        illustrationEmoji: "🔍"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Il mange peu le matin : on peut dire il mange beaucoup, donc peu.", illustrationEmoji: "🍳" },
            { text: "Tu peux venir avec moi : on peut dire tu pouvais venir, donc peux.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Si tu peux dire beaucoup à la place, c'est peu.", illustrationEmoji: "🔍" },
            { text: "Si c'est une forme du verbe pouvoir avec tu ou il/elle, c'est peux ou peut.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Elle dort ___ la nuit. (peu/peux/peut)", answer: "peu", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "On peut dire elle dort beaucoup la nuit, donc on écrit peu.", strictAccents: true },
        { order: 2, prompt: "Complète : Tu ___ (pouvoir) rester dîner. (peu/peux/peut)", answer: "peux", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "Avec tu, pouvoir devient peux, avec un x à la fin.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis le bon mot : Il ___ (pouvoir) résoudre ce problème.",
          options: ["peu", "peux", "peut"],
          answer: "peut",
          kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.",
          explanationWhenWrong: "Avec il, pouvoir devient peut, avec un t à la fin.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Ce gâteau est ___ sucré. (peu/peux/peut)", answer: "peu", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "On peut dire ce gâteau est beaucoup sucré, donc on écrit peu.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le bon mot : Tu ___ (pouvoir) m'aider un peu ?",
          options: ["peu", "peux", "peut"],
          answer: "peux",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.",
          explanationWhenWrong: "Avec tu, pouvoir devient peux, avec un x à la fin.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les trois mots. Il mange ___ le soir, mais il ___ (pouvoir) manger plus s'il a faim, et toi, tu ___ (pouvoir) manger autant que tu veux.", answer: "peu peut peux", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "Peu est l'adverbe de quantité, peut est la forme de pouvoir avec il, et peux est la forme de pouvoir avec tu.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Trouver le complément à la dizaine supérieure",
      xpReward: 22,
      story: {
        hook: "Imagine une astuce pour trouver rapidement ce qu'il manque pour arriver à la dizaine ronde suivante.",
        concreteExample: "Tu as 27 billes. Combien dois-tu en gagner pour arriver à 30 ?",
        reveal: "On regarde le chiffre des unités, 7, et on cherche ce qu'il manque pour atteindre 10 : il manque 3. 27 + 3 = 30. Bravo, tu as trouvé le complément à la dizaine !",
        bridgeToConcept: "Pour trouver le complément à la dizaine supérieure, on cherche ce qu'il manque au chiffre des unités pour atteindre 10.",
        illustrationEmoji: "🧮"
      },
      examples: [
        {
          title: "Trouver le complément à la dizaine",
          steps: [
            { text: "27 + 3 = 30 : le complément de 27 est 3.", illustrationEmoji: "➕" },
            { text: "44 + 6 = 50 : le complément de 44 est 6.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Encore un exemple",
          steps: [
            { text: "58 + 2 = 60 : le complément de 58 est 2.", illustrationEmoji: "➕" },
            { text: "83 + 7 = 90 : le complément de 83 est 7.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Combien faut-il ajouter à 34 pour arriver à 40 ?", answer: "6", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "34 + 6 = 40 : il faut ajouter 6." },
        { order: 2, prompt: "Combien faut-il ajouter à 62 pour arriver à 70 ?", answer: "8", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "62 + 8 = 70 : il faut ajouter 8." },
        { order: 3, prompt: "Combien faut-il ajouter à 45 pour arriver à 50 ?", answer: "5", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "45 + 5 = 50 : il faut ajouter 5." },
        { order: 4, prompt: "Combien faut-il ajouter à 79 pour arriver à 80 ?", answer: "1", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "79 + 1 = 80 : il faut ajouter 1." },
        { order: 5, prompt: "Combien faut-il ajouter à 91 pour arriver à 100 ?", answer: "9", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "91 + 9 = 100 : il faut ajouter 9." },
        { order: 6, prompt: "Défi : combien faut-il ajouter à 156 pour arriver à 160 ?", answer: "4", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "156 + 4 = 160 : il faut ajouter 4." }
      ]
    }
  ]
};
