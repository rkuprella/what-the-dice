<template>
  <div class="relative flex items-center justify-center flex-grow overflow-y-auto">
    <AppTransition scale>
      <ThemeSwitcher v-if="!isSettingsOpen" />
    </AppTransition>
    <AppTransition scale>
      <RollDiceTable v-if="isSettingsOpen" />
    </AppTransition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ThemeSwitcher from "@/components/common/ThemeSwitcher";
import RollDiceTable from "@/components/roll/RollDiceTable";
import AppTransition from "@/components/ui/AppTransition";

export default {
  components: {
    ThemeSwitcher,
    AppTransition,
    RollDiceTable
  },
  computed: {
    ...mapGetters(["isSettingsOpen"])
  }
};
</script>