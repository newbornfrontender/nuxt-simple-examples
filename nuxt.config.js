const pwa = require('./modules/pwa');

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
    pwa,
    '@nuxtjs/axios',
  ],

  router: {
    linkActiveClass: 'route-active',
    linkExactActiveClass: 'route-active--exact',
  },
};
