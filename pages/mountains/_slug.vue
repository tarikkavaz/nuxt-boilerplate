<template>
  <article>
    <h1 class="mb-4 text-2xl font-bold">{{ mountain.title }}</h1>
    <p v-if="$fetchState.pending">
      <span class="loading"></span>
    </p>
    <p v-else-if="$fetchState.error">Error while fetching mountains 🤬</p>
    <section>
      <img :src="mountain.image" :alt="mountain.title" />
      <p class="mt-6 text-lg text-slate-700">{{ mountain.description }}</p>
    </section>
    <button
      @click="goBack"
      class="px-4 py-2 mt-4 text-black rounded-lg bg-lime-400"
    >
      Back
    </button>
  </article>
</template>
<script>
export default {
  data() {
    return {
      mountain: {},
    };
  },
  async fetch() {
    this.mountain = await this.$http.$get(
      `https://api.nuxtjs.dev/mountains/${this.$route.params.slug}`
    );
  },
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
  },
};
</script>
