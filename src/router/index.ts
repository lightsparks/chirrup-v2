import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Login from '@/views/Login/Login.vue'
import Logout from '@/views/Logout/Logout'
import Home from '../views/Home.vue'
/*import VueTimeago from 'vue-timeago';*/

Vue.use(VueRouter)

/*

Vue.use(VueTimeago, {
  name: 'Timeago', // Component name, `Timeago` by default
  locale: 'en', // Default locale
  // We use `date-fns` under the hood
  // So you can use all locales from it
  locales: {
    'zh-CN': require('date-fns/locale/zh_cn'),
    ja: require('date-fns/locale/ja')
  }
})
*/


const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: "/Home",
    name: "Home",
    component: () =>
        import(/* webpackChunkName: "Home" */ '../views/Home/Home.vue'),
    meta: {requiresAuth: true, navigation: true}
  },
  {
    path: "/Logout",
    name: "Logout",
    component: Logout
  },
  {
    path: "/404",
    alias: "*",
    name: "notFound",
    component: () =>
        import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(localStorage.getItem('token') === null) {
      next({
        name: 'Login'
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
