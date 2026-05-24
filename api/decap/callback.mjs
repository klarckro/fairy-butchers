// Decap CMS OAuth — step 2: exchange GitHub `code` for an access_token,
// then post it back to the Decap popup via window.opener handshake.
// Web Fetch API style.

export default async function handler(request) {
  const clientId = process.env.NUXT_DECAP_GITHUB_CLIENT_ID
  const clientSecret = process.env.NUXT_DECAP_GITHUB_CLIENT_SECRET

  if (!clientId || !clientSecret) {
    return new Response('Missing OAuth env vars (NUXT_DECAP_GITHUB_CLIENT_ID / _SECRET).', { status: 500 })
  }

  const url = new URL(request.url)
  const code = url.searchParams.get('code')
  if (!code) {
    return new Response('Missing OAuth code.', { status: 400 })
  }

  try {
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code })
    })
    const data = await tokenRes.json()

    if (data.error || !data.access_token) {
      return renderHandshake('error', {
        provider: 'github',
        message: data.error_description || data.error || 'unknown error'
      })
    }

    return renderHandshake('success', {
      token: data.access_token,
      provider: 'github'
    })
  } catch (err) {
    return renderHandshake('error', {
      provider: 'github',
      message: err?.message || 'OAuth exchange failed'
    })
  }
}

function renderHandshake(status, payload) {
  const message = `authorization:github:${status}:${JSON.stringify(payload)}`
  const html = `<!doctype html>
<html><body>
<script>
(function () {
  function receive(e) {
    if (!window.opener) return;
    window.opener.postMessage(${JSON.stringify(message)}, e.origin || '*');
  }
  window.addEventListener('message', receive, false);
  if (window.opener) window.opener.postMessage('authorizing:github', '*');
  document.body.textContent = ${JSON.stringify(status === 'success' ? 'Signed in. You can close this window.' : 'Sign-in failed.')};
})();
</script>
</body></html>`

  return new Response(html, {
    status: 200,
    headers: { 'Content-Type': 'text/html; charset=utf-8' }
  })
}
