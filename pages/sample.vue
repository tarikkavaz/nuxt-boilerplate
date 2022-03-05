<template>
  <div class="max-w-xl pt-20 mx-auto h-hull">
    <h1>{{ $t(`${this.$options.name}.title`) }} - {{ this.$i18n.locale }}</h1>
    <div>
      <button
        @click="showModal = true"
        class="inline-block px-6 py-3 text-white rounded-md cursor-pointer bg-slate-800"
      >
        Modal
      </button>
      <Modal v-show="showModal" @close-modal="showModal = false">
        <template v-slot:content>
          <p class="mb-8 text-sm text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
            nesciunt magni, voluptates aliquam, doloremque repudiandae tempora
            assumenda dicta, sequi ab maiores odit! Itaque voluptates nemo ipsam
            eius. Et, beatae voluptas!
          </p>
        </template>
        <template v-slot:close>
          <div
            class="inline-block px-6 py-3 text-black rounded-md cursor-pointer bg-slate-200"
          >
            OK
          </div>
        </template>
      </Modal>
      <div class="z-0">
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
        <div data-aos="fade-left">
          This element should be animated on scroll
        </div>
        <div data-aos="fade-right">
          This element should be animated on scroll
        </div>
        <div data-aos="fade-down">
          This element should be animated on scroll
        </div>
        <div data-aos="slide-up">This element should be animated on scroll</div>
        <div data-aos="slide-left">
          This element should be animated on scroll
        </div>
        <div data-aos="slide-right">
          This element should be animated on scroll
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import aosMixin from '../mixins/aos'
export default {
  name: 'sample',
  transition: 'fade',
  mixins: [aosMixin],
  nuxtI18n: {
    paths: {
      en: '/sample', // -> accessible at /about-us
      tr: '/ornek', // -> accessible at /fr/a-propos
    },
  },
  data() {
    return {
      showModal: false,
    }
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
