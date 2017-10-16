<template>
  <div class="post">
    <div class="post--title" v-text="post.title"></div>
    <div class="post--author" v-text="post.author ? `文：${post.author}` : ''"></div>
    <div class="post--datetime" v-text="datetime"></div>
    <PostContentBody :content="post.body" :viewport="viewport">
    </PostContentBody>
    <CopyRightWarn></CopyRightWarn>
    <div class="facebook-comment">
      <div class="fb-comments" :data-href="currPath" data-numposts="5" data-width="100%" data-order-by="reverse_time"></div>
    </div>
    <FooterArticle></FooterArticle>
  </div>
</template>
<script>
import { SITE } from '../../constants'
import PostContentBody from '../../components/PostContentBody'
import CopyRightWarn from '../../components/CopyRightWarn'
import FooterArticle from '../../components/FooterArticle'

export default {
  async asyncData ({ app, route }) {
    const pathArr = route.path.split('/')
    const path = pathArr.length > 2 ? pathArr[ 1 ] === 'p' ? 'page' : 'post' : ''

    return {
      post: await app.$content(`/${path}`).get(route.path)
    }
  },
  components: {
    PostContentBody,
    CopyRightWarn,
    FooterArticle
  },
  computed: {
    datetime () {
      return this.post.date || ''
    },
    currPath () {
      return `${SITE}${this.$route.path}`
    }
  },
  data () {
    return {
      viewport: undefined,
      lazyLoad: undefined
    }
  },
  name: 'post',
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
    if (process.env.VUE_ENV === 'client') {
      const LazyLoad = require('vanilla-lazyload')
      this.lazyLoad = new LazyLoad({
        threshold: 800
      })
    }
    this.updateViewport()
    window.addEventListener('resize', () => {
      this.updateViewport()
    })
  },
  updated () {
    this.lazyLoad.update()
  },
  head () {
    return {
      title: `${this.post && (this.post.title + '｜')}TXT說說人｜談天說地`,
      meta: [
        { hid: 'description', name: 'description', content: `${this.post && (this.post.description)}` },
        { hid: 'keywords', name: 'keywords', content: `${this.post && (this.post.keywords)}` },
        { hid: 'og:description', property: 'og:description', content: `${this.post && (this.post.description)}` },
        { hid: 'og:url', property: 'og:url', content: this.currPath },
        { hid: 'og:type', property: 'og:type', content: `article` },
        { hid: 'og:locale', property: 'og:locale', content: `zh_TW` },
        { hid: 'og:site_name', property: 'og:site_name', content: `TXT說說人｜談天說地` },
        { hid: 'og:title', property: 'og:title', content: `${this.post && (this.post.title + '｜')}TXT說說人｜談天說地` }
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
      font-size 2.5rem
      font-weight bolder
      color rgba(0, 0, 0, 0.5)
      position relative
      line-height 3rem
      &::before
        content ''
        position absolute
        bottom -20px
        border-bottom 1px solid rgba(0, 0, 0, 0.16)
        display block
        width 100%
        height 0

    &--author, &--datetime
      width 100%
      font-size 0.9rem
      font-weight bolder
      color rgba(0, 0, 0, 0.2)
      position relative
      text-align right
      width calc(100% - 60px)

    &--author
      margin 30px 30px 0
    &--datetime
      margin 5px 30px 0
      font-family Courier, 'New Courier', monospace
    > .facebook-comment
      width 90%
      margin 50px auto 0
    // padding-bottom 100px

  @media (min-width: 501px)
    .post
      &--title
        width 70%
        margin 40px auto
      &--author, &--datetime
        width 70%
      &--author
        margin 30px auto 0
      &--datetime
        margin 5px auto 0
      > .facebook-comment
        width 70%
        margin 60px auto 0


  @media (min-width: 769px)
    .post
      &--title
        width 60%
        max-width 700px
        margin 40px auto
        font-size 3.5rem
        font-weight bolder
        color rgba(0, 0, 0, 0.5)
        border-bottom 1px solid rgba(0, 0, 0, 0.16)
        line-height inherit

        &::before
          content none

      &--author, &--datetime
        font-size 1rem
        width 60%
        max-width 700px
      &--author
        margin 40px auto 0
      &--datetime
        margin 5px auto 0

      > .facebook-comment
        width 60%
        max-width 700px
        margin 80px auto 0

      // padding-bottom 200px    

</style>