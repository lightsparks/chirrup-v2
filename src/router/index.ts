import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Login from '@/views/Login/Login.vue'
import Logout from '@/views/Logout/Logout.vue'
import Home from '../views/Home.vue'
import NewMessage from "@/views/NewMessage/NewMessage.vue";
import Friends from "@/views/Friends/Friends.vue";
import FindFriends from "@/views/FindFriends/FindFriends.vue";
import VueTimeago from 'vue-timeago';

Vue.use(VueRouter)

Vue.use(VueTimeago, {
  locale: 'en',
  locales: {
    'zh-CN': require('date-fns/locale/zh_cn')
  }
})


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
    path: "/NewMessage",
    name: "NewMessage",
    component: () =>
        import(/* webpackChunkName: "NewMessage" */ '../views/NewMessage/NewMessage.vue')
  },
  {
    path: "/Friends",
    name: "Friends",
    component: () =>
        import(/* webpackChunkName: "Friends" */ '../views/Friends/Friends.vue'),
    meta: {requiresAuth: true, navigation: true}
  },
  {
    path: "/FindFriends",
    name: "FindFriends",
    component: () =>
        import(/* webpackChunkName: "FindFriends" */ '../views/FindFriends/FindFriends.vue'),
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
