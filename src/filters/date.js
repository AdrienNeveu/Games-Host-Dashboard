import Vue from "vue"
import moment from "moment"
import env from "../../env"

export const Date = Vue.filter("date", function (value) {
    return moment(value).format(env.date_format)
})
