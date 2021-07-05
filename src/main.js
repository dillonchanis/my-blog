// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import './assets/css/app.css'
import './assets/css/night-owl.css'
import DefaultLayout from '~/layouts/Default.vue'
import HomeLayout from '~/layouts/Home.vue'

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)
  Vue.component('HomeLayout', HomeLayout)

  head.htmlAttrs = { lang: 'en', class: 'h-full' }
  head.bodyAttrs = { class: 'antialiased bg-synthPurple' }
}
