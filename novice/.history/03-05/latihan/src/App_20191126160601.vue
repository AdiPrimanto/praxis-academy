<template>
  <div id="app">
    <img class="logo" alt="Vue logo" src="./assets/apple.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Logos />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Logos from './components/Logos.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
    Logos
  }
}
</script>

<style>
.logo{
        width: 150px;
        height: 150px;
    }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
