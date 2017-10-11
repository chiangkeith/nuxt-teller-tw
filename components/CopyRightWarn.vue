<template>
  <div class="copy-right-warning">
    <span>本文未經授權 不得轉載</span>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    mounted () {}
  }
</script>
<style lang="stylus" scoped>
  .copy-right-warning
    width calc(100% - 60px)
    text-align center
    border 1px solid rgba(0, 0, 0, 0.18)
    margin 40px auto 0
    color rgba(0, 0, 0, 0.55)

  @media (min-width: 501px)
    .copy-right-warning
      width 70%
      margin 80px auto 0
  @media (min-width: 769px)
    .copy-right-warning
      margin 100px auto 0
      max-width 700px
      width 60%
</style>