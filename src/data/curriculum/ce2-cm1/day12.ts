import { DayCurriculum } from "@/models/types";

export const day12: DayCurriculum = {
  dayNumber: 12,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "L'aire du rectangle et du carré",
      xpReward: 24,
      story: {
        hook: "Imagine que tu veux savoir combien de carreaux recouvrent le sol d'une pièce rectangulaire.",
        concreteExample: "Une pièce mesure 4 mètres de longueur et 3 mètres de largeur. Combien de mètres carrés couvre-t-elle ?",
        reveal: "On multiplie la longueur par la largeur : 4 x 3 = 12. La pièce couvre 12 mètres carrés. C'est l'aire du rectangle !",
        bridgeToConcept: "L'aire d'un rectangle se calcule ainsi : longueur x largeur, en mètres carrés (m²).",
        illustrationEmoji: "🟩"
      },
      examples: [
        {
          title: "Aire d'un rectangle",
          steps: [
            { text: "Longueur 6 m, largeur 3 m : 6 x 3 = 18 m².", illustrationEmoji: "🔢" },
            { text: "On peut vérifier en comptant les carreaux d'un mètre carré.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Aire d'un carré",
          steps: [
            { text: "Un carré de 5 m de côté : 5 x 5 = 25 m².", illustrationEmoji: "🔍" },
            { text: "L'aire du carré, c'est côté x côté.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Un rectangle mesure 5 m de longueur et 2 m de largeur. Calcule son aire.", answer: "10", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "5 x 2 = 10 mètres carrés." },
        { order: 2, prompt: "Un carré a des côtés de 4 m. Calcule son aire.", answer: "16", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "4 x 4 = 16 mètres carrés." },
        { order: 3, prompt: "Un rectangle mesure 7 m de longueur et 3 m de largeur. Calcule son aire.", answer: "21", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "7 x 3 = 21 mètres carrés." },
        { order: 4, prompt: "Un carré a des côtés de 6 m. Calcule son aire.", answer: "36", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "6 x 6 = 36 mètres carrés." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne formule pour calculer l'aire d'un rectangle.",
          options: ["longueur x largeur", "(longueur + largeur) x 2", "longueur + largeur"],
          answer: "longueur x largeur",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "On multiplie la longueur par la largeur pour obtenir l'aire, en mètres carrés."
        },
        { order: 6, prompt: "Défi : un jardin rectangulaire mesure 9 m de longueur et 4 m de largeur. Quelle est son aire ?", answer: "36", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "9 x 4 = 36 mètres carrés." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le futur simple des verbes en -ir comme finir",
      xpReward: 24,
      story: {
        hook: "Tu connais déjà le futur des verbes en -er, découvrons celui des verbes en -ir comme finir.",
        concreteExample: "Écoute : demain, je finirai mon livre. Tu finiras tes devoirs. Il finira son dessin.",
        reveal: "À quoi sert ce futur ? À dire ce qui se passera plus tard. Comment le reconnaître ? On garde l'infinitif finir et on ajoute les mêmes terminaisons -ai, -as, -a, -ons, -ez, -ont.",
        bridgeToConcept: "Finir au futur : je finirai, tu finiras, il finira, nous finirons, vous finirez, ils finiront.",
        illustrationEmoji: "🔮"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Demain, je finirai mon livre.", illustrationEmoji: "📖" },
            { text: "La semaine prochaine, tu choisiras un nouveau vélo.", illustrationEmoji: "🚲" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "On garde l'infinitif du verbe (finir) et on ajoute la terminaison du futur.", illustrationEmoji: "🔊" },
            { text: "finir + ai = finirai, finir + as = finiras.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : Demain, je ____ (finir) mon livre.", answer: "finirai", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Avec je, on garde l'infinitif finir et on ajoute -rai : je finirai.", strictAccents: true },
        { order: 2, prompt: "Complète : Tu ____ (choisir) un nouveau vélo.", answer: "choisiras", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Avec tu, on garde l'infinitif choisir et on ajoute -ras : tu choisiras.", strictAccents: true },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Il ____ (réussir) son examen.",
          options: ["réussira", "réussiras", "réussirai"],
          answer: "réussira",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec il, on ajoute -ra à l'infinitif : il réussira. Réussiras est pour tu, réussirai est pour je.",
          strictAccents: true
        },
        { order: 4, prompt: "Complète : Nous ____ (finir) nos devoirs avant le dîner.", answer: "finirons", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Avec nous, on ajoute -rons à l'infinitif : nous finirons.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : Ils ____ (grandir) très vite.",
          options: ["grandiront", "grandirez", "grandirons"],
          answer: "grandiront",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Avec ils, on ajoute -ront à l'infinitif : ils grandiront. Grandirez est pour vous, grandirons est pour nous.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. Vous ____ (réfléchir) bien et nous ____ (agir) ensuite.", answer: "réfléchirez agirons", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Vous réfléchirez avec la terminaison -rez, et nous agirons avec la terminaison -rons.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Les déterminants démonstratifs",
      xpReward: 24,
      story: {
        hook: "Imagine que tu montres du doigt un objet précis pour le désigner.",
        concreteExample: "Regarde : ce livre est passionnant. Que fait ce devant livre ?",
        reveal: "Ce désigne un livre précis, comme si on le montrait du doigt. À quoi sert ce mot ? Il montre ou désigne quelque chose de précis. Comment le reconnaître ? Ce, cet, cette, ces changent selon le genre et le nombre du nom.",
        bridgeToConcept: "Les déterminants démonstratifs désignent une chose précise : ce (masculin), cet (devant une voyelle), cette (féminin), ces (pluriel).",
        illustrationEmoji: "👉"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Ce livre est passionnant.", illustrationEmoji: "📖" },
            { text: "Cette fleur sent très bon.", illustrationEmoji: "🌸" }
          ]
        },
        {
          title: "L'astuce pour bien choisir",
          steps: [
            { text: "Devant un nom masculin qui commence par une voyelle, on utilise cet : cet arbre.", illustrationEmoji: "🔍" },
            { text: "Ces est toujours pour le pluriel : ces enfants.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans ce livre est passionnant, quel est le déterminant démonstratif ?", answer: "ce", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Ce désigne un livre précis, c'est le déterminant démonstratif." },
        { order: 2, prompt: "Complète : ___ arbre est très grand. (Cet/Ce)", answer: "Cet", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "Arbre est masculin et commence par une voyelle, donc on écrit Cet." },
        { order: 3, prompt: "Complète : ___ fleur sent très bon. (Cette/Ce)", answer: "Cette", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "Fleur est féminin singulier, donc on écrit Cette." },
        { order: 4, prompt: "Complète : ___ enfants jouent dans la cour. (Ces/Cette)", answer: "Ces", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "Enfants est pluriel, donc on écrit Ces." },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : ___ maison est très jolie.",
          options: ["Cette", "Ce", "Ces"],
          answer: "Cette",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Maison est féminin singulier, donc on écrit Cette."
        },
        { order: 6, prompt: "Défi : complète les deux mots. ___ (Cet) hiver, ___ (ces) enfants apprennent à skier.", answer: "Cet ces", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "Cet hiver (nom masculin commençant par une voyelle) et ces enfants (nom pluriel)." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Se ou ce : verbe pronominal ou déterminant démonstratif",
      xpReward: 24,
      story: {
        hook: "Deux petits mots identiques à l'oreille mais avec un rôle très différent.",
        concreteExample: "Regarde : ___ chat se lave tous les jours. Quel mot utiliser au début : ce ou se ?",
        reveal: "Ce chat désigne un chat précis (déterminant démonstratif, devant un nom). Se lave est un verbe pronominal (se + verbe). On écrit ce devant un nom, et se devant un verbe.",
        bridgeToConcept: "Ce est un déterminant démonstratif, toujours suivi d'un nom (ce chat). Se est un pronom réfléchi, toujours suivi d'un verbe (se laver, se lever).",
        illustrationEmoji: "🔍"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Ce chien aboie fort : ce est suivi d'un nom.", illustrationEmoji: "🐕" },
            { text: "Il se lave chaque matin : se est suivi d'un verbe.", illustrationEmoji: "🚿" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper",
          steps: [
            { text: "Regarde le mot juste après : un nom (ce) ou un verbe (se) ?", illustrationEmoji: "🔎" },
            { text: "Si un nom suit, écris ce. Si un verbe suit, écris se.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : ___ chat dort sur le canapé. (ce/se)", answer: "ce", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Chat est un nom, donc on écrit ce, le déterminant démonstratif.", strictAccents: true },
        { order: 2, prompt: "Complète : Il ___ lève tôt chaque matin. (ce/se)", answer: "se", kindWhenWrong: "Pas grave, on regarde ça ensemble 😊", explanationWhenWrong: "Lève est un verbe, donc on écrit se, le pronom réfléchi.", strictAccents: true },
        { order: 3, prompt: "Complète : ___ gâteau sent très bon. (ce/se)", answer: "ce", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊", explanationWhenWrong: "Gâteau est un nom, donc on écrit ce.", strictAccents: true },
        { order: 4, prompt: "Complète : Elle ___ coiffe devant le miroir. (ce/se)", answer: "se", kindWhenWrong: "Pas grave du tout, on y retourne ensemble 😊", explanationWhenWrong: "Coiffe est un verbe, donc on écrit se.", strictAccents: true },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse : ___ enfant apprend vite.",
          options: ["Ce", "Se"],
          answer: "Ce",
          kindWhenWrong: "Ce n'est pas grave, on regarde ensemble 😊",
          explanationWhenWrong: "Enfant est un nom, donc on écrit Ce, le déterminant démonstratif.",
          strictAccents: true
        },
        { order: 6, prompt: "Défi : complète les deux mots. ___ (Ce) matin, Bayrem ___ (se) prépare pour l'école.", answer: "Ce se", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble 😊", explanationWhenWrong: "Ce matin (nom matin) et se prépare (verbe pronominal se préparer).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "La table de multiplication de 8",
      xpReward: 24,
      story: {
        hook: "Imagine que tu comptes les pattes de plusieurs araignées, 8 pattes à chaque fois.",
        concreteExample: "Il y a 3 araignées. Combien de pattes en tout ?",
        reveal: "3 fois 8, ça fait 24. Bravo, tu as trouvé le nombre de pattes !",
        bridgeToConcept: "La table de 8 : 1x8=8, 2x8=16, 3x8=24, 4x8=32, 5x8=40...",
        illustrationEmoji: "🕷️"
      },
      examples: [
        {
          title: "La table de 8",
          steps: [
            { text: "8 x 3 : c'est le double de 4 x 3 (12), donc 24.", illustrationEmoji: "➕" },
            { text: "8 x 5 : ça fait 40.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour la table de 8",
          steps: [
            { text: "Multiplier par 8, c'est doubler trois fois de suite.", illustrationEmoji: "🔍" },
            { text: "8 x 6 : double de 6 = 12, double de 12 = 24, double de 24 = 48.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 8 x 3", answer: "24", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "8 x 3 = 24." },
        { order: 2, prompt: "Calcule : 8 x 5", answer: "40", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "8 x 5 = 40." },
        { order: 3, prompt: "Calcule : 8 x 6", answer: "48", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "8 x 6 = 48." },
        { order: 4, prompt: "Calcule : 8 x 7", answer: "56", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "8 x 7 = 56." },
        { order: 5, prompt: "Calcule : 8 x 8", answer: "64", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "8 x 8 = 64." },
        { order: 6, prompt: "Défi : calcule 8 x 9", answer: "72", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "8 x 9 = 72." }
      ]
    }
  ]
};
