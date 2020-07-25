<template>
  <div class="relative flex items-center justify-center flex-grow overflow-y-scroll">
    <!-- </AppTransition> -->
    <AppTransition scale>
      <RollDiceTable v-if="isAllOptionsActive" />
    </AppTransition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import RollDiceTable from "@/components/roll/RollDiceTable";
import AppTransition from "@/components/ui/AppTransition";
import AppIcon from "@/components/ui/AppIcon";

export default {
  components: {
    AppTransition,
    RollDiceTable,
    AppIcon,
  },
  computed: {
    ...mapGetters(["isAllOptionsActive"]),
  },
};
</script>