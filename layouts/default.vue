<template>
  <div class="flex flex-col h-screen bg-slate-100">
    <div class=""><Menu /></div>
    <div class="p-4 bg-slate-200 grow"><Nuxt /></div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$store.state.sitename + this.$t('home.title'),
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      meta: [
        {
          hid: 'author',
          name: 'author',
          content: this.$store.state.sitename,
        },
        {
          hid: 'copyright',
          name: 'copyright',
          content: this.$store.state.sitename,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'key1 , key2',
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: this.$store.state.sitename,
        },
        {
          hid: 'twitter:site_name',
          name: 'twitter:site_name',
          content: this.$store.state.sitename,
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary',
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: this.$store.state.twitteruser,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
