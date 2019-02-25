<template>
  <div>
    <div class="col-md-12">
      <div>
        <h3>Login</h3>
      </div>
    </div>
    <div class="row">

      <div class="col-md-12">
        <input type="text" placeholder="Brugernavn" v-model="username"/>
      </div>
      
      <div class="col-md-12">
        <input type="text" placeholder="Password" v-model="password"/>
      </div>

      <div class="col-md-12" style="padding-top: 1rem">
        <button @click="login()">Login</button>

      </div>
      
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
      return  {
          username: '',
          password: '',
          email: '',
          zip: '',
          city: '',
          streetName: '',
          streetNumber: '', 
          }
  },
  methods: {
    login() {
      console.log('Login')
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
