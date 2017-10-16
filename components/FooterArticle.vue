<template>
  <footer>
    <div class="logo"></div>
    <div class="copy-right">©Teller X Taiwan 說說人</div>
  </footer>
</template>
<script>
  export default {
    data () {
      return {}
    },
    name: 'post-footer',
    mounted () {}
  }
</script>
<style lang="stylus" scoped>
  footer
    position relative
    // position fixed
    // bottom 0
    // left 0
    width 100%
    height 80px
    margin 30px auto 20px

    display flex
    justify-content center
    align-items flex-end
    padding 5px 15px

    .logo
      // position absolute
      // bottom 10px
      // left 15px
      position relative
      bottom -3px
      left -10px
      
      height 100%
      width 100px
      background-repeat no-repeat
      background-position center center
      background-size contain
      background-image url(/icons/txt-logo.png)



    .copy-right
      font-size 0.8rem

</style>