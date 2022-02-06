<template>
  <div>
    <h1 class="text-2xl font-bold">{{ $t("home.welcome") }}</h1>
    <p class="mt-6 text-lg text-slate-700">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure nemo fugit
      corrupti reiciendis maiores neque quia, hic dolore temporibus nisi.
    </p>
    <div class="mt-10">
      <h2 class="mb-2 text-xl font-semibold">Mountains</h2>
      <Mountains />
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  head() {
    return {
      title: this.$t("home.metatilte"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("home.metatilte"),
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.$t("home.metatilte"),
        },
        {
          hid: "og:site_name",
          name: "og:site_name",
          content: this.$t("home.metatilte"),
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t("home.metatilte"),
        },
        {
          hid: "apple-mobile-web-app-title",
          name: "apple-mobile-web-app-title",
          content: this.$t("home.metatilte"),
        },
      ],
    };
  },
};
</script>
