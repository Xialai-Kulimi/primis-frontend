export default {
    state: {
        wsData: {},
        connect: false
    },
    getters: {},
    mutations: {
        setWsData(state, data) {
            state.wsData = data
        },
        setConnectState(state, newState) {
            state.connect = newState
        }
    },
    modules: {}
}