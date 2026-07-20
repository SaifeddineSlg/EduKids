import { DayCurriculum } from "@/models/types";

export const day12: DayCurriculum = {
  dayNumber: 12,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Comparer et ranger les fractions de même dénominateur",
      xpReward: 22,
      story: {
        hook: "Tu sais déjà calculer une fraction d'un nombre. Aujourd'hui, comparons deux fractions entre elles.",
        concreteExample: "Qui a mangé le plus de pizza : Bayrem qui a mangé 3/8 ou Balkis qui a mangé 5/8 ?",
        reveal: "Quand deux fractions ont le même dénominateur, celle qui a le plus grand numérateur est la plus grande : 5/8 est plus grand que 3/8, donc Balkis a mangé plus.",
        bridgeToConcept: "Pour comparer deux fractions de même dénominateur, on compare simplement les numérateurs.",
        illustrationEmoji: "🍕"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "2/6 et 5/6 : même dénominateur 6, 5 est plus grand que 2, donc 5/6 > 2/6.", illustrationEmoji: "🔢" },
            { text: "4/10 et 4/10 : mêmes numérateurs et dénominateurs, les fractions sont égales.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "1/4 et 3/4 : 3/4 est plus grand car 3 est plus grand que 1.", illustrationEmoji: "🔍" },
            { text: "7/9 et 2/9 : 7/9 est plus grand car 7 est plus grand que 2.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Quelle fraction est la plus grande : 3/8 ou 5/8 ?", answer: "5/8", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Même dénominateur 8, et 5 est plus grand que 3, donc 5/8 est la plus grande." },
        { order: 2, prompt: "Quelle fraction est la plus grande : 2/6 ou 4/6 ?", answer: "4/6", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Même dénominateur 6, et 4 est plus grand que 2, donc 4/6 est la plus grande." },
        { order: 3, prompt: "Quelle fraction est la plus petite : 7/10 ou 3/10 ?", answer: "3/10", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Même dénominateur 10, et 3 est plus petit que 7, donc 3/10 est la plus petite." },
        { order: 4, prompt: "Range du plus petit au plus grand : 5/9, 1/9, 8/9 (réponds avec des espaces entre les fractions)", answer: "1/9 5/9 8/9", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Même dénominateur 9 : on range simplement les numérateurs dans l'ordre 1, 5, 8." },
        { order: 5, prompt: "Quelle fraction est la plus grande : 6/12 ou 9/12 ?", answer: "9/12", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Même dénominateur 12, et 9 est plus grand que 6, donc 9/12 est la plus grande." },
        { order: 6, prompt: "Défi : Bayrem a mangé 4/7 d'un gâteau et Balkis en a mangé 6/7. Qui a mangé la plus grande part ?", answer: "Balkis", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Même dénominateur 7, et 6 est plus grand que 4, donc Balkis a mangé la plus grande part." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le plus-que-parfait",
      xpReward: 22,
      story: {
        hook: "Pour raconter une action qui s'était déjà passée avant une autre action passée, on utilise un temps composé du passé.",
        concreteExample: "Quand je suis arrivé, le film avait déjà commencé.",
        reveal: "Avait commencé est au plus-que-parfait : il se forme avec avoir ou être à l'imparfait, suivi du participe passé. Il exprime une action antérieure à une autre action passée.",
        bridgeToConcept: "Le plus-que-parfait : j'avais mangé, tu avais mangé, il avait mangé ; j'étais parti(e), tu étais parti(e)...",
        illustrationEmoji: "⏳"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Quand elle est arrivée, nous avions déjà mangé.", illustrationEmoji: "🍽️" },
            { text: "Il avait fini ses devoirs avant de sortir jouer.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Auxiliaire avoir ou être à l'imparfait, puis participe passé.", illustrationEmoji: "🔍" },
            { text: "Comme au passé composé, le participe passé s'accorde avec être.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète au plus-que-parfait : Quand je suis arrivé, le film ____ (avoir, commencer) déjà.", answer: "avait commencé", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec le film, avoir à l'imparfait donne avait, suivi du participe passé commencé : avait commencé.", strictAccents: true },
        { order: 2, prompt: "Complète au plus-que-parfait : Il ____ (avoir, finir) ses devoirs avant de sortir.", answer: "avait fini", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Avec il, avoir à l'imparfait donne avait, suivi du participe passé fini : avait fini.", strictAccents: true },
        { order: 3, prompt: "Complète au plus-que-parfait : Nous ____ (avoir, manger) avant son arrivée.", answer: "avions mangé", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec nous, avoir à l'imparfait donne avions, suivi du participe passé mangé : avions mangé.", strictAccents: true },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Elle ____ (être, partir) avant que nous arrivions.",
          options: ["était partie", "avait parti", "est partie"],
          answer: "était partie",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Avec elle, être à l'imparfait donne était, suivi du participe passé accordé partie : était partie.",
          strictAccents: true
        },
        { order: 5, prompt: "Complète au plus-que-parfait : Tu ____ (avoir, oublier) ton cahier à la maison.", answer: "avais oublié", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Avec tu, avoir à l'imparfait donne avais, suivi du participe passé oublié : avais oublié.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux verbes au plus-que-parfait. Ils ____ (avoir, ranger) leur chambre et elle ____ (être, sortir) avant le dîner.", answer: "avaient rangé était sortie", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Tu étais proche ! Avec ils, avoir donne avaient rangé. Avec elle, être donne était sortie, avec un e car le sujet est féminin.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "L'attribut du sujet",
      xpReward: 22,
      story: {
        hook: "Certains verbes ne décrivent pas une action, mais relient le sujet à un mot qui le qualifie.",
        concreteExample: "Balkis est heureuse. Que fait le mot heureuse ?",
        reveal: "Heureuse qualifie le sujet Balkis, relié par le verbe d'état est. C'est l'attribut du sujet, qui suit un verbe d'état (être, sembler, paraître, devenir, rester...).",
        bridgeToConcept: "L'attribut du sujet qualifie le sujet après un verbe d'état : il/elle est, semble, paraît, devient, reste, suivi de l'attribut.",
        illustrationEmoji: "🪞"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Le ciel devient gris avant l'orage.", illustrationEmoji: "⛈️" },
            { text: "Bayrem paraît fatigué ce soir.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Cherche un verbe d'état (être, sembler, paraître, devenir, rester).", illustrationEmoji: "🔍" },
            { text: "Le mot qui suit et qualifie le sujet est l'attribut du sujet.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans Balkis est heureuse, quel est l'attribut du sujet ?", answer: "heureuse", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Heureuse qualifie Balkis après le verbe d'état est, c'est l'attribut du sujet." },
        { order: 2, prompt: "Dans le ciel devient gris, quel est l'attribut du sujet ?", answer: "gris", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Gris qualifie le ciel après le verbe d'état devient, c'est l'attribut du sujet." },
        { order: 3, prompt: "Dans Bayrem paraît fatigué, quel est l'attribut du sujet ?", answer: "fatigué", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Fatigué qualifie Bayrem après le verbe d'état paraît, c'est l'attribut du sujet." },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne réponse : dans elle reste silencieuse, silencieuse est...",
          options: ["un attribut du sujet", "un COD", "un complément circonstanciel"],
          answer: "un attribut du sujet",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Silencieuse qualifie elle après le verbe d'état reste, c'est un attribut du sujet."
        },
        { order: 5, prompt: "Dans ce gâteau semble délicieux, quel est l'attribut du sujet ?", answer: "délicieux", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Délicieux qualifie ce gâteau après le verbe d'état semble, c'est l'attribut du sujet." },
        { order: 6, prompt: "Défi : dans mes parents sont très fiers de moi, cite l'attribut du sujet.", answer: "fiers", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Fiers qualifie mes parents après le verbe d'état sont, c'est l'attribut du sujet." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Son ou sont",
      xpReward: 22,
      story: {
        hook: "Deux mots jumeaux : l'un exprime la possession, l'autre est le verbe être.",
        concreteExample: "Bayrem range ___ cartable. Est-ce son ou sont ?",
        reveal: "On peut dire son cartable, mon cartable : c'est un déterminant possessif, on écrit son. Sont vient du verbe être (ils sont, elles sont).",
        bridgeToConcept: "Son est un déterminant possessif devant un nom. Sont est le verbe être à la 3e personne du pluriel, on peut le remplacer par étaient.",
        illustrationEmoji: "🎒"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Bayrem range son cartable : possession, comme mon cartable.", illustrationEmoji: "🎒" },
            { text: "Ils sont contents de leur journée : verbe être, on peut dire ils étaient contents.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce du test",
          steps: [
            { text: "Remplace par étaient : si ça marche, c'est sont.", illustrationEmoji: "🔍" },
            { text: "Sinon, essaie mon ou ton à la place : si ça marche, c'est son.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Bayrem range ___ cartable. (son/sont)", answer: "son", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On peut dire mon cartable, donc on écrit son, le déterminant possessif.", strictAccents: true },
        { order: 2, prompt: "Complète : Ils ___ contents de leur journée. (son/sont)", answer: "sont", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "On peut dire ils étaient contents, donc on écrit sont, le verbe être.", strictAccents: true },
        { order: 3, prompt: "Complète : Balkis a perdu ___ écharpe rouge. (son/sont)", answer: "son", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On peut dire mon écharpe, donc on écrit son, le déterminant possessif.", strictAccents: true },
        { order: 4, prompt: "Complète : Mes cousins ___ arrivés en retard. (son/sont)", answer: "sont", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "On peut dire mes cousins étaient arrivés, donc on écrit sont, le verbe être.", strictAccents: true },
        { order: 5, prompt: "Complète : Il adore ___ chien. (son/sont)", answer: "son", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "On peut dire mon chien, donc on écrit son, le déterminant possessif.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. Balkis et Bayrem ___ (sont) heureux car ___ (son) grand-père arrive demain.", answer: "sont son", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Tu étais proche ! Balkis et Bayrem étaient heureux fonctionne, donc sont. Puis mon grand-père fonctionne, donc son.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Calculer le quart et les trois quarts d'un nombre",
      xpReward: 22,
      story: {
        hook: "Tu sais trouver la moitié d'un nombre. Découvrons maintenant le quart.",
        concreteExample: "Combien font le quart de 20 ?",
        reveal: "Le quart de 20, c'est 20 divisé par 4, soit 5. Les trois quarts, c'est trois fois ce quart : 3 x 5 = 15.",
        bridgeToConcept: "Le quart d'un nombre = le nombre divisé par 4. Les trois quarts = le quart multiplié par 3.",
        illustrationEmoji: "🍰"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "Le quart de 40 = 40 divisé par 4 = 10.", illustrationEmoji: "🔢" },
            { text: "Les trois quarts de 40 = 3 x 10 = 30.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Le quart de 8 = 2.", illustrationEmoji: "🔍" },
            { text: "Les trois quarts de 8 = 3 x 2 = 6.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule le quart de 20.", answer: "5", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Le quart de 20, c'est 20 divisé par 4, soit 5." },
        { order: 2, prompt: "Calcule le quart de 40.", answer: "10", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Le quart de 40, c'est 40 divisé par 4, soit 10." },
        { order: 3, prompt: "Calcule les trois quarts de 20.", answer: "15", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Le quart de 20 est 5, donc les trois quarts sont 3 x 5 = 15." },
        { order: 4, prompt: "Calcule le quart de 12.", answer: "3", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Le quart de 12, c'est 12 divisé par 4, soit 3." },
        { order: 5, prompt: "Calcule les trois quarts de 12.", answer: "9", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Le quart de 12 est 3, donc les trois quarts sont 3 x 3 = 9." },
        { order: 6, prompt: "Défi : calcule le quart de 100, puis ajoute les trois quarts de 8. Quel est le résultat ?", answer: "31", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Le quart de 100 = 25. Les trois quarts de 8 : le quart de 8 est 2, donc 3 x 2 = 6. 25 + 6 = 31." }
      ]
    }
  ]
};
