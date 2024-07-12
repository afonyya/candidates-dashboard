export default defineNuxtConfig({
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
