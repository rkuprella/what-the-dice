<template>
  <div class="flex flex-col flex-grow py-2 pt-16 lg:pt-0 bg-primary-3">
    <div class="flex flex-col flex-grow px-2 mt-3 mb-2 space-y-2 overflow-y-scroll lg:mt-0">
      <ChatMessage
        v-for="message in messages"
        :key="message.id"
        :category="message.category"
        :user="message.user"
        :userIcon="message.userIcon"
        :text="message.text"
        :userColor="message.userColor"
      />
    </div>
    <div class="relative flex px-2 lg:mb-2">
      <AppButton icon="d6" size="md" @click="toggleTheme" class="mr-2 lg:hidden" />
      <AppInputField
        v-model="text"
        type="text"
        name="chatInput"
        placeholder="Enter Message"
        class="flex-grow"
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
          <AppButton type="submit" icon="fa-plane" size="sm" class="mr-3" v-if="text" />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AppButton from "@/components/ui/AppButton";
import AppInputField from "@/components/ui/AppInputField";
import ChatMessage from "@/components/common/ChatMessage";

export default {
  components: {
    AppButton,
    AppInputField,
    ChatMessage,
  },
  data() {
    return {
      text: "",
      messages: [
        {
          id: "921",
          user: "Quabbe",
          userIcon: "axe",
          userColor: "blue",
          text: "Lorem ipsum dolor sit amet",
          category: "comment",
        },
        {
          id: "9sda21",
          user: "Server",
          userColor: "blue",
          text: "TheDude joined the room",
          category: "event",
        },
        {
          id: "9vcv21",
          user: "TheDude",
          userIcon: "axe",
          userColor: "blue",
          text: "Consequeteur?",
          category: "comment",
        },
        {
          id: "asd",
          user: "Quabbe",
          userIcon: "axe",
          userColor: "blue",
          text: "Lorem lorem :D",
          category: "comment",
        },
        {
          id: "cva",
          user: "Pit",
          userIcon: "barrel",
          userColor: "green",
          text:
            "Elipsum est lorem ipsum, lorem ipsum dolor sit amet consequeteur est lorem ipsum, lorem ipsum dolor sit amet",
          category: "comment",
        },
        {
          id: "asd2w",
          user: "Brad",
          userIcon: "troll",
          userColor: "yellow",
          text:
            "Ipsum dolor sit ... consequeteur elipsum est lorem ipsum, lorem ipsum dolor sit amet",
          category: "comment",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["getTheme"]),
  },
  methods: {
    ...mapActions(["toggleTheme"]),
  },
};
</script>