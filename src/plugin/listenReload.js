export default {
    install:function(Vue){
        Vue.mixin({
            mounted(){
                // let that = this
                // console.log(that, 'window.__POWERED_BY_QIANKUN__')
                
                // if (window.__POWERED_BY_QIANKUN__) {
                //     this.parentProps.onGlobalStateChange(state => {
                //       if (state.type === 'RELOAD_VIEW') {
                //         that.$forceUpdate()
                //         console.log(that.$forceUpdate, 'that')
                //       }
                //     }, true);
                // }
            }
        })
    } 
}