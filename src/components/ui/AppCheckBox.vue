<template>
  <div class="flex items-center">
    <input
      type="checkbox"
      :id="id"
      :name="id"
      :value="value"
      @input="updateValue($event.target.value)"
      class="hidden"
    />
    <label :for="id" v-if="text" class="flex items-center p-2 space-x-3 cursor-pointer select-none">
      <div
        class="flex items-center justify-center w-8 h-8 border rounded-lg bg-primary-2 border-accent-1 text-accent-3 focus:outline-none focus:shadow-outline"
        tabindex="0"
        @keypress.space.enter="updateValue($event.target.value)"
      >
        <AppIcon icon="fa-check" v-show="value" class="w-4 h-4" />
      </div>
      <span class="text-lg text-label">{{ text }}</span>
    </label>
  </div>
</template>

<script>
import AppIcon from "@/components/ui/AppIcon";

export default {
  components: {
    AppIcon
  },
  props: {
    id: {
      type: String,
      required: false
    },
    text: {
      type: String,
      required: false
    },
    value: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    }
  }
};
</script>