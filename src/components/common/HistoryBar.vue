<template>
  <div class="flex-shrink-0 w-auto h-full py-2 overflow-y-auto bg-primary-4">
    <ul class="flex flex-col justify-end flex-grow px-2 py-3 space-y-3">
      <!-- <li
        class="flex items-center justify-center"
        v-for="item in getRightMacroSlotList"
        :key="item.id"
      >
        <AppButton :icon="item.icon" :color="item.color" class="w-14" />
      </li>-->
      <li class="flex items-center justify-center pt-2">
        <AppButton icon="fa-cog" size="sm" color="accent-2" class="w-14" />
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