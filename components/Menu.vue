<template>
  <nav class="w-full bg-slate-200">
    <!-- Desktop -->
    <div class="px-4 mx-auto sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Menu Left -->
        <div class="flex items-center">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <img
              class="w-8 h-8"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-400.svg"
              alt="Workflow logo"
            />
          </div>
          <!-- Menu items -->
          <div class="hidden md:block">
            <div class="flex items-baseline ml-10">
              <nuxt-link :to="localePath('index')" class="menu-item">{{
                $t('home.title')
              }}</nuxt-link>
              <nuxt-link :to="localePath('about')" class="menu-item">{{
                $t('about.title')
              }}</nuxt-link>
            </div>
          </div>
        </div>
        <!-- Menu Right -->
        <div class="hidden md:block">
          <div class="flex items-center ml-4 md:ml-6">
            <div class="relative ml-3">
              <nuxt-link
                v-for="locale in availableLocales"
                :key="locale.code"
                :to="switchLocalePath(locale.code)"
                class="menu-item"
                >{{ locale.name }}
              </nuxt-link>
            </div>
          </div>
        </div>
        <!-- Mobile menu button -->
        <div class="flex -mr-2 md:hidden">
          <button
            @click="toggle"
            v-on-clickaway="closeMenu"
            class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
          >
            <svg
              :class="[isOpen ? 'hidden' : 'block', 'h-6 w-6']"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            <svg
              :class="[isOpen ? 'block' : 'hidden', 'h-6 w-6']"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- Mobile -->
    <div class="bg-slate-300" v-show="isOpen">
      <div class="px-2 pt-2 pb-3 sm:px-3">
        <nuxt-link :to="localePath('index')" class="menu-item">{{
          $t('home.title')
        }}</nuxt-link>
        <nuxt-link :to="localePath('about')" class="menu-item">{{
          $t('about.title')
        }}</nuxt-link>
      </div>
      <div class="px-2 pt-2 pb-3 border-t border-gray-700 sm:px-3">
        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          class="menu-item"
          >{{ locale.name }}
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
    closeMenu() {
      this.isOpen = false
    },
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
}
</script>

<style>
.menu-item {
  @apply block px-3 py-2 mt-1 text-base font-medium text-slate-800 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 mr-2;
}
.nuxt-link-exact-active {
  @apply bg-gray-700 text-slate-100;
}
</style>
