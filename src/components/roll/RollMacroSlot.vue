<template>
  <div class="relative">
    <AppButton
      border
      @click="isPressed =! isPressed"
      :inverted="isPressed"
      color="accent-2"
      :icon="isPressed ? 'fa-sort-down' : ''"
    />
    <ul
      class="absolute bottom-0 right-0 flex flex-col mb-16 -mr-1 space-y-2"
      v-if="macros && isPressed"
    >
      <transition
        v-for="(macro,i) in macros"
        :key="macro.id"
        enter-class="scale-0"
        :enter-active-class="'transition-transform duration-200 ease-out transform delay-' + i * 50"
        enter-to-class="scale-100"
        leave-class="scale-100"
        :leave-active-class="'transition-transform duration-200 ease-in transform delay-' + i * 50"
        leave-to-class="scale-0"
      >
        <li
          class="flex items-center justify-end origin-bottom-right transform"
          v-if="macros && isPressed"
        >
          <AppButton color="danger" size="sm" icon="fa-times" @click="removeItem(i)" />
          <div class="flex items-center justify-between p-1 bg-accent-1 rounded-xl">
            <button class="py-4 pl-4 pr-2 mr-2 focus:outline-none">{{ macro.diceCode }}</button>
            <div class="overflow-hidden rounded-full bg-shadow">
              <AppButton :icon="macro.icon" size="lg" :color="macro.color" class="p-1" @click.stop />
            </div>
          </div>
        </li>
      </transition>
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