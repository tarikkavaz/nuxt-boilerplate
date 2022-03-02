<template>
  <div>
    <h1>{{ $t('home.title') }}</h1>
    <h2>{{ $t('welcome') }}</h2>
    <p>{{ $t('test.one') }} {{ $t('test.two') }}</p>
    <h2>{{ this.$i18n.locale }}</h2>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  transition: 'fade',
  head() {
    return {
      title: this.$store.state.sitename + this.$t('home.title'),
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('home.description'),
        },
      ],
    }
  },
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
