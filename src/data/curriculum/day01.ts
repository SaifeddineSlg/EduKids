import { DayCurriculum } from "@/models/types";

export const day01: DayCurriculum = {
  dayNumber: 1,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "La boite qui cache un nombre",
      xpReward: 24,
      story: {
        hook: "Imagine que tu as une boite fermee. Personne ne voit ce qu il y a dedans.",
        concreteExample: "Dans la boite, il y a des billes cachees. A cote, il y a 5 billes que tout le monde voit. En tout, il y a 12 billes. Combien de billes sont cachees dans la boite ?",
        reveal: "On cherche un nombre qui, ajoute a 5, donne 12. Comme 7 + 5 = 12, le nombre cache est 7. Bravo, tu as trouve le nombre cache !",
        bridgeToConcept: "En mathematiques, cette boite fermee s appelle x. On peut ecrire: x + 5 = 12, et x = 7.",
        illustrationEmoji: "📦"
      },
      examples: [
        {
          title: "Exemple 1 : la boite et les billes",
          steps: [
            { text: "On a une boite (x) et 3 billes visibles. En tout: 9 billes.", illustrationEmoji: "📦" },
            { text: "On ecrit: x + 3 = 9.", illustrationEmoji: "✍️" },
            { text: "Pour trouver x, on enleve 3 a 9 : 9 - 3 = 6.", illustrationEmoji: "➖" },
            { text: "Donc x = 6. On verifie: 6 + 3 = 9. Ca marche !", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : une autre boite",
          steps: [
            { text: "x + 4 = 10.", illustrationEmoji: "📦" },
            { text: "On enleve 4 des deux cotes : 10 - 4 = 6.", illustrationEmoji: "➖" },
            { text: "Donc x = 6. On verifie: 6 + 4 = 10. Bravo !", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        {
          order: 1,
          prompt: "x + 2 = 5. Combien vaut x ?",
          answer: "3",
          kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "On enleve 2 a 5 : 5 - 2 = 3. Donc x = 3."
        },
        {
          order: 2,
          prompt: "x + 4 = 9. Combien vaut x ?",
          answer: "5",
          kindWhenWrong: "Ce n est pas grave 😊 On y retourne ensemble.",
          explanationWhenWrong: "On enleve 4 a 9 : 9 - 4 = 5. Donc x = 5."
        },
        {
          order: 3,
          prompt: "x + 6 = 13. Combien vaut x ?",
          answer: "7",
          kindWhenWrong: "Pas grave du tout 😊 Regardons ensemble.",
          explanationWhenWrong: "On enleve 6 a 13 : 13 - 6 = 7. Donc x = 7."
        },
        {
          order: 4,
          prompt: "x + 8 = 15. Combien vaut x ?",
          answer: "7",
          kindWhenWrong: "Ce n est pas grave 😊 On regarde ca ensemble.",
          explanationWhenWrong: "On enleve 8 a 15 : 15 - 8 = 7. Donc x = 7."
        },
        {
          order: 5,
          prompt: "x + 9 = 20. Combien vaut x ?",
          answer: "11",
          kindWhenWrong: "Pas grave 😊 On decompose ensemble.",
          explanationWhenWrong: "On enleve 9 a 20 : 20 - 9 = 11. Donc x = 11."
        },
        {
          order: 6,
          prompt: "Defi : x + x + 3 = 11. Combien vaut x ?",
          answer: "4",
          kindWhenWrong: "Bravo d avoir essaye 😊 Regardons ensemble ce defi.",
          explanationWhenWrong: "11 - 3 = 8, et 8 c est deux fois x. Donc x = 8 / 2 = 4."
        }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Les verbes en -er qui font une petite musique",
      xpReward: 24,
      story: {
        hook: "Imagine une chanson avec toujours les memes petites notes a la fin de chaque ligne.",
        concreteExample: "Ecoute: je joue, tu joues, il joue, nous jouons, vous jouez, ils jouent. Tu entends la musique qui change un peu a chaque fois ?",
        reveal: "Ces petites fins (e, es, e, ons, ez, ent) sont toujours les memes pour presque tous les verbes en -er. Bravo, tu viens d entendre la musique du present !",
        bridgeToConcept: "On appelle ca la conjugaison au present des verbes du premier groupe (les verbes en -er).",
        illustrationEmoji: "🎵"
      },
      examples: [
        {
          title: "Exemple 1 : le verbe chanter",
          steps: [
            { text: "Je chante, tu chantes, il chante.", illustrationEmoji: "🎤" },
            { text: "Nous chantons, vous chantez, ils chantent.", illustrationEmoji: "🎤" },
            { text: "Tu remarques : avec tu, on ajoute toujours un s.", illustrationEmoji: "🔎" }
          ]
        },
        {
          title: "Exemple 2 : le verbe manger",
          steps: [
            { text: "Je mange, tu manges, elle mange.", illustrationEmoji: "🍎" },
            { text: "Nous mangeons, vous mangez, elles mangent.", illustrationEmoji: "🍎" },
            { text: "Avec nous, on ajoute toujours ons.", illustrationEmoji: "🔎" }
          ]
        }
      ],
      questions: [
        {
          order: 1,
          prompt: "Complete: Je ____ (parler) avec ma soeur.",
          answer: "parle",
          kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Avec je, la terminaison du present est e : je parle."
        },
        {
          order: 2,
          prompt: "Complete: Tu ____ (jouer) dans le jardin.",
          answer: "joues",
          kindWhenWrong: "Pas grave 😊 On regarde ca ensemble.",
          explanationWhenWrong: "Avec tu, on ajoute toujours un s : tu joues."
        },
        {
          order: 3,
          prompt: "Complete: Nous ____ (chanter) une belle chanson.",
          answer: "chantons",
          kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Avec nous, la terminaison est toujours ons : nous chantons."
        },
        {
          order: 4,
          prompt: "Complete: Vous ____ (regarder) un dessin anime.",
          answer: "regardez",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Avec vous, la terminaison est toujours ez : vous regardez."
        },
        {
          order: 5,
          prompt: "Complete: Ils ____ (danser) dans la cour.",
          answer: "dansent",
          kindWhenWrong: "Ce n est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Avec ils, la terminaison est toujours ent : ils dansent."
        },
        {
          order: 6,
          prompt: "Defi : complete les deux mots. Nous ____ (aimer) quand elles ____ (rigoler).",
          answer: "aimons rigolent",
          kindWhenWrong: "Bravo d avoir essaye ce defi 😊 Regardons ensemble.",
          explanationWhenWrong: "Nous aimons (terminaison ons) et elles rigolent (terminaison ent)."
        }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "La carte d identite de chaque mot",
      xpReward: 24,
      story: {
        hook: "Imagine que chaque mot d une phrase porte une carte d identite, comme une carte de bibliotheque.",
        concreteExample: "Regarde la phrase: Le petit chat mange. Le mot chat, quelle est sa famille ? Et le mot mange ?",
        reveal: "chat fait partie de la famille des noms (ca designe une chose ou un etre). mange fait partie de la famille des verbes (ca dit une action). Bravo, tu as trouve leur famille !",
        bridgeToConcept: "Cette famille du mot s appelle sa nature : nom, verbe, adjectif, determinant...",
        illustrationEmoji: "🪪"
      },
      examples: [
        {
          title: "Exemple 1 : Le grand arbre pousse",
          steps: [
            { text: "Le = determinant (il annonce un nom).", illustrationEmoji: "🔤" },
            { text: "grand = adjectif (il decrit).", illustrationEmoji: "🔤" },
            { text: "arbre = nom (une chose).", illustrationEmoji: "🔤" },
            { text: "pousse = verbe (une action).", illustrationEmoji: "🔤" }
          ]
        },
        {
          title: "Exemple 2 : Ma petite soeur dessine",
          steps: [
            { text: "Ma = determinant.", illustrationEmoji: "🔤" },
            { text: "petite = adjectif.", illustrationEmoji: "🔤" },
            { text: "soeur = nom.", illustrationEmoji: "🔤" },
            { text: "dessine = verbe.", illustrationEmoji: "🔤" }
          ]
        }
      ],
      questions: [
        {
          order: 1,
          prompt: "Quelle est la nature du mot chat ?",
          answer: "nom",
          kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "chat designe un etre, c est donc un nom."
        },
        {
          order: 2,
          prompt: "Quelle est la nature du mot mange dans il mange ?",
          answer: "verbe",
          kindWhenWrong: "Pas grave 😊 On regarde ca ensemble.",
          explanationWhenWrong: "mange dit une action, c est donc un verbe."
        },
        {
          order: 3,
          prompt: "Quelle est la nature du mot petit dans le petit chien ?",
          answer: "adjectif",
          kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "petit decrit le chien, c est donc un adjectif."
        },
        {
          order: 4,
          prompt: "Quelle est la nature du mot le dans le chat ?",
          answer: "determinant",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "le annonce le nom chat, c est donc un determinant."
        },
        {
          order: 5,
          prompt: "Dans la phrase Ma soeur chante bien, quelle est la nature du mot chante ?",
          answer: "verbe",
          kindWhenWrong: "Ce n est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "chante dit une action, c est donc un verbe."
        },
        {
          order: 6,
          prompt: "Defi : dans la grande maison bleue, quelle est la nature du mot bleue ?",
          answer: "adjectif",
          kindWhenWrong: "Bravo d avoir essaye ce defi 😊 Regardons ensemble.",
          explanationWhenWrong: "bleue decrit la maison, c est donc un adjectif."
        }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "a ou a : le petit test magique",
      xpReward: 24,
      story: {
        hook: "Imagine un petit test magique que tu peux faire dans ta tete pour ne jamais te tromper.",
        concreteExample: "Regarde: Il ... un velo. Est-ce que c est a ou a ?",
        reveal: "On essaie de remplacer par avait : Il avait un velo, ca fonctionne ! Donc on ecrit a, sans accent, car c est le verbe avoir. Bravo, tu as reussi le test magique !",
        bridgeToConcept: "Ce petit test s appelle le test avec avait. Si avait fonctionne, on ecrit a sans accent (le verbe avoir).",
        illustrationEmoji: "🪄"
      },
      examples: [
        {
          title: "Exemple 1 : Elle va a l ecole",
          steps: [
            { text: "On essaie avait : Elle va avait l ecole. Ca ne fonctionne pas.", illustrationEmoji: "🚫" },
            { text: "Donc on ecrit a avec l accent (ca indique un lieu).", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : Il a mange une pomme",
          steps: [
            { text: "On essaie avait : Il avait mange une pomme. Ca fonctionne !", illustrationEmoji: "✅" },
            { text: "Donc on ecrit a sans accent (le verbe avoir).", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        {
          order: 1,
          prompt: "Complete: Il ___ un chat. (a ou a)",
          answer: "a",
          kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "On peut dire il avait un chat, donc c est a sans accent (verbe avoir)."
        },
        {
          order: 2,
          prompt: "Complete: Je vais ___ la piscine. (a ou a)",
          answer: "à",
          kindWhenWrong: "Pas grave 😊 On regarde ca ensemble.",
          explanationWhenWrong: "On ne peut pas dire je vais avait la piscine, donc c est a avec accent."
        },
        {
          order: 3,
          prompt: "Complete: Elle ___ mange a midi. (a ou a)",
          answer: "a",
          kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "On peut dire elle avait mange, donc c est a sans accent."
        },
        {
          order: 4,
          prompt: "Complete: Nous jouons ___ la maison. (a ou a)",
          answer: "à",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "On ne peut pas dire nous jouons avait la maison, donc c est a avec accent."
        },
        {
          order: 5,
          prompt: "Complete: Mon frere ___ trouve un tresor. (a ou a)",
          answer: "a",
          kindWhenWrong: "Ce n est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "On peut dire mon frere avait trouve, donc c est a sans accent."
        },
        {
          order: 6,
          prompt: "Defi : complete les deux mots. Il ___ donne son ballon ___ son ami.",
          answer: "a à",
          kindWhenWrong: "Bravo d avoir essaye ce defi 😊 Regardons ensemble.",
          explanationWhenWrong: "Il a donne (avait donne fonctionne) et a son ami (avait son ami ne fonctionne pas)."
        }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Les nombres qui se rangent par familles",
      xpReward: 24,
      story: {
        hook: "Imagine que tu ranges tes billes : les grosses ensemble, les petites ensemble.",
        concreteExample: "Pour calculer 27 + 15, on range les dizaines ensemble (20 + 10) et les unites ensemble (7 + 5).",
        reveal: "20 + 10 = 30, et 7 + 5 = 12. Donc 30 + 12 = 42. Bravo, tu as range les nombres par familles !",
        bridgeToConcept: "Cette methode s appelle decomposer en dizaines et unites. Elle marche pour toutes les additions.",
        illustrationEmoji: "🧮"
      },
      examples: [
        {
          title: "Exemple 1 : 34 + 12",
          steps: [
            { text: "Dizaines : 30 + 10 = 40.", illustrationEmoji: "🔟" },
            { text: "Unites : 4 + 2 = 6.", illustrationEmoji: "1️⃣" },
            { text: "Total : 40 + 6 = 46.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : 18 + 7",
          steps: [
            { text: "18 c est 10 + 8.", illustrationEmoji: "🔟" },
            { text: "8 + 7 = 15.", illustrationEmoji: "1️⃣" },
            { text: "10 + 15 = 25.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        {
          order: 1,
          prompt: "Calcule : 12 + 5",
          answer: "17",
          kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "10 + 2 = 12. On ajoute 5 aux 2 unites : 2 + 5 = 7. Donc 10 + 7 = 17."
        },
        {
          order: 2,
          prompt: "Calcule : 23 + 14",
          answer: "37",
          kindWhenWrong: "Pas grave 😊 On regarde ca ensemble.",
          explanationWhenWrong: "Dizaines : 20 + 10 = 30. Unites : 3 + 4 = 7. Total : 37."
        },
        {
          order: 3,
          prompt: "Calcule : 36 + 25",
          answer: "61",
          kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Dizaines : 30 + 20 = 50. Unites : 6 + 5 = 11. Total : 50 + 11 = 61."
        },
        {
          order: 4,
          prompt: "Calcule : 48 + 19",
          answer: "67",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Dizaines : 40 + 10 = 50. Unites : 8 + 9 = 17. Total : 50 + 17 = 67."
        },
        {
          order: 5,
          prompt: "Calcule : 57 + 38",
          answer: "95",
          kindWhenWrong: "Ce n est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Dizaines : 50 + 30 = 80. Unites : 7 + 8 = 15. Total : 80 + 15 = 95."
        },
        {
          order: 6,
          prompt: "Defi : calcule 76 + 49",
          answer: "125",
          kindWhenWrong: "Bravo d avoir essaye ce defi 😊 Regardons ensemble.",
          explanationWhenWrong: "Dizaines : 70 + 40 = 110. Unites : 6 + 9 = 15. Total : 110 + 15 = 125."
        }
      ]
    }
  ]
};
