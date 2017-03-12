// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import VueRouter from "vue-router"
import VueResource from "vue-resource"
import store from "./store"

Vue.use(VueResource)
Vue.use(VueRouter)

const router = require("./routes")

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    store,
    template: "<App/>",
    render: h => h(require("./App"))
})
