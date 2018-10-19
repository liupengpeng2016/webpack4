import Vue from 'vue'
import root from './components/main.vue'
import router from './router'
import store from './vuex'
new Vue({
  el: '#root',
  template: '<root/>',
  components: {root},
  router,
  store
})
