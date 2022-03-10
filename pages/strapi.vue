<template>
  <div class="pt-36 h-full mx-auto max-w-3xl">
    <div v-for="message in messages.data" :key="message.id">
      <h2>
        {{ message.attributes.greetings }} - {{ message.attributes.locale }}
      </h2>
    </div>
  </div>
</template>

<script>
import { messageQuery } from '~/graphql/query'
export default {
  name: 'strapi',
  transition: 'fade',
  nuxtI18n: {
    paths: {
      en: '/strapi', // -> accessible at /about-us
      tr: '/strapi', // -> accessible at /fr/a-propos
    },
  },
  data() {
    return {
      showModal: false,
      messages: [],
    }
  },
  apollo: {
    messages: {
      prefetch: true,
      query: messageQuery,
    },
  },
  head() {
    return {
      title:
        this.$store.state.sitename +
        ' - ' +
        this.$t(`${this.$options.name}.title`),
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t(`${this.$options.name}.description`),
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content:
            this.$store.state.sitename +
            ' - ' +
            this.$t(`${this.$options.name}.title`),
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$t(`${this.$options.name}.description`),
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: this.$store.state.siteurl + this.$nuxt.$route.path,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            this.$store.state.siteurl + this.$t(`${this.$options.name}.image`),
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content:
            this.$store.state.sitename +
            ' - ' +
            this.$t(`${this.$options.name}.title`),
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.$t(`${this.$options.name}.description`),
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content:
            this.$store.state.siteurl + this.$t(`${this.$options.name}.image`),
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

<style lang="scss" scoped></style>
