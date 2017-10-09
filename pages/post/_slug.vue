<template>
  <div>
    <div v-html="post.body">
    </div>
  </div>
</template>
<script>
export default {
  async asyncData ({ app, route }) {
    return {
      post: await app.$content('/').get(route.path)
    }
  },
  data () {
    return {
    }
  },
  mounted () {
    console.log('hihi', this.post)
  }
}
</script>