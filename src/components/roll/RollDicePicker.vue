<template>
  <div class="flex px-2">
    <ul class="flex flex-wrap justify-around flex-grow pb-4 lg:justify-center lg:pb-0">
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