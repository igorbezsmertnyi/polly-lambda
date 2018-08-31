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
          <p @click="toggleDialog(scope.row)">{{ scope.row.text }}</p>
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


    <el-dialog class="dialog" :visible.sync="outerVisible">
      <el-dialog
          width="30%"
          title="Inner Dialog"
          append-to-body>
      </el-dialog>

      <div class="dialog__content">
        <audio controls>
          <source :src="dialogAudio" type="audio/ogg">
        </audio>

        <p class="h2">
          {{dialogText}}
        </p>
      </div>

      <div slot="footer" class="dialog-footer">
        <el-button @click="outerVisible = false" round>Close</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class PostList extends Vue {
  outerVisible: boolean = false
  dialogVisible: boolean = false
  dialogText: string = ''
  dialogAudio: string = ''

  beforeMount() {
    this.$store.dispatch('getPosts')
  }

  get posts() {
    return this.$store.getters.posts
  }

  toggleDialog(row: any) {
    this.outerVisible = !this.outerVisible
    this.dialogText = row.text
    this.dialogAudio = row.url
  }
}
</script>

<style lang="stylus">
.dialog
  &__content
    display flex
    flex-direction column
    align-items center
    
    audio
      width 100%

    p
      width 100%
      margin-top 30px
</style>