<template>
  <div class="flex items-center">
    <input type="checkbox" :id="value" :name="value" :value="value" />
    <label :for="value" v-if="text" class="ml-3 text-label">{{ text }}</label>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: false
    },
    value: {
      type: String,
      required: true
    }
  }
};
</script>