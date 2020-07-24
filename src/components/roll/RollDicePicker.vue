<template>
  <div class="flex flex-shrink-0 px-2 overflow-x-scroll lg:overflow-x-hidden">
    <transition-group
      tag="ul"
      enter-class="scale-50 opacity-0"
      enter-active-class="transition duration-200 ease-in transform"
      enter-to-class="scale-100 opacity-100"
      leave-class="scale-100 opacity-100"
      leave-active-class="absolute transition duration-200 ease-out transform"
      leave-to-class="scale-50 opacity-0"
      move-class="transition duration-200 ease"
      mode="out-in"
      class="flex flex-wrap justify-around flex-grow flex-shrink-0 pb-4 lg:flex-shrink lg:justify-center lg:pb-0"
    >
      <li class="m-2 lg:m-1" v-for="die in getCurrentDice" :key="die.id">
        <DieButton :icon="die.icon" color="basic" :label="die.name" />
      </li>
      <li class="flex items-center justify-center m-2 lg:m-1" key="add-die">
        <AppButton icon="fa-plus" color="accent-2" class="w-full h-full px-2" />
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DieButton from "@/components/ui/DieButton";
import AppButton from "@/components/ui/AppButton";

export default {
  components: {
    DieButton,
    AppButton,
  },
  computed: {
    ...mapGetters(["getCurrentDice"]),
  },
};
</script>