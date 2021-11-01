const test = {
    namespaced: true,
    state: {
        menusItem: {},
        roleItem: {},
        showEdit: false
    },
    mutations: {
        CHANGE_MEMUSITEM (state, data) {
            state.menusItem = data
        },
        CHANGE_ROLEITEM (state, data) {
            state.roleItem = data
        },
        CHANGE_SHOWEDIT (state, data) {
            state.showEdit = data
        }
    },
    actions: {
    }
}
export default test