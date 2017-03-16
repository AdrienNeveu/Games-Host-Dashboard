import Vue from "vue"

import config from "../../env"
import auth from "../helpers/auth"

Vue.http.options.root = config.api_url
auth.setAuthorizationHeader()

// Export resources
export { token } from "./auth/token"
export { gameserver } from "./gameservers/gameserver"

Vue.http.interceptors.push(function (request, next) {
    if (request.params._middleware) {
        var middleware = request.params._middleware
        delete request.params._middleware

        next((response) => middleware(request, response, next))
    } else {
        next()
    }
})
