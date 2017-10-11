module.exports = {
  content: [
    [
      'post', {
        page: '/post/_slug',
        permalink: ':year/:month/:slug',
        isPost: true,
        generate: ['get', 'getAll']
      }
    ], [
      'page', {
        page: '/page/_slug',
        permalink: 'p/:slug',
        isPost: false,
        generate: ['get', 'getAll']
      }
    ]
  ],
}