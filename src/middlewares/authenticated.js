import auth from "../helpers/auth"
import store from "../store"

module.exports = function (to, from, next) {
    if (store.getters.isLoggedIn || auth.isLoggedIn()) {
        next()
    } else {
        next("/login")
    }
}
