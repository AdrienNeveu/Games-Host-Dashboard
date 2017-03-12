import auth from "../helpers/auth"
import store from "../store"

module.exports = function (to, from, next) {
    console.log("logged in auth: " + store.getters.isLoggedIn)

    if (store.getters.isLoggedIn || auth.isLoggedIn()) {
        next()
    } else {
        next("/login")
    }
}
