<template>
  <div class="photo">
    <div class="img" :style="style">
      <img :data-src="src" :alt="alt">
    </div>
  </div>
</template>
<script>
  export default {
    computed: {
      style () {
        if (this.viewport >= 768 && this.width) {
          return {
            width: Number(this.width) <= 1 ? this.width * 100 + '%' : this.width + 'px'
          }
        } else {
          console.log('couldnt find this(photo.vue)', [
            this.viewport,
            this.width,
            this.src
          ])
        }
        return undefined
      },
      sizes () {
        if (this.width) {
          const width = Number(this.width) <= 1 ? this.width * 100 + '%' : this.width + 'px'
          return `(min-width: 769px) ${width}, 100%`
        }
      }
    },
    data () {
      return {
        viewport: undefined
      }
    },
    name: 'photo',
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
    props: [ 'src', 'alt', 'width', 'lazy' ]
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
