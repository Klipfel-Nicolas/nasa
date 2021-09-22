<template>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link id="spirit" to="/spirit">Spirit</router-link> |
        <router-link  id="curiosity" to="/curiosity">Curiosity</router-link> |
        <router-link id="opportunity" to="/opportunity">Opportunity</router-link> |
        <router-link id="rover" to="/rover">Rover</router-link>
        <router-link id="perseverance" to="/perseverance">perseverance</router-link>
    </div>
</template>

<script>
export default {
    name:'Navigation',
}
</script>

<style lang="css" scoped>
    
    #nav {
        padding: 30px;
        position: relative;
        z-index: 100;
    }

    #nav a {
        font-weight: bold;
        color: #f1f1f1;
        font-size: 1.2rem;
        z-index: 100000;
    }

    #nav a:hover{
        color: #0A3DA8;
    }

    #nav a.router-link-exact-active {
        color: #CD3711;
    }
</style>