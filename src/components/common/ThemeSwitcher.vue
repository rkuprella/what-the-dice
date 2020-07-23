<template>
  <div class="flex flex-col flex-grow h-full px-2 py-2 space-y-2">
    <div class="relative flex flex-col items-center justify-center flex-grow py-2 space-y-4">
      <AppIcon icon="wtd-icon" class="w-32 h-32 text-basic" />
      <AppInputSelect v-model="selected" :options="['D&D 5e', 'Shadowhunt', 'WH40k']" />
      <AppCheckBox text="Give me all the options" id="options" v-model="options" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AppIcon from "@/components/ui/AppIcon";
import AppInputSelect from "@/components/ui/AppInputSelect";
import AppCheckBox from "@/components/ui/AppCheckBox";

export default {
  data() {
    return {
      selected: "D&D 5e",
    };
  },
  components: {
    AppIcon,
    AppInputSelect,
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
};
</script>