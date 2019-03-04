<style src='./index.css'></style>

<template>
  <div id="app">
    <link rel="stylesheet" 
          href="https://pro.fontawesome.com/releases/v5.6.1/css/all.css" 
          integrity="sha384-NJXGk7R+8gWGBdutmr+/d6XDokLwQhF1U3VA7FhvBDlOq7cNdI69z7NQdnXxcF7k" 
          crossorigin="anonymous">
    <Topbar/>
    <div class="container" style="padding-top: 10px">
      <router-view></router-view>
    </div>  

  </div>
</template>

<script>
import Topbar from './components/shared/Topbar.vue'

export default {
  name: 'app',
  components: {
    Topbar,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
