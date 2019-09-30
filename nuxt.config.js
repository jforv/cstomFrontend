const pkg = require('./package')

module.exports = {
  mode: 'universal',
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#42A5CC'
  },

  /*
   ** Global CSS
   */
  css: [
    /* Import Font Awesome Icons Set */
    '~/node_modules/flag-icon-css/css/flag-icon.min.css',
    /* Import Simple Line Icons Set */
    '~/node_modules/simple-line-icons/css/simple-line-icons.css',
    /* Import Core SCSS */
    '@/assets/scss/style.scss',
    /* Import Custom CSS */
    '@/assets/css/main.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  router: {
    // middleware: ['isLoggedIn']
    // middleware: ['auth', 'isLoggedIn']
  },
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // '@nuxtjs/auth',
    [
      'nuxt-fontawesome',
      {
        imports: [{
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ]
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: 'http://18.188.44.149/api'
    //1d159d7984a399c
  },
  // auth: {
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         'login': {
  //           url: '/method/users/login',
  //           method: 'post',
  //           propertyName: 'data.token'
  //         },
  //         user: {
  //           url: '/method/frappe.auth.get_logged_user',
  //           method: 'get',
  //           propertyName: 'data'
  //         },
  //         logout: false
  //       }
  //     }
  //   }
    //   strategies: {
  //     local: {
    //       endpoints: {
      //         login: {
        //           url: '/method/login',
        //           method: 'post',
        //           propertyName: false
        //         },
        //       },
        //       user: {
          //         url: '/method/frappe.auth.get_logged_user',
          //         method: 'get',
          //         propertyName: 'data'
          //       },
          //       tokenRequired: false,
          //       tokenType: false
          //     }
          //   }
        // },
        
        // proxy: {
        //   'api/auth/user': {
        //     target: 'http://localhost:8000',
        //     pathRewrite: {
        //       '^api/auth/user' : '/api/method/login'
        //       }
        //     }
        // },
        /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {
    //   // Run ESLint on save
    //   if (ctx.isDev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
}
