<template>
  <div class="home">
    <h1 class="h1">Polly Lambda Reader</h1>

    <post-list />
    <post-form />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PostList from '@/components/PostList.vue'
import PostForm from '@/components/PostForm.vue'

@Component({
  components: {
    PostForm,
    PostList
  }
})

export default class Home extends Vue {}
</script>
