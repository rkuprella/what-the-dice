<template>
  <div class="flex flex-col items-center justify-center space-y-4">
    <AppIcon icon="dandd" class="w-32 h-32 text-basic" />
    <AppInputSelect v-model="selected" :options="['D&D 5e', 'Shadowhunt', 'WH40k']" />
  </div>
</template>

<script>
import AppIcon from "@/components/ui/AppIcon";
import AppInputSelect from "@/components/ui/AppInputSelect";

export default {
  data() {
    return {
      selected: "D&D 5e"
    };
  },
  components: {
    AppIcon,
    AppInputSelect
  }
};
</script>