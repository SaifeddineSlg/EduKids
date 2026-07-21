import { DayCurriculum } from "@/models/types";

export const day17: DayCurriculum = {
  dayNumber: 17,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Multiplier des fractions entre elles",
      xpReward: 24,
      story: {
        hook: "Après avoir additionné des fractions, découvrons une opération encore plus simple : les multiplier entre elles.",
        concreteExample: "2/3 x 1/4, comment calculer ce produit de deux fractions ?",
        reveal: "Pour multiplier deux fractions, on multiplie les numérateurs entre eux, puis les dénominateurs entre eux : 2 x 1 = 2, et 3 x 4 = 12. Le résultat est 2/12, qui se simplifie en 1/6. Bravo, tu as multiplié deux fractions !",
        bridgeToConcept: "Pour multiplier deux fractions, on multiplie les numérateurs entre eux et les dénominateurs entre eux, puis on simplifie si possible.",
        illustrationEmoji: "✖️"
      },
      examples: [
        {
          title: "Exemple 1 : 1/2 x 2/5",
          steps: [
            { text: "On multiplie les numérateurs : 1 x 2 = 2.", illustrationEmoji: "🔢" },
            { text: "On multiplie les dénominateurs : 2 x 5 = 10.", illustrationEmoji: "🔢" },
            { text: "Le résultat est 2/10, qui se simplifie en 1/5.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : 3/4 x 2/3",
          steps: [
            { text: "Numérateurs : 3 x 2 = 6. Dénominateurs : 4 x 3 = 12.", illustrationEmoji: "🔢" },
            { text: "6/12 se simplifie en 1/2.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 1/3 x 1/2", answer: "1/6", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "1 x 1 = 1 et 3 x 2 = 6, donc le résultat est 1/6." },
        { order: 2, prompt: "Calcule : 2/5 x 1/2", answer: "2/10", acceptedAnswers: ["1/5"], kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "2 x 1 = 2 et 5 x 2 = 10, donc 2/10, qui se simplifie en 1/5." },
        { order: 3, prompt: "Calcule : 3/4 x 1/3, puis simplifie.", answer: "1/4", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "3 x 1 = 3 et 4 x 3 = 12, donc 3/12, qui se simplifie en 1/4." },
        { order: 4, prompt: "Calcule : 2/3 x 3/5, puis simplifie.", answer: "2/5", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "2 x 3 = 6 et 3 x 5 = 15, donc 6/15, qui se simplifie en 2/5 en divisant par 3." },
        { order: 5, prompt: "Calcule : 1/4 x 2/5", answer: "2/20", acceptedAnswers: ["1/10"], kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "1 x 2 = 2 et 4 x 5 = 20, donc 2/20, qui se simplifie en 1/10." },
        { order: 6, prompt: "Défi : calcule 3/5 x 5/6, puis simplifie le résultat le plus possible.", answer: "1/2", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "3 x 5 = 15 et 5 x 6 = 30, donc 15/30, qui se simplifie en 1/2 en divisant le haut et le bas par 15." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le futur antérieur, l'action déjà finie dans le futur",
      xpReward: 24,
      story: {
        hook: "Pour raconter qu'une action future sera déjà terminée avant une autre action future, on utilise le futur antérieur.",
        concreteExample: "Quand tu arriveras, j'aurai déjà terminé mon repas.",
        reveal: "j'aurai terminé est au futur antérieur : il se forme avec l'auxiliaire (avoir ou être) conjugué au futur simple, suivi du participe passé. Bravo, tu as découvert le futur antérieur !",
        bridgeToConcept: "Le futur antérieur se forme avec l'auxiliaire (avoir ou être) au futur simple, suivi du participe passé. Il exprime une action qui sera terminée avant une autre action future.",
        illustrationEmoji: "⏭️"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Quand vous arriverez, nous aurons déjà rangé la maison.", illustrationEmoji: "🏠" },
            { text: "Elle sera déjà partie quand tu téléphoneras.", illustrationEmoji: "📞" },
            { text: "J'aurai fini mes devoirs avant le dîner.", illustrationEmoji: "📚" }
          ]
        },
        {
          title: "Attention à l'erreur fréquente",
          steps: [
            { text: "Beaucoup d'élèves confondent le futur simple (je finirai) et le futur antérieur (j'aurai fini), qui raconte une action déjà terminée.", illustrationEmoji: "❌" },
            { text: "Le futur antérieur situe une action avant une autre action future : j'aurai fini quand tu arriveras.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper, et le résumé",
          steps: [
            { text: "Astuce : pense à deux actions futures ; celle qui se termine en premier se met au futur antérieur, celle qui arrive après se met au futur simple.", illustrationEmoji: "🧠" },
            { text: "Résumé : le futur antérieur se forme avec l'auxiliaire au futur simple et le participe passé, pour une action terminée avant une autre action future.", illustrationEmoji: "📝" }
          ]
        }
      ],
      questions: [
        {
          order: 1,
          type: "input",
          prompt: "Complète au futur antérieur : Quand tu arriveras, j'____ (manger) déjà.",
          answer: "aurai mangé",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Le verbe manger se conjugue avec avoir : j'aurai mangé, avec l'auxiliaire au futur simple.",
          strictAccents: true
        },
        {
          order: 2,
          type: "input",
          prompt: "Complète au futur antérieur : Elle ____ (partir) avant midi.",
          answer: "sera partie",
          kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.",
          explanationWhenWrong: "Le verbe partir se conjugue avec être : elle sera partie, avec l'auxiliaire au futur simple et l'accord au féminin.",
          strictAccents: true
        },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse au futur antérieur : Nous ____ (finir) avant leur arrivée.",
          options: ["aurons fini", "avons fini", "finirons"],
          answer: "aurons fini",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Le futur antérieur avec nous se forme avec aurons, au futur simple, suivi du participe passé fini.",
          strictAccents: true
        },
        {
          order: 4,
          type: "input",
          prompt: "Complète au futur antérieur : Tu ____ (voir) ce film avant moi.",
          answer: "auras vu",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Le verbe voir se conjugue avec avoir : tu auras vu, avec l'auxiliaire au futur simple.",
          strictAccents: true
        },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse au futur antérieur : Elles ____ (arriver) avant le début du spectacle.",
          options: ["seront arrivées", "sont arrivées", "arriveront"],
          answer: "seront arrivées",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Le verbe arriver se conjugue avec être : elles seront arrivées, avec l'auxiliaire au futur simple et l'accord au féminin pluriel.",
          strictAccents: true
        },
        {
          order: 6,
          type: "match",
          prompt: "Défi : associe chaque sujet à la bonne forme du futur antérieur du verbe jouer.",
          answer: "Il = aura joué ; Vous = aurez joué ; Elles = auront joué",
          matchPairs: [
            { left: "Il", right: "aura joué" },
            { left: "Vous", right: "aurez joué" },
            { left: "Elles", right: "auront joué" }
          ],
          kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.",
          explanationWhenWrong: "Le verbe jouer se conjugue avec avoir : il aura joué, vous aurez joué, elles auront joué, l'auxiliaire changeant de forme selon le sujet.",
          strictAccents: true
        }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "L'attribut du sujet",
      xpReward: 24,
      story: {
        hook: "Certains verbes ne décrivent pas une action, mais un état : ils relient le sujet à un mot qui le décrit.",
        concreteExample: "Regarde la phrase : Le ciel est bleu. Le verbe est ne décrit pas une action, il relie ciel à bleu.",
        reveal: "bleu décrit le sujet ciel à travers le verbe d'état est : c'est un attribut du sujet. Bravo, tu as trouvé un attribut du sujet !",
        bridgeToConcept: "L'attribut du sujet suit un verbe d'état (être, sembler, paraître, devenir, rester) et décrit ou qualifie le sujet.",
        illustrationEmoji: "🪞"
      },
      examples: [
        {
          title: "Exemple 1 : Ma sœur semble fatiguée.",
          steps: [
            { text: "semble est un verbe d'état.", illustrationEmoji: "😴" },
            { text: "fatiguée décrit le sujet ma sœur : c'est l'attribut du sujet.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : Ce chocolat devient dur.",
          steps: [
            { text: "devient est un verbe d'état.", illustrationEmoji: "🍫" },
            { text: "dur décrit le sujet ce chocolat : c'est l'attribut du sujet.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans le gâteau est délicieux, quel est l'attribut du sujet ?", answer: "délicieux", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "délicieux décrit le sujet le gâteau à travers le verbe d'état est : c'est l'attribut du sujet." },
        { order: 2, prompt: "Dans elle paraît heureuse, quel est l'attribut du sujet ?", answer: "heureuse", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "heureuse décrit le sujet elle à travers le verbe d'état paraît : c'est l'attribut du sujet." },
        { order: 3, prompt: "Dans les enfants restent silencieux, quel est l'attribut du sujet ?", answer: "silencieux", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "silencieux décrit le sujet les enfants à travers le verbe d'état restent : c'est l'attribut du sujet." },
        { order: 4, prompt: "Dans ce problème semble difficile, quel est l'attribut du sujet ?", answer: "difficile", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "difficile décrit le sujet ce problème à travers le verbe d'état semble : c'est l'attribut du sujet." },
        { order: 5, prompt: "Dans mon frère devient grand, quel est l'attribut du sujet ?", answer: "grand", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "grand décrit le sujet mon frère à travers le verbe d'état devient : c'est l'attribut du sujet." },
        { order: 6, prompt: "Défi : dans cette histoire semble passionnante, et ses personnages restent mystérieux, cite les deux attributs du sujet.", answer: "passionnante mystérieux", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "passionnante décrit cette histoire (verbe semble), et mystérieux décrit ses personnages (verbe restent) : ce sont les deux attributs du sujet." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "plutôt ou plus tôt : le test du contraire",
      xpReward: 24,
      story: {
        hook: "Deux expressions qui se ressemblent beaucoup à l'oral : plutôt, en un seul mot, et plus tôt, en deux mots.",
        concreteExample: "Je préfère le rouge, ___ que le bleu. / Lève-toi ___ demain matin.",
        reveal: "Dans la première phrase, plutôt exprime une préférence, le contraire de plutôt serait plutôt le bleu que le rouge ; dans la deuxième, plus tôt est le contraire de plus tard, et compare un moment. Bravo, tu as observé le sens de chaque phrase !",
        bridgeToConcept: "plutôt (un seul mot) exprime une préférence ou une approximation, et son contraire est plutôt... que. plus tôt (deux mots) compare un moment, et son contraire est plus tard.",
        illustrationEmoji: "🪄"
      },
      examples: [
        {
          title: "Exemple 1 : Elle est plutôt gentille.",
          steps: [
            { text: "plutôt exprime ici une nuance, une approximation.", illustrationEmoji: "😊" },
            { text: "Donc on écrit plutôt, en un seul mot.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : Elle est arrivée plus tôt que prévu.",
          steps: [
            { text: "On peut opposer plus tôt à plus tard.", illustrationEmoji: "⏰" },
            { text: "Donc on écrit plus tôt, en deux mots.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        {
          order: 1,
          prompt: "Complète : Je préfère venir ___ que partir maintenant. (plutôt ou plus tôt)",
          answer: "plutôt",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "plutôt exprime ici une préférence, en un seul mot.",
          strictAccents: true
        },
        {
          order: 2,
          prompt: "Complète : Demain, lève-toi ___ que d'habitude. (plutôt ou plus tôt)",
          answer: "plus tôt",
          kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.",
          explanationWhenWrong: "On peut opposer plus tôt à plus tard : c'est une comparaison de moment, en deux mots.",
          strictAccents: true
        },
        {
          order: 3,
          prompt: "Complète : Ce livre est ___ ennuyeux. (plutôt ou plus tôt)",
          answer: "plutôt",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "plutôt exprime ici une nuance, en un seul mot.",
          strictAccents: true
        },
        {
          order: 4,
          prompt: "Complète : Nous sommes partis ___ que les autres. (plutôt ou plus tôt)",
          answer: "plus tôt",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "On compare un moment, le contraire de plus tard, donc plus tôt en deux mots.",
          strictAccents: true
        },
        {
          order: 5,
          prompt: "Complète : Elle est ___ timide que bavarde. (plutôt ou plus tôt)",
          answer: "plutôt",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "plutôt exprime une préférence entre deux qualités, en un seul mot.",
          strictAccents: true
        },
        {
          order: 6,
          prompt: "Défi : complète les deux mots. Il est arrivé ___ que prévu, et il préfère ___ rester dehors.",
          answer: "plus tôt plutôt",
          kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.",
          explanationWhenWrong: "plus tôt que prévu (comparaison de moment, deux mots) ; il préfère plutôt rester dehors (une préférence, un seul mot).",
          strictAccents: true
        }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Additionner des nombres décimaux simples",
      xpReward: 24,
      story: {
        hook: "Les nombres décimaux ont une partie entière et une partie après la virgule ; on peut les additionner en séparant ces deux parties.",
        concreteExample: "3,5 + 2,4, comment additionner ces deux nombres décimaux ?",
        reveal: "On additionne les parties entières : 3 + 2 = 5. Puis les parties décimales : 0,5 + 0,4 = 0,9. On obtient 5,9. Bravo, tu as additionné deux nombres décimaux !",
        bridgeToConcept: "Pour additionner des nombres décimaux, on additionne séparément les parties entières et les parties décimales, comme pour les dizaines et les unités.",
        illustrationEmoji: "🔢"
      },
      examples: [
        {
          title: "Exemple 1 : 4,2 + 1,5",
          steps: [
            { text: "Parties entières : 4 + 1 = 5.", illustrationEmoji: "🔟" },
            { text: "Parties décimales : 0,2 + 0,5 = 0,7.", illustrationEmoji: "➕" },
            { text: "Total : 5,7.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : 6,3 + 2,8",
          steps: [
            { text: "Parties entières : 6 + 2 = 8.", illustrationEmoji: "🔟" },
            { text: "Parties décimales : 0,3 + 0,8 = 1,1, donc on ajoute 1 à la partie entière.", illustrationEmoji: "➕" },
            { text: "Total : 8 + 1,1 = 9,1.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 2,3 + 1,4", answer: "3.7", acceptedAnswers: ["3,7"], kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Parties entières : 2 + 1 = 3. Parties décimales : 0,3 + 0,4 = 0,7. Total : 3,7." },
        { order: 2, prompt: "Calcule : 5,6 + 2,1", answer: "7.7", acceptedAnswers: ["7,7"], kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Parties entières : 5 + 2 = 7. Parties décimales : 0,6 + 0,1 = 0,7. Total : 7,7." },
        { order: 3, prompt: "Calcule : 3,7 + 2,5", answer: "6.2", acceptedAnswers: ["6,2"], kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Parties entières : 3 + 2 = 5. Parties décimales : 0,7 + 0,5 = 1,2, donc 5 + 1,2 = 6,2." },
        { order: 4, prompt: "Calcule : 8,4 + 1,9", answer: "10.3", acceptedAnswers: ["10,3"], kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Parties entières : 8 + 1 = 9. Parties décimales : 0,4 + 0,9 = 1,3, donc 9 + 1,3 = 10,3." },
        { order: 5, prompt: "Calcule : 4,5 + 4,5", answer: "9", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Parties entières : 4 + 4 = 8. Parties décimales : 0,5 + 0,5 = 1, donc 8 + 1 = 9." },
        { order: 6, prompt: "Défi : calcule 6,8 + 3,7, puis arrondis le résultat à l'unité la plus proche.", answer: "11", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "6,8 + 3,7 = 10,5 (parties entières 6 + 3 = 9, parties décimales 0,8 + 0,7 = 1,5, donc 9 + 1,5 = 10,5). Arrondi à l'unité la plus proche, 10,5 devient 11." }
      ]
    }
  ]
};
