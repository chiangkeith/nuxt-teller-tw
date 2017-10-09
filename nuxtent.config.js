module.exports = {
  content: {
    page: '/post/_slug',
    permalink: '/post/:slug',
    isPost: false,
    generate: ['get', 'getAll']
  },
}