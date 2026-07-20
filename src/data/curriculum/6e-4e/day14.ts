import { DayCurriculum } from "@/models/types";

export const day14: DayCurriculum = {
  dayNumber: 14,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Les nombres relatifs : positifs et négatifs",
      xpReward: 24,
      story: {
        hook: "Il existe des nombres plus petits que zéro : les nombres négatifs, très utiles pour parler de température ou d'altitude.",
        concreteExample: "Il fait -3°C ce matin, puis la température monte de 5°C. Quelle température fait-il maintenant ?",
        reveal: "On calcule -3 + 5. Sur une droite graduée, on part de -3 et on avance de 5 vers la droite : on arrive à 2. Il fait donc 2°C. Bravo, tu as utilisé les nombres relatifs !",
        bridgeToConcept: "Un nombre relatif est positif (au-dessus de zéro) ou négatif (en dessous de zéro, précédé d'un signe -). Sur une droite graduée, plus on va vers la droite, plus le nombre est grand.",
        illustrationEmoji: "🌡️"
      },
      examples: [
        {
          title: "Exemple 1 : -5 + 8",
          steps: [
            { text: "On part de -5 et on avance de 8 vers la droite.", illustrationEmoji: "➡️" },
            { text: "On arrive à 3, donc -5 + 8 = 3.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : compare -7 et -2",
          steps: [
            { text: "Sur la droite graduée, -2 est plus proche de zéro que -7, donc plus à droite.", illustrationEmoji: "📏" },
            { text: "-2 est donc plus grand que -7.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : -4 + 6", answer: "2", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On part de -4 et on avance de 6 vers la droite : on arrive à 2." },
        { order: 2, prompt: "Calcule : -10 + 3", answer: "-7", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "On part de -10 et on avance de 3 vers la droite : on arrive à -7." },
        { order: 3, prompt: "Quel nombre est le plus grand : -8 ou -1 ?", answer: "-1", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "-1 est plus proche de zéro que -8, donc -1 est le plus grand des deux." },
        { order: 4, prompt: "Calcule : -2 + 9", answer: "7", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "On part de -2 et on avance de 9 vers la droite : on arrive à 7." },
        { order: 5, prompt: "Range du plus petit au plus grand : -3, 5, -9", answer: "-9, -3, 5", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Plus un nombre est loin à gauche de zéro, plus il est petit : -9 est le plus petit, puis -3, puis 5." },
        { order: 6, prompt: "Défi : la température était de -6°C, elle a augmenté de 4°C, puis encore de 5°C. Quelle température fait-il maintenant ?", answer: "3", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "-6 + 4 = -2, puis -2 + 5 = 3. La température finale est de 3°C." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le plus-que-parfait, l'action encore plus ancienne",
      xpReward: 24,
      story: {
        hook: "Pour raconter qu'une action s'était déjà terminée avant une autre action passée, on utilise le plus-que-parfait.",
        concreteExample: "Quand je suis arrivé, le film avait déjà commencé.",
        reveal: "avait commencé est au plus-que-parfait : il se forme avec l'auxiliaire (avoir ou être) conjugué à l'imparfait, suivi du participe passé. Bravo, tu as découvert le plus-que-parfait !",
        bridgeToConcept: "Le plus-que-parfait se forme avec l'auxiliaire (avoir ou être) à l'imparfait, suivi du participe passé. Il exprime une action terminée avant une autre action déjà passée.",
        illustrationEmoji: "⏮️"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Quand nous sommes arrivés, ils avaient déjà mangé.", illustrationEmoji: "🍽️" },
            { text: "Elle était déjà partie quand j'ai téléphoné.", illustrationEmoji: "📞" },
            { text: "J'avais fini mes devoirs avant le dîner.", illustrationEmoji: "📚" }
          ]
        },
        {
          title: "Attention à l'erreur fréquente",
          steps: [
            { text: "Beaucoup d'élèves confondent le passé composé (j'ai mangé) et le plus-que-parfait (j'avais mangé), qui raconte une action encore plus ancienne.", illustrationEmoji: "❌" },
            { text: "Le plus-que-parfait situe une action avant une autre action déjà passée : j'avais mangé quand tu es arrivé.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper, et le résumé",
          steps: [
            { text: "Astuce : pense à deux actions passées ; celle qui arrive en premier se met au plus-que-parfait, celle qui arrive après se met au passé composé ou à l'imparfait.", illustrationEmoji: "🧠" },
            { text: "Résumé : le plus-que-parfait se forme avec l'auxiliaire à l'imparfait et le participe passé, pour une action antérieure à une autre action passée.", illustrationEmoji: "📝" }
          ]
        }
      ],
      questions: [
        {
          order: 1,
          type: "input",
          prompt: "Complète au plus-que-parfait : Quand je suis arrivé, il ____ (partir) déjà.",
          answer: "était parti",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Le verbe partir se conjugue avec être : il était parti, avec l'auxiliaire à l'imparfait.",
          strictAccents: true
        },
        {
          order: 2,
          type: "input",
          prompt: "Complète au plus-que-parfait : Elle ____ (finir) ses devoirs avant le dîner.",
          answer: "avait fini",
          kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.",
          explanationWhenWrong: "Le verbe finir se conjugue avec avoir : elle avait fini, avec l'auxiliaire à l'imparfait.",
          strictAccents: true
        },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse au plus-que-parfait : Nous ____ (manger) avant leur arrivée.",
          options: ["avions mangé", "avons mangé", "mangions"],
          answer: "avions mangé",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Le plus-que-parfait avec nous se forme avec avions, à l'imparfait, suivi du participe passé mangé.",
          strictAccents: true
        },
        {
          order: 4,
          type: "input",
          prompt: "Complète au plus-que-parfait : Tu ____ (voir) ce film avant moi.",
          answer: "avais vu",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Le verbe voir se conjugue avec avoir : tu avais vu, avec l'auxiliaire à l'imparfait.",
          strictAccents: true
        },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse au plus-que-parfait : Elles ____ (arriver) avant le début du spectacle.",
          options: ["étaient arrivées", "sont arrivées", "arrivaient"],
          answer: "étaient arrivées",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Le verbe arriver se conjugue avec être : elles étaient arrivées, avec l'auxiliaire à l'imparfait et l'accord au féminin pluriel.",
          strictAccents: true
        },
        {
          order: 6,
          type: "match",
          prompt: "Défi : associe chaque sujet à la bonne forme du plus-que-parfait du verbe jouer.",
          answer: "Il = avait joué ; Vous = aviez joué ; Elles = avaient joué",
          matchPairs: [
            { left: "Il", right: "avait joué" },
            { left: "Vous", right: "aviez joué" },
            { left: "Elles", right: "avaient joué" }
          ],
          kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.",
          explanationWhenWrong: "Le verbe jouer se conjugue avec avoir : il avait joué, vous aviez joué, elles avaient joué.",
          strictAccents: true
        }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "La voix active et la voix passive",
      xpReward: 24,
      story: {
        hook: "Une même action peut se raconter de deux façons : en mettant en avant celui qui agit, ou celui qui subit l'action.",
        concreteExample: "Le chat mange la souris. / La souris est mangée par le chat.",
        reveal: "Dans la première phrase, le sujet (le chat) fait l'action : c'est la voix active. Dans la deuxième, le sujet (la souris) subit l'action : c'est la voix passive, formée avec être et le participe passé. Bravo, tu as reconnu les deux voix !",
        bridgeToConcept: "À la voix active, le sujet fait l'action. À la voix passive, le sujet subit l'action, et le verbe se construit avec être et le participe passé, souvent suivi de par.",
        illustrationEmoji: "🔄"
      },
      examples: [
        {
          title: "Exemple 1 : Le facteur distribue le courrier.",
          steps: [
            { text: "Le sujet (le facteur) fait l'action : c'est la voix active.", illustrationEmoji: "📮" },
            { text: "À la voix passive : Le courrier est distribué par le facteur.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : La tempête a détruit la maison.",
          steps: [
            { text: "Le sujet (la tempête) fait l'action : c'est la voix active.", illustrationEmoji: "🌪️" },
            { text: "À la voix passive : La maison a été détruite par la tempête.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Le jardinier arrose les fleurs. Est-ce la voix active ou passive ?", answer: "active", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Le sujet (le jardinier) fait l'action : c'est la voix active." },
        { order: 2, prompt: "Les fleurs sont arrosées par le jardinier. Est-ce la voix active ou passive ?", answer: "passive", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Le sujet (les fleurs) subit l'action : c'est la voix passive." },
        { order: 3, prompt: "Transforme à la voix passive : Le chien mord le facteur.", answer: "Le facteur est mordu par le chien.", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On place le COD (le facteur) en sujet, puis on utilise être et le participe passé mordu, suivi de par le chien." },
        { order: 4, prompt: "La maîtresse corrige les cahiers. Est-ce la voix active ou passive ?", answer: "active", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Le sujet (la maîtresse) fait l'action : c'est la voix active." },
        { order: 5, prompt: "Transforme à la voix passive : Léa lit le livre.", answer: "Le livre est lu par Léa.", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "On place le COD (le livre) en sujet, puis on utilise être et le participe passé lu, suivi de par Léa." },
        { order: 6, prompt: "Défi : transforme à la voix passive : Le vent a renversé l'arbre.", answer: "L'arbre a été renversé par le vent.", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "On place le COD (l'arbre) en sujet, puis on utilise l'auxiliaire être au passé composé (a été) et le participe passé renversé, suivi de par le vent." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "quel, quelle ou qu'elle : le test de l'accord",
      xpReward: 24,
      story: {
        hook: "Trois mots qui se prononcent pareil : quel, quelle, et qu'elle.",
        concreteExample: "___ heure est-il ? / ___ belle journée ! / Je crois ___ viendra.",
        reveal: "quel (masculin) et quelle (féminin) sont des déterminants ou adjectifs interrogatifs ou exclamatifs, qui s'accordent avec le nom ; qu'elle est la contraction de que et elle, qu'on peut remplacer par qu'il. Bravo, tu as testé chaque mot !",
        bridgeToConcept: "quel et quelle s'accordent avec le nom qu'ils précisent (quel garçon, quelle fille). qu'elle est la contraction de que + elle, et se change en qu'il au masculin (je pense qu'il vient / qu'elle vient).",
        illustrationEmoji: "❓"
      },
      examples: [
        {
          title: "Exemple 1 : ___ heure est-il ?",
          steps: [
            { text: "heure est un nom féminin singulier.", illustrationEmoji: "🕐" },
            { text: "Donc on écrit quelle, l'adjectif interrogatif féminin.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : Je pense ___ viendra.",
          steps: [
            { text: "On peut remplacer par je pense qu'il viendra : ça fonctionne.", illustrationEmoji: "🔄" },
            { text: "Donc on écrit qu'elle, la contraction de que et elle.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : ___ jour sommes-nous ? (quel, quelle, qu'elle)", answer: "quel", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "jour est un nom masculin singulier, donc on écrit quel.", strictAccents: true },
        { order: 2, prompt: "Complète : ___ belle robe tu portes ! (quel, quelle, qu'elle)", answer: "quelle", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "robe est un nom féminin singulier, donc on écrit quelle.", strictAccents: true },
        { order: 3, prompt: "Complète : Je crois ___ arrivera bientôt. (quel, quelle, qu'elle)", answer: "qu'elle", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On peut dire je crois qu'il arrivera bientôt : c'est donc qu'elle, la contraction de que et elle.", strictAccents: true },
        { order: 4, prompt: "Complète : ___ film préfères-tu ? (quel, quelle, qu'elle)", answer: "quel", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "film est un nom masculin singulier, donc on écrit quel.", strictAccents: true },
        { order: 5, prompt: "Complète : Il espère ___ réussira son examen. (quel, quelle, qu'elle)", answer: "qu'elle", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "On peut dire il espère qu'il réussira son examen : c'est donc qu'elle, la contraction de que et elle.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. ___ belle surprise ! Je ne savais pas ___ viendrait.", answer: "quelle qu'elle", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "quelle belle surprise (surprise est féminin singulier) ; je ne savais pas qu'elle viendrait (on peut dire qu'il viendrait, la contraction de que et elle).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Multiplier par 9 grâce à une astuce",
      xpReward: 24,
      story: {
        hook: "Multiplier par 9 peut se faire très vite grâce à un lien avec 10.",
        concreteExample: "23 x 9, comment le calculer rapidement ?",
        reveal: "On multiplie par 10, puis on retire une fois le nombre de départ : 23 x 10 = 230, puis 230 - 23 = 207. Bravo, tu as calculé rapidement !",
        bridgeToConcept: "Multiplier par 9, c'est multiplier par 10, puis soustraire le nombre de départ une fois.",
        illustrationEmoji: "🔢"
      },
      examples: [
        {
          title: "Exemple 1 : 14 x 9",
          steps: [
            { text: "14 x 10 = 140.", illustrationEmoji: "🔟" },
            { text: "140 - 14 = 126.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : 32 x 9",
          steps: [
            { text: "32 x 10 = 320.", illustrationEmoji: "🔟" },
            { text: "320 - 32 = 288.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 12 x 9", answer: "108", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "12 x 10 = 120, puis 120 - 12 = 108." },
        { order: 2, prompt: "Calcule : 25 x 9", answer: "225", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "25 x 10 = 250, puis 250 - 25 = 225." },
        { order: 3, prompt: "Calcule : 40 x 9", answer: "360", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "40 x 10 = 400, puis 400 - 40 = 360." },
        { order: 4, prompt: "Calcule : 18 x 9", answer: "162", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "18 x 10 = 180, puis 180 - 18 = 162." },
        { order: 5, prompt: "Calcule : 50 x 9", answer: "450", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "50 x 10 = 500, puis 500 - 50 = 450." },
        { order: 6, prompt: "Défi : calcule 34 x 9, puis ajoute 100 au résultat.", answer: "406", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "34 x 9 : 34 x 10 = 340, puis 340 - 34 = 306. Ensuite, 306 + 100 = 406." }
      ]
    }
  ]
};
