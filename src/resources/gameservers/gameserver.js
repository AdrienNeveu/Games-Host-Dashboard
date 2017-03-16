import Vue from "vue"
import authenticated from "../middlewares/authenticated"

export const gameserver = Vue.resource("user/gameservers{/id}", { _middleware: authenticated })
