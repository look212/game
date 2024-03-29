export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  server: {
    port: 2468,
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'game',
    htmlAttrs: {
      lang: 'ko'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'google-site-verification', content: 'TzeBX7E_eVuV7BLV_xFhnxkzkXnHi2lhhUGpRlJ-3uw' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.png' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          '//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/index.scss',
  ],

  styleResources: {
    scss: ['~/assets/scss/abstract/*.scss'],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vue-sweetalert2',
    { src: '@/plugins/vue-youtube', ssr: false },
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
  ],

  // sweetalert style custom
  sweetalert: {
    customClass: {
      /**
       * confirm 사용시 showCancelButton: true 추가하여 사용할것.
       * showCancelButton: true 일경우 is_cancelBtn 추가해야함
       * container: 'modal_container is_cancelBtn',
       */
      container: 'modal_container',
    },
    confirmButtonText: '확인',
    cancelButtonText: '아니오',
    reverseButtons: true,
    focusConfirm: false,
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://composition-api.nuxtjs.org
    '@nuxtjs/composition-api/module',
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'vue-sweetalert2/nuxt', '@nuxtjs/axios',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      'vue-awesome-swiper'
    ],
    terser: {
      // https://github.com/terser/terser#compress-options
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    }
  },

  // Build path change
  generate: {
    dir: 'docs'
  },

  router: {
    base: '/game'
  },

  compilerOptions: {
    types: ['@nuxt/types', '@nuxtjs/axios'],
  },
  axios: {
    proxy: false,
  },
}
