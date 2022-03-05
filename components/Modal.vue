<template>
  <transition name="modal-fade">
    <div
      class="fixed inset-0 z-50 flex justify-center bg-black/50"
      @click="$emit('close-modal')"
    >
      <div
        class="z-50 w-2/4 p-8 mt-auto mb-auto bg-white rounded-md"
        @click.stop
      >
        <slot name="content">Hello</slot>
        <div @click="$emit('close-modal')">
          <slot name="close">Close</slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {}
</script>

<style scoped>
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
