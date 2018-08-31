<template>
  <div>
    <el-alert
      v-if="!posts.length"
      title="No posts yet"
      type="info"
      close-text="Gotcha">
    </el-alert>
    <el-table v-if="posts.length" :data="posts" style="width: 100%" height="450">
      <el-table-column label="Text">
        <template slot-scope="scope">
          <p>{{ scope.row.text }}</p>
        </template>
      </el-table-column>
      <el-table-column label="Listen" width="320">
        <template slot-scope="scope">
          <audio controls>
            <source :src="scope.row.url" type="audio/ogg">
          </audio>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class PostList extends Vue {
  beforeMount() {
    this.$store.dispatch('getPosts')
  }

  get posts() {
    return this.$store.getters.posts
  }
}
</script>
