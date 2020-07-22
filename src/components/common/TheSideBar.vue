<template>
  <div class="relative w-full bg-primary-2 lg:h-full lg:w-auto">
    <ul
      class="flex flex-grow px-2 py-2 space-x-3 overflow-x-auto lg:flex-col lg:space-y-3 lg:space-x-0"
    >
      <li class="flex items-center space-x-3 lg:flex-col lg:space-y-3 lg:space-x-0">
        <AppButton size="lg" icon="meeple" color="yellow" />
        <div class="w-px h-6 bg-accent-1 lg:w-6 lg:h-px"></div>
      </li>
      <li class="flex items-center justify-center">
        <AppButton size="lg" icon="axe" color="green" />
      </li>
    </ul>
    <transition
      enter-class="opacity-0"
      enter-active-class="transition-opacity duration-150"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="transition-opacity duration-150"
      leave-to-class="opacity-0"
    >
      <AppButton
        icon="fa-thumbtack"
        size="sm"
        class="absolute lg:hidden"
        :color="isSideBarOnTopActive ? 'basic' : 'accent-1'"
        style="bottom:-3.5rem; right:0.5rem"
        v-if="isMenuOpen"
        @click="toggleSideBarOnTop"
      />
    </transition>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AppButton from "@/components/ui/AppButton";

export default {
  components: {
    AppButton
  },
  computed: {
    ...mapGetters(["isMenuOpen", "isSideBarOnTopActive"])
  },
  methods: {
    ...mapActions(["toggleTheme", "toggleSideBarOnTop"])
  }
};
</script>