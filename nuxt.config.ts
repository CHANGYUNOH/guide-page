export default defineNuxtConfig({
  devtools: { enabled: false },
  devServer: {
    hot: true,
  },
  compatibilityDate: '2025-02-26',
  css: [
    '@/assets/scss/base/common.scss',
    '@/assets/scss/base/reset.scss',
    '@/assets/scss/base/variables.scss',
  ]
})