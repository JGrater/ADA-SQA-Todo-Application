// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // Define public environment variables
    public: {
      running_mode: process.env.RUNNING_MODE || 'TESTING',
    }
    // Add more environment variables as needed
  },




  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      titleTemplate: 'TODO Application',
      meta: [
        { name: 'theme-color', content: '#47e3ff' },
        { hid: 'theme-color', property: 'theme-color', content: '#47e3ff' },
      ],
      script: [
        //Disabled so we can use native vue scripts
        //{ src: '/js/new_script.js', hid: 'main-script', type: 'text/javascript', defer: true },
      ],
      link: [
        //{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ],
    },
  },

  css: [
    '~/assets/css/style.css'
  ],


  devtools: { enabled: true }

})
