import { DayCurriculum } from "@/models/types";

export const day21: DayCurriculum = {
  dayNumber: 21,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "L'addition posée avec retenue",
      xpReward: 24,
      story: {
        hook: "Parfois, quand on additionne les unités, le résultat dépasse 9.",
        concreteExample: "27 + 15 : les unités 7 et 5 font 12, c'est plus que 9 !",
        reveal: "Quand les unités dépassent 9, on écrit le chiffre des unités et on retient 1 dizaine qu'on ajoute aux dizaines. 7 + 5 = 12, on pose 2 et on retient 1. Puis 2 + 1 + 1 = 4. Le résultat est 42.",
        bridgeToConcept: "Quand la somme des unités dépasse 9, on pose le chiffre des unités et on reporte 1 dizaine en retenue.",
        illustrationEmoji: "➕"
      },
      examples: [
        {
          title: "Additionner avec une retenue",
          steps: [
            { text: "27 + 15 : unités 7 + 5 = 12, on pose 2 et on retient 1.", illustrationEmoji: "🔢" },
            { text: "Dizaines : 2 + 1 + 1 (retenue) = 4.", illustrationEmoji: "➕" },
            { text: "Le résultat est 42.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "36 + 28 : unités 6 + 8 = 14, on pose 4 et on retient 1.", illustrationEmoji: "🔢" },
            { text: "Dizaines : 3 + 2 + 1 (retenue) = 6.", illustrationEmoji: "➕" },
            { text: "Le résultat est 64.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule en colonnes : 18 + 15", answer: "33", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Unités : 8 + 5 = 13, on pose 3 et on retient 1. Dizaines : 1 + 1 + 1 = 3. Le résultat est 33." },
        { order: 2, prompt: "Calcule en colonnes : 24 + 19", answer: "43", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Unités : 4 + 9 = 13, on pose 3 et on retient 1. Dizaines : 2 + 1 + 1 = 4. Le résultat est 43." },
        {
          order: 3,
          type: "mcq",
          prompt: "Quand les unités dépassent 9, que doit-on faire ?",
          options: ["On les efface", "On retient 1 dizaine pour les dizaines", "On recommence le calcul"],
          answer: "On retient 1 dizaine pour les dizaines",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Quand les unités dépassent 9, on pose le chiffre des unités et on reporte 1 dizaine en retenue."
        },
        { order: 4, prompt: "Calcule en colonnes : 47 + 26", answer: "73", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Unités : 7 + 6 = 13, on pose 3 et on retient 1. Dizaines : 4 + 2 + 1 = 7. Le résultat est 73." },
        {
          order: 5,
          type: "mcq",
          prompt: "Calcule en colonnes : 38 + 17",
          options: ["55", "45", "65"],
          answer: "55",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Unités : 8 + 7 = 15, on pose 5 et on retient 1. Dizaines : 3 + 1 + 1 = 5. Le résultat est 55."
        },
        { order: 6, prompt: "Défi : calcule en colonnes 56 + 38", answer: "94", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Unités : 6 + 8 = 14, on pose 4 et on retient 1. Dizaines : 5 + 3 + 1 = 9. Le résultat est 94." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le verbe partir au présent",
      xpReward: 24,
      story: {
        hook: "Un verbe permet de dire qu'on s'en va quelque part.",
        concreteExample: "Écoute : je pars à l'école. Tu pars en vacances. Il part au marché.",
        reveal: "Ce verbe qui dit qu'on s'en va, c'est le verbe partir. Je pars, tu pars, il part, elle part : ça se termine par s, s, t.",
        bridgeToConcept: "Au présent : je pars, tu pars, il part, elle part.",
        illustrationEmoji: "🚗"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Je pars à l'école à huit heures.", illustrationEmoji: "🎒" },
            { text: "Tu pars avec ton papa.", illustrationEmoji: "👨" },
            { text: "Elle part chez sa mamie.", illustrationEmoji: "👵" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Avec je et tu, le verbe partir se termine par s : je pars, tu pars.", illustrationEmoji: "🎵" },
            { text: "Avec il ou elle, le verbe partir se termine par t : il part, elle part.", illustrationEmoji: "🎵" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je ____ (partir) en voyage.", answer: "pars", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec je, le verbe partir devient pars : je pars en voyage.", strictAccents: true },
        { order: 2, prompt: "Complète : Tu ____ (partir) tôt ce matin.", answer: "pars", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Avec tu, le verbe partir devient pars : tu pars tôt ce matin.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Il ____ (partir) demain.",
          options: ["pars", "part", "partons"],
          answer: "part",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec il, le verbe partir devient part : il part demain.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Elle ____ (partir) avec sa sœur.", answer: "part", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Avec elle, comme avec il, le verbe partir devient part : elle part avec sa sœur.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Tu ____ (partir) au marché.",
          options: ["pars", "part", "partent"],
          answer: "pars",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec tu, le verbe partir devient pars.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Je ____ (partir) à l'école et tu ____ (partir) à la piscine.", answer: "pars pars", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Je pars et tu pars : avec je et tu, le verbe partir se termine toujours par s.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Les familles de mots",
      xpReward: 24,
      story: {
        hook: "Certains mots se ressemblent parce qu'ils viennent tous du même mot de base.",
        concreteExample: "Regarde : chanter, chanteur, chanson. Tous ces mots parlent de chanter !",
        reveal: "Ces mots qui se ressemblent et parlent de la même chose forment une famille de mots. Ils ont souvent une petite partie commune, comme chant dans chanter, chanteur, chanson.",
        bridgeToConcept: "Une famille de mots regroupe des mots construits à partir d'un même mot de base.",
        illustrationEmoji: "👨‍👩‍👧"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Jouer, joueur, jouet : cette famille parle du jeu.", illustrationEmoji: "🎲" },
            { text: "Terre, terrain, atterrir : cette famille parle de la terre.", illustrationEmoji: "🌍" }
          ]
        },
        {
          title: "L'astuce pour reconnaître une famille de mots",
          steps: [
            { text: "Cherche la petite partie commune au début des mots.", illustrationEmoji: "🔍" },
            { text: "Si plusieurs mots la partagent et parlent du même sujet, c'est une famille de mots.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Parmi ces mots, lequel fait partie de la famille de fleur : fleuriste ou table ?", answer: "fleuriste", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Fleuriste contient fleur et parle des fleurs : il fait partie de la même famille." },
        { order: 2, prompt: "Parmi ces mots, lequel fait partie de la famille de lait : laitier ou chaise ?", answer: "laitier", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Laitier contient lait et parle du lait : il fait partie de la même famille." },
        {
          order: 3,
          type: "mcq",
          prompt: "Quel mot fait partie de la famille de dent ?",
          options: ["dentiste", "fenêtre", "crayon"],
          answer: "dentiste",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Dentiste contient dent et parle des dents : il fait partie de la même famille."
        },
        { order: 4, prompt: "Trouve un mot de la famille de chant (chanteur ou chanson).", answer: "chanteur", acceptedAnswers: ["chanson"], kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Chanteur et chanson contiennent tous les deux chant : ce sont des mots de la même famille." },
        {
          order: 5,
          type: "mcq",
          prompt: "Quel mot fait partie de la famille de neige ?",
          options: ["neiger", "soleil", "pluie"],
          answer: "neiger",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Neiger contient neige et parle de la neige : il fait partie de la même famille."
        },
        { order: 6, prompt: "Défi : parmi ces quatre mots, trouve les deux qui sont de la même famille : jardin, jardinier, école, crayon.", answer: "jardin jardinier", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Jardin et jardinier contiennent tous les deux jardin : ce sont des mots de la même famille." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Le son [ã] : an, en",
      xpReward: 24,
      story: {
        hook: "Il existe un son qui résonne dans le nez et qui peut s'écrire de deux façons différentes.",
        concreteExample: "Écoute : maman, dans, enfant, vent. Tu entends ce son qui résonne : [ã].",
        reveal: "Ce son qui résonne dans le nez, c'est le son [ã]. Il peut s'écrire an comme dans maman, ou en comme dans enfant. Les deux écritures se prononcent pareil !",
        bridgeToConcept: "Le son [ã] s'écrit an ou en, et se prononce toujours de la même façon.",
        illustrationEmoji: "👃"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Maman prépare le dîner : le son [ã] s'écrit an.", illustrationEmoji: "👩" },
            { text: "L'enfant joue dans le jardin : le son [ã] s'écrit en.", illustrationEmoji: "🧒" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Il n'y a pas de règle simple pour choisir entre an et en.", illustrationEmoji: "🤔" },
            { text: "Il faut bien regarder le mot et s'en souvenir, ou vérifier dans un dictionnaire.", illustrationEmoji: "📖" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : m___man (maman). (an ou en)", answer: "an", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Maman s'écrit avec an : m-a-n-m-a-n.", strictAccents: true },
        { order: 2, prompt: "Complète : l'___fant (enfant). (an ou en)", answer: "en", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Enfant s'écrit avec en : e-n-fant.", strictAccents: true },
        { order: 3, prompt: "Complète : le v___t (vent). (an ou en)", answer: "en", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Vent s'écrit avec en : v-e-n-t.", strictAccents: true },
        { order: 4, prompt: "Complète : gr___d (grand). (an ou en)", answer: "an", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Grand s'écrit avec an : g-r-a-n-d.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne écriture : une l___gue (langue).",
          options: ["an", "en"],
          answer: "an",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Langue s'écrit avec an : l-a-n-g-u-e.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. L'___fant (enfant) est cont___t (content).", answer: "en en", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Enfant et content s'écrivent tous les deux avec en : e-n.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Ajouter 11 (méthode +10 puis +1)",
      xpReward: 24,
      story: {
        hook: "Ajouter 11, c'est presque comme ajouter 10, avec un petit pas de plus.",
        concreteExample: "23 + 11 : d'abord tu ajoutes 10, puis tu ajoutes encore 1.",
        reveal: "23 + 10 = 33, puis 33 + 1 = 34. Donc 23 + 11 = 34. Ajouter 11, c'est ajouter 10 puis ajouter 1 !",
        bridgeToConcept: "Pour ajouter 11, on ajoute d'abord 10, puis on ajoute encore 1.",
        illustrationEmoji: "➕"
      },
      examples: [
        {
          title: "La méthode +10 puis +1",
          steps: [
            { text: "16 + 11 : 16 + 10 = 26.", illustrationEmoji: "➕" },
            { text: "26 + 1 = 27.", illustrationEmoji: "➕" },
            { text: "Donc 16 + 11 = 27.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "34 + 11 : 34 + 10 = 44.", illustrationEmoji: "➕" },
            { text: "44 + 1 = 45. Donc 34 + 11 = 45.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 12 + 11", answer: "23", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "12 + 10 = 22, puis 22 + 1 = 23." },
        { order: 2, prompt: "Calcule : 25 + 11", answer: "36", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "25 + 10 = 35, puis 35 + 1 = 36." },
        {
          order: 3,
          type: "mcq",
          prompt: "Quelle est la bonne méthode pour ajouter 11 ?",
          options: ["Ajouter 10 puis ajouter 1", "Ajouter 1 puis ajouter 1", "Ajouter 20"],
          answer: "Ajouter 10 puis ajouter 1",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Pour ajouter 11, on ajoute d'abord 10, puis on ajoute encore 1."
        },
        { order: 4, prompt: "Calcule : 38 + 11", answer: "49", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "38 + 10 = 48, puis 48 + 1 = 49." },
        {
          order: 5,
          type: "mcq",
          prompt: "Calcule : 47 + 11",
          options: ["57", "58", "68"],
          answer: "58",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "47 + 10 = 57, puis 57 + 1 = 58."
        },
        { order: 6, prompt: "Défi : calcule 26 + 11, puis ajoute encore 11 au résultat.", answer: "48", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "26 + 11 = 37, puis 37 + 11 = 48." }
      ]
    }
  ]
};
