function baseTemplate(title: string, bodyHtml: string, link: string): string {
  return `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 480px; margin: 0 auto; padding: 24px; background: #fff3d6;">
      <h1 style="color: #1e2a32; font-size: 22px;">${title}</h1>
      <div style="background: #ffffff; border-radius: 16px; padding: 20px; color: #1e2a32; font-size: 15px; line-height: 1.6;">
        ${bodyHtml}
        <p style="margin-top: 24px;">
          <a href="${link}" style="display: inline-block; background: #ff8f00; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 999px; font-weight: bold;">
            Continuer
          </a>
        </p>
        <p style="margin-top: 16px; font-size: 12px; color: #52616b;">
          Si le bouton ne fonctionne pas, copie-colle ce lien dans ton navigateur :<br />
          <a href="${link}" style="color: #00a896;">${link}</a>
        </p>
      </div>
      <p style="color: #52616b; font-size: 12px; margin-top: 16px;">EduKids — L'app d'apprentissage pour enfants.</p>
    </div>
  `;
}

export function inviteEmailTemplate(displayName: string, link: string): { subject: string; html: string } {
  return {
    subject: "Vous etes invite(e) sur EduKids",
    html: baseTemplate(
      "Bienvenue sur EduKids !",
      `<p>Bonjour ${displayName},</p>
       <p>Vous avez ete invite(e) a rejoindre EduKids en tant que parent. Cliquez sur le bouton ci-dessous pour choisir votre mot de passe et acceder a votre espace.</p>`,
      link,
    ),
  };
}

export function resetPasswordEmailTemplate(link: string): { subject: string; html: string } {
  return {
    subject: "Reinitialisation de votre mot de passe EduKids",
    html: baseTemplate(
      "Reinitialisation de mot de passe",
      `<p>Vous avez demande a reinitialiser votre mot de passe EduKids.</p>
       <p>Cliquez sur le bouton ci-dessous pour choisir un nouveau mot de passe. Si vous n'etes pas a l'origine de cette demande, vous pouvez ignorer cet email.</p>`,
      link,
    ),
  };
}
