import { DayCurriculum } from "@/models/types";

export const day03: DayCurriculum = {
  dayNumber: 3,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Partager une pizza en parts egales",
      xpReward: 24,
      story: {
        hook: "Imagine une pizza entiere que tu dois partager avec tes amis, en parts bien egales.",
        concreteExample: "Une pizza est coupee en 4 parts egales. Tu manges 1 part. Quelle fraction de la pizza as-tu mangée ?",
        reveal: "Tu as mangé 1 part sur les 4 parts. On ecrit ca 1/4 (un quart). Bravo, tu viens de lire une fraction !",
        bridgeToConcept: "Une fraction, c est un nombre de parts (en haut) sur un nombre total de parts (en bas).",
        illustrationEmoji: "🍕"
      },
      examples: [
        {
          title: "Exemple 1 : une pizza coupee en 8",
          steps: [
            { text: "La pizza a 8 parts egales.", illustrationEmoji: "🍕" },
            { text: "Tu manges 3 parts.", illustrationEmoji: "😋" },
            { text: "Tu as mangé 3/8 de la pizza.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : un gateau coupe en 6",
          steps: [
            { text: "Le gateau a 6 parts egales.", illustrationEmoji: "🎂" },
            { text: "Ton frere mange 2 parts.", illustrationEmoji: "😋" },
            { text: "Il a mangé 2/6 du gateau.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Une tarte est coupee en 4 parts. Tu manges 1 part. Quelle fraction as-tu mangée ?", answer: "1/4", kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Tu as mangé 1 part sur 4, donc 1/4." },
        { order: 2, prompt: "Une pizza est coupee en 8 parts. Tu manges 2 parts. Quelle fraction ?", answer: "2/8", kindWhenWrong: "Pas grave 😊 On regarde ca ensemble.", explanationWhenWrong: "2 parts sur 8, donc 2/8." },
        { order: 3, prompt: "Un gateau est coupe en 6 parts. On en mange 3. Quelle fraction ?", answer: "3/6", kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "3 parts sur 6, donc 3/6." },
        { order: 4, prompt: "Une pizza a 10 parts. Tu en manges 4. Quelle fraction ?", answer: "4/10", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "4 parts sur 10, donc 4/10." },
        { order: 5, prompt: "Une tarte a 12 parts. On en mange 5. Quelle fraction reste-t-il non mangée ?", answer: "7/12", kindWhenWrong: "Ce n est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "12 - 5 = 7 parts restantes sur 12, donc 7/12." },
        { order: 6, prompt: "Defi : une pizza a 8 parts. Toi et ton ami mangez chacun 2 parts. Quelle fraction avez-vous mangée ensemble ?", answer: "4/8", kindWhenWrong: "Bravo d avoir essaye ce defi 😊 Regardons ensemble.", explanationWhenWrong: "2 + 2 = 4 parts mangées sur 8, donc 4/8." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le présent des verbes en -ir qui grandissent",
      xpReward: 24,
      story: {
        hook: "Imagine une plante qui grandit un peu plus chaque jour : certains verbes en -ir grandissent eux aussi, avec un petit morceau qui s'ajoute.",
        concreteExample: "Écoute : je finis, tu finis, il finit, nous finissons, vous finissez, ils finissent.",
        reveal: "À quoi sert ce groupe de verbes ? Comme les verbes en -er, il sert à dire ce qui se passe maintenant. Comment le reconnaître ? On entend le petit -iss- qui apparaît avec nous, vous, ils : c'est la marque de ce groupe.",
        bridgeToConcept: "Terminaisons à retenir pour finir, choisir, grandir : -is, -is, -it, -issons, -issez, -issent.",
        illustrationEmoji: "🌱"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Je finis mes devoirs avant le dîner.", illustrationEmoji: "📚" },
            { text: "Tu choisis un livre à la bibliothèque.", illustrationEmoji: "📖" },
            { text: "Chaque année, nous grandissons un peu plus.", illustrationEmoji: "🌳" }
          ]
        },
        {
          title: "Attention à l'erreur fréquente",
          steps: [
            { text: "Beaucoup d'enfants oublient le -iss- et écrivent « nous finons ». C'est une erreur !", illustrationEmoji: "❌" },
            { text: "Avec nous, vous, ils, il faut toujours ajouter -iss- avant la terminaison : nous finissons.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper, et le résumé",
          steps: [
            { text: "Astuce : dis le verbe à voix haute avec nous. Si tu entends « iss », c'est un verbe de ce groupe : nous fin-iss-ons.", illustrationEmoji: "🔊" },
            { text: "Résumé : avec je, tu, il, ces verbes ressemblent aux verbes en -er (-is, -is, -it), mais avec nous, vous, ils, ils ajoutent -iss- avant la terminaison.", illustrationEmoji: "📝" }
          ]
        }
      ],
      questions: [
        {
          order: 1,
          type: "input",
          prompt: "Complète : Je ____ (finir) mes devoirs.",
          answer: "finis",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Avec je, finir devient finis, sans -iss- : je finis. Le -iss- n'apparaît qu'avec nous, vous, ils.",
          strictAccents: true
        },
        {
          order: 2,
          type: "input",
          prompt: "Complète : Tu ____ (choisir) un livre.",
          answer: "choisis",
          kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.",
          explanationWhenWrong: "Avec tu, choisir devient choisis, comme je finis : pas de -iss- à cette personne.",
          strictAccents: true
        },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Nous ____ (grandir) chaque année.",
          options: ["grandis", "grandissons", "grandissez"],
          answer: "grandissons",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Avec nous, grandir devient grandissons : on ajoute -iss- avant la terminaison -ons.",
          strictAccents: true
        },
        {
          order: 4,
          type: "input",
          prompt: "Complète : Vous ____ (finir) la course.",
          answer: "finissez",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Avec vous, finir devient finissez : n'oublie pas le -iss- avant le -ez final.",
          strictAccents: true
        },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Elles ____ (choisir) leurs jouets.",
          options: ["choisit", "choisissez", "choisissent"],
          answer: "choisissent",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Avec elles, choisir devient choisissent : le -iss- apparaît, suivi de -ent.",
          strictAccents: true
        },
        {
          order: 6,
          type: "match",
          prompt: "Défi : associe chaque sujet à la bonne forme du verbe réussir au présent.",
          answer: "Je = réussis ; Nous = réussissons ; Ils = réussissent",
          matchPairs: [
            { left: "Je", right: "réussis" },
            { left: "Nous", right: "réussissons" },
            { left: "Ils", right: "réussissent" }
          ],
          kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.",
          explanationWhenWrong: "Je réussis (sans -iss-), nous réussissons (avec -iss-), ils réussissent (avec -iss-) : le petit morceau -iss- n'apparaît qu'à trois personnes.",
          strictAccents: true
        }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Un, une, des : les petits mots qui annoncent",
      xpReward: 24,
      story: {
        hook: "Imagine un petit garde qui annonce toujours ce qui va arriver avant un nom.",
        concreteExample: "Regarde: un chat, une maison, des fleurs. Ces petits mots (un, une, des) annoncent toujours un nom juste apres.",
        reveal: "un, une, des sont des determinants. Ils nous disent si le nom est masculin, feminin, ou au pluriel. Bravo, tu as trouve le garde du nom !",
        bridgeToConcept: "Ces petits mots devant le nom s appellent des determinants (articles).",
        illustrationEmoji: "🚦"
      },
      examples: [
        {
          title: "Exemple 1 : un ballon, une balle",
          steps: [
            { text: "un ballon : un annonce un nom masculin.", illustrationEmoji: "⚽" },
            { text: "une balle : une annonce un nom feminin.", illustrationEmoji: "🎾" }
          ]
        },
        {
          title: "Exemple 2 : des chats, des chiens",
          steps: [
            { text: "des annonce un nom au pluriel.", illustrationEmoji: "🐱🐶" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complete: ____ chat dort sur le canape. (un/une/des)", answer: "un", kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "chat est masculin singulier, donc on utilise un." },
        { order: 2, prompt: "Complete: ____ maison est grande. (un/une/des)", answer: "une", kindWhenWrong: "Pas grave 😊 On regarde ca ensemble.", explanationWhenWrong: "maison est feminin singulier, donc on utilise une." },
        { order: 3, prompt: "Complete: ____ enfants jouent dehors. (un/une/des)", answer: "des", kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "enfants est au pluriel, donc on utilise des." },
        { order: 4, prompt: "Complete: J ai vu ____ oiseau bleu. (un/une/des)", answer: "un", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "oiseau est masculin singulier, donc un." },
        { order: 5, prompt: "Complete: Elle porte ____ jolie robe. (un/une/des)", answer: "une", kindWhenWrong: "Ce n est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "robe est feminin singulier, donc une." },
        { order: 6, prompt: "Defi : complete les deux mots. J ai ____ velo et ____ trottinette.", answer: "un une", kindWhenWrong: "Bravo d avoir essaye ce defi 😊 Regardons ensemble.", explanationWhenWrong: "velo est masculin (un velo) et trottinette est feminin (une trottinette)." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "et ou est : le test avec était",
      xpReward: 24,
      story: {
        hook: "Encore un petit test magique, cette fois pour ne plus confondre et et est.",
        concreteExample: "Regarde : Le chat ... noir. Est-ce que c'est et ou est ?",
        reveal: "On essaie de remplacer par était : Le chat était noir. Ça fonctionne ! Donc on écrit est, le verbe être. Bravo !",
        bridgeToConcept: "Si était fonctionne, on écrit est (verbe être). Sinon, on écrit et, qui relie deux mots, comme dans papa et maman.",
        illustrationEmoji: "🪄"
      },
      examples: [
        {
          title: "Exemple 1 : Papa et maman arrivent",
          steps: [
            { text: "On essaie était : Papa était maman arrivent. Ça ne fonctionne pas.", illustrationEmoji: "🚫" },
            { text: "Donc on écrit et, qui relie papa et maman.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : Le ciel est bleu",
          steps: [
            { text: "On essaie était : Le ciel était bleu. Ça fonctionne !", illustrationEmoji: "✅" },
            { text: "Donc on écrit est, le verbe être.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        {
          order: 1,
          prompt: "Complète : Le soleil ___ chaud. (et ou est)",
          answer: "est",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Le soleil était chaud fonctionne, donc c'est est, le verbe être.",
          strictAccents: true
        },
        {
          order: 2,
          prompt: "Complète : Il mange une pomme ___ une banane. (et ou est)",
          answer: "et",
          kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.",
          explanationWhenWrong: "On ne peut pas dire il mange une pomme était une banane, donc c'est et, qui relie pomme et banane.",
          strictAccents: true
        },
        {
          order: 3,
          prompt: "Complète : Mon chat ___ très joueur. (et ou est)",
          answer: "est",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Mon chat était très joueur fonctionne, donc c'est est, le verbe être.",
          strictAccents: true
        },
        {
          order: 4,
          prompt: "Complète : Je prends mon sac ___ mes clés. (et ou est)",
          answer: "et",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "et relie sac et clés ; était ne fonctionne pas ici, donc pas de verbe être.",
          strictAccents: true
        },
        {
          order: 5,
          prompt: "Complète : Cette histoire ___ très jolie. (et ou est)",
          answer: "est",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Cette histoire était très jolie fonctionne, donc c'est est, le verbe être.",
          strictAccents: true
        },
        {
          order: 6,
          prompt: "Défi : complète les deux mots. Mon frère ___ ma sœur jouent, et le jeu ___ amusant.",
          answer: "et est",
          kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.",
          explanationWhenWrong: "et relie frère et sœur ; le jeu était amusant fonctionne, donc est, le verbe être.",
          strictAccents: true
        }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Les tables de multiplication par bonds",
      xpReward: 24,
      story: {
        hook: "Imagine un kangourou qui saute toujours de la meme distance : 2, puis 2, puis encore 2.",
        concreteExample: "Le kangourou fait 4 bonds de 2. Ou arrive-t-il ? 2, 4, 6, 8.",
        reveal: "4 bonds de 2, c est 4 fois 2, donc 4 x 2 = 8. Bravo, tu viens de faire une multiplication avec des bonds !",
        bridgeToConcept: "Multiplier, c est faire des bonds egaux plusieurs fois. 4 x 2 veut dire 4 bonds de 2.",
        illustrationEmoji: "🦘"
      },
      examples: [
        {
          title: "Exemple 1 : 3 x 5",
          steps: [
            { text: "3 bonds de 5 : 5, 10, 15.", illustrationEmoji: "🦘" },
            { text: "Donc 3 x 5 = 15.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : 6 x 4",
          steps: [
            { text: "6 bonds de 4 : 4, 8, 12, 16, 20, 24.", illustrationEmoji: "🦘" },
            { text: "Donc 6 x 4 = 24.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 2 x 3", answer: "6", kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "2 bonds de 3 : 3, 6. Donc 2 x 3 = 6." },
        { order: 2, prompt: "Calcule : 4 x 5", answer: "20", kindWhenWrong: "Pas grave 😊 On regarde ca ensemble.", explanationWhenWrong: "4 bonds de 5 : 5, 10, 15, 20." },
        { order: 3, prompt: "Calcule : 6 x 3", answer: "18", kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "6 bonds de 3 : 3, 6, 9, 12, 15, 18." },
        { order: 4, prompt: "Calcule : 7 x 4", answer: "28", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "7 bonds de 4 : 4, 8, 12, 16, 20, 24, 28." },
        { order: 5, prompt: "Calcule : 8 x 6", answer: "48", kindWhenWrong: "Ce n est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "8 x 6, c est 6 x 8 : 8, 16, 24, 32, 40, 48." },
        { order: 6, prompt: "Defi : calcule 9 x 7", answer: "63", kindWhenWrong: "Bravo d avoir essaye ce defi 😊 Regardons ensemble.", explanationWhenWrong: "9 x 7 = 9 x 5 + 9 x 2 = 45 + 18 = 63." }
      ]
    }
  ]
};
