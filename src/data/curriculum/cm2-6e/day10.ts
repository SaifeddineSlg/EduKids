import { DayCurriculum } from "@/models/types";

export const day10: DayCurriculum = {
  dayNumber: 10,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Révision : multiplication de décimaux, fractions, périmètre, division décimale",
      xpReward: 22,
      story: {
        hook: "Cette semaine, tu as encore beaucoup progressé en mathématiques. Faisons le tour ensemble !",
        concreteExample: "Tu sais maintenant multiplier et diviser des nombres décimaux, reconnaître des fractions simples, et calculer le périmètre d'un rectangle.",
        reveal: "Ces compétences te préparent très bien pour le collège.",
        bridgeToConcept: "Révisons : multiplication de décimaux, fractions simples, périmètre du carré et du rectangle, division de décimaux.",
        illustrationEmoji: "🎓"
      },
      examples: [
        {
          title: "Rappel multiplication et fractions",
          steps: [
            { text: "4 x 2,50 = 10,00.", illustrationEmoji: "🍫" },
            { text: "Une tablette coupée en 4 parts, tu en manges 1 : 1/4.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Rappel périmètre et division",
          steps: [
            { text: "Un rectangle de 5 m sur 3 m : périmètre = (5+3) x 2 = 16 m.", illustrationEmoji: "📐" },
            { text: "9,60 divisé par 4 = 2,40.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 3 x 1,25", answer: "3,75", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "3 x 125 = 375, on replace la virgule : 3,75." },
        { order: 2, prompt: "Une pizza est coupée en 3 parts égales. Quelle fraction représente une part ?", answer: "1/3", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "1 part sur 3 parts égales : c'est 1/3, un tiers." },
        { order: 3, prompt: "Calcule le périmètre d'un carré de côté 6 cm.", answer: "24", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "6 x 4 = 24 cm." },
        { order: 4, prompt: "Calcule : 8,4 divisé par 2", answer: "4,2", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "84 divisé par 2 = 42, on replace la virgule : 4,2." },
        { order: 5, prompt: "Calcule le périmètre d'un rectangle de 8 cm sur 3 cm.", answer: "22", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "(8 + 3) x 2 = 22 cm." },
        { order: 6, prompt: "Défi : un jus de fruits coûte 1,20 €. Combien coûtent 6 bouteilles ?", answer: "7,20", acceptedAnswers: ["7,2"], kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "6 x 1,20 = 7,20 €." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Révision : imparfait, passé composé, futur simple, conditionnel présent",
      xpReward: 22,
      story: {
        hook: "Cette semaine, tu as exploré encore plusieurs temps très utiles. Résumons !",
        concreteExample: "Imparfait : je jouais. Passé composé : j'ai mangé, elle est partie. Futur simple : je jouerai. Conditionnel présent : je promènerais.",
        reveal: "Chaque temps a son rôle précis pour raconter le passé, l'habitude, le futur ou une action possible.",
        bridgeToConcept: "Révisons : l'imparfait, le passé composé, le futur simple des verbes réguliers, le conditionnel présent.",
        illustrationEmoji: "🕰️"
      },
      examples: [
        {
          title: "Rappel imparfait et passé composé",
          steps: [
            { text: "Quand j'étais petit, je jouais dans le jardin (imparfait).", illustrationEmoji: "🧸" },
            { text: "Hier, j'ai mangé une glace ; elle est partie en vacances (passé composé).", illustrationEmoji: "🍦" }
          ]
        },
        {
          title: "Rappel futur simple et conditionnel",
          steps: [
            { text: "Demain, je jouerai au football (futur simple).", illustrationEmoji: "⚽" },
            { text: "Si j'avais un chien, je le promènerais (conditionnel présent).", illustrationEmoji: "🌈" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : quand j'étais petit, je ____ (jouer) dans le jardin.", answer: "jouais", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "À l'imparfait, avec je, jouer devient jouais.", strictAccents: true },
        { order: 2, prompt: "Complète : hier, j'____ (manger) une glace au chocolat.", answer: "ai mangé", kindWhenWrong: "Pas grave, on regarde ça ensemble.", explanationWhenWrong: "Manger se conjugue avec avoir au passé composé ; avec je, on écrit ai mangé.", strictAccents: true },
        { order: 3, prompt: "Complète : elle ____ (partir) en vacances ce matin.", answer: "est partie", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Partir se conjugue avec être ; avec elle, le participe passé s'accorde au féminin : est partie.", strictAccents: true },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne réponse : demain, je ____ (jouer) au football.",
          options: ["jouerai", "jouerais", "jouais"],
          answer: "jouerai",
          kindWhenWrong: "Pas grave du tout, on y retourne ensemble.",
          explanationWhenWrong: "Au futur simple, avec je, jouer devient jouerai.",
          strictAccents: true
        },
        { order: 5, prompt: "Complète : si j'avais un chien, je le ____ (promener) tous les jours.", answer: "promènerais", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Au conditionnel présent, avec je, promener devient promènerais.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux verbes. Ils ____ (aller) au parc hier et demain ils ____ (jouer) encore ensemble.", answer: "sont allés joueront", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble.", explanationWhenWrong: "Ils sont allés (passé composé, aller avec être) et ils joueront (futur simple de jouer).", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Révision : COD, COI, compléments circonstanciels, attribut du sujet",
      xpReward: 22,
      story: {
        hook: "Cette semaine, tu as analysé de nombreux compléments dans la phrase. Récapitulons !",
        concreteExample: "COD, COI, compléments circonstanciels de lieu, de temps, de manière, et attribut du sujet.",
        reveal: "Chaque complément a un rôle précis autour du verbe et t'aide à mieux comprendre la construction des phrases.",
        bridgeToConcept: "Révisons : le complément d'objet direct, le complément d'objet indirect, les compléments circonstanciels, l'attribut du sujet.",
        illustrationEmoji: "🧩"
      },
      examples: [
        {
          title: "Rappel COD et COI",
          steps: [
            { text: "Elle lit un livre : un livre est le COD.", illustrationEmoji: "📖" },
            { text: "Il parle à son ami : à son ami est le COI.", illustrationEmoji: "💬" }
          ]
        },
        {
          title: "Rappel compléments circonstanciels et attribut",
          steps: [
            { text: "Hier, il a joué au parc avec joie : temps, lieu, manière.", illustrationEmoji: "🗺️" },
            { text: "Le ciel est bleu : bleu est l'attribut du sujet.", illustrationEmoji: "🌤️" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans elle lit un livre passionnant, quel est le COD ?", answer: "un livre passionnant", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Un livre passionnant répond à quoi ? sans préposition : c'est le COD." },
        { order: 2, prompt: "Dans il parle à son ami, quel est le COI ?", answer: "à son ami", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "À son ami répond à à qui ? avec la préposition à : c'est le COI." },
        { order: 3, prompt: "Dans hier, il a joué au parc, quel complément indique le temps ?", answer: "hier", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Hier répond à la question quand ? : c'est un complément de temps." },
        { order: 4, prompt: "Dans le ciel est bleu, quel est l'attribut du sujet ?", answer: "bleu", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Bleu décrit le sujet le ciel après le verbe d'état est : c'est l'attribut du sujet." },
        { order: 5, prompt: "Dans elle chante avec entrain, quel complément indique la manière ?", answer: "avec entrain", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Avec entrain répond à comment ? : c'est un complément de manière." },
        { order: 6, prompt: "Défi : dans ma sœur prépare un gâteau et pense à son anniversaire, cite le COD puis le COI, dans l'ordre.", answer: "un gâteau à son anniversaire", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Un gâteau est le COD (sans préposition), à son anniversaire est le COI (avec la préposition à)." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Révision : a/à, on/ont, son/sont, leur/leurs, quel/quelle/qu'elle",
      xpReward: 22,
      story: {
        hook: "Cette semaine, tu as croisé encore beaucoup de mots jumeaux. Récapitulons les tests appris !",
        concreteExample: "A/à, on/ont, son/sont, leur/leurs, quel/quelle/qu'elle.",
        reveal: "Chaque paire a son test précis : avait pour a, il pour on, mon pour son, invariable pour leur pronom, que + elle pour qu'elle.",
        bridgeToConcept: "Utilise toujours le test appris pour choisir la bonne orthographe.",
        illustrationEmoji: "🧠"
      },
      examples: [
        {
          title: "Rappel des tests principaux",
          steps: [
            { text: "Il a un chien (avait) ; il va à l'école (préposition).", illustrationEmoji: "🐶" },
            { text: "On joue (il joue) ; ils ont faim (avaient).", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Rappel leur et quel",
          steps: [
            { text: "Je leur parle (pronom invariable) ; leurs enfants jouent (possessif pluriel).", illustrationEmoji: "🎁" },
            { text: "Quelle belle robe ! (accord féminin) ; je pense qu'elle viendra (que + elle).", illustrationEmoji: "👗" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : il ___ un chien noir. (a/à)", answer: "a", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "On peut remplacer par avait, donc c'est le verbe avoir : a, sans accent.", strictAccents: true },
        { order: 2, prompt: "Complète : ___ joue dans le jardin après l'école. (on/ont)", answer: "on", kindWhenWrong: "Pas grave, on regarde ça ensemble.", explanationWhenWrong: "On peut remplacer par il joue : c'est le pronom on.", strictAccents: true },
        { order: 3, prompt: "Complète : elles ___ très contentes de la nouvelle. (son/sont)", answer: "sont", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "On peut dire elles étaient contentes : c'est le verbe être, sont.", strictAccents: true },
        { order: 4, prompt: "Complète : ___ enfants jouent dans le jardin. (leur/leurs)", answer: "leurs", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Plusieurs enfants sont possédés : le possessif prend un s, leurs.", strictAccents: true },
        { order: 5, prompt: "Complète : ___ belle robe ! (quel/quelle/qu'elle)", answer: "quelle", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Robe est féminin, donc l'adjectif exclamatif s'accorde au féminin : quelle.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les quatre mots. ___ (on) sait que ___ (leur) ami ___ (a) raison, ___ (quelle) bonne nouvelle !", answer: "on leur a quelle", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble.", explanationWhenWrong: "On sait (pronom), leur ami (possessif singulier), a raison (verbe avoir, remplaçable par avait), quelle bonne nouvelle (accord féminin).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Révision : multiplier par 5-25-50, centaines rondes, multiplication à deux chiffres, pourcentages",
      xpReward: 22,
      story: {
        hook: "Cette semaine, tu as musclé ton cerveau avec de nouvelles astuces. Faisons le point !",
        concreteExample: "24 x 5 = 120, 348 + 200 = 548, 23 x 4 = 92, 10% de 20 € = 2 €. Tu deviens un champion du calcul mental !",
        reveal: "Ces automatismes te seront très utiles au collège.",
        bridgeToConcept: "Révisons ensemble : multiplier par 5, 25, 50, additionner ou soustraire des centaines rondes, multiplier un nombre à deux chiffres par un chiffre, calculer un pourcentage simple.",
        illustrationEmoji: "⚡"
      },
      examples: [
        {
          title: "Rappel multiplier par 5-25-50 et centaines",
          steps: [
            { text: "18 x 5 : 18 x 10 = 180, puis 180 divisé par 2 = 90.", illustrationEmoji: "🔢" },
            { text: "570 - 300 = 270.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Rappel multiplication à deux chiffres et pourcentages",
          steps: [
            { text: "34 x 3 : 30x3=90, 4x3=12, total 102.", illustrationEmoji: "🔍" },
            { text: "50% de 40 € = 20 €.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 18 x 5", answer: "90", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "18 x 10 = 180, puis 180 divisé par 2 = 90." },
        { order: 2, prompt: "Calcule : 570 - 300", answer: "270", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "On retire 3 aux centaines : 570 - 300 = 270." },
        { order: 3, prompt: "Calcule : 34 x 3", answer: "102", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "30 x 3 = 90, 4 x 3 = 12, total 102." },
        { order: 4, prompt: "Calcule 50% de 40 €", answer: "20", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "50% revient à diviser par 2 : 40 divisé par 2 = 20." },
        { order: 5, prompt: "Calcule : 12 x 25", answer: "300", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "12 x 100 = 1200, puis 1200 divisé par 4 = 300." },
        { order: 6, prompt: "Défi : calcule 27 x 5, puis ajoute 10% de 100 au résultat. Quel est le résultat final ?", answer: "145", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "27 x 5 = 135, puis 10% de 100 = 10, donc 135 + 10 = 145." }
      ]
    }
  ]
};
