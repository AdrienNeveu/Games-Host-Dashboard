module.exports = {
    isLoggedIn: function () {
        return window.localStorage.getItem("auth_token") !== null
    },

    logOut: function () {
        window.localStorage.removeItem("auth_token")
    },

    setToken: function (token) {
        window.localStorage.setItem("auth_token", token)
    }
}
