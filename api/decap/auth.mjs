// Decap CMS OAuth — step 1: redirect user to GitHub.
// Web Fetch API style (compatible with Vercel Fluid + Edge + classic Node).

export default async function handler(request) {
  const clientId = process.env.NUXT_DECAP_GITHUB_CLIENT_ID
  if (!clientId) {
    return new Response('Missing NUXT_DECAP_GITHUB_CLIENT_ID env var.', { status: 500 })
  }

  const proto = request.headers.get('x-forwarded-proto') || 'https'
  const host = request.headers.get('host')
  const redirectUri = `${proto}://${host}/api/decap/callback`

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: 'repo,user'
  })

  return Response.redirect(
    `https://github.com/login/oauth/authorize?${params.toString()}`,
    302
  )
}
