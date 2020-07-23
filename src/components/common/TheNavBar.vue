<template>
  <nav class="flex items-center justify-between px-2 h-14 bg-primary-4">
    <div class="flex items-center">
      <a href="#" title="What the Dice Documentation" class="flex items-center space-x-2">
        <AppIcon icon="wtd-icon" class="w-10 h-10 text-basic" />
        <span class="text-label">Documentation</span>
      </a>
    </div>
    <div class="flex items-center justify-end space-x-2">
      <AppButton
        text="Join a room"
        size="sm"
        color="basic"
        inverted
        @click="toggleMenu"
        v-if="!getCurrentRoom"
      />
      <AppButton
        v-else
        color="accent-2"
        size="sm"
        @click="toggleMenu"
        push
        icon="bars"
        :isPressed="isMenuOpen"
      />
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
    ...mapGetters(["isMenuOpen", "getCurrentRoom"]),
  },
  methods: {
    ...mapActions(["toggleTheme", "toggleMenu"]),
  },
};
</script>