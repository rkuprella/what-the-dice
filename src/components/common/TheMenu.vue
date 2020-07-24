<template>
  <div class="flex flex-col flex-grow py-2 pt-2 lg:pt-0 bg-primary-3">
    <div class="flex items-center px-2 lg:hidden">
      <a href="#" title="What the Dice Documentation" class="flex items-center px-2 space-x-2">
        <AppIcon icon="wtd-icon" class="w-10 h-10 text-basic" />
        <span class="text-label">Documentation</span>
      </a>
    </div>
    <div
      class="flex flex-col items-center justify-center flex-grow px-4 mt-3 mb-2 space-y-4 overflow-y-scroll lg:mt-0"
    >
      <p class="font-semibold text-center text-highlight">{{ $t('createCharacterSheetIntro') }}</p>
      <div class="flex items-center space-x-2">
        <AppInputField
          v-model="userName"
          name="userName"
          placeholder="Character name"
          icon="meeple"
        />
        <AppButton
          icon="notes"
          :color="!userName ? 'accent-1' : 'highlight'"
          class="px-4 py-2"
          :disabled="!userName"
          size="lg"
          @click="joinRoom"
        />
      </div>
    </div>
    <div
      class="flex flex-col items-center justify-center flex-grow px-2 mt-3 mb-2 space-y-4 overflow-y-scroll lg:mt-0"
    >
      <p class="font-semibold text-center text-highlight">{{ $t('joinRoomIntro') }}</p>
      <div class="flex items-center space-x-2">
        <AppInputField
          v-model="roomName"
          name="roomName"
          placeholder="Room name"
          icon="fa-dungeon"
        />
        <AppButton
          icon="fa-dungeon"
          :color="!roomName ? 'accent-1' : 'highlight'"
          class="px-4 py-2"
          :disabled="!roomName"
          size="lg"
          @click="joinRoom"
        />
      </div>
    </div>
    <div class="flex justify-start px-2 lg:hidden">
      <AppButton icon="fas-moon" size="sm" @click="toggleTheme" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AppButton from "@/components/ui/AppButton";
import AppIcon from "@/components/ui/AppIcon";
import AppInputField from "@/components/ui/AppInputField";
import ChatMessage from "@/components/common/ChatMessage";

export default {
  components: {
    AppButton,
    AppIcon,
    AppInputField,
    ChatMessage,
  },
  data() {
    return {
      text: "",
      userName: "",
      roomName: "",
      roomPassword: "",
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
    moreOptions: {
      set() {
        this.$store.dispatch("toggleAllOptions");
      },
      get() {
        return this.$store.getters.isAllOptionsActive;
      },
    },
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