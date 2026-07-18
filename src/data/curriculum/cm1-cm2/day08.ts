import { DayCurriculum } from "@/models/types";

export const day08: DayCurriculum = {
  dayNumber: 8,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "L'aire du rectangle et du carré",
      xpReward: 22,
      story: {
        hook: "Imagine que tu dois recouvrir le sol d'une pièce avec des carreaux carrés.",
        concreteExample: "La pièce mesure 5 mètres de long et 3 mètres de large. Combien de carreaux d'un mètre carré faut-il ?",
        reveal: "On multiplie la longueur par la largeur : 5 x 3 = 15 mètres carrés. C'est l'aire du rectangle.",
        bridgeToConcept: "Aire du rectangle = longueur x largeur. Aire du carré = côté x côté.",
        illustrationEmoji: "🧱"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "Un rectangle de 6 cm sur 4 cm : aire = 6 x 4 = 24 cm².", illustrationEmoji: "📐" },
            { text: "Un carré de 5 cm de côté : aire = 5 x 5 = 25 cm².", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Un rectangle de 8 m sur 3 m : aire = 8 x 3 = 24 m².", illustrationEmoji: "🔍" },
            { text: "Un carré de 7 m de côté : aire = 7 x 7 = 49 m².", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule l'aire d'un carré de 4 cm de côté.", answer: "16", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Aire du carré = côté x côté, donc 4 x 4 = 16." },
        { order: 2, prompt: "Calcule l'aire d'un rectangle de 5 m sur 3 m.", answer: "15", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Aire du rectangle = longueur x largeur, donc 5 x 3 = 15." },
        { order: 3, prompt: "Calcule l'aire d'un carré de 6 cm de côté.", answer: "36", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "6 x 6 = 36." },
        { order: 4, prompt: "Calcule l'aire d'un rectangle de 7 m sur 2 m.", answer: "14", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "7 x 2 = 14." },
        { order: 5, prompt: "Calcule l'aire d'un carré de 9 cm de côté.", answer: "81", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "9 x 9 = 81." },
        { order: 6, prompt: "Défi : un jardin rectangulaire mesure 10 m sur 6 m. Quelle est son aire ?", answer: "60", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "10 x 6 = 60 mètres carrés." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Conjuguer au passé simple les verbes en -er",
      xpReward: 22,
      story: {
        hook: "Tu sais déjà reconnaître le passé simple dans les contes. Aujourd'hui, apprenons à le conjuguer nous-mêmes !",
        concreteExample: "Écoute : hier, dans l'histoire, le chat sauta sur la table et miaula fort.",
        reveal: "Sauta et miaula sont au passé simple. Pour les verbes en -er, on ajoute les terminaisons -ai, -as, -a, -âmes, -âtes, -èrent au radical de l'infinitif.",
        bridgeToConcept: "Passé simple des verbes en -er : je jouai, tu jouas, il joua, nous jouâmes, vous jouâtes, ils jouèrent.",
        illustrationEmoji: "🐱"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Le prince arriva au château et parla à la princesse.", illustrationEmoji: "🏰" },
            { text: "Nous jouâmes toute la journée dans le parc.", illustrationEmoji: "⚽" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Radical de l'infinitif (jouer → jou-) plus la terminaison selon la personne.", illustrationEmoji: "🔍" },
            { text: "Avec ils/elles, la terminaison est toujours -èrent.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète au passé simple : Le chat ____ (sauter) sur la table.", answer: "sauta", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Avec il, le passé simple de sauter est sauta : radical saut- puis -a.", strictAccents: true },
        { order: 2, prompt: "Complète au passé simple : Tu ____ (regarder) le film avec attention.", answer: "regardas", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Avec tu, le passé simple de regarder est regardas : radical regard- puis -as.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Nous ____ (jouer) toute la journée.",
          options: ["jouâmes", "jouames", "jouèrent"],
          answer: "jouâmes",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Avec nous, le passé simple de jouer est jouâmes, avec un accent circonflexe sur le a.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète au passé simple : Vous ____ (chanter) devant toute la classe.", answer: "chantâtes", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Avec vous, le passé simple de chanter est chantâtes, avec un accent circonflexe sur le a.", strictAccents: true },
        { order: 5, prompt: "Complète au passé simple : Ils ____ (arriver) juste à temps.", answer: "arrivèrent", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Avec ils, le passé simple de arriver est arrivèrent, terminaison -èrent.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux verbes. Le roi ____ (parler) à la reine et elle ____ (chanter) une jolie mélodie.", answer: "parla chanta", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Tu étais proche ! Avec il, parler donne parla. Avec elle, chanter donne chanta.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "La phrase simple et la phrase complexe",
      xpReward: 22,
      story: {
        hook: "Une phrase peut raconter une seule action, ou plusieurs à la fois.",
        concreteExample: "Regarde : Balkis joue. Puis : Balkis joue pendant que Bayrem dessine. Combien de verbes conjugués dans chaque phrase ?",
        reveal: "Balkis joue n'a qu'un seul verbe conjugué : c'est une phrase simple. Balkis joue pendant que Bayrem dessine a deux verbes conjugués : c'est une phrase complexe, avec deux propositions.",
        bridgeToConcept: "Une phrase simple contient un seul verbe conjugué. Une phrase complexe contient plusieurs verbes conjugués, donc plusieurs propositions.",
        illustrationEmoji: "🔗"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Le chat dort : phrase simple, un seul verbe conjugué.", illustrationEmoji: "🐱" },
            { text: "Le chat dort et le chien joue : phrase complexe, deux verbes conjugués.", illustrationEmoji: "🐶" }
          ]
        },
        {
          title: "L'astuce pour reconnaître une phrase complexe",
          steps: [
            { text: "Compte les verbes conjugués dans la phrase.", illustrationEmoji: "🔍" },
            { text: "Un seul verbe conjugué : phrase simple. Plusieurs : phrase complexe.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Le chat dort. Est-ce une phrase simple ou complexe ?", answer: "simple", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "La phrase ne contient qu'un seul verbe conjugué (dort), c'est une phrase simple." },
        { order: 2, prompt: "Balkis joue pendant que Bayrem dessine. Est-ce une phrase simple ou complexe ?", answer: "complexe", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "La phrase contient deux verbes conjugués (joue et dessine), c'est une phrase complexe." },
        { order: 3, prompt: "Combien de propositions y a-t-il dans une phrase simple ?", answer: "1", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Une phrase simple ne contient qu'une seule proposition, autour d'un seul verbe conjugué." },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Il pleut et je reste à la maison. est une phrase...",
          options: ["complexe", "simple"],
          answer: "complexe",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "La phrase contient deux verbes conjugués (pleut et reste), c'est une phrase complexe."
        },
        { order: 5, prompt: "Elle mange une pomme. Est-ce une phrase simple ou complexe ?", answer: "simple", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "La phrase ne contient qu'un seul verbe conjugué (mange), c'est une phrase simple." },
        { order: 6, prompt: "Défi : combien de propositions (verbes conjugués) y a-t-il dans la phrase suivante : Quand il pleut, je lis un livre et j'écoute de la musique ?", answer: "3", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Il y a trois verbes conjugués : pleut, lis et écoute, donc trois propositions." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Leur ou leurs",
      xpReward: 22,
      story: {
        hook: "Ce petit mot peut rester invariable ou prendre un s selon son rôle dans la phrase.",
        concreteExample: "Regarde : Je ___ parle tous les jours. et ___ maison est belle. Est-ce que leur prend un s ?",
        reveal: "Je leur parle : leur est un pronom (il remplace à eux), il reste toujours invariable, sans s. Leur maison est belle : leur est un déterminant possessif, il s'accorde en nombre avec le nom, et devient leurs si le nom est pluriel.",
        bridgeToConcept: "Leur pronom, devant un verbe, est invariable. Leur déterminant, devant un nom, prend un s si le nom qu'il accompagne est pluriel.",
        illustrationEmoji: "🏠"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Je leur parle tous les jours : leur pronom, invariable.", illustrationEmoji: "💬" },
            { text: "Leur maison est grande : leur déterminant, nom singulier, pas de s.", illustrationEmoji: "🏠" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Devant un verbe, leur ne prend jamais de s : c'est un pronom.", illustrationEmoji: "🔍" },
            { text: "Devant un nom pluriel, leur devient leurs : c'est un déterminant.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Je ___ parle tous les jours. (leur/leurs)", answer: "leur", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Leur est ici un pronom devant le verbe parle, il reste invariable, sans s.", strictAccents: true },
        { order: 2, prompt: "Complète : ___ maison est très grande. (leur/leurs)", answer: "leur", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Maison est singulier, donc leur, déterminant possessif, ne prend pas de s.", strictAccents: true },
        { order: 3, prompt: "Complète : ___ enfants jouent dans le jardin. (leur/leurs)", answer: "leurs", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Enfants est pluriel, donc leurs, déterminant possessif, prend un s.", strictAccents: true },
        { order: 4, prompt: "Complète : Nous ___ avons offert un cadeau. (leur/leurs)", answer: "leur", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Leur est ici un pronom devant le verbe avons offert, il reste invariable, sans s.", strictAccents: true },
        { order: 5, prompt: "Complète : ___ amis sont venus les voir. (leur/leurs)", answer: "leurs", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "Amis est pluriel, donc leurs, déterminant possessif, prend un s.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux mots. Je ___ (leur) ai parlé de ___ (leurs) projets pour l'été.", answer: "leur leurs", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Tu étais proche ! Je leur ai parlé : leur pronom invariable. Leurs projets : projets est pluriel, donc leurs avec un s.", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Ajouter et soustraire des dizaines et des centaines",
      xpReward: 22,
      story: {
        hook: "Pas besoin de tout recompter : ajoute ou enlève directement les dizaines ou les centaines entières.",
        concreteExample: "Combien font 235 + 40 ?",
        reveal: "235 + 40 = 275 : on ajoute seulement aux dizaines, les unités et les centaines ne changent pas.",
        bridgeToConcept: "Pour ajouter ou soustraire des dizaines, ou des centaines entières, on ne modifie que le chiffre correspondant.",
        illustrationEmoji: "➕"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "150 + 200 = 350 : on ajoute directement aux centaines.", illustrationEmoji: "🔢" },
            { text: "480 - 30 = 450 : on soustrait aux dizaines.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "620 + 300 = 920.", illustrationEmoji: "🔍" },
            { text: "540 - 200 = 340.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 235 + 40", answer: "275", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "235 + 40 = 275, on ajoute seulement aux dizaines." },
        { order: 2, prompt: "Calcule : 480 - 30", answer: "450", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "480 - 30 = 450, on soustrait seulement aux dizaines." },
        { order: 3, prompt: "Calcule : 150 + 200", answer: "350", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "150 + 200 = 350, on ajoute seulement aux centaines." },
        { order: 4, prompt: "Calcule : 620 - 300", answer: "320", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "620 - 300 = 320, on soustrait seulement aux centaines." },
        { order: 5, prompt: "Calcule : 540 + 250", answer: "790", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "540 + 250 = 790." },
        { order: 6, prompt: "Défi : calcule 375 + 400, puis soustrais 60. Quel est le résultat final ?", answer: "715", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "375 + 400 = 775, puis 775 - 60 = 715." }
      ]
    }
  ]
};
