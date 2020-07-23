<template>
  <div class="flex flex-shrink-0 px-2 lg:mt-2">
    <div class="relative flex-grow w-full">
      <div class="absolute inset-y-0 left-0 flex items-center">
        <transition
          enter-class="opacity-0"
          enter-active-class="transition-opacity duration-150"
          enter-to-class="opacity-100"
          leave-class="opacity-100"
          leave-active-class="transition-opacity duration-150 delay-200"
          leave-to-class="opacity-0"
        >
          <AppButton
            :color="isSettingsOpen ? 'basic' : 'accent-2'"
            size="sm"
            class="ml-1"
            icon="fa-keyboard"
            @click="toggleSettings"
          />
        </transition>
      </div>
      <AppInputField
        centered
        type="text"
        name="diceCode"
        button="fa-times"
        placeholder="Enter Dice Code"
        v-model="textInput"
      />
      <div class="absolute inset-y-0 right-0 flex items-center">
        <transition
          enter-class="opacity-0"
          enter-active-class="transition-opacity duration-150"
          enter-to-class="opacity-100"
          leave-class="opacity-100"
          leave-active-class="transition-opacity duration-150 delay-200"
          leave-to-class="opacity-0"
        >
          <AppButton
            type="submit"
            icon="fa-times"
            color="accent-2"
            size="sm"
            class="mr-1"
            v-if="textInput"
            @click="textInput = ''"
          />
        </transition>
      </div>
    </div>
    <RollButton class="flex-grow-0 hidden w-24 ml-4 lg:flex" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AppButton from "@/components/ui/AppButton";
import RollButton from "@/components/roll/RollButton";
import AppInputField from "@/components/ui/AppInputField";

export default {
  components: {
    AppButton,
    AppInputField,
    RollButton,
  },
  data() {
    return {
      textInput: "",
    };
  },
  computed: {
    ...mapGetters(["isSettingsOpen"]),
  },
  methods: {
    ...mapActions(["toggleSettings"]),
  },
};
</script>