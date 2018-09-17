module.exports = {
  head: {
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [{
      charset: 'utf-8',
    }, {
      name: 'viewport',
      content: 'width=device-width, minimum-scale=1, initial-scale=1, user-scalable=yes',
    }, {
      'http-equiv': 'x-ua-compatible',
      content: 'ie=edge',
    }],
  },
  modules: [
    ['@nuxtjs/pwa', {
      meta: {
        name: 'Простое приложение',
        author: 'Infant Frontender',
        description: false,
        ogType: false,
        ogSiteName: false,
        ogTitle: false,
        ogDescription: false
      },
      manifest: {
        name: 'Простое приложение',
        short_name: 'Приложение',
        lang: 'ru',
      },
    }],
  ],
  router: {
    linkActiveClass: 'link-active',
    linkExactActiveClass: 'link-active--exact',
  },
};
