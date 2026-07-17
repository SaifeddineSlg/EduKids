// Script de seed one-shot : compte admin, niveaux scolaires, matieres, badges,
// rattachement de Balkis/Bayrem, migration des tentatives existantes.
// Usage : node scripts/seed-admin.mjs
// Necessite dans .env.local : NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
// et optionnellement SEED_ADMIN_PASSWORD (sinon utilise le mot de passe par defaut donne).

import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import WebSocketImpl from "ws";

// Polyfill : Node 20 n'a pas de WebSocket global (ajoute en Node 22), requis par le
// client realtime instancie en interne par supabase-js meme si on ne l'utilise pas ici.
if (!globalThis.WebSocket) {
  globalThis.WebSocket = WebSocketImpl;
}

function loadEnvLocal() {
  try {
    const content = readFileSync(new URL("../.env.local", import.meta.url), "utf8");
    content.split(/\r?\n/).forEach((line) => {
      const idx = line.indexOf("=");
      if (idx === -1) return;
      const key = line.slice(0, idx).trim();
      const value = line.slice(idx + 1).trim();
      if (key && !(key in process.env)) {
        process.env[key] = value;
      }
    });
  } catch {
    // .env.local absent : on suppose que les variables sont deja dans l'environnement.
  }
}

loadEnvLocal();

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const ADMIN_EMAIL = "slingui.saifeddine@gmail.com";
const ADMIN_PASSWORD = process.env.SEED_ADMIN_PASSWORD ?? "S@if2307";

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error("NEXT_PUBLIC_SUPABASE_URL et SUPABASE_SERVICE_ROLE_KEY sont requis.");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const SCHOOL_LEVELS = [
  { code: "cp-ce1", label: "CP -> preparation CE1", display_order: 1 },
  { code: "ce1-ce2", label: "CE1 -> preparation CE2", display_order: 2 },
  { code: "ce2-cm1", label: "CE2 -> preparation CM1", display_order: 3 },
  { code: "cm1-cm2", label: "CM1 -> preparation CM2", display_order: 4 },
  { code: "cm2-6e", label: "CM2 -> preparation 6e", display_order: 5 },
  { code: "6e-4e", label: "6e -> 4e (niveau avance)", display_order: 6 },
];

const SUBJECTS = [
  { code: "mathematiques", label: "Mathematiques", icon: "📐", display_order: 1 },
  { code: "conjugaison", label: "Conjugaison", icon: "📝", display_order: 2 },
  { code: "grammaire", label: "Grammaire", icon: "🔤", display_order: 3 },
  { code: "orthographe", label: "Orthographe", icon: "✅", display_order: 4 },
  { code: "calcul-mental", label: "Calcul mental", icon: "⏱️", display_order: 5 },
];

const BADGE_DEFINITIONS = [
  { code: "curieux-du-jour", label: "Curieux du jour", icon: "🏅", threshold_type: "total_attempts", threshold_value: 1 },
  { code: "mini-marathon", label: "Mini marathon", icon: "🏅", threshold_type: "total_attempts", threshold_value: 8 },
  { code: "precision-etoilee", label: "Precision etoilee", icon: "🏅", threshold_type: "accuracy", threshold_value: 70 },
  { code: "habitude-magique", label: "Habitude magique", icon: "🏅", threshold_type: "streak_days", threshold_value: 2 },
  { code: "serie-de-champion", label: "Serie de champion", icon: "🏅", threshold_type: "streak_days", threshold_value: 5 },
  { code: "notion-debloquee", label: "Notion debloquee", icon: "🏅", threshold_type: "mastered_skills", threshold_value: 1 },
  { code: "cerveau-turbo", label: "Cerveau turbo", icon: "🏅", threshold_type: "mastered_skills", threshold_value: 4 },
  { code: "fusee-250-xp", label: "Fusee 250 XP", icon: "🏅", threshold_type: "xp", threshold_value: 250 },
  { code: "eclair-700-xp", label: "Eclair 700 XP", icon: "🏅", threshold_type: "xp", threshold_value: 700 },
  { code: "legende-1200-xp", label: "Legende 1200 XP", icon: "🏅", threshold_type: "xp", threshold_value: 1200 },
];

