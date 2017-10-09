<template>
  <div v-html="content" class="content">
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    name: 'content-body',
    mounted () {
      // console.log(this.content)
    },
    props: [ 'content' ]
  }
</script>
<style lang="stylus" scoped>
  .content
    width 99vw
    max-width 800px
    margin 40px auto
    text-align justify

  @media (min-width: 769px)
    .content
      width 60%
      text-align left

</style>