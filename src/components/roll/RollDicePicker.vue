<template>
  <div class="flex flex-shrink-0 px-2 overflow-x-auto lg:overflow-x-hidden">
    <ul
      class="flex flex-wrap justify-around flex-grow flex-shrink-0 pb-4 lg:flex-shrink lg:justify-center lg:pb-0"
    >
      <li class="m-2 lg:m-1" v-for="die in getAvailableDice" :key="die.id">
        <DieButton :icon="die.icon" color="basic" :label="die.name" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DieButton from "@/components/ui/DieButton";

export default {
  components: {
    DieButton,
  },
  computed: {
    ...mapGetters(["getAvailableDice"]),
  },
};
</script>