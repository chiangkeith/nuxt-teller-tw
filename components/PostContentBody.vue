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
    width 60%
    max-width 800px
    margin 40px auto

</style>