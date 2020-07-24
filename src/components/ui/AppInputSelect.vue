<template>
  <div
    class="relative transition-colors duration-100 border select-none ease focus:outline-none rounded-xl tap-highlight-none focus:shadow-outline bg-primary-2 border-accent-1 text-accent-1 hover:text-accent-3 focus:text-accent-3"
    :class="isOpen ? 'text-accent-3' : 'text-accent-1' "
    tabindex="0"
    @keypress.self.space.enter="toggleOptions"
    @keydown.esc="closeOptions"
    v-click-outside="closeOptions"
  >
    <div class="w-48 px-4 py-3 cursor-pointer text-accent-3" @click="toggleOptions">{{ selected }}</div>
    <AppIcon
      icon="fa-caret-down"
      class="absolute inset-y-0 right-0 w-4 h-full mr-3 transition-transform duration-300 transform pointer-events-none ease"
      :class="{ '-rotate-180' : isOpen }"
    />
    <div
      class="absolute w-full space-y-1 transform -translate-x-1/2 left-1/2"
      :class="[{'hidden' : !isOpen}, top ? 'bottom-0 mb-14' : 'mt-2']"
    >
      <button
        class="w-full px-4 py-3 text-left rounded-lg cursor-pointer bg-primary-2 focus:outline-none"
        :class="selected === option ? 'text-highlight active:text-primary-2 focus:text-primary-2' : 'text-label focus:text-accent-3 active:text-accent-3 hover:text-accent-3 focus:shadow-outline'"
        v-for="option in options"
        :disabled="selected === option"
        :key="option"
        tabindex="0"
        @click="[selected = option, closeOptions(), $emit('input', option)]"
        @keypress.space.enter="[selected = option, closeOptions(), $emit('input', option)]"
      >{{ option }}</button>
    </div>
  </div>
</template>

<script>
import AppIcon from "@/components/ui/AppIcon";
import ClickOutside from "vue-click-outside";

export default {
  components: {
    AppIcon,
  },
  props: {
    options: {
      type: Array,
      required: true,
    },
    top: {
      type: Boolean,
      required: false,
    },
    value: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selected: this.value,
      isOpen: false,
    };
  },
  methods: {
    toggleOptions() {
      this.isOpen = this.isOpen ? false : true;
    },
    closeOptions() {
      this.isOpen = false;
    },
  },
  mounted() {
    this.$emit("input", this.selected);
    this.popupItem = this.$el;
  },
  directives: {
    ClickOutside,
  },
};
</script>