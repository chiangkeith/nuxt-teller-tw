<template>
  <div class="content">
    <nuxtent-body :body="content" />
  </div>
</template>
<script>
  // import PhotoDesc from './PhotoDesc'

  export default {
    components: {
      // PhotoDesc
    },
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
    max-width 700px
    margin 40px auto
    text-align justify

  @media (min-width: 769px)
    .content
      width 60%
      text-align left

</style>