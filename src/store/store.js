import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import cats from './modules/cats';

export default new Vuex.Store({
  modules: {
    cats
  }
})
