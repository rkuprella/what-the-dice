<template>
  <div class="flex flex-col items-center justify-center space-y-4">
    <img src="../../assets/images/logo-basic.png" alt="What The Dice Logo" width="312" height="128" />
    <AppInputSelect v-model="selected" :options="['D&D 5e', 'Shadowhunt', 'WH40k']" />

    <AppCheckBox text="Give me all the options" id="options" v-model="options" />
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
      selected: "D&D 5e"
    };
  },
  components: {
    AppIcon,
    AppInputSelect,
    AppCheckBox
  },
  computed: {
    options: {
      set() {
        this.$store.dispatch("toggleAllOptions");
      },
      get() {
        return this.$store.getters.isAllOptionsActive;
      }
    }
  }
};
</script>