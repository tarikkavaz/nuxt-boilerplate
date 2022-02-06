<template>
  <div>
    <h1 class="text-2xl font-bold">{{ $t("about.aboutus") }}</h1>
    <p class="mt-6 text-lg text-slate-700">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure nemo fugit
      corrupti reiciendis maiores neque quia, hic dolore temporibus nisi.
    </p>

    <button @click="$modal.show('my-modal')" class="px-4 py-2 mt-4 text-black rounded-md bg-lime-400">Show modal</button>

    <modal name="my-modal">
      <div class="modal-content">
        <h2>It work's!</h2>

        <button @click="$modal.hide('my-modal')">Close it</button>
      </div>
    </modal>
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
<style>
.vm--modal {
  @apply rounded-lg p-5;
}
</style>