import Vue from "vue"

import config from "../../env"
import auth from "../helpers/auth"

Vue.http.options.root = config.api_url
auth.setAuthorizationHeader()

// Export resources
export { token } from "./auth/token"
