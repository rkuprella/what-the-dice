<template>
  <button
    :type="type"
    aria-label="Button"
    class="flex flex-col items-center justify-center overflow-hidden focus:outline-none focus:shadow-outline"
    :class="[ inverted ? 'bg-' + color : '', border ? 'border-2 border-accent-1 w-12 h-12 rounded-full' : '', wide ? 'rounded-full h-16 flex-grow' : 'rounded-lg', { 'transition-colors duration-150 ease active:bg-shadow' : push && !wide }, { 'transition-transform duration-100 ease transform active:translate-y-2px' : push && wide }]"
    v-on="$listeners"
    v-bind="$attrs"
  >
    <!-- icon -->
    <div
      class="flex items-center justify-center"
      :class="[ size === 'xl' ? 'w-16 h-16' : 'w-12 h-12', inverted ? 'text-primary-3' : 'text-' + color, { 'transition-transform duration-100 ease transform active:translate-y-2px' : push }]"
      v-if="icon"
    >
      <AppIcon :icon="icon" :class="getIconSize" />
    </div>

    <!-- text -->
    <span
      v-if="text"
      class="px-2 font-bold"
      :class="[inverted ? 'text-primary-3' : 'text-label', icon && text ? 'text-lg mt-1' : 'text-xl']"
    >{{ getText }}</span>
  </button>
</template>

<script>
import AppIcon from "@/components/ui/AppIcon";

export default {
  components: {
    AppIcon
  },
  props: {
    icon: {
      type: String,
      required: false
    },
    text: {
      type: String,
      required: false
    },
    type: {
      type: String,
      required: false,
      default: "button"
    },
    // sm | md | lg | xl
    size: {
      type: String,
      required: false,
      default: "md"
    },
    color: {
      type: String,
      required: false,
      default: "accent-3"
    },
    // Push animation when pressed
    push: {
      type: Boolean,
      required: false
    },
    // Only borders, no bg
    border: {
      type: Boolean,
      required: false
    },
    // Takes the full available width
    wide: {
      type: Boolean,
      required: false
    },
    // Inverts colors
    inverted: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    getIconSize() {
      if (this.size === "xs") return "w-4 h-4";
      if (this.size === "sm") return "w-6 h-6";
      if (this.size === "lg") return "w-12 h-12";
      if (this.size === "xl") return "w-16 h-16";
      return "w-8 h-8";
    },
    getIcon() {
      return this.$store.getters.getIcon(this.icon);
    },
    getText() {
      return this.text.toUpperCase();
    }
  }
};
</script>