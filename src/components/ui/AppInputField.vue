<template>
  <input
    :type="type"
    id="name"
    class="w-full h-16 text-lg transition-colors duration-150 bg-transparent rounded-xl focus:outline-none text-highlight focus:bg-primary-2 placeholder-label focus:shadow-outline"
    :class="centered ? 'text-center px-12' : 'pl-4 pr-12'"
    :placeholder="placeholder"
    :value="value"
    autocomplete="off"
    @input="updateValue($event.target.value)"
  />
</template>

<script>
import AppButton from "@/components/ui/AppButton";

export default {
  components: {
    AppButton
  },
  props: {
    value: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: "text"
    },
    label: {
      type: String,
      required: false
    },
    placeholder: {
      type: String,
      required: false,
      default: ""
    },
    centered: {
      type: Boolean,
      required: false
    }
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    }
  }
};
</script>