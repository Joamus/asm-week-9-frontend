<template>


<div style="padding-top: 2rem">
  <div class="col-md-12">
      <div>
        <h3>Opret bruger</h3>
      </div>
    </div>
    <div class="row">
      
      <div class="col-md-12">
        <input v-model="username" placeholder="Brugernavn" type="text"/>
      </div>

    
      <div class="col-md-12">
        <input v-model="password" placeholder="Kodeord" type="text"/>
      </div>

      
      <div class="col-md-12">
        <input v-model="email" placeholder="Email" type="text"/>
      </div>

      
      <div class="col-md-12">
        <input v-model="zip" placeholder="Postnummer" type="text"/>
      </div>

      <div class="col-md-12">
        <input v-model="city" placeholder="By" type="text"/>
      </div>

      
      <div class="col-md-12">
        <input v-model="streetName" placeholder="Adresse" type="text"/>
      </div>

  
      <div class="col-md-12">
        <input v-model="streetNumber" placeholder="Husnummer" type="text"/>
      </div>



      <div class="col-md-12" style="padding-top: 1rem">
        <button @click="signup()">Opret</button>

      </div>
      
    </div>
    
  </div>
   

</template>

<script>

import axios from 'axios'

export default {
  name: 'Signup',
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
    signup() {
      console.log('Signup')
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
