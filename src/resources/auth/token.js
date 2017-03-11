import Vue from "vue"

let actions = {
    issue: {method: "POST", url: "auth/token"},
    revoke: {method: "DELETE", url: "auth/token"}
}

export const token = Vue.resource("auth/token", {}, actions)
