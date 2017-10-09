<template>
  <div class="post">
    <div class="post--title" v-text="post.title"></div>
    <PostContentBody :content="post.body">
    </PostContentBody>
  </div>
</template>
<script>
import PostContentBody from '../../components/PostContentBody'

export default {
  async asyncData ({ app, route }) {
    return {
      post: await app.$content('/').get(route.path)
    }
  },
  components: {
    PostContentBody
  },
  data () {
    return {
    }
  },
  mounted () {
    console.log('hihi', this.post)
  }
}
</script>
<style lang="stylus" scoped>
  .post
    &--title
      width 60%
      max-width 800px
      margin 40px auto
      font-size 3.5rem
      font-weight bolder
      color rgba(0, 0, 0, 0.5)
      border-bottom 1px solid rgba(0, 0, 0, 0.16)

    padding-bottom 200px

</style>