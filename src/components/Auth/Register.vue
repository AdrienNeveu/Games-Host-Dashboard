<template>
    <form id="register-form" method="post" role="form">
        <div class="form-group">
            <input type="email" name="username" id="email" tabindex="1" class="form-control" placeholder="E-Mail address" value="">
        </div>
        <div class="form-group">
            <input type="password" name="password" id="password" tabindex="2" class="form-control" placeholder="Password">
        </div>
        <div class="form-group">
            <input type="password" name="confirm-password" id="confirm-password" tabindex="2" class="form-control" placeholder="Confirm Password">
        </div>
        <div class="form-group">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <input type="submit" name="register-submit" id="register-submit" tabindex="4" class="form-control btn btn-register" value="Register Now">
                </div>
            </div>
        </div>
    </form>
</template>

<script>
    export default {}
</script>

<style>
    .btn-register {
        background-color: #1CB94E;
        outline: none;
        color: #fff;
        font-size: 14px;
        height: auto;
        font-weight: normal;
        padding: 14px 0;
        text-transform: uppercase;
        border-color: #1CB94A;
    }

    .btn-register:hover,
    .btn-register:focus {
        color: #fff;
        background-color: #1CA347;
        border-color: #1CA347;
    }
</style>
