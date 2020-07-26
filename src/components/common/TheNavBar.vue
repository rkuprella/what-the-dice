<template>
  <nav class="flex items-center justify-between h-16 px-2 bg-primary-4">
    <div class="flex items-center">
      <a
        href="https://whatthedice.com"
        title="What the Dice - Documentation"
        class="flex items-center py-1 pl-2 pr-3 space-x-2 transition-colors duration-150 rounded-lg focus:shadow-outline focus:outline-none group hover:bg-brand text-brand hover:text-accent-3 focus:text-accent-3 focus:bg-brand tap-highlight-none"
      >
        <AppIcon icon="wtd-icon" class="w-10 h-10" />
        <h1
          class="flex items-center space-x-1 font-semibold transition duration-150 transform opacity-0 group-hover:opacity-100 text-label group-hover:text-accent-3 group-focus:text-accent-3 group-focus:opacity-100"
        >
          <span>{{ $t('whatTheDice')}} - Docs</span>
          <AppIcon icon="link" class="w-4 h-4" />
        </h1>Huhu
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