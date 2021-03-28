import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Login from '@/views/Login/Login.vue'
import Logout from '@/views/Logout/Logout.vue'
import Home from '@/views/Home/Home.vue'
import NewMessage from "@/views/NewMessage/NewMessage.vue";
import Friends from "@/views/Friends/Friends.vue";
import FindFriends from "@/views/FindFriends/FindFriends.vue";
import Me from "@/views/Me/Me.vue";
import UpdateUser from "@/views/UpdateUser/UpdateUser.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
    meta: {requiresAuth: true, navigation: true}
  },
  {
    path: "/NewMessage",
    name: "NewMessage",
    component: NewMessage
  },
  {
    path: "/Friends",
    name: "Friends",
    component: Friends,
    meta: {requiresAuth: true, navigation: true}
  },
  {
    path: "/FindFriends",
    name: "FindFriends",
    component: FindFriends,
    meta: {requiresAuth: true, navigation: true}
  },
  {
    path: "/Me",
    name: "Me",
    component: Me,
    meta: {requiresAuth: true, navigation: true}
  },
  {
    path: "/UpdateUser",
    name: "UpdateUser",
    component: UpdateUser,
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
