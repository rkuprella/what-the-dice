<template>
  <div class="flex items-center justify-between px-2">
    <RollMacroSlot
      v-if="isAllOptionsActive"
      :macros="getRightMacroSlotList"
      icon="fa-history"
      size="sm"
      class="self-end hidden ml-1 lg:block"
    />

    <ul class="flex flex-wrap justify-center flex-grow px-2 pb-4 lg:pb-0">
      <DieButton
        v-for="die in getAvailableDice"
        :key="die.id"
        :icon="die.icon"
        color="basic"
        class="m-2 lg:m-1"
        :label="die.name"
      />
    </ul>
    <RollMacroSlot
      v-if="isAllOptionsActive"
      right
      isPressed
      :macros="getRightMacroSlotList"
      icon="fa-star"
      size="sm"
      class="self-end hidden mr-1 lg:block"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import DieButton from "@/components/ui/DieButton";
import RollMacroSlot from "@/components/roll/RollMacroSlot";

export default {
  components: {
    DieButton,
    RollMacroSlot,
  },
  computed: {
    ...mapGetters([
      "getAvailableDice",
      "isMenuOpen",
      "isSettingsOpen",
      "isAllOptionsActive",
      "getLeftMacroSlotList",
      "getRightMacroSlotList",
    ]),
  },
  methods: {
    ...mapActions(["toggleMenu", "toggleSettings"]),
  },
};
</script>