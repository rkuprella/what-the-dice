<template>
  <div class="flex items-center justify-between h-16 px-4 space-x-2">
    <AppButton push icon="fa-keyboard" @click="toggleSettings" />
    <transition
      enter-class="scale-50 translate-y-1/2 opacity-0"
      enter-active-class="transition duration-150 ease-out transform"
      enter-to-class="scale-100 translate-y-0 opacity-100"
      leave-class="scale-100 translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in transform"
      leave-to-class="scale-50 translate-y-1/2 opacity-0"
      mode="out-in"
    >
      <div v-if="isSettingsOpen" class="flex items-center justify-between flex-grow space-x-2">
        <RollMacroSlot :macros="getRightMacroSlotList" />
        <AppButton text="Roll" push wide inverted />
        <RollMacroSlot right isPressed :macros="getRightMacroSlotList" />
      </div>
    </transition>
    <AppButton @click="toggleMenu" push icon="bars" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AppButton from "@/components/ui/AppButton";
import RollMacroSlot from "@/components/roll/RollMacroSlot";

export default {
  components: {
    AppButton,
    RollMacroSlot
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      "isSettingsOpen",
      "getLeftMacroSlotList",
      "getRightMacroSlotList"
    ])
  },
  methods: {
    ...mapActions(["toggleMenu", "toggleSettings"])
  }
};
</script>