import NuxtConfiguration from "@nuxt/config";

const config: NuxtConfiguration = {
  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:3000",
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY || '',
  },
  head: {
    title: "GameComponent",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "GameComponent provides software services for your online game. Don't reinvent the wheel, use small and powerful services to power your game."
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  loading: { color: "#3B8070" },
  css: ["~/assets/css/tailwind.css", "~/assets/css/main.css"],
  build: {
    postcss: [require("tailwindcss")("./tailwind.js"), require("autoprefixer")],
    transpile: [/^vue2-google-maps($|\/)/]
  },
  modules: [
    "@nuxtjs/axios",
    "vue-github-buttons/nuxt",
    ["@nuxtjs/google-tag-manager", { id: "GTM-WPLNL89" }]
  ],
  axios: {},
  generate: {
    routes: ["404"]
  },
  plugins: [{ src: "~/plugins/google-maps", ssr: true }]
};

export default config;
