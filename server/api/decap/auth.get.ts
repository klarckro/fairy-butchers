// GitHub OAuth — step 1: redirect user to GitHub's consent page.
// Decap CMS opens this URL in a popup. On approval, GitHub redirects back
// to /api/decap/callback with a `code` query param.

export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  const clientId = config.decapGithubClientId

  if (!clientId) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Decap GitHub OAuth not configured: missing DECAP_GITHUB_CLIENT_ID env var.'
    })
  }

  const url = getRequestURL(event)
  const redirectUri = `${url.origin}/api/decap/callback`

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: 'repo,user'
  })

  return sendRedirect(event, `https://github.com/login/oauth/authorize?${params}`, 302)
})
