<template>
  <div class="flex items-center justify-between flex-shrink-0 h-16 px-2 space-x-3">
    <RollMacroSlot v-if="isAllOptionsActive" :macros="getRightMacroSlotList" icon="fa-history" />
    <RollButton />
    <RollMacroSlot
      v-if="isAllOptionsActive"
      right
      isPressed
      :macros="getRightMacroSlotList"
      icon="fa-star"
    />
    <AppButton @click="toggleMenu" push icon="bars" :isPressed="isMenuOpen" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AppButton from "@/components/ui/AppButton";
import RollButton from "@/components/roll/RollButton";
import RollMacroSlot from "@/components/roll/RollMacroSlot";
import soundMixin from "@/mixins/soundMixin";

export default {
  components: {
    AppButton,
    RollMacroSlot,
    RollButton,
  },
  mixins: [soundMixin],
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      "isMenuOpen",
      "isAllOptionsActive",
      "getLeftMacroSlotList",
      "getRightMacroSlotList",
    ]),
  },
  methods: {
    ...mapActions(["toggleMenu"]),
  },
};
</script>