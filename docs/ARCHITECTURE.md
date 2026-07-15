# Architecture cible

## Principes

- UX enfant d abord: actions simples, gros composants, feedback positif.
- Contenu pedagogique graduel: du concret vers l abstrait.
- Domaine isole par matiere pour l evolutivite.
- Logique metier separee de l UI.

## Arborescence

```text
src/
  app/
    page.tsx                  # Selection profils enfants
    child/[childId]/page.tsx  # Tableau de bord enfant
    session/page.tsx          # Seance quotidienne 20 minutes
    parent/page.tsx           # Tableau de bord parent
    layout.tsx
    globals.css
  components/
    ui/                       # Composants visuels generiques
    features/
      home/                   # Selection profil, cartes matieres
      learning/               # Lecons, quiz, exercices
      gamification/           # XP, badges, progression
  data/                       # Donnees de demarrage (seed)
  models/                     # Types et contrats
  services/                   # Algorithmes pedagogiques
  lib/                        # Utilitaires transverses
```

## Couche metier

- dailyPlanner: construit la seance 3/7/8/2 minutes.
- adaptiveEngine: ajuste la difficulte selon les tentatives recentes.
- spacedRepetition: priorise les notions a revoir.
- exerciseGenerator: genere des exercices aleatoires par notion.

## Donnees a persister

- profils enfants
- progression par notion
- historique sessions
- badges et recompenses
- stats parentales hebdo

## Base de donnees recommandee

- Prisma + PostgreSQL
- Tables: ChildProfile, SkillProgress, SessionLog, ExerciseAttempt, BadgeUnlock

## Extensibilite matieres

Chaque matiere implemente la meme interface:

- liste de notions
- banque d exercices
- generateurs aleatoires
- regles d evaluation

Ajouter Sciences/Anglais/Arabe/Histoire/Geographie se fait sans toucher au noyau.
