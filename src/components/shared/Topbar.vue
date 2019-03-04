 <template>
    <div>
      <nav class="nav fixed-top" id="topbar">
          <a class="nav-link active" @click="navigate('/')">
            <h3 style="justify-content: left !important">Recykel</h3>
          </a>
          <a class="nav-link" @click="navigate('/shop')">
            <h5>Cykler</h5>
          </a>
        
          <a v-if="!globalState.state.loggedIn" class="nav-link" @click="navigate('/login')">
            <h5>Login</h5>
          </a>

          <a v-if="globalState.state.loggedIn" class="nav-link" @click="navigate('/basket')">
            <h5>Kurv</h5>
          </a> 

          <a v-if="globalState.state.loggedIn" class="nav-link" @click="logout()">
            <h5>Log ud</h5>
          </a>

    
      
      </nav>
    </div>
   
 </template>
 
 

<script>
import globalState from '../../global-state.js'

export default {
  name: "Topbar",
  data() {
    return {
      globalState,
    }
  },

  methods: {
    navigate(route) {
      this.$router.push({path: route})
    },
    logout() {
      this.globalState.state.loggedIn = false;
      this.navigate('/home')
    }
  },
}


</script>

<style scoped>

.topbar-center-items {
  justify-content: center;
  align-items: center;
  text-align: center;
}

  #topbar {
    background-color: #0694f3;
    color: white;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  a:focus {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>