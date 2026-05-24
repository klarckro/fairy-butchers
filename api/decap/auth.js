// Plain Vercel serverless function. No Nuxt, no Nitro.
// Step 1 of the Decap CMS OAuth handshake: redirect user to GitHub.

export default function handler(req, res) {
  const clientId = process.env.NUXT_DECAP_GITHUB_CLIENT_ID
  if (!clientId) {
    res.status(500).send('Missing NUXT_DECAP_GITHUB_CLIENT_ID env var.')
    return
  }

  const proto = req.headers['x-forwarded-proto'] || 'https'
  const host = req.headers['host']
  const redirectUri = `${proto}://${host}/api/decap/callback`

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: 'repo,user'
  })

  res.setHeader('Location', `https://github.com/login/oauth/authorize?${params}`)
  res.status(302).end()
}
