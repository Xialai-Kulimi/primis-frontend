import Vue from 'vue'
import Vuex from 'vuex'
import userStore from "@/store/userStore";
import wsStore from "@/store/wsStore";
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{userStore,wsStore}
})

