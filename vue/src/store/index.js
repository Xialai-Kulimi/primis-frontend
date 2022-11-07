import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {},
        snackbars: []
    },
    getters: {},
    mutations: {
        SetUser(state, user) {
            state.user = user
        },
        addMessage(state, message) {
            state.snackbars.push(message)
        },
        SetDarkmode(state, new_darkmode) {
            state.user.darkmode = !state.user.darkmode
        }
    },
    actions: {
        SendMessage(context, message){
            context.commit('addMessage', message)
        },
        setDarkmode(context, new_darkmode){
            context.commit('SetDarkmode', new_darkmode)
        }
    },
    modules: {}
})