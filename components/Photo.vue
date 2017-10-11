<template>
  <div class="photo">
    <img :src="src" :alt="alt" :style="style">
  </div>
</template>
<script>
  export default {
    computed: {
      style () {
        return {
          width: this.width <= 1 ? this.viewport >= 768
            ? this.width * 100 + '%'
            : ''
            : ''
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
    props: [ 'src', 'alt', 'width' ]
  }
</script>
<style lang="stylus" scoped>
  .photo
    width 100%
    margin 40px auto 0
    > img
      width 100%
      margin 0 auto
      display block

  @media (min-width: 501px)
    .photo
      margin-top 60px

</style>
