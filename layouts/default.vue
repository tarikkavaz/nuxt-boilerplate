<template>
  <div>
    <nuxt-link
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      >{{ locale.name }}</nuxt-link
    >
    <hr />
    <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
    <nuxt-link :to="switchLocalePath('tr')">Türkçe</nuxt-link>
    <hr />
    <nuxt-link :to="localePath('index')">{{ $t("nav.home") }}</nuxt-link>
    <nuxt-link :to="localePath('about')">{{ $t("nav.about") }}</nuxt-link>
    <hr />
    <Nuxt />
  </div>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
};
</script>
