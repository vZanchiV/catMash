import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import * as firebase from 'firebase'
import config from '../firebaseConfig';

firebase.initializeApp(config);
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
