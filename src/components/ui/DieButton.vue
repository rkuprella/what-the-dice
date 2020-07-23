<template>
  <button
    type="button"
    aria-label="Button"
    class="relative flex flex-col items-center justify-center transition duration-150 transform rounded-lg select-none focus:outline-none ease lg:focus:shadow-outline"
    v-on="$listeners"
    v-bind="$attrs"
  >
    <!-- icon -->
    <div
      class="flex items-center justify-center transition duration-150 transform ease"
      :class="'text-' + color"
      v-if="icon"
    >
      <AppIcon :icon="icon" class="w-16 h-16 lg:w-12 lg:h-12" />
    </div>
    <!-- label -->
    <div
      v-if="label"
      class="absolute bottom-0 px-2 py-1 -mb-4 text-sm transform -translate-x-1/2 rounded-lg pointer-events-none select-none lg:translate-x-0 lg:static lg:mb-0 left-1/2 bg-primary-2 lg:bg-transparent text-label"
    >{{ label }}</div>
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
      required: false,
    },
    label: {
      type: String,
      required: false,
    },
    color: {
      type: String,
      required: false,
      default: "accent-3",
    },
  },
  computed: {
    getIcon() {
      return this.$store.getters.getIcon(this.icon);
    },
  },
};
</script>