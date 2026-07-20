import { DayCurriculum } from "@/models/types";

export const day11: DayCurriculum = {
  dayNumber: 11,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Les nombres jusqu'à 100",
      xpReward: 24,
      story: {
        hook: "Imagine une grande boîte remplie de dix paquets de dix bonbons chacun.",
        concreteExample: "Si tu as 9 paquets de dix bonbons et encore 5 bonbons tout seuls, combien de bonbons as-tu en tout ?",
        reveal: "9 paquets de dix, ça fait 90. Avec les 5 bonbons tout seuls, ça fait 95. Les nombres continuent ainsi jusqu'à 100, qui correspond à 10 paquets de dix !",
        bridgeToConcept: "Après 69, les nombres continuent : 70, 80, 90, jusqu'à 100.",
        illustrationEmoji: "💯"
      },
      examples: [
        {
          title: "Compter jusqu'à 100",
          steps: [
            { text: "90, c'est 9 dizaines.", illustrationEmoji: "📦" },
            { text: "100, c'est 10 dizaines, un nombre tout rond !", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Décomposer un grand nombre",
          steps: [
            { text: "78, c'est 7 dizaines et 8 unités.", illustrationEmoji: "📦" },
            { text: "7 dizaines font 70, plus 8 unités, ça fait bien 78.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Combien de dizaines y a-t-il dans 78 ?", answer: "7", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "78, c'est 7 dizaines et 8 unités. Le chiffre des dizaines est 7." },
        { order: 2, prompt: "Combien d'unités y a-t-il dans 78 ?", answer: "8", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "78, c'est 7 dizaines et 8 unités. Le chiffre des unités est 8." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis le nombre qui correspond à 8 dizaines et 3 unités.",
          options: ["38", "83", "80"],
          answer: "83",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "8 dizaines font 80, plus 3 unités, ça fait 83."
        },
        { order: 4, prompt: "Quel nombre vient juste après 99 ?", answer: "100", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Après 99, on arrive à 100, un nombre tout rond avec 10 dizaines." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le nombre qui correspond à 9 dizaines et 6 unités.",
          options: ["96", "69", "90"],
          answer: "96",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "9 dizaines font 90, plus 6 unités, ça fait 96."
        },
        { order: 6, prompt: "Défi : quel nombre correspond à 10 dizaines et 0 unité ?", answer: "100", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "10 dizaines font 100, sans aucune unité en plus : c'est 100." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le verbe voir au présent",
      xpReward: 24,
      story: {
        hook: "Il existe un petit mot magique qui sert à dire ce que l'on regarde avec les yeux.",
        concreteExample: "Écoute : je vois un oiseau. Tu vois la lune. Il voit un arc-en-ciel.",
        reveal: "Ce mot magique, c'est le verbe voir. À quoi sert-il ? Il sert à dire ce que l'on regarde ou aperçoit. Comment le reconnaître ? Il change selon la personne : vois, vois, voit...",
        bridgeToConcept: "Au présent : je vois, tu vois, il voit, elle voit.",
        illustrationEmoji: "👀"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Je vois un bel oiseau dans le ciel.", illustrationEmoji: "🐦" },
            { text: "Tu vois la lune briller la nuit.", illustrationEmoji: "🌙" },
            { text: "Il voit un arc-en-ciel après la pluie.", illustrationEmoji: "🌈" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Avec je et tu, on écrit vois (avec un s).", illustrationEmoji: "🎵" },
            { text: "Avec il ou elle, on écrit voit (avec un t).", illustrationEmoji: "🎵" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je ____ un oiseau.", answer: "vois", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec je, le verbe voir devient vois : je vois un oiseau. Essaie de le lire à voix haute.", strictAccents: true },
        { order: 2, prompt: "Complète : Tu ____ la lune.", answer: "vois", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Avec tu, comme avec je, le verbe voir devient vois : tu vois la lune.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Il ____ un arc-en-ciel.",
          options: ["vois", "voit", "voyons"],
          answer: "voit",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec il ou elle, le verbe voir devient voit (avec un t) : il voit un arc-en-ciel.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Elle ____ un joli papillon.", answer: "voit", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Avec elle, comme avec il, le verbe voir devient voit : elle voit un joli papillon.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Je ____ mes amis dans la cour.",
          options: ["vois", "voit", "voyez"],
          answer: "vois",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec je, on écrit toujours vois : je vois mes amis.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Tu ____ un chat et il ____ un chien.", answer: "vois voit", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Tu vois (avec tu, on écrit vois) et il voit (avec il, on écrit voit). Relis la phrase entière à voix haute.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Les pronoms personnels sujets",
      xpReward: 24,
      story: {
        hook: "Imagine que tu remplaces un nom par un tout petit mot pour ne pas le répéter.",
        concreteExample: "Regarde : Léo court. On peut dire : il court. Le mot il remplace Léo.",
        reveal: "À quoi sert ce petit mot ? Il remplace le nom pour ne pas le répéter. Comment le reconnaître ? Ce sont je, tu, il, elle, nous, vous, ils, elles : ils se placent devant le verbe.",
        bridgeToConcept: "Ces petits mots qui remplacent le nom devant le verbe s'appellent des pronoms personnels sujets.",
        illustrationEmoji: "🙋"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Léa chante. -> Elle chante.", illustrationEmoji: "🎤" },
            { text: "Le chat dort. -> Il dort.", illustrationEmoji: "🐱" }
          ]
        },
        {
          title: "L'astuce pour les reconnaître",
          steps: [
            { text: "Ces mots se trouvent juste avant le verbe.", illustrationEmoji: "🔍" },
            { text: "Je, tu, il, elle, nous, vous, ils, elles : apprends-les par cœur !", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Par quel pronom peux-tu remplacer Léo dans Léo saute ?", answer: "il", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Léo est un garçon tout seul, on le remplace par il." },
        { order: 2, prompt: "Par quel pronom peux-tu remplacer Léa dans Léa danse ?", answer: "elle", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Léa est une fille toute seule, on la remplace par elle." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis le pronom qui remplace les enfants dans les enfants jouent.",
          options: ["il", "elle", "ils"],
          answer: "ils",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Les enfants, ce sont plusieurs personnes, on les remplace par ils."
        },
        { order: 4, prompt: "Par quel pronom peux-tu remplacer maman et moi dans maman et moi chantons ?", answer: "nous", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Maman et moi, c'est toi avec une autre personne, on remplace par nous." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le pronom qui remplace les filles dans les filles dansent.",
          options: ["ils", "elles", "nous"],
          answer: "elles",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Les filles sont plusieurs et toutes féminines, on les remplace par elles."
        },
        { order: 6, prompt: "Défi : dans la phrase Léo et Léa lisent, quel pronom remplace Léo et Léa ?", answer: "ils", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Quand on mélange un garçon et une fille, on utilise toujours ils, même s'il n'y a qu'un seul garçon." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Le son [ɛ̃] : in, ain, ein",
      xpReward: 24,
      story: {
        hook: "Imagine un son nasillard qui se cache derrière plusieurs déguisements, comme les sons [k] et [s] que tu connais déjà.",
        concreteExample: "Écoute : lapin, pain, plein. Tu entends le même son [ɛ̃], mais il ne s'écrit pas pareil !",
        reveal: "À quoi ça sert de connaître ces déguisements ? À bien écrire le son [ɛ̃]. Comment le reconnaître ? Ce son s'écrit souvent in (lapin), parfois ain (pain) ou ein (plein).",
        bridgeToConcept: "Le son [ɛ̃] peut s'écrire in (lapin), ain (pain) ou ein (plein).",
        illustrationEmoji: "🐰"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Un lapin, un jardin : le son [ɛ̃] s'écrit in.", illustrationEmoji: "🐰" },
            { text: "Du pain, une main : le son [ɛ̃] s'écrit ain.", illustrationEmoji: "🍞" }
          ]
        },
        {
          title: "Encore un exemple",
          steps: [
            { text: "Plein, une ceinture : le son [ɛ̃] s'écrit ein.", illustrationEmoji: "🎒" },
            { text: "Il n'existe pas de règle simple pour choisir : il faut apprendre chaque mot.", illustrationEmoji: "🧠" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : un lap___ (lapin). (in ou ain)", answer: "in", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Lapin s'écrit avec in à la fin. Essaie de le réécrire lentement.", strictAccents: true },
        { order: 2, prompt: "Complète : du p___ (pain). (in ou ain)", answer: "ain", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Pain s'écrit avec ain. C'est un mot à retenir tel quel.", strictAccents: true },
        { order: 3, prompt: "Complète : une m___ (main). (in ou ain)", answer: "ain", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Main s'écrit avec ain, comme pain.", strictAccents: true },
        { order: 4, prompt: "Complète : plein s'écrit avec ___ à la fin. (in, ain ou ein)", answer: "ein", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Plein s'écrit avec ein. Retiens-le en le répétant à voix haute.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne écriture : un jard___ (jardin).",
          options: ["in", "ain", "ein"],
          answer: "in",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Jardin s'écrit avec in à la fin, comme lapin.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Le lap___ (lapin) mange du p___ (pain).", answer: "in ain", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Lapin s'écrit avec in et pain s'écrit avec ain : deux écritures différentes pour le même son.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "La moitié d'un nombre",
      xpReward: 24,
      story: {
        hook: "Imagine que tu partages tes bonbons en deux parts égales avec ton ami.",
        concreteExample: "Tu as 8 bonbons à partager en deux parts égales. Combien de bonbons y aura-t-il dans chaque part ?",
        reveal: "8 partagé en deux parts égales, ça fait 4 et 4. La moitié de 8, c'est 4 ! Bravo, tu as trouvé la moitié !",
        bridgeToConcept: "La moitié d'un nombre, c'est ce nombre partagé en deux parts égales.",
        illustrationEmoji: "✂️"
      },
      examples: [
        {
          title: "Trouver la moitié",
          steps: [
            { text: "La moitié de 6, c'est 3, car 3 + 3 = 6.", illustrationEmoji: "➗" },
            { text: "La moitié de 10, c'est 5, car 5 + 5 = 10.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour trouver la moitié",
          steps: [
            { text: "Pense au double : si le double de 4 est 8, alors la moitié de 8 est 4.", illustrationEmoji: "🔍" },
            { text: "La moitié, c'est le contraire du double !", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Quelle est la moitié de 4 ?", answer: "2", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "2 + 2 = 4, donc la moitié de 4 est 2." },
        { order: 2, prompt: "Quelle est la moitié de 6 ?", answer: "3", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "3 + 3 = 6, donc la moitié de 6 est 3." },
        { order: 3, prompt: "Quelle est la moitié de 10 ?", answer: "5", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "5 + 5 = 10, donc la moitié de 10 est 5." },
        { order: 4, prompt: "Quelle est la moitié de 14 ?", answer: "7", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "7 + 7 = 14, donc la moitié de 14 est 7." },
        { order: 5, prompt: "Quelle est la moitié de 16 ?", answer: "8", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "8 + 8 = 16, donc la moitié de 16 est 8." },
        { order: 6, prompt: "Défi : quelle est la moitié de 20 ?", answer: "10", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "10 + 10 = 20, donc la moitié de 20 est 10." }
      ]
    }
  ]
};
