<template>
  <iframe :style="style" :src="`https://www.youtube.com/embed/${id}`" frameborder="0" allowfullscreen></iframe>
</template>
<script>
  export default {
    computed: {
      style () {
        return {
          width: '100%',
          height: this.viewport <= 769 ? (this.viewport * 9) / 16 + 'px' : (this.viewport * 9 * 0.6) / 16 + 'px'
        }
      }
    },
    data () {
      return {
        viewport: undefined
      }
    },
    name: 'youtube',
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
    props: [ 'id' ]
  }
</script>
<style lang="stylus" scoped>
  iframe
    margin 40px auto 0
    display block
</style>