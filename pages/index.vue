<template>
  <div>
    <h1>{{ $t('home.title') }}</h1>
    <h2>{{ $t('welcome') }}</h2>
    <p>{{ $t('test.one') }} {{ $t('test.two') }}</p>
    <h2>{{ this.$i18n.locale }}</h2>
    <button @click="showModal = true">Modal</button>
    <Modal v-show="showModal" @close-modal="showModal = false">
      <template v-slot:content>
        <p class="mb-8 text-sm text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
          nesciunt magni, voluptates aliquam, doloremque repudiandae tempora
          assumenda dicta, sequi ab maiores odit! Itaque voluptates nemo ipsam
          eius. Et, beatae voluptas.
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
  </div>
</template>

<script>
import Modal from '~/components/Modal.vue'
export default {
  name: 'IndexPage',
  transition: 'fade',
  data() {
    return {
      showModal: false,
    }
  },
  head() {
    return {
      title: this.$store.state.sitename + this.$t('home.title'),
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('home.description'),
        },
      ],
    }
  },
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
