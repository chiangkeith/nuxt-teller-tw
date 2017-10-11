<template>
  <iframe :src="src" :style="style" frameborder='0'></iframe>
</template>
<script>
  export default {
    computed: {
      style () {
        const width = this.viewport > this.width ? this.width + 'px' : undefined
        return {
          width,
          height: this.height
        }
      }
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
      this.updateViewport()
      window.addEventListener('resize', () => {
        this.updateViewport()
      })
    },
    props: [ 'src', 'height', 'width' ]
  }
</script>
<style lang="stylus" scoped>
  iframe
    // border-top 1px solid #efefef
    margin 30px auto 0
    width 100%
    display block

  @media (min-width: 501px)
    iframe
      width 70%

  @media (min-width: 769px)
    iframe
      width 100%
</style>