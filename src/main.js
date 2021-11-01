import './public-path'
import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import registerGlobalModule from './store/global-register'
import store from './store'
import VueRouter from 'vue-router'
import listenReload from './plugin/listenReload'
import './utils/registerAntComponent'
const packageJson = require('../package.json')
const packageName = packageJson.name
Vue.prototype.$store = store
Vue.config.productionTip = false
Vue.use(listenReload)
let instance = null
function render (props = {}) {
  const { container, routerBase } = props
  const router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? routerBase : `/${packageName}/`,
    mode: 'history',
    routes
  })
  instance = new Vue({
    router,
    store,
    render: (h) => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap () {
  console.log('[vue] 注册')
}

export async function mount (props) {
  console.log('[vue] 挂载')
  const zeusRouter = props.zeusRouter()
  registerGlobalModule(store, props)
  Vue.prototype.parentProps = props;
  Vue.prototype.$zeusRouter = {
    ...zeusRouter,
    openView(data) {
      const {name, path, query} = data;
      zeusRouter.openView({
        name,
        path: `/zeus-system/${packageName}${path}`, 
        query: query || {},
      })
    }
  }
  Vue.prototype.packageName = packageName
  render(props)
}

export async function unmount () {
  console.log('[vue] 注销')
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
}
