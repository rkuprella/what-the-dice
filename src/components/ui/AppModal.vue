<template>
  <transition
    appear
    enter-class="opacity-0"
    enter-active-class="transition-opacity duration-300"
    enter-to-class="opacity-100"
    leave-class="opacity-100"
    leave-active-class="transition-opacity duration-200 pointer-events-none"
    leave-to-class="opacity-0"
  >
    <button
      tabindex="-1"
      type="button"
      class="fixed inset-0 flex items-center justify-center w-full h-full bg-shadow focus:outline-none"
      @click.self="hideModal"
    >
      <transition
        enter-class="scale-50 opacity-0"
        enter-active-class="transition duration-150 ease-out transform"
        enter-to-class="scale-100 opacity-100"
        leave-class="scale-100 opacity-100"
        leave-active-class="transition duration-150 ease-in transform"
        leave-to-class="scale-50 opacity-0"
      >
        <div
          v-if="showContainer"
          class="absolute top-0 flex flex-col items-center justify-center mt-16 transform"
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
      </transition>
      <transition
        enter-class="translate-y-full opacity-0 lg:translate-y-0 lg:scale-50"
        enter-active-class="transition duration-150 ease-out transform"
        enter-to-class="translate-y-0 opacity-100 lg:scale-100"
        leave-class="translate-y-0 opacity-100 lg:scale-100"
        leave-active-class="transition duration-150 ease-in transform"
        leave-to-class="translate-y-full opacity-0 lg:translate-y-0 lg:scale-50"
      >
        <div
          v-if="showContainer"
          class="absolute inset-x-0 bottom-0 px-4 py-8 cursor-default bg-gradient lg:static lg:p-8 lg:rounded-lg"
        >
          <slot></slot>
        </div>
      </transition>
    </button>
  </transition>
</template>

<script>
import AppButton from "@/components/ui/AppButton";

export default {
  components: {
    AppButton,
  },
  data() {
    return {
      showContainer: false,
    };
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
  mounted() {
    this.showContainer = true;
  },
  created() {
    window.addEventListener("keydown", this.escapeListener);
  },
  destroyed() {
    window.removeEventListener("keydown", this.escapeListener);
  },
};
</script>