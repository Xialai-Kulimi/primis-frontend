export default {
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
            inventory: [],
            player: [],
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
        pushTexts(state, payload) {
            let type = payload.type
            let message = payload.message
            message.forEach(element => {
                state.texts[type].push(element)
            });
            if (state.texts[type].length > state.config.max_line) {
                for (let i = 0; i < state.config.shift_number; i++) {
                    state.texts[type].shift()
                }
            }
        },
        setButtons(state, payload) {
            let type = payload.type
            let buttons = payload.buttons
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
}