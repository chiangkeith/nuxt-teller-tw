<template>
  <div class="desc" :style="style">
    <div v-if="src">
      <span>{{ prefix }}</span><a :href="src">{{ desc }}</a>
    </div>
    <div v-else>
      {{ prefix}}{{ desc }}
    </div>
  </div>
</template>
<script>
  export default {
    computed: {
      style () {
        const justifyContent = this.align
        return {
          justifyContent
        }
      }
    },
    data () {
      return {}
    },
    mounted () {},
    props: [ 'desc', 'src', 'prefix', 'align' ]
  }
</script>
<style lang="stylus" scoped>
  .desc
    text-align left
    line-height 1rem
    font-size 0.8rem
    overflow-wrap break-word
    margin 5px auto
    padding 0 30px
    display flex
    justify-content center
    align-items center
    > div
      max-width calc(100% - 10px)
      > a
        &, &:hover, &:link, &:visited
          text-decoration none
          color rgba(0, 0, 0, 0.5)
          line-height inherit
          font-size inherit
          height inherit


  @media (min-width: 501px)
    .desc
      text-align center
      padding 0 15%
  @media (min-width: 769px)
    .desc
      padding 0
</style>
