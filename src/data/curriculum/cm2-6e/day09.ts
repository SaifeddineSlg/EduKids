import { DayCurriculum } from "@/models/types";

export const day09: DayCurriculum = {
  dayNumber: 9,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "La division d'un nombre décimal par un entier",
      xpReward: 20,
      story: {
        hook: "Imagine que tu partages une somme d'argent avec des centimes entre plusieurs personnes.",
        concreteExample: "9,60 € sont partagés équitablement entre 4 amis. Combien chacun reçoit-il ?",
        reveal: "9,60 divisé par 4 = 2,40. On divise comme un nombre entier, en gardant la virgule au bon endroit dans le quotient.",
        bridgeToConcept: "Pour diviser un nombre décimal par un entier, on divise normalement, en plaçant la virgule dans le quotient à l'endroit où elle apparaît dans le dividende.",
        illustrationEmoji: "💰"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "8,4 divisé par 2 = 4,2 (84 divisé par 2 = 42, puis on replace la virgule).", illustrationEmoji: "🔢" },
            { text: "Vérification : 4,2 x 2 = 8,4. C'est juste !", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "7,5 divisé par 5 = 1,5.", illustrationEmoji: "🔍" },
            { text: "12,6 divisé par 3 = 4,2.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 9,60 divisé par 4", answer: "2,40", acceptedAnswers: ["2,4"], kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "96 divisé par 4 = 24, on replace la virgule : 2,40." },
        { order: 2, prompt: "Calcule : 8,4 divisé par 2", answer: "4,2", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "84 divisé par 2 = 42, on replace la virgule : 4,2." },
        { order: 3, prompt: "Calcule : 7,5 divisé par 5", answer: "1,5", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "75 divisé par 5 = 15, on replace la virgule : 1,5." },
        { order: 4, prompt: "Calcule : 12,6 divisé par 3", answer: "4,2", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "126 divisé par 3 = 42, on replace la virgule : 4,2." },
        { order: 5, prompt: "Calcule : 6,3 divisé par 7", answer: "0,9", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "63 divisé par 7 = 9, on replace la virgule : 0,9." },
        { order: 6, prompt: "Défi : 3 amis partagent équitablement une pizza qui coûte 13,50 €. Combien chacun doit-il payer ?", answer: "4,50", acceptedAnswers: ["4,5"], kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "13,50 divisé par 3 = 4,50 € (135 divisé par 3 = 45, on replace la virgule)." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le conditionnel présent",
      xpReward: 20,
      story: {
        hook: "Imagine que tu parles d'une action possible, qui dépendrait d'une condition.",
        concreteExample: "Écoute : si j'avais un chien, je le promènerais tous les jours.",
        reveal: "Je promènerais est au conditionnel présent : il exprime une action possible ou soumise à une condition. Il se forme avec le radical du futur suivi des terminaisons de l'imparfait.",
        bridgeToConcept: "Conditionnel présent = radical du futur + terminaisons -ais, -ais, -ait, -ions, -iez, -aient.",
        illustrationEmoji: "🌈"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "Aimer : radical futur aimer-, j'aimerais, tu aimerais, il aimerait.", illustrationEmoji: "❤️" },
            { text: "Être irrégulier : je serais, nous serions.", illustrationEmoji: "⚠️" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Avoir irrégulier : j'aurais, vous auriez.", illustrationEmoji: "🔍" },
            { text: "Si tu étudiais, tu réussirais tes examens.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : si j'avais un chien, je le ____ (promener) tous les jours.", answer: "promènerais", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Promener garde son accent grave (comme je promène) ; au conditionnel avec je, on écrit promènerais.", strictAccents: true },
        { order: 2, prompt: "Complète : tu ____ (être) content si tu gagnais.", answer: "serais", kindWhenWrong: "Pas grave, on regarde ça ensemble.", explanationWhenWrong: "Être est irrégulier au conditionnel ; avec tu, on écrit serais.", strictAccents: true },
        { order: 3, prompt: "Complète : nous ____ (avoir) plus de temps sans devoirs.", answer: "aurions", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Avoir est irrégulier au conditionnel ; avec nous, on écrit aurions.", strictAccents: true },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne réponse : vous ____ (aimer) ce cadeau, j'en suis sûr.",
          options: ["aimeriez", "aimerez", "aimiez"],
          answer: "aimeriez",
          kindWhenWrong: "Pas grave du tout, on y retourne ensemble.",
          explanationWhenWrong: "Au conditionnel, avec vous, on ajoute -iez au radical du futur aimer- : aimeriez.",
          strictAccents: true
        },
        { order: 5, prompt: "Complète : si tu étudiais, tu ____ (réussir) tes examens.", answer: "réussirais", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Au conditionnel, avec tu, on ajoute -ais au radical du futur réussir- : réussirais.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux verbes. Elle ____ (vouloir) venir et elle ____ (pouvoir) nous aider.", answer: "voudrait pourrait", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble.", explanationWhenWrong: "Vouloir et pouvoir ont des radicaux irréguliers au conditionnel : elle voudrait et elle pourrait.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "L'attribut du sujet",
      xpReward: 20,
      story: {
        hook: "Imagine un mot relié au sujet par un verbe d'état, qui décrit ce sujet.",
        concreteExample: "Regarde : le ciel est bleu. Que dit-on du ciel ?",
        reveal: "Bleu décrit le sujet le ciel, relié par le verbe d'état est : c'est l'attribut du sujet.",
        bridgeToConcept: "L'attribut du sujet est relié au sujet par un verbe d'état (être, sembler, paraître, devenir, rester) et le décrit ou le qualifie.",
        illustrationEmoji: "🌤️"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "Elle semble fatiguée : fatiguée est l'attribut du sujet elle, relié par semble.", illustrationEmoji: "😴" },
            { text: "Ce gâteau paraît délicieux : délicieux est l'attribut du sujet ce gâteau.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Il devient grand : grand est l'attribut du sujet il.", illustrationEmoji: "🔍" },
            { text: "Contrairement au COD, l'attribut décrit le sujet lui-même, après un verbe d'état.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans le ciel est bleu, quel est l'attribut du sujet ?", answer: "bleu", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Bleu décrit le sujet le ciel après le verbe d'état est : c'est l'attribut du sujet." },
        { order: 2, prompt: "Dans elle semble fatiguée, quel est l'attribut du sujet ?", answer: "fatiguée", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Fatiguée décrit le sujet elle après le verbe d'état semble : c'est l'attribut du sujet." },
        { order: 3, prompt: "Dans ce gâteau paraît délicieux, quel est l'attribut du sujet ?", answer: "délicieux", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Délicieux décrit le sujet ce gâteau après le verbe d'état paraît : c'est l'attribut du sujet." },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne réponse : dans il devient grand, grand est...",
          options: ["un attribut du sujet", "un COD", "un complément de lieu"],
          answer: "un attribut du sujet",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Grand décrit le sujet il après le verbe d'état devient : c'est un attribut du sujet."
        },
        { order: 5, prompt: "Dans les enfants restent silencieux, quel est l'attribut du sujet ?", answer: "silencieux", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Silencieux décrit le sujet les enfants après le verbe d'état restent : c'est l'attribut du sujet." },
        { order: 6, prompt: "Défi : dans cette histoire semble passionnante et les élèves restent attentifs, cite les deux attributs du sujet, dans l'ordre.", answer: "passionnante attentifs", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Passionnante (attribut de cette histoire) et attentifs (attribut de les élèves) sont les deux attributs du sujet." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Quel, quelle ou qu'elle",
      xpReward: 20,
      story: {
        hook: "Imagine trois mots qui se prononcent exactement pareil mais qui s'écrivent tous différemment.",
        concreteExample: "Regarde : ___ belle robe ! Est-ce que c'est quel, quelle ou qu'elle ?",
        reveal: "Quelle est un adjectif exclamatif ou interrogatif féminin, accordé avec robe (féminin). Quel est la forme masculine. Qu'elle (avec apostrophe) signifie que + elle, remplaçable par qu'il.",
        bridgeToConcept: "Quel/quelle est un adjectif qui s'accorde avec le nom (quel garçon, quelle fille). Qu'elle = que + elle, remplaçable par qu'il.",
        illustrationEmoji: "👗"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "Quelle belle robe ! : quelle s'accorde au féminin avec robe.", illustrationEmoji: "👗" },
            { text: "Quel beau château ! : quel s'accorde au masculin avec château.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Je pense qu'elle viendra : qu'elle = que + elle, on peut dire qu'il viendra.", illustrationEmoji: "🔍" },
            { text: "Quelle heure est-il ? : question, féminin, accord avec heure.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : ___ belle robe ! (quel/quelle/qu'elle)", answer: "quelle", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Robe est féminin, donc l'adjectif exclamatif s'accorde au féminin : quelle.", strictAccents: true },
        { order: 2, prompt: "Complète : ___ beau château ! (quel/quelle/qu'elle)", answer: "quel", kindWhenWrong: "Pas grave, on regarde ça ensemble.", explanationWhenWrong: "Château est masculin, donc l'adjectif exclamatif s'accorde au masculin : quel.", strictAccents: true },
        { order: 3, prompt: "Complète : je pense ___ viendra demain. (quel/quelle/qu'elle)", answer: "qu'elle", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "On peut remplacer par qu'il viendra : c'est que + elle, donc qu'elle, avec une apostrophe.", strictAccents: true },
        { order: 4, prompt: "Complète : ___ heure est-il ? (quel/quelle/qu'elle)", answer: "quelle", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Heure est féminin, donc l'adjectif interrogatif s'accorde au féminin : quelle.", strictAccents: true },
        { order: 5, prompt: "Complète : je crois ___ a raison. (quel/quelle/qu'elle)", answer: "qu'elle", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "On peut remplacer par qu'il a raison : c'est que + elle, donc qu'elle, avec une apostrophe.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les trois mots. ___ (quel) dommage ___ (qu'elle) parte si tôt, ___ (quelle) triste nouvelle !", answer: "quel qu'elle quelle", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble.", explanationWhenWrong: "Quel dommage (masculin, avec dommage), qu'elle parte (que + elle), quelle triste nouvelle (féminin, avec nouvelle).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Calculer un pourcentage simple",
      xpReward: 20,
      story: {
        hook: "Imagine que tu dois calculer rapidement une réduction dans un magasin.",
        concreteExample: "Un jouet coûte 20 €. Il y a une réduction de 10%. Combien économises-tu ?",
        reveal: "10% de 20 €, c'est 20 divisé par 10 = 2 €. Calculer 10% revient à diviser par 10.",
        bridgeToConcept: "10% d'un nombre = le nombre divisé par 10. 50% = le nombre divisé par 2. 25% = le nombre divisé par 4.",
        illustrationEmoji: "🏷️"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "50% de 40 € = 40 divisé par 2 = 20 €.", illustrationEmoji: "🔢" },
            { text: "25% de 80 € = 80 divisé par 4 = 20 €.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "10% de 150 € = 150 divisé par 10 = 15 €.", illustrationEmoji: "🔍" },
            { text: "50% de 60 € = 30 €.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule 10% de 20 €", answer: "2", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "10% revient à diviser par 10 : 20 divisé par 10 = 2." },
        { order: 2, prompt: "Calcule 50% de 40 €", answer: "20", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "50% revient à diviser par 2 : 40 divisé par 2 = 20." },
        { order: 3, prompt: "Calcule 25% de 80 €", answer: "20", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "25% revient à diviser par 4 : 80 divisé par 4 = 20." },
        { order: 4, prompt: "Calcule 10% de 150 €", answer: "15", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "10% revient à diviser par 10 : 150 divisé par 10 = 15." },
        { order: 5, prompt: "Calcule 50% de 60 €", answer: "30", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "50% revient à diviser par 2 : 60 divisé par 2 = 30." },
        { order: 6, prompt: "Défi : un vélo coûte 100 €. Il y a une réduction de 25%. Combien coûte le vélo après la réduction ?", answer: "75", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "25% de 100 € = 25 €, donc le vélo coûte 100 - 25 = 75 €." }
      ]
    }
  ]
};
