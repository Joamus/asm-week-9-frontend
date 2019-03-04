<template>
<div>
    <div class="row">
      <Item v-for="item in items" :key="item.id" :item="item"/>
    </div>

  

</div>
   

</template>

<script>
import axios from 'axios'

import globalState from '../global-state.js'
import Item from "../components/item/Item.vue";

export default {
  name: 'Shop',
  components: {
    Item
  },
  data() {
      return  {
        username: 'Shop',
        items: []
        }

  },

  created() {
    this.getItems();

  },
  methods: {
    getItems() {
      axios.get(`${globalState.apiUrl}/api/item`)
      .then((response) => {
        this.items = response.data

      })
      .catch((erroResponse) => {

      })

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
