// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content'
  ],
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
