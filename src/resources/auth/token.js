import Vue from "vue"
import VueResource from "vue-resource"

Vue.use(VueResource)

let actions = {
    issue: {method: "POST", url: "auth/token"},
    revoke: {method: "DELETE", url: "auth/token"}
}

export const token = Vue.resource("auth/token", {}, actions)
