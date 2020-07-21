<template>
  <div
    class="relative transition-colors duration-100 border select-none ease focus:outline-none rounded-xl tap-highlight-none focus:shadow-outline bg-primary-2 border-accent-1 text-accent-1 hover:text-accent-3 focus:text-accent-3"
    :class="isOpen ? 'text-accent-3' : 'text-accent-1' "
    tabindex="0"
    @keypress.self.space.enter="toggleOpen"
    v-click-outside="closeOpen"
  >
    <div class="w-48 px-4 py-3 cursor-pointer text-accent-3" @click="toggleOpen">{{ selected }}</div>
    <AppIcon
      icon="fa-caret-down"
      class="absolute inset-y-0 right-0 w-4 h-6 h-full mr-3 transition-transform duration-300 transform pointer-events-none ease"
      :class="{ '-rotate-180' : isOpen }"
    />
    <div
      class="absolute w-full space-y-1 overflow-hidden transform -translate-x-1/2 left-1/2"
      :class="[{'hidden' : !isOpen}, top ? 'bottom-0 mb-14' : 'mt-2']"
    >
      <div
        class="px-4 py-3 rounded-lg cursor-pointer text-label hover:text-accent-3 bg-primary-2 focus:outline-none focus:text-accent-3 active:text-accent-3"
        v-for="option in options"
        :key="option"
        tabindex="0"
        @click="[ selected = option, isOpen = false, $emit('input', option)]"
        @keypress.space.enter="[ selected = option, isOpen = false, $emit('input', option)]"
      >{{ option }}</div>
    </div>
  </div>
</template>

<script>
import AppIcon from "@/components/ui/AppIcon";
import ClickOutside from "vue-click-outside";

export default {
  components: {
    AppIcon
  },
  props: {
    options: {
      type: Array,
      required: true
    },
    top: {
      type: Boolean,
      required: false
    }
  },
  data() {
    return {
      selected: this.options.length > 0 ? this.options[0] : null,
      isOpen: false
    };
  },
  methods: {
    toggleOpen() {
      this.isOpen = this.isOpen ? false : true;
    },
    closeOpen() {
      this.isOpen = false;
    }
  },
  mounted() {
    this.$emit("input", this.selected);
    this.popupItem = this.$el;
  },
  directives: {
    ClickOutside
  }
};
</script>