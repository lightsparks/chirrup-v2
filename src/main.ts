import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import store from './store'
import VueTimeago from 'vue-timeago';
Vue.config.productionTip = false

Vue.use(VueTimeago, {
  locale: 'en',
  locales: {
    'nl': require('date-fns/locale/nl')
  }
})

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')

//TODO: Log out als 401 terug komt
