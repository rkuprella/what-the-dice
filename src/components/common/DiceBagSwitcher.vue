<template>
  <div class="flex flex-col flex-grow h-full px-2 py-2 space-y-2">
    <div class="relative flex flex-col items-center justify-center flex-grow py-2 space-y-4">
      <transition
        enter-class="scale-50 opacity-0"
        enter-active-class="transition duration-150 transform ease-bounce"
        enter-to-class="scale-100 opacity-100"
        leave-class="scale-100 opacity-100"
        leave-active-class="transition duration-150 transform ease"
        leave-to-class="scale-150 opacity-0"
        mode="out-in"
      >
        <AppIcon
          :icon="getCurrentRuleset.icon"
          :key="getCurrentRuleset.icon"
          class="w-32 h-32 text-basic"
        />
      </transition>
      <h2 class="text-center text-label">{{ $t('switchDiceBags')}}</h2>
      <div class="flex items-center space-x-2">
        <AppInputSelect v-model="selected" :options="getNamesOfRulesets" />
        <AppButton icon="dice-cup" color="accent-2" badge="fas-plus" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AppIcon from "@/components/ui/AppIcon";
import AppButton from "@/components/ui/AppButton";
import AppInputSelect from "@/components/ui/AppInputSelect";

export default {
  components: {
    AppIcon,
    AppButton,
    AppInputSelect,
  },
  data() {
    return {
      selection: null,
    };
  },
  computed: {
    ...mapGetters([
      "getNameOfCurrentRuleset",
      "getNamesOfRulesets",
      "getCurrentRuleset",
    ]),
    selected: {
      get(e) {
        return !this.selection ? this.getNameOfCurrentRuleset : e;
      },
      set(e) {
        this.setCurrentRuleset(e);
      },
    },
  },
  methods: {
    ...mapActions(["setCurrentRuleset"]),
  },
};
</script>