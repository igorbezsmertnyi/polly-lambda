import Axios from 'axios'
import { Module } from 'vuex'
import { Notification, Loading } from 'element-ui'
import { FormData } from '@/models/FormData'
import { RootState } from '@/models/RootState'
import { LAMBDA_URL } from '@/global'

export const post: Module<any, RootState> = {
  actions: {
    async createPost({ dispatch }, data: FormData) {
      let loader = Loading.service({ fullscreen: true })

      try {
        const res = await Axios.post(LAMBDA_URL, data)

        await Notification.success({
          title: 'Success',
          message: `Post has been successfully created. You can listen it by id: ${res.data}`
        })
      } catch(err) {
        await Notification.success({
          title: 'Error',
          message: 'Try again'
        })
      }

      loader.close()
    }
  }
}