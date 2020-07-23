<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    :aria-labelledby="ariaId"
    :viewBox="getIcon.viewBox"
  >
    <desc :id="ariaId">Icon {{ getIcon.name }} by {{ getIcon.author }}</desc>
    <path :d="getIcon.path" fill="currentColor" />
  </svg>
</template>

<script>
import uniqueId from "@/mixins/uniqueId";

export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      ariaId: "",
    };
  },
  mixins: [uniqueId],
  computed: {
    getIcon() {
      const iconFound = this.$store.getters.getIcon(this.icon);
      if (iconFound) {
        return iconFound;
      } else {
        return this.$store.getters.getIcon("moon");
      }
    },
  },
  mounted() {
    this.ariaId = this.generateId();
  },
};
</script>