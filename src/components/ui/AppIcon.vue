<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="desc"
    :viewBox="getIcon.viewBox"
  >
    <desc id="desc">Icon {{ getIcon.name }} by {{ getIcon.author }}</desc>
    <path :d="getIcon.path" fill="currentColor" />
  </svg>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  computed: {
    getIcon() {
      const iconFound = this.$store.getters.getIcon(this.icon);
      if (iconFound) {
        return iconFound;
      } else {
        return this.$store.getters.getIcon("moon");
      }
    }
  }
};
</script>