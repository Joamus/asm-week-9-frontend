import Vue from 'vue';


export default {

    eventBus: new Vue(),
    apiUrl : "http://localhost:3000",
    state : {
        user: {},
        loggedIn: false
    },

    
}