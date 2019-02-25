<template>
<div>
    <Login/>
    <Signup/>
</div>

</template>

<script>


import Login from '../components/login/Login.vue'
import Signup from '../components/login/Signup.vue'

export default {
    name: 'LoginPage',
    components: {Login, Signup}

}

</script>