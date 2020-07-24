import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import '@/assets/css/tailwind.css'
import i18n from './plugins/i18n';
import FlagIcon from 'vue-flag-icon';

Vue.use(FlagIcon);
Vue.config.productionTip = false

new Vue({
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
