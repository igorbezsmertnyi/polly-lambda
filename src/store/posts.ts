import Axios from 'axios'
import { Module } from 'vuex'
import { RootState } from '@/models/RootState'
import { LAMBDA_URL } from '@/global'

export const posts: Module<any, RootState> = {
  state: {
    posts: []
  },

  mutations: {
    SET_POSTS(state, data) {
      state.posts = data
    }
  },

  getters: {
    posts: state => state.posts
  },

  actions: {
    async getPosts({ commit }) {
      try {
        const res = await Axios.get(LAMBDA_URL)
        await commit('SET_POSTS', res.data)
      } catch(err) {
        console.error(err)
      }
    }
  }
}