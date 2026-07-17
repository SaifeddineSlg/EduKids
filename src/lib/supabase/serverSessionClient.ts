import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * Client Supabase lie aux cookies de session (anon key), pour lire l'utilisateur
 * connecte dans les Server Components et les Route Handlers.
 * Ne PAS utiliser pour les requetes de donnees metier (garder getSupabaseServerClient()
 * / service role pour ca, comme avant).
 */
export async function createSupabaseServerSessionClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
            });
          } catch {
            // Appele depuis un Server Component (pas un Route Handler) : la session
            // sera de toute facon rafraichie par le middleware, on peut ignorer.
          }
        },
      },
    },
  );
}
