const pkg = require('./package')
const config = require('./firebase')

module.exports = {
  apiKey: "AIzaSyApn1yDyoWp9MG_eWtybja4SB5PR-Z-gzw",
  authDomain: "graceclinic-97af9.firebaseapp.com",
  databaseURL: "https://graceclinic-97af9.firebaseio.com",
  projectId: "graceclinic-97af9",
  storageBucket: "graceclinic-97af9.appspot.com",
  messagingSenderId: "554552617490",
  appId: "1:554552617490:web:147a4b4a027315ab6b46cb",
  ANALYTICS_TRACKING_ID: config.ANALYTICS_TRACKING_ID,
  clearCart: true, // Whether to clear the cart after order is placed. Useful while testing
  currency: { symbol: '$', code: 'DO' },
  manifest: {
    name: 'Grace Clinic',
    short_name: 'GClinic',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#555'
  },
  head: {
    titleTemplate: 'Grace Clinic | %s',
    title: pkg.description,
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Karla:400,700' }
    ],
    meta: [
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keyword', name: 'keyword', content: pkg.keyword },
      { hid: 'description', name: 'description', content: pkg.description },
      {
        hid: 'og:title',
        property: 'og:title',
        content: pkg.description,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: pkg.description,
      },
      // {
      //   property: "og:image",
      //   content:
      //     "https://s3.envato.com/files/252462089/banner.png"
      // },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: pkg.description,
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: pkg.description,
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://graceclinic.com',
      },
    ],
    noscript: [{ innerHTML: `We're sorry but Grace Clinic doesn't work properly without JavaScript enabled. Please enable it to continue.` }],
    htmlAttrs: { lang: 'en' },
    __dangerouslyDisableSanitizers: ['script'],
  }
}
