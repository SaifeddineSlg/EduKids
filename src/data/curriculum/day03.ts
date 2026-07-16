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
        concreteExample: "Une pizza est coupee en 4 parts egales. Tu manges 1 part. Quelle fraction de la pizza as-tu mangee ?",
        reveal: "Tu as mange 1 part sur les 4 parts. On ecrit ca 1/4 (un quart). Bravo, tu viens de lire une fraction !",
        bridgeToConcept: "Une fraction, c est un nombre de parts (en haut) sur un nombre total de parts (en bas).",
        illustrationEmoji: "🍕"
      },
      examples: [
        {
          title: "Exemple 1 : une pizza coupee en 8",
          steps: [
            { text: "La pizza a 8 parts egales.", illustrationEmoji: "🍕" },
            { text: "Tu manges 3 parts.", illustrationEmoji: "😋" },
            { text: "Tu as mange 3/8 de la pizza.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : un gateau coupe en 6",
          steps: [
            { text: "Le gateau a 6 parts egales.", illustrationEmoji: "🎂" },
            { text: "Ton frere mange 2 parts.", illustrationEmoji: "😋" },
            { text: "Il a mange 2/6 du gateau.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Une tarte est coupee en 4 parts. Tu manges 1 part. Quelle fraction as-tu mangee ?", answer: "1/4", kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Tu as mange 1 part sur 4, donc 1/4." },
        { order: 2, prompt: "Une pizza est coupee en 8 parts. Tu manges 2 parts. Quelle fraction ?", answer: "2/8", kindWhenWrong: "Pas grave 😊 On regarde ca ensemble.", explanationWhenWrong: "2 parts sur 8, donc 2/8." },
        { order: 3, prompt: "Un gateau est coupe en 6 parts. On en mange 3. Quelle fraction ?", answer: "3/6", kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "3 parts sur 6, donc 3/6." },
        { order: 4, prompt: "Une pizza a 10 parts. Tu en manges 4. Quelle fraction ?", answer: "4/10", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "4 parts sur 10, donc 4/10." },
        { order: 5, prompt: "Une tarte a 12 parts. On en mange 5. Quelle fraction reste-t-il non mangee ?", answer: "7/12", kindWhenWrong: "Ce n est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "12 - 5 = 7 parts restantes sur 12, donc 7/12." },
        { order: 6, prompt: "Defi : une pizza a 8 parts. Toi et ton ami mangez chacun 2 parts. Quelle fraction avez-vous mangee ensemble ?", answer: "4/8", kindWhenWrong: "Bravo d avoir essaye ce defi 😊 Regardons ensemble.", explanationWhenWrong: "2 + 2 = 4 parts mangees sur 8, donc 4/8." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Les verbes en -ir qui grandissent",
      xpReward: 24,
      story: {
        hook: "Imagine une plante qui grandit un peu plus chaque jour, avec un mot qui grandit aussi.",
        concreteExample: "Regarde: je finis, tu finis, il finit, nous finissons, vous finissez, ils finissent. Tu remarques le petit -iss- qui apparait ?",
        reveal: "Beaucoup de verbes en -ir (comme finir, choisir, grandir) ajoutent -iss- avec nous, vous, ils. Bravo, tu as repere ce petit groupe special !",
        bridgeToConcept: "On appelle ca les verbes du deuxieme groupe : ils finissent toujours par -issons, -issez, -issent.",
        illustrationEmoji: "🌱"
      },
      examples: [
        {
          title: "Exemple 1 : le verbe grandir",
          steps: [
            { text: "Je grandis, tu grandis, il grandit.", illustrationEmoji: "🌱" },
            { text: "Nous grandissons, vous grandissez, ils grandissent.", illustrationEmoji: "🌳" }
          ]
        },
        {
          title: "Exemple 2 : le verbe choisir",
          steps: [
            { text: "Je choisis, tu choisis, elle choisit.", illustrationEmoji: "🤔" },
            { text: "Nous choisissons, vous choisissez, elles choisissent.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complete: Je ____ (finir) mes devoirs.", answer: "finis", kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec je, finir devient finis : je finis." },
        { order: 2, prompt: "Complete: Tu ____ (choisir) un livre.", answer: "choisis", kindWhenWrong: "Pas grave 😊 On regarde ca ensemble.", explanationWhenWrong: "Avec tu, choisir devient choisis." },
        { order: 3, prompt: "Complete: Nous ____ (grandir) chaque annee.", answer: "grandissons", kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec nous, grandir devient grandissons (avec -iss-)." },
        { order: 4, prompt: "Complete: Vous ____ (finir) la course.", answer: "finissez", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Avec vous, finir devient finissez." },
        { order: 5, prompt: "Complete: Elles ____ (choisir) leurs jouets.", answer: "choisissent", kindWhenWrong: "Ce n est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Avec elles, choisir devient choisissent." },
        { order: 6, prompt: "Defi : complete les deux mots. Nous ____ (reussir) car vous ____ (reflechir) bien.", answer: "reussissons reflechissez", kindWhenWrong: "Bravo d avoir essaye ce defi 😊 Regardons ensemble.", explanationWhenWrong: "Nous reussissons et vous reflechissez, toujours avec -iss- pour nous/vous/ils." }
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
      title: "et ou est : le test avec etait",
      xpReward: 24,
      story: {
        hook: "Encore un petit test magique, cette fois pour et et est.",
        concreteExample: "Regarde: Le chat ... noir. Est-ce que c est et ou est ?",
        reveal: "On essaie de remplacer par etait : Le chat etait noir. Ca fonctionne ! Donc on ecrit est (le verbe etre). Bravo !",
        bridgeToConcept: "Si etait fonctionne, on ecrit est (verbe etre). Sinon, on ecrit et (qui relie deux mots, comme dans papa et maman).",
        illustrationEmoji: "🪄"
      },
      examples: [
        {
          title: "Exemple 1 : Papa et maman arrivent",
          steps: [
            { text: "On essaie etait : Papa etait maman arrivent. Ca ne fonctionne pas.", illustrationEmoji: "🚫" },
            { text: "Donc on ecrit et (relie deux mots).", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : Le ciel est bleu",
          steps: [
            { text: "On essaie etait : Le ciel etait bleu. Ca fonctionne !", illustrationEmoji: "✅" },
            { text: "Donc on ecrit est (verbe etre).", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complete: Le soleil ___ chaud. (et ou est)", answer: "est", kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Le soleil etait chaud fonctionne, donc c est est (verbe etre)." },
        { order: 2, prompt: "Complete: Il mange une pomme ___ une banane. (et ou est)", answer: "et", kindWhenWrong: "Pas grave 😊 On regarde ca ensemble.", explanationWhenWrong: "On ne peut pas dire il mange une pomme etait une banane, donc c est et." },
        { order: 3, prompt: "Complete: Mon chat ___ tres joueur. (et ou est)", answer: "est", kindWhenWrong: "Ce n est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Mon chat etait tres joueur fonctionne, donc est." },
        { order: 4, prompt: "Complete: Je prends mon sac ___ mes cles. (et ou est)", answer: "et", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "et relie sac et cles, etait ne fonctionne pas ici." },
        { order: 5, prompt: "Complete: Cette histoire ___ tres jolie. (et ou est)", answer: "est", kindWhenWrong: "Ce n est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Cette histoire etait tres jolie fonctionne, donc est." },
        { order: 6, prompt: "Defi : complete les deux mots. Mon frere ___ ma soeur jouent, et le jeu ___ amusant.", answer: "et est", kindWhenWrong: "Bravo d avoir essaye ce defi 😊 Regardons ensemble.", explanationWhenWrong: "et relie frere et soeur ; le jeu etait amusant fonctionne, donc est." }
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
