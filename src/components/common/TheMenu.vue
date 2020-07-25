<template>
  <div class="flex flex-col flex-grow pt-2 pb-4 lg:pt-0 bg-primary-3">
    <div class="flex items-center px-2 lg:hidden">
      <a
        href="https://whatthedice.com"
        title="What the Dice - Documentation"
        class="flex items-center px-2 py-1 space-x-2"
      >
        <AppIcon icon="wtd-icon" class="w-10 h-10 text-basic" />
        <h1 class="flex items-center space-x-1 font-semibold text-label">
          <span>{{ $t('whatTheDice')}} - Docs</span>
          <AppIcon icon="link" class="w-4 h-4" />
        </h1>
      </a>
    </div>
    <DiceBagSwitcher />
    <!-- <div
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
    </div>-->
    <div class="flex flex-col space-y-4 lg:items-center">
      <AppIcon icon="fa-dungeon" class="self-center w-16 h-16 text-accent-1" />
      <h2 class="text-center text-label">{{$t('joinRoomIntro')}}</h2>
      <div class="relative flex justify-between px-2">
        <AppButton
          icon="fa-cog"
          size="sm"
          color="accent-2"
          @click="toggleSettings"
          class="mr-2 lg:hidden"
        />
        <AppButton :text="$t('joinRoom')" size="xl" wide color="basic" inverted />
        <div class="hidden w-12 ml-2 sm:block lg:hidden"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AppButton from "@/components/ui/AppButton";
import AppIcon from "@/components/ui/AppIcon";
import DiceBagSwitcher from "@/components/common/DiceBagSwitcher";
import AppInputField from "@/components/ui/AppInputField";
import ChatMessage from "@/components/common/ChatMessage";

export default {
  components: {
    AppButton,
    AppIcon,
    DiceBagSwitcher,
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
  methods: {
    ...mapActions(["toggleSettings"]),
  },
};
</script>