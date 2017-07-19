// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueTouch from 'vue-touch'
import IScrollView from 'vue-iscroll-view'
import IScroll from 'iscroll'

Vue.config.productionTip = false
Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(IScrollView, IScroll)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

/* eslint-disable https://github.com/wendaosanshou/vue-fullpage/blob/master/index.js */
/* eslint-disable https://vuejs.org/v2/guide/plugins.html */
