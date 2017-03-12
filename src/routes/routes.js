import authenticated from "../middlewares/authenticated"
import guest from "../middlewares/guest"

module.exports = [
    { path: "/home", component: require("../components/Home"), alias: "/", beforeEnter: authenticated },
    { path: "/about", component: require("../components/About") },
    { path: "/contact", component: require("../components/Contact") },
    { path: "/login", component: require("../components/Auth"), beforeEnter: guest }
]
