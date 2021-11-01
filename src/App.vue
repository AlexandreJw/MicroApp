<template>
<a-locale-provider :locale="locale">
  <div id="app" :class="{BY_QIANKUN_APP: !BY_QIANKUN}">
    <keep-alive :include="loadedRouteNames">
      <router-view/>
    </keep-alive>
  </div>
</a-locale-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
const packageJson = require('../package.json')
const packageName = packageJson.name
export default {
  name:"App",
  data() {
    return {
      locale: zhCN,
      loadedRouteNames: [], 
      BY_QIANKUN: window.__POWERED_BY_QIANKUN__
    };
  },
  mounted() {
    if (this.BY_QIANKUN) {
      this.parentProps.onGlobalStateChange(state => {
        if (state.type === 'CHNAGE_MENUS') {
          const { childRoute } = state.loadedApp[packageName];
          const loadedRoutes = childRoute.map(item => this.$router.resolve(item));
          const loadedRouteNames = loadedRoutes.map(item => item.route.name);
          this.loadedRouteNames = loadedRouteNames;
        }
        if (state.type === 'RELOAD_VIEW') {
          // that.$router.push('/platformStyle');
        }
      }, true);
    }
  },
  methods: {
  }
}
</script>

<style lang="less">
@import "./assets/style/global.less";
@import "./assets/style/coverAnt.less";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
.BY_QIANKUN_APP {
  padding: 32px;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
