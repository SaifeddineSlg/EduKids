import { DayCurriculum } from "@/models/types";

export const day12: DayCurriculum = {
  dayNumber: 12,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Les nombres jusqu'à 10 000",
      xpReward: 26,
      story: {
        hook: "Imagine que tu ranges maintenant tes jetons par très grands paquets de mille, comme des cartons remplis de dix sacs de cent.",
        concreteExample: "Tu as 3 cartons de mille jetons, 2 sacs de cent, 4 paquets de dix et 5 jetons tout seuls. Combien de jetons as-tu en tout ?",
        reveal: "3 cartons de mille, ça fait 3000. Avec 2 sacs de cent, ça fait 200 de plus. Avec 4 paquets de dix, ça fait 40 de plus. Et 5 jetons tout seuls. En tout : 3000 + 200 + 40 + 5 = 3245. Bravo, tu viens de lire un nombre à quatre chiffres !",
        bridgeToConcept: "Un nombre comme 3245 veut dire 3 milliers, 2 centaines, 4 dizaines et 5 unités.",
        illustrationEmoji: "🔢"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "5218, c'est 5 milliers (5000), 2 centaines (200), 1 dizaine (10) et 8 unités (8).", illustrationEmoji: "🔟" },
            { text: "7003, c'est 7 milliers (7000), 0 centaine, 0 dizaine et 3 unités (3).", illustrationEmoji: "🔟" }
          ]
        },
        {
          title: "L'astuce pour lire les nombres",
          steps: [
            { text: "Le premier chiffre dit combien de milliers.", illustrationEmoji: "🔍" },
            { text: "Les trois chiffres suivants disent combien de centaines, de dizaines et d'unités restent.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Combien de milliers dans le nombre 4567 ?", answer: "4", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "4567, c'est 4 milliers, 5 centaines, 6 dizaines et 7 unités." },
        { order: 2, prompt: "Combien de centaines dans le nombre 6328 ?", answer: "3", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "6328, c'est 6 milliers, 3 centaines, 2 dizaines et 8 unités." },
        { order: 3, prompt: "Combien d'unités dans le nombre 9154 ?", answer: "4", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "9154, c'est 9 milliers, 1 centaine, 5 dizaines et 4 unités." },
        { order: 4, prompt: "Quel nombre a 2 milliers, 3 centaines, 4 dizaines et 1 unité ?", answer: "2341", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "2 milliers (2000), 3 centaines (300), 4 dizaines (40) et 1 unité (1), ça fait 2341." },
        { order: 5, prompt: "Quel nombre vient juste après 3999 ?", answer: "4000", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Après 3999, on passe au millier suivant : 4000." },
        { order: 6, prompt: "Défi : quel nombre vient juste avant 10000 ?", answer: "9999", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Juste avant 10000, il y a 9999, le plus grand nombre à quatre chiffres." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le passé composé avec être, verbes de déplacement",
      xpReward: 26,
      story: {
        hook: "Certains verbes qui racontent un déplacement utilisent un autre auxiliaire au passé composé : être.",
        concreteExample: "Écoute : je suis allé, tu es allé, il est allé, nous sommes allés, vous êtes allés, ils sont allés.",
        reveal: "À quoi sert cette différence ? Certains verbes de mouvement comme aller, venir, partir, arriver utilisent être au lieu d'avoir. Comment le reconnaître ? Avec être, le participe passé s'accorde avec le sujet, comme un adjectif : elle est allée, avec un e.",
        bridgeToConcept: "Passé composé avec être : sujet + être au présent + participe passé accordé (allé, allée, allés, allées).",
        illustrationEmoji: "🚶"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Hier, elle est allée chez sa grand-mère.", illustrationEmoji: "👵" },
            { text: "Ce matin, ils sont partis très tôt.", illustrationEmoji: "🌅" }
          ]
        },
        {
          title: "Attention à l'erreur fréquente",
          steps: [
            { text: "Beaucoup d'enfants oublient d'accorder le participe passé avec être.", illustrationEmoji: "❌" },
            { text: "Avec être, il faut accorder : elle est allée (féminin), ils sont partis (pluriel).", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Elle ____ (aller) à l'école ce matin.", answer: "est allée", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Avec être, le participe passé s'accorde : elle est allée, avec un e car elle est féminin.", strictAccents: true },
        { order: 2, prompt: "Complète : Ils ____ (partir) très tôt.", answer: "sont partis", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "Avec être, le participe passé s'accorde au pluriel : ils sont partis, avec un s.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Nous ____ (arriver) en retard.",
          options: ["sommes arrivés", "avons arrivé", "sommes arrivé"],
          answer: "sommes arrivés",
          kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.",
          explanationWhenWrong: "Arriver est un verbe de déplacement : il se conjugue avec être, et le participe passé s'accorde : sommes arrivés.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Elles ____ (venir) nous voir hier.", answer: "sont venues", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Avec être, le participe passé s'accorde au féminin pluriel : elles sont venues.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Tu ____ (aller) au cinéma.",
          options: ["es allé", "as allé", "es aller"],
          answer: "es allé",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.",
          explanationWhenWrong: "Aller se conjugue avec être : tu es allé, avec le participe passé complet allé.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Vous ____ (partir) tôt et elles ____ (arriver) en retard.", answer: "êtes partis sont arrivées", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "Vous êtes partis (masculin pluriel) et elles sont arrivées (féminin pluriel) : le participe passé s'accorde à chaque fois avec être.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Les pronoms personnels sujets",
      xpReward: 26,
      story: {
        hook: "Imagine un petit mot magique qui remplace un nom pour ne pas le répéter sans arrêt.",
        concreteExample: "Regarde : Léa joue. Léa court. Léa rit. Comment éviter de répéter Léa trois fois ?",
        reveal: "On utilise elle : Léa joue. Elle court. Elle rit. À quoi servent ces petits mots ? Ils remplacent le sujet pour éviter les répétitions. Comment les reconnaître ? Ce sont je, tu, il, elle, nous, vous, ils, elles.",
        bridgeToConcept: "Les pronoms personnels sujets remplacent un nom devant le verbe : je, tu, il, elle, nous, vous, ils, elles.",
        illustrationEmoji: "🙋"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Paul joue. Il joue : il remplace Paul.", illustrationEmoji: "⚽" },
            { text: "Les enfants chantent. Ils chantent : ils remplace les enfants.", illustrationEmoji: "🎵" }
          ]
        },
        {
          title: "L'astuce pour les reconnaître",
          steps: [
            { text: "Ces petits mots se placent juste avant le verbe.", illustrationEmoji: "🔍" },
            { text: "Il en existe huit : je, tu, il, elle, nous, vous, ils, elles.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Par quel pronom remplacer Camille dans Camille chante ?", answer: "elle", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Camille est une fille, on la remplace par elle." },
        { order: 2, prompt: "Par quel pronom remplacer les garçons dans Les garçons courent ?", answer: "ils", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Les garçons est masculin pluriel, on le remplace par ils." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis le pronom qui remplace Théo et moi dans Théo et moi jouons.",
          options: ["nous", "vous", "ils"],
          answer: "nous",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Théo et moi, ça fait deux personnes dont moi : on remplace par nous."
        },
        { order: 4, prompt: "Par quel pronom remplacer ta soeur et toi dans Ta soeur et toi chantez ?", answer: "vous", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Ta soeur et toi, ça fait deux personnes dont toi : on remplace par vous." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le pronom qui remplace les fleurs dans Les fleurs poussent.",
          options: ["ils", "elles", "nous"],
          answer: "elles",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Les fleurs est féminin pluriel, on le remplace par elles."
        },
        { order: 6, prompt: "Défi : remplace par un pronom. Mes parents et moi partons en vacances.", answer: "nous", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Mes parents et moi, ça inclut moi : on remplace tout le groupe par nous." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "On ou ont : le test avec avaient",
      xpReward: 26,
      story: {
        hook: "Il existe un petit test magique pour ne jamais confondre on et ont.",
        concreteExample: "Regarde : Ils ... beaucoup de jouets. Est-ce que c'est on ou ont ?",
        reveal: "On essaie de remplacer par avaient : ils avaient beaucoup de jouets. Ça fonctionne ! Donc on écrit ont, le verbe avoir. Bravo, tu as réussi le test !",
        bridgeToConcept: "Si avaient fonctionne, on écrit ont (le verbe avoir). Sinon, on écrit on (comme il, un petit mot qui remplace quelqu'un).",
        illustrationEmoji: "🪄"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "On joue dans le jardin : on essaie avaient joue, ça ne fonctionne pas. Donc on, comme il.", illustrationEmoji: "⚽" },
            { text: "Elles ont un beau jardin : elles avaient un beau jardin fonctionne. Donc ont.", illustrationEmoji: "🌷" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Remplace toujours par avaient dans ta tête.", illustrationEmoji: "🔊" },
            { text: "Si ça marche, c'est ont. Sinon, c'est on.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Ils ___ de la chance. (on/ont)", answer: "ont", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Ils avaient de la chance fonctionne, donc c'est ont, le verbe avoir.", strictAccents: true },
        { order: 2, prompt: "Complète : ___ va au parc cet après-midi. (on/ont)", answer: "on", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "Avaient va au parc ne fonctionne pas, donc c'est on, comme il.", strictAccents: true },
        { order: 3, prompt: "Complète : Mes parents ___ acheté un cadeau. (on/ont)", answer: "ont", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Mes parents avaient acheté un cadeau fonctionne, donc c'est ont, le verbe avoir.", strictAccents: true },
        { order: 4, prompt: "Complète : ___ joue au ballon dans la cour. (on/ont)", answer: "on", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Avaient joue au ballon ne fonctionne pas, donc c'est on, comme il.", strictAccents: true },
        { order: 5, prompt: "Complète : Elles ___ trouvé la solution. (on/ont)", answer: "ont", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Elles avaient trouvé la solution fonctionne, donc c'est ont, le verbe avoir.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. ___ dit que Paul et Léa ___ gagné le concours.", answer: "on ont", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "Avaient dit ne fonctionne pas, donc on ; Paul et Léa avaient gagné fonctionne, donc ont.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "La table de multiplication de 7",
      xpReward: 26,
      story: {
        hook: "Imagine que tu comptes les jours de plusieurs semaines, avec toujours 7 jours par semaine.",
        concreteExample: "Il y a 4 semaines. Combien de jours cela fait-il en tout ?",
        reveal: "4 fois 7, ça fait 28. Bravo, tu viens d'utiliser la table de 7 !",
        bridgeToConcept: "La table de 7 : 1x7=7, 2x7=14, 3x7=21, 4x7=28, 5x7=35...",
        illustrationEmoji: "📅"
      },
      examples: [
        {
          title: "La table de 7",
          steps: [
            { text: "7 x 3 : c'est 7 + 7 + 7 = 21.", illustrationEmoji: "➕" },
            { text: "7 x 4 : c'est le double de 7 x 2, donc 28.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour la table de 7",
          steps: [
            { text: "Tu peux t'appuyer sur la table de 5, puis ajouter deux fois le nombre.", illustrationEmoji: "🙌" },
            { text: "7 x 6 : 5 x 6 = 30, plus 2 x 6 = 12, donc 42.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 7 x 2", answer: "14", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "7 x 2 = 14." },
        { order: 2, prompt: "Calcule : 7 x 3", answer: "21", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "7 x 3 = 21." },
        { order: 3, prompt: "Calcule : 7 x 4", answer: "28", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "7 x 4 = 28." },
        { order: 4, prompt: "Calcule : 7 x 6", answer: "42", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "7 x 6 = 42." },
        { order: 5, prompt: "Calcule : 7 x 8", answer: "56", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "7 x 8 = 56." },
        { order: 6, prompt: "Défi : calcule 7 x 9", answer: "63", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "7 x 9 = 63." }
      ]
    }
  ]
};
