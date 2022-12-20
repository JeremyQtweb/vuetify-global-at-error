// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  /* app: {
    head: {
      title: 'Experimental',
      link: [
        {
          href: 'https://fonts.googleapis.com/css2?family=Helvetica:wght@100',
          rel: 'stylesheet',
        }
      ]
    }
  }, */
  modules: [
		'@pinia/nuxt'
	],
  css: [
    '@mdi/font/css/materialdesignicons.min.css',
		'vuetify/lib/styles/main.sass'
	],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
