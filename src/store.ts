import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { post } from '@/store/post'
import { posts } from '@/store/posts'

export default new Vuex.Store({
  modules: {
    post,
    posts
  }
})
