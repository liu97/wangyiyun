require('../css/reset.css');
require('../static/font-icon/style.css')
import Vue from 'vue'
import router from './router/router.js'
import App from "./App.vue"


new Vue({
  el: '#app',
  // store: store,
  router: router,
  template: '<App/>',
  components: { App }
}) 