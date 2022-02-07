import locale9ec66352 from '../../locales/en.json'
import locale5e24acbc from '../../locales/tr.json'

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"en"},
  vueI18nLoader: false,
  locales: [{"code":"tr","iso":"tr-TR","name":"Türkçe","file":"tr.json"},{"code":"en","iso":"en-EN","name":"English","file":"en.json"}],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: false,
  langDir: "/Users/tarik/Work/NewTabLab/Boilerplates/nuxt-boilerplate/locales",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true},
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: false,
  pages: {"about":{"en":"/about","tr":"/hakkinda"}},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"tr","iso":"tr-TR","name":"Türkçe","file":"tr.json"},{"code":"en","iso":"en-EN","name":"English","file":"en.json"}],
  localeCodes: ["tr","en"],
  additionalMessages: [],
}

export const localeMessages = {
  'en.json': () => Promise.resolve(locale9ec66352),
  'tr.json': () => Promise.resolve(locale5e24acbc),
}
