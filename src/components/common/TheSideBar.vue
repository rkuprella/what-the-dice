<template>
  <div class="relative w-full bg-basic">
    <ul class="flex flex-grow px-2 py-2 space-x-3 overflow-x-auto">
      <li class="flex items-center space-x-3">
        <AppButton size="lg" icon="meeple" color="yellow" />
        <div class="w-px h-6 bg-accent-3"></div>
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
        class="absolute"
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