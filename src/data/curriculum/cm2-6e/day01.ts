import { DayCurriculum } from "@/models/types";

export const day01: DayCurriculum = {
  dayNumber: 1,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "La division euclidienne : quotient et reste",
      xpReward: 20,
      story: {
        hook: "Imagine que tu dois ranger 29 livres dans des cartons de 5 livres chacun.",
        concreteExample: "29 divisé par 5 : combien de cartons pleins peux-tu faire, et combien de livres restera-t-il ?",
        reveal: "5 x 5 = 25, il reste 4 livres. Le quotient est 5 (le nombre de cartons pleins), le reste est 4 (ce qui n'entre pas dans un carton complet).",
        bridgeToConcept: "Dans une division euclidienne, le quotient est le résultat entier, le reste est ce qu'il reste, toujours plus petit que le diviseur.",
        illustrationEmoji: "📦"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "17 divisé par 3 : 3 x 5 = 15, il reste 2. Quotient 5, reste 2.", illustrationEmoji: "🔢" },
            { text: "On vérifie : 3 x 5 + 2 = 17. C'est juste !", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "34 divisé par 6 : 6 x 5 = 30, il reste 4. Quotient 5, reste 4.", illustrationEmoji: "🔍" },
            { text: "Le reste est toujours plus petit que le diviseur (ici, 4 < 6).", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule le quotient et le reste de 17 divisé par 3 (réponds : quotient reste)", answer: "5 2", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "3 x 5 = 15, il reste 2. Quotient 5, reste 2." },
        { order: 2, prompt: "Calcule le quotient et le reste de 29 divisé par 5 (réponds : quotient reste)", answer: "5 4", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "5 x 5 = 25, il reste 4. Quotient 5, reste 4." },
        { order: 3, prompt: "Calcule le quotient et le reste de 34 divisé par 6 (réponds : quotient reste)", answer: "5 4", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "6 x 5 = 30, il reste 4. Quotient 5, reste 4." },
        { order: 4, prompt: "Calcule le quotient et le reste de 22 divisé par 4 (réponds : quotient reste)", answer: "5 2", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "4 x 5 = 20, il reste 2. Quotient 5, reste 2." },
        { order: 5, prompt: "Calcule le quotient et le reste de 40 divisé par 7 (réponds : quotient reste)", answer: "5 5", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "7 x 5 = 35, il reste 5. Quotient 5, reste 5." },
        { order: 6, prompt: "Défi : 50 livres à ranger dans des cartons de 8. Combien de cartons pleins, et combien de livres restera-t-il ? (réponds : quotient reste)", answer: "6 2", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "8 x 6 = 48, il reste 2. Quotient 6, reste 2." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le présent des verbes du 3e groupe : prendre, dire, voir",
      xpReward: 20,
      story: {
        hook: "Certains verbes ne suivent pas les règles habituelles : ce sont les verbes du 3e groupe.",
        concreteExample: "Écoute : je prends, tu prends, il prend, nous prenons, vous prenez, ils prennent.",
        reveal: "Remarque : au singulier, prendre se termine par -ds, -ds, -d, puis au pluriel les terminaisons changent et une consonne double apparaît (prennent). Ces verbes se conjuguent différemment des verbes en -er.",
        bridgeToConcept: "Prendre : je prends, tu prends, il prend, nous prenons, vous prenez, ils prennent. Dire : je dis, vous dites. Voir : je vois, nous voyons.",
        illustrationEmoji: "🎯"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Je dis toujours la vérité. Vous dites la même chose que moi.", illustrationEmoji: "💬" },
            { text: "Je vois un oiseau. Nous voyons le ciel bleu.", illustrationEmoji: "👀" }
          ]
        },
        {
          title: "L'attention particulière à avoir",
          steps: [
            { text: "Dire fait exception à la 2e personne du pluriel : vous dites (et non vous disez).", illustrationEmoji: "⚠️" },
            { text: "Prendre double le n au pluriel : ils prennent.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je ____ (prendre) mon cartable.", answer: "prends", kindWhenWrong: "Ce n'est pas grave, on regarde ça ensemble.", explanationWhenWrong: "Avec je, prendre au présent devient prends, avec un d et un s à la fin. Essaie de le dire à voix haute : je prends.", strictAccents: true },
        { order: 2, prompt: "Complète : Tu ____ (dire) toujours la vérité.", answer: "dis", kindWhenWrong: "Pas grave, on regarde ça ensemble.", explanationWhenWrong: "Avec tu, dire au présent devient dis, sans e à la fin (pas dies).", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Vous ____ (dire) la même chose que moi.",
          options: ["dites", "disez", "dis"],
          answer: "dites",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.",
          explanationWhenWrong: "Tu étais proche ! Avec vous, dire fait exception au présent : on écrit dites, et non disez comme les autres verbes en -re.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Nous ____ (prendre) le bus tous les matins.", answer: "prenons", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Avec nous, prendre au présent devient prenons, sans d avant le suffixe -ons.", strictAccents: true },
        { order: 5, prompt: "Complète : Ils ____ (voir) un bel arc-en-ciel.", answer: "voient", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Avec ils, voir au présent devient voient : on n'oublie pas le i avant -ent.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux verbes. Elles ____ (prendre) leurs affaires et elles ____ (dire) au revoir.", answer: "prennent disent", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble.", explanationWhenWrong: "Elles prennent (le n double au pluriel de prendre) et elles disent (dire devient disent avec elles, sans exception cette fois).", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Le groupe nominal",
      xpReward: 20,
      story: {
        hook: "Imagine une petite famille de mots qui se rassemble toujours autour d'un nom.",
        concreteExample: "Regarde : le grand chat noir dort. Quels mots forment une équipe autour du mot chat ?",
        reveal: "Le, grand, chat, noir forment le groupe nominal : un déterminant (le), un nom (chat), et des adjectifs (grand, noir) qui le complètent.",
        bridgeToConcept: "Le groupe nominal est composé d'un déterminant, d'un nom, et parfois d'un ou plusieurs adjectifs.",
        illustrationEmoji: "👨‍👩‍👧"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Une jolie petite fleur : une (déterminant), fleur (nom), jolie et petite (adjectifs).", illustrationEmoji: "🌸" },
            { text: "Mon vieux vélo rouge : mon (déterminant), vélo (nom), vieux et rouge (adjectifs).", illustrationEmoji: "🚲" }
          ]
        },
        {
          title: "L'astuce pour repérer un groupe nominal",
          steps: [
            { text: "Cherche le nom central, puis le déterminant qui le précède.", illustrationEmoji: "🔍" },
            { text: "Ajoute les adjectifs qui décrivent ce nom : c'est tout le groupe nominal.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans le grand chat noir dort, quel est le groupe nominal sujet ?", answer: "le grand chat noir", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Le grand chat noir forme le groupe nominal autour du nom chat." },
        { order: 2, prompt: "Dans une jolie petite fleur pousse, quel est le groupe nominal sujet ?", answer: "une jolie petite fleur", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Une jolie petite fleur forme le groupe nominal autour du nom fleur." },
        { order: 3, prompt: "Dans le groupe nominal mon vieux vélo rouge, quel est le nom central ?", answer: "vélo", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Vélo est le nom central du groupe nominal." },
        { order: 4, prompt: "Dans le groupe nominal la grande maison blanche, quel est le déterminant ?", answer: "la", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "La est le déterminant du groupe nominal." },
        { order: 5, prompt: "Dans le groupe nominal ces beaux arbres verts, combien y a-t-il d'adjectifs ?", answer: "2", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Beaux et verts sont les deux adjectifs du groupe nominal." },
        { order: 6, prompt: "Défi : cite le groupe nominal complet dans mes deux petits chats gris jouent ensemble.", answer: "mes deux petits chats gris", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Mes deux petits chats gris forme le groupe nominal autour du nom chats." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Les accords dans le groupe nominal",
      xpReward: 20,
      story: {
        hook: "Imagine que tous les mots d'une même famille doivent porter le même habit : masculin ou féminin, singulier ou pluriel.",
        concreteExample: "Regarde : les beau___ fleur___ blanche___. Comment accorder chaque mot ?",
        reveal: "Fleurs est féminin pluriel, donc tous les mots du groupe s'accordent : les belles fleurs blanches. Le déterminant, le nom et les adjectifs s'accordent toujours ensemble.",
        bridgeToConcept: "Dans un groupe nominal, le déterminant, le nom et les adjectifs s'accordent tous en genre et en nombre.",
        illustrationEmoji: "👗"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Un petit chat noir devient une petite chatte noire au féminin.", illustrationEmoji: "🐱" },
            { text: "Un grand arbre vert devient de grands arbres verts au pluriel.", illustrationEmoji: "🌳" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Identifie d'abord le genre et le nombre du nom central.", illustrationEmoji: "🔍" },
            { text: "Accorde ensuite le déterminant et tous les adjectifs de la même façon.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Accorde : un (petit) chat noir → une petite chatte ___", answer: "noire", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Chatte est féminin, donc l'adjectif noir prend un e final et devient noire.", strictAccents: true },
        { order: 2, prompt: "Accorde : un grand arbre vert → de grands arbres ___", answer: "verts", kindWhenWrong: "Pas grave, on regarde ça ensemble.", explanationWhenWrong: "Arbres est masculin pluriel, donc l'adjectif vert prend un s final et devient verts.", strictAccents: true },
        { order: 3, prompt: "Accorde : une jolie fleur → de jolies ___", answer: "fleurs", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Jolies est féminin pluriel, donc le nom fleur prend un s et devient fleurs.", strictAccents: true },
        { order: 4, prompt: "Accorde : un beau chien → une belle ___", answer: "chienne", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Belle est féminin, donc chien double le n et ajoute un e : chienne.", strictAccents: true },
        { order: 5, prompt: "Accorde : le petit garçon sage → les petits garçons ___", answer: "sages", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Garçons est pluriel, donc l'adjectif sage prend un s final et devient sages.", strictAccents: true },
        { order: 6, prompt: "Défi : accorde tout le groupe. un grand beau jardin fleuri devient au féminin : une grande belle cour ___", answer: "fleurie", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble.", explanationWhenWrong: "Cour est féminin singulier, donc grande, belle et fleurie prennent tous un e final pour s'accorder.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Multiplier par 10, 100, 1000",
      xpReward: 20,
      story: {
        hook: "Imagine une machine magique qui ajoute des zéros à un nombre en un clin d'œil.",
        concreteExample: "Tu as 24 billes. Une machine les multiplie par 10. Combien de billes as-tu maintenant ?",
        reveal: "24 x 10 = 240. Multiplier par 10, c'est ajouter un zéro à la fin du nombre.",
        bridgeToConcept: "Multiplier par 10 ajoute un zéro, par 100 ajoute deux zéros, par 1000 ajoute trois zéros.",
        illustrationEmoji: "🔵"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "35 x 10 = 350 (on ajoute un zéro).", illustrationEmoji: "🔢" },
            { text: "35 x 100 = 3500 (on ajoute deux zéros).", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "7 x 1000 = 7000 (on ajoute trois zéros).", illustrationEmoji: "🔍" },
            { text: "12 x 100 = 1200 (on ajoute deux zéros).", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 24 x 10", answer: "240", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Multiplier par 10 ajoute un zéro : 240." },
        { order: 2, prompt: "Calcule : 35 x 100", answer: "3500", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Multiplier par 100 ajoute deux zéros : 3500." },
        { order: 3, prompt: "Calcule : 7 x 1000", answer: "7000", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Multiplier par 1000 ajoute trois zéros : 7000." },
        { order: 4, prompt: "Calcule : 12 x 100", answer: "1200", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Multiplier par 100 ajoute deux zéros : 1200." },
        { order: 5, prompt: "Calcule : 9 x 10", answer: "90", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Multiplier par 10 ajoute un zéro : 90." },
        { order: 6, prompt: "Défi : calcule 6 x 100, puis multiplie le résultat par 10. Quel est le résultat final ?", answer: "6000", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "6 x 100 = 600, puis 600 x 10 = 6000." }
      ]
    }
  ]
};
