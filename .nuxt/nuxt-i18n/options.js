

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
  vueI18n: {},
  vueI18nLoader: true,
  locales: [{"code":"en","iso":"en-US","file":"en-US.js","name":"English"},{"code":"tr","iso":"tr-TR","file":"tr-TR.js","name":"Türkçe"}],
  defaultLocale: "tr",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix",
  lazy: true,
  langDir: "/Users/tarik/Work/NewTabLab/flammbodrum.nuxt/lang",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true},
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"en","iso":"en-US","file":"en-US.js","name":"English"},{"code":"tr","iso":"tr-TR","file":"tr-TR.js","name":"Türkçe"}],
  localeCodes: ["en","tr"],
  additionalMessages: [],
}

export const localeMessages = {
  'en-US.js': () => import('../../lang/en-US.js' /* webpackChunkName: "lang-en-US.js" */),
  'tr-TR.js': () => import('../../lang/tr-TR.js' /* webpackChunkName: "lang-tr-TR.js" */),
}
