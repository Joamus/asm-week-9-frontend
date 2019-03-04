<template>
<div class="col-4">
    <div class="item background-shadow">
            {{item.name}}
            <hr>
            <span class="small">{{item.description}}</span>
            <hr>
            {{item.type}}
            <br>
            <button class="add" @click="addBasketItem()">Læg i kurv</button>
    </div>
    
</div>
        
</template>



<script>
import axios from 'axios'
import globalState from '../../global-state'

export default {
    name: 'Item',
    props: {'item' : Object},

    methods: {
        addBasketItem() {

            axios.post(`${globalState.apiUrl}/api/basketItem`, this.item).then((response) => {
                console.log(response.data)
                globalState.eventBus.$omit('AddedBasketItem', response.data)
            })
            .catch((errorResponse) => {

            })

        }
    }

}


</script>


<style scoped>
.item {
    border-radius: 4px;
    min-height: 180px;
    max-height: 180px;
}



</style>