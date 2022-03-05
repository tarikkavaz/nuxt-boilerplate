<template>
  <div class="h-full">
    <div class="h-full carousel-wrapper">
      <VueSlickCarousel v-bind="slickOptions" class="">
        <div
          class="relative max-h-screen img-wrapper"
          v-for="(slogan, i) in homecontent"
          :key="i"
        >
          <img :src="slogan.image" class="object-cover w-full h-full" alt="" />
          <div class="absolute inset-0 flex items-center justify-center">
            <h2 class="px-10 py-5 rounded-sm bg-slate-100/80">
              <span
                class="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-custom-blue to-custom-orange slogan"
                >{{ slogan.text }}</span
              >
            </h2>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  transition: 'fade',
  data() {
    return {
      isMilky: true,
      slickOptions: {
        pauseOnHover: false,
        arrows: false,
        fade: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      homecontent: [
        {
          text: 'Lorem ipsum dolor sit amet consectetur.',
          image: 'https://picsum.photos/id/1/1900/1200',
        },
        {
          text: 'Quisquam quo ea fugit odio deleniti.',
          image: 'https://picsum.photos/id/1/1900/1200',
        },
        {
          text: 'Maiores consequuntur fugit explicabo',
          image: 'https://picsum.photos/id/1/1900/1200',
        },
      ],
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

<style lang="scss">
.slick-slider,
.slick-list,
.slick-track,
.slick-slide {
  @apply min-h-full h-full;
  div {
    @apply min-h-full h-full;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
<style scoped>
nav {
  @apply bg-slate-100;
}
</style>
