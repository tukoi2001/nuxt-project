import { langEn, langZhTW, DEFAULT_LANGUAGE } from "@/constants/language";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: DEFAULT_LANGUAGE,
  fallbackLocale: DEFAULT_LANGUAGE,
  messages: {
    en: langEn,
    zhTw: langZhTW,
  },
}));
