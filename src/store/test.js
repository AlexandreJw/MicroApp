const test = {
    namespaced: true,
    state: {
      count: 0
    },
    mutations: {
      increment (state) {
        state.count++
      }
    },
    actions: {
      increment (context) {
        context.commit('increment')
      }
    },
    modules: {
    }
}
export default test