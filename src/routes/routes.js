import authenticated from "../middlewares/authenticated"
import guest from "../middlewares/guest"

module.exports = [
    {
        path: "/home",
        alias: "/",
        name: "home",
        component: require("../components/Home"),
        beforeEnter: authenticated
    },
    {
        path: "/login",
        name: "login",
        component: require("../components/Auth"),
        beforeEnter: guest
    }
]
