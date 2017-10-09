<template>
  <div class="post">
    <div class="post--title" v-text="post.title"></div>
    <div class="post--author" v-text="post.author ? `文：${post.author}` : ''"></div>
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
  },
  head () {
    return {
      title: `${this.post && (this.post.title + '｜')}TXT說說人｜談天說地`,
      meta: [
        { hid: 'description', name: 'description', content: `${this.post && (this.post.description)}` }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
  .post
    &--title
      width 100%
      margin 20px 30px
      font-size 2.8rem
      font-weight bolder
      color rgba(0, 0, 0, 0.5)
      position relative
      &::before
        content ''
        position absolute
        bottom -20px
        border-bottom 1px solid rgba(0, 0, 0, 0.16)
        display block
        width calc(100% - 60px)
        height 0

    &--author
      width 100%
      margin 30px 30px
      font-size 0.9rem
      font-weight bolder
      color rgba(0, 0, 0, 0.2)
      position relative
      text-align right
      width calc(100% - 60px)

    padding-bottom 100px

  @media (min-width: 501px)
    .post
      &--title
        width 70%
        margin 40px auto
        &::before
          width 100%
      &--author
        width 70%
        margin 30px auto

  @media (min-width: 769px)
    .post
      &--title
        width 60%
        max-width 800px
        margin 40px auto
        font-size 3.5rem
        font-weight bolder
        color rgba(0, 0, 0, 0.5)
        border-bottom 1px solid rgba(0, 0, 0, 0.16)

        &::before
          content none

      &--author
        font-size 1rem
        width 60%
        max-width 800px
        margin 40px auto

      padding-bottom 200px    

</style>