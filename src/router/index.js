import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/reloadView',
    name: 'ReloadView',
    component: () => import(/* webpackChunkName: "reload" */ '../views/reload/index.vue')
  }
]

export default routes
