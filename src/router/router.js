import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV);

import Layout from "../views/layout/Layout";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      name: 'index',
      redirect: "/index",
      children: [
        {
          path: "index",
          component: _import("index/index")
        }
      ]
    },
    {
      path: "/login",
      component: _import("login/index"),
      name: "login",
    },
    {
      path: "/category",
      component: Layout,
      redirect: "/category/index",
      name: "category",
      children: [
        {
          path: "index",
          name: "categoryIndex",
          component: _import("category/index")
        }
      ]
    },
    {
      path: "/shoppingCart",
      component: Layout,
      redirect: "/shoppingCart/index",
      children: [
        {
          path: "index",
          name: "shoppingCart",
          component: _import("shoppingCart/index")
        }
      ]
    },
    {
      path: "/detail",
      component: Layout,
      redirect: "/detail/index",
      children: [
        {
          path: "index",
          name: "detail",
          component: _import("detail/index")
        }
      ]
    },
    // {
    //   path: '/home',
    //   component: Layout,
    //   redirect: "/home/home",
    //   meta: { role: ['admin'] },
    //   children: [
    //     {
    //       path: "home",
    //       name: 'home',
    //       component: _import("Home")
    //     }
    //   ]
    // },

    // {
    //   path: '/about',
    //   name: 'about',
    //   component: Layout,
    //   redirect: "/about/about",
    //   children: [
    //     {
    //       path: "about",
    //       name: 'about',
    //       component: _import("About")
    //     }
    //   ]
    // }
  ]
})
