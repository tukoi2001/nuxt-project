// https://nuxt.com/docs/api/configuration/nuxt-config
import ElementPlus from "unplugin-element-plus/vite";

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Nuxt Project",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        { name: "description", content: "This is Nuxt project description" },
      ],
      // link: [{ rel: "stylesheet", href: "..." }], // link tag
    },
  },
  runtimeConfig: {
    // Env
  },
  build: {
    transpile: ["element-plus/es"],
  },
  components: true,
  modules: [
    "@pinia/nuxt",
    "nuxt-lodash",
    "@element-plus/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/supabase",
  ],
  pinia: {
    autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
  },
  lodash: {
    prefix: "_",
    upperAfterPrefix: false,
  },
  elementPlus: {
    importStyle: "scss",
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  vite: {
    plugins: [ElementPlus({})],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/main.scss" as *;',
        },
      },
    },
  },
});
