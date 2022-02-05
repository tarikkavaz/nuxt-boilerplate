<template>
  <div class="container mx-auto mt-20">
    <div class="grid grid-cols-4 pb-2 border-b-2 border-slate-800">
      <div class="col-span-3">
        <nuxt-link :to="localePath('index')" class="mr-5">{{
          $t("nav.home")
        }}</nuxt-link>
        <nuxt-link :to="localePath('about')">{{ $t("nav.about") }}</nuxt-link>
      </div>
      <div class="col-span-1 justify-self-end">
        <nuxt-link
          class="mr-5"
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          >{{ locale.name }}</nuxt-link
        >
        <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
        <nuxt-link :to="switchLocalePath('tr')">Türkçe</nuxt-link>
      </div>
    </div>
    <div class="mt-10"><Nuxt /></div>
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

<style>
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  @apply text-lime-600 underline underline-offset-4;
}
</style>
