<template>
  <nav class="w-full" :class="this.$nuxt.$route.name">
    <!-- Desktop -->
    <div class="px-4 mx-auto sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-26">
        <!-- Menu Left -->
        <div class="flex items-center">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <nuxt-link :to="localePath('index')"
              ><img
                :src="`/img/logo/logo-` + $i18n.locale + `.png`"
                alt="Site logo"
                class="w-auto h-24"
            /></nuxt-link>
          </div>
          <!-- Menu items -->
          <div class="hidden lg:block">
            <div class="flex items-baseline ml-10">
              <nuxt-link :to="localePath('index')" class="menu-item">{{
                $t('home.title')
              }}</nuxt-link>
              <!-- Dropdown -->
              <div class="relative">
                <button
                  @click="toggleDropDown"
                  v-on-clickaway="closeDropDown"
                  class="menu-item"
                  id="dropdown-menu"
                  aria-label="Dropdown menu"
                  aria-haspopup="true"
                >
                  {{ $t('sample.title') }}
                </button>

                <transition
                  enter-active-class="transition duration-100 ease-out"
                  enter-class="transform scale-95 opacity-0"
                  enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-75 ease-in"
                  leave-class="transform scale-100 opacity-100"
                  leave-to-class="transform scale-95 opacity-0"
                >
                  <div
                    v-show="isDropDownOpen"
                    class="absolute right-0 w-48 origin-top-right rounded-md shadow-lg"
                  >
                    <div
                      class="py-1 bg-white rounded-md shadow-xs"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="dropdown-menu"
                    >
                      <nuxt-link
                        :to="localePath('index')"
                        class="dropdown-item"
                        role="menuitem"
                        >{{ $t('home.title') }}</nuxt-link
                      >
                      <nuxt-link
                        :to="localePath('sample')"
                        class="dropdown-item"
                        role="menuitem"
                        >{{ $t('sample.title') }}</nuxt-link
                      >
                    </div>
                  </div>
                </transition>
              </div>
            </div>
          </div>
        </div>
        <!-- Menu Right -->
        <div class="hidden lg:block">
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
        <div class="flex -mr-2 lg:hidden">
          <button
            @click="toggleMenu"
            v-on-clickaway="closeMenu"
            class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-custom-blue focus:outline-none focus:bg-custom-blue focus:text-white"
          >
            <svg
              :class="[isMenuOpen ? 'hidden' : 'block', 'h-6 w-6']"
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
              :class="[isMenuOpen ? 'block' : 'hidden', 'h-6 w-6']"
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
    <div class="bg-gray-100" v-show="isMenuOpen">
      <div class="px-2 pt-2 pb-3 sm:px-3">
        <nuxt-link :to="localePath('index')" class="dropdown-item">{{
          $t('home.title')
        }}</nuxt-link>
        <nuxt-link :to="localePath('sample')" class="dropdown-item">{{
          $t('sample.title')
        }}</nuxt-link>
      </div>
      <div class="px-2 pt-2 pb-3 border-t border-gray-700 sm:px-3">
        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          class="dropdown-item"
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
      isMenuOpen: false,
      isDropDownOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    },
    toggleDropDown() {
      this.isDropDownOpen = !this.isDropDownOpen
    },
    closeDropDown() {
      this.isDropDownOpen = false
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
nav[class*=' index'],
nav[class*=' rooms'],
nav[class*=' eatdrink'],
nav[class*=' weddingevents'] {
  @apply bg-white/90;
}
.menu-item {
  @apply block px-2 py-1 mt-1 text-sm font-medium text-custom-blue rounded-md hover:text-white hover:bg-custom-blue focus:outline-none focus:text-white focus:bg-custom-blue mr-2;
}
.dropdown-item {
  @apply block px-4 py-2 text-sm text-custom-blue hover:bg-custom-blue hover:text-white;
}
.nuxt-link-exact-active {
  @apply bg-custom-orange focus:bg-custom-orange text-white;
}
</style>
