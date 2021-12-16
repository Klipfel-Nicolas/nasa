<template>
    <div id="nav">
        <router-link to="/">
            <word-rotate 
                word="Home"
            ></word-rotate>
        </router-link> 
 
        <router-link id="spirit" to="/spirit">
            <word-rotate 
                word="Spirit"
            />
        </router-link> 
        
        <router-link  id="curiosity" to="/curiosity">
            <word-rotate 
                word="Curiosity"
            />
        </router-link> 
        
        <router-link id="opportunity" to="/opportunity">
            <word-rotate 
                word="Opportunity"
            />
        </router-link> 
        
        <router-link id="rover" to="/rover">
            <word-rotate 
                word="Rover"
            />
        </router-link>
        
        <router-link id="perseverance" to="/perseverance">
            <word-rotate 
                    word="perseverance"
            />
        </router-link> 
    </div>
</template>

<script>
import WordRotate from '../components/WordRotate.vue';
import { rotateText } from '../assets/js/textRotateEffect';

export default {
    name:'Navigation',

    components: {
        WordRotate
    },

    mounted(){
        rotateText();
    }
}
</script>

<style lang="css" scoped>
    
    #nav {
        position: relative;
        z-index: 100;
        
    }

    #nav a {
        font-weight: bold;
        color: #f1f1f1;
        z-index: 100000;
    }

    #nav a.router-link-exact-active {
        color: #CD3711;
    }
</style>