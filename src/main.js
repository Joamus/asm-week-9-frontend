import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import { routes } from './routes'

import globalState from './global-state'

import 'bootstrap/dist/css/bootstrap.css'



Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter ({
  routes

})

router.beforeEach((to, from, next) => {
  if (to.path != '/login') {
    if (globalState.state.loggedIn === true) {
      next();
    } else {
     router.push({name: 'login'})
    }
  } else {
    next();
  }
}) 

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
