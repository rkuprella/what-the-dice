import Vue from 'vue'
import Vuex from 'vuex'
import icons from './modules/icons'
import dice from './modules/dice'
import global from './modules/global'
import sounds from './modules/sounds'
import rulesets from './modules/rulesets'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    icons,
    dice,
    global,
    sounds,
    rulesets
  }
})
