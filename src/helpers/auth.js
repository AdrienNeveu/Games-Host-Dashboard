import Vue from "vue"

module.exports = {
    isLoggedIn: function () {
        return window.localStorage.getItem("auth_token") !== null
    },

    logOut: function () {
        if (this.isLoggedIn()) {
            window.localStorage.removeItem("auth_token")
        }
    },

    setToken: function (token) {
        window.localStorage.setItem("auth_token", token)
    },

    setAuthorizationHeader: function () {
        if (this.isLoggedIn()) {
            Vue.http.headers.common["Authorization"] = "Bearer " + window.localStorage.getItem("auth_token")
        }
    }
}
