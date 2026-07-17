// Cree (ou met a jour) un compte parent directement avec un mot de passe connu,
// sans passer par le flux d'invitation par email.
// Usage : node scripts/create-parent.mjs <email> <password> [displayName]

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

const [, , rawEmail, password, displayNameArg] = process.argv;

if (!rawEmail || !password) {
  console.error("Usage : node scripts/create-parent.mjs <email> <password> [displayName]");
  process.exit(1);
}

if (!SUPABASE_URL || !SERVICE_ROLE_KEY || !ANON_KEY) {
  console.error("NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY et SUPABASE_SERVICE_ROLE_KEY sont requis.");
  process.exit(1);
}

const email = rawEmail.trim().toLowerCase();
const displayName = displayNameArg ?? email.split("@")[0];

const adminClient = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

console.log("Recherche d'un compte existant pour", email, "...");
const { data: list, error: listError } = await adminClient.auth.admin.listUsers();
if (listError) {
  console.error("Erreur listUsers:", listError.message);
  process.exit(1);
}

const existing = list.users.find((u) => u.email?.toLowerCase() === email);

let userId;
if (existing) {
  userId = existing.id;
  console.log(`Compte deja existant (${userId}), mise a jour du mot de passe...`);
  const { error: updateError } = await adminClient.auth.admin.updateUserById(userId, {
    password,
    app_metadata: { ...existing.app_metadata, role: "parent" },
  });
  if (updateError) {
    console.error("Erreur updateUserById:", updateError.message);
    process.exit(1);
  }
} else {
  console.log("Creation du compte...");
  const { data, error } = await adminClient.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    app_metadata: { role: "parent" },
  });
  if (error) {
    console.error("Erreur createUser:", error.message);
    process.exit(1);
  }
  userId = data.user.id;
  console.log(`Compte cree (${userId}).`);
}

console.log("Upsert de la ligne profiles...");
const { error: profileError } = await adminClient
  .from("profiles")
  .upsert({ id: userId, email, role: "parent", display_name: displayName, is_active: true }, { onConflict: "id" });
if (profileError) {
  console.error("Erreur upsert profile:", profileError.message);
  process.exit(1);
}

console.log("Verification par une connexion test...");
const anonClient = createClient(SUPABASE_URL, ANON_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});
const { data: signInData, error: signInError } = await anonClient.auth.signInWithPassword({ email, password });

if (signInError) {
  console.error("ECHEC de la connexion test:", signInError.message);
  process.exit(1);
}

console.log("SUCCES : compte parent pret pour", signInData.user.email);
