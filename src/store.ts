import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { post } from '@/store/post'

export default new Vuex.Store({
  modules: {
    post
  }
})
