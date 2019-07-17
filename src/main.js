import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import $ from 'jquery'
import Popper from 'popper.js'

window.$ = $
window.jQuery = $
window.Popper = Popper

require('bootstrap')
require('@shop-local/shop-local-theme/dist/toolkit')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
