<template>
  <nav class="flex items-center justify-between h-12 px-2 bg-basic">
    <div class="flex items-center w-1/3 space-x-2">
      <AppButton @click="toggleMenu" icon="bars" />
    </div>
    <h1 class="flex items-center justify-center w-1/3 opacity-25">
      <img src="../../assets/images/logo-small.png" alt="What The Dice Logo" width="32" height="32" />
    </h1>
    <div class="flex items-center justify-end w-1/3 space-x-2">
      <AppButton text="Join a room" size="sm" color="success" inverted />
      <AppButton icon="fa-cog" size="sm" @click="toggleTheme" />
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AppButton from "@/components/ui/AppButton";

export default {
  components: {
    AppButton
  },
  computed: {
    ...mapGetters(["isMenuOpen"])
  },
  methods: {
    ...mapActions(["toggleTheme", "toggleMenu"])
  }
};
</script>