import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

const _import = require('./_import_' + process.env.NODE_ENV);
import About from '../views/About.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: _import("Home")
    },
    {
      path: '/about',
      name: 'about',
      component: _import("About")
    }
  ]
})
