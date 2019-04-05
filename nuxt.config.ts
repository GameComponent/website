import NuxtConfiguration from '@nuxt/config'

const config: NuxtConfiguration = {
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  },
  head: {
    title: "GameComponent",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "GameCompont source available services for your online game." }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },
  loading: { color: "#3B8070" },
  css: ["~/assets/css/tailwind.css", "~/assets/css/main.css"],
  build: {
    postcss: [
      require('tailwindcss')('./tailwind.js'),
      require('autoprefixer')
    ],
  },
  modules: [
    "@nuxtjs/axios",
    "vue-github-buttons/nuxt",
    ['@nuxtjs/google-tag-manager', { id: 'GTM-WPLNL89' }],
  ],
  axios: {}
}

export default config
