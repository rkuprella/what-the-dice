<template>
  <div class="flex flex-col flex-grow py-2 pt-16 lg:pt-0 bg-primary-3">
    <div class="flex flex-col flex-grow px-2 mt-3 mb-2 space-y-2 overflow-y-auto lg:mt-0">
      <h1>What the Dice</h1>
      <AppButton icon="fa-dungeon" size="xl" @click="joinRoom" />
    </div>
    <div class="flex justify-end px-2 lg:mb-2">
      <AppButton icon="d6" size="md" @click="toggleTheme" class="lg:hidden" />
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
    joinRoom() {
      const payload = {
        id: "124e12",
        name: "Temple of Vue",
        icon: "barrel",
        color: "yellow",
        users: [
          {
            id: "4910213",
            name: "Quabbe",
            icon: "axe",
          },
          {
            id: "2d2ds",
            name: "Anna",
            icon: "meeple",
          },
          {
            id: "412",
            name: "Charly24",
            icon: "feather",
          },
          {
            id: "12312",
            name: "Eb3rh4rt",
            icon: "troll",
          },
        ],
      };
      this.$store.dispatch("setCurrentRoom", payload);
    },
  },
};
</script>