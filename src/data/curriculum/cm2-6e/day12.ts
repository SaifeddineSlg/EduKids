import { DayCurriculum } from "@/models/types";

export const day12: DayCurriculum = {
  dayNumber: 12,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Les fractions équivalentes",
      xpReward: 20,
      story: {
        hook: "Imagine deux parts qui se ressemblent mais qui portent des noms différents.",
        concreteExample: "2/4 d'une tablette de chocolat, est-ce pareil que 1/2 ?",
        reveal: "2/4 = 1/2 : on peut simplifier une fraction en divisant le numérateur et le dénominateur par le même nombre. Ce sont des fractions équivalentes.",
        bridgeToConcept: "Deux fractions sont équivalentes si on obtient l'une à partir de l'autre en multipliant ou en divisant le numérateur et le dénominateur par le même nombre.",
        illustrationEmoji: "🟰"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "4/8 : on divise par 4 en haut et en bas, 4/8 = 1/2.", illustrationEmoji: "🔢" },
            { text: "3/6 : on divise par 3, 3/6 = 1/2.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "2/6 : on divise par 2, 2/6 = 1/3.", illustrationEmoji: "🔍" },
            { text: "5/10 : on divise par 5, 5/10 = 1/2.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Simplifie la fraction 2/4.", answer: "1/2", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On divise le numérateur et le dénominateur par 2 : 2/4 = 1/2." },
        { order: 2, prompt: "Simplifie la fraction 4/8.", answer: "1/2", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "On divise par 4 : 4/8 = 1/2." },
        { order: 3, prompt: "Simplifie la fraction 3/6.", answer: "1/2", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On divise par 3 : 3/6 = 1/2." },
        { order: 4, prompt: "Simplifie la fraction 2/6.", answer: "1/3", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "On divise par 2 : 2/6 = 1/3." },
        { order: 5, prompt: "Simplifie la fraction 5/10.", answer: "1/2", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "On divise par 5 : 5/10 = 1/2." },
        { order: 6, prompt: "Défi : simplifie la fraction 6/9 (indice : divise par 3).", answer: "2/3", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "On divise le numérateur et le dénominateur par 3 : 6/9 = 2/3." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le subjonctif présent",
      xpReward: 20,
      story: {
        hook: "Imagine que tu exprimes une obligation ou un souhait : il faut alors utiliser un mode particulier.",
        concreteExample: "Écoute : il faut que tu ranges ta chambre avant ce soir.",
        reveal: "Que tu ranges est au subjonctif présent : il exprime une obligation, un souhait ou un doute, souvent après il faut que ou je veux que.",
        bridgeToConcept: "Subjonctif présent des verbes en -er : que je parle, que tu parles, qu'il parle, que nous parlions, que vous parliez, qu'ils parlent. Être : que je sois. Avoir : que j'aie.",
        illustrationEmoji: "🙏"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Il faut que je range mes affaires avant de sortir.", illustrationEmoji: "🧹" },
            { text: "Il faut que nous mangions des légumes.", illustrationEmoji: "🥦" }
          ]
        },
        {
          title: "Être et avoir, irréguliers",
          steps: [
            { text: "Il faut que je sois à l'heure.", illustrationEmoji: "⏰" },
            { text: "Il faut que j'aie mon cahier avec moi.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète au subjonctif : il faut que je ____ (parler) plus fort.", answer: "parle", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Au subjonctif présent, avec je, parler devient parle.", strictAccents: true },
        { order: 2, prompt: "Complète au subjonctif : il faut que tu ____ (ranger) ta chambre.", answer: "ranges", kindWhenWrong: "Pas grave, on regarde ça ensemble.", explanationWhenWrong: "Au subjonctif présent, avec tu, ranger devient ranges.", strictAccents: true },
        { order: 3, prompt: "Complète au subjonctif : il faut que nous ____ (manger) des légumes.", answer: "mangions", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Au subjonctif présent, avec nous, manger devient mangions.", strictAccents: true },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne réponse : il faut que je ____ (être) à l'heure.",
          options: ["sois", "suis", "serai"],
          answer: "sois",
          kindWhenWrong: "Pas grave du tout, on y retourne ensemble.",
          explanationWhenWrong: "Être est irrégulier au subjonctif ; avec je, on écrit sois.",
          strictAccents: true
        },
        { order: 5, prompt: "Complète au subjonctif : il faut que j'____ (avoir) mon cahier avec moi.", answer: "aie", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Avoir est irrégulier au subjonctif ; avec je, on écrit aie.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux verbes au subjonctif. Il faut que vous ____ (parler) doucement et que vous ____ (être) attentifs.", answer: "parliez soyez", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble.", explanationWhenWrong: "Parler au subjonctif avec vous donne parliez ; être est irrégulier et donne soyez.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Les déterminants",
      xpReward: 20,
      story: {
        hook: "Imagine un petit mot indispensable qui se place toujours devant le nom pour l'introduire.",
        concreteExample: "Regarde : ___ chat dort sur ___ tapis. Quels petits mots manquent devant les noms ?",
        reveal: "Le et le sont des déterminants : ils introduisent toujours un nom et varient selon son genre et son nombre.",
        bridgeToConcept: "Les déterminants introduisent le nom : articles (le, la, les, un, une, des), possessifs (mon, ton, son...), démonstratifs (ce, cette, ces).",
        illustrationEmoji: "🔑"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Le chat dort : le est un article défini.", illustrationEmoji: "🐱" },
            { text: "Mon chat dort : mon est un déterminant possessif.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Ce chat dort : ce est un déterminant démonstratif.", illustrationEmoji: "🔍" },
            { text: "Un chat dort : un est un article indéfini.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans le chat dort sur le tapis, quel type de déterminant est le ?", answer: "un article défini", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Le est un article défini, il introduit un nom connu ou précis." },
        { order: 2, prompt: "Dans mon chat dort, quel type de déterminant est mon ?", answer: "un déterminant possessif", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Mon indique à qui appartient le chat : c'est un déterminant possessif." },
        { order: 3, prompt: "Dans ce chat dort, quel type de déterminant est ce ?", answer: "un déterminant démonstratif", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Ce montre le chat du doigt, en quelque sorte : c'est un déterminant démonstratif." },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne réponse : dans un chat dort, un est...",
          options: ["un article indéfini", "un article défini", "un possessif"],
          answer: "un article indéfini",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Un introduit un nom non précisé : c'est un article indéfini."
        },
        { order: 5, prompt: "Dans ces enfants jouent, quel type de déterminant est ces ?", answer: "un déterminant démonstratif", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Ces montre les enfants du doigt, au pluriel : c'est un déterminant démonstratif." },
        { order: 6, prompt: "Défi : dans mes amis adorent cette histoire, cite les deux déterminants, dans l'ordre (possessif puis démonstratif).", answer: "mes cette", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Mes est un déterminant possessif (pluriel), cette est un déterminant démonstratif (féminin singulier)." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Ces ou ses",
      xpReward: 20,
      story: {
        hook: "Imagine encore deux mots jumeaux : l'un montre du doigt, l'autre indique une possession.",
        concreteExample: "Regarde : ___ chaussures sont trop petites. Est-ce que c'est ces ou ses ?",
        reveal: "Ces (démonstratif) montre du doigt, remplaçable par ce...-là. Ses (possessif) indique une possession, remplaçable par son ou sa au singulier.",
        bridgeToConcept: "Ces = démonstratif, remplaçable par ce...-là. Ses = possessif, remplaçable par son/sa au singulier.",
        illustrationEmoji: "👟"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Ces fleurs sont magnifiques : on peut dire ces fleurs-là.", illustrationEmoji: "🌷" },
            { text: "Elle range ses affaires : on peut remplacer par son affaire au singulier, donc possessif ses.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Regarde ces oiseaux dans le ciel : démonstratif.", illustrationEmoji: "🐦" },
            { text: "Mon frère aime ses jouets : possessif, remplaçable par son jouet.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : ___ chaussures sont trop petites. (ces/ses)", answer: "ces", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "On peut dire ces chaussures-là : c'est le démonstratif ces.", strictAccents: true },
        { order: 2, prompt: "Complète : elle range ___ affaires avant de partir. (ces/ses)", answer: "ses", kindWhenWrong: "Pas grave, on regarde ça ensemble.", explanationWhenWrong: "On peut remplacer par son affaire au singulier : c'est le possessif ses.", strictAccents: true },
        { order: 3, prompt: "Complète : regarde ___ oiseaux dans le ciel ! (ces/ses)", answer: "ces", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "On peut dire ces oiseaux-là : c'est le démonstratif ces.", strictAccents: true },
        { order: 4, prompt: "Complète : mon frère adore ___ jouets. (ces/ses)", answer: "ses", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "On peut remplacer par son jouet au singulier : c'est le possessif ses.", strictAccents: true },
        { order: 5, prompt: "Complète : ___ enfants sont très polis. (ces/ses)", answer: "ces", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "On peut dire ces enfants-là : c'est le démonstratif ces.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. Elle a rangé ___ (ses) livres et ___ (ces) cahiers sur l'étagère.", answer: "ses ces", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble.", explanationWhenWrong: "Ses livres (possessif, remplaçable par son livre), ces cahiers (démonstratif, remplaçable par ces cahiers-là).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Diviser par 4",
      xpReward: 20,
      story: {
        hook: "Imagine une astuce pour diviser vite par 4 : il suffit de diviser deux fois par 2.",
        concreteExample: "Calcule 48 divisé par 4 en divisant deux fois par 2.",
        reveal: "48 divisé par 2 = 24, puis 24 divisé par 2 = 12. Donc 48 divisé par 4 = 12.",
        bridgeToConcept: "Diviser par 4 = diviser par 2, puis diviser encore par 2 (la moitié de la moitié).",
        illustrationEmoji: "➗"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "36 divisé par 4 : 36 divisé par 2 = 18, puis 18 divisé par 2 = 9.", illustrationEmoji: "🔢" },
            { text: "80 divisé par 4 : 80 divisé par 2 = 40, puis 40 divisé par 2 = 20.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "60 divisé par 4 : 60 divisé par 2 = 30, puis 30 divisé par 2 = 15.", illustrationEmoji: "🔍" },
            { text: "100 divisé par 4 : 100 divisé par 2 = 50, puis 50 divisé par 2 = 25.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 48 divisé par 4", answer: "12", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "48 divisé par 2 = 24, puis 24 divisé par 2 = 12." },
        { order: 2, prompt: "Calcule : 36 divisé par 4", answer: "9", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "36 divisé par 2 = 18, puis 18 divisé par 2 = 9." },
        { order: 3, prompt: "Calcule : 80 divisé par 4", answer: "20", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "80 divisé par 2 = 40, puis 40 divisé par 2 = 20." },
        { order: 4, prompt: "Calcule : 60 divisé par 4", answer: "15", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "60 divisé par 2 = 30, puis 30 divisé par 2 = 15." },
        { order: 5, prompt: "Calcule : 100 divisé par 4", answer: "25", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "100 divisé par 2 = 50, puis 50 divisé par 2 = 25." },
        { order: 6, prompt: "Défi : calcule 200 divisé par 4, en divisant deux fois par 2.", answer: "50", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "200 divisé par 2 = 100, puis 100 divisé par 2 = 50." }
      ]
    }
  ]
};
