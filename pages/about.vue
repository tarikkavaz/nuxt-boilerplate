<template>
  <div>
    <h1>{{ $t('about.title') }}</h1>
    <h2>{{ this.$i18n.locale }}</h2>
    <div>
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        This element should be animated on scroll
      </div>
      <div data-aos="fade-left">This element should be animated on scroll</div>
      <div data-aos="fade-right">This element should be animated on scroll</div>
      <div data-aos="fade-down">This element should be animated on scroll</div>
      <div data-aos="slide-up">This element should be animated on scroll</div>
      <div data-aos="slide-left">This element should be animated on scroll</div>
      <div data-aos="slide-right">
        This element should be animated on scroll
      </div>
    </div>
  </div>
</template>

<script>
import aosMixin from '../mixins/aos'
export default {
  name: 'AboutPage',
  transition: 'fade',
  mixins: [aosMixin],
  nuxtI18n: {
    paths: {
      en: '/about-us', // -> accessible at /about-us
      tr: '/hakkimizda', // -> accessible at /fr/a-propos
    },
  },
  head() {
    return {
      title: this.$store.state.sitename + ' - ' + this.$t('about.title'),
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('about.description'),
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.$store.state.sitename + ' - ' + this.$t('about.title'),
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$t('about.description'),
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: this.$store.state.siteurl + this.$nuxt.$route.path,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.$store.state.siteurl + this.$t('about.image'),
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.$store.state.sitename + ' - ' + this.$t('about.title'),
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.$t('about.description'),
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.$store.state.siteurl + this.$t('about.image'),
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: this.$store.state.siteurl + this.$nuxt.$route.path,
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
