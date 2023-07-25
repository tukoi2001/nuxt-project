// https://nuxt.com/docs/api/configuration/nuxt-config
import ElementPlus from "unplugin-element-plus/vite";

export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ["element-plus/es"],
  },
  components: {
    global: true,
    dirs: ["~/components"],
  },
  modules: ["@pinia/nuxt", "nuxt-lodash", "@element-plus/nuxt", "@nuxtjs/i18n"],
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
