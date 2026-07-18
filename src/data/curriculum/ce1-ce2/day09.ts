import { DayCurriculum } from "@/models/types";

export const day09: DayCurriculum = {
  dayNumber: 9,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "La multiplication posée, par un nombre à un chiffre",
      xpReward: 25,
      story: {
        hook: "Imagine que tu multiplies maintenant un grand nombre, en colonne, comme pour l'addition.",
        concreteExample: "Calcule 213 x 3. On multiplie chaque chiffre en commençant par les unités : 3 x 3 = 9.",
        reveal: "Puis les dizaines : 3 x 1 = 3. Puis les centaines : 3 x 2 = 6. Le résultat est 639. Bravo, tu as posé une multiplication !",
        bridgeToConcept: "On multiplie chaque chiffre du nombre par le multiplicateur, en commençant par les unités, et on pose une retenue si besoin.",
        illustrationEmoji: "✖️"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "142 x 4 : unités 2 x 4 = 8.", illustrationEmoji: "1️⃣" },
            { text: "Dizaines : 4 x 4 = 16, on écrit 6, on retient 1.", illustrationEmoji: "✍️" },
            { text: "Centaines : 1 x 4 = 4, plus la retenue 1 = 5.", illustrationEmoji: "🔟" },
            { text: "Résultat : 568.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "236 x 3 : unités 6 x 3 = 18, on écrit 8, on retient 1.", illustrationEmoji: "1️⃣" },
            { text: "Dizaines : 3 x 3 = 9, plus 1 = 10, on écrit 0, on retient 1. Centaines : 2 x 3 = 6, plus 1 = 7. Résultat : 708.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 123 x 3", answer: "369", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Unités : 3 x 3 = 9. Dizaines : 2 x 3 = 6. Centaines : 1 x 3 = 3. Résultat : 369." },
        { order: 2, prompt: "Calcule : 214 x 4", answer: "856", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Unités : 4 x 4 = 16, on écrit 6, on retient 1. Dizaines : 1 x 4 + 1 = 5. Centaines : 2 x 4 = 8. Résultat : 856." },
        { order: 3, prompt: "Calcule : 152 x 3", answer: "456", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Unités : 2 x 3 = 6. Dizaines : 5 x 3 = 15, on écrit 5, on retient 1. Centaines : 1 x 3 + 1 = 4. Résultat : 456." },
        { order: 4, prompt: "Calcule : 231 x 4", answer: "924", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Unités : 1 x 4 = 4. Dizaines : 3 x 4 = 12, on écrit 2, on retient 1. Centaines : 2 x 4 + 1 = 9. Résultat : 924." },
        { order: 5, prompt: "Calcule : 143 x 5", answer: "715", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Unités : 3 x 5 = 15, on écrit 5, on retient 1. Dizaines : 4 x 5 + 1 = 21, on écrit 1, on retient 2. Centaines : 1 x 5 + 2 = 7. Résultat : 715." },
        { order: 6, prompt: "Défi : calcule 326 x 3", answer: "978", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Unités : 6 x 3 = 18, on écrit 8, on retient 1. Dizaines : 2 x 3 + 1 = 7. Centaines : 3 x 3 = 9. Résultat : 978." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le futur simple de être et avoir, toutes les personnes",
      xpReward: 25,
      story: {
        hook: "Tu connais déjà le futur simple des verbes en -er. Découvrons maintenant celui d'être et avoir, irréguliers même au futur.",
        concreteExample: "Écoute : je serai, tu seras, il sera, nous serons, vous serez, ils seront / j'aurai, tu auras, il aura, nous aurons, vous aurez, ils auront.",
        reveal: "À quoi sert ce futur ? À annoncer comment on sera, ou ce qu'on aura, plus tard. Comment le reconnaître ? Les radicaux ser- et aur- sont irréguliers, mais les terminaisons -ai, -as, -a, -ons, -ez, -ont restent les mêmes.",
        bridgeToConcept: "Être au futur simple : serai, seras, sera, serons, serez, seront. Avoir au futur simple : aurai, auras, aura, aurons, aurez, auront.",
        illustrationEmoji: "⏳"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Demain, nous serons en vacances.", illustrationEmoji: "🏖️" },
            { text: "L'année prochaine, vous aurez un nouveau cartable.", illustrationEmoji: "🎒" }
          ]
        },
        {
          title: "Attention à l'erreur fréquente",
          steps: [
            { text: "Beaucoup d'enfants écrivent je serais au lieu de je serai pour le futur.", illustrationEmoji: "❌" },
            { text: "Au futur simple, il n'y a pas de s après je : je serai, j'aurai.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Demain, je ____ (être) content.", answer: "serai", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Avec je, être au futur simple devient serai, sans s à la fin.", strictAccents: true },
        { order: 2, prompt: "Complète : Nous ____ (avoir) une belle surprise.", answer: "aurons", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "Avec nous, avoir au futur simple devient aurons, avec la terminaison -ons.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Vous ____ (être) en retard.",
          options: ["serez", "seront", "serons"],
          answer: "serez",
          kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.",
          explanationWhenWrong: "Avec vous, être au futur simple devient serez, avec la terminaison -ez.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Ils ____ (avoir) de la chance demain.", answer: "auront", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Avec ils, avoir au futur simple devient auront, avec la terminaison -ont.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Tu ____ (être) fier de toi.",
          options: ["seras", "sera", "serez"],
          answer: "seras",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.",
          explanationWhenWrong: "Avec tu, être au futur simple devient seras, avec la terminaison -as.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Nous ____ (être) prêts et ils ____ (avoir) le temps.", answer: "serons auront", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "Nous serons vient d'être, et ils auront vient d'avoir : deux verbes irréguliers au futur simple dans la même phrase.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "L'accord dans le groupe nominal",
      xpReward: 25,
      story: {
        hook: "Imagine trois amis qui doivent toujours s'habiller pareil : le déterminant, l'adjectif et le nom.",
        concreteExample: "Regarde : un grand jardin, une grande maison, des grands jardins, des grandes maisons. Qu'est-ce qui change à chaque fois ?",
        reveal: "Le déterminant, le nom et l'adjectif changent ensemble selon le genre (masculin ou féminin) et le nombre (singulier ou pluriel). Comment vérifier ? Si le nom est féminin, l'adjectif l'est aussi. Si le nom est pluriel, l'adjectif l'est aussi.",
        bridgeToConcept: "Dans un groupe nominal, le déterminant, le nom et l'adjectif s'accordent tous en genre et en nombre.",
        illustrationEmoji: "🧩"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Un grand jardin (masculin singulier) ; une grande maison (féminin singulier).", illustrationEmoji: "🏡" },
            { text: "Des grands jardins (masculin pluriel) ; des grandes maisons (féminin pluriel).", illustrationEmoji: "🏘️" }
          ]
        },
        {
          title: "L'astuce pour bien accorder",
          steps: [
            { text: "Regarde d'abord si le nom est masculin ou féminin, singulier ou pluriel.", illustrationEmoji: "🔍" },
            { text: "Accorde ensuite le déterminant et l'adjectif de la même façon.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Accorde en genre : un joli chien -> une jolie ____ (chienne)", answer: "chienne", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Au féminin, chien devient chienne : accorde bien le nom avec le déterminant et l'adjectif." },
        { order: 2, prompt: "Accorde en nombre : un grand jardin -> des grands ____ (jardins)", answer: "jardins", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Au pluriel, jardin devient jardins, comme le déterminant des et l'adjectif grands." },
        {
          order: 3,
          type: "mcq",
          prompt: "Accorde : des ____ maisons",
          options: ["grand", "grande", "grandes"],
          answer: "grandes",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Maisons est féminin pluriel, donc l'adjectif s'accorde : grandes."
        },
        { order: 4, prompt: "Accorde : une ____ fleur (joli/jolie)", answer: "jolie", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Fleur est féminin singulier, donc l'adjectif prend un e : jolie." },
        {
          order: 5,
          type: "mcq",
          prompt: "Accorde : des ____ chats",
          options: ["petit", "petite", "petits"],
          answer: "petits",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Chats est masculin pluriel, donc l'adjectif prend un s : petits."
        },
        { order: 6, prompt: "Défi : accorde les deux mots. un ___ (beau) chapeau -> de ___ (beau) chapeaux", answer: "beau beaux", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Au singulier, on écrit beau chapeau ; au pluriel, beau devient beaux comme chapeaux." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "M devant m, b, p",
      xpReward: 25,
      story: {
        hook: "Il existe une règle magique quand le son nasal rencontre les lettres m, b ou p juste après.",
        concreteExample: "Écoute : campagne, tomber, important. Pourquoi le n devient-il m devant ces lettres ?",
        reveal: "À quoi sert cette règle ? À bien écrire le son nasal. Comment la reconnaître ? Devant m, b, p, on remplace toujours le n par un m : campagne, tomber, important.",
        bridgeToConcept: "Devant les lettres m, b, p, on écrit m à la place de n : an devient am, en devient em, in devient im.",
        illustrationEmoji: "🔔"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Tomber : on écrit m devant le b.", illustrationEmoji: "🍂" },
            { text: "Important : on écrit m devant le p.", illustrationEmoji: "⭐" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Regarde la lettre juste après le son nasal.", illustrationEmoji: "🔍" },
            { text: "Si c'est m, b ou p, il faut écrire m, jamais n.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : to___ber (tomber). (m ou n)", answer: "m", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Devant la lettre b, on écrit toujours m : tomber.", strictAccents: true },
        { order: 2, prompt: "Complète : i___portant (important). (m ou n)", answer: "m", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "Devant la lettre p, on écrit toujours m : important.", strictAccents: true },
        { order: 3, prompt: "Complète : la ca___pagne (campagne). (m ou n)", answer: "m", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Devant la lettre p, on écrit toujours m : campagne.", strictAccents: true },
        { order: 4, prompt: "Complète : un e___fant (enfant). (m ou n)", answer: "n", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Devant la lettre f, la règle ne s'applique pas : on garde n, comme dans enfant.", strictAccents: true },
        { order: 5, prompt: "Complète : un no___bre (nombre). (m ou n)", answer: "m", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Devant la lettre b, on écrit toujours m : nombre.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. Le te___ps (temps) est i___portant (important) pour tout le monde.", answer: "m m", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "Temps a un m devant p, et important a un m devant p : la règle s'applique aux deux mots.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Les moitiés des nombres pairs jusqu'à 20",
      xpReward: 25,
      story: {
        hook: "Imagine que tu partages équitablement des bonbons entre deux amis.",
        concreteExample: "Tu as 14 bonbons à partager en deux parts égales. Combien chaque ami reçoit-il ?",
        reveal: "14 partagé en deux parts égales, ça fait 7 pour chacun. C'est la moitié de 14 ! Bravo, tu as calculé une moitié.",
        bridgeToConcept: "La moitié d'un nombre, c'est ce nombre partagé en deux parts égales : la moitié de 14 est 7.",
        illustrationEmoji: "🍬"
      },
      examples: [
        {
          title: "Calculer une moitié",
          steps: [
            { text: "La moitié de 10, c'est 5, car 5 + 5 = 10.", illustrationEmoji: "➗" },
            { text: "La moitié de 16, c'est 8, car 8 + 8 = 16.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour les moitiés",
          steps: [
            { text: "Pense au double : si le double de 6 est 12, alors la moitié de 12 est 6.", illustrationEmoji: "🔍" },
            { text: "La moitié de 20 est 10 : facile à retenir.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Quelle est la moitié de 8 ?", answer: "4", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "La moitié de 8, c'est 4, car 4 + 4 = 8." },
        { order: 2, prompt: "Quelle est la moitié de 12 ?", answer: "6", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "La moitié de 12, c'est 6, car 6 + 6 = 12." },
        { order: 3, prompt: "Quelle est la moitié de 18 ?", answer: "9", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "La moitié de 18, c'est 9, car 9 + 9 = 18." },
        { order: 4, prompt: "Quelle est la moitié de 14 ?", answer: "7", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "La moitié de 14, c'est 7, car 7 + 7 = 14." },
        { order: 5, prompt: "Quelle est la moitié de 20 ?", answer: "10", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "La moitié de 20, c'est 10, car 10 + 10 = 20." },
        { order: 6, prompt: "Défi : calcule la moitié de 16, puis ajoute 2.", answer: "10", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "La moitié de 16 est 8, puis 8 + 2 = 10." }
      ]
    }
  ]
};
