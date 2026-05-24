// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content'
  ],
  content: {
    experimental: {
      // Use Node's built-in node:sqlite (Node 22+) instead of better-sqlite3,
      // so the Vercel serverless function doesn't need a native binary.
      sqliteConnector: 'native'
    }
  },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    // Nuxt auto-maps env vars NUXT_DECAP_GITHUB_CLIENT_ID / NUXT_DECAP_GITHUB_CLIENT_SECRET → these keys.
    decapGithubClientId: '',
    decapGithubClientSecret: ''
  },
  nitro: {
    preset: 'vercel',
    prerender: {
      routes: ['/'],
      crawlLinks: true
    },
    routeRules: {
      '/admin': { redirect: '/admin/' },
      '/admin/**': { static: true }
    }
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
