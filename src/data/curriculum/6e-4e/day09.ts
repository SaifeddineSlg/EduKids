import { DayCurriculum } from "@/models/types";

export const day09: DayCurriculum = {
  dayNumber: 9,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "La règle de trois, ou comment tout est proportionnel",
      xpReward: 24,
      story: {
        hook: "Imagine que tu achètes des bonbons : plus tu en achètes, plus tu paies, toujours dans la même proportion.",
        concreteExample: "3 bonbons coûtent 6 euros. Combien coûtent 5 bonbons, au même prix chacun ?",
        reveal: "D'abord, on cherche le prix d'un seul bonbon : 6 / 3 = 2 euros. Ensuite, pour 5 bonbons, on multiplie : 2 x 5 = 10 euros. Bravo, tu as utilisé la règle de trois !",
        bridgeToConcept: "Pour une situation proportionnelle, on trouve d'abord la valeur pour 1 unité, puis on multiplie par le nombre d'unités voulu.",
        illustrationEmoji: "⚖️"
      },
      examples: [
        {
          title: "Exemple 1 : 4 stylos coûtent 8 euros. Prix de 6 stylos ?",
          steps: [
            { text: "Prix d'un stylo : 8 / 4 = 2 euros.", illustrationEmoji: "✏️" },
            { text: "Prix de 6 stylos : 2 x 6 = 12 euros.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : une voiture parcourt 150 km en 3 heures. Distance en 5 heures ?",
          steps: [
            { text: "Distance en 1 heure : 150 / 3 = 50 km.", illustrationEmoji: "🚗" },
            { text: "Distance en 5 heures : 50 x 5 = 250 km.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "5 crayons coûtent 10 euros. Combien coûtent 8 crayons ?", answer: "16", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Prix d'un crayon : 10 / 5 = 2 euros. Prix de 8 crayons : 2 x 8 = 16 euros." },
        { order: 2, prompt: "2 kg de pommes coûtent 6 euros. Combien coûtent 5 kg ?", answer: "15", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Prix d'un kg : 6 / 2 = 3 euros. Prix de 5 kg : 3 x 5 = 15 euros." },
        { order: 3, prompt: "Une voiture parcourt 120 km en 2 heures. Quelle distance parcourt-elle en 4 heures ?", answer: "240", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Distance en 1 heure : 120 / 2 = 60 km. Distance en 4 heures : 60 x 4 = 240 km." },
        { order: 4, prompt: "6 tickets de cinéma coûtent 48 euros. Combien coûtent 3 tickets ?", answer: "24", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Prix d'un ticket : 48 / 6 = 8 euros. Prix de 3 tickets : 8 x 3 = 24 euros." },
        { order: 5, prompt: "4 ouvriers construisent 8 mètres de mur en une journée, chacun à la même vitesse. Combien de mètres 1 ouvrier construit-il seul ?", answer: "2", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "8 / 4 = 2 mètres par ouvrier." },
        { order: 6, prompt: "Défi : 3 livres identiques coûtent 21 euros. Combien coûteraient 7 de ces livres ?", answer: "49", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Prix d'un livre : 21 / 3 = 7 euros. Prix de 7 livres : 7 x 7 = 49 euros." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le passé composé avec être",
      xpReward: 24,
      story: {
        hook: "Certains verbes, souvent des verbes de mouvement, n'utilisent pas avoir pour construire leur passé composé, mais leur cousin être.",
        concreteExample: "Écoute : je suis allé, tu es allé, il est allé, nous sommes allés, vous êtes allés, ils sont allés.",
        reveal: "À quoi sert ce passé composé avec être ? Il raconte aussi une action passée et terminée, mais avec certains verbes précis comme aller, venir, partir, arriver, tomber, monter, descendre. Comment le construire ? On prend être conjugué au présent, puis le participe passé, qui s'accorde avec le sujet. Bravo, tu as construit un passé composé avec être !",
        bridgeToConcept: "Avec être, le participe passé s'accorde avec le sujet : il est allé, elle est allée, ils sont allés, elles sont allées.",
        illustrationEmoji: "🚶"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Hier, je suis allé chez mon cousin.", illustrationEmoji: "🏠" },
            { text: "Ma sœur est partie tôt ce matin.", illustrationEmoji: "🌅" },
            { text: "Nous sommes arrivés juste à temps.", illustrationEmoji: "⏰" }
          ]
        },
        {
          title: "Attention à l'erreur fréquente",
          steps: [
            { text: "Beaucoup d'élèves oublient d'accorder le participe passé avec être et écrivent « elle est allé » sans e. C'est une erreur !", illustrationEmoji: "❌" },
            { text: "Avec être, le participe passé s'accorde toujours avec le sujet : elle est allée, avec un e final.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper, et le résumé",
          steps: [
            { text: "Astuce : pense à la phrase magique : les verbes qui bougent, comme aller, venir, partir, arriver, utilisent être, et leur participe passé change de vêtement selon le sujet.", illustrationEmoji: "🧠" },
            { text: "Résumé : avec être, on accorde le participe passé en genre et en nombre avec le sujet : allé, allée, allés, allées.", illustrationEmoji: "📝" }
          ]
        }
      ],
      questions: [
        {
          order: 1,
          type: "input",
          prompt: "Complète au passé composé : Je ____ (aller) au marché. (sujet masculin)",
          answer: "suis allé",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "On conjugue être avec je (suis), puis le participe passé allé, sans e car le sujet est masculin.",
          strictAccents: true
        },
        {
          order: 2,
          type: "input",
          prompt: "Complète au passé composé : Elle ____ (partir) très tôt.",
          answer: "est partie",
          kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.",
          explanationWhenWrong: "On conjugue être avec elle (est), puis le participe passé partie, avec un e car le sujet est féminin.",
          strictAccents: true
        },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse au passé composé : Nous ____ (arriver) en retard. (groupe de filles)",
          options: ["sommes arrivées", "sommes arrivé", "avons arrivé"],
          answer: "sommes arrivées",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Avec nous (un groupe de filles), être devient sommes, et le participe passé arrivées s'accorde au féminin pluriel.",
          strictAccents: true
        },
        {
          order: 4,
          type: "input",
          prompt: "Complète au passé composé : Vous ____ (monter) les escaliers. (groupe de garçons)",
          answer: "êtes montés",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Avec vous, être devient êtes, et le participe passé montés s'accorde au masculin pluriel.",
          strictAccents: true
        },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse au passé composé : Elles ____ (tomber) dans la boue.",
          options: ["sont tombées", "sont tombé", "ont tombées"],
          answer: "sont tombées",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Avec elles, être devient sont, et le participe passé tombées s'accorde au féminin pluriel.",
          strictAccents: true
        },
        {
          order: 6,
          type: "match",
          prompt: "Défi : associe chaque sujet à la bonne forme du passé composé du verbe venir.",
          answer: "Il = est venu ; Elle = est venue ; Ils = sont venus",
          matchPairs: [
            { left: "Il", right: "est venu" },
            { left: "Elle", right: "est venue" },
            { left: "Ils", right: "sont venus" }
          ],
          kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.",
          explanationWhenWrong: "Le participe passé venu s'accorde toujours avec le sujet : venu au masculin singulier, venue au féminin singulier, venus au masculin pluriel.",
          strictAccents: true
        }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Les quatre types de phrases",
      xpReward: 24,
      story: {
        hook: "Imagine quatre façons différentes de parler : affirmer, questionner, s'exclamer, ou donner un ordre.",
        concreteExample: "Compare : Tu manges ta soupe. / Manges-tu ta soupe ? / Mange ta soupe ! / Comme cette soupe est bonne !",
        reveal: "La première phrase affirme quelque chose (déclarative), la deuxième pose une question (interrogative), la troisième donne un ordre (impérative), et la quatrième exprime une émotion forte (exclamative). Bravo, tu as reconnu les quatre types de phrases !",
        bridgeToConcept: "Les quatre types de phrases sont : déclarative (point), interrogative (point d'interrogation), exclamative (point d'exclamation), et impérative (un ordre ou un conseil).",
        illustrationEmoji: "🎭"
      },
      examples: [
        {
          title: "Exemple 1 : Le chat dort sur le canapé.",
          steps: [
            { text: "Cette phrase affirme un fait, elle se termine par un point.", illustrationEmoji: "🐱" },
            { text: "C'est une phrase déclarative.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : Quelle belle journée !",
          steps: [
            { text: "Cette phrase exprime une émotion forte, elle se termine par un point d'exclamation.", illustrationEmoji: "☀️" },
            { text: "C'est une phrase exclamative.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Quel est le type de la phrase : Il pleut aujourd'hui.", answer: "déclarative", acceptedAnswers: ["declarative"], kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Cette phrase affirme un fait et se termine par un point : c'est une phrase déclarative." },
        { order: 2, prompt: "Quel est le type de la phrase : Où as-tu rangé mes clés ?", answer: "interrogative", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Cette phrase pose une question et se termine par un point d'interrogation : c'est une phrase interrogative." },
        { order: 3, prompt: "Quel est le type de la phrase : Range ta chambre immédiatement !", answer: "impérative", acceptedAnswers: ["imperative"], kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Cette phrase donne un ordre : c'est une phrase impérative, même si elle se termine ici par un point d'exclamation pour renforcer l'ordre." },
        { order: 4, prompt: "Quel est le type de la phrase : Comme ce gâteau est délicieux !", answer: "exclamative", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Cette phrase exprime une émotion forte et se termine par un point d'exclamation : c'est une phrase exclamative." },
        { order: 5, prompt: "Quel est le type de la phrase : Ferme la fenêtre, s'il te plaît.", answer: "impérative", acceptedAnswers: ["imperative"], kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Cette phrase donne un ordre poli : c'est une phrase impérative." },
        { order: 6, prompt: "Défi : quel est le type de la phrase : Pourquoi personne n'a fermé la porte ?", answer: "interrogative", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Cette phrase pose une question, même si elle exprime aussi un peu d'agacement : c'est une phrase interrogative, car elle se termine par un point d'interrogation." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "leur ou leurs : le test du singulier ou du pluriel",
      xpReward: 24,
      story: {
        hook: "Encore un petit test magique, cette fois pour ne plus confondre leur et leurs.",
        concreteExample: "Regarde : Les enfants rangent ... jouets. Est-ce que c'est leur ou leurs ?",
        reveal: "On se demande si chaque enfant a plusieurs jouets ou un seul. Ici, chaque enfant a plusieurs jouets, donc le nom jouets est au pluriel : on écrit leurs, avec un s. Bravo, tu as observé le sens de la phrase !",
        bridgeToConcept: "Devant un nom au pluriel, on écrit leurs, avec un s. Devant un nom au singulier, on écrit leur, sans s. Quand leur est placé juste devant un verbe (je leur parle), il ne prend jamais de s.",
        illustrationEmoji: "🪄"
      },
      examples: [
        {
          title: "Exemple 1 : Ils aiment leur maison",
          steps: [
            { text: "maison est au singulier : chaque famille n'a qu'une seule maison.", illustrationEmoji: "🏠" },
            { text: "Donc on écrit leur, sans s.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : Ils aiment leurs jouets",
          steps: [
            { text: "jouets est au pluriel.", illustrationEmoji: "🧸" },
            { text: "Donc on écrit leurs, avec un s.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        {
          order: 1,
          prompt: "Complète : Les élèves rangent ___ cahiers. (leur ou leurs)",
          answer: "leurs",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "cahiers est au pluriel, donc on écrit leurs, avec un s.",
          strictAccents: true
        },
        {
          order: 2,
          prompt: "Complète : Ils adorent ___ maison. (leur ou leurs)",
          answer: "leur",
          kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.",
          explanationWhenWrong: "maison est au singulier, donc on écrit leur, sans s.",
          strictAccents: true
        },
        {
          order: 3,
          prompt: "Complète : Je ___ ai offert un cadeau. (leur ou leurs)",
          answer: "leur",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Ici, leur est placé juste devant le verbe ai offert : dans ce cas, il ne prend jamais de s.",
          strictAccents: true
        },
        {
          order: 4,
          prompt: "Complète : Les oiseaux construisent ___ nids. (leur ou leurs)",
          answer: "leurs",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "nids est au pluriel, donc on écrit leurs, avec un s.",
          strictAccents: true
        },
        {
          order: 5,
          prompt: "Complète : Elles retrouvent ___ chemin. (leur ou leurs)",
          answer: "leur",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "chemin est au singulier, donc on écrit leur, sans s.",
          strictAccents: true
        },
        {
          order: 6,
          prompt: "Défi : complète les deux mots. Les parents préparent ___ valises et donnent un conseil à ___ fils.",
          answer: "leurs leur",
          kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.",
          explanationWhenWrong: "valises est au pluriel, donc leurs avec un s ; fils est ici au singulier (un seul fils), donc leur sans s.",
          strictAccents: true
        }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Calculer un pourcentage usuel de tête",
      xpReward: 24,
      story: {
        hook: "Imagine que tu peux calculer une réduction dans un magasin sans même sortir ta calculatrice.",
        concreteExample: "Un jeu vidéo coûte 60 euros, avec 50% de réduction. Quel est le nouveau prix ?",
        reveal: "50%, c'est la moitié. La moitié de 60, c'est 30. Le jeu coûte donc 30 euros de moins, soit un nouveau prix de 30 euros. Bravo, tu as calculé un pourcentage de tête !",
        bridgeToConcept: "Astuces à connaître : 50% = la moitié (diviser par 2). 25% = la moitié de la moitié (diviser par 4). 10% = diviser par 10.",
        illustrationEmoji: "🛍️"
      },
      examples: [
        {
          title: "Exemple 1 : 25% de 80 euros",
          steps: [
            { text: "25%, c'est la moitié de la moitié.", illustrationEmoji: "➗" },
            { text: "80 / 2 = 40, puis 40 / 2 = 20.", illustrationEmoji: "➗" },
            { text: "Donc 25% de 80 euros, c'est 20 euros.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : 10% de 90 euros",
          steps: [
            { text: "10%, c'est diviser par 10.", illustrationEmoji: "➗" },
            { text: "90 / 10 = 9.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule 50% de 40 euros.", answer: "20", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "50%, c'est la moitié : 40 / 2 = 20 euros." },
        { order: 2, prompt: "Calcule 10% de 120 euros.", answer: "12", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "10%, c'est diviser par 10 : 120 / 10 = 12 euros." },
        { order: 3, prompt: "Calcule 25% de 60 euros.", answer: "15", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "25%, c'est la moitié de la moitié : 60 / 2 = 30, puis 30 / 2 = 15 euros." },
        { order: 4, prompt: "Un manteau coûte 80 euros avec 50% de réduction. Quel est le nouveau prix ?", answer: "40", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "50% de 80, c'est 40. Le nouveau prix est 80 - 40 = 40 euros." },
        { order: 5, prompt: "Un jeu coûte 50 euros avec 10% de réduction. Quel est le nouveau prix ?", answer: "45", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "10% de 50, c'est 5. Le nouveau prix est 50 - 5 = 45 euros." },
        { order: 6, prompt: "Défi : un vélo coûte 120 euros avec 25% de réduction. Quel est le nouveau prix ?", answer: "90", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "25% de 120, c'est 30 (120 / 2 = 60, puis 60 / 2 = 30). Le nouveau prix est 120 - 30 = 90 euros." }
      ]
    }
  ]
};
