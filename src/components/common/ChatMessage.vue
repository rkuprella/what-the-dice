<template>
  <div class="flex items-center px-4 py-3 mt-auto rounded-xl" :class="getChatStyle">
    <AppIcon
      v-if="userIcon && user !== 'Quabbe'"
      :icon="userIcon"
      class="flex-shrink-0 w-10 h-10 mr-2 -ml-1"
      :class="[userColor ? 'text-' + userColor : '']"
    />
    <p>
      <span
        class="font-semibold text-red"
        v-if="category !== 'event' && user !== 'Quabbe'"
        :class="[userColor ? 'text-' + userColor : '']"
      >{{ user }}</span>
      &nbsp;
      <span>{{ text }}</span>
    </p>
  </div>
</template>

<script>
import AppIcon from "@/components/ui/AppIcon";

export default {
  components: {
    AppIcon
  },
  props: {
    category: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    user: {
      type: String,
      required: true
    },
    userIcon: {
      type: String,
      required: false
    },
    userColor: {
      type: String,
      required: false
    }
  },
  computed: {
    getChatStyle() {
      if (this.category === "event") return "text-accent-3 italic";
      if (this.user === "Quabbe") return "self-end bg-accent-1 text-highlight";
      return "bg-highlight text-primary-1 self-start";
    }
  }
};
</script>