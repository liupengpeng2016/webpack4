import Vue from 'vue'
import root from './components/main.vue'
import router from './router'
import store from './vuex'
import 'assets/view-port'
import 'assets/reset.css'
// import './js/test'

/* eslint-disable no-new */
new Vue({
  el: '#root',
  template: '<root/>',
  components: { root },
  router,
  store
})
