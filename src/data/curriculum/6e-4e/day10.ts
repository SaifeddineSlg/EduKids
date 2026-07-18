import { DayCurriculum } from "@/models/types";

export const day10: DayCurriculum = {
  dayNumber: 10,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "La grande révision : équations, fractions, aires et proportions",
      xpReward: 24,
      story: {
        hook: "Cette semaine, tu as résolu des équations avec un nombre caché, simplifié des fractions, calculé des aires, et utilisé la règle de trois.",
        concreteExample: "Aujourd'hui, on mélange un peu de tout : une équation, une fraction, une aire, et une proportion.",
        reveal: "Tu vas voir que ce sont toujours les mêmes méthodes, réutilisées sur des exemples différents. Bravo, tu es devenu un vrai expert de ces quatre méthodes !",
        bridgeToConcept: "Réviser en mathématiques, c'est reconnaître quelle méthode utiliser selon la question posée.",
        illustrationEmoji: "🧠"
      },
      examples: [
        {
          title: "Exemple 1 : x - 6 = 9",
          steps: [
            { text: "On ajoute 6 à 9 : 9 + 6 = 15.", illustrationEmoji: "➕" },
            { text: "Donc x = 15.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : un rectangle de 4 cm sur 6 cm",
          steps: [
            { text: "Périmètre : (4 + 6) x 2 = 20 cm.", illustrationEmoji: "📏" },
            { text: "Aire : 4 x 6 = 24 cm².", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "x - 5 = 11. Combien vaut x ?", answer: "16", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On ajoute 5 à 11 : 11 + 5 = 16." },
        { order: 2, prompt: "Simplifie la fraction 6/9 en divisant le haut et le bas par 3.", answer: "2/3", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "6 / 3 = 2 et 9 / 3 = 3, donc 6/9 = 2/3." },
        { order: 3, prompt: "Calcule l'aire d'un rectangle de 9 cm sur 4 cm.", answer: "36", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "9 x 4 = 36 cm²." },
        { order: 4, prompt: "5 stylos coûtent 15 euros. Combien coûtent 8 stylos ?", answer: "24", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Prix d'un stylo : 15 / 5 = 3 euros. Prix de 8 stylos : 3 x 8 = 24 euros." },
        { order: 5, prompt: "Calcule le périmètre d'un carré de 9 cm de côté.", answer: "36", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "9 x 4 = 36 cm." },
        { order: 6, prompt: "Défi : 2x - 4 = 10, et un rectangle a pour longueur x cm et pour largeur 3 cm. Quelle est son aire ?", answer: "21", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "2x - 4 = 10, donc 2x = 14, donc x = 7. L'aire du rectangle est 7 x 3 = 21 cm²." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "La grande révision des temps du passé et du futur",
      xpReward: 24,
      story: {
        hook: "Cette semaine, tu as voyagé dans le temps : vers les souvenirs de l'imparfait, vers le futur, et vers le passé composé.",
        concreteExample: "Compare : je jouais (imparfait), je jouerai (futur simple), j'ai joué (passé composé avec avoir), je suis allé (passé composé avec être).",
        reveal: "À quoi sert cette révision ? À reconnaître chaque temps et à savoir le construire correctement. Comment s'y retrouver ? On regarde d'abord si l'action se situe dans le passé ou dans le futur, et si le passé composé utilise avoir ou être. Bravo pour ce grand voyage dans le temps !",
        bridgeToConcept: "Imparfait : radical + -ais, -ais, -ait, -ions, -iez, -aient. Futur simple : infinitif + -ai, -as, -a, -ons, -ez, -ont. Passé composé : auxiliaire (avoir ou être) au présent + participe passé.",
        illustrationEmoji: "⏳"
      },
      examples: [
        {
          title: "Des exemples de tous les jours, tous les temps mélangés",
          steps: [
            { text: "Autrefois, nous jouions dans ce parc (imparfait).", illustrationEmoji: "🕰️" },
            { text: "Demain, nous jouerons encore ici (futur simple).", illustrationEmoji: "🔮" },
            { text: "Hier, nous avons joué toute la journée, puis nous sommes rentrés fatigués (passé composé).", illustrationEmoji: "🏠" }
          ]
        },
        {
          title: "Attention à l'erreur fréquente",
          steps: [
            { text: "L'erreur la plus fréquente est de confondre l'imparfait et le futur, par exemple d'écrire « je jouais » pour parler de demain.", illustrationEmoji: "❌" },
            { text: "L'imparfait raconte un passé qui durait ; le futur simple annonce ce qui n'a pas encore eu lieu ; le passé composé raconte une action passée et terminée.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper, et le résumé",
          steps: [
            { text: "Astuce : cherche un indice de temps dans la phrase, comme autrefois, demain ou hier, pour savoir quel temps utiliser.", illustrationEmoji: "🧭" },
            { text: "Résumé : cette semaine, tu as appris trois façons de parler du temps : les souvenirs qui durent (imparfait), les promesses pour demain (futur), et les actions terminées (passé composé).", illustrationEmoji: "📝" }
          ]
        }
      ],
      questions: [
        {
          order: 1,
          type: "input",
          prompt: "Complète à l'imparfait : Autrefois, tu ____ (habiter) à la campagne.",
          answer: "habitais",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Avec tu, l'imparfait se termine toujours par -ais : tu habitais.",
          strictAccents: true
        },
        {
          order: 2,
          type: "input",
          prompt: "Complète au futur simple : Demain, elle ____ (visiter) le musée.",
          answer: "visitera",
          kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.",
          explanationWhenWrong: "On garde l'infinitif visiter et on ajoute -a pour elle : elle visitera.",
          strictAccents: true
        },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse au passé composé avec avoir : Hier, nous ____ (regarder) un beau film.",
          options: ["avons regardé", "sommes regardé", "avions regardé"],
          answer: "avons regardé",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Avec nous, avoir devient avons, et le participe passé de regarder est regardé : nous avons regardé.",
          strictAccents: true
        },
        {
          order: 4,
          type: "input",
          prompt: "Complète au passé composé avec être : Ce matin, elle ____ (partir) très tôt.",
          answer: "est partie",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Avec elle, être devient est, et le participe passé partie s'accorde au féminin.",
          strictAccents: true
        },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse à l'imparfait : Quand vous étiez petits, vous ____ (chanter) souvent.",
          options: ["chantiez", "chantez", "chanterez"],
          answer: "chantiez",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Avec vous, l'imparfait se termine par -iez : vous chantiez.",
          strictAccents: true
        },
        {
          order: 6,
          type: "match",
          prompt: "Défi : associe chaque phrase au temps qui convient.",
          answer: "Hier, je suis allé au parc = passé composé ; Autrefois, j'allais souvent au parc = imparfait ; Demain, j'irai encore au parc = futur simple",
          matchPairs: [
            { left: "Hier, je suis allé au parc", right: "passé composé" },
            { left: "Autrefois, j'allais souvent au parc", right: "imparfait" },
            { left: "Demain, j'irai encore au parc", right: "futur simple" }
          ],
          kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.",
          explanationWhenWrong: "Hier indique une action terminée (passé composé), autrefois indique une habitude passée qui durait (imparfait), et demain annonce une action à venir (futur simple).",
          strictAccents: true
        }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "La grande révision : COD, COI, adverbe et types de phrases",
      xpReward: 24,
      story: {
        hook: "Cette semaine, tu as appris à repérer qui reçoit l'action, comment elle se déroule, et de quel type est chaque phrase.",
        concreteExample: "Regarde : Léa donne un livre à son frère. Peux-tu retrouver le COD et le COI dans cette phrase ?",
        reveal: "un livre est le COD (Léa donne quoi ?), et à son frère est le COI (Léa donne à qui ?). Bravo, tu as retrouvé les deux compléments !",
        bridgeToConcept: "Réviser la grammaire, c'est utiliser plusieurs outils différents sur la même phrase : la question quoi ou qui pour le COD, à qui ou de quoi pour le COI, et le sens pour l'adverbe et le type de phrase.",
        illustrationEmoji: "🔑"
      },
      examples: [
        {
          title: "Exemple 1 : Elle offre un cadeau à sa cousine, avec joie.",
          steps: [
            { text: "un cadeau = COD (elle offre quoi ?).", illustrationEmoji: "🎁" },
            { text: "à sa cousine = COI (elle offre à qui ?).", illustrationEmoji: "👧" },
            { text: "avec joie n'est ni un COD ni un COI.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : Pourquoi cours-tu si vite ?",
          steps: [
            { text: "vite = adverbe (il précise comment tu cours).", illustrationEmoji: "🏃" },
            { text: "Cette phrase se termine par un point d'interrogation : c'est une phrase interrogative.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans le chien ronge un os, quel est le COD du verbe ronge ?", answer: "un os", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Le chien ronge quoi ? Un os : c'est le COD." },
        { order: 2, prompt: "Dans elle écrit à sa correspondante, quel est le COI du verbe écrit ?", answer: "à sa correspondante", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Elle écrit à qui ? À sa correspondante : c'est le COI." },
        { order: 3, prompt: "Dans il marche lentement, quel mot est l'adverbe ?", answer: "lentement", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "lentement précise comment il marche, c'est un adverbe." },
        { order: 4, prompt: "Quel est le type de la phrase : Quelle bonne nouvelle !", answer: "exclamative", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Cette phrase exprime une émotion forte et se termine par un point d'exclamation : c'est une phrase exclamative." },
        { order: 5, prompt: "Dans le facteur donne le colis au voisin, quel est le COD du verbe donne ?", answer: "le colis", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Le facteur donne quoi ? Le colis : c'est le COD (au voisin est le COI)." },
        { order: 6, prompt: "Défi : dans pourquoi parles-tu si doucement à ton ami, cite dans l'ordre l'adverbe, le COI, puis le type de cette phrase.", answer: "doucement ; à ton ami ; interrogative", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "doucement précise comment tu parles (l'adverbe), à ton ami est le COI (tu parles à qui ?), et la phrase se termine par un point d'interrogation (une phrase interrogative)." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Tous les nouveaux petits tests magiques ensemble",
      xpReward: 24,
      story: {
        hook: "Imagine que tu as ajouté quatre nouveaux outils dans ta boîte à outils de l'orthographe cette semaine.",
        concreteExample: "Cette semaine, tu as appris à tester ces/ses, on/ont, ce/se, et leur/leurs.",
        reveal: "Chaque fois que tu hésites, tu peux utiliser le bon test dans ta tête, comme avec les tests de la semaine dernière. Bravo, ta boîte à outils est encore plus complète !",
        bridgeToConcept: "Réviser l'orthographe, c'est se rappeler quel test utiliser pour chaque mot qui se ressemble, et garder ces réflexes toute sa vie.",
        illustrationEmoji: "🧰"
      },
      examples: [
        {
          title: "Exemple 1 : ... enfants rangent ... jouets",
          steps: [
            { text: "On teste ces : cet enfant range... ça fonctionne, donc ces enfants.", illustrationEmoji: "✅" },
            { text: "On teste ses (son jouet) : ça fonctionne aussi, donc ses jouets.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : ... dit qu'ils ... trouvé un trésor",
          steps: [
            { text: "On teste on (il dit) : ça fonctionne, donc on dit.", illustrationEmoji: "✅" },
            { text: "On teste ont (ils avaient trouvé) : ça fonctionne, donc ont trouvé.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        {
          order: 1,
          prompt: "Complète : ___ animaux vivent dans la forêt. (ces ou ses)",
          answer: "ces",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "On peut dire cet animal vit dans la forêt, donc c'est ces, le démonstratif.",
          strictAccents: true
        },
        {
          order: 2,
          prompt: "Complète : Mon voisin promène ___ chiens. (ces ou ses)",
          answer: "ses",
          kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.",
          explanationWhenWrong: "On peut dire il promène son chien, donc c'est ses, le possessif.",
          strictAccents: true
        },
        {
          order: 3,
          prompt: "Complète : ___ pense que le film commence à 20 heures. (on ou ont)",
          answer: "on",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "On peut dire il pense, donc c'est on, le pronom.",
          strictAccents: true
        },
        {
          order: 4,
          prompt: "Complète : Mes amis ___ organisé une fête. (on ou ont)",
          answer: "ont",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Mes amis avaient organisé une fête fonctionne, donc c'est ont, le verbe avoir.",
          strictAccents: true
        },
        {
          order: 5,
          prompt: "Complète : ___ chat se cache derrière ___ canapé. (ce ou se)",
          answer: "ce ce",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Les deux mots à compléter sont suivis d'un nom (chat et canapé), donc on écrit ce dans les deux cas, le déterminant démonstratif. Remarque que se cache s'écrit déjà avec se, car il est suivi du verbe cache, un verbe pronominal.",
          strictAccents: true
        },
        {
          order: 6,
          prompt: "Défi : complète les trois mots. ___ élèves rangent ___ affaires, et ___ dit qu'ils ont bien travaillé.",
          answer: "ces leurs on",
          kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.",
          explanationWhenWrong: "ces élèves (on peut dire cet élève, un démonstratif) ; leurs affaires (affaires est au pluriel, donc leurs avec un s) ; on dit (on peut dire il dit, le pronom).",
          strictAccents: true
        }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Le grand défi de calcul mental de la semaine",
      xpReward: 24,
      story: {
        hook: "Imagine un grand jeu où tu mélanges multiplications par 10, doubles, moitiés, et pourcentages usuels.",
        concreteExample: "Cette semaine, tu as appris à multiplier par 10, 100, 1 000, à doubler et prendre la moitié, à décomposer une multiplication, et à calculer un pourcentage usuel.",
        reveal: "Aujourd'hui, tu vas utiliser toutes ces méthodes ensemble. Bravo pour cette semaine de calcul mental !",
        bridgeToConcept: "Réviser le calcul mental, c'est choisir la bonne méthode rapide selon le calcul à faire.",
        illustrationEmoji: "🏆"
      },
      examples: [
        {
          title: "Exemple 1 : 34 x 10, puis sa moitié",
          steps: [
            { text: "34 x 10 = 340.", illustrationEmoji: "🔟" },
            { text: "La moitié de 340 est 170.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : 25% de 200",
          steps: [
            { text: "25%, c'est la moitié de la moitié.", illustrationEmoji: "➗" },
            { text: "200 / 2 = 100, puis 100 / 2 = 50.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 17 x 10", answer: "170", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On ajoute un zéro à 17 : 170." },
        { order: 2, prompt: "Calcule le double de 34.", answer: "68", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "30 double = 60, 4 double = 8, donc 60 + 8 = 68." },
        { order: 3, prompt: "Calcule : 32 x 4 en décomposant.", answer: "128", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "32 = 30 + 2. 30 x 4 = 120, 2 x 4 = 8. 120 + 8 = 128." },
        { order: 4, prompt: "Calcule 50% de 90 euros.", answer: "45", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "50%, c'est la moitié : 90 / 2 = 45." },
        { order: 5, prompt: "Calcule la moitié de 56.", answer: "28", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "50 / 2 = 25, 6 / 2 = 3, donc 25 + 3 = 28." },
        { order: 6, prompt: "Défi : calcule 25% de 48, puis multiplie le résultat par 10.", answer: "120", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "25% de 48 : 48 / 2 = 24, puis 24 / 2 = 12. Ensuite, 12 x 10 = 120." }
      ]
    }
  ]
};
