<template>
  <transition-group v-if="group"></transition-group>
  <transition
    :enter-class="scale ? 'scale-50 opacity-0' : fade ? 'opacity-0' : ''"
    enter-active-class="transition duration-150 ease-out transform"
    :enter-to-class="scale ? 'scale-100 opacity-100' : fade ? 'opacity-100' : ''"
    :leave-class="scale ? 'scale-100 opacity-100' : fade ? 'opacity-100' : ''"
    leave-active-class="absolute inset-0 transition duration-150 ease-in transform"
    :leave-to-class="scale ? 'scale-50 opacity-0' : fade ? 'opacity-0' : ''"
    v-else
  >
    <slot></slot>
  </transition>
</template>

<script>
export default {
  props: {
    group: {
      type: Boolean,
      required: false
    },
    scale: {
      type: Boolean,
      required: false
    },
    fade: {
      type: Boolean,
      required: false
    },
    translateX: {
      type: Boolean,
      required: false
    },
    translateY: {
      type: Boolean,
      required: false
    },
    duration: {
      type: String,
      required: false,
      default: "150"
    },
    delay: {
      type: String,
      required: false,
      default: "0"
    }
  },
  computed: {
    getTransitionStyle() {
      let transitionStyle = "";
      if (this.scale) transitionStyle += "scale-50 ";
      if (this.fade) transitionStyle += "opacity-0";
      return transitionStyle;
    }
  }
};
</script>