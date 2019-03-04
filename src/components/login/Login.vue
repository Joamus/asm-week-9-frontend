<template>
  <div>
    <div class="col-md-12">
      <div>
        <h3>Login</h3>
      </div>
    </div>
    <div class="row">

      <div class="col-md-12">
        <input type="text" placeholder="Brugernavn" v-model="user.username"/>
      </div>
      
      <div class="col-md-12">
        <input type="password" placeholder="Password" v-model="user.password"/>
      </div>

      <div class="col-md-12" style="padding-top: 1rem">
        <button @click="login()">Login</button>

      </div>
      
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
import globalState from '../../global-state.js'

export default {

  name: 'Login',
  data() {
      return  {
        user: {
          username: '',
          password: '',
          email: '',
          zip: '',
          city: '',
          streetName: '',
          streetNumber: '', 
          }
      }
  },
  methods: {
    login() {
    axios.post(`${globalState.apiUrl}/api/login`, this.user)
    .then((response) => {
      globalState.state.user = response.data;
      axios.defaults.headers.common['Authorization'] = `Bearer ${globalState.state.user.token}`
      globalState.state.loggedIn = true
      this.$router.push({name: 'home'})

    })
    .catch((errorResponse) => {
      console.log(errorResponse)
    })
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
