<template>
  <div class="container px-4 mx-auto mt-20 md:px-0">
    <div class="grid grid-cols-4 pb-2 border-b-2 border-slate-800">
      <div class="col-span-3">
        <nuxt-link :to="localePath('index')" class="mr-5">{{
          $t("nav.home")
        }}</nuxt-link>
        <nuxt-link :to="localePath('about')" class="mr-5">{{ $t("nav.about") }}</nuxt-link>
        <dropdown-menu 
          :overlay="false"
          direction="center"
          >
          <button slot="trigger">Open Dropdown</button>
          <header slot="header">Dropdown Header</header>
          <ul slot="body">
            <li v-for="i in 6" :key="i"><a href="">Item {{i}}</a></li>
          </ul>
          <footer slot="footer">Dropdown Footer</footer>
        </dropdown-menu>
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
  data() {
    return {
      isOpenMyDropdown: false
    }
  }
};
</script>

<style>
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  @apply text-lime-600 underline underline-offset-4;
}
</style>
