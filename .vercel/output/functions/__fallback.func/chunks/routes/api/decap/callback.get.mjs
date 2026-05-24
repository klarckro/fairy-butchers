import { e as defineEventHandler, c as createError, l as getQuery, C as useRuntimeConfig, A as setHeader } from '../../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';

const callback_get = defineEventHandler(async (event) => {
  var _a, _b;
  const config = useRuntimeConfig();
  const clientId = config.decapGithubClientId;
  const clientSecret = config.decapGithubClientSecret;
  if (!clientId || !clientSecret) {
    throw createError({
      statusCode: 500,
      statusMessage: "Decap GitHub OAuth not configured: missing client id/secret env vars."
    });
  }
  const { code } = getQuery(event);
  if (!code) {
    throw createError({ statusCode: 400, statusMessage: "Missing OAuth code." });
  }
  const tokenRes = await $fetch(
    "https://github.com/login/oauth/access_token",
    {
      method: "POST",
      headers: { Accept: "application/json" },
      body: { client_id: clientId, client_secret: clientSecret, code }
    }
  );
  if (tokenRes.error || !tokenRes.access_token) {
    const desc = (_b = (_a = tokenRes.error_description) != null ? _a : tokenRes.error) != null ? _b : "unknown error";
    return renderHandshake(event, "error", { provider: "github", message: desc });
  }
  return renderHandshake(event, "success", { token: tokenRes.access_token, provider: "github" });
});
function renderHandshake(event, status, payload) {
  const message = `authorization:github:${status}:${JSON.stringify(payload)}`;
  setHeader(event, "content-type", "text/html; charset=utf-8");
  return `<!doctype html>
<html><body>
<script>
(function() {
  function receive(e) {
    if (!window.opener) return;
    window.opener.postMessage(${JSON.stringify(message)}, e.origin || '*');
  }
  window.addEventListener('message', receive, false);
  // Tell Decap we're ready; it replies, we then send the payload above.
  if (window.opener) window.opener.postMessage('authorizing:github', '*');
  // Fallback for direct visits.
  document.body.textContent = ${JSON.stringify(status === "success" ? "Signed in. You can close this window." : "Sign-in failed.")};
})();
<\/script>
</body></html>`;
}

export { callback_get as default };
//# sourceMappingURL=callback.get.mjs.map
