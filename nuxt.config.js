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
  ],

  router: {
    linkActiveClass: 'link-active',
    linkExactActiveClass: 'link-active--exact',
  },
};
