import Vue from "vue"
import Vuex from "vuex"
import auth from "../helpers/auth"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isLoggedIn: auth.isLoggedIn()
    },
    mutations: {
        setLoggedIn (state, value) {
            state.isLoggedIn = value
            auth.setAuthorizationHeader()
        }
    },
    getters: {
        isLoggedIn: state => {
            return state.isLoggedIn
        }
    }
})

export default store
