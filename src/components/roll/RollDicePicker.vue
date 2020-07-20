<template>
  <ul class="flex flex-wrap justify-center px-2 pb-4">
    <li class="relative py-2 m-1" v-for="die in getAvailableDice" :key="die.id">
      <AppButton :icon="die.icon" size="xl" color="basic" />
      <!-- label -->
      <div
        class="absolute bottom-0 px-2 py-1 -mb-2 text-sm transform -translate-x-1/2 rounded-lg pointer-events-none left-1/2 bg-primary-2 text-label"
      >{{ die.name }}</div>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
import AppButton from "@/components/ui/AppButton";

export default {
  components: {
    AppButton
  },
  computed: {
    ...mapGetters(["getAvailableDice"])
  }
};
</script>