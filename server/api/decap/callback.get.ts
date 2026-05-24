// GitHub OAuth — step 2: exchange the `code` for an access_token, then
// post the token back to the Decap CMS window via postMessage handshake.

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const clientId = config.decapGithubClientId
  const clientSecret = config.decapGithubClientSecret

  if (!clientId || !clientSecret) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Decap GitHub OAuth not configured: missing client id/secret env vars.'
    })
  }

  const { code } = getQuery(event) as { code?: string }
  if (!code) {
    throw createError({ statusCode: 400, statusMessage: 'Missing OAuth code.' })
  }

  const tokenRes = await $fetch<{ access_token?: string, error?: string, error_description?: string }>(
    'https://github.com/login/oauth/access_token',
    {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: { client_id: clientId, client_secret: clientSecret, code }
    }
  )

  if (tokenRes.error || !tokenRes.access_token) {
    const desc = tokenRes.error_description ?? tokenRes.error ?? 'unknown error'
    return renderHandshake(event, 'error', { provider: 'github', message: desc })
  }

  return renderHandshake(event, 'success', { token: tokenRes.access_token, provider: 'github' })
})

function renderHandshake(
  event: Parameters<Parameters<typeof defineEventHandler>[0]>[0],
  status: 'success' | 'error',
  payload: Record<string, unknown>
) {
  const message = `authorization:github:${status}:${JSON.stringify(payload)}`
  setHeader(event, 'content-type', 'text/html; charset=utf-8')
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
  document.body.textContent = ${JSON.stringify(status === 'success' ? 'Signed in. You can close this window.' : 'Sign-in failed.')};
})();
</script>
</body></html>`
}
