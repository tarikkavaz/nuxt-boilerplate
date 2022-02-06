<template>
  <div>
    <p v-if="$fetchState.pending">
      <span class="loading"></span>
    </p>
    <p v-else-if="$fetchState.error">Error while fetching mountains 🤬</p>
    <ul v-else>
      <li v-for="mountain in mountains" :key="mountain.title">
        <NuxtLink :to="`mountains/${mountain.slug}`" class="text-lime-600">
          {{ mountain.title }}
        </NuxtLink>
      </li>
    </ul>
    <button
      @click="$fetch"
      class="px-4 py-2 mt-4 text-black rounded-lg bg-lime-400"
    >
      Refresh Data
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mountains: [],
    };
  },
  activated() {
    if (this.$fetchState.timestamp <= Date.now() - 30000) {
      this.$fetch();
    }
  },

  async fetch() {
    this.mountains = await this.$http.$get("https://api.nuxtjs.dev/mountains");
  },
  nuxtI18n: {
    paths: {
      en: "/mountains/",
      tr: "/daglar/",
    },
  },
};
</script>
<style scoped>
li {
  margin-bottom: 0.5rem;
}
li:first-letter {
  text-transform: uppercase;
}
.loading {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border: 4px solid rgba(9, 133, 81, 0.705);
  border-radius: 50%;
  border-top-color: #158876;
  animation: spin 1s ease-in-out infinite;
}
@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>
