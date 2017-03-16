import auth from "../../helpers/auth"
import store from "../../store"

module.exports = function (request, response, next) {
    if (response.status === 401) {
        auth.logOut()
        store.commit("setLoggedIn", false)
        this.$router.push({ name: "login" })
    }
}
