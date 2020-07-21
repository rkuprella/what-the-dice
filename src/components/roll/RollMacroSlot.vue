<template>
  <div class="relative">
    <AppButton
      @click="isPressed =! isPressed"
      push
      color="accent-3"
      :icon="icon"
      :isPressed="isPressed"
    />
    <ul
      class="absolute bottom-0 flex flex-col mb-16 space-y-2"
      :class="right ? '-mr-1 right-0' : '-ml-1 left-0'"
      v-if="macros && isPressed"
    >
      <li
        class="flex items-center justify-end"
        :class="right ? 'origin-bottom-right ' : 'origin-bottom-left flex-row-reverse'"
      >
        <div
          class="flex items-center justify-between p-1 bg-basic rounded-xl"
          :class="right ? '' : 'flex-row-reverse'"
        >
          <button class="py-4 pl-4 pr-2 mr-2 focus:outline-none">Add Set</button>
          <div class="overflow-hidden rounded-full">
            <AppButton icon="fa-plus" size="lg" color="primary-1" class="p-1" @click.stop />
          </div>
        </div>
      </li>
      <li
        v-for="(macro,i) in macros"
        :key="macro.id"
        class="flex items-center justify-end"
        :class="right ? 'origin-bottom-right ' : 'origin-bottom-left flex-row-reverse'"
      >
        <AppButton color="danger" size="sm" icon="fa-times" @click="removeItem(i)" />
        <div
          class="flex items-center justify-between p-1 bg-accent-1 rounded-xl"
          :class="right ? '' : 'flex-row-reverse'"
        >
          <button class="py-4 pl-4 pr-2 mr-2 focus:outline-none">{{ macro.diceCode }}</button>
          <div class="overflow-hidden rounded-full bg-shadow">
            <AppButton :icon="macro.icon" size="lg" :color="macro.color" class="p-1" @click.stop />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AppButton from "@/components/ui/AppButton";

export default {
  components: {
    AppButton
  },
  props: {
    right: {
      type: Boolean,
      required: false
    },
    macros: {
      type: Array,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isPressed: false
    };
  },
  methods: {
    removeItem(index) {
      this.macros.splice(index, 1);
    }
  }
};
</script>