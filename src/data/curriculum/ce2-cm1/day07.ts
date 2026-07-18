import { DayCurriculum } from "@/models/types";

export const day07: DayCurriculum = {
  dayNumber: 7,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Le périmètre du rectangle et du carré",
      xpReward: 24,
      story: {
        hook: "Imagine que tu dois entourer un jardin rectangulaire avec une clôture.",
        concreteExample: "Un jardin mesure 5 mètres de longueur et 3 mètres de largeur. Quelle longueur de clôture faut-il ?",
        reveal: "On additionne tous les côtés : 5 + 3 + 5 + 3 = 16 mètres. C'est le périmètre du rectangle !",
        bridgeToConcept: "Le périmètre d'un rectangle se calcule ainsi : (longueur + largeur) x 2.",
        illustrationEmoji: "📏"
      },
      examples: [
        {
          title: "Périmètre d'un rectangle",
          steps: [
            { text: "Longueur 6 m, largeur 2 m : (6 + 2) x 2 = 16 m.", illustrationEmoji: "🔢" },
            { text: "On peut aussi additionner les 4 côtés : 6 + 2 + 6 + 2 = 16.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Périmètre d'un carré",
          steps: [
            { text: "Un carré a 4 côtés égaux, par exemple 4 m chacun.", illustrationEmoji: "🔍" },
            { text: "Le périmètre est 4 x 4 = 16 m.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Un rectangle mesure 5 m de longueur et 2 m de largeur. Calcule son périmètre.", answer: "14", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "(5 + 2) x 2 = 14 mètres." },
        { order: 2, prompt: "Un carré a des côtés de 6 m. Calcule son périmètre.", answer: "24", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "4 x 6 = 24 mètres." },
        { order: 3, prompt: "Un rectangle mesure 8 m de longueur et 3 m de largeur. Calcule son périmètre.", answer: "22", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "(8 + 3) x 2 = 22 mètres." },
        { order: 4, prompt: "Un carré a des côtés de 9 m. Calcule son périmètre.", answer: "36", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "4 x 9 = 36 mètres." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne formule pour calculer le périmètre d'un rectangle.",
          options: ["(longueur + largeur) x 2", "longueur x largeur", "longueur + largeur"],
          answer: "(longueur + largeur) x 2",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "On additionne la longueur et la largeur, puis on multiplie par 2 car il y a deux fois chaque côté."
        },
        { order: 6, prompt: "Défi : un jardin rectangulaire mesure 10 m de longueur et 7 m de largeur. Quel est son périmètre ?", answer: "34", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "(10 + 7) x 2 = 34 mètres." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le passé composé avec être",
      xpReward: 24,
      story: {
        hook: "Certains verbes utilisent être, et non avoir, pour former leur passé composé.",
        concreteExample: "Écoute : hier, je suis allé à la piscine. Tu es venu me voir. Elle est partie tôt.",
        reveal: "Ces verbes de mouvement (aller, venir, partir, arriver, tomber...) utilisent l'auxiliaire être. Le participe passé s'accorde alors avec le sujet, comme un adjectif.",
        bridgeToConcept: "Passé composé avec être : je suis allé(e), tu es allé(e), il est allé, elle est allée, nous sommes allé(e)s, ils sont allés, elles sont allées.",
        illustrationEmoji: "🚶"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Hier, je suis allé chez ma grand-mère.", illustrationEmoji: "👵" },
            { text: "Elle est partie très tôt ce matin.", illustrationEmoji: "🌅" }
          ]
        },
        {
          title: "L'accord du participe passé",
          steps: [
            { text: "Avec être, le participe passé s'accorde avec le sujet.", illustrationEmoji: "🔍" },
            { text: "Elle est partie : le participe passé s'accorde au féminin, avec un e.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète (un garçon parle) : Hier, je ____ (aller) à la piscine.", answer: "suis allé", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec je (un garçon), on utilise suis (être) suivi du participe passé allé.", strictAccents: true },
        { order: 2, prompt: "Complète : Elle ____ (partir) très tôt ce matin.", answer: "est partie", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Avec elle, on utilise est (être) suivi du participe passé accordé au féminin : partie, avec un e.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Ils ____ (venir) nous voir hier.",
          options: ["sont venus", "sont venu", "ont venus"],
          answer: "sont venus",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec ils, on utilise sont (être) suivi du participe passé venus, accordé au masculin pluriel avec un s.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète (un groupe de filles parle) : Nous ____ (arriver) en retard ce matin.", answer: "sommes arrivées", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Avec nous (un groupe de filles), on utilise sommes (être) suivi du participe passé arrivées, accordé au féminin pluriel.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Toi et ta sœur, vous ____ (tomber) dans l'escalier.",
          options: ["êtes tombé", "avez tombé", "êtes tombés"],
          answer: "êtes tombés",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec vous (deux personnes), on utilise êtes (être) suivi du participe passé tombés, accordé au pluriel.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux verbes. Hier, je ____ (arriver) en retard et mon ami ____ (partir) sans moi.", answer: "suis arrivé est parti", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Je suis arrivé (être + participe passé accordé au masculin singulier) et mon ami est parti (être + participe passé accordé au masculin singulier).", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "L'adjectif qualificatif",
      xpReward: 24,
      story: {
        hook: "Imagine un mot qui vient décrire un nom, pour le rendre plus vivant.",
        concreteExample: "Regarde : un chat noir. Que nous apprend noir sur le chat ?",
        reveal: "Noir donne une qualité, une caractéristique du chat. Ce mot s'appelle un adjectif qualificatif. Il s'accorde en genre et en nombre avec le nom qu'il accompagne.",
        bridgeToConcept: "L'adjectif qualificatif décrit le nom et s'accorde avec lui : un chat noir, une chatte noire, des chats noirs.",
        illustrationEmoji: "🐈"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Une jolie fleur : jolie décrit la fleur, accordé au féminin singulier.", illustrationEmoji: "🌸" },
            { text: "Des enfants joyeux : joyeux décrit les enfants, accordé au masculin pluriel.", illustrationEmoji: "😄" }
          ]
        },
        {
          title: "L'astuce pour l'accorder",
          steps: [
            { text: "Regarde le genre (masculin/féminin) et le nombre (singulier/pluriel) du nom.", illustrationEmoji: "🔍" },
            { text: "L'adjectif prend les mêmes marques que le nom.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans un chat noir, quel est l'adjectif qualificatif ?", answer: "noir", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Noir décrit le chat, c'est l'adjectif qualificatif." },
        { order: 2, prompt: "Accorde l'adjectif : une fleur (joli) ___.", answer: "jolie", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Fleur est féminin singulier, donc l'adjectif s'accorde : jolie, avec un e." },
        { order: 3, prompt: "Accorde l'adjectif : des enfants (joyeux) ___.", answer: "joyeux", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Joyeux au masculin pluriel ne change pas, il se termine déjà par x." },
        { order: 4, prompt: "Accorde l'adjectif : des chattes (noir) ___.", answer: "noires", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Chattes est féminin pluriel, donc l'adjectif prend un e et un s : noires." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : une maison (grand) ___.",
          options: ["grande", "grand", "grands"],
          answer: "grande",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Maison est féminin singulier, donc l'adjectif prend un e : grande."
        },
        { order: 6, prompt: "Défi : accorde les deux adjectifs. Des histoires (passionnant) ___ et un livre (intéressant) ___.", answer: "passionnantes intéressant", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Histoires est féminin pluriel, donc passionnantes prend un e et un s. Livre est masculin singulier, donc intéressant ne change pas." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Son ou sont : le test avec étaient",
      xpReward: 24,
      story: {
        hook: "Encore deux mots jumeaux à l'oreille : découvrons comment les distinguer.",
        concreteExample: "Regarde : les enfants ___ contents. Est-ce que c'est son ou sont ?",
        reveal: "On essaie de remplacer par étaient : les enfants étaient contents, ça fonctionne ! Donc on écrit sont, le verbe être. Si ça ne marche pas, c'est son, qui veut dire à lui ou à elle.",
        bridgeToConcept: "Si étaient fonctionne, on écrit sont (verbe être). Sinon, on écrit son (possessif, comme sa).",
        illustrationEmoji: "👂"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Il prend son cartable : on essaie étaient, ça ne fonctionne pas. Donc son, le cartable à lui.", illustrationEmoji: "🎒" },
            { text: "Ils sont fatigués : on essaie étaient, ça fonctionne. Donc sont.", illustrationEmoji: "😴" }
          ]
        },
        {
          title: "L'astuce du test",
          steps: [
            { text: "Remplace par étaient dans ta tête.", illustrationEmoji: "🔍" },
            { text: "Si ça marche, c'est sont. Sinon, c'est son.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Les enfants ___ contents de partir en vacances. (son/sont)", answer: "sont", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "On peut dire les enfants étaient contents, ça fonctionne. Donc on écrit sont, le verbe être.", strictAccents: true },
        { order: 2, prompt: "Complète : Il prend ___ cartable avant de partir. (son/sont)", answer: "son", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "On ne peut pas dire il prend étaient cartable. Donc on écrit son, qui veut dire à lui.", strictAccents: true },
        { order: 3, prompt: "Complète : Mes cousins ___ arrivés hier soir. (son/sont)", answer: "sont", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Mes cousins étaient arrivés fonctionne, donc on écrit sont.", strictAccents: true },
        { order: 4, prompt: "Complète : Elle range ___ cahier dans son sac. (son/sont)", answer: "son", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "On ne peut pas remplacer par étaient. Donc on écrit son, qui veut dire à elle.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Les chats ___ endormis sur le canapé.",
          options: ["sont", "son"],
          answer: "sont",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Les chats étaient endormis fonctionne, donc on écrit sont.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Bayrem prend ___ (son) sac car ses amis ___ (sont) déjà arrivés.", answer: "son sont", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Son sac (on ne peut pas dire étaient sac, donc son) et ses amis sont déjà arrivés (on peut dire étaient déjà arrivés, donc sont).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "La table de multiplication de 6",
      xpReward: 24,
      story: {
        hook: "Imagine que tu comptes des œufs, rangés par boîtes de 6.",
        concreteExample: "Il y a 3 boîtes de 6 œufs. Combien d'œufs en tout ?",
        reveal: "3 fois 6, ça fait 18. Bravo, tu as trouvé le nombre d'œufs !",
        bridgeToConcept: "La table de 6 : 1x6=6, 2x6=12, 3x6=18, 4x6=24, 5x6=30...",
        illustrationEmoji: "🥚"
      },
      examples: [
        {
          title: "La table de 6",
          steps: [
            { text: "6 x 4 : c'est le double de 6 x 2 (12), donc 24.", illustrationEmoji: "➕" },
            { text: "6 x 5 : ça fait 30.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour la table de 6",
          steps: [
            { text: "6 x un nombre pair se retrouve facilement en doublant.", illustrationEmoji: "🔍" },
            { text: "6 x 7 : retiens bien ce résultat, ça fait 42.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 6 x 3", answer: "18", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "6 x 3 = 18." },
        { order: 2, prompt: "Calcule : 6 x 5", answer: "30", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "6 x 5 = 30." },
        { order: 3, prompt: "Calcule : 6 x 6", answer: "36", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "6 x 6 = 36." },
        { order: 4, prompt: "Calcule : 6 x 7", answer: "42", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "6 x 7 = 42." },
        { order: 5, prompt: "Calcule : 6 x 8", answer: "48", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "6 x 8 = 48." },
        { order: 6, prompt: "Défi : calcule 6 x 9", answer: "54", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "6 x 9 = 54." }
      ]
    }
  ]
};
