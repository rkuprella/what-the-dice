<template>
  <div
    id="app"
    class="flex flex-col h-screen overflow-hidden antialiased bg-primary-3"
    :data-theme="getTheme"
  >
    <div class="hidden lg:block">
      <TheNavBar />
    </div>
    <!-- wrapper -->
    <div class="relative flex flex-grow overflow-hidden">
      <!-- main area -->
      <div
        class="flex flex-col flex-grow pb-2 lg:pb-4"
        :class="[isSideBarOnTopActive ? 'pt-18 lg:pt-2' : 'pt-2', isMenuOpen ? 'lg:w-2/3' : 'lg:max-w-6xl lg:mx-auto']"
      >
        <div class="flex flex-grow overflow-hidden">
          <RollDiceSetBar class="hidden lg:flex" v-if="isAllOptionsActive" />
          <RollScrollArea />
          <RollDiceSetBar class="hidden lg:flex" v-if="isAllOptionsActive" />
        </div>
        <RollDicePicker />
        <RollDiceCode class="order-first lg:order-none" />
        <RollMenu class="lg:hidden" />
      </div>

      <!-- side area -->
      <transition
        enter-class="opacity-0"
        enter-active-class="transition-opacity duration-300"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="transition-opacity duration-300 pointer-events-none"
        leave-to-class="opacity-0"
      >
        <button
          class="absolute inset-0 w-full h-full bg-shadow focus:outline-none lg:hidden"
          v-if="isMenuOpen"
          @click="closeMenu"
        ></button>
      </transition>

      <transition
        enter-class="-translate-x-full lg:translate-x-0"
        enter-active-class="transition-transform duration-150 ease-out transform lg:duration-0 lg:transition-none"
        enter-to-class="translate-x-0"
        leave-class="translate-x-0"
        leave-active-class="transition-transform duration-150 ease-in transform lg:duration-0 lg:transition-none"
        leave-to-class="-translate-x-full lg:translate-x-0"
      >
        <div
          class="absolute inset-0 flex flex-grow h-full mr-16 bg-primary-3 sm:mr-auto sm:w-92 lg:relative lg:flex-grow-0 lg:flex-shrink-0"
          v-show="isMenuOpen"
        >
          <TheChat />
        </div>
      </transition>

      <transition
        enter-class="-translate-y-full lg:translate-x-full lg:translate-y-0"
        enter-active-class="transition-transform duration-150 ease-out transform lg:duration-0 lg:transition-none"
        enter-to-class="translate-y-0 lg:translate-x-0 lg:translate-y-0"
        leave-class="translate-y-0 lg:translate-x-0 lg:translate-y-0"
        leave-active-class="transition-transform duration-150 ease-in transform lg:duration-0 lg:transition-none"
        leave-to-class="-translate-y-full lg:translate-x-full lg:translate-y-0"
      >
        <div
          class="absolute inset-x-0 top-0 z-20 flex-shrink-0 lg:static lg:w-18 xl:w-64"
          v-show="isMenuOpen || isSideBarOnTopActive"
        >
          <TheSideBar />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TheNavBar from "@/components/common/TheNavBar";
import RollDiceCode from "@/components/roll/RollDiceCode";
import RollScrollArea from "@/components/roll/RollScrollArea";
import RollDicePicker from "@/components/roll/RollDicePicker";
import RollMenu from "@/components/roll/RollMenu";
import TheChat from "@/components/common/TheChat";
import TheSideBar from "@/components/common/TheSideBar";
import RollDiceSetBar from "@/components/roll/RollDiceSetBar";

export default {
  name: "App",
  components: {
    TheNavBar,
    RollDiceCode,
    RollScrollArea,
    RollDicePicker,
    RollMenu,
    TheChat,
    TheSideBar,
    RollDiceSetBar,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      "isMenuOpen",
      "getTheme",
      "isSideBarOnTopActive",
      "isAllOptionsActive",
    ]),
  },
  methods: {
    ...mapActions(["closeMenu", "toggleTheme"]),
  },
  created() {
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
  },
};
</script>