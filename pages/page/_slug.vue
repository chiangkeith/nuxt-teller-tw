<template>
  <div class="post">
    <div class="post--title" v-text="post.title"></div>
    <div class="post--author" v-text="post.author ? `文：${post.author}` : ''"></div>
    <PostContentBody :content="post.body" :viewport="viewport">
    </PostContentBody>
    <CopyRightWarn></CopyRightWarn>
  </div>
</template>
<script>
import PostContentBody from '../../components/PostContentBody'
import CopyRightWarn from '../../components/CopyRightWarn'

export default {
  async asyncData ({ app, route }) {
    const pathArr = route.path.split('/')
    const path = pathArr.length > 2 ? pathArr[ 1 ] === 'p' ? 'page' : pathArr[ 1 ] : ''
    return {
      post: await app.$content(`/${path}`).get(route.path)
    }
  },
  components: {
    PostContentBody,
    CopyRightWarn
  },
  data () {
    return {
      viewport: undefined
    }
  },
  methods: {
    updateViewport () {
      return new Promise((resolve) => {
        const browser = typeof window !== 'undefined'
        if (browser) {
          this.viewport = document.documentElement.clientWidth || document.body.clientWidth
        }
      })
    }
  },
  mounted () {
    // console.log('hihi', this.post)
    this.updateViewport()
    window.addEventListener('resize', () => {
      this.updateViewport()
    })
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
      width calc(100% - 60px)
      margin 20px 30px
      font-size 2.3rem
      font-weight bolder
      color rgba(0, 0, 0, 0.5)
      position relative
      line-height 2.8rem
      &::before
        content ''
        position absolute
        bottom -20px
        border-bottom 1px solid rgba(0, 0, 0, 0.16)
        display block
        width 100%
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
        line-height inherit

        &::before
          content none

      &--author
        font-size 1rem
        width 60%
        max-width 800px
        margin 40px auto

      padding-bottom 200px    

</style>