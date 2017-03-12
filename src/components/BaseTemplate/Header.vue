<template>
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">Navbar</a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/contact">Contact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/login" v-show="!this.$store.getters.isLoggedIn">Login</a>
                </li>
            </ul>
            <button class="btn btn-outline-danger my-2 my-sm-0" type="submit" @click="logout" v-show="this.$store.getters.isLoggedIn">Logout</button>
        </div>
    </nav>
</template>

<script>
    import auth from "../../helpers/auth"

    export default {
        name: "Header",
        methods: {
            logout: function () {
                auth.logOut()
                this.$store.commit("setLoggedIn", false)
                this.$router.push("/")
            }
        }
    }
</script>

<style>

</style>

