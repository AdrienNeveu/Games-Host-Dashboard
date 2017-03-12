<template>
    <form id="login-form" method="post" role="form" @submit.prevent="onSubmit">
        <transition name="fade">
            <div class="alert alert-danger" v-show="showError">
                The username or password you have entered is invalid.
            </div>
        </transition>
        <div class="form-group">
            <input type="email" id="username" tabindex="1" class="form-control" placeholder="E-Mail address" v-model="username">
        </div>
        <div class="form-group">
            <input type="password" id="password" tabindex="2" class="form-control" placeholder="Password" v-model="password">
        </div>
        <div class="form-group">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <input type="submit" name="login-submit" id="login-submit" tabindex="4" class="form-control btn btn-login" value="Log In">
                </div>
            </div>
        </div>
    </form>
</template>

<script>
    import { token } from "../../resources"
    import config from "../../../env"
    import auth from "../../helpers/auth"

    export default {
        data: function () {
            return {
                username: "",
                password: "",
                showError: false
            }
        },
        methods: {
            onSubmit: function () {
                this.showError = false
                token.issue({
                    grant_type: "password",
                    scope: "*",
                    username: this.username,
                    password: this.password,
                    client_id: config.client.id,
                    client_secret: config.client.secret
                }).then(
                    (res) => {
                        auth.setToken(res.body.access_token)
                        this.$store.commit("setLoggedIn", true)
                        this.$router.push("/")
                    }, (res) => {
                        this.showError = true
                    }
                )
            }
        }
    }
</script>

<style>
    .btn-login {
        background-color: #59B2E0;
        outline: none;
        color: #fff;
        font-size: 14px;
        height: auto;
        font-weight: normal;
        padding: 14px 0;
        text-transform: uppercase;
        border-color: #59B2E6;
    }

    .btn-login:hover,
    .btn-login:focus {
        color: #fff;
        background-color: #53A3CD;
        border-color: #53A3CD;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }

    .fade-enter, .fade-leave-to {
        opacity: 0
    }
</style>

