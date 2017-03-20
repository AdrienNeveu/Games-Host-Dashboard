import Vue from "vue"
import VueResource from "vue-resource"

Vue.use(VueResource)

import authenticated from "../middlewares/authenticated"

export const gameserver = Vue.resource("user/gameservers{/id}", { _middleware: authenticated })
