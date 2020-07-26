<template>
  <div class="flex flex-col flex-grow overflow-hidden">
    <div class="hidden lg:block">
      <TheNavBar />
    </div>
    <!-- wrapper -->

    <div class="relative flex flex-grow overflow-hidden">
      <!-- roll history -->
      <HistoryBar class="hidden lg:flex" />

      <!-- main area -->
      <div
        class="flex flex-col flex-grow max-w-6xl pb-2 mx-auto lg:pb-4"
        :class="[isSideBarOnTopActive && getCurrentRoom ? 'pt-20 lg:pt-0' : 'pt-2 lg:pt-0']"
      >
        <RollScrollArea />
        <!-- <div class="flex flex-grow overflow-hidden">
          <RollDiceSetBar class="hidden lg:flex" v-if="isAllOptionsActive" />
        </div>-->
        <RollDicePicker id="main" />
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
        enter-class="-translate-x-full lg:translate-x-full"
        enter-active-class="transition-transform duration-150 ease-out transform"
        enter-to-class="translate-x-0"
        leave-class="translate-x-0"
        leave-active-class="transition-transform duration-150 ease-in transform"
        leave-to-class="-translate-x-full lg:translate-x-full"
      >
        <div
          class="absolute inset-0 flex flex-grow mr-16 lg:ml-auto lg:mr-0 sm:mr-auto sm:w-84 lg:relative lg:flex-grow-0 lg:flex-shrink-0"
          v-show="isMenuOpen"
        >
          <transition
            enter-class="translate-x-full"
            enter-active-class="transition-transform duration-150 ease-out transform"
            enter-to-class="translate-x-0"
            leave-class="translate-x-0"
            leave-active-class="transition-transform duration-150 ease-in transform"
            leave-to-class="translate-x-full"
            mode="out-in"
          >
            <TheChat v-if="getCurrentRoom" />
            <TheMenu v-else />
          </transition>
        </div>
      </transition>

      <transition
        enter-class="-translate-y-full lg:translate-y-0 lg:translate-x-full"
        enter-active-class="transition-transform duration-150 ease-out transform"
        enter-to-class="translate-0"
        leave-class="translate-0"
        leave-active-class="transition-transform duration-150 ease-in transform"
        leave-to-class="-translate-y-full lg:translate-y-0 lg:translate-x-full"
      >
        <div
          class="absolute inset-x-0 top-0 z-20 flex-shrink-0 lg:static lg:w-18 xl:w-56"
          v-if="(isMenuOpen || isSideBarOnTopActive) && getCurrentRoom"
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
import TheMenu from "@/components/common/TheMenu";
import RollDiceCode from "@/components/roll/RollDiceCode";
import RollScrollArea from "@/components/roll/RollScrollArea";
import RollDicePicker from "@/components/roll/RollDicePicker";
import RollMenu from "@/components/roll/RollMenu";
import TheChat from "@/components/common/TheChat";
import TheSideBar from "@/components/common/TheSideBar";
import RollDiceSetBar from "@/components/roll/RollDiceSetBar";
import HistoryBar from "@/components/common/HistoryBar";
import TheSettingsWrapper from "@/components/common/TheSettingsWrapper";

export default {
  name: "App",
  components: {
    TheNavBar,
    TheMenu,
    RollDiceCode,
    RollScrollArea,
    RollDicePicker,
    RollMenu,
    TheChat,
    TheSideBar,
    RollDiceSetBar,
    HistoryBar,
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
      "getCurrentRoom",
      "isSettingsOpen",
    ]),
  },
  methods: {
    ...mapActions(["closeMenu", "toggleTheme"]),
  },
};
</script>