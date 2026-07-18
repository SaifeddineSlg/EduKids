import { DayCurriculum } from "@/models/types";

export const day08: DayCurriculum = {
  dayNumber: 8,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "La soustraction posée à trois chiffres, avec emprunt",
      xpReward: 25,
      story: {
        hook: "Imagine que tu dois enlever plus d'unités qu'il n'y en a, même avec trois colonnes cette fois.",
        concreteExample: "Calcule 423 - 178. Aux unités : 3 - 8, impossible ! Que fait-on ?",
        reveal: "On emprunte 1 dizaine : 13 - 8 = 5. Aux dizaines, il en reste 1 (2 - 1), et 1 - 7 est encore impossible : on emprunte 1 centaine, ça donne 11 - 7 = 4. Aux centaines, il reste 3 (4 - 1) : 3 - 1 = 2. Le résultat est 245. Bravo, tu as emprunté deux fois !",
        bridgeToConcept: "Quand une soustraction est impossible dans une colonne, on emprunte 1 à la colonne suivante, même pour les centaines.",
        illustrationEmoji: "➖"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "512 - 267 : unités 2 - 7, impossible.", illustrationEmoji: "🤔" },
            { text: "On emprunte 1 dizaine : 12 - 7 = 5.", illustrationEmoji: "✍️" },
            { text: "Dizaines : 0 (1 - 1) - 6, impossible, on emprunte 1 centaine : 10 - 6 = 4.", illustrationEmoji: "🔟" },
            { text: "Centaines : 4 (5 - 1) - 2 = 2. Résultat : 245.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "634 - 258 : unités 4 - 8, impossible, on emprunte : 14 - 8 = 6.", illustrationEmoji: "🤔" },
            { text: "Dizaines : 2 (3 - 1) - 5, impossible, on emprunte : 12 - 5 = 7. Centaines : 5 (6 - 1) - 2 = 3. Résultat : 376.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 341 - 156", answer: "185", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "1 - 6 impossible, on emprunte : 11 - 6 = 5. Dizaines : 3 - 5 impossible, on emprunte : 13 - 5 = 8. Centaines : 2 - 1 = 1. Résultat : 185." },
        { order: 2, prompt: "Calcule : 523 - 267", answer: "256", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "3 - 7 impossible, on emprunte : 13 - 7 = 6. Dizaines : 1 - 6 impossible, on emprunte : 11 - 6 = 5. Centaines : 4 - 2 = 2. Résultat : 256." },
        { order: 3, prompt: "Calcule : 612 - 385", answer: "227", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "2 - 5 impossible, on emprunte : 12 - 5 = 7. Dizaines : 0 - 8 impossible, on emprunte : 10 - 8 = 2. Centaines : 5 - 3 = 2. Résultat : 227." },
        { order: 4, prompt: "Calcule : 734 - 489", answer: "245", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "4 - 9 impossible, on emprunte : 14 - 9 = 5. Dizaines : 2 - 8 impossible, on emprunte : 12 - 8 = 4. Centaines : 6 - 4 = 2. Résultat : 245." },
        { order: 5, prompt: "Calcule : 845 - 568", answer: "277", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "5 - 8 impossible, on emprunte : 15 - 8 = 7. Dizaines : 3 - 6 impossible, on emprunte : 13 - 6 = 7. Centaines : 7 - 5 = 2. Résultat : 277." },
        { order: 6, prompt: "Défi : calcule 921 - 457", answer: "464", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "1 - 7 impossible, on emprunte : 11 - 7 = 4. Dizaines : 1 - 5 impossible, on emprunte : 11 - 5 = 6. Centaines : 8 - 4 = 4. Résultat : 464." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le futur simple des verbes en -er, toutes les personnes",
      xpReward: 25,
      story: {
        hook: "Imagine que tu regardes vers demain, vers ce qui va se passer plus tard.",
        concreteExample: "Écoute : je jouerai, tu joueras, il jouera, nous jouerons, vous jouerez, ils joueront.",
        reveal: "À quoi sert ce temps ? Le futur simple sert à annoncer une action qui n'est pas encore arrivée. Comment le reconnaître ? On garde l'infinitif en entier (jouer) et on ajoute -ai, -as, -a, -ons, -ez, -ont.",
        bridgeToConcept: "Terminaisons du futur simple : -ai, -as, -a, -ons, -ez, -ont, après l'infinitif complet du verbe.",
        illustrationEmoji: "🔮"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Demain, nous jouerons dans le jardin.", illustrationEmoji: "🌳" },
            { text: "La semaine prochaine, vous chanterez à la fête de l'école.", illustrationEmoji: "🎤" }
          ]
        },
        {
          title: "Attention à l'erreur fréquente",
          steps: [
            { text: "Beaucoup d'enfants oublient le e de l'infinitif et écrivent je jourai. C'est une erreur !", illustrationEmoji: "❌" },
            { text: "Il faut toujours garder l'infinitif complet avant d'ajouter la terminaison : jouer + ai.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Demain, je ____ (jouer) avec mes amis.", answer: "jouerai", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "On garde l'infinitif jouer en entier et on ajoute -ai : je jouerai.", strictAccents: true },
        { order: 2, prompt: "Complète : Nous ____ (chanter) à la fête.", answer: "chanterons", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "On garde l'infinitif chanter en entier et on ajoute -ons : nous chanterons.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Vous ____ (regarder) un film ce soir.",
          options: ["regarderez", "regarderont", "regardez"],
          answer: "regarderez",
          kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.",
          explanationWhenWrong: "On garde l'infinitif regarder en entier et on ajoute -ez : vous regarderez.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Ils ____ (danser) toute la soirée.", answer: "danseront", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "On garde l'infinitif danser en entier et on ajoute -ont : ils danseront.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Tu ____ (aimer) ce cadeau.",
          options: ["aimeras", "aimera", "aimerez"],
          answer: "aimeras",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.",
          explanationWhenWrong: "On garde l'infinitif aimer en entier et on ajoute -as : tu aimeras.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Vous ____ (chercher) un trésor et ils ____ (trouver) la solution demain.", answer: "chercherez trouveront", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "Vous chercherez vient de chercher + ez, et ils trouveront vient de trouver + ont : deux terminaisons du futur simple dans la même phrase.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Le pluriel des noms",
      xpReward: 25,
      story: {
        hook: "Imagine un nom tout seul qui invite soudain des amis : il devient pluriel !",
        concreteExample: "Regarde : un chat, des chats. Qu'est-ce qui a changé à la fin du mot ?",
        reveal: "On a ajouté un s ! À quoi ça sert ? Ça montre qu'il y a plusieurs chats. Comment le reconnaître ? La plupart des noms ajoutent simplement un s au pluriel.",
        bridgeToConcept: "Au pluriel, on ajoute souvent un s à la fin du nom : chat devient chats.",
        illustrationEmoji: "🐱"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Un livre, des livres : on ajoute un s.", illustrationEmoji: "📚" },
            { text: "Un chapeau, des chapeaux : les mots en -eau prennent un x au pluriel.", illustrationEmoji: "🎩" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "La plupart des noms ajoutent un s au pluriel.", illustrationEmoji: "🔍" },
            { text: "Les noms en -eau et -eu prennent souvent un x : chapeau devient chapeaux, jeu devient jeux.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Mets au pluriel : un livre -> des ____", answer: "livres", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Au pluriel, on ajoute un s : des livres." },
        { order: 2, prompt: "Mets au pluriel : un chapeau -> des ____", answer: "chapeaux", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Les noms en -eau prennent un x au pluriel : des chapeaux." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis le bon pluriel de jeu.",
          options: ["jeus", "jeux"],
          answer: "jeux",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Les noms en -eu prennent un x au pluriel : des jeux."
        },
        { order: 4, prompt: "Mets au pluriel : une fleur -> des ____", answer: "fleurs", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Au pluriel, on ajoute un s : des fleurs." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le bon pluriel de gâteau.",
          options: ["gâteaus", "gâteaux"],
          answer: "gâteaux",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Les noms en -eau prennent un x au pluriel : des gâteaux."
        },
        { order: 6, prompt: "Défi : mets au pluriel. un beau bateau -> de beaux ____", answer: "bateaux", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Bateau, comme beau, prend un x au pluriel : de beaux bateaux." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Est ou et : le test avec était",
      xpReward: 25,
      story: {
        hook: "Il existe un petit test magique pour ne jamais confondre est et et.",
        concreteExample: "Regarde : Léa ... contente. Est-ce que c'est est ou et ?",
        reveal: "On essaie de remplacer par était : Léa était contente. Ça fonctionne ! Donc on écrit est, le verbe être. Bravo, tu as réussi le test !",
        bridgeToConcept: "Si était fonctionne, on écrit est (verbe être). Sinon, on écrit et (comme dans et puis, pour relier deux mots).",
        illustrationEmoji: "🪄"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Il est content : il était content fonctionne. Donc est.", illustrationEmoji: "😊" },
            { text: "Léa et Théo jouent : on essaie Léa était Théo, ça ne fonctionne pas. Donc et.", illustrationEmoji: "⚽" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Remplace toujours par était dans ta tête.", illustrationEmoji: "🔊" },
            { text: "Si ça marche, c'est est. Sinon, c'est et.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Le chat ___ noir. (est/et)", answer: "est", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Le chat était noir fonctionne, donc c'est est, le verbe être.", strictAccents: true },
        { order: 2, prompt: "Complète : Paul ___ Camille jouent ensemble. (est/et)", answer: "et", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "Paul était Camille ne fonctionne pas, donc c'est et, pour relier les deux noms.", strictAccents: true },
        { order: 3, prompt: "Complète : Elle ___ très gentille. (est/et)", answer: "est", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Elle était très gentille fonctionne, donc c'est est, le verbe être.", strictAccents: true },
        { order: 4, prompt: "Complète : Il prend son livre ___ son cahier. (est/et)", answer: "et", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Son livre était son cahier ne fonctionne pas, donc c'est et, pour relier les deux noms.", strictAccents: true },
        { order: 5, prompt: "Complète : Le ciel ___ bleu aujourd'hui. (est/et)", answer: "est", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Le ciel était bleu fonctionne, donc c'est est, le verbe être.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. Le gâteau ___ délicieux ___ bien sucré.", answer: "est et", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "Le gâteau était délicieux fonctionne, donc est ; délicieux était bien sucré ne fonctionne pas, donc et.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Les doubles jusqu'à 20",
      xpReward: 25,
      story: {
        hook: "Imagine que chaque chose que tu as, tu en reçois exactement la même quantité en plus.",
        concreteExample: "Tu as 7 billes. Un ami t'en donne autant. Combien as-tu de billes maintenant ?",
        reveal: "7 et encore 7, ça fait 14. C'est le double de 7 ! Bravo, tu as calculé un double.",
        bridgeToConcept: "Le double d'un nombre, c'est ce nombre ajouté à lui-même : le double de 7 est 14.",
        illustrationEmoji: "👯"
      },
      examples: [
        {
          title: "Calculer un double",
          steps: [
            { text: "Le double de 6, c'est 6 + 6 = 12.", illustrationEmoji: "➕" },
            { text: "Le double de 9, c'est 9 + 9 = 18.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour les doubles",
          steps: [
            { text: "C'est comme multiplier par 2.", illustrationEmoji: "🔍" },
            { text: "Le double de 10 est 20 : facile à retenir.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Quel est le double de 5 ?", answer: "10", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Le double de 5, c'est 5 + 5 = 10." },
        { order: 2, prompt: "Quel est le double de 8 ?", answer: "16", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Le double de 8, c'est 8 + 8 = 16." },
        { order: 3, prompt: "Quel est le double de 9 ?", answer: "18", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Le double de 9, c'est 9 + 9 = 18." },
        { order: 4, prompt: "Quel est le double de 6 ?", answer: "12", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Le double de 6, c'est 6 + 6 = 12." },
        { order: 5, prompt: "Quel est le double de 7 ?", answer: "14", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Le double de 7, c'est 7 + 7 = 14." },
        { order: 6, prompt: "Défi : calcule le double de 10, puis ajoute 3.", answer: "23", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Le double de 10 est 20, puis 20 + 3 = 23." }
      ]
    }
  ]
};
