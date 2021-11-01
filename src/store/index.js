import Vue from 'vue'
import Vuex from 'vuex'
import test from './test'
import resource from './resource'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: { test, resource }
})
