import Vue from "vue"
import Vuex from "vuex"
import auth from "../helpers/auth"
import { gameserver } from "../resources"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isLoggedIn: false,
        selectedGameServer: null,
        gameServers: null
    },
    mutations: {
        setLoggedIn (state, value) {
            state.isLoggedIn = value
            auth.setAuthorizationHeader()
            store.dispatch("getGameServers")
        },
        setSelectedGameServer (state, value) {
            state.selectedGameServer = value
        },
        setGameServers (state, value) {
            state.gameServers = value
        }
    },
    actions: {
        getGameServers (context) {
            if (context.state.isLoggedIn) {
                gameserver.get().then((res) => {
                    let gameServers = res.body
                    context.commit("setGameServers", gameServers)

                    let findId = (el) => {
                        return el.id === context.state.selectedGameServer
                    }
                    if (context.state.selectedGameServer === null || gameServers.find(findId) === undefined) {
                        context.commit("setSelectedGameServer", gameServers.length === 0 ? null : gameServers[0].id)
                    }
                })
            }
        }
    }
})

store.commit("setLoggedIn", auth.isLoggedIn())

export default store
