<template>
  <div
    :lang="getLanguage"
    id="app"
    class="flex flex-col h-full overflow-hidden antialiased bg-primary-3"
    style="min-height: -webkit-fill-available;"
    :data-theme="getTheme"
  >
    <a class="sr-only" href="#main">Skip to dice rollers</a>
    <!-- wrapper -->
    <transition
      enter-class="scale-75 opacity-0"
      enter-active-class="transition duration-150 ease-out transform"
      enter-to-class="scale-100 opacity-100"
      leave-class="scale-100 opacity-100"
      leave-active-class="transition duration-150 ease-in transform"
      leave-to-class="scale-75 opacity-0"
      mode="out-in"
    >
      <TheSettingsWrapper v-if="isSettingsOpen" />
      <TheRollWrapper v-else />
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TheSettingsWrapper from "@/components/common/TheSettingsWrapper";
import TheRollWrapper from "@/components/roll/TheRollWrapper";
import i18n from "@/plugins/i18n";

export default {
  name: "App",
  components: {
    TheRollWrapper,
    TheSettingsWrapper,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getTheme", "isSettingsOpen", "getLanguage"]),
  },
  methods: {
    ...mapActions(["toggleTheme", "setLanguage"]),
  },
  created() {
    // setup dark mode from local storage or prefered color scheme
    let theme = "light";
    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") === "dark") {
        theme = "dark";
      }
    } else if (!window.matchMedia) {
      return false;
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme = "dark";
    }
    if (theme === "dark") {
      this.toggleTheme();
      const theme = this.getTheme;
      localStorage.setItem("theme", theme);
    }

    // setup language from local storage
    if (localStorage.getItem("language")) {
      const language = localStorage.getItem("language");
      i18n.locale = language;
      this.setLanguage(language);
    }
  },
};
</script>