<template>
    <div id="app">
        <pageHeader></pageHeader>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "app",
        data () {
            return {
                title: "games-host-dashboard"
            }
        },
        components: {
            pageHeader: require("./components/BaseTemplate/Header")
        }
    }
</script>
