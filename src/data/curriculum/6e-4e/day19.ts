import { DayCurriculum } from "@/models/types";

export const day19: DayCurriculum = {
  dayNumber: 19,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Le volume d'un pavé droit",
      xpReward: 24,
      story: {
        hook: "Après l'aire d'une surface plane, découvrons comment mesurer l'espace occupé par une boîte en trois dimensions : le volume.",
        concreteExample: "Une boîte a une longueur de 4 cm, une largeur de 3 cm et une hauteur de 5 cm. Quel est son volume ?",
        reveal: "Le volume d'un pavé droit est toujours égal à longueur x largeur x hauteur. Ici, 4 x 3 x 5 = 60. Le volume de la boîte est donc 60 cm³. Bravo, tu as calculé un volume !",
        bridgeToConcept: "Le volume d'un pavé droit se calcule avec la formule longueur x largeur x hauteur, et s'exprime en unités cubes, comme cm³ ou m³.",
        illustrationEmoji: "📦"
      },
      examples: [
        {
          title: "Exemple 1 : longueur 2 cm, largeur 3 cm, hauteur 4 cm",
          steps: [
            { text: "2 x 3 = 6.", illustrationEmoji: "✖️" },
            { text: "6 x 4 = 24. Le volume est 24 cm³.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : un cube de 3 cm de côté",
          steps: [
            { text: "Un cube est un pavé droit dont les trois dimensions sont égales.", illustrationEmoji: "🟦" },
            { text: "3 x 3 x 3 = 27. Le volume est 27 cm³.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule le volume d'un pavé droit de longueur 5 cm, largeur 2 cm et hauteur 3 cm.", answer: "30", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "5 x 2 x 3 = 30 cm³." },
        { order: 2, prompt: "Calcule le volume d'un cube de 4 cm de côté.", answer: "64", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "4 x 4 x 4 = 64 cm³." },
        { order: 3, prompt: "Calcule le volume d'un pavé droit de longueur 6 cm, largeur 4 cm et hauteur 2 cm.", answer: "48", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "6 x 4 x 2 = 48 cm³." },
        { order: 4, prompt: "Calcule le volume d'un cube de 5 cm de côté.", answer: "125", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "5 x 5 x 5 = 125 cm³." },
        { order: 5, prompt: "Calcule le volume d'un pavé droit de longueur 10 cm, largeur 3 cm et hauteur 3 cm.", answer: "90", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "10 x 3 x 3 = 90 cm³." },
        { order: 6, prompt: "Défi : un pavé droit a un volume de 60 cm³, une longueur de 5 cm et une largeur de 4 cm. Quelle est sa hauteur ?", answer: "3", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "5 x 4 = 20, puis le volume 60 divisé par 20 donne la hauteur : 60 / 20 = 3 cm." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le participe présent et le gérondif",
      xpReward: 24,
      story: {
        hook: "Il existe une forme du verbe qui se termine toujours par -ant et qui ne change jamais selon la personne : le participe présent.",
        concreteExample: "Écoute : en chantant, en finissant, en marchant. Ces formes en -ant précisent souvent comment se passe une autre action.",
        reveal: "À quoi sert cette forme ? Le participe présent (chantant) décrit une action, et précédé de en, il forme le gérondif (en chantant), qui indique comment ou pendant quand se déroule l'action principale. Comment le former ? On part du radical de nous au présent, et on ajoute -ant. Bravo, tu as découvert le participe présent et le gérondif !",
        bridgeToConcept: "Le participe présent se forme avec le radical de nous au présent + -ant (nous chantons -> chantant). Précédé de en, il devient un gérondif : en chantant.",
        illustrationEmoji: "🎬"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Elle chante en marchant dans la rue.", illustrationEmoji: "🚶" },
            { text: "Il a réussi son exercice en réfléchissant bien.", illustrationEmoji: "🧠" },
            { text: "Nous avons ri en regardant ce film.", illustrationEmoji: "😄" }
          ]
        },
        {
          title: "Attention à l'erreur fréquente",
          steps: [
            { text: "Beaucoup d'élèves écrivent « en chantant » sans le e devant en, ou oublient le -ant à la fin du verbe. C'est une erreur !", illustrationEmoji: "❌" },
            { text: "Le gérondif s'écrit toujours en + verbe en -ant, sans exception : en chantant, en finissant.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper, et le résumé",
          steps: [
            { text: "Astuce : pense à la question comment ? ou pendant quand ? pour repérer un gérondif : elle chante en marchant (comment ? en marchant).", illustrationEmoji: "🧭" },
            { text: "Résumé : le participe présent se forme avec le radical de nous et -ant, et devient un gérondif quand il est précédé de en.", illustrationEmoji: "📝" }
          ]
        }
      ],
      questions: [
        {
          order: 1,
          type: "input",
          prompt: "Forme le participe présent du verbe chanter (à partir de nous chantons).",
          answer: "chantant",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "On part du radical de nous chantons et on ajoute -ant : chantant.",
          strictAccents: true
        },
        {
          order: 2,
          type: "input",
          prompt: "Complète avec le gérondif : Elle apprend sa leçon ____ (chanter).",
          answer: "en chantant",
          kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.",
          explanationWhenWrong: "Le gérondif se forme avec en et le participe présent chantant : en chantant.",
          strictAccents: true
        },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis le bon participe présent du verbe finir.",
          options: ["finissant", "finant", "finiant"],
          answer: "finissant",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "On part du radical de nous finissons et on ajoute -ant : finissant, avec le -iss- du groupe.",
          strictAccents: true
        },
        {
          order: 4,
          type: "input",
          prompt: "Complète avec le gérondif : Il s'est blessé ____ (courir).",
          answer: "en courant",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Le radical de nous courons donne le participe présent courant, précédé de en : en courant.",
          strictAccents: true
        },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le bon gérondif pour le verbe manger : Il grossit ____.",
          options: ["en mangeant", "en mangant", "en manger"],
          answer: "en mangeant",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Le verbe manger garde son e devant le a pour conserver le son doux du g : en mangeant.",
          strictAccents: true
        },
        {
          order: 6,
          type: "match",
          prompt: "Défi : associe chaque verbe à son gérondif.",
          answer: "lire = en lisant ; voir = en voyant ; faire = en faisant",
          matchPairs: [
            { left: "lire", right: "en lisant" },
            { left: "voir", right: "en voyant" },
            { left: "faire", right: "en faisant" }
          ],
          kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.",
          explanationWhenWrong: "en lisant (de nous lisons), en voyant (de nous voyons), en faisant (de nous faisons) : chaque gérondif se forme à partir du radical de nous au présent.",
          strictAccents: true
        }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "La proposition subordonnée circonstancielle de cause et de conséquence",
      xpReward: 24,
      story: {
        hook: "Une phrase peut expliquer pourquoi quelque chose se passe, ou quel résultat cela entraîne, grâce à une proposition subordonnée reliée par un mot précis.",
        concreteExample: "Regarde : Il reste à la maison parce qu'il pleut. Il pleut tellement fort qu'il reste à la maison.",
        reveal: "parce qu'il pleut explique la cause (pourquoi ?) ; qu'il reste à la maison exprime la conséquence (quel résultat ?). Bravo, tu as trouvé la cause et la conséquence !",
        bridgeToConcept: "La proposition subordonnée de cause répond à pourquoi (introduite par parce que, car, comme). La proposition subordonnée de conséquence indique un résultat (introduite par si... que, tellement... que, donc).",
        illustrationEmoji: "⚙️"
      },
      examples: [
        {
          title: "Exemple 1 : Comme il fait froid, elle met un manteau.",
          steps: [
            { text: "Comme il fait froid explique la cause.", illustrationEmoji: "🥶" },
            { text: "C'est une proposition subordonnée de cause.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : Elle est si fatiguée qu'elle s'endort tout de suite.",
          steps: [
            { text: "qu'elle s'endort tout de suite exprime la conséquence.", illustrationEmoji: "😴" },
            { text: "C'est une proposition subordonnée de conséquence.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans il reste chez lui car il est malade, quelle est la proposition subordonnée de cause ?", answer: "car il est malade", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "car il est malade explique pourquoi il reste chez lui, c'est la proposition subordonnée de cause." },
        { order: 2, prompt: "Dans il a tellement couru qu'il est essoufflé, quelle est la proposition subordonnée de conséquence ?", answer: "qu'il est essoufflé", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "qu'il est essoufflé indique le résultat de sa course, c'est la proposition subordonnée de conséquence." },
        { order: 3, prompt: "Dans comme elle est en retard, elle court vite, quel mot introduit la cause ?", answer: "comme", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "comme introduit ici la cause : c'est parce qu'elle est en retard qu'elle court vite." },
        { order: 4, prompt: "Dans elle travaille bien parce qu'elle aime apprendre, quelle est la proposition subordonnée de cause ?", answer: "parce qu'elle aime apprendre", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "parce qu'elle aime apprendre explique pourquoi elle travaille bien, c'est la proposition subordonnée de cause." },
        { order: 5, prompt: "Dans il pleut si fort que les rues sont inondées, quelle est la proposition subordonnée de conséquence ?", answer: "que les rues sont inondées", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "que les rues sont inondées indique le résultat de la pluie forte, c'est la proposition subordonnée de conséquence." },
        { order: 6, prompt: "Défi : dans comme il avait très faim, il a tellement mangé qu'il a eu mal au ventre, cite la proposition de cause puis celle de conséquence.", answer: "comme il avait très faim ; qu'il a eu mal au ventre", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "comme il avait très faim explique la cause, et qu'il a eu mal au ventre exprime la conséquence de son repas trop copieux." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "ni ou n'y : le test du remplacement",
      xpReward: 24,
      story: {
        hook: "Deux petits mots qui se prononcent pareil : ni, qui relie deux négations, et n'y, formé de ne et du pronom y.",
        concreteExample: "Il n'aime ___ les épinards ___ les carottes. / Elle ___ pense jamais.",
        reveal: "ni relie deux éléments niés, comme ni... ni... ; n'y est formé de ne et y, qu'on peut souvent remplacer par n'en ou vérifier en enlevant la négation : elle y pense. Bravo, tu as observé chaque mot !",
        bridgeToConcept: "ni relie deux mots niés dans une phrase négative (ni... ni...). n'y est formé de ne et du pronom y (qui remplace un lieu ou une idée) : on peut vérifier en retirant le ne, il reste alors y (elle y pense).",
        illustrationEmoji: "🪄"
      },
      examples: [
        {
          title: "Exemple 1 : Il ne mange ni pomme ni poire.",
          steps: [
            { text: "ni relie deux aliments niés : pomme et poire.", illustrationEmoji: "🍎" },
            { text: "Donc on écrit ni, sans apostrophe.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : Elle n'y va jamais seule.",
          steps: [
            { text: "En retirant la négation, on obtient elle y va : le pronom y remplace un lieu.", illustrationEmoji: "🚶" },
            { text: "Donc on écrit n'y, avec une apostrophe.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        {
          order: 1,
          prompt: "Complète : Je n'aime ___ le froid ___ la pluie. (ni ou n'y)",
          answer: "ni ni",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "ni relie ici deux éléments niés, le froid et la pluie, sans apostrophe.",
          strictAccents: true
        },
        {
          order: 2,
          prompt: "Complète : Elle ___ comprend rien du tout. (ni ou n'y)",
          answer: "n'y",
          kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.",
          explanationWhenWrong: "En retirant la négation, on obtient elle y comprend : c'est n'y, avec le pronom y et une apostrophe.",
          strictAccents: true
        },
        {
          order: 3,
          prompt: "Complète : Il ne veut ___ jouer ___ lire ce soir. (ni ou n'y)",
          answer: "ni ni",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "ni relie ici deux actions niées, jouer et lire, sans apostrophe.",
          strictAccents: true
        },
        {
          order: 4,
          prompt: "Complète : Je ___ vais jamais sans mes parents. (ni ou n'y)",
          answer: "n'y",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "En retirant la négation, on obtient je y vais (j'y vais) : c'est n'y, avec le pronom y.",
          strictAccents: true
        },
        {
          order: 5,
          prompt: "Complète : Elle n'a ___ argent ___ temps pour ce projet. (ni ou n'y)",
          answer: "ni ni",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "ni relie ici deux éléments niés, argent et temps, sans apostrophe.",
          strictAccents: true
        },
        {
          order: 6,
          prompt: "Défi : complète les trois mots. Il ___ pense jamais, et il n'aime ___ les épinards ___ les choux.",
          answer: "n'y ni ni",
          kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.",
          explanationWhenWrong: "n'y pense (le pronom y, il y pense sans la négation) ; ni les épinards ni les choux (deux éléments niés, sans apostrophe).",
          strictAccents: true
        }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Calculer une moyenne simple",
      xpReward: 24,
      story: {
        hook: "Pour résumer plusieurs notes ou plusieurs mesures en un seul nombre représentatif, on calcule leur moyenne.",
        concreteExample: "Tu as obtenu 12 et 16 à deux évaluations. Quelle est ta moyenne ?",
        reveal: "On additionne les deux notes : 12 + 16 = 28. Puis on divise par le nombre de notes, ici 2 : 28 / 2 = 14. Ta moyenne est donc 14. Bravo, tu as calculé une moyenne !",
        bridgeToConcept: "Pour calculer une moyenne, on additionne toutes les valeurs, puis on divise le résultat par le nombre de valeurs.",
        illustrationEmoji: "📊"
      },
      examples: [
        {
          title: "Exemple 1 : moyenne de 10, 14 et 18",
          steps: [
            { text: "10 + 14 + 18 = 42.", illustrationEmoji: "➕" },
            { text: "42 / 3 = 14. La moyenne est 14.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : moyenne de 8 et 12",
          steps: [
            { text: "8 + 12 = 20.", illustrationEmoji: "➕" },
            { text: "20 / 2 = 10. La moyenne est 10.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule la moyenne de 14 et 18.", answer: "16", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "14 + 18 = 32, puis 32 / 2 = 16." },
        { order: 2, prompt: "Calcule la moyenne de 10, 12 et 14.", answer: "12", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "10 + 12 + 14 = 36, puis 36 / 3 = 12." },
        { order: 3, prompt: "Calcule la moyenne de 6 et 10.", answer: "8", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "6 + 10 = 16, puis 16 / 2 = 8." },
        { order: 4, prompt: "Calcule la moyenne de 15, 15 et 15.", answer: "15", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Quand toutes les valeurs sont identiques, la moyenne est cette même valeur : 15." },
        { order: 5, prompt: "Calcule la moyenne de 8, 12 et 16.", answer: "12", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "8 + 12 + 16 = 36, puis 36 / 3 = 12." },
        { order: 6, prompt: "Défi : tu as obtenu 10, 14, 16 et 20 à quatre évaluations. Quelle est ta moyenne ?", answer: "15", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "10 + 14 + 16 + 20 = 60, puis 60 / 4 = 15." }
      ]
    }
  ]
};
