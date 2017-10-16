import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 2,
  // error: '/public/notImage.png',
  // loading: '/public/icon/loading.gif',
  attempt: 1
})
