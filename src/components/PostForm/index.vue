<template>
  <div class="form">
    <el-form :model="form" :rules="rules" ref="postForm">
      <el-row class="form__row">
        <el-col :span="16">
          <el-form-item label="Name" prop="name">
            <el-input placeholder="Type your Name" v-model="form.name"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="7" :offset="1">
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
        </el-col>
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
import Axios, { AxiosInstance } from 'axios'

@Component
export default class Form extends Vue {
  $refs!: {
    postForm: any
  }

  form: Object = {
    name: '',
    text: '',
    voice: ''
  }

  rules: Object = {
    name: [
      { required: true, message: 'Please write your name', trigger: 'blur' },
      { min: 3, message: 'Minimal length is 3 characters', trigger: 'blur' }
    ],
    voice: [
      { required: true, message: 'Please select the voice', trigger: 'change' }
    ],
    text: [
      { required: true, message: 'Please write something', trigger: 'blur' }
    ]
  }

  options: Array<any> = [
    { value: 'Ivy', label: 'Ivy [English - American]' },
    { value: 'Joanna', label: 'Joanna [English - American]' },
    { value: 'Joey', label: 'Joey [English - American]' },
    { value: 'Justin', label: 'Justin [English - American]' },
    { value: 'Kendra', label: 'Kendra [English - American]' },
    { value: 'Kimberly', label: 'Kimberly [English - American]' },
    { value: 'Salli', label: 'Salli [English - American]' },
    { value: 'Nicole', label: 'Nicole [English - Australian]' },
    { value: 'Russell', label: 'Russell [English - Australian]' },
    { value: 'Emma', label: 'Emma [English - British]' },
    { value: 'Brian', label: 'Brian [English - British]' },
    { value: 'Amy', label: 'Amy [English - British]' },
    { value: 'Raveena', label: 'Raveena [English - Indian]' },
    { value: 'Geraint', label: 'Geraint [English - Welsh]' },
    { value: 'Ricardo', label: 'Ricardo [Brazilian Portuguese]' },
    { value: 'Vitoria', label: 'Vitoria [Brazilian Portuguese]' },
    { value: 'Lotte', label: 'Lotte [Dutch' },
    { value: 'Ruben', label: 'Ruben [Dutch]' },
    { value: 'Mathieu', label: 'Mathieu [French]' },
    { value: 'Celine', label: 'Celine [French]' },
    { value: 'Chantal', label: 'Chantal [Canadian French]' },
    { value: 'Marlene', label: 'Marlene [German]' },
    { value: 'Dora', label: 'Dora [Icelandic]' },
    { value: 'Karl', label: 'Karl [Icelandic]' },
    { value: 'Carla', label: 'Carla [Italian]' },
    { value: 'Giorgio', label: 'Giorgio [Italian]' },
    { value: 'Mizuki', label: 'Mizuki [Japanese]' },
    { value: 'Liv', label: 'Liv [Norwegian]' },
    { value: 'Maja', label: 'Maja [Polish]' },
    { value: 'Jan', label: 'Jan [Polish]' },
    { value: 'Ewa', label: 'Ewa [Polish]' },
    { value: 'Cristiano', label: 'Cristiano [Portuquese]' },
    { value: 'Ines', label: 'Ines [Portuquese]' },
    { value: 'Carmen', label: 'Carmen [Romanian]' },
    { value: 'Maxim', label: 'Maxim [Russian]' },
    { value: 'Tatyana', label: 'Tatyana [Russian]' },
    { value: 'Enrique', label: 'Enrique [Spanish]' },
    { value: 'Penelope', label: 'Penelope [US Spanish]' },
    { value: 'Conchita', label: 'Conchita [Castilian Spanish]' },
    { value: 'Astrid', label: 'Astrid [Swedish]' },
    { value: 'Filiz', label: 'Filiz [Turkish]' },
    { value: 'Gwyneth', label: 'Gwyneth [Welsh]' }
  ]

  createPost() {
    const ref = this.$refs.postForm

    ref.validate((valid: boolean) => {
      if (valid) {
        console.log(this.form)
        this.makeRequest()
      } else {
       
        return false
      }
    })
  }

  makeRequest() {
      let res = Axios.post('https://qzsm779i45.execute-api.us-east-1.amazonaws.com/prod', this.form)
    
      console.log(res)
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
