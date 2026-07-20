// Diagnostic non destructif : verifie l'etat d'un compte et teste une connexion
// reelle pour obtenir le message d'erreur exact de Supabase Auth.
// Usage : node scripts/diagnose-login.mjs <email> <password>

import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import WebSocketImpl from "ws";

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
    // ignore
  }
}

loadEnvLocal();

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

const [, , rawEmail, password] = process.argv;

if (!rawEmail || !password) {
  console.error("Usage : node scripts/diagnose-login.mjs <email> <password>");
  process.exit(1);
}

const email = rawEmail.trim().toLowerCase();

const adminClient = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

console.log("1. Recherche du compte dans auth.users...");
const { data: list, error: listError } = await adminClient.auth.admin.listUsers();
if (listError) {
  console.error("Erreur listUsers:", listError.message);
  process.exit(1);
}

const matches = list.users.filter((u) => u.email?.toLowerCase() === email);
console.log(`Comptes trouves pour ${email} : ${matches.length}`);
for (const u of matches) {
  console.log("---");
  console.log("id:", u.id);
  console.log("email exact:", u.email);
  console.log("email_confirmed_at:", u.email_confirmed_at);
  console.log("banned_until:", u.banned_until ?? null);
  console.log("app_metadata:", JSON.stringify(u.app_metadata));
  console.log("created_at:", u.created_at);
  console.log("updated_at:", u.updated_at);
  console.log("last_sign_in_at:", u.last_sign_in_at);
}

if (matches.length > 1) {
  console.warn("\n⚠️  PLUSIEURS COMPTES TROUVES avec le meme email : c'est probablement la cause du probleme.");
}

console.log("\n2. Lignes profiles correspondantes...");
const { data: profiles, error: profilesError } = await adminClient
  .from("profiles")
  .select("id, email, role, is_active")
  .ilike("email", email);
if (profilesError) {
  console.error("Erreur lecture profiles:", profilesError.message);
} else {
  console.log(JSON.stringify(profiles, null, 2));
}

console.log("\n3. Test de connexion reelle avec le mot de passe fourni...");
const anonClient = createClient(SUPABASE_URL, ANON_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});
const { data: signInData, error: signInError } = await anonClient.auth.signInWithPassword({ email, password });

if (signInError) {
  console.error("ECHEC :", signInError.status, signInError.name, "-", signInError.message);
} else {
  console.log("SUCCES : connexion reussie pour", signInData.user.id, signInData.user.email);
}
