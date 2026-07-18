import { DayCurriculum } from "@/models/types";

export const day03: DayCurriculum = {
  dayNumber: 3,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "La soustraction avec emprunt",
      xpReward: 24,
      story: {
        hook: "Imagine que tu veux enlever plus de jetons qu'il n'y en a dans une colonne : il faut emprunter !",
        concreteExample: "Calcule 42 - 27. Aux unités : 2 - 7, impossible directement ! Que fait-on ?",
        reveal: "On emprunte 1 dizaine à côté : 12 - 7 = 5. Puis aux dizaines, il en reste 3 au lieu de 4 : 3 - 2 = 1. Le résultat est 15. Bravo, tu as emprunté une dizaine !",
        bridgeToConcept: "Quand on ne peut pas soustraire les unités directement, on emprunte 1 dizaine.",
        illustrationEmoji: "➖"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "51 - 26 : unités 1 - 6, impossible.", illustrationEmoji: "🤔" },
            { text: "On emprunte 1 dizaine : 11 - 6 = 5.", illustrationEmoji: "✍️" },
            { text: "Dizaines : 4 (5-1 empruntée) - 2 = 2.", illustrationEmoji: "🔟" },
            { text: "Résultat : 25.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "63 - 38 : unités 3 - 8, impossible.", illustrationEmoji: "🤔" },
            { text: "On emprunte 1 dizaine : 13 - 8 = 5.", illustrationEmoji: "✍️" },
            { text: "Dizaines : 5 (6-1) - 3 = 2. Résultat : 25.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 32 - 15", answer: "17", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "2 - 5 impossible, on emprunte : 12 - 5 = 7. Dizaines : 2 - 1 = 1. Résultat : 17." },
        { order: 2, prompt: "Calcule : 41 - 26", answer: "15", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "1 - 6 impossible, on emprunte : 11 - 6 = 5. Dizaines : 3 - 2 = 1. Résultat : 15." },
        { order: 3, prompt: "Calcule : 53 - 28", answer: "25", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "3 - 8 impossible, on emprunte : 13 - 8 = 5. Dizaines : 4 - 2 = 2. Résultat : 25." },
        { order: 4, prompt: "Calcule : 72 - 47", answer: "25", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "2 - 7 impossible, on emprunte : 12 - 7 = 5. Dizaines : 6 - 4 = 2. Résultat : 25." },
        { order: 5, prompt: "Calcule : 84 - 59", answer: "25", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "4 - 9 impossible, on emprunte : 14 - 9 = 5. Dizaines : 7 - 5 = 2. Résultat : 25." },
        { order: 6, prompt: "Défi : calcule 91 - 56", answer: "35", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "1 - 6 impossible, on emprunte : 11 - 6 = 5. Dizaines : 8 - 5 = 3. Résultat : 35." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Les verbes en -ir comme finir, au présent",
      xpReward: 24,
      story: {
        hook: "Imagine une plante qui grandit un peu plus chaque jour, avec un mot qui grandit aussi.",
        concreteExample: "Écoute : je finis, tu finis, il finit, nous finissons, vous finissez, ils finissent.",
        reveal: "À quoi sert ce groupe de verbes ? Comme les verbes en -er, il sert à dire ce qui se passe maintenant. Comment le reconnaître ? On entend le petit -iss- qui apparaît avec nous, vous, ils.",
        bridgeToConcept: "Terminaisons : -is, -is, -it, -issons, -issez, -issent.",
        illustrationEmoji: "🌱"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Je finis mes devoirs avant le dîner.", illustrationEmoji: "📚" },
            { text: "Nous choisissons un livre à la bibliothèque.", illustrationEmoji: "📖" },
            { text: "Ils grandissent un peu plus chaque année.", illustrationEmoji: "🌳" }
          ]
        },
        {
          title: "Attention à l'erreur fréquente",
          steps: [
            { text: "Beaucoup d'enfants oublient le -iss- et écrivent nous finons. C'est une erreur !", illustrationEmoji: "❌" },
            { text: "Avec nous, vous, ils, il faut toujours ajouter -iss- : nous finissons.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je ____ (finir) mes devoirs.", answer: "finis", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Avec je, finir devient finis, sans -iss- car c'est une personne du singulier.", strictAccents: true },
        { order: 2, prompt: "Complète : Nous ____ (choisir) un jeu.", answer: "choisissons", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "Avec nous, choisir devient choisissons : n'oublie pas le petit -iss- au milieu.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Vous ____ (grandir) vite.",
          options: ["grandis", "grandissez", "grandissent"],
          answer: "grandissez",
          kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.",
          explanationWhenWrong: "Avec vous, grandir devient grandissez, avec -iss- et la terminaison -ez.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Ils ____ (finir) la course ensemble.", answer: "finissent", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Avec ils, finir devient finissent, avec -iss- comme pour nous et vous.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Tu ____ (choisir) ton dessert.",
          options: ["choisis", "choisissez", "choisissent"],
          answer: "choisis",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.",
          explanationWhenWrong: "Avec tu, choisir devient choisis, sans -iss- car c'est une personne du singulier.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Nous ____ (réussir) car vous ____ (réfléchir) bien.", answer: "réussissons réfléchissez", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "Nous réussissons et vous réfléchissez : n'oublie pas le -iss- pour nous, vous et ils.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "L'accord entre le sujet et le verbe",
      xpReward: 24,
      story: {
        hook: "Imagine que le sujet donne toujours ses instructions au verbe : il lui dit comment se terminer.",
        concreteExample: "Regarde : le chat dort. Les chats dorment. Pourquoi le verbe change-t-il ?",
        reveal: "À quoi sert cet accord ? Il montre que le sujet est au singulier ou au pluriel. Comment le reconnaître ? Si le sujet est au pluriel, le verbe se termine souvent par -nt.",
        bridgeToConcept: "Le verbe s'accorde toujours avec son sujet : singulier ou pluriel.",
        illustrationEmoji: "🔗"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Le chien joue (un seul chien, sujet singulier).", illustrationEmoji: "🐶" },
            { text: "Les chiens jouent (plusieurs chiens, sujet pluriel, verbe en -ent).", illustrationEmoji: "🐶🐶" }
          ]
        },
        {
          title: "L'astuce pour bien accorder",
          steps: [
            { text: "Cherche d'abord le sujet du verbe.", illustrationEmoji: "🔍" },
            { text: "S'il est au pluriel, le verbe se termine souvent par -nt.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Le chat ____ (dormir : dort/dorment).", answer: "dort", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Le chat est singulier, donc dort." },
        { order: 2, prompt: "Complète : Les chats ____ (dormir : dort/dorment).", answer: "dorment", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Les chats est pluriel, donc dorment." },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Mes amis ____ (arriver).",
          options: ["arrive", "arrivent"],
          answer: "arrivent",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Mes amis est pluriel, donc arrivent."
        },
        { order: 4, prompt: "Complète : Ma soeur ____ (chanter : chante/chantent) bien.", answer: "chante", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Ma soeur est singulier, donc chante." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Les enfants ____ (jouer) dehors.",
          options: ["joue", "jouent"],
          answer: "jouent",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Les enfants est pluriel, donc jouent."
        },
        { order: 6, prompt: "Défi : complète les deux mots. Le vent ____ (souffler) et les feuilles ____ (tomber).", answer: "souffle tombent", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Le vent (singulier) souffle, les feuilles (pluriel) tombent." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Son ou sont : le test avec étaient",
      xpReward: 24,
      story: {
        hook: "Il existe un petit test magique pour ne jamais confondre son et sont.",
        concreteExample: "Regarde : les enfants ... dans le jardin. Est-ce que c'est son ou sont ?",
        reveal: "On essaie de remplacer par étaient : les enfants étaient dans le jardin. Ça fonctionne ! Donc on écrit sont, le verbe être. Bravo, tu as réussi le test !",
        bridgeToConcept: "Si étaient fonctionne, on écrit sont (verbe être). Sinon, on écrit son (comme sa ou ses, devant un nom).",
        illustrationEmoji: "🪄"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Il prend son sac : on essaie étaient sac, ça ne fonctionne pas. Donc son.", illustrationEmoji: "🎒" },
            { text: "Elles sont contentes : on essaie elles étaient contentes, ça fonctionne. Donc sont.", illustrationEmoji: "😊" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Remplace toujours par étaient dans ta tête.", illustrationEmoji: "🔊" },
            { text: "Si ça marche, c'est sont. Sinon, c'est son.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Ils ___ dans la cour. (son ou sont)", answer: "sont", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Ils étaient dans la cour fonctionne, donc c'est sont, le verbe être.", strictAccents: true },
        { order: 2, prompt: "Complète : Il porte ___ manteau. (son ou sont)", answer: "son", kindWhenWrong: "Pas grave, on continue ensemble.", explanationWhenWrong: "Il porte étaient manteau ne fonctionne pas, donc c'est son, comme sa ou ses.", strictAccents: true },
        { order: 3, prompt: "Complète : Les fleurs ___ belles. (son ou sont)", answer: "sont", kindWhenWrong: "Ce n'est pas grave ! On regarde ensemble.", explanationWhenWrong: "Les fleurs étaient belles fonctionne, donc c'est sont, le verbe être.", strictAccents: true },
        { order: 4, prompt: "Complète : Elle range ___ cahier. (son ou sont)", answer: "son", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "Elle range étaient cahier ne fonctionne pas, donc c'est son.", strictAccents: true },
        { order: 5, prompt: "Complète : Mes amis ___ arrivés. (son ou sont)", answer: "sont", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Mes amis étaient arrivés fonctionne, donc c'est sont.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. Paul et ___ chien ___ allés se promener.", answer: "son sont", kindWhenWrong: "Bravo d'avoir essayé ce défi ! On regarde ensemble.", explanationWhenWrong: "Son chien est un petit mot devant un nom, et ils étaient allés fonctionne, donc sont, le verbe être.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "La table de multiplication de 10",
      xpReward: 24,
      story: {
        hook: "Imagine que tu comptes des billets qui valent chacun 10 euros.",
        concreteExample: "Tu as 6 billets de 10 euros. Combien d'argent as-tu en tout ?",
        reveal: "6 fois 10, ça fait 60. Multiplier par 10, c'est très facile : on ajoute juste un 0 à la fin ! Bravo !",
        bridgeToConcept: "La table de 10 : 1x10=10, 2x10=20, 3x10=30... On ajoute toujours un 0.",
        illustrationEmoji: "💶"
      },
      examples: [
        {
          title: "La table de 10",
          steps: [
            { text: "10 x 4 : on ajoute un 0 à 4, ça donne 40.", illustrationEmoji: "0️⃣" },
            { text: "10 x 7 : on ajoute un 0 à 7, ça donne 70.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour la table de 10",
          steps: [
            { text: "Il suffit d'ajouter un zéro après le nombre.", illustrationEmoji: "🔍" },
            { text: "10 x 9 = 90, très simple !", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 10 x 3", answer: "30", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "10 x 3 = 30." },
        { order: 2, prompt: "Calcule : 10 x 5", answer: "50", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "10 x 5 = 50." },
        { order: 3, prompt: "Calcule : 10 x 6", answer: "60", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "10 x 6 = 60." },
        { order: 4, prompt: "Calcule : 10 x 8", answer: "80", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "10 x 8 = 80." },
        { order: 5, prompt: "Calcule : 10 x 9", answer: "90", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "10 x 9 = 90." },
        { order: 6, prompt: "Défi : calcule 10 x 12", answer: "120", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "10 x 12 = 120." }
      ]
    }
  ]
};
