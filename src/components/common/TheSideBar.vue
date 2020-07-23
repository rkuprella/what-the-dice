<template>
  <div
    class="relative w-full border-b-2 lg:overflow-y-auto bg-primary-4 border-primary-3 lg:border-none lg:h-full lg:w-auto"
  >
    <ul
      class="flex flex-grow px-2 py-2 space-x-1 overflow-x-auto lg:flex-col lg:space-y-1 lg:space-x-0 lg:overflow-x-visible"
    >
      <li class="flex items-center space-x-2 lg:flex-col lg:space-y-4 lg:space-x-0 lg:my-3">
        <div class="xl:justify-start xl:w-full xl:flex xl:items-center xl:pl-2">
          <AppButton size="lg" icon="meeple" color="yellow" />
          <div class="hidden ml-3 text-lg font-semibold text-yellow xl:block">Temple of Vue</div>
        </div>
        <div class="w-px h-6 bg-accent-1 lg:w-6 lg:h-px xl:w-16"></div>
      </li>
      <li class="flex items-center justify-center" v-for="n in 6" :key="n">
        <UserButton icon="axe" label="Axewielder" />
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
import UserButton from "@/components/ui/UserButton";

export default {
  components: {
    AppButton,
    UserButton,
  },
  computed: {
    ...mapGetters(["isMenuOpen", "isSideBarOnTopActive"]),
  },
  methods: {
    ...mapActions(["toggleTheme", "toggleSideBarOnTop"]),
  },
};
</script>