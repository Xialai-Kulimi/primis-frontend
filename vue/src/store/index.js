import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {},

        operation: {},
        // {message: 'test info message', class: 'info--text'},
        messages: [],
        texts: {
            caption: [], 
            surrounding: [],
            status: [], 
        },
        buttons: {
            reachable: [],
            target: [],
        },
        config: {
            max_line: 130,
            shift_number: 10,
        },
    },
    getters: {},
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        setOperation(state, operation) {
            state.operation = operation
        },
        pushTexts(state, type, message) {
            state.texts[type].push(message)
            if (state.texts[type].length > state.config.max_line) {
                for (let i = 0; i < state.config.max_line; i++) {
                    state.texts[type].shift()
                }
            }
        },
        setButtons(state, type, buttons) {
            state.buttons[type] = buttons
        },
        pushMessage(state, message) {
            state.messages.push(message)
        },
        shiftMessage(state) {
            state.messages.shift()
        }
    },
    // actions: {
    //     PushMessage(context, message) {
    //         context.commit('pushMessage', message)
    //     },
    //     ShiftMessage(context) {
    //         context.commit('shiftMessage')
    //     }
    // },
    modules: {}
})