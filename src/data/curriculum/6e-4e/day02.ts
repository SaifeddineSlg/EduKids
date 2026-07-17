import { DayCurriculum } from "@/models/types";

export const day02: DayCurriculum = {
  dayNumber: 2,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Deux boites identiques",
      xpReward: 24,
      story: {
        hook: "Imagine deux boites parfaitement identiques, avec le meme nombre cache dedans.",
        concreteExample: "Les deux boites ensemble + 4 billes visibles = 14 billes en tout. Combien de billes dans une seule boite ?",
        reveal: "On enleve d abord les 4 billes visibles : 14 - 4 = 10. Ces 10 billes sont partagees entre les deux boites identiques. Donc une boite contient 10 / 2 = 5 billes. Bravo !",
        bridgeToConcept: "En mathematiques, on ecrit : 2x + 4 = 14, et on trouve x = 5.",
        illustrationEmoji: "📦📦"
      },
      examples: [
        {
          title: "Exemple 1 : 2x + 2 = 10",
          steps: [
            { text: "On enleve 2 : 10 - 2 = 8.", illustrationEmoji: "➖" },
            { text: "On partage 8 entre les 2 boites : 8 / 2 = 4.", illustrationEmoji: "➗" },
            { text: "Donc x = 4. On verifie : 4 + 4 + 2 = 10. Bravo !", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : 2x + 6 = 20",
          steps: [
            { text: "On enleve 6 : 20 - 6 = 14.", illustrationEmoji: "➖" },
            { text: "On partage 14 entre 2 : 14 / 2 = 7.", illustrationEmoji: "➗" },
            { text: "Donc x = 7. On verifie : 7 + 7 + 6 = 20. Bravo !", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "2x + 2 = 6. Combien vaut x ?", answer: "2", kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "6 - 2 = 4, puis 4 / 2 = 2. Donc x = 2." },
        { order: 2, prompt: "2x + 4 = 12. Combien vaut x ?", answer: "4", kindWhenWrong: "Pas grave 😊 On regarde ca ensemble.", explanationWhenWrong: "12 - 4 = 8, puis 8 / 2 = 4. Donc x = 4." },
        { order: 3, prompt: "2x + 3 = 13. Combien vaut x ?", answer: "5", kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "13 - 3 = 10, puis 10 / 2 = 5. Donc x = 5." },
        { order: 4, prompt: "2x + 5 = 21. Combien vaut x ?", answer: "8", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "21 - 5 = 16, puis 16 / 2 = 8. Donc x = 8." },
        { order: 5, prompt: "2x + 7 = 23. Combien vaut x ?", answer: "8", kindWhenWrong: "Ce n est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "23 - 7 = 16, puis 16 / 2 = 8. Donc x = 8." },
        { order: 6, prompt: "Defi : 3x + 2 = 14. Combien vaut x ?", answer: "4", kindWhenWrong: "Bravo d avoir essaye ce defi 😊 Regardons ensemble.", explanationWhenWrong: "14 - 2 = 12, et 12 partage en 3 boites : 12 / 3 = 4. Donc x = 4." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le présent des verbes être et avoir",
      xpReward: 24,
      story: {
        hook: "Il existe deux verbes tellement utilisés qu'ils sont un peu magiques : ils ne suivent pas la même musique que les verbes en -er.",
        concreteExample: "Écoute : je suis content. J'ai un vélo. Ce n'est pas « je êtres » ou « je avoir », tout change complètement !",
        reveal: "Ces verbes sont être et avoir. À quoi servent-ils ? Être sert à dire ce qu'on est ou comment on se sent ; avoir sert à dire ce qu'on possède. Comment les reconnaître ? Ils ne se terminent jamais par -e, -es, -e, -ons, -ez, -ent comme les verbes en -er : ce sont des verbes irréguliers.",
        bridgeToConcept: "Terminaisons à retenir : être → suis, es, est, sommes, êtes, sont. Avoir → ai, as, a, avons, avez, ont.",
        illustrationEmoji: "✨"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Je suis fatigué après l'école.", illustrationEmoji: "🧍" },
            { text: "Tu as un joli cartable.", illustrationEmoji: "🎒" },
            { text: "Nous sommes contents de nos vacances.", illustrationEmoji: "😊" }
          ]
        },
        {
          title: "Attention à l'erreur fréquente",
          steps: [
            { text: "Beaucoup d'enfants écrivent « je suis » avec un s à la fin comme un verbe en -er. C'est déjà correct : suis ne prend jamais de s supplémentaire !", illustrationEmoji: "❌" },
            { text: "L'erreur la plus fréquente est d'oublier l'accent : on écrit vous êtes, avec un accent circonflexe sur le e.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper, et le résumé",
          steps: [
            { text: "Astuce : être et avoir sont des verbes tellement importants qu'on les apprend par cœur, comme une chanson qu'on connaît déjà.", illustrationEmoji: "🎵" },
            { text: "Résumé : être et avoir changent complètement de forme selon la personne, il n'y a pas de règle simple, il faut les mémoriser.", illustrationEmoji: "📝" }
          ]
        }
      ],
      questions: [
        {
          order: 1,
          type: "input",
          prompt: "Complète : Je ____ (être) content.",
          answer: "suis",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Avec je, le verbe être devient suis : je suis content."
        },
        {
          order: 2,
          type: "input",
          prompt: "Complète : Tu ____ (avoir) un chat.",
          answer: "as",
          kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.",
          explanationWhenWrong: "Avec tu, le verbe avoir devient as : tu as un chat."
        },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Nous ____ (être) fatigués.",
          options: ["sommes", "êtes", "sont"],
          answer: "sommes",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Avec nous, le verbe être devient sommes."
        },
        {
          order: 4,
          type: "input",
          prompt: "Complète : Vous ____ (avoir) de la chance.",
          answer: "avez",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Avec vous, le verbe avoir devient avez."
        },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Ils ____ (être) heureux.",
          options: ["sommes", "êtes", "sont"],
          answer: "sont",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Avec ils, le verbe être devient sont."
        },
        {
          order: 6,
          type: "match",
          prompt: "Défi : associe chaque sujet à la bonne forme du verbe avoir au présent.",
          answer: "Nous = avons ; Elles = ont ; Il = a",
          matchPairs: [
            { left: "Nous", right: "avons" },
            { left: "Elles", right: "ont" },
            { left: "Il", right: "a" }
          ],
          kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.",
          explanationWhenWrong: "Nous avons, elles ont, il a : le verbe avoir change complètement de forme selon la personne."
        }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Qui fait l action dans la phrase ?",
      xpReward: 24,
      story: {
        hook: "Imagine une phrase comme une petite scene de theatre : quelqu un fait toujours une action.",
        concreteExample: "Le chat mange sa gamelle. Qui fait l action de manger ?",
        reveal: "C est le chat qui fait l action. On dit que chat est le sujet du verbe manger. Bravo, tu as trouve qui fait l action !",
        bridgeToConcept: "Dans une phrase, le sujet est celui qui fait l action du verbe. C est une fonction, pas une nature.",
        illustrationEmoji: "🎭"
      },
      examples: [
        {
          title: "Exemple 1 : Ma soeur dessine une maison",
          steps: [
            { text: "L action est dessine.", illustrationEmoji: "🎨" },
            { text: "Qui dessine ? Ma soeur.", illustrationEmoji: "🔎" },
            { text: "Donc ma soeur est le sujet du verbe dessine.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : Les enfants jouent dans le jardin",
          steps: [
            { text: "L action est jouent.", illustrationEmoji: "⚽" },
            { text: "Qui joue ? Les enfants.", illustrationEmoji: "🔎" },
            { text: "Donc les enfants est le sujet.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Le chien court. Quel est le sujet du verbe court ?", answer: "le chien", kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "C est le chien qui fait l action de courir, donc le chien est le sujet." },
        { order: 2, prompt: "Ma mere cuisine un gateau. Quel est le sujet ?", answer: "ma mere", kindWhenWrong: "Pas grave 😊 On regarde ca ensemble.", explanationWhenWrong: "C est ma mere qui cuisine, donc ma mere est le sujet." },
        { order: 3, prompt: "Les oiseaux chantent le matin. Quel est le sujet ?", answer: "les oiseaux", kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Ce sont les oiseaux qui chantent, donc les oiseaux est le sujet." },
        { order: 4, prompt: "Le vent souffle fort. Quel est le sujet ?", answer: "le vent", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "C est le vent qui souffle, donc le vent est le sujet." },
        { order: 5, prompt: "Mon frere et moi jouons au ballon. Quel est le sujet ?", answer: "mon frere et moi", kindWhenWrong: "Ce n est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Ce sont mon frere et moi qui jouons, donc c est le sujet." },
        { order: 6, prompt: "Defi : Le soir, les etoiles brillent dans le ciel noir. Quel est le sujet du verbe brillent ?", answer: "les etoiles", kindWhenWrong: "Bravo d avoir essaye ce defi 😊 Regardons ensemble.", explanationWhenWrong: "Meme avec des mots avant et apres, ce sont les etoiles qui brillent : c est le sujet." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "son ou sont : le test avec etaient",
      xpReward: 24,
      story: {
        hook: "Comme hier avec a et a, il existe un autre petit test magique pour son et sont.",
        concreteExample: "Regarde: Les enfants ... dans le jardin. Est-ce que c est son ou sont ?",
        reveal: "On essaie de remplacer par etaient : Les enfants etaient dans le jardin. Ca fonctionne ! Donc on ecrit sont (le verbe etre). Bravo, tu as reussi le test !",
        bridgeToConcept: "Si etaient fonctionne, on ecrit sont (verbe etre). Sinon, on ecrit son (petit mot devant un nom, comme sa ou ses).",
        illustrationEmoji: "🪄"
      },
      examples: [
        {
          title: "Exemple 1 : Il prend son sac",
          steps: [
            { text: "On essaie etaient : Il prend etaient sac. Ca ne fonctionne pas.", illustrationEmoji: "🚫" },
            { text: "Donc on ecrit son (petit mot devant sac).", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : Elles sont contentes",
          steps: [
            { text: "On essaie etaient : Elles etaient contentes. Ca fonctionne !", illustrationEmoji: "✅" },
            { text: "Donc on ecrit sont (verbe etre).", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complete: Ils ___ dans la cour. (son ou sont)", answer: "sont", kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Ils etaient dans la cour fonctionne, donc c est sont (verbe etre)." },
        { order: 2, prompt: "Complete: Il porte ___ manteau. (son ou sont)", answer: "son", kindWhenWrong: "Pas grave 😊 On regarde ca ensemble.", explanationWhenWrong: "Il porte etaient manteau ne fonctionne pas, donc c est son (petit mot)." },
        { order: 3, prompt: "Complete: Les fleurs ___ belles. (son ou sont)", answer: "sont", kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Les fleurs etaient belles fonctionne, donc c est sont." },
        { order: 4, prompt: "Complete: Elle range ___ cahier. (son ou sont)", answer: "son", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Elle range etaient cahier ne fonctionne pas, donc c est son." },
        { order: 5, prompt: "Complete: Mes amis ___ arrivés. (son ou sont)", answer: "sont", kindWhenWrong: "Ce n est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Mes amis etaient arrivés fonctionne, donc c est sont." },
        { order: 6, prompt: "Defi : complete les deux mots. Paul et ___ chien ___ alles se promener.", answer: "son sont", kindWhenWrong: "Bravo d avoir essaye ce defi 😊 Regardons ensemble.", explanationWhenWrong: "son chien (petit mot) et ils etaient alles fonctionne donc sont (verbe etre)." }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Enlever par familles de nombres",
      xpReward: 24,
      story: {
        hook: "Comme hier pour additionner, on peut aussi ranger les nombres par familles pour soustraire plus vite.",
        concreteExample: "Pour calculer 48 - 15, on enleve d abord les dizaines (48 - 10 = 38), puis les unites (38 - 5 = 33).",
        reveal: "48 - 10 = 38, puis 38 - 5 = 33. Bravo, tu as soustrait par etapes !",
        bridgeToConcept: "Cette methode s appelle soustraire en deux etapes : d abord les dizaines, puis les unites.",
        illustrationEmoji: "🧮"
      },
      examples: [
        {
          title: "Exemple 1 : 56 - 23",
          steps: [
            { text: "56 - 20 = 36.", illustrationEmoji: "🔟" },
            { text: "36 - 3 = 33.", illustrationEmoji: "1️⃣" },
            { text: "Donc 56 - 23 = 33.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : 32 - 17",
          steps: [
            { text: "32 - 10 = 22.", illustrationEmoji: "🔟" },
            { text: "22 - 7 = 15.", illustrationEmoji: "1️⃣" },
            { text: "Donc 32 - 17 = 15.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 18 - 5", answer: "13", kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "18 - 5 = 13." },
        { order: 2, prompt: "Calcule : 27 - 12", answer: "15", kindWhenWrong: "Pas grave 😊 On regarde ca ensemble.", explanationWhenWrong: "27 - 10 = 17, puis 17 - 2 = 15." },
        { order: 3, prompt: "Calcule : 45 - 19", answer: "26", kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "45 - 10 = 35, puis 35 - 9 = 26." },
        { order: 4, prompt: "Calcule : 63 - 28", answer: "35", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "63 - 20 = 43, puis 43 - 8 = 35." },
        { order: 5, prompt: "Calcule : 81 - 37", answer: "44", kindWhenWrong: "Ce n est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "81 - 30 = 51, puis 51 - 7 = 44." },
        { order: 6, prompt: "Defi : calcule 100 - 46", answer: "54", kindWhenWrong: "Bravo d avoir essaye ce defi 😊 Regardons ensemble.", explanationWhenWrong: "100 - 40 = 60, puis 60 - 6 = 54." }
      ]
    }
  ]
};
