<template>
  <div
    class="relative w-full shadow-md lg:shadow-none lg:flex lg:flex-col lg:items-center lg:justify-between lg:overflow-y-scroll bg-gradient border-primary-3 lg:border-t-2 lg:h-full lg:w-auto"
  >
    <ul
      class="flex flex-grow px-2 py-2 space-x-1 overflow-x-scroll lg:w-full lg:flex-col lg:space-y-1 lg:space-x-0"
    >
      <!-- room -->
      <li class="flex items-center space-x-2 lg:flex-col lg:space-y-4 lg:space-x-0 lg:my-3">
        <div class="xl:justify-start xl:w-full xl:flex xl:items-center">
          <AppButton :icon="getCurrentRoom.icon" :color="getCurrentRoom.color" />
          <div
            class="hidden ml-2 text-sm font-semibold xl:flex-col text-yellow xl:flex xl:flex-grow"
          >
            <span>{{ getCurrentRoom.name }}</span>
            <span class="text-xs text-label">Forge</span>
          </div>
          <AppButton
            icon="fa-signout"
            size="sm"
            color="label"
            class="hidden transform rotate-180 xl:block"
            @click="leaveRoom"
          />
        </div>
        <div class="w-px h-6 bg-accent-1 lg:w-6 lg:h-px xl:w-16"></div>
      </li>
      <!-- users -->
      <li
        class="flex items-center justify-center"
        v-for="user in getCurrentRoom.users"
        :key="user.id"
      >
        <UserButton :icon="user.icon" :label="user.name" />
      </li>
    </ul>
    <!-- pin side bar button -->
    <transition
      enter-class="opacity-0"
      enter-active-class="transition-opacity duration-150"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="transition-opacity duration-150"
      leave-to-class="opacity-0"
    >
      <div
        class="absolute xl:self-end xl:mr-4 lg:static lg:mb-4"
        v-if="isMenuOpen"
        style="bottom:-3.5rem; right:0.5rem"
      >
        <AppButton
          icon="fa-thumbtack"
          size="sm"
          class="transform rotate-45 lg:rotate-0"
          :color="isSideBarOnTopActive ? 'accent-3' : 'accent-1'"
          @click="toggleSideBarOnTop"
        />
      </div>
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
    ...mapGetters(["isMenuOpen", "isSideBarOnTopActive", "getCurrentRoom"]),
  },
  methods: {
    ...mapActions(["toggleTheme", "toggleSideBarOnTop", "closeMenu"]),
    leaveRoom() {
      const payload = null;
      this.$store.dispatch("setCurrentRoom", payload);
    },
  },
};
</script>