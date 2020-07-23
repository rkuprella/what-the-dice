<template>
  <div class="flex flex-col flex-grow h-full px-2 py-2 space-y-2">
    <button
      class="relative flex items-center justify-center flex-grow py-8 transition-colors duration-150 border-2 cursor-default rounded-xl focus:outline-none"
      v-for="(table, i) in tables"
      :key="i"
      @click="toggleTable(i)"
      :class="currentTable === i ? 'bg-primary-1 border-dashed border-accent-1' : 'bg-primary-2 border-transparent'"
    >
      <AppButton
        icon="fa-ellipsis"
        size="xs"
        color="accent-1"
        class="absolute top-0 left-0 mt-1 transform rotate-90"
        @click.stop
      />
      <AppButton v-for="die in table.dice" :key="die" :icon="die" size="xl" @click.stop />
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import AppButton from "@/components/ui/AppButton";

export default {
  components: {
    AppButton,
  },
  data() {
    return {
      tables: [
        {
          id: "91",
          dice: ["d20"],
        },
        {
          id: "92",
          dice: ["d12", "d8"],
        },
      ],
      currentTable: null,
    };
  },
  methods: {
    ...mapActions(["toggleMenu"]),
    toggleTable(i) {
      if (this.currentTable === i) {
        this.currentTable = null;
      } else {
        this.currentTable = i;
      }
    },
  },
};
</script>