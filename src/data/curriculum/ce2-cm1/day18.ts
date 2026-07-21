import { DayCurriculum } from "@/models/types";

export const day18: DayCurriculum = {
  dayNumber: 18,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Les nombres décimaux : les centièmes",
      xpReward: 24,
      story: {
        hook: "Imagine que tu mesures un prix en euros et en centimes, de façon très précise.",
        concreteExample: "Un objet coûte 3 euros et 45 centimes. Comment écrire ce prix en nombre décimal ?",
        reveal: "On écrit 3,45 €. Le premier chiffre après la virgule est le chiffre des dixièmes (4), le deuxième est le chiffre des centièmes (5).",
        bridgeToConcept: "Dans un nombre décimal, le deuxième chiffre après la virgule est le chiffre des centièmes : 3,45 a 4 dixièmes et 5 centièmes.",
        illustrationEmoji: "💰"
      },
      examples: [
        {
          title: "Lire un nombre à deux décimales",
          steps: [
            { text: "2,37 se lit deux virgule trente-sept : 3 dixièmes et 7 centièmes.", illustrationEmoji: "🔢" },
            { text: "0,08 se lit zéro virgule zéro huit : 8 centièmes.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Comparer deux nombres avec des centièmes",
          steps: [
            { text: "5,42 et 5,45 : les dixièmes sont égaux (4), on compare les centièmes : 5 est plus grand que 2, donc 5,45 est plus grand.", illustrationEmoji: "🔍" },
            { text: "1,50 est identique à 1,5.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans le nombre 3,45, combien y a-t-il de centièmes ?", answer: "5", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Le deuxième chiffre après la virgule indique les centièmes : dans 3,45, il y a 5 centièmes." },
        { order: 2, prompt: "Écris en chiffres : deux virgule trente-sept.", answer: "2,37", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Deux unités et trente-sept centièmes s'écrivent 2,37." },
        { order: 3, prompt: "Compare 5,42 et 5,45 : lequel est le plus grand ?", answer: "5,45", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Les dixièmes sont égaux (4), et 5 centièmes est plus grand que 2 centièmes." },
        { order: 4, prompt: "Dans le nombre 7,08, combien y a-t-il de dixièmes ?", answer: "0", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Le premier chiffre après la virgule indique les dixièmes : dans 7,08, il y a 0 dixième et 8 centièmes." },
        {
          order: 5,
          type: "mcq",
          prompt: "Comment s'écrit six virgule zéro cinq ?",
          options: ["6,05", "6,5", "605"],
          answer: "6,05",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Six unités, zéro dixième et cinq centièmes s'écrivent 6,05."
        },
        { order: 6, prompt: "Défi : range ces nombres du plus petit au plus grand : 4,32 - 4,23 - 4,3.", answer: "4,23 4,3 4,32", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "4,23 a 2 dixièmes, c'est le plus petit. 4,3 (soit 4,30) et 4,32 ont 3 dixièmes ; 4,3 a 0 centième contre 2 pour 4,32, donc 4,3 est plus petit que 4,32. L'ordre est 4,23, puis 4,3, puis 4,32." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "L'imparfait des verbes voir, pouvoir, vouloir, dire",
      xpReward: 24,
      story: {
        hook: "Continuons dans le passé avec des verbes qui ont une racine un peu spéciale à l'imparfait.",
        concreteExample: "Écoute : je voyais mal sans mes lunettes. Je pouvais courir vite. Je voulais un chien. Je disais toujours merci.",
        reveal: "À quoi sert l'imparfait de ces verbes ? À raconter une habitude du passé. Comment le reconnaître ? La racine change (voy-, pouv-, voul-, dis-) mais les terminaisons restent les mêmes : -ais, -ais, -ait, -ions, -iez, -aient.",
        bridgeToConcept: "Voir à l'imparfait : je voyais, tu voyais, il voyait, nous voyions, vous voyiez, ils voyaient. Dire à l'imparfait : je disais, tu disais, il disait...",
        illustrationEmoji: "👀"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Avant, je voyais mal sans mes lunettes.", illustrationEmoji: "👓" },
            { text: "Autrefois, elle voulait devenir vétérinaire.", illustrationEmoji: "🐾" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "La racine change (voy-, voul-, pouv-, dis-) mais la terminaison reste celle d'un verbe en -er.", illustrationEmoji: "🔍" },
            { text: "Je disais, tu disais, il disait : au singulier, ça se prononce pareil.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Avant, je ____ (voir) mal sans mes lunettes.", answer: "voyais", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec je, l'imparfait de voir est voyais, avec la racine voy-.", strictAccents: true },
        { order: 2, prompt: "Complète : Tu ____ (vouloir) toujours un chien quand tu étais petit.", answer: "voulais", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Avec tu, l'imparfait de vouloir est voulais, avec la racine voul-.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Il ____ (pouvoir) nager très loin autrefois.",
          options: ["pouvait", "pouvais", "pouvaient"],
          answer: "pouvait",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec il, l'imparfait de pouvoir est pouvait. Pouvais est pour je ou tu, pouvaient est pour ils.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Nous ____ (dire) toujours bonjour en entrant.", answer: "disions", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Avec nous, l'imparfait de dire est disions, avec la terminaison -ions.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Elles ____ (voir) très bien de loin.",
          options: ["voyaient", "voyais", "voyions"],
          answer: "voyaient",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec elles, l'imparfait de voir est voyaient, avec la terminaison -aient.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux verbes. Vous ____ (vouloir) toujours gagner et nous ____ (pouvoir) enfin vous suivre.", answer: "vouliez pouvions", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Vous vouliez (terminaison -iez) et nous pouvions (terminaison -ions).", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "L'accord sujet-verbe",
      xpReward: 24,
      story: {
        hook: "Imagine que le verbe doit toujours s'habiller pareil que son sujet, comme des jumeaux.",
        concreteExample: "Regarde : les enfants (jouent/joue) dans la cour. Quelle forme choisir ?",
        reveal: "Les enfants est pluriel, donc le verbe doit être au pluriel aussi : les enfants jouent. À quoi sert cet accord ? Le verbe s'accorde toujours en nombre et en personne avec son sujet.",
        bridgeToConcept: "Le verbe s'accorde toujours avec son sujet : si le sujet est au singulier, le verbe est au singulier ; si le sujet est au pluriel, le verbe est au pluriel.",
        illustrationEmoji: "🤝"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Ma sœur chante bien : sujet singulier, verbe singulier.", illustrationEmoji: "🎤" },
            { text: "Mes cousins chantent bien : sujet pluriel, verbe pluriel.", illustrationEmoji: "🎶" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Cherche le sujet en posant la question qui est-ce qui ?", illustrationEmoji: "🔍" },
            { text: "Vérifie s'il est singulier ou pluriel avant d'accorder le verbe.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Accorde le verbe : Les enfants (jouer) ___ dans la cour.", answer: "jouent", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Enfants est pluriel, donc le verbe prend la terminaison -ent : jouent." },
        { order: 2, prompt: "Accorde le verbe : Mon frère (finir) ___ ses devoirs.", answer: "finit", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Mon frère est singulier, donc le verbe prend la terminaison -it : finit." },
        { order: 3, prompt: "Accorde le verbe : Les chats (dormir) ___ sur le canapé.", answer: "dorment", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Chats est pluriel, donc le verbe prend la terminaison -ent : dorment." },
        { order: 4, prompt: "Accorde le verbe : Ma cousine et moi (aimer) ___ le chocolat.", answer: "aimons", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Ma cousine et moi représente nous, donc le verbe prend la terminaison -ons : aimons." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Les oiseaux ___ dans le ciel.",
          options: ["volent", "vole", "volons"],
          answer: "volent",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Oiseaux est pluriel, donc le verbe prend la terminaison -ent : volent."
        },
        { order: 6, prompt: "Défi : accorde les deux verbes. Les élèves (écouter) ___ la maîtresse pendant que Balkis (lire) ___ son livre.", answer: "écoutent lit", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Élèves est pluriel donc écoutent, et Balkis est singulier donc lit." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Quel, quelle, quels, quelles ou qu'elle, qu'elles",
      xpReward: 24,
      story: {
        hook: "Un mot interrogatif qui ressemble beaucoup à une autre expression, mais avec un rôle différent.",
        concreteExample: "Regarde : ___ heure est-il ? et je pense ___ arrivera bientôt. Comment choisir ?",
        reveal: "Quelle heure est-il ? : quelle s'accorde avec le nom heure, féminin singulier. Je pense qu'elle arrivera : on peut remplacer par qu'il arrivera, c'est que et elle.",
        bridgeToConcept: "Quel/quelle/quels/quelles (adjectif ou déterminant interrogatif) s'accorde avec le nom qui suit. Qu'elle/qu'elles (que et elle/elles) se remplace par qu'il/qu'ils.",
        illustrationEmoji: "❓"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Quelle heure est-il ? : quelle s'accorde avec heure, féminin singulier.", illustrationEmoji: "🕒" },
            { text: "Je pense qu'elle arrivera bientôt : on peut dire qu'il arrivera, donc qu'elle.", illustrationEmoji: "🚶" }
          ]
        },
        {
          title: "L'astuce du test",
          steps: [
            { text: "Essaie de remplacer par qu'il : si ça marche, c'est qu'elle.", illustrationEmoji: "🔍" },
            { text: "Sinon, regarde le nom qui suit pour accorder quel.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : ___ heure est-il ? (quelle/qu'elle)", answer: "Quelle", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Quelle s'accorde avec heure, un nom féminin singulier.", strictAccents: true },
        { order: 2, prompt: "Complète : Je crois ___ viendra demain. (quelle/qu'elle)", answer: "qu'elle", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "On peut dire qu'il viendra, donc on écrit qu'elle, avec une apostrophe.", strictAccents: true },
        { order: 3, prompt: "Complète : ___ beaux dessins tu as faits ! (quels/qu'elles)", answer: "Quels", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Quels s'accorde avec dessins, un nom masculin pluriel.", strictAccents: true },
        { order: 4, prompt: "Complète : Il pense ___ sont trop fatiguées pour sortir. (quelles/qu'elles)", answer: "qu'elles", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "On peut dire qu'ils sont trop fatigués, donc on écrit qu'elles.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : ___ jolies fleurs dans ce jardin !",
          options: ["Quelles", "Qu'elles"],
          answer: "Quelles",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Quelles s'accorde avec fleurs, un nom féminin pluriel.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. ___ (Quelle) surprise de savoir ___ (qu'elle) a réussi son examen !", answer: "Quelle qu'elle", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Quelle surprise (accord avec surprise, féminin singulier) et qu'elle a réussi (qu'il a réussi fonctionne).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "L'astuce pour ajouter 19",
      xpReward: 24,
      story: {
        hook: "Après avoir appris les astuces du 9 et du 11, découvrons celle du 19.",
        concreteExample: "Tu as 24 billes et on t'en donne 19 de plus. Combien en as-tu maintenant ?",
        reveal: "Au lieu d'ajouter 19, on ajoute 20 puis on retire 1 : 24 + 20 = 44, puis 44 - 1 = 43. C'est plus rapide !",
        bridgeToConcept: "Pour ajouter 19 à un nombre, on ajoute 20 puis on retire 1.",
        illustrationEmoji: "⚡"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "15 + 19 : on fait 15 + 20 = 35, puis 35 - 1 = 34.", illustrationEmoji: "🔢" },
            { text: "Donc 15 + 19 = 34.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "27 + 19 : on fait 27 + 20 = 47, puis 47 - 1 = 46.", illustrationEmoji: "🔍" },
            { text: "Donc 27 + 19 = 46.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 13 + 19", answer: "32", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "13 + 20 = 33, puis 33 - 1 = 32." },
        { order: 2, prompt: "Calcule : 24 + 19", answer: "43", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "24 + 20 = 44, puis 44 - 1 = 43." },
        { order: 3, prompt: "Calcule : 36 + 19", answer: "55", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "36 + 20 = 56, puis 56 - 1 = 55." },
        { order: 4, prompt: "Calcule : 48 + 19", answer: "67", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "48 + 20 = 68, puis 68 - 1 = 67." },
        {
          order: 5,
          type: "mcq",
          prompt: "Calcule : 51 + 19",
          options: ["70", "69", "71"],
          answer: "70",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "51 + 20 = 71, puis 71 - 1 = 70."
        },
        { order: 6, prompt: "Défi : calcule 42 + 19, puis retire 10 au résultat.", answer: "51", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "42 + 19 = 61 (42 + 20 = 62, puis 62 - 1 = 61), puis 61 - 10 = 51." }
      ]
    }
  ]
};
