<template>
  <div class="flex-shrink-0 w-auto h-full py-2 overflow-y-scroll">
    <ul class="flex flex-col flex-grow px-2 py-2 space-y-3">
      <li
        class="flex items-center justify-center"
        v-for="item in getRightMacroSlotList"
        :key="item.id"
      >
        <AppButton :icon="item.icon" :color="item.color" />
      </li>
      <li class="flex items-center justify-center" key="addSet">
        <AppButton icon="fa-plus" color="accent-1" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AppButton from "@/components/ui/AppButton";

export default {
  components: {
    AppButton,
  },
  computed: {
    ...mapGetters([
      "isMenuOpen",
      "isSettingsOpen",
      "isAllOptionsActive",
      "getLeftMacroSlotList",
      "getRightMacroSlotList",
    ]),
  },
};
</script>