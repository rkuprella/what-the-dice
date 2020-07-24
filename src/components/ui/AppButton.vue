<template>
  <button
    :type="type"
    aria-label="Button"
    class="relative flex flex-col items-center justify-center transition duration-150 transform select-none focus:outline-none ease lg:focus:shadow-outline"
    :class="[ inverted ? 'bg-' + color : '', wide ? 'rounded-full h-12 flex-grow' : 'rounded-lg', { 'rounded-xl' : text }, { 'active:bg-shadow' : push && !wide }, { ' active:translate-y-2px' : push && wide }, { 'bg-shadow' : isPressed }, { 'active:scale-75 hover:scale-110' : squeeze }]"
    v-on="$listeners"
    v-bind="$attrs"
  >
    <!-- icon -->
    <div
      class="flex items-center justify-center transition duration-150 transform ease"
      :class="[ size === 'xl' ? 'w-16 h-16' : 'w-12 h-12 lg:w-10 lg:h-10', { 'text-primary-3' : inverted }, { 'active:translate-y-2px' : push }, isPressed ? 'translate-y-2px text-accent-2' : 'text-' + color ]"
      v-if="icon"
    >
      <AppIcon :icon="icon" :class="getIconSize" />
    </div>

    <!-- text -->
    <span
      v-if="text"
      class="px-3 py-1 font-bold"
      :class="['text-' + size, inverted ? 'text-primary-3' : 'text-label']"
    >{{ getText }}</span>

    <!-- badge -->
    <div v-if="badge" class="absolute bottom-0 right-0 -mb-1 -mr-1 select-none text-accent-2">
      <AppIcon :icon="badge" class="w-5 h-5 p-1 rounded-full bg-primary-3" />
    </div>
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
    text: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
      default: "button",
    },
    // sm | md | lg | xl
    size: {
      type: String,
      required: false,
      default: "md",
    },
    color: {
      type: String,
      required: false,
      default: "accent-3",
    },
    isPressed: {
      type: Boolean,
      required: false,
    },
    // Push animation when pressed
    push: {
      type: Boolean,
      required: false,
    },
    squeeze: {
      type: Boolean,
      required: false,
    },
    // Takes the full available width
    wide: {
      type: Boolean,
      required: false,
    },
    // Inverts colors
    inverted: {
      type: Boolean,
      required: false,
    },
    // adds a badge
    badge: {
      type: String,
      required: false,
    },
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
    },
  },
};
</script>