// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // plugins: [
  //   '~/plugins/googleAnalytics.client.js'
  // ],
  modules: ["@nuxt/scripts"],
  scripts: {
    registry: {
      googleAnalytics: true,
    }
  },
  runtimeConfig: {
    public: {
      scripts: {
        googleAnalytics: {
          id: ''
        },
      },
    },
  },
})