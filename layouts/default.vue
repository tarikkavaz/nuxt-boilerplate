<template>
  <div class="flex flex-col h-screen">
    <div class="absolute inset-0 z-40 max-h-20"><Menu /></div>
    <div class="z-10 grow"><Nuxt /></div>
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
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
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
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    }
  },
}
</script>
