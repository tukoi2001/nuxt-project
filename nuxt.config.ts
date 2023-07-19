// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/styles/main.scss" as *;',
        },
      },
    },
  },
});
