<template>
<div class="col-4">
    <div class="item background-shadow">
            {{item.item.name}}
            <hr>
            <span class="small">{{item.item.description}}</span>
            <hr>
            {{item.item.type}}
            <br>
    </div>
    
</div>
        
</template>



<script>
import axios from 'axios'
import globalState from '../../global-state'

export default {
    name: 'BasketItem',
    props: {'item' : Object},

    methods: {
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