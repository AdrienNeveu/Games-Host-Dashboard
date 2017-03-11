import Vue from "vue"

import config from "../../env"

Vue.http.options.root = config.api_url

// Export resources
export { token } from "./auth/token"
