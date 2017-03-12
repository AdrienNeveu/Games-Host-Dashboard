<template>
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <router-link :to="{name: 'home'}" class="navbar-brand">Games-Host</router-link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <div v-show="this.$store.getters.isLoggedIn">
                    <li class="nav-item active">
                        <router-link :to="{name: 'home'}" class="nav-link">Home</router-link>
                    </li>
                </div>
                <div v-show="!this.$store.getters.isLoggedIn">
                    <li class="nav-item">
                        <router-link :to="{name: 'login'}" class="nav-link">Login</router-link>
                    </li>
                </div>
            </ul>
            <button class="btn btn-outline-danger my-2 my-sm-0" type="submit" @click="logout" v-show="this.$store.getters.isLoggedIn">Logout</button>
        </div>
    </nav>
</template>

<script>
    import auth from "../../helpers/auth"
    import { token } from "../../resources"

    export default {
        name: "Header",
        methods: {
            logout: function () {
                this.$store.commit("setLoggedIn", false)
                auth.logOut()
                this.$router.push({ name: "login" })
                token.revoke()
            }
        }
    }
</script>

<style>

</style>

