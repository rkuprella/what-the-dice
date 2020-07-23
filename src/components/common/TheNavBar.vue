<template>
  <nav class="flex items-center justify-between px-2 border-b-2 h-14 bg-primary-4 border-primary-3">
    <div class="flex items-center space-x-2">
      <AppIcon icon="wtd-icon" class="w-10 h-10 text-basic" />
    </div>
    <div class="flex items-center justify-end space-x-2">
      <AppButton text="Join a room" size="sm" color="basic  " inverted @click="toggleMenu" />
      <AppButton icon="fa-cog" size="sm" @click="toggleTheme" />
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AppButton from "@/components/ui/AppButton";
import AppIcon from "@/components/ui/AppIcon";

export default {
  components: {
    AppButton,
    AppIcon,
  },
  computed: {
    ...mapGetters(["isMenuOpen"]),
  },
  methods: {
    ...mapActions(["toggleTheme", "toggleMenu"]),
  },
};
</script>