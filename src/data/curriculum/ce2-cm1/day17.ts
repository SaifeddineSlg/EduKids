import { DayCurriculum } from "@/models/types";

export const day17: DayCurriculum = {
  dayNumber: 17,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Additionner deux nombres décimaux",
      xpReward: 24,
      story: {
        hook: "Imagine que tu ajoutes deux longueurs mesurées avec des dixièmes de mètre.",
        concreteExample: "Une planche mesure 3,4 m et une autre mesure 2,3 m. Quelle est la longueur totale si on les met bout à bout ?",
        reveal: "On aligne les virgules et on additionne comme des nombres entiers : 3,4 + 2,3 = 5,7 m. Bravo, tu as additionné deux nombres décimaux !",
        bridgeToConcept: "Pour additionner des nombres décimaux, on aligne toujours les virgules, puis on additionne unités avec unités et dixièmes avec dixièmes.",
        illustrationEmoji: "📏"
      },
      examples: [
        {
          title: "Un exemple sans retenue",
          steps: [
            { text: "2,1 + 3,4 : dixièmes 1 + 4 = 5, unités 2 + 3 = 5.", illustrationEmoji: "🔢" },
            { text: "Résultat : 5,5.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un exemple avec retenue",
          steps: [
            { text: "4,7 + 1,5 : dixièmes 7 + 5 = 12, on écrit 2 et on retient 1.", illustrationEmoji: "🔍" },
            { text: "Unités 4 + 1 + 1 = 6. Résultat : 6,2.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 2,3 + 1,4", answer: "3,7", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Dixièmes 3 + 4 = 7, unités 2 + 1 = 3. Résultat : 3,7." },
        { order: 2, prompt: "Calcule : 3,5 + 2,2", answer: "5,7", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Dixièmes 5 + 2 = 7, unités 3 + 2 = 5. Résultat : 5,7." },
        { order: 3, prompt: "Calcule : 4,6 + 1,7", answer: "6,3", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Dixièmes 6 + 7 = 13, on écrit 3 et on retient 1. Unités 4 + 1 + 1 = 6. Résultat : 6,3." },
        { order: 4, prompt: "Calcule : 5,8 + 2,5", answer: "8,3", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Dixièmes 8 + 5 = 13, on écrit 3 et on retient 1. Unités 5 + 2 + 1 = 8. Résultat : 8,3." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis le bon résultat de 3,9 + 4,4.",
          options: ["8,3", "8,13", "7,3"],
          answer: "8,3",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Dixièmes 9 + 4 = 13, on écrit 3 et on retient 1. Unités 3 + 4 + 1 = 8. Résultat : 8,3."
        },
        { order: 6, prompt: "Défi : une planche mesure 2,7 m et une autre 3,6 m. Quelle est la longueur totale si on les met bout à bout ?", answer: "6,3", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "2,7 + 3,6 = 6,3 mètres." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le passé composé des verbes pronominaux",
      xpReward: 24,
      story: {
        hook: "Tu connais le passé composé avec avoir et être, découvrons celui des verbes qui parlent de soi-même.",
        concreteExample: "Écoute : hier, je me suis lavé. Tu t'es levé tôt. Elle s'est habillée vite.",
        reveal: "À quoi servent ces verbes ? À dire une action que l'on fait sur soi-même. Comment les reconnaître ? Ils utilisent toujours être au passé composé, précédé du petit mot me, te, se, et le participe passé s'accorde avec le sujet.",
        bridgeToConcept: "Se laver au passé composé : je me suis lavé(e), tu t'es lavé(e), il s'est lavé, elle s'est lavée, nous nous sommes lavé(e)s, ils se sont lavés, elles se sont lavées.",
        illustrationEmoji: "🚿"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Ce matin, je me suis réveillé tôt.", illustrationEmoji: "⏰" },
            { text: "Elle s'est coiffée avant l'école.", illustrationEmoji: "💇" }
          ]
        },
        {
          title: "L'accord du participe passé",
          steps: [
            { text: "Avec les verbes pronominaux, le participe passé s'accorde souvent avec le sujet.", illustrationEmoji: "🔍" },
            { text: "Elle s'est habillée : accordé au féminin, avec un e.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète (un garçon parle) : Ce matin, je ____ (se réveiller) tôt.", answer: "me suis réveillé", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec je (un garçon), on utilise me suis (être) suivi du participe passé réveillé.", strictAccents: true },
        { order: 2, prompt: "Complète : Tu ____ (se lever) très tôt aujourd'hui.", answer: "t'es levé", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Avec tu, on utilise t'es (être) suivi du participe passé levé.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Elle ____ (s'habiller) rapidement ce matin.",
          options: ["s'est habillée", "s'est habillé", "c'est habillée"],
          answer: "s'est habillée",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec elle, on utilise s'est (être) suivi du participe passé accordé au féminin : habillée, avec un e.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète (un groupe de garçons parle) : Nous ____ (se laver) les mains avant de manger.", answer: "nous sommes lavés", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Avec nous (un groupe de garçons), on utilise sommes (être) suivi du participe passé lavés, accordé au masculin pluriel.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Ils ____ (se coiffer) avant la photo.",
          options: ["se sont coiffés", "se sont coiffé", "ce sont coiffés"],
          answer: "se sont coiffés",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec ils, on utilise se sont (être) suivi du participe passé coiffés, accordé au masculin pluriel.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux verbes. Ce matin, je ____ (se réveiller) tôt et ma sœur ____ (se lever) juste après moi.", answer: "me suis réveillé s'est levée", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Je me suis réveillé (masculin singulier) et ma sœur s'est levée (féminin singulier, avec un e).", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "La forme négative",
      xpReward: 24,
      story: {
        hook: "Imagine que tu veux dire le contraire d'une phrase, pour refuser ou nier quelque chose.",
        concreteExample: "Regarde : je mange des légumes. Comment dire le contraire ?",
        reveal: "Je ne mange pas de légumes. On ajoute ne avant le verbe et pas après. À quoi sert la forme négative ? Elle encadre toujours le verbe pour dire non.",
        bridgeToConcept: "La forme négative encadre le verbe avec deux mots : ne...pas, ne...jamais, ne...plus, ne...rien.",
        illustrationEmoji: "🚫"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Elle ne regarde jamais la télévision le matin.", illustrationEmoji: "📺" },
            { text: "Il n'a plus faim après ce repas.", illustrationEmoji: "🍽️" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Ne devient n' devant une voyelle : il n'aime pas.", illustrationEmoji: "🔍" },
            { text: "Le deuxième mot de la négation change selon le sens : pas, jamais, plus, rien.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Mets à la forme négative : Je mange des légumes.", answer: "Je ne mange pas de légumes.", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On encadre le verbe mange avec ne...pas." },
        { order: 2, prompt: "Mets à la forme négative : Il aime les épinards.", answer: "Il n'aime pas les épinards.", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Ne devient n' devant la voyelle du verbe aime." },
        { order: 3, prompt: "Mets à la forme négative : Elle regarde la télévision le matin.", answer: "Elle ne regarde pas la télévision le matin.", acceptedAnswers: ["Elle ne regarde jamais la télévision le matin."], kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On encadre le verbe regarde avec ne...pas ou ne...jamais." },
        { order: 4, prompt: "Mets à la forme négative : Nous avons faim.", answer: "Nous n'avons pas faim.", acceptedAnswers: ["Nous n'avons plus faim."], kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Ne devient n' devant la voyelle du verbe avons." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne forme négative de : Tu vois quelque chose.",
          options: ["Tu ne vois rien.", "Tu ne vois pas rien.", "Tu vois ne rien pas."],
          answer: "Tu ne vois rien.",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "On encadre le verbe vois avec ne...rien, sans ajouter pas."
        },
        { order: 6, prompt: "Défi : mets ces deux phrases à la forme négative. Il joue dehors. Elle a des bonbons.", answer: "Il ne joue pas dehors. Elle n'a pas de bonbons.", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "On encadre chaque verbe avec ne...pas, et de remplace des dans la phrase négative." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Quand ou qu'en",
      xpReward: 24,
      story: {
        hook: "Deux mots qui se prononcent pareil mais qui n'ont pas du tout le même sens.",
        concreteExample: "Regarde : ___ pars-tu en vacances ? Est-ce que c'est quand ou qu'en ?",
        reveal: "On essaie de remplacer par lorsque : lorsque pars-tu, ça fonctionne car il s'agit d'une question de temps. Donc on écrit quand. Qu'en s'utilise quand on parle de cela : je ne sais pas ce qu'en pense mon frère.",
        bridgeToConcept: "Quand (remplaçable par lorsque) pose une question de temps. Qu'en est formé de que et en, il s'utilise pour parler de cela.",
        illustrationEmoji: "⏰"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Quand arrives-tu ? : on peut dire lorsque arrives-tu, c'est une question de temps.", illustrationEmoji: "⏰" },
            { text: "Je me demande ce qu'en pense la maîtresse : qu'en veut dire que et en, de cela.", illustrationEmoji: "🤔" }
          ]
        },
        {
          title: "L'astuce du test",
          steps: [
            { text: "Essaie de remplacer par lorsque.", illustrationEmoji: "🔍" },
            { text: "Si ça marche, c'est quand. Sinon, pense à que et en.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : ___ pars-tu en vacances ? (quand/qu'en)", answer: "Quand", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "On peut dire lorsque pars-tu, c'est une question de temps, donc on écrit quand.", strictAccents: true },
        { order: 2, prompt: "Complète : Je me demande ce ___ pense mon frère. (quand/qu'en)", answer: "qu'en", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Qu'en est formé de que et en : on parle de cela, de ce que pense mon frère.", strictAccents: true },
        { order: 3, prompt: "Complète : ___ finiras-tu tes devoirs ? (quand/qu'en)", answer: "Quand", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "On peut dire lorsque finiras-tu, donc on écrit quand.", strictAccents: true },
        { order: 4, prompt: "Complète : Il ne sait pas ce ___ pensent ses amis. (quand/qu'en)", answer: "qu'en", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Qu'en est formé de que et en : il ne sait pas ce que pensent ses amis, de cela.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : ___ viendras-tu me voir ?",
          options: ["Quand", "Qu'en"],
          answer: "Quand",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "On peut dire lorsque viendras-tu, c'est une question de temps, donc on écrit Quand.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. ___ (Quand) tu sauras la nouvelle, dis-moi ce ___ (qu'en) pense ta sœur.", answer: "Quand qu'en", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Quand (lorsque tu sauras fonctionne) et qu'en (que et en, de cela).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Multiplier par 100",
      xpReward: 24,
      story: {
        hook: "Imagine une astuce encore plus rapide que multiplier par 10.",
        concreteExample: "Tu as 5 sachets de 100 billes. Combien de billes en tout ?",
        reveal: "5 x 100 = 500. Pour multiplier par 100, on ajoute simplement deux zéros !",
        bridgeToConcept: "Multiplier par 100 : on ajoute deux zéros au nombre (3 x 100 = 300).",
        illustrationEmoji: "💯"
      },
      examples: [
        {
          title: "Multiplier par 100",
          steps: [
            { text: "4 x 100 : on ajoute deux zéros, ça fait 400.", illustrationEmoji: "➕" },
            { text: "7 x 100 : ça fait 700.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Multiplier un nombre à deux chiffres par 100",
          steps: [
            { text: "12 x 100 : on ajoute deux zéros, ça fait 1200.", illustrationEmoji: "🔍" },
            { text: "25 x 100 : ça fait 2500.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 6 x 100", answer: "600", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "6 x 100 = 600, on ajoute deux zéros." },
        { order: 2, prompt: "Calcule : 9 x 100", answer: "900", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "9 x 100 = 900, on ajoute deux zéros." },
        { order: 3, prompt: "Calcule : 15 x 100", answer: "1500", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "15 x 100 = 1500, on ajoute deux zéros." },
        { order: 4, prompt: "Calcule : 23 x 100", answer: "2300", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "23 x 100 = 2300, on ajoute deux zéros." },
        {
          order: 5,
          type: "mcq",
          prompt: "Calcule : 30 x 100",
          options: ["3000", "300", "30000"],
          answer: "3000",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "30 x 100 = 3000, on ajoute deux zéros."
        },
        { order: 6, prompt: "Défi : calcule 8 x 100, puis ajoute 6 x 10 au résultat.", answer: "860", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "8 x 100 = 800, 6 x 10 = 60, 800 + 60 = 860." }
      ]
    }
  ]
};
