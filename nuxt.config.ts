export default defineNuxtConfig({
  compatibilityDate: '2024-07-12',
  devtools: {
    enabled: true,
  },
  modules: [
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@vee-validate/nuxt',
    'nuxt-quasar-ui',
  ],
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
