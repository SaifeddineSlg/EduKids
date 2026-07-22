import { DayCurriculum } from "@/models/types";

export const day21: DayCurriculum = {
  dayNumber: 21,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Lire l'heure : le quart et moins le quart",
      xpReward: 22,
      story: {
        hook: "Tu sais déjà lire les heures pile et les demi-heures. Aujourd'hui, apprenons à lire le quart d'heure.",
        concreteExample: "La petite aiguille est entre le 5 et le 6, la grande aiguille est sur le 3. Quelle heure est-il ?",
        reveal: "Quand la grande aiguille est sur le 3, il est cinq heures et quart. Quand elle est sur le 9, il manque un quart d'heure pour l'heure suivante : c'est six heures moins le quart. Bravo, tu sais lire le quart d'heure !",
        bridgeToConcept: "Grande aiguille sur le 3 : il est l'heure et quart. Grande aiguille sur le 9 : il est l'heure suivante moins le quart.",
        illustrationEmoji: "🕒"
      },
      examples: [
        {
          title: "Lire le quart passé",
          steps: [
            { text: "Petite aiguille entre le 5 et le 6, grande aiguille sur le 3 : il est 5 heures et quart.", illustrationEmoji: "🕓" },
            { text: "Petite aiguille entre le 8 et le 9, grande aiguille sur le 3 : il est 8 heures et quart.", illustrationEmoji: "🕗" }
          ]
        },
        {
          title: "Lire moins le quart",
          steps: [
            { text: "Petite aiguille entre le 6 et le 7, grande aiguille sur le 9 : il est 7 heures moins le quart.", illustrationEmoji: "🕡" },
            { text: "Petite aiguille entre le 2 et le 3, grande aiguille sur le 9 : il est 3 heures moins le quart.", illustrationEmoji: "🕝" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Petite aiguille entre le 1 et le 2, grande aiguille sur le 3. Quelle heure est-il ?", answer: "1 heure et quart", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "La grande aiguille sur le 3 indique un quart d'heure de plus : il est 1 heure et quart." },
        { order: 2, prompt: "Petite aiguille entre le 4 et le 5, grande aiguille sur le 9. Quelle heure est-il ?", answer: "5 heures moins le quart", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "La grande aiguille sur le 9 indique qu'il manque un quart d'heure pour l'heure suivante : il est 5 heures moins le quart." },
        { order: 3, prompt: "Petite aiguille entre le 9 et le 10, grande aiguille sur le 3. Quelle heure est-il ?", answer: "9 heures et quart", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "La grande aiguille sur le 3 indique un quart d'heure de plus : il est 9 heures et quart." },
        {
          order: 4,
          type: "mcq",
          prompt: "Petite aiguille entre le 11 et le 12, grande aiguille sur le 9. Choisis la bonne heure.",
          options: ["11 heures et quart", "12 heures moins le quart", "11 heures moins le quart"],
          answer: "12 heures moins le quart",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "La grande aiguille sur le 9 annonce l'heure suivante moins le quart : il est 12 heures moins le quart."
        },
        {
          order: 5,
          type: "mcq",
          prompt: "Petite aiguille entre le 7 et le 8, grande aiguille sur le 3. Choisis la bonne heure.",
          options: ["7 heures et quart", "8 heures moins le quart", "7 heures moins le quart"],
          answer: "7 heures et quart",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "La grande aiguille sur le 3 indique un quart d'heure de plus : il est 7 heures et quart."
        },
        { order: 6, prompt: "Défi : la petite aiguille est entre le 2 et le 3 avec la grande sur le 3, puis entre le 5 et le 6 avec la grande sur le 9. Donne les deux heures.", answer: "2 heures et quart 6 heures moins le quart", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "La première horloge montre 2 heures et quart (grande aiguille sur le 3), et la deuxième montre 6 heures moins le quart (grande aiguille sur le 9)." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le présent des verbes vouloir et pouvoir",
      xpReward: 22,
      story: {
        hook: "Il existe deux verbes magiques que tu utilises presque tous les jours : vouloir et pouvoir.",
        concreteExample: "Écoute : je veux, tu veux, il veut, nous voulons, vous voulez, ils veulent / je peux, tu peux, il peut, nous pouvons, vous pouvez, ils peuvent.",
        reveal: "À quoi ça sert ? Vouloir exprime un désir, et pouvoir exprime une capacité ou une permission. Comment le reconnaître ? Ces deux verbes sont irréguliers : le radical change selon la personne, mais les terminaisons -x, -x, -t, -ons, -ez, -ent restent les mêmes.",
        bridgeToConcept: "Vouloir au présent : veux, veux, veut, voulons, voulez, veulent. Pouvoir au présent : peux, peux, peut, pouvons, pouvez, peuvent.",
        illustrationEmoji: "🌟"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Je veux un gâteau au chocolat.", illustrationEmoji: "🍫" },
            { text: "Tu peux venir avec moi à la piscine.", illustrationEmoji: "🏊" }
          ]
        },
        {
          title: "Attention à l'erreur fréquente",
          steps: [
            { text: "Beaucoup d'enfants écrivent je veut ou je peut, avec un t. C'est une erreur !", illustrationEmoji: "❌" },
            { text: "Avec je et tu, vouloir et pouvoir se terminent toujours par un x : je veux, je peux.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je ____ (vouloir) une glace à la fraise.", answer: "veux", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Avec je, vouloir se termine par un x : je veux, jamais je veut.", strictAccents: true },
        { order: 2, prompt: "Complète : Tu ____ (pouvoir) venir chez moi samedi.", answer: "peux", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "Avec tu, pouvoir se termine par un x : tu peux, jamais tu peut.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Nous ____ (vouloir) partir en vacances.",
          options: ["voulons", "voulez", "veulent"],
          answer: "voulons",
          kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.",
          explanationWhenWrong: "Avec nous, vouloir devient voulons, avec le radical voul-.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Ils ____ (pouvoir) résoudre ce problème.", answer: "peuvent", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Avec ils, pouvoir devient peuvent, avec la terminaison -ent.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Elle ____ (vouloir) un chien pour son anniversaire.",
          options: ["veut", "veux", "veulent"],
          answer: "veut",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.",
          explanationWhenWrong: "Avec elle, vouloir devient veut, sans x à la fin.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Vous ____ (vouloir) chanter et nous ____ (pouvoir) vous accompagner.", answer: "voulez pouvons", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "Vous voulez vient de vouloir, avec la terminaison -ez, et nous pouvons vient de pouvoir, avec la terminaison -ons.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "L'adjectif possessif",
      xpReward: 22,
      story: {
        hook: "Imagine un petit mot magique qui montre à qui appartient un objet.",
        concreteExample: "Regarde : Voici mon cartable. C'est ma trousse. Ce sont mes crayons. Que remarques-tu sur mon, ma et mes ?",
        reveal: "À quoi sert ce petit mot ? Il indique le possesseur, et il s'accorde avec le nom qui suit, en genre et en nombre. Comment le reconnaître ? Mon, ton, son sont masculins singuliers ; ma, ta, sa sont féminins singuliers ; mes, tes, ses sont pluriels.",
        bridgeToConcept: "L'adjectif possessif indique à qui appartient une chose et s'accorde avec le nom : mon cartable, ma trousse, mes crayons.",
        illustrationEmoji: "🎒"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "C'est mon vélo : mon est masculin singulier, comme vélo.", illustrationEmoji: "🚲" },
            { text: "C'est sa trousse : sa est féminin singulier, la trousse est à elle.", illustrationEmoji: "🖊️" }
          ]
        },
        {
          title: "L'astuce pour bien choisir",
          steps: [
            { text: "Regarde qui possède l'objet, et si le nom est masculin, féminin ou pluriel.", illustrationEmoji: "🔍" },
            { text: "Mon cartable, ma trousse, mes crayons : le petit mot change selon le nom.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : C'est ___ ballon. (le ballon est à toi) (ton/ta/tes)", answer: "ton", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Ballon est masculin singulier, donc on écrit ton." },
        { order: 2, prompt: "Complète : Voici ___ maison. (la maison est à moi) (mon/ma/mes)", answer: "ma", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Maison est féminin singulier, donc on écrit ma." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis le bon possessif : Ce sont ___ livres. (les livres sont à lui)",
          options: ["son", "sa", "ses"],
          answer: "ses",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Livres est pluriel, donc on écrit ses, quel que soit le genre du nom."
        },
        { order: 4, prompt: "Complète : Nous rangeons ___ affaires. (les affaires sont à nous) (notre/nos)", answer: "nos", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Affaires est pluriel, donc on écrit nos." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le bon possessif : Elle promène ___ chien. (le chien est à elle)",
          options: ["son", "sa", "ses"],
          answer: "son",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Chien est masculin singulier, donc on écrit son, même si la possesseuse est une fille."
        },
        { order: 6, prompt: "Défi : complète les deux mots. ___ (à moi) cahier et ___ (à eux) trousse sont sur la table.", answer: "mon leur", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Cahier est masculin singulier et à moi, donc mon ; trousse appartient à plusieurs personnes (eux), donc leur." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Ce ou se : le déterminant et le pronom",
      xpReward: 22,
      story: {
        hook: "Deux petits mots se ressemblent beaucoup à l'oral, mais ils n'ont pas du tout le même rôle : ce et se.",
        concreteExample: "Regarde : Ce chat dort sur le tapis. Elle se coiffe devant le miroir. Que remarques-tu devant ce et devant se ?",
        reveal: "À quoi sert cette distinction ? Elle évite de confondre le déterminant qui accompagne un nom et le pronom qui accompagne un verbe. Comment le reconnaître ? Ce est suivi d'un nom (ce chat) ; se est suivi d'un verbe et peut se remplacer par me (elle se coiffe → je me coiffe).",
        bridgeToConcept: "Ce est devant un nom (ce chien) ; se est devant un verbe et se remplace par me (il se lave → je me lave).",
        illustrationEmoji: "🪞"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Ce livre est passionnant : ce est suivi du nom livre.", illustrationEmoji: "📖" },
            { text: "Elle se coiffe devant le miroir : se est suivi du verbe coiffe.", illustrationEmoji: "🪞" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Si le mot est suivi d'un nom, c'est ce.", illustrationEmoji: "🔍" },
            { text: "Si le mot est suivi d'un verbe et qu'on peut dire je me..., c'est se.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : ___ chien aboie très fort. (ce/se)", answer: "ce", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Chien est un nom, donc on écrit ce devant lui.", strictAccents: true },
        { order: 2, prompt: "Complète : Il ___ lève tôt le matin. (ce/se)", answer: "se", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "Lève est un verbe, et on peut dire je me lève : on écrit donc se.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis le bon mot : ___ enfant rit aux éclats.",
          options: ["ce", "se"],
          answer: "ce",
          kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.",
          explanationWhenWrong: "Enfant est un nom, donc on écrit ce devant lui.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Elle ___ prépare pour l'école. (ce/se)", answer: "se", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Prépare est un verbe, et on peut dire je me prépare : on écrit donc se.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le bon mot : ___ gâteau sent très bon.",
          options: ["ce", "se"],
          answer: "ce",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.",
          explanationWhenWrong: "Gâteau est un nom, donc on écrit ce devant lui.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. ___ chat ___ cache sous le canapé. (ce/se)", answer: "ce se", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "Chat est un nom, donc ce ; cache est un verbe et on peut dire je me cache, donc se.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Soustraire 9 mentalement : enlever 10 puis ajouter 1",
      xpReward: 22,
      story: {
        hook: "Imagine une astuce magique pour soustraire 9 très vite, sans compter un par un.",
        concreteExample: "Tu as 34 billes et tu en donnes 9 à ton ami. Combien t'en reste-t-il ?",
        reveal: "Au lieu de compter 9 par 9, on enlève 10 (34 - 10 = 24), puis on ajoute 1 (24 + 1 = 25). Il te reste 25 billes. Bravo, tu as utilisé l'astuce du moins 9 !",
        bridgeToConcept: "Pour soustraire 9 mentalement, on enlève 10 puis on ajoute 1.",
        illustrationEmoji: "🧮"
      },
      examples: [
        {
          title: "L'astuce du moins 9",
          steps: [
            { text: "23 - 9 : on fait 23 - 10 = 13, puis 13 + 1 = 14.", illustrationEmoji: "➖" },
            { text: "48 - 9 : on fait 48 - 10 = 38, puis 38 + 1 = 39.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Encore un exemple",
          steps: [
            { text: "62 - 9 : on fait 62 - 10 = 52, puis 52 + 1 = 53.", illustrationEmoji: "➖" },
            { text: "C'est plus rapide que compter un par un !", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 25 - 9", answer: "16", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "25 - 10 = 15, puis 15 + 1 = 16." },
        { order: 2, prompt: "Calcule : 33 - 9", answer: "24", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "33 - 10 = 23, puis 23 + 1 = 24." },
        { order: 3, prompt: "Calcule : 51 - 9", answer: "42", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "51 - 10 = 41, puis 41 + 1 = 42." },
        { order: 4, prompt: "Calcule : 47 - 9", answer: "38", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "47 - 10 = 37, puis 37 + 1 = 38." },
        { order: 5, prompt: "Calcule : 74 - 9", answer: "65", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "74 - 10 = 64, puis 64 + 1 = 65." },
        { order: 6, prompt: "Défi : calcule 100 - 9 en utilisant l'astuce (enlève 10, puis ajoute 1).", answer: "91", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "100 - 10 = 90, puis 90 + 1 = 91." }
      ]
    }
  ]
};
