import { mapGetters } from "vuex";

export default {
  data() {
    return {
      audio: null
    };
  },
  computed: {
    ...mapGetters(["getSound", "isSoundOn"])
  },
  methods: {
    playSound(sound, volume = 0.5) {
      if (this.isSoundOn) {
        if (this.audio) {
          this.audio.currentTime = 0;
          this.audio.pause();
        }
        const { soundFile } = this.getSound(sound);
        const audioTrack = require('../assets/sounds/' + soundFile);
        this.audio = new Audio(audioTrack);
        this.audio.volume = volume;
        this.audio.play();
      }
    }
  }
};