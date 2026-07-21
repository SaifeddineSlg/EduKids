import { DayCurriculum } from "@/models/types";

export const day16: DayCurriculum = {
  dayNumber: 16,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Additionner des fractions de dénominateurs différents",
      xpReward: 24,
      story: {
        hook: "Tu sais déjà additionner des fractions qui ont le même dénominateur ; aujourd'hui, on apprend à additionner des fractions qui n'ont pas le même nombre de parts.",
        concreteExample: "1/2 + 1/4, comment faire, puisque les dénominateurs sont différents ?",
        reveal: "On transforme 1/2 en une fraction équivalente de dénominateur 4 : 1/2 = 2/4. On peut alors additionner : 2/4 + 1/4 = 3/4. Bravo, tu as additionné deux fractions de dénominateurs différents !",
        bridgeToConcept: "Pour additionner des fractions de dénominateurs différents, on cherche d'abord un dénominateur commun, en multipliant le haut et le bas d'une ou plusieurs fractions par le même nombre.",
        illustrationEmoji: "🍕"
      },
      examples: [
        {
          title: "Exemple 1 : 1/3 + 1/6",
          steps: [
            { text: "6 est un multiple de 3, donc on transforme 1/3 en sixièmes : 1/3 = 2/6.", illustrationEmoji: "🔎" },
            { text: "On additionne : 2/6 + 1/6 = 3/6.", illustrationEmoji: "➕" },
            { text: "On simplifie : 3/6 = 1/2.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : 1/4 + 1/2",
          steps: [
            { text: "4 est un multiple de 2, donc on transforme 1/2 en quarts : 1/2 = 2/4.", illustrationEmoji: "🔎" },
            { text: "On additionne : 1/4 + 2/4 = 3/4.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 1/2 + 1/6 (transforme 1/2 en sixièmes)", answer: "4/6", acceptedAnswers: ["2/3"], kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "1/2 = 3/6, puis 3/6 + 1/6 = 4/6, ce qui se simplifie en 2/3." },
        { order: 2, prompt: "Calcule : 1/3 + 1/9 (transforme 1/3 en neuvièmes)", answer: "4/9", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "1/3 = 3/9, puis 3/9 + 1/9 = 4/9." },
        { order: 3, prompt: "Calcule : 1/4 + 1/8 (transforme 1/4 en huitièmes)", answer: "3/8", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "1/4 = 2/8, puis 2/8 + 1/8 = 3/8." },
        { order: 4, prompt: "Calcule : 2/5 + 3/10 (transforme 2/5 en dixièmes)", answer: "7/10", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "2/5 = 4/10, puis 4/10 + 3/10 = 7/10." },
        { order: 5, prompt: "Calcule : 1/2 + 1/4, puis simplifie si possible.", answer: "3/4", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "1/2 = 2/4, puis 2/4 + 1/4 = 3/4, déjà simplifiée." },
        { order: 6, prompt: "Défi : calcule 1/3 + 1/2, en transformant les deux fractions en sixièmes.", answer: "5/6", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "1/3 = 2/6 et 1/2 = 3/6, donc 2/6 + 3/6 = 5/6." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le subjonctif présent, le mode du doute et du souhait",
      xpReward: 24,
      story: {
        hook: "Après tous les temps de l'indicatif, il existe un autre mode qui exprime un souhait, un doute ou une obligation, presque toujours après que.",
        concreteExample: "Écoute : il faut que je parte, il faut que tu partes, il faut qu'il parte, il faut que nous partions, il faut que vous partiez, il faut qu'ils partent.",
        reveal: "À quoi sert le subjonctif présent ? Il sert à exprimer un souhait, une obligation ou un doute, après des expressions comme il faut que ou je voudrais que. Comment le former ? Pour la plupart des verbes, on part de la troisième personne du pluriel au présent, on enlève -ent, et on ajoute -e, -es, -e, -ions, -iez, -ent. Bravo, tu as découvert un nouveau mode !",
        bridgeToConcept: "Terminaisons à retenir pour le subjonctif présent : -e, -es, -e, -ions, -iez, -ent, précédées presque toujours de que ou qu'.",
        illustrationEmoji: "🙏"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Il faut que je finisse mes devoirs avant le dîner.", illustrationEmoji: "📚" },
            { text: "J'aimerais que tu viennes avec nous ce soir.", illustrationEmoji: "🌙" },
            { text: "Il faut que nous partions tôt demain matin.", illustrationEmoji: "⏰" }
          ]
        },
        {
          title: "Attention à l'erreur fréquente",
          steps: [
            { text: "Beaucoup d'élèves confondent l'indicatif présent (il faut qu'il vient) et le subjonctif présent. C'est une erreur !", illustrationEmoji: "❌" },
            { text: "Après il faut que, on utilise toujours le subjonctif : il faut qu'il vienne, et non qu'il vient.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper, et le résumé",
          steps: [
            { text: "Astuce : pense à la phrase magique il faut que devant un verbe pour vérifier s'il faut le subjonctif.", illustrationEmoji: "🧠" },
            { text: "Résumé : le subjonctif présent se forme à partir du radical de la troisième personne du pluriel au présent, avec les terminaisons -e, -es, -e, -ions, -iez, -ent.", illustrationEmoji: "📝" }
          ]
        }
      ],
      questions: [
        {
          order: 1,
          type: "input",
          prompt: "Complète au subjonctif présent : Il faut que je ____ (finir) mon repas.",
          answer: "finisse",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Le radical vient de ils finissent : je finisse, avec la terminaison -e du subjonctif.",
          strictAccents: true
        },
        {
          order: 2,
          type: "input",
          prompt: "Complète au subjonctif présent : Il faut que tu ____ (venir) avec nous.",
          answer: "viennes",
          kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.",
          explanationWhenWrong: "Le radical vient de ils viennent : tu viennes, avec la terminaison -es du subjonctif.",
          strictAccents: true
        },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse au subjonctif présent : Il faut que nous ____ (partir) tôt.",
          options: ["partons", "partions", "partirons"],
          answer: "partions",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Avec nous, la terminaison du subjonctif est -ions : que nous partions, à ne pas confondre avec le présent nous partons.",
          strictAccents: true
        },
        {
          order: 4,
          type: "input",
          prompt: "Complète au subjonctif présent : Il faut que vous ____ (choisir) un cadeau.",
          answer: "choisissiez",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Le radical vient de ils choisissent : vous choisissiez, avec la terminaison -iez du subjonctif.",
          strictAccents: true
        },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse au subjonctif présent : Il faut qu'ils ____ (dire) la vérité.",
          options: ["disent", "dissent", "diront"],
          answer: "disent",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Le radical vient de ils disent : qu'ils disent, la terminaison -ent du subjonctif ressemble ici au présent.",
          strictAccents: true
        },
        {
          order: 6,
          type: "match",
          prompt: "Défi : associe chaque sujet à la bonne forme du subjonctif présent du verbe prendre.",
          answer: "Je = prenne ; Nous = prenions ; Ils = prennent",
          matchPairs: [
            { left: "Je", right: "prenne" },
            { left: "Nous", right: "prenions" },
            { left: "Ils", right: "prennent" }
          ],
          kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.",
          explanationWhenWrong: "Le radical vient de ils prennent : je prenne, nous prenions, ils prennent, chacun avec la terminaison du subjonctif adaptée à sa personne.",
          strictAccents: true
        }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "La proposition subordonnée relative",
      xpReward: 24,
      story: {
        hook: "Pour donner plus de précisions sur un nom sans faire une nouvelle phrase, on peut ajouter une petite proposition reliée par qui, que, dont ou où.",
        concreteExample: "Regarde la phrase : Le livre que je lis est passionnant. Que je lis apporte une précision sur le livre.",
        reveal: "que je lis est une proposition subordonnée relative : elle complète le nom livre grâce au pronom relatif que. Bravo, tu as trouvé une proposition subordonnée relative !",
        bridgeToConcept: "Une proposition subordonnée relative commence par un pronom relatif (qui, que, dont, où) et apporte une précision sur un nom, appelé antécédent.",
        illustrationEmoji: "🔗"
      },
      examples: [
        {
          title: "Exemple 1 : La maison où j'habite est ancienne.",
          steps: [
            { text: "où j'habite précise la maison.", illustrationEmoji: "🏠" },
            { text: "C'est une proposition subordonnée relative, introduite par où.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : Le chien qui aboie appartient à mon voisin.",
          steps: [
            { text: "qui aboie précise le chien.", illustrationEmoji: "🐶" },
            { text: "C'est une proposition subordonnée relative, introduite par qui.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans le film que j'ai vu était amusant, quelle est la proposition subordonnée relative ?", answer: "que j'ai vu", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "que j'ai vu précise le film, c'est la proposition subordonnée relative, introduite par que." },
        { order: 2, prompt: "Dans la fille qui chante est ma cousine, quelle est la proposition subordonnée relative ?", answer: "qui chante", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "qui chante précise la fille, c'est la proposition subordonnée relative, introduite par qui." },
        { order: 3, prompt: "Dans la ville où je suis né est très jolie, quel pronom relatif introduit la subordonnée ?", answer: "où", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "où introduit ici la proposition subordonnée relative, car elle précise un lieu." },
        { order: 4, prompt: "Dans le stylo dont je me sers est neuf, quel pronom relatif introduit la subordonnée ?", answer: "dont", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "dont introduit ici la proposition subordonnée relative dont je me sers." },
        { order: 5, prompt: "Dans les enfants qui jouent dans la cour rient beaucoup, quelle est la proposition subordonnée relative ?", answer: "qui jouent dans la cour", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "qui jouent dans la cour précise les enfants, c'est la proposition subordonnée relative." },
        { order: 6, prompt: "Défi : dans le gâteau que ma mère a préparé, et dont tout le monde parle, est délicieux, cite les deux propositions subordonnées relatives.", answer: "que ma mère a préparé ; dont tout le monde parle", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "que ma mère a préparé (introduite par que) et dont tout le monde parle (introduite par dont) précisent toutes les deux le gâteau." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "tout, tous, toute ou toutes : le test de l'accord",
      xpReward: 24,
      story: {
        hook: "Le petit mot tout change de forme selon le nom qu'il accompagne : masculin, féminin, singulier ou pluriel.",
        concreteExample: "___ les enfants sont arrivés. / Elle a rangé ___ ses affaires. Est-ce que ce sont tous ou toutes ?",
        reveal: "On regarde le nom qui suit : enfants est masculin pluriel, donc tous ; affaires est féminin pluriel, donc toutes. Bravo, tu as observé le genre et le nombre du nom !",
        bridgeToConcept: "tout (masculin singulier), toute (féminin singulier), tous (masculin pluriel), toutes (féminin pluriel) : on accorde toujours avec le nom qui suit.",
        illustrationEmoji: "🪄"
      },
      examples: [
        {
          title: "Exemple 1 : Tout le gâteau a disparu",
          steps: [
            { text: "gâteau est masculin singulier.", illustrationEmoji: "🎂" },
            { text: "Donc on écrit tout, sans marque de pluriel ni de féminin.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : Toutes les fleurs sont fanées",
          steps: [
            { text: "fleurs est féminin pluriel.", illustrationEmoji: "🌷" },
            { text: "Donc on écrit toutes, avec un e et un s.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        {
          order: 1,
          prompt: "Complète : ___ les élèves sont présents. (tout, tous, toute, toutes)",
          answer: "tous",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "élèves est ici masculin pluriel, donc on écrit tous.",
          strictAccents: true
        },
        {
          order: 2,
          prompt: "Complète : Elle a mangé ___ la tarte. (tout, tous, toute, toutes)",
          answer: "toute",
          kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.",
          explanationWhenWrong: "tarte est féminin singulier, donc on écrit toute.",
          strictAccents: true
        },
        {
          order: 3,
          prompt: "Complète : ___ mes cousines sont venues. (tout, tous, toute, toutes)",
          answer: "toutes",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "cousines est féminin pluriel, donc on écrit toutes.",
          strictAccents: true
        },
        {
          order: 4,
          prompt: "Complète : Il a rangé ___ son bureau. (tout, tous, toute, toutes)",
          answer: "tout",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "bureau est masculin singulier, donc on écrit tout.",
          strictAccents: true
        },
        {
          order: 5,
          prompt: "Complète : ___ les garçons jouent au ballon. (tout, tous, toute, toutes)",
          answer: "tous",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "garçons est masculin pluriel, donc on écrit tous.",
          strictAccents: true
        },
        {
          order: 6,
          prompt: "Défi : complète les deux mots. ___ les vacances, ma sœur range ___ ses affaires.",
          answer: "toutes toutes",
          kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.",
          explanationWhenWrong: "vacances est féminin pluriel, donc toutes ; affaires est aussi féminin pluriel, donc toutes.",
          strictAccents: true
        }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Multiplier par 11 grâce à une astuce",
      xpReward: 24,
      story: {
        hook: "Multiplier par 11 peut se faire très vite grâce à un lien avec 10.",
        concreteExample: "24 x 11, comment le calculer rapidement ?",
        reveal: "On multiplie par 10, puis on ajoute une fois le nombre de départ : 24 x 10 = 240, puis 240 + 24 = 264. Bravo, tu as calculé rapidement !",
        bridgeToConcept: "Multiplier par 11, c'est multiplier par 10, puis ajouter le nombre de départ une fois.",
        illustrationEmoji: "🔢"
      },
      examples: [
        {
          title: "Exemple 1 : 15 x 11",
          steps: [
            { text: "15 x 10 = 150.", illustrationEmoji: "🔟" },
            { text: "150 + 15 = 165.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : 32 x 11",
          steps: [
            { text: "32 x 10 = 320.", illustrationEmoji: "🔟" },
            { text: "320 + 32 = 352.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 13 x 11", answer: "143", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "13 x 10 = 130, puis 130 + 13 = 143." },
        { order: 2, prompt: "Calcule : 27 x 11", answer: "297", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "27 x 10 = 270, puis 270 + 27 = 297." },
        { order: 3, prompt: "Calcule : 40 x 11", answer: "440", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "40 x 10 = 400, puis 400 + 40 = 440." },
        { order: 4, prompt: "Calcule : 19 x 11", answer: "209", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "19 x 10 = 190, puis 190 + 19 = 209." },
        { order: 5, prompt: "Calcule : 52 x 11", answer: "572", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "52 x 10 = 520, puis 520 + 52 = 572." },
        { order: 6, prompt: "Défi : calcule 34 x 11, puis retire 100 au résultat.", answer: "274", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "34 x 11 : 34 x 10 = 340, puis 340 + 34 = 374. Ensuite, 374 - 100 = 274." }
      ]
    }
  ]
};
