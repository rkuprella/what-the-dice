<template>
  <nav class="flex items-center justify-between h-16 px-2 bg-primary-4">
    <div class="flex items-center">
      <a href="#" title="What the Dice Documentation" class="flex items-center px-2 space-x-2">
        <AppIcon icon="wtd-icon" class="w-10 h-10 text-basic" />
      </a>
    </div>
    <div class="flex items-center justify-end px-2">
      <AppButton
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