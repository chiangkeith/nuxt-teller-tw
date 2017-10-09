module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'TXT說說人｜談天說地',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimum-scale=1.0, shrink-to-fit=no, minimal-ui' },
      { hid: 'description', name: 'description', content: 'TXT說說人談天說地，廣如各國文化；遠至新石器時代；近如實用、教育性、能增進讀者宇宙觀的話題。' },
      { 'http-equiv' : 'X-UA-Compatible', content : 'IE=edge,chrome=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    'nuxtent'
  ]
}
