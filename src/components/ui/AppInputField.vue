<template>
  <div class="relative">
    <label :for="name" :aria-label="placeholder" class="mb-1 text-sm text-label">
      <span v-if="label">{{ label }}</span>
    </label>
    <input
      :type="type"
      :id="name"
      class="w-full h-12 text-lg transition-colors duration-150 rounded-xl focus:outline-none text-highlight placeholder-accent-2 focus:shadow-outline bg-primary-2 focus:bg-primary-1"
      :class="centered && !icon ? 'text-center pl-12 pr-12' : icon ? 'pl-12 pr-4' : 'pl-4 pr-12'"
      :placeholder="placeholder"
      :value="value"
      autocomplete="off"
      @input="updateValue($event.target.value)"
    />
    <div
      class="absolute inset-y-0 left-0 flex items-center pointer-events-none text-accent-1"
      v-if="icon"
    >
      <AppIcon :icon="icon" class="w-6 h-6 ml-3" />
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/ui/AppButton";
import AppIcon from "@/components/ui/AppIcon";

export default {
  components: {
    AppButton,
    AppIcon,
  },
  props: {
    value: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "text",
    },
    label: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
    centered: {
      type: Boolean,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>