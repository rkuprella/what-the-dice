<template>
  <div class="flex items-center justify-between h-16 px-4 space-x-2">
    <AppButton push icon="fa-keyboard" @click="toggleSettings" :isPressed="isSettingsOpen" />
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
        <RollMacroSlot v-if="isAllOptionsActive" :macros="getRightMacroSlotList" icon="fa-history" />
        <AppButton text="Roll" wide inverted @click="[null, playSound('shake-and-roll')]" />
        <RollMacroSlot
          v-if="isAllOptionsActive"
          right
          isPressed
          :macros="getRightMacroSlotList"
          icon="fa-star"
        />
      </div>
    </transition>
    <AppButton @click="toggleMenu" push icon="bars" :isPressed="isMenuOpen" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AppButton from "@/components/ui/AppButton";
import RollMacroSlot from "@/components/roll/RollMacroSlot";
import soundMixin from "@/mixins/soundMixin";

export default {
  components: {
    AppButton,
    RollMacroSlot
  },
  mixins: [soundMixin],
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      "isMenuOpen",
      "isSettingsOpen",
      "isAllOptionsActive",
      "getLeftMacroSlotList",
      "getRightMacroSlotList"
    ])
  },
  methods: {
    ...mapActions(["toggleMenu", "toggleSettings"])
  }
};
</script>