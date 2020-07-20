<template>
  <select
    name="cars"
    id="cars"
    class="px-4 py-2 text-xl border-2 bg-primary-3 border-accent-1 text-highlight rounded-xl focus:outline-none focus:shadow-outline"
    :value="value"
    @input="updateValue($event.target.value)"
  >
    <option :value="option" v-for="(option,i) in options" :key="i">{{ option }}</option>
  </select>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    }
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    }
  }
};
</script>