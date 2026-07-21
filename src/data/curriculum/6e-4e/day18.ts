import { DayCurriculum } from "@/models/types";

export const day18: DayCurriculum = {
  dayNumber: 18,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "Soustraire et multiplier des nombres relatifs",
      xpReward: 24,
      story: {
        hook: "Tu sais déjà additionner des nombres relatifs ; aujourd'hui, on apprend à les soustraire et à les multiplier.",
        concreteExample: "La température était de 4°C, puis elle a baissé de 7°C. Quelle est la nouvelle température ?",
        reveal: "On calcule 4 - 7. Sur une droite graduée, on part de 4 et on recule de 7 vers la gauche : on arrive à -3. Il fait donc -3°C. Bravo, tu as soustrait avec des nombres relatifs !",
        bridgeToConcept: "Soustraire un nombre revient à ajouter son opposé : 4 - 7 = 4 + (-7) = -3. Pour multiplier deux nombres relatifs, on multiplie leurs valeurs, puis on applique la règle des signes : signes identiques donnent un résultat positif, signes différents donnent un résultat négatif.",
        illustrationEmoji: "🌡️"
      },
      examples: [
        {
          title: "Exemple 1 : -3 - 5",
          steps: [
            { text: "Soustraire 5 revient à ajouter -5 : -3 + (-5).", illustrationEmoji: "➖" },
            { text: "On part de -3 et on recule de 5 vers la gauche : on arrive à -8.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : -4 x 3",
          steps: [
            { text: "-4 et 3 ont des signes différents, donc le résultat est négatif.", illustrationEmoji: "➖" },
            { text: "4 x 3 = 12, donc -4 x 3 = -12.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 5 - 8", answer: "-3", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On part de 5 et on recule de 8 vers la gauche : on arrive à -3." },
        { order: 2, prompt: "Calcule : -2 - 4", answer: "-6", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "On part de -2 et on recule de 4 vers la gauche : on arrive à -6." },
        { order: 3, prompt: "Calcule : -3 x 4", answer: "-12", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "-3 et 4 ont des signes différents, donc le résultat est négatif : 3 x 4 = 12, donc -3 x 4 = -12." },
        { order: 4, prompt: "Calcule : -5 x -2", answer: "10", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "-5 et -2 ont des signes identiques (tous deux négatifs), donc le résultat est positif : 5 x 2 = 10." },
        { order: 5, prompt: "Calcule : -6 - 3", answer: "-9", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "On part de -6 et on recule de 3 vers la gauche : on arrive à -9." },
        { order: 6, prompt: "Défi : calcule -4 - 2, puis multiplie le résultat par -3.", answer: "18", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "-4 - 2 = -6. Ensuite, -6 x -3 : signes identiques, donc résultat positif, 6 x 3 = 18." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Les verbes pronominaux au passé composé",
      xpReward: 24,
      story: {
        hook: "Certains verbes se conjuguent toujours avec un petit pronom qui renvoie au sujet, comme se laver ou se lever : on les appelle des verbes pronominaux.",
        concreteExample: "Écoute : je me suis lavé, tu t'es lavé, elle s'est lavée, nous nous sommes lavés.",
        reveal: "À quoi servent ces verbes ? Ils décrivent une action que le sujet fait sur lui-même. Comment les construire au passé composé ? On utilise toujours l'auxiliaire être, précédé du pronom réfléchi (me, te, se, nous, vous, se), et le participe passé s'accorde le plus souvent avec le sujet. Bravo, tu as construit un verbe pronominal au passé composé !",
        bridgeToConcept: "Les verbes pronominaux se conjuguent toujours avec être au passé composé : je me suis levé(e), et le participe passé s'accorde généralement avec le sujet, comme elle s'est levée.",
        illustrationEmoji: "🪞"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Ce matin, je me suis réveillé tôt.", illustrationEmoji: "⏰" },
            { text: "Elle s'est habillée rapidement.", illustrationEmoji: "👗" },
            { text: "Nous nous sommes promenés dans le parc.", illustrationEmoji: "🌳" }
          ]
        },
        {
          title: "Attention à l'erreur fréquente",
          steps: [
            { text: "Beaucoup d'élèves oublient l'auxiliaire être et écrivent « j'ai me lavé ». C'est une erreur !", illustrationEmoji: "❌" },
            { text: "Les verbes pronominaux se conjuguent toujours avec être : je me suis lavé, jamais avec avoir.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "L'astuce pour ne plus se tromper, et le résumé",
          steps: [
            { text: "Astuce : repère le petit pronom réfléchi (me, te, se, nous, vous, se) juste avant le verbe : il annonce toujours l'auxiliaire être au passé composé.", illustrationEmoji: "🧠" },
            { text: "Résumé : au passé composé, un verbe pronominal utilise toujours être, précédé du pronom réfléchi, et le participe passé s'accorde le plus souvent avec le sujet.", illustrationEmoji: "📝" }
          ]
        }
      ],
      questions: [
        {
          order: 1,
          type: "input",
          prompt: "Complète au passé composé : Je ____ (se réveiller) tôt ce matin. (sujet masculin)",
          answer: "me suis réveillé",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "On utilise être avec je (suis), précédé de me, et le participe passé réveillé, sans e car le sujet est masculin.",
          strictAccents: true
        },
        {
          order: 2,
          type: "input",
          prompt: "Complète au passé composé : Elle ____ (se laver) les mains.",
          answer: "s'est lavé",
          kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.",
          explanationWhenWrong: "On utilise être avec elle (est), précédé de s', et le participe passé lavé : ici, l'accord ne se fait pas avec elle mais avec les mains, qui suit le verbe, donc lavé reste au masculin.",
          strictAccents: true
        },
        {
          order: 3,
          type: "mcq",
          prompt: "Choisis la bonne réponse au passé composé : Nous ____ (se promener) dans le jardin. (groupe de filles)",
          options: ["nous sommes promenées", "nous sommes promené", "nous avons promenées"],
          answer: "nous sommes promenées",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "Avec nous (un groupe de filles), être devient sommes, et le participe passé promenées s'accorde au féminin pluriel.",
          strictAccents: true
        },
        {
          order: 4,
          type: "input",
          prompt: "Complète au passé composé : Vous ____ (s'habiller) rapidement. (groupe de garçons)",
          answer: "vous êtes habillés",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "Avec vous, être devient êtes, et le participe passé habillés s'accorde au masculin pluriel.",
          strictAccents: true
        },
        {
          order: 5,
          type: "mcq",
          prompt: "Choisis la bonne réponse au passé composé : Elles ____ (se lever) tôt.",
          options: ["se sont levées", "se sont levé", "ont levées"],
          answer: "se sont levées",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "Avec elles, être devient sont, et le participe passé levées s'accorde au féminin pluriel.",
          strictAccents: true
        },
        {
          order: 6,
          type: "match",
          prompt: "Défi : associe chaque sujet à la bonne forme du passé composé du verbe s'amuser.",
          answer: "Il = s'est amusé ; Elle = s'est amusée ; Ils = se sont amusés",
          matchPairs: [
            { left: "Il", right: "s'est amusé" },
            { left: "Elle", right: "s'est amusée" },
            { left: "Ils", right: "se sont amusés" }
          ],
          kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.",
          explanationWhenWrong: "Le participe passé amusé s'accorde avec le sujet : amusé au masculin singulier, amusée au féminin singulier, amusés au masculin pluriel.",
          strictAccents: true
        }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Le complément du nom",
      xpReward: 24,
      story: {
        hook: "Un nom peut être précisé par un autre groupe de mots relié par une petite préposition comme de, à ou en.",
        concreteExample: "Regarde : une tasse de thé. de thé précise la tasse.",
        reveal: "de thé est un complément du nom : il précise le nom tasse, grâce à la préposition de. Bravo, tu as trouvé un complément du nom !",
        bridgeToConcept: "Le complément du nom précise un nom et est relié à lui par une préposition, le plus souvent de, à ou en.",
        illustrationEmoji: "🔗"
      },
      examples: [
        {
          title: "Exemple 1 : un sac à dos",
          steps: [
            { text: "à dos précise le sac.", illustrationEmoji: "🎒" },
            { text: "C'est un complément du nom, introduit par à.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : une table en bois",
          steps: [
            { text: "en bois précise la table.", illustrationEmoji: "🪵" },
            { text: "C'est un complément du nom, introduit par en.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans un verre de jus d'orange, quel est le complément du nom verre ?", answer: "de jus d'orange", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "de jus d'orange précise le nom verre, c'est le complément du nom." },
        { order: 2, prompt: "Dans une maison de campagne, quel est le complément du nom maison ?", answer: "de campagne", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "de campagne précise le nom maison, c'est le complément du nom." },
        { order: 3, prompt: "Dans un couteau à pain, quel est le complément du nom couteau ?", answer: "à pain", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "à pain précise le nom couteau, c'est le complément du nom, introduit par à." },
        { order: 4, prompt: "Dans une chemise en coton, quel est le complément du nom chemise ?", answer: "en coton", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "en coton précise le nom chemise, c'est le complément du nom, introduit par en." },
        { order: 5, prompt: "Dans le vélo de mon frère est cassé, quel est le complément du nom vélo ?", answer: "de mon frère", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "de mon frère précise le nom vélo, c'est le complément du nom, il indique ici à qui appartient le vélo." },
        { order: 6, prompt: "Défi : dans elle porte une robe de fête avec un ruban en soie, cite les deux compléments du nom.", answer: "de fête ; en soie", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "de fête précise robe, et en soie précise ruban : ce sont les deux compléments du nom." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "la, là ou l'a : le test du remplacement",
      xpReward: 24,
      story: {
        hook: "Trois petits mots qui se prononcent pareil : la, là et l'a, mais qui n'ont pas du tout le même rôle.",
        concreteExample: "Il pose ___ valise ___-bas. / Il ___ rangée hier.",
        reveal: "la est un déterminant ou un pronom devant un nom féminin ou un verbe ; là indique un lieu, souvent avec un tiret comme là-bas ; l'a est la contraction de le ou la et a, qu'on peut remplacer par l'avait. Bravo, tu as observé chaque mot !",
        bridgeToConcept: "la précède un nom féminin (la valise) ou remplace un COD féminin devant un verbe (il la range) ; là indique un lieu (là-bas, ici et là) ; l'a se teste avec l'avait (il l'a rangée = il l'avait rangée).",
        illustrationEmoji: "🪄"
      },
      examples: [
        {
          title: "Exemple 1 : Pose la valise là-bas.",
          steps: [
            { text: "la précède le nom valise, féminin.", illustrationEmoji: "🧳" },
            { text: "là-bas indique un lieu.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : Il l'a rangée dans l'armoire.",
          steps: [
            { text: "On essaie l'avait : il l'avait rangée. Ça fonctionne !", illustrationEmoji: "✅" },
            { text: "Donc on écrit l'a, la contraction de le ou la et a.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        {
          order: 1,
          prompt: "Complète : Range ___ table avant de partir. (la, là, l'a)",
          answer: "la",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "la précède le nom féminin table, c'est le déterminant.",
          strictAccents: true
        },
        {
          order: 2,
          prompt: "Complète : Mets tes chaussures ___, près de la porte. (la, là, l'a)",
          answer: "là",
          kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.",
          explanationWhenWrong: "là indique ici un lieu précis, il prend l'accent grave.",
          strictAccents: true
        },
        {
          order: 3,
          prompt: "Complète : Elle ___ appelé hier soir. (la, là, l'a)",
          answer: "l'a",
          kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.",
          explanationWhenWrong: "On peut dire elle l'avait appelé, donc c'est l'a, la contraction de le et a.",
          strictAccents: true
        },
        {
          order: 4,
          prompt: "Complète : Regarde cette maison ___-bas. (la, là, l'a)",
          answer: "là",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "là-bas indique un lieu éloigné, il prend l'accent grave.",
          strictAccents: true
        },
        {
          order: 5,
          prompt: "Complète : Il ___ trouvée sous le lit. (la, là, l'a)",
          answer: "l'a",
          kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.",
          explanationWhenWrong: "On peut dire il l'avait trouvée, donc c'est l'a, la contraction de le ou la et a.",
          strictAccents: true
        },
        {
          order: 6,
          prompt: "Défi : complète les trois mots. Il pose ___ boîte ___, et il ___ ouverte aussitôt.",
          answer: "la là l'a",
          kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.",
          explanationWhenWrong: "la boîte (déterminant devant un nom féminin) ; là (un lieu) ; il l'a ouverte (on peut dire il l'avait ouverte).",
          strictAccents: true
        }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Multiplier deux nombres proches d'une même dizaine",
      xpReward: 24,
      story: {
        hook: "Quand deux nombres entourent une dizaine ronde, il existe une astuce très rapide pour les multiplier.",
        concreteExample: "19 x 21, comment le calculer rapidement, sachant que 19 et 21 entourent 20 ?",
        reveal: "19 x 21 = (20 - 1) x (20 + 1) = 20 x 20 - 1 x 1 = 400 - 1 = 399. Bravo, tu as calculé rapidement grâce à cette astuce !",
        bridgeToConcept: "Quand deux nombres s'écrivent comme (un nombre rond - un petit écart) et (le même nombre rond + le même petit écart), leur produit vaut (le nombre rond au carré) moins (l'écart au carré).",
        illustrationEmoji: "🧮"
      },
      examples: [
        {
          title: "Exemple 1 : 29 x 31",
          steps: [
            { text: "29 = 30 - 1, et 31 = 30 + 1.", illustrationEmoji: "🔎" },
            { text: "30 x 30 = 900, et 1 x 1 = 1.", illustrationEmoji: "✖️" },
            { text: "900 - 1 = 899.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Exemple 2 : 48 x 52",
          steps: [
            { text: "48 = 50 - 2, et 52 = 50 + 2.", illustrationEmoji: "🔎" },
            { text: "50 x 50 = 2 500, et 2 x 2 = 4.", illustrationEmoji: "✖️" },
            { text: "2 500 - 4 = 2 496.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 9 x 11 (9 = 10 - 1, 11 = 10 + 1)", answer: "99", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "10 x 10 = 100, et 1 x 1 = 1, donc 100 - 1 = 99." },
        { order: 2, prompt: "Calcule : 19 x 21 (19 = 20 - 1, 21 = 20 + 1)", answer: "399", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "20 x 20 = 400, et 1 x 1 = 1, donc 400 - 1 = 399." },
        { order: 3, prompt: "Calcule : 39 x 41 (39 = 40 - 1, 41 = 40 + 1)", answer: "1599", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "40 x 40 = 1 600, et 1 x 1 = 1, donc 1 600 - 1 = 1 599." },
        { order: 4, prompt: "Calcule : 28 x 32 (28 = 30 - 2, 32 = 30 + 2)", answer: "896", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "30 x 30 = 900, et 2 x 2 = 4, donc 900 - 4 = 896." },
        { order: 5, prompt: "Calcule : 47 x 53 (47 = 50 - 3, 53 = 50 + 3)", answer: "2491", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "50 x 50 = 2 500, et 3 x 3 = 9, donc 2 500 - 9 = 2 491." },
        { order: 6, prompt: "Défi : calcule 97 x 103 (97 = 100 - 3, 103 = 100 + 3).", answer: "9991", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "100 x 100 = 10 000, et 3 x 3 = 9, donc 10 000 - 9 = 9 991." }
      ]
    }
  ]
};
