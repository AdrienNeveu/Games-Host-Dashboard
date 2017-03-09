<template>
  <div class="home">
    <div class="text-center">
      <img src="../assets/logo.png">
      <h1>Welcome!</h1>
      <p class="lead">
        This is the Home page for your new app, defined in <code>src/components/Home.vue</code>.
      </p>
      <button @click="test()">test</button>
    </div>
  </div>
</template>

<script>
import { token } from '../resources'

export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    test: function () {
      token.issue().then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
