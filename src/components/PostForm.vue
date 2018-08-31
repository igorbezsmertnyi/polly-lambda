<template>
  <div class="form">
    <el-form :model="form" :rules="rules" ref="postForm">
      <el-row class="form__row">
        <el-form-item label="Voice" prop="voice">
          <el-select v-model="form.voice" placeholder="Select Voice">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-row>

      <el-row class="form__row">
        <el-form-item label="Text" prop="text">
          <el-input
            type="textarea"
            placeholder="Your Text"
            :autosize="{ minRows: 10 }"
            v-model="form.text">
          </el-input>
        </el-form-item>
      </el-row>

      <el-row class="form__row--button">
        <el-button @click="createPost()" type="primary" round>Say it!</el-button>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Voices, initialVoices } from '@/models/Voices'

@Component
export default class Form extends Vue {
  $refs!: { postForm: any }

  options: Array<Voices> = initialVoices
  form: Object = {
    text: '',
    voice: ''
  }

  rules: Object = {
    voice: [
      { required: true, message: 'Please select the voice', trigger: 'change' }
    ],
    text: [
      { required: true, message: 'Please write something', trigger: 'blur' }
    ]
  }

   createPost() {
    this.$refs.postForm.validate((valid: boolean) => {
      if (!valid) return false

      this.$store.dispatch('createPost', this.form)
    })
  }
}
</script>

<style lang="stylus">
.form
  margin-top 40px

  &__row
    padding-bottom 24px

    &--button
      display flex
      justify-content center
</style>
