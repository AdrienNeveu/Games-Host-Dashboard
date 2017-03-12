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
        components: {
            pageHeader: require("./components/BaseTemplate/Header")
        }
    }
</script>
