<template>
    <div id="app">
        <pageHeader></pageHeader>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import store from "./store"
    export default {
        name: "app",
        components: {
            pageHeader: require("./components/BaseTemplate/Header")
        },
        store: store
    }
</script>
