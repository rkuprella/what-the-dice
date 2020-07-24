<template>
  <div class="flex justify-center flex-grow overflow-hidden">
    <div class="relative flex flex-grow max-w-6xl mx-auto overflow-hidden">
      <div class="absolute top-0 right-0 flex flex-col items-center justify-center mt-16 mr-8">
        <AppButton
          @click="closeSettings"
          icon="fa-times"
          class="border-2 rounded-full border-accent-1"
          size="sm"
          squeeze
        />
        <small class="hidden mt-1 text-accent-2 lg:block">ESC</small>
      </div>
      <div class="flex-grow pl-2 pr-32 overflow-y-scroll">
        <AppCheckBox text="Give me all the options" id="options" v-model="options" />
        <div>
          <li v-for="language in languages" :key="language.id">
            <button
              :flag="language.flag"
              :class="$i18n.locale === language.language ? 'bg-primary-800 shadow-lg' : 'grayscale-50 opacity-50'"
              @click="changeLocale(language.language)"
            >
              <flag :iso="language.flag" />
            </button>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import AppButton from "@/components/ui/AppButton";
import AppCheckBox from "@/components/ui/AppCheckBox";
import i18n from "@/plugins/i18n";

export default {
  components: {
    AppButton,
    AppCheckBox,
  },
  data() {
    return {
      languages: [
        { id: 1, flag: "us", language: "en", name: "English" },
        { id: 2, flag: "de", language: "de", name: "Deutsch" },
      ],
    };
  },
  computed: {
    options: {
      set() {
        this.$store.dispatch("toggleAllOptions");
      },
      get() {
        return this.$store.getters.isAllOptionsActive;
      },
    },
  },
  methods: {
    ...mapActions(["closeSettings"]),
    escapeListener(e) {
      if (e.key === "Escape") {
        this.closeSettings();
      }
    },
    changeLocale(language) {
      i18n.locale = language;
      localStorage.setItem("language", language);
    },
  },
  created() {
    window.addEventListener("keydown", this.escapeListener);
  },
  destroyed() {
    window.removeEventListener("keydown", this.escapeListener);
  },
};
</script>

<style>
</style>