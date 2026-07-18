import { DayCurriculum } from "@/models/types";

export const day07: DayCurriculum = {
  dayNumber: 7,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Les fractions simples : moitié, tiers, quart",
      xpReward: 20,
      story: {
        hook: "Imagine que tu partages une tablette de chocolat en parts égales avec des amis.",
        concreteExample: "Tu partages une tablette en 4 parts égales et tu en manges 1. Quelle fraction as-tu mangée ?",
        reveal: "Tu as mangé un quart de la tablette, noté 1/4 : 1 est le numérateur (le nombre de parts prises), 4 est le dénominateur (le nombre total de parts).",
        bridgeToConcept: "Une fraction s'écrit numérateur/dénominateur. Le dénominateur indique en combien de parts égales on partage, le numérateur indique combien de parts on prend.",
        illustrationEmoji: "🍫"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "Une pizza coupée en 2 parts égales : chaque part est 1/2, une moitié.", illustrationEmoji: "🍕" },
            { text: "Une pizza coupée en 3 parts égales : chaque part est 1/3, un tiers.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Si tu manges 2 parts sur 4, tu as mangé 2/4, soit une moitié.", illustrationEmoji: "🔍" },
            { text: "3/4 d'un gâteau représente trois parts sur quatre.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Une tablette est coupée en 4 parts égales, tu en manges 1. Quelle fraction as-tu mangée ?", answer: "1/4", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Tu prends 1 part sur les 4 parts égales : la fraction est 1/4." },
        { order: 2, prompt: "Une pizza est coupée en 2 parts égales. Quelle fraction représente une part ?", answer: "1/2", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "1 part sur 2 parts égales : c'est 1/2, une moitié." },
        { order: 3, prompt: "Un gâteau est coupé en 3 parts égales. Quelle fraction représente une part ?", answer: "1/3", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "1 part sur 3 parts égales : c'est 1/3, un tiers." },
        { order: 4, prompt: "Dans la fraction 3/4, quel est le numérateur ?", answer: "3", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Le numérateur est le nombre du haut, qui indique combien de parts on prend : 3." },
        { order: 5, prompt: "Dans la fraction 3/4, quel est le dénominateur ?", answer: "4", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Le dénominateur est le nombre du bas, qui indique le nombre total de parts : 4." },
        { order: 6, prompt: "Défi : tu manges 2 parts sur 4 d'une tarte. À quelle fraction plus simple cela correspond-il ? (indice : une moitié)", answer: "1/2", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "2/4, c'est comme 1 part sur 2 : cela correspond à 1/2." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le passé composé",
      xpReward: 20,
      story: {
        hook: "Imagine que tu racontes une action terminée, qui vient de se passer.",
        concreteExample: "Écoute : hier, j'ai mangé une glace. Elle est partie en vacances.",
        reveal: "Ai mangé et est partie sont au passé composé : ce temps se forme avec l'auxiliaire avoir ou être au présent, suivi du participe passé du verbe.",
        bridgeToConcept: "Passé composé = auxiliaire avoir ou être au présent + participe passé. Avec être, le participe passé s'accorde avec le sujet.",
        illustrationEmoji: "🍦"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "Manger avec avoir : j'ai mangé, tu as mangé, il a mangé.", illustrationEmoji: "🍽️" },
            { text: "Partir avec être : je suis parti(e), elle est partie (accord au féminin).", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Nous avons fini nos devoirs (finir avec avoir).", illustrationEmoji: "📚" },
            { text: "Ils sont allés au parc (aller avec être, accord au pluriel).", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : hier, j'____ (manger) une glace au chocolat.", answer: "ai mangé", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Manger se conjugue avec avoir ; avec je, on écrit ai mangé.", strictAccents: true },
        { order: 2, prompt: "Complète : elle ____ (partir) en vacances ce matin.", answer: "est partie", kindWhenWrong: "Pas grave, on regarde ça ensemble.", explanationWhenWrong: "Partir se conjugue avec être ; avec elle, le participe passé s'accorde au féminin : est partie.", strictAccents: true },
        { order: 3, prompt: "Complète : nous ____ (finir) nos devoirs avant le dîner.", answer: "avons fini", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Finir se conjugue avec avoir ; avec nous, on écrit avons fini.", strictAccents: true },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne réponse : ils ____ (aller) au parc cet après-midi.",
          options: ["sont allés", "ont allé", "sont aller"],
          answer: "sont allés",
          kindWhenWrong: "Pas grave du tout, on y retourne ensemble.",
          explanationWhenWrong: "Aller se conjugue avec être ; avec ils, le participe passé s'accorde au masculin pluriel : sont allés.",
          strictAccents: true
        },
        { order: 5, prompt: "Complète : tu ____ (voir) un bel arc-en-ciel hier soir.", answer: "as vu", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Voir se conjugue avec avoir ; avec tu, on écrit as vu.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux verbes. Elle ____ (arriver) tôt et elle ____ (préparer) le petit-déjeuner.", answer: "est arrivée a préparé", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble.", explanationWhenWrong: "Arriver se conjugue avec être, accord au féminin : est arrivée. Préparer se conjugue avec avoir : a préparé.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Le complément d'objet indirect (COI)",
      xpReward: 20,
      story: {
        hook: "Imagine un verbe qui a besoin d'un complément introduit par un petit mot comme à ou de.",
        concreteExample: "Regarde : il parle à son ami. À qui parle-t-il ?",
        reveal: "À son ami répond à la question à qui ? et est introduit par la préposition à : c'est le complément d'objet indirect (COI).",
        bridgeToConcept: "Le COI complète le verbe grâce à une préposition (à, de) et répond aux questions à qui ?, à quoi ?, de qui ?, de quoi ?",
        illustrationEmoji: "💬"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "Elle pense à ses vacances : à ses vacances répond à à quoi ?, c'est le COI.", illustrationEmoji: "🏖️" },
            { text: "Il parle de son voyage : de son voyage répond à de quoi ?, c'est le COI.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Nous obéissons à nos parents : à nos parents est le COI.", illustrationEmoji: "🔍" },
            { text: "Attention, dans elle mange une pomme, une pomme est un COD, sans préposition.", illustrationEmoji: "⚠️" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans il parle à son ami, quel est le COI ?", answer: "à son ami", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "À son ami répond à la question à qui ? avec la préposition à : c'est le COI." },
        { order: 2, prompt: "Dans elle pense à ses vacances, quel est le COI ?", answer: "à ses vacances", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "À ses vacances répond à la question à quoi ? avec la préposition à : c'est le COI." },
        { order: 3, prompt: "Dans nous obéissons à nos parents, quel est le COI ?", answer: "à nos parents", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "À nos parents répond à la question à qui ? avec la préposition à : c'est le COI." },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne réponse : dans il parle de son voyage, de son voyage est...",
          options: ["un COI", "un COD", "un sujet"],
          answer: "un COI",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "De son voyage répond à la question de quoi ? avec la préposition de : c'est un COI."
        },
        { order: 5, prompt: "Dans elle rêve de ses vacances, quel est le COI ?", answer: "de ses vacances", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "De ses vacances répond à la question de quoi ? avec la préposition de : c'est le COI." },
        { order: 6, prompt: "Défi : dans mon frère téléphone à sa cousine et parle de son voyage, cite les deux COI, dans l'ordre.", answer: "à sa cousine de son voyage", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "À sa cousine (à qui ?) et de son voyage (de quoi ?) sont les deux COI." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "On/ont et son/sont",
      xpReward: 20,
      story: {
        hook: "Imagine encore des paires de mots qui se prononcent pareil mais qui n'ont pas le même sens.",
        concreteExample: "Regarde : ils ___ faim. Est-ce que c'est on ou ont ?",
        reveal: "Ont vient du verbe avoir (ils ont), remplaçable par avaient. On est un pronom (comme il ou elle), remplaçable par il.",
        bridgeToConcept: "Ont = verbe avoir, remplaçable par avaient. On = pronom, remplaçable par il. Son = possessif, remplaçable par mon. Sont = verbe être, remplaçable par étaient.",
        illustrationEmoji: "🔍"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "Ils ont faim : on peut dire ils avaient faim, donc ont.", illustrationEmoji: "🍽️" },
            { text: "On joue dans le jardin : on peut dire il joue, donc on.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Il aime son chien : on peut dire mon chien, donc son.", illustrationEmoji: "🐕" },
            { text: "Elles sont contentes : on peut dire elles étaient contentes, donc sont.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : ils ___ très faim ce soir. (on/ont)", answer: "ont", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "On peut dire ils avaient faim : c'est le verbe avoir, on écrit ont.", strictAccents: true },
        { order: 2, prompt: "Complète : ___ joue dans le jardin après l'école. (on/ont)", answer: "on", kindWhenWrong: "Pas grave, on regarde ça ensemble.", explanationWhenWrong: "On peut remplacer par il joue : c'est le pronom on.", strictAccents: true },
        { order: 3, prompt: "Complète : il aime beaucoup ___ chien. (son/sont)", answer: "son", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "On peut remplacer par mon chien : c'est le possessif son.", strictAccents: true },
        { order: 4, prompt: "Complète : elles ___ très contentes de la nouvelle. (son/sont)", answer: "sont", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "On peut dire elles étaient contentes : c'est le verbe être, on écrit sont.", strictAccents: true },
        { order: 5, prompt: "Complète : mes parents ___ déjà préparé le repas. (on/ont)", answer: "ont", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "On peut dire mes parents avaient préparé : c'est le verbe avoir, on écrit ont.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les quatre mots. ___ (on) sait que Paul et ___ (son) frère ___ (sont) arrivés et qu'ils ___ (ont) faim.", answer: "on son sont ont", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble.", explanationWhenWrong: "On sait (pronom, remplaçable par il), son frère (possessif, remplaçable par mon), sont arrivés (verbe être), ont faim (verbe avoir).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Additionner et soustraire des centaines rondes",
      xpReward: 20,
      story: {
        hook: "Imagine que tu calcules très vite des sommes avec des centaines rondes, sans poser l'opération.",
        concreteExample: "Un magasin vend 348 jouets, puis en reçoit 200 de plus. Combien en a-t-il maintenant ?",
        reveal: "348 + 200 = 548. On ajoute simplement 2 aux centaines : 3 devient 5.",
        bridgeToConcept: "Pour additionner ou soustraire une centaine ronde, on modifie seulement le chiffre des centaines, le reste ne change pas.",
        illustrationEmoji: "🏪"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "570 - 300 = 270 : on retire 3 aux centaines, 5 devient 2.", illustrationEmoji: "🔢" },
            { text: "425 + 300 = 725 : on ajoute 3 aux centaines, 4 devient 7.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "612 - 400 = 212.", illustrationEmoji: "🔍" },
            { text: "256 + 400 = 656.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 348 + 200", answer: "548", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On ajoute 2 aux centaines : 348 + 200 = 548." },
        { order: 2, prompt: "Calcule : 570 - 300", answer: "270", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "On retire 3 aux centaines : 570 - 300 = 270." },
        { order: 3, prompt: "Calcule : 425 + 300", answer: "725", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On ajoute 3 aux centaines : 425 + 300 = 725." },
        { order: 4, prompt: "Calcule : 612 - 400", answer: "212", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "On retire 4 aux centaines : 612 - 400 = 212." },
        { order: 5, prompt: "Calcule : 256 + 400", answer: "656", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "On ajoute 4 aux centaines : 256 + 400 = 656." },
        { order: 6, prompt: "Défi : calcule 730 - 500, puis ajoute 200 au résultat. Quel est le résultat final ?", answer: "430", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "730 - 500 = 230, puis 230 + 200 = 430." }
      ]
    }
  ]
};
