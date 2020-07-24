<template>
  <div class="relative flex items-center justify-center flex-grow overflow-y-scroll">
    <!-- <AppTransition scale> -->
    <DiceBagSwitcher v-if="!isSettingsOpen" />
    <!-- </AppTransition> -->
    <AppTransition scale>
      <RollDiceTable v-if="isSettingsOpen" />
    </AppTransition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DiceBagSwitcher from "@/components/common/DiceBagSwitcher";
import RollDiceTable from "@/components/roll/RollDiceTable";
import AppTransition from "@/components/ui/AppTransition";

export default {
  components: {
    DiceBagSwitcher,
    AppTransition,
    RollDiceTable,
  },
  computed: {
    ...mapGetters(["isSettingsOpen"]),
  },
};
</script>