 <template>
    <div>
      <nav class="nav fixed-top" id="topbar">
        <a class="nav-link active" @click="navigate('/')">
          <h3>Recykel</h3>
        </a>
        <a class="nav-link" @click="navigate('/shop')">
          <h5>Cykler</h5>
        </a>
      <!--  <a class="nav-link">
          <h5>Damecykler</h5>
        </a>
        <a class="nav-link" target="_blank">
          <h5>Børnecykler</h5>
        </a> -->
        <a class="nav-link" @click="navigate('/login')">
          <h5>Login</h5>
        </a>
       <!-- <a class="nav-link">
          <h5>Profil</h5>
        </a> -->
      </nav>
    </div>
   
 </template>
 
 

<script>
export default {
  name: "Topbar",
  methods: {
    navigate(route) {
          this.$router.push({path: route})
        },
  },
}


</script>

<style scoped>

  #topbar {
    color: darkslategray;
    justify-content: left;
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