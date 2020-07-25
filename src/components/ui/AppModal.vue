<template>
  <transition
    appear
    enter-class="opacity-0"
    enter-active-class="transition-opacity duration-150"
    enter-to-class="opacity-100"
    leave-class="opacity-100"
    leave-active-class="transition-opacity duration-150 pointer-events-none"
    leave-to-class="opacity-0"
  >
    <button
      tabindex="-1"
      type="button"
      class="fixed inset-0 w-full h-full bg-shadow focus:outline-none lg:flex lg:items-center lg:justify-center"
      @click.self="hideModal"
    >
      <div
        class="absolute top-0 flex flex-col items-center justify-center mt-16 transform -translate-x-1/2 left-1/2"
      >
        <AppButton
          @click="hideModal"
          icon="fa-times"
          class="border-2 rounded-full border-accent-1"
          size="sm"
          squeeze
        />
        <small class="hidden mt-1 text-accent-2 lg:block">ESC</small>
      </div>
      <div
        class="absolute inset-x-0 bottom-0 px-4 py-8 cursor-default bg-gradient lg:static lg:p-8 lg:rounded-lg"
      >
        <slot></slot>
      </div>
    </button>
  </transition>
</template>

<script>
import AppButton from "@/components/ui/AppButton";

export default {
  components: {
    AppButton,
  },
  methods: {
    hideModal() {
      this.$emit("hide");
    },
    escapeListener(e) {
      if (e.key === "Escape") {
        this.hideModal();
      }
    },
  },
  created() {
    window.addEventListener("keydown", this.escapeListener);
  },
  destroyed() {
    window.removeEventListener("keydown", this.escapeListener);
  },
};
</script>