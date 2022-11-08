import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {},
        snackbars: [],
        operation: {}
    },
    getters: {},
    mutations: {
        SetUser(state, user) {
            state.user = user
        },
        addMessage(state, message) {
            state.snackbars.push(message)
        },
        setOperation(state, operation) {
            state.operation = operation
        },
        addCounter(state) {
            state.user.id += 1
        }
    },
    actions: {
        SendMessage(context, message){
            context.commit('addMessage', message)
        },
        AddCounter(context){
            context.commit('addCounter')
        }
    },
    modules: {}
})