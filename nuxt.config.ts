export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  // 전역 scss
  css: [
    '@/assets/scss/base/reset.scss',
    '@/assets/scss/base/common.scss',
    '@/assets/scss/base/variables.scss',
  ],
  // fontLoader: {
  //   local: [
  //     {
  //       src: '/fonts/montserrat/Montserrat-Regular.ttf',
  //       family: 'Montserrat',
  //       weight: '400',
  //       style: 'normal',
  //       display: 'swap',
  //     },
  //     {
  //       src: '/fonts/montserrat/Montserrat-Medium.ttf',
  //       family: 'Montserrat',
  //       weight: '500',
  //       style: 'normal',
  //       display: 'swap',
  //     },
  //     {
  //       src: '/fonts/montserrat/Montserrat-Bold.ttf',
  //       family: 'Montserrat',
  //       weight: '700',
  //       style: 'normal',
  //       display: 'swap',
  //     },
  //   ]
  // },
})
