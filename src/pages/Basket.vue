<template>
    <div class="row">
      <BasketItem v-for="item in basketItems" :key="item.id" :item="item"/>
    </div>
</template>



<script>
import axios from 'axios'
import BasketItem from '../components/basket/BasketItem.vue'
import globalState from '../global-state'

export default {
    name: "Basket",
    components: {
        BasketItem
    },

    data() {
        return {
            basketItems: []
        }
    },
    created() {
        globalState.eventBus.$on('AddedBasketItem', (basketItem) => {
            this.getBasketItems();
        })

        this.getBasketItems();

    },

    methods: {
        getBasketItems() {
            axios.get(`${globalState.apiUrl}/api/basketItem`)
            .then((response) => {
                this.basketItems = response.data
                console.log(this.basketItems)

            })
            .catch((errorResponse) => {
                console.log(errorResponse)

            })

        }
    },

    
    

}
</script>
