import auth from "../helpers/auth"
import store from "../store"

module.exports = function (to, from, next) {
    console.log("logged in guest: " + store.getters.isLoggedIn)

    if (store.getters.isLoggedIn || auth.isLoggedIn()) {
        next("/home")
    } else {
        next()
    }
}
