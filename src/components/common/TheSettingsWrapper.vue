<template>
  <div class="flex justify-center flex-grow overflow-hidden" @keydown.esc="closeSettings">
    <div class="relative flex-grow max-w-6xl px-12 py-12 mx-auto overflow-y-scroll">
      <div class="absolute top-0 right-0 mt-8 mr-8">
        <AppButton
          @click="closeSettings"
          icon="fa-times"
          class="border-2 rounded-full border-accent-1"
          size="sm"
          squeeze
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import AppButton from "@/components/ui/AppButton";

export default {
  components: {
    AppButton,
  },
  methods: {
    ...mapActions(["closeSettings"]),
  },
};
</script>

<style>
</style>