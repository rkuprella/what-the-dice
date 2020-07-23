<template>
  <div
    v-if="getCurrentRoom"
    class="relative w-full border-b-2 lg:overflow-y-auto bg-primary-4 border-primary-3 lg:border-none lg:h-full lg:w-auto"
  >
    <ul
      class="flex flex-grow px-2 py-2 space-x-1 overflow-x-auto lg:flex-col lg:space-y-1 lg:space-x-0"
    >
      <li class="flex items-center space-x-2 lg:flex-col lg:space-y-4 lg:space-x-0 lg:my-3">
        <div class="xl:justify-start xl:w-full xl:flex xl:items-center xl:pl-2">
          <AppButton :icon="getCurrentRoom.icon" :color="getCurrentRoom.color" />
          <div
            class="hidden ml-3 text-sm font-semibold xl:flex-col text-yellow xl:flex xl:flex-grow"
          >
            <span>{{ getCurrentRoom.name }}</span>
            <span class="text-xs text-label">Forge</span>
          </div>
          <AppButton
            icon="fa-signout"
            size="sm"
            color="label"
            class="hidden mt-1 transform rotate-180 xl:block"
            @click="leaveRoom"
          />
        </div>
        <div class="w-px h-6 bg-accent-1 lg:w-6 lg:h-px xl:w-16"></div>
      </li>
      <li
        class="flex items-center justify-center"
        v-for="user in getCurrentRoom.users"
        :key="user.id"
      >
        <UserButton :icon="user.icon" :label="user.name" />
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
    ...mapGetters(["isMenuOpen", "isSideBarOnTopActive", "getCurrentRoom"]),
  },
  methods: {
    ...mapActions(["toggleTheme", "toggleSideBarOnTop"]),
    leaveRoom() {
      const payload = null;
      this.$store.dispatch("setCurrentRoom", payload);
    },
  },
};
</script>