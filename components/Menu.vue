<template>
  <nav class="z-50 w-full bg-slate-200">
    <div class="px-4 mx-auto sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img
              class="w-8 h-8"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-400.svg"
              alt="Workflow logo"
            />
          </div>
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
        <div class="hidden md:block">
          <div class="flex items-center ml-4 md:ml-6">
            <nuxt-link
              v-for="locale in availableLocales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
              class="menu-item"
              >{{ locale.name }}
            </nuxt-link>

            <!-- Profile dropdown -->
            <div class="relative ml-3">
              <div>
                <button
                  @click="toggleDropDown"
                  v-on-clickaway="closeDropDown"
                  class="flex items-center max-w-xs text-sm text-white rounded-full focus:outline-none focus:shadow-solid"
                  id="user-menu"
                  aria-label="User menu"
                  aria-haspopup="true"
                >
                  <img
                    class="w-8 h-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt
                  />
                </button>
              </div>
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
                  class="absolute right-0 w-48 mt-2 origin-top-right rounded-md shadow-lg"
                >
                  <div
                    class="py-1 bg-white rounded-md shadow-xs"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                  >
                    <nuxt-link
                      :to="localePath('index1')"
                      class="dropdown-item"
                      role="menuitem"
                      >Your Profile</nuxt-link
                    >
                    <nuxt-link
                      :to="localePath('index2')"
                      class="dropdown-item"
                      role="menuitem"
                      >Settings</nuxt-link
                    >
                    <nuxt-link
                      :to="localePath('index3')"
                      class="dropdown-item"
                      role="menuitem"
                      >Sign out</nuxt-link
                    >
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
        <div class="flex -mr-2 md:hidden">
          <!-- Mobile menu button -->
          <button
            @click="toggleMenu"
            v-on-clickaway="closeMenu"
            class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
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
    <div :class="[isMenuOpen ? '' : 'hidden', 'md:hidden']">
      <div class="px-2 pt-2 pb-3 sm:px-3">
        <nuxt-link :to="localePath('index')" class="menu-item">{{
          $t('home.title')
        }}</nuxt-link>
        <nuxt-link :to="localePath('about')" class="menu-item">{{
          $t('about.title')
        }}</nuxt-link>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-700">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            <img
              class="w-10 h-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt
            />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium leading-none text-white">
              Tom Cook
            </div>
            <div class="mt-1 text-sm font-medium leading-none text-gray-400">
              tom@example.com
            </div>
          </div>
        </div>
        <div class="px-2 mt-3">
          <nuxt-link :to="localePath('index')" class="menu-item">{{
            $t('home.title')
          }}</nuxt-link>
          <nuxt-link :to="localePath('about')" class="menu-item">{{
            $t('about.title')
          }}</nuxt-link>
        </div>
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
.menu-item {
  @apply block px-3 py-2 mt-1 text-base font-medium text-slate-800 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 mr-2;
}
.dropdown-item {
  @apply block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100;
}
.nuxt-link-exact-active {
  @apply bg-gray-700 text-slate-100;
}
</style>
