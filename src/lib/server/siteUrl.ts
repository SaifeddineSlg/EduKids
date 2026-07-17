/**
 * Resout l'URL publique du site pour construire des liens dans les emails
 * (invitation, reinitialisation de mot de passe). Priorite :
 * 1. NEXT_PUBLIC_SITE_URL (explicite, a definir en prod pour eviter tout
 *    doute lie a l'origine de la requete ou a un proxy).
 * 2. VERCEL_URL (fournie automatiquement par Vercel en preview/production).
 * 3. L'origine de la requete entrante (fallback pour le developpement local).
 */
export function resolveSiteUrl(request: Request): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) {
    return explicit.replace(/\/$/, "");
  }

  const vercelUrl = process.env.VERCEL_URL;
  if (vercelUrl) {
    return `https://${vercelUrl}`;
  }

  const origin = request.headers.get("origin") ?? new URL(request.url).origin;
  return origin;
}
