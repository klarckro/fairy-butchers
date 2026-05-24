import { e as defineEventHandler, c as createError, n as getRequestURL, z as sendRedirect, C as useRuntimeConfig } from '../../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';

const auth_get = defineEventHandler((event) => {
  const config = useRuntimeConfig();
  const clientId = config.decapGithubClientId;
  if (!clientId) {
    throw createError({
      statusCode: 500,
      statusMessage: "Decap GitHub OAuth not configured: missing DECAP_GITHUB_CLIENT_ID env var."
    });
  }
  const url = getRequestURL(event);
  const redirectUri = `${url.origin}/api/decap/callback`;
  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: "repo,user"
  });
  return sendRedirect(event, `https://github.com/login/oauth/authorize?${params}`, 302);
});

export { auth_get as default };
//# sourceMappingURL=auth.get.mjs.map
