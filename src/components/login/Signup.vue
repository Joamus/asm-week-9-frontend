<template>
<div style="padding-top: 2rem">
  <div class="col-md-12">
      <div>
        <h3>Opret bruger</h3>
      </div>
      {{errorMessage}}
    </div>
    <div class="row">
      
      <div class="col-md-12">
        <input v-model="user.username" placeholder="Brugernavn" type="text"/>
      </div>

    
      <div class="col-md-12">
        <input v-model="user.password" placeholder="Kodeord" type="password"/>
      </div>

      
      <div class="col-md-12">
        <input v-model="user.email" placeholder="Email" type="text"/>
      </div>

      
      <div class="col-md-12">
        <input v-model="user.zip" placeholder="Postnummer" type="text"/>
      </div>

      <div class="col-md-12">
        <input v-model="user.city" placeholder="By" type="text"/>
      </div>

      
      <div class="col-md-12">
        <input v-model="user.streetName" placeholder="Adresse" type="text"/>
      </div>

  
      <div class="col-md-12">
        <input v-model="user.streetNumber" placeholder="Husnummer" type="text"/>
      </div>



      <div class="col-md-12" style="padding-top: 1rem">
        <button @click="signup()">Opret</button>

      </div>    
    </div>
    
  </div>
   

</template>

<script>

import axios from 'axios'
import globalState from '../../global-state';


export default {
  name: 'Signup',
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
          },

          errorMessage: ""
      }
          

  },

  methods: {
    signup() {
      axios.post(`${globalState.apiUrl}/api/signup`, this.user)
      .then((response) => {
        console.log(response)

      })
      .catch((errorResponse) => {

        this.errorMessage = "Error: " + errorResponse.response.data.message
      })
    }
  },

  
  
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
