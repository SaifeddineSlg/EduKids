import { DayCurriculum } from "@/models/types";

export const day16: DayCurriculum = {
  dayNumber: 16,
  status: "ready",
  subjects: [
    {
      subjectId: "mathematiques",
      status: "ready",
      title: "L'addition de fractions de même dénominateur",
      xpReward: 20,
      story: {
        hook: "Imagine que tu manges des parts de pizza au dîner, puis encore quelques parts plus tard.",
        concreteExample: "Tu manges 2/5 d'une pizza au dîner, puis 1/5 de la même pizza un peu plus tard. Quelle fraction as-tu mangée en tout ?",
        reveal: "2/5 + 1/5 = 3/5. Quand deux fractions ont le même dénominateur, on additionne seulement les numérateurs et on garde le même dénominateur.",
        bridgeToConcept: "Pour additionner des fractions de même dénominateur, on additionne les numérateurs et on conserve le dénominateur commun.",
        illustrationEmoji: "🍕"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "1/4 + 2/4 : on additionne les numérateurs (1 + 2 = 3), le dénominateur reste 4. Résultat : 3/4.", illustrationEmoji: "🔢" },
            { text: "Vérification : 3/4 est bien inférieur à 4/4, qui représente un tout entier.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "2/6 + 3/6 = 5/6 (2 + 3 = 5, le dénominateur ne change pas).", illustrationEmoji: "🔍" },
            { text: "3/8 + 4/8 = 7/8.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 1/4 + 2/4", answer: "3/4", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "On additionne les numérateurs (1 + 2 = 3), le dénominateur reste 4 : 3/4." },
        { order: 2, prompt: "Calcule : 2/6 + 3/6", answer: "5/6", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "2 + 3 = 5, le dénominateur reste 6 : 5/6." },
        { order: 3, prompt: "Calcule : 3/8 + 4/8", answer: "7/8", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "3 + 4 = 7, le dénominateur reste 8 : 7/8." },
        { order: 4, prompt: "Calcule : 2/5 + 1/5", answer: "3/5", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "2 + 1 = 3, le dénominateur reste 5 : 3/5." },
        { order: 5, prompt: "Calcule : 4/10 + 5/10", answer: "9/10", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "4 + 5 = 9, le dénominateur reste 10 : 9/10." },
        { order: 6, prompt: "Défi : tu manges 3/7 d'un gâteau, puis encore 2/7. Quelle fraction as-tu mangée en tout ?", answer: "5/7", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "3 + 2 = 5, le dénominateur reste 7 : 5/7." }
      ]
    },
    {
      subjectId: "conjugaison",
      status: "ready",
      title: "Le futur antérieur",
      xpReward: 20,
      story: {
        hook: "Imagine que tu racontes une action future qui sera déjà terminée avant une autre action future.",
        concreteExample: "Écoute : quand tu arriveras, j'aurai déjà mangé mon repas.",
        reveal: "J'aurai mangé est au futur antérieur : il exprime une action future qui sera achevée avant une autre action future. Il se forme avec avoir ou être au futur simple, suivi du participe passé.",
        bridgeToConcept: "Futur antérieur = avoir ou être au futur simple + participe passé. J'aurai mangé, je serai parti(e).",
        illustrationEmoji: "⏭️"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "Manger avec avoir : j'aurai mangé, tu auras mangé, il aura mangé.", illustrationEmoji: "🍽️" },
            { text: "Partir avec être : je serai parti(e), elle sera partie (accord au féminin).", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Nous aurons fini nos devoirs avant le dîner.", illustrationEmoji: "📚" },
            { text: "Ils seront arrivés avant la nuit (accord au masculin pluriel).", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : quand tu arriveras, j'____ (manger) déjà mon repas.", answer: "aurai mangé", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Manger se conjugue avec avoir ; au futur antérieur avec je, on écrit aurai mangé.", strictAccents: true },
        { order: 2, prompt: "Complète : elle ____ (partir) avant nous.", answer: "sera partie", kindWhenWrong: "Pas grave, on regarde ça ensemble.", explanationWhenWrong: "Partir se conjugue avec être ; avec elle, le participe passé s'accorde au féminin : sera partie.", strictAccents: true },
        { order: 3, prompt: "Complète : nous ____ (finir) nos devoirs avant le dîner.", answer: "aurons fini", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Finir se conjugue avec avoir ; avec nous, on écrit aurons fini.", strictAccents: true },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne réponse : ils ____ (arriver) avant la nuit.",
          options: ["seront arrivés", "auront arrivé", "seront arrivé"],
          answer: "seront arrivés",
          kindWhenWrong: "Pas grave du tout, on y retourne ensemble.",
          explanationWhenWrong: "Arriver se conjugue avec être ; avec ils, le participe passé s'accorde au masculin pluriel : seront arrivés.",
          strictAccents: true
        },
        { order: 5, prompt: "Complète : tu ____ (voir) ce film avant moi.", answer: "auras vu", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "Voir se conjugue avec avoir ; avec tu, on écrit auras vu.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les deux verbes. Quand nous arriverons, elles ____ (partir) déjà et nous ____ (manquer) le début du film.", answer: "seront parties aurons manqué", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble.", explanationWhenWrong: "Partir se conjugue avec être, accord au féminin pluriel : seront parties. Manquer se conjugue avec avoir : aurons manqué.", strictAccents: true }
      ]
    },
    {
      subjectId: "grammaire",
      status: "ready",
      title: "Le complément du nom",
      xpReward: 20,
      story: {
        hook: "Imagine un groupe de mots qui vient préciser un nom, souvent relié par un petit mot comme de, à ou en.",
        concreteExample: "Regarde : le vélo de mon frère est neuf. Que précise de mon frère ?",
        reveal: "De mon frère précise le nom vélo : à qui appartient-il ? C'est le complément du nom, relié par une préposition.",
        bridgeToConcept: "Le complément du nom précise un nom et est introduit par une préposition (de, à, en...) : le sac à dos, une tasse de thé, une table en bois.",
        illustrationEmoji: "🚲"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "Le sac à dos est neuf : à dos précise le nom sac (introduit par à).", illustrationEmoji: "🎒" },
            { text: "Une tasse de thé est chaude : de thé précise le nom tasse (introduit par de).", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Une table en bois est solide : en bois précise le nom table.", illustrationEmoji: "🔍" },
            { text: "Le complément du nom répond souvent à de quoi, de qui, en quoi.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Dans le vélo de mon frère est neuf, quel est le complément du nom ?", answer: "de mon frère", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "De mon frère précise le nom vélo, introduit par la préposition de : c'est le complément du nom." },
        { order: 2, prompt: "Dans le sac à dos est neuf, quel est le complément du nom ?", answer: "à dos", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "À dos précise le nom sac, introduit par la préposition à : c'est le complément du nom." },
        { order: 3, prompt: "Dans une tasse de thé est posée sur la table, quel est le complément du nom ?", answer: "de thé", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "De thé précise le nom tasse, introduit par la préposition de : c'est le complément du nom." },
        {
          order: 4,
          type: "mcq",
          prompt: "Choisis la bonne réponse : dans une table en bois est solide, en bois est...",
          options: ["un complément du nom", "un COD", "un attribut du sujet"],
          answer: "un complément du nom",
          kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.",
          explanationWhenWrong: "En bois précise le nom table, introduit par la préposition en : c'est un complément du nom."
        },
        { order: 5, prompt: "Dans le livre de mon amie est passionnant, quel est le complément du nom ?", answer: "de mon amie", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "De mon amie précise le nom livre, introduit par la préposition de : c'est le complément du nom." },
        { order: 6, prompt: "Défi : dans la maison de mes grands-parents a un toit en tuiles, cite les deux compléments du nom, dans l'ordre.", answer: "de mes grands-parents en tuiles", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "De mes grands-parents précise maison, en tuiles précise toit : ce sont les deux compléments du nom." }
      ]
    },
    {
      subjectId: "orthographe",
      status: "ready",
      title: "Et ou est",
      xpReward: 20,
      story: {
        hook: "Imagine deux petits mots qui se prononcent pareil mais qui n'ont pas du tout le même rôle.",
        concreteExample: "Regarde : le chat ___ le chien jouent ensemble. Est-ce que c'est et ou est ?",
        reveal: "Et relie deux mots ou deux groupes, remplaçable par et puis. Est vient du verbe être, remplaçable par était.",
        bridgeToConcept: "Et = mot de liaison, remplaçable par et puis. Est = verbe être, remplaçable par était.",
        illustrationEmoji: "🔗"
      },
      examples: [
        {
          title: "Des exemples de tous les jours",
          steps: [
            { text: "Le chat et le chien jouent ensemble : et relie deux mots, remplaçable par et puis.", illustrationEmoji: "🐱" },
            { text: "Elle est très gentille : on peut dire elle était très gentille, donc est.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "Paul et Marie sont amis : et relie deux noms.", illustrationEmoji: "👫" },
            { text: "Le ciel est bleu : on peut remplacer par était, donc est.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Complète : le chat ___ le chien jouent ensemble. (et/est)", answer: "et", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "On peut dire et puis : c'est le mot de liaison et, sans s.", strictAccents: true },
        { order: 2, prompt: "Complète : elle ___ très gentille avec tout le monde. (et/est)", answer: "est", kindWhenWrong: "Pas grave, on regarde ça ensemble.", explanationWhenWrong: "On peut remplacer par était : c'est le verbe être, est.", strictAccents: true },
        { order: 3, prompt: "Complète : Paul ___ Marie sont de bons amis. (et/est)", answer: "et", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "On peut dire et puis : c'est le mot de liaison et.", strictAccents: true },
        { order: 4, prompt: "Complète : le ciel ___ bleu aujourd'hui. (et/est)", answer: "est", kindWhenWrong: "Pas grave du tout, on y retourne ensemble.", explanationWhenWrong: "On peut remplacer par était : c'est le verbe être, est.", strictAccents: true },
        { order: 5, prompt: "Complète : ma sœur ___ mon frère aiment le chocolat. (et/est)", answer: "et", kindWhenWrong: "Ce n'est pas grave, on regarde ensemble.", explanationWhenWrong: "On peut dire et puis : c'est le mot de liaison et.", strictAccents: true },
        { order: 6, prompt: "Défi : complète les trois mots. Mon père ___ (et) ma mère sont arrivés, ___ (et) mon petit frère ___ (est) très content de les voir.", answer: "et et est", kindWhenWrong: "Bravo d'avoir essayé ce défi, on regarde ensemble.", explanationWhenWrong: "Et relie les groupes (remplaçable par et puis), est vient du verbe être (remplaçable par était).", strictAccents: true }
      ]
    },
    {
      subjectId: "calcul-mental",
      status: "ready",
      title: "Diviser par 5",
      xpReward: 20,
      story: {
        hook: "Imagine une astuce pour diviser très vite par 5, en passant par 10.",
        concreteExample: "Calcule 60 divisé par 5 en utilisant l'astuce du divisé par 10 fois 2.",
        reveal: "60 divisé par 10 = 6, puis 6 x 2 = 12. Donc 60 divisé par 5 = 12.",
        bridgeToConcept: "Diviser par 5 = diviser par 10, puis multiplier le résultat par 2.",
        illustrationEmoji: "➗"
      },
      examples: [
        {
          title: "Un exemple pas à pas",
          steps: [
            { text: "80 divisé par 5 : 80 divisé par 10 = 8, puis 8 x 2 = 16.", illustrationEmoji: "🔢" },
            { text: "120 divisé par 5 : 120 divisé par 10 = 12, puis 12 x 2 = 24.", illustrationEmoji: "✅" }
          ]
        },
        {
          title: "Un autre exemple",
          steps: [
            { text: "150 divisé par 5 : 150 divisé par 10 = 15, puis 15 x 2 = 30.", illustrationEmoji: "🔍" },
            { text: "200 divisé par 5 : 200 divisé par 10 = 20, puis 20 x 2 = 40.", illustrationEmoji: "✅" }
          ]
        }
      ],
      questions: [
        { order: 1, prompt: "Calcule : 60 divisé par 5", answer: "12", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "60 divisé par 10 = 6, puis 6 x 2 = 12." },
        { order: 2, prompt: "Calcule : 80 divisé par 5", answer: "16", kindWhenWrong: "Pas grave 😊 On regarde ça ensemble.", explanationWhenWrong: "80 divisé par 10 = 8, puis 8 x 2 = 16." },
        { order: 3, prompt: "Calcule : 120 divisé par 5", answer: "24", kindWhenWrong: "Ce n'est pas grave 😊 Regardons ensemble.", explanationWhenWrong: "120 divisé par 10 = 12, puis 12 x 2 = 24." },
        { order: 4, prompt: "Calcule : 150 divisé par 5", answer: "30", kindWhenWrong: "Pas grave du tout 😊 On y retourne ensemble.", explanationWhenWrong: "150 divisé par 10 = 15, puis 15 x 2 = 30." },
        { order: 5, prompt: "Calcule : 200 divisé par 5", answer: "40", kindWhenWrong: "Ce n'est pas grave 😊 On regarde ensemble.", explanationWhenWrong: "200 divisé par 10 = 20, puis 20 x 2 = 40." },
        { order: 6, prompt: "Défi : calcule 90 divisé par 5, puis ajoute 10 au résultat. Quel est le résultat final ?", answer: "28", kindWhenWrong: "Bravo d'avoir essayé ce défi 😊 Regardons ensemble.", explanationWhenWrong: "90 divisé par 5 = 18, puis 18 + 10 = 28." }
      ]
    }
  ]
};
