<template>
  <div class="home">
    <h1 class="h1">Polly Lambda Reader</h1>

    <post-form />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PostForm from '@/components/PostForm/index.vue'

@Component({
  components: {
    PostForm
  }
})

export default class Home extends Vue {}
</script>
