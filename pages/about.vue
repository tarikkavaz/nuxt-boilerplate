<template>
  <div>
    <h1 class="text-2xl font-bold">{{ $t("about.aboutus") }}</h1>
    <p class="mt-6 text-lg text-slate-700">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure nemo fugit
      corrupti reiciendis maiores neque quia, hic dolore temporibus nisi.
    </p>
  </div>
</template>

<script>
export default {
  name: "About",
  head() {
    return {
      title: this.$t("about.metatilte"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("about.metatilte"),
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.$t("about.metatilte"),
        },
        {
          hid: "og:site_name",
          name: "og:site_name",
          content: this.$t("about.metatilte"),
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t("about.metatilte"),
        },
        {
          hid: "apple-mobile-web-app-title",
          name: "apple-mobile-web-app-title",
          content: this.$t("about.metatilte"),
        },
      ],
    };
  },
  nuxtI18n: {
    paths: {
      en: "/about",
      tr: "/hakkinda",
    },
  },
};
</script>
