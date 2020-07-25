<template>
  <div class="flex flex-col space-y-4">
    <div class="flex items-center px-4 space-x-4">
      <AppIcon icon="fa-dungeon" class="w-12 h-12 text-accent-2" />
      <h2 class="text-label">{{ $t('joinRoomIntro')}}</h2>
    </div>
    <div class="relative flex px-2">
      <AppButton
        icon="fa-cog"
        size="sm"
        color="accent-2"
        @click="toggleSettings"
        class="mr-2 lg:hidden"
      />
      <AppInputField
        v-model="roomName"
        type="text"
        name="roomName"
        placeholder="Enter Room Name"
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
          <AppButton
            icon="fa-signout"
            class="mr-3"
            v-if="roomName"
            size="sm"
            type="submit"
            @click="joinRoom"
          />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AppButton from "@/components/ui/AppButton";
import AppIcon from "@/components/ui/AppIcon";
import AppInputField from "@/components/ui/AppInputField";

export default {
  components: {
    AppButton,
    AppIcon,
    AppInputField,
  },
  data() {
    return {
      userName: "",
      roomName: "",
      roomPassword: "",
    };
  },
  methods: {
    ...mapActions(["toggleSettings"]),
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