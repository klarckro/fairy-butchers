// Plain Vercel serverless function. No Nuxt, no Nitro.
// Step 2 of the Decap CMS OAuth handshake: exchange the GitHub code for an
// access token and post it back to the Decap popup via window.opener.

export default async function handler(req, res) {
  const clientId = process.env.NUXT_DECAP_GITHUB_CLIENT_ID
  const clientSecret = process.env.NUXT_DECAP_GITHUB_CLIENT_SECRET

  if (!clientId || !clientSecret) {
    res.status(500).send('Missing OAuth env vars (NUXT_DECAP_GITHUB_CLIENT_ID / _SECRET).')
    return
  }

  const code = req.query?.code
  if (!code) {
    res.status(400).send('Missing OAuth code.')
    return
  }

  try {
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code })
    })
    const data = await tokenRes.json()

    if (data.error || !data.access_token) {
      return renderHandshake(res, 'error', {
        provider: 'github',
        message: data.error_description || data.error || 'unknown error'
      })
    }

    return renderHandshake(res, 'success', {
      token: data.access_token,
      provider: 'github'
    })
  } catch (err) {
    return renderHandshake(res, 'error', {
      provider: 'github',
      message: err?.message || 'OAuth exchange failed'
    })
  }
}

function renderHandshake(res, status, payload) {
  const message = `authorization:github:${status}:${JSON.stringify(payload)}`
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.status(200).send(`<!doctype html>
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
</body></html>`)
}
