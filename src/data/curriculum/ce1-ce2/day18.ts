import { DayCurriculum } from "@/models/types";

export const day18: DayCurriculum = {
  dayNumber: 18,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Lire l'heure : heures et demi-heures",
      xpReward: 26,
      story: {
        hook: "Imagine une horloge avec deux aiguilles qui tournent, une petite pour les heures et une grande pour les minutes.",
        concreteExample: "La petite aiguille est sur le 3, et la grande aiguille est sur le 12. Quelle heure est-il ?",
        reveal: "Il est 3 heures. Quand la grande aiguille est sur le 12, elle indique pile l'heure. Quand elle est sur le 6, ça veut dire une demi-heure de plus. Bravo, tu sais lire l'heure !",
        bridgeToConcept: "La petite aiguille indique l'heure ; la grande aiguille sur le 12 indique l'heure pile, sur le 6 elle indique une demi-heure.",
        illustrationEmoji: "🕒"
      },
      examples: [
        {
          title: "Lire l'heure pile",
          steps: [
            { text: "Petite aiguille sur le 8, grande aiguille sur le 12 : il est 8 heures.", illustrationEmoji: "🕗" },
            { text: "Petite aiguille sur le 5, grande aiguille sur le 12 : il est 5 heures.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Lire la demi-heure",
          steps: [
            { text: "Petite aiguille entre le 2 et le 3, grande aiguille sur le 6 : il est 2 heures et demie.", illustrationEmoji: "🕝" },
            { text: "On dit et demie, car la moitié des 60 minutes est passée.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "La petite aiguille est sur le 6, la grande sur le 12. Quelle heure est-il ?", answer: "6 heures", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "La grande aiguille sur le 12 indique l'heure pile : il est 6 heures." },
        { order: 2, prompt: "La petite aiguille est entre le 9 et le 10, la grande sur le 6. Quelle heure est-il ?", answer: "9 heures et demie", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "La grande aiguille sur le 6 indique une demi-heure de plus : il est 9 heures et demie." },
        { order: 3, prompt: "La petite aiguille est sur le 11, la grande sur le 12. Quelle heure est-il ?", answer: "11 heures", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "La grande aiguille sur le 12 indique l'heure pile : il est 11 heures." },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne heure : petite aiguille entre le 4 et le 5, grande aiguille sur le 6.",
          options: ["4 heures", "4 heures et demie", "5 heures"],
          answer: "4 heures et demie",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "La grande aiguille sur le 6 indique une demi-heure de plus : il est 4 heures et demie."
        },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne heure : petite aiguille sur le 1, grande aiguille sur le 12.",
          options: ["1 heure", "1 heure et demie", "12 heures"],
          answer: "1 heure",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "La grande aiguille sur le 12 indique l'heure pile : il est 1 heure."
        },
        { order: 6, prompt: "Défi : il est 7 heures et demie. Dans une demi-heure, quelle heure sera-t-il ?", answer: "8 heures", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Une demi-heure après 7 heures et demie, la grande aiguille revient sur le 12 : il sera 8 heures." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le présent des verbes prendre et voir",
      xpReward: 26,
      story: {
        hook: "Certains verbes très utilisés ne suivent aucun modèle régulier : ce sont des verbes du troisième groupe, comme prendre et voir.",
        concreteExample: "Écoute : je prends, tu prends, il prend, nous prenons, vous prenez, ils prennent / je vois, tu vois, il voit, nous voyons, vous voyez, ils voient.",
        reveal: "À quoi sert de bien les connaître ? Ils sont utilisés dans énormément de phrases. Comment les reconnaître ? Le radical change entre le singulier et le pluriel : prend- devient prenn- avec ils, et voi- devient voy- avec nous et vous.",
        bridgeToConcept: "Prendre : prends, prends, prend, prenons, prenez, prennent. Voir : vois, vois, voit, voyons, voyez, voient.",
        illustrationEmoji: "👀"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Je prends mon cartable avant de partir.", illustrationEmoji: "🎒" },
            { text: "Nous voyons un bel arc-en-ciel dans le ciel.", illustrationEmoji: "🌈" }
          ]
        },
        {
          title: "Attention à l'erreur fréquente",
          steps: [
            { text: "Beaucoup d'enfants écrivent ils prendent au lieu de ils prennent.", illustrationEmoji: "❌" },
            { text: "Avec ils, prendre double le n : ils prennent, jamais ils prendent.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je ____ (prendre) mon goûter.", answer: "prends", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Avec je, prendre devient prends. Essaie de le lire à voix haute.", strictAccents: true },
        { order: 2, prompt: "Complète : Nous ____ (voir) un bel oiseau.", answer: "voyons", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "Avec nous, voir devient voyons : le i se transforme en y devant la terminaison -ons.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Ils ____ (prendre) le bus tous les matins.",
          options: ["prenent", "prennent", "prends"],
          answer: "prennent",
          kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.",
          explanationWhenWrong: "Avec ils, prendre devient prennent, avec deux n, jamais prenent.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Vous ____ (voir) la mer depuis la fenêtre.", answer: "voyez", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Avec vous, voir devient voyez : le i se transforme en y devant la terminaison -ez.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Elle ____ (prendre) son parapluie.",
          options: ["prend", "prends", "prennent"],
          answer: "prend",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.",
          explanationWhenWrong: "Avec elle, prendre devient prend, sans s à la fin.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Nous ____ (prendre) le train et ils ____ (voir) leurs cousins.", answer: "prenons voient", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "Nous prenons vient de prendre, et ils voient vient de voir : deux verbes irréguliers du troisième groupe.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Le féminin des noms",
      xpReward: 26,
      story: {
        hook: "Imagine un nom masculin qui change de vêtement pour devenir féminin.",
        concreteExample: "Regarde : un ami, une amie. Un boulanger, une boulangère. Qu'est-ce qui change à chaque fois ?",
        reveal: "À quoi ça sert ? À montrer que le nom désigne une femme ou une fille. Comment le reconnaître ? La plupart des noms ajoutent un e ; certaines terminaisons changent davantage, comme -er qui devient -ère.",
        bridgeToConcept: "Au féminin, on ajoute souvent un e (ami devient amie) ; certaines terminaisons changent, comme -er en -ère (boulanger devient boulangère) ou -eur en -euse (danseur devient danseuse).",
        illustrationEmoji: "👗"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Un ami, une amie : on ajoute un e.", illustrationEmoji: "🧑‍🤝‍🧑" },
            { text: "Un boulanger, une boulangère : -er devient -ère.", illustrationEmoji: "🥖" }
          ]
        },
        {
          title: "L'astuce pour le féminin des noms",
          steps: [
            { text: "La plupart des noms ajoutent simplement un e.", illustrationEmoji: "🔍" },
            { text: "Certaines terminaisons ont une règle spéciale : -eur devient souvent -euse (danseur devient danseuse).", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Mets au féminin : un ami -> une ____", answer: "amie", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Au féminin, on ajoute un e : amie." },
        { order: 2, prompt: "Mets au féminin : un boulanger -> une ____", answer: "boulangère", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "La terminaison -er devient -ère au féminin : boulangère." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis le bon féminin de danseur.",
          options: ["danseuse", "danseure", "danseuze"],
          answer: "danseuse",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "La terminaison -eur devient souvent -euse au féminin : danseuse."
        },
        { order: 4, prompt: "Mets au féminin : un cousin -> une ____", answer: "cousine", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Au féminin, on ajoute un e : cousine." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le bon féminin de directeur.",
          options: ["directeuse", "directrice", "directeure"],
          answer: "directrice",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "La terminaison -teur devient souvent -trice au féminin : directrice."
        },
        { order: 6, prompt: "Défi : mets au féminin les deux mots. Un chanteur -> une ____ et un fermier -> une ____", answer: "chanteuse fermière", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Chanteur devient chanteuse (-eur en -euse), et fermier devient fermière (-er en -ère)." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Quel, quelle ou qu'elle : le test avec qu'il",
      xpReward: 26,
      story: {
        hook: "Il existe un petit test magique pour ne jamais confondre quel, quelle et qu'elle.",
        concreteExample: "Regarde : Je me demande ... elle viendra. Est-ce que c'est quelle ou qu'elle ?",
        reveal: "On essaie de remplacer par qu'il : je me demande qu'il viendra. Ça fonctionne ! Donc on écrit qu'elle, en deux mots, avec une apostrophe. Si le mot est un adjectif devant un nom, pour interroger ou s'exclamer, on écrit quel, quelle, quels ou quelles, accordé avec le nom. Bravo, tu as réussi le test !",
        bridgeToConcept: "Si on peut remplacer par qu'il, on écrit qu'elle (que + elle). Sinon, devant un nom, on écrit quel, quelle, quels ou quelles, accordé en genre et en nombre.",
        illustrationEmoji: "🪄"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Quelle belle journée ! : quelle s'accorde avec journée, féminin singulier.", illustrationEmoji: "☀️" },
            { text: "Je pense qu'elle viendra bientôt : je pense qu'il viendra bientôt fonctionne, donc qu'elle, en deux mots.", illustrationEmoji: "🕐" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Essaie de remplacer par qu'il dans ta tête.", illustrationEmoji: "🔊" },
            { text: "Si ça marche, c'est qu'elle. Sinon, accorde quel avec le nom qui suit.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : ___ belle journée ! (quelle/qu'elle)", answer: "quelle", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Quelle est un adjectif accordé avec journée, féminin singulier : quelle belle journée !", strictAccents: true },
        { order: 2, prompt: "Complète : Je crois ___ arrivera bientôt. (quelle/qu'elle)", answer: "qu'elle", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "Je crois qu'il arrivera bientôt fonctionne, donc on écrit qu'elle, en deux mots.", strictAccents: true },
        { order: 3, prompt: "Complète : ___ heure est-il ? (quelle/qu'elle)", answer: "quelle", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Quelle est un adjectif accordé avec heure, féminin singulier : quelle heure est-il ?", strictAccents: true },
        { order: 4, prompt: "Complète : J'espère ___ soit contente. (quelle/qu'elle)", answer: "qu'elle", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "J'espère qu'il soit content fonctionne, donc on écrit qu'elle, en deux mots.", strictAccents: true },
        { order: 5, prompt: "Complète : ___ jolis dessins ! (quels/qu'elles)", answer: "quels", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Quels est un adjectif accordé avec dessins, masculin pluriel : quels jolis dessins !", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. ___ chance ___ ait gagné ce concours ! (quelle/qu'elle)", answer: "quelle qu'elle", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "Quelle chance s'accorde avec chance, féminin singulier ; qu'il ait gagné fonctionne pour qu'elle, en deux mots.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Les moitiés des nombres ronds jusqu'à 100",
      xpReward: 26,
      story: {
        hook: "Imagine que tu partages maintenant de grandes quantités de bonbons rangées par dizaines.",
        concreteExample: "Tu as 80 images à partager en deux parts égales. Combien chaque part contient-elle ?",
        reveal: "La moitié de 80, c'est 40, car 40 + 40 = 80. Avec des dizaines rondes, c'est aussi facile qu'avec les petits nombres. Bravo !",
        bridgeToConcept: "La moitié d'un nombre rond comme 80, c'est comme partager en deux le chiffre des dizaines : la moitié de 80 est 40.",
        illustrationEmoji: "➗"
      },
      examples: [
        {
          title: "Calculer une moitié de dizaine",
          steps: [
            { text: "La moitié de 60, c'est 30, car 30 + 30 = 60.", illustrationEmoji: "➗" },
            { text: "La moitié de 90, c'est 45, car 45 + 45 = 90.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour les moitiés de dizaines",
          steps: [
            { text: "Pense au double : si le double de 30 est 60, alors la moitié de 60 est 30.", illustrationEmoji: "🔍" },
            { text: "La moitié de 100 est 50 : facile à retenir.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Quelle est la moitié de 40 ?", answer: "20", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "La moitié de 40, c'est 20, car 20 + 20 = 40." },
        { order: 2, prompt: "Quelle est la moitié de 60 ?", answer: "30", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "La moitié de 60, c'est 30, car 30 + 30 = 60." },
        { order: 3, prompt: "Quelle est la moitié de 100 ?", answer: "50", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "La moitié de 100, c'est 50, car 50 + 50 = 100." },
        { order: 4, prompt: "Quelle est la moitié de 70 ?", answer: "35", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "La moitié de 70, c'est 35, car 35 + 35 = 70." },
        { order: 5, prompt: "Quelle est la moitié de 90 ?", answer: "45", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "La moitié de 90, c'est 45, car 45 + 45 = 90." },
        { order: 6, prompt: "Défi : calcule la moitié de 80, puis ajoute 5.", answer: "45", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "La moitié de 80 est 40, puis 40 + 5 = 45." }
      ]
    }
  ]
};
