<template>
  <div class="flex justify-center flex-grow overflow-hidden">
    <div class="relative flex flex-grow max-w-6xl mx-auto overflow-hidden">
      <div class="absolute top-0 right-0 flex flex-col items-center justify-center mt-16 mr-8">
        <AppButton
          @click="closeSettings"
          icon="fa-times"
          class="border-2 rounded-full border-accent-1"
          size="sm"
          squeeze
        />
        <small class="hidden mt-1 text-accent-2 lg:block">ESC</small>
      </div>
      <div class="flex-grow pl-2 pr-32 overflow-y-scroll">
        <AppCheckBox text="Give me all the options" id="options" v-model="options" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import AppButton from "@/components/ui/AppButton";
import AppCheckBox from "@/components/ui/AppCheckBox";

export default {
  components: {
    AppButton,
    AppCheckBox,
  },
  computed: {
    options: {
      set() {
        this.$store.dispatch("toggleAllOptions");
      },
      get() {
        return this.$store.getters.isAllOptionsActive;
      },
    },
  },
  methods: {
    ...mapActions(["closeSettings"]),
    escapeListener(e) {
      if (e.key === "Escape") {
        this.closeSettings();
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

<style>
</style>