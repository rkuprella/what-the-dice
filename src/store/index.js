import Vue from 'vue'
import Vuex from 'vuex'
import icons from './modules/icons'
import dice from './modules/dice'
import global from './modules/global'
import sounds from './modules/sounds'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    icons,
    dice,
    global,
    sounds
  }
})
