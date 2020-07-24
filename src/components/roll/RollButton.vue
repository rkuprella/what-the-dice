<template>
  <AppButton
    :text="$t('rollTheDice')"
    wide
    size="xl"
    inverted
    @click="playSound('shake-and-roll')"
  />
</template>

<script>
import AppButton from "@/components/ui/AppButton";
import soundMixin from "@/mixins/soundMixin";

export default {
  components: {
    AppButton,
  },
  mixins: [soundMixin],
};
</script>

<style>
</style>