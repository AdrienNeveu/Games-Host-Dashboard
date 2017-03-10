<template>
    <form id="login-form" method="post" role="form">
        <div class="form-group">
            <input type="email" name="username" id="username" tabindex="1" class="form-control" placeholder="E-Mail address" value="">
        </div>
        <div class="form-group">
            <input type="password" name="password" id="password" tabindex="2" class="form-control" placeholder="Password">
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
export default {
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
.forgot-password {
	text-decoration: underline;
	color: #888;
}
.forgot-password:hover,
.forgot-password:focus {
	text-decoration: underline;
	color: #666;
}
</style>

