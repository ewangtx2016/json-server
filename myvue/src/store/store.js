import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.prototype.$http = axios
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        setNub (state, nub) {
            // 变更状态
            state.count = nub
        }
    }
})