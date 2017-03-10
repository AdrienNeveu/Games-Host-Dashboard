<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <div class="panel panel-login">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-6">
                                <a @click="displayPage='login'" :class="{active: displayPage=='login'}" id="login-form-link" href="#">Login</a>
                            </div>
                            <div class="col-6">
                                <a @click="displayPage='register'" :class="{active: displayPage=='register'}" id="register-form-link" href="#">Register</a>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-lg-12">
                                <login v-show="displayPage == 'login'"></login>
                                <register v-show="displayPage == 'register'"></register>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'auth',
  components: {
    login: require('./Auth/Login'),
    register: require('./Auth/Register')
  },
  data: function () {
    return {
      displayPage: 'login'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.panel-login {
    margin-top: 90px;

	border-color: #ccc;
	-webkit-box-shadow: 2px 2px 8px 4px rgba(0,0,0,0.2);
	-moz-box-shadow: 2px 2px 8px 4px rgba(0,0,0,0.2);
	box-shadow: 2px 2px 8px 4px rgba(0,0,0,0.2);
	padding: 12px;
}
.panel-login>.panel-heading {
	color: #00415d;
	background-color: #fff;
	border-color: #fff;
	text-align:center;
}
.panel-login>.panel-heading a{
	text-decoration: none;
	color: #666;
	font-weight: bold;
	font-size: 15px;
	-webkit-transition: all 0.1s linear;
	-moz-transition: all 0.1s linear;
	transition: all 0.1s linear;
}
.panel-login>.panel-heading a.active{
	color: #029f5b;
	font-size: 18px;
}
.panel-login>.panel-heading hr{
	margin-top: 10px;
	margin-bottom: 0px;
	clear: both;
	border: 0;
	height: 1px;
	background-image: -webkit-linear-gradient(left,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.15),rgba(0, 0, 0, 0));
	background-image: -moz-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,0.15),rgba(0,0,0,0));
	background-image: -ms-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,0.15),rgba(0,0,0,0));
	background-image: -o-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,0.15),rgba(0,0,0,0));
}
</style>