async function fail(step, error) {
  console.error(`Echec a l'etape "${step}":`, error?.message ?? error);
  process.exit(1);
}

async function main() {
  console.log("1. Creation/verification du compte admin...");
  let adminId;
  const { data: existingUsers, error: listError } = await supabase.auth.admin.listUsers();
  if (listError) await fail("lister les utilisateurs", listError);

  const existingAdmin = existingUsers.users.find(
    (u) => u.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase(),
  );
  if (existingAdmin) {
    adminId = existingAdmin.id;
    console.log(`   Compte admin deja existant (${adminId}).`);
  } else {
    const { data, error } = await supabase.auth.admin.createUser({
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD,
      email_confirm: true,
      app_metadata: { role: "admin" },
    });
    if (error) await fail("creer le compte admin", error);
    adminId = data.user.id;
    console.log(`   Compte admin cree (${adminId}). Pense a changer le mot de passe apres la premiere connexion.`);
  }

  console.log("2. Upsert de la ligne profiles admin...");
  const { error: profileError } = await supabase
    .from("profiles")
    .upsert({ id: adminId, email: ADMIN_EMAIL, role: "admin", display_name: "Saifeddine (admin)" }, { onConflict: "id" });
  if (profileError) await fail("upsert profile admin", profileError);

  console.log("3. Upsert des niveaux scolaires...");
  const { data: levels, error: levelsError } = await supabase
    .from("school_levels")
    .upsert(SCHOOL_LEVELS, { onConflict: "code" })
    .select("*");
  if (levelsError) await fail("upsert school_levels", levelsError);

  console.log("4. Upsert des matieres...");
  const { error: subjectsError } = await supabase.from("subjects").upsert(SUBJECTS, { onConflict: "code" });
  if (subjectsError) await fail("upsert subjects", subjectsError);

  console.log("5. Upsert des definitions de badges...");
  const { error: badgesError } = await supabase.from("badge_definitions").upsert(BADGE_DEFINITIONS, { onConflict: "code" });
  if (badgesError) await fail("upsert badge_definitions", badgesError);

  const level6e4e = levels.find((l) => l.code === "6e-4e");
  if (!level6e4e) await fail("trouver le niveau 6e-4e", new Error("niveau introuvable apres upsert"));

  console.log("6. Rattachement de Balkis et Bayrem...");
  const STUDENTS = [
    { legacy_child_id: "child-1", first_name: "Balkis", avatar: "👧" },
    { legacy_child_id: "child-2", first_name: "Bayrem", avatar: "👦" },
  ];
  const { data: students, error: studentsError } = await supabase
    .from("students")
    .upsert(
      STUDENTS.map((s) => ({ ...s, parent_id: adminId, school_level_id: level6e4e.id })),
      { onConflict: "legacy_child_id" },
    )
    .select("*");
  if (studentsError) await fail("upsert students", studentsError);

  console.log("7. Migration des tentatives existantes (day_attempts, question_attempts, active_day_sessions)...");
  for (const student of students) {
    const filters = { child_id: student.legacy_child_id };
    const updates = { student_id: student.id, school_level_id: level6e4e.id };

    for (const table of ["day_attempts", "question_attempts", "active_day_sessions"]) {
      const { error } = await supabase.from(table).update(updates).match(filters).is("student_id", null);
      if (error) await fail(`migrer ${table} pour ${student.legacy_child_id}`, error);
    }
  }

  console.log("8. Verification finale (zero ligne orpheline)...");
  for (const table of ["day_attempts", "question_attempts", "active_day_sessions"]) {
    const { count, error } = await supabase
      .from(table)
      .select("*", { count: "exact", head: true })
      .is("student_id", null);
    if (error) await fail(`verifier ${table}`, error);
    if (count && count > 0) {
      await fail(
        `verification finale de ${table}`,
        new Error(`${count} ligne(s) sans student_id restante(s) - migration incomplete`),
      );
    }
  }

  console.log("\nSeed termine avec succes.");
  console.log(`Connecte-toi avec ${ADMIN_EMAIL} / ${ADMIN_PASSWORD} (change ce mot de passe apres la premiere connexion).`);
}

main();
