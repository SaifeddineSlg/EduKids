import { DayCurriculum } from "@/models/types";

export const day20: DayCurriculum = {
  dayNumber: 20,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "La grande révision : fractions, nombres relatifs et volume",
      xpReward: 24,
      story: {
        hook: "Cette semaine, tu as additionné des fractions de dénominateurs différents, multiplié des fractions, soustrait et multiplié des nombres relatifs, et calculé le volume d'un pavé droit.",
        concreteExample: "Aujourd'hui, on mélange un peu de tout : une addition de fractions, une multiplication de fractions, un calcul avec des nombres relatifs, et un volume.",
        reveal: "Tu vas voir que ce sont toujours les mêmes méthodes, réutilisées sur des exemples différents. Bravo, tu es devenu un vrai expert de ces quatre méthodes !",
        bridgeToConcept: "Réviser en mathématiques, c'est reconnaître quelle méthode utiliser selon la question posée.",
        illustrationEmoji: "🧠"
      },
      examples: [
        {
          title: "Exemple 1 : 1/3 + 1/6",
          steps: [
            { text: "1/3 = 2/6, puis 2/6 + 1/6 = 3/6.", illustrationEmoji: "➕" },
            { text: "3/6 se simplifie en 1/2.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : un pavé droit de 3 cm, 4 cm et 2 cm",
          steps: [
            { text: "3 x 4 = 12.", illustrationEmoji: "✖️" },
            { text: "12 x 2 = 24. Le volume est 24 cm³.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 1/4 + 1/2 (transforme 1/2 en quarts)", answer: "3/4", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "1/2 = 2/4, puis 1/4 + 2/4 = 3/4." },
        { order: 2, prompt: "Calcule : 2/3 x 1/2, puis simplifie si possible.", answer: "2/6", acceptedAnswers: ["1/3"], kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "2 x 1 = 2 et 3 x 2 = 6, donc 2/6, qui se simplifie en 1/3." },
        { order: 3, prompt: "Calcule : -3 - 6", answer: "-9", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On part de -3 et on recule de 6 vers la gauche : on arrive à -9." },
        { order: 4, prompt: "Calcule : -4 x 5", answer: "-20", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "-4 et 5 ont des signes différents, donc le résultat est négatif : 4 x 5 = 20, donc -20." },
        { order: 5, prompt: "Calcule le volume d'un pavé droit de longueur 6 cm, largeur 3 cm et hauteur 2 cm.", answer: "36", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "6 x 3 x 2 = 36 cm³." },
        { order: 6, prompt: "Défi : calcule 1/2 x 2/3, simplifie le résultat, puis calcule -5 - 4.", answer: "1/3 ; -9", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "1/2 x 2/3 = 2/6, qui se simplifie en 1/3. Ensuite, -5 - 4 : on part de -5 et on recule de 4, on arrive à -9." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "La grande révision : subjonctif, futur antérieur, pronominaux et gérondif",
      xpReward: 24,
      story: {
        hook: "Cette semaine, tu as exprimé un souhait au subjonctif, raconté une action déjà finie dans le futur, conjugué des verbes pronominaux, et découvert le participe présent.",
        concreteExample: "Compare : il faut qu'elle vienne (subjonctif), elle sera venue (futur antérieur), elle s'est levée (verbe pronominal), en venant (gérondif).",
        reveal: "Chacune de ces formes a un rôle précis : exprimer un souhait, situer une action avant une autre dans le futur, décrire une action sur soi-même, ou préciser comment se déroule une action. Bravo pour cette semaine riche en conjugaison !",
        bridgeToConcept: "Subjonctif présent : après il faut que, terminaisons -e, -es, -e, -ions, -iez, -ent. Futur antérieur : auxiliaire au futur simple + participe passé. Verbes pronominaux : toujours avec être au passé composé. Gérondif : en + participe présent (radical de nous + -ant).",
        illustrationEmoji: "⏳"
      },
      examples: [
        {
          title: "Des exemples de tous les jours, toutes les formes mélangées",
          steps: [
            { text: "Il faut que tu finisses ton travail avant ce soir (subjonctif).", illustrationEmoji: "📚" },
            { text: "Demain, elle aura terminé son livre avant la sortie du film (futur antérieur).", illustrationEmoji: "📖" },
            { text: "Ce matin, ils se sont levés tôt en chantant (verbe pronominal et gérondif).", illustrationEmoji: "🎵" }
          ]
        },
        {
          title: "Attention à l'erreur fréquente",
          steps: [
            { text: "L'erreur la plus fréquente est d'oublier l'auxiliaire être avec un verbe pronominal, ou de confondre le futur simple et le futur antérieur.", illustrationEmoji: "❌" },
            { text: "Un verbe pronominal se conjugue toujours avec être au passé composé, et le futur antérieur raconte une action déjà finie avant une autre action future.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper, et le résumé",
          steps: [
            { text: "Astuce : repère les mots-indices comme il faut que (subjonctif), quand... déjà (futur antérieur ou plus-que-parfait), le petit pronom réfléchi (verbe pronominal), ou en (gérondif).", illustrationEmoji: "🧭" },
            { text: "Résumé : cette semaine, tu as découvert quatre nouvelles façons de conjuguer un verbe, chacune avec son propre indice de reconnaissance.", illustrationEmoji: "📝" }
          ]
        }
      ],
      questions: [
        {
          order: 1,
          type: "input",
          prompt: "Complète au subjonctif présent : Il faut que je ____ (partir) tôt.",
          answer: "parte",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Le radical vient de ils partent : je parte, avec la terminaison -e du subjonctif.",
          strictAccents: true
        },
        {
          order: 2,
          type: "input",
          prompt: "Complète au futur antérieur : Elle ____ (finir) son repas avant nous.",
          answer: "aura fini",
          kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.",
          explanationWhenWrong: "Le verbe finir se conjugue avec avoir : elle aura fini, avec l'auxiliaire au futur simple.",
          strictAccents: true
        },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse au passé composé : Ils ____ (se laver) les mains avant le repas.",
          options: ["se sont lavé les mains", "se sont lavés les mains", "ont lavé les mains"],
          answer: "se sont lavé les mains",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Avec ils, être devient sont, précédé de se ; ici, l'accord ne se fait pas avec ils car les mains suit le verbe : se sont lavé les mains.",
          strictAccents: true
        },
        {
          order: 4,
          type: "input",
          prompt: "Forme le gérondif du verbe chanter.",
          answer: "en chantant",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Le gérondif se forme avec en et le participe présent chantant : en chantant.",
          strictAccents: true
        },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse au subjonctif présent : Il faut que nous ____ (venir) ensemble.",
          options: ["venons", "venions", "viendrons"],
          answer: "venions",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Avec nous, la terminaison du subjonctif est -ions : que nous venions.",
          strictAccents: true
        },
        {
          order: 6,
          type: "match",
          prompt: "Défi : associe chaque phrase au temps ou à la forme qui convient.",
          answer: "Il faut qu'elle vienne = subjonctif ; Elle sera venue avant midi = futur antérieur ; Elle s'est levée tôt = verbe pronominal",
          matchPairs: [
            { left: "Il faut qu'elle vienne", right: "subjonctif" },
            { left: "Elle sera venue avant midi", right: "futur antérieur" },
            { left: "Elle s'est levée tôt", right: "verbe pronominal" }
          ],
          kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.",
          explanationWhenWrong: "Il faut que introduit le subjonctif, avant midi avec déjà terminé indique le futur antérieur, et le pronom réfléchi s' annonce un verbe pronominal.",
          strictAccents: true
        }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "La grande révision : subordonnée relative, attribut, complément du nom et cause-conséquence",
      xpReward: 24,
      story: {
        hook: "Cette semaine, tu as ajouté une précision sur un nom avec une subordonnée relative, décrit un sujet avec un attribut, précisé un nom avec un complément du nom, et expliqué une cause ou une conséquence.",
        concreteExample: "Regarde : La glace que j'ai achetée, qui semblait délicieuse, a fondu si vite qu'il n'en restait plus.",
        reveal: "Cette phrase contient une subordonnée relative, un attribut, et une subordonnée de conséquence. Bravo, tu maîtrises tous ces outils de grammaire !",
        bridgeToConcept: "Réviser la grammaire, c'est utiliser plusieurs outils sur la même phrase : la subordonnée relative (qui, que, dont, où), l'attribut du sujet après un verbe d'état, le complément du nom (introduit par de, à, en), et les subordonnées de cause ou de conséquence.",
        illustrationEmoji: "🔑"
      },
      examples: [
        {
          title: "Exemple 1 : Le gâteau que j'ai préparé semble délicieux.",
          steps: [
            { text: "que j'ai préparé est une subordonnée relative qui précise le gâteau.", illustrationEmoji: "🎂" },
            { text: "délicieux est l'attribut du sujet le gâteau, après le verbe d'état semble.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : Comme il pleuvait, la tasse de thé de ma grand-mère est restée sur la table.",
          steps: [
            { text: "Comme il pleuvait est une subordonnée de cause.", illustrationEmoji: "🌧️" },
            { text: "de thé et de ma grand-mère sont des compléments du nom.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans le livre que je lis est passionnant, quelle est la proposition subordonnée relative ?", answer: "que je lis", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "que je lis précise le livre, c'est la proposition subordonnée relative." },
        { order: 2, prompt: "Dans cette soupe paraît délicieuse, quel est l'attribut du sujet ?", answer: "délicieuse", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "délicieuse décrit le sujet cette soupe à travers le verbe d'état paraît, c'est l'attribut du sujet." },
        { order: 3, prompt: "Dans une boîte à outils, quel est le complément du nom boîte ?", answer: "à outils", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "à outils précise le nom boîte, c'est le complément du nom." },
        { order: 4, prompt: "Dans il reste chez lui parce qu'il pleut, quelle est la proposition subordonnée de cause ?", answer: "parce qu'il pleut", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "parce qu'il pleut explique pourquoi il reste chez lui, c'est la proposition subordonnée de cause." },
        { order: 5, prompt: "Dans elle a tellement ri qu'elle en pleurait, quelle est la proposition subordonnée de conséquence ?", answer: "qu'elle en pleurait", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "qu'elle en pleurait indique le résultat de son fou rire, c'est la proposition subordonnée de conséquence." },
        { order: 6, prompt: "Défi : dans le gâteau au chocolat que j'ai fait semble si bon que tout le monde en redemande, cite dans l'ordre le complément du nom, la subordonnée relative, l'attribut, puis la subordonnée de conséquence.", answer: "au chocolat ; que j'ai fait ; bon ; que tout le monde en redemande", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "au chocolat précise gâteau (complément du nom) ; que j'ai fait précise aussi gâteau (subordonnée relative) ; bon décrit le gâteau après semble (attribut) ; que tout le monde en redemande est le résultat (subordonnée de conséquence)." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Encore de nouveaux petits tests magiques ensemble",
      xpReward: 24,
      story: {
        hook: "Imagine que tu as ajouté quatre nouveaux outils dans ta boîte à outils de l'orthographe cette semaine.",
        concreteExample: "Cette semaine, tu as appris à tester tout/tous/toute/toutes, plutôt/plus tôt, la/là/l'a, et ni/n'y.",
        reveal: "Chaque fois que tu hésites, tu peux utiliser le bon test dans ta tête, comme avec les tests des semaines précédentes. Bravo, ta boîte à outils est encore plus complète !",
        bridgeToConcept: "Réviser l'orthographe, c'est se rappeler quel test utiliser pour chaque mot qui se ressemble, et garder ces réflexes toute sa vie.",
        illustrationEmoji: "🧰"
      },
      examples: [
        {
          title: "Exemple 1 : ... les enfants ont mangé ... la tarte",
          steps: [
            { text: "On regarde le genre et le nombre : enfants est masculin pluriel, donc tous.", illustrationEmoji: "✅" },
            { text: "tarte est féminin singulier, donc toute.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : Il ... arrivé ... que prévu, et il ... aime ... le froid ... la pluie",
          steps: [
            { text: "On teste l'avait : il l'avait arrivé ne fonctionne pas ici, il faut plutôt regarder le contexte : plus tôt que prévu (comparaison de moment).", illustrationEmoji: "✅" },
            { text: "ni... ni... relie deux éléments niés.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : ___ mes amies sont venues. (tout, tous, toute, toutes)", answer: "toutes", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "amies est féminin pluriel, donc on écrit toutes.", strictAccents: true },
        { order: 2, prompt: "Complète : Elle est arrivée ___ que prévu. (plutôt ou plus tôt)", answer: "plus tôt", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "On compare un moment, le contraire de plus tard, donc plus tôt en deux mots.", strictAccents: true },
        { order: 3, prompt: "Complète : Pose ___ valise ___-bas. (la, là)", answer: "la là", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "la précède le nom féminin valise ; là-bas indique un lieu, avec l'accent grave.", strictAccents: true },
        { order: 4, prompt: "Complète : Il ___ trouvée hier soir. (la, là, l'a)", answer: "l'a", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "On peut dire il l'avait trouvée, donc c'est l'a, la contraction de le ou la et a.", strictAccents: true },
        { order: 5, prompt: "Complète : Je n'aime ___ les épinards ___ les choux. (ni ou n'y)", answer: "ni ni", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "ni relie ici deux éléments niés, sans apostrophe.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les quatre mots. ___ les élèves sont arrivés ___ que prévu, ils ont posé ___ cartables ___-bas.", answer: "tous plus tôt leurs là", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "tous les élèves (masculin pluriel) ; plus tôt que prévu (comparaison de moment) ; leurs cartables (cartables est au pluriel, donc leurs avec un s) ; là-bas (un lieu, avec l'accent grave).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Le grand défi de calcul mental de la semaine",
      xpReward: 24,
      story: {
        hook: "Imagine un grand jeu où tu mélanges multiplication par 11, additions de décimaux, produits de nombres proches d'une dizaine, et calculs de moyenne.",
        concreteExample: "Cette semaine, tu as appris à multiplier par 11, à additionner des décimaux, à multiplier deux nombres proches d'une même dizaine, et à calculer une moyenne.",
        reveal: "Aujourd'hui, tu vas utiliser toutes ces méthodes ensemble. Bravo pour cette semaine de calcul mental !",
        bridgeToConcept: "Réviser le calcul mental, c'est choisir la bonne méthode rapide selon le calcul à faire.",
        illustrationEmoji: "🏆"
      },
      examples: [
        {
          title: "Exemple 1 : 23 x 11",
          steps: [
            { text: "23 x 10 = 230.", illustrationEmoji: "🔟" },
            { text: "230 + 23 = 253.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : moyenne de 12 et 18",
          steps: [
            { text: "12 + 18 = 30.", illustrationEmoji: "➕" },
            { text: "30 / 2 = 15. La moyenne est 15.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 16 x 11", answer: "176", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "16 x 10 = 160, puis 160 + 16 = 176." },
        { order: 2, prompt: "Calcule : 3,4 + 2,8", answer: "6.2", acceptedAnswers: ["6,2"], kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Parties entières : 3 + 2 = 5. Parties décimales : 0,4 + 0,8 = 1,2, donc 5 + 1,2 = 6,2." },
        { order: 3, prompt: "Calcule : 29 x 31 (29 = 30 - 1, 31 = 30 + 1)", answer: "899", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "30 x 30 = 900, et 1 x 1 = 1, donc 900 - 1 = 899." },
        { order: 4, prompt: "Calcule la moyenne de 9, 12 et 15.", answer: "12", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "9 + 12 + 15 = 36, puis 36 / 3 = 12." },
        { order: 5, prompt: "Calcule : 48 x 52 (48 = 50 - 2, 52 = 50 + 2)", answer: "2496", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "50 x 50 = 2 500, et 2 x 2 = 4, donc 2 500 - 4 = 2 496." },
        { order: 6, prompt: "Défi : calcule 21 x 11, puis calcule la moyenne de ce résultat avec 9.", answer: "120", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "21 x 11 : 21 x 10 = 210, puis 210 + 21 = 231. La moyenne de 231 et 9 : 231 + 9 = 240, puis 240 / 2 = 120." }
      ]
    }
  ]
};
