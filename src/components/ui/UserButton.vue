<template>
  <button
    type="button"
    aria-label="Button"
    class="flex items-center justify-start rounded-lg select-none group focus:outline-none lg:focus:bg-primary-3 xl:w-full"
    v-on="$listeners"
    v-bind="$attrs"
  >
    <!-- icon -->
    <div class="flex items-center justify-center w-12 h-12 rounded-full" :class="'text-' + color">
      <AppIcon :icon="icon" class="w-8 h-8" />
    </div>
    <!-- label -->
    <div class="hidden ml-2 xl:block" :class="'text-' + color">{{ label }}</div>
  </button>
</template>

<script>
import AppIcon from "@/components/ui/AppIcon";

export default {
  components: {
    AppIcon,
  },
  props: {
    icon: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: false,
      default: "label",
    },
  },
  computed: {
    getIcon() {
      return this.$store.getters.getIcon(this.icon);
    },
  },
};
</script>