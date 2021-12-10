<template>
    <div id="spirit">
       <!--  <div class="header">
            <h1>Spirit</h1>
            <navigation />  
        </div> -->

        <nav class="test">
            <a href="#" class="menu-item">
                <div>
                    <span class="menu-item-text">Perseverance</span>
                </div>
            </a>
            <a href="#" class="menu-item">
                <div>
                    <span class="menu-item-text">Spirit</span>
                </div>
            </a>
            <a href="#" class="menu-item">
                <div>
                    <span class="menu-item-text">Curiosity</span>
                </div>
            </a>
            <a href="#" class="menu-item">
                <div>
                    <span class="menu-item-text">Oportunity</span>
                </div>
            </a>
        </nav>
    </div>
</template>

<script>
/* import Navigation from '../components/Navigation.vue'; */
import { rotateText } from '../assets/js/textRotateEffect';

export default { 
    components: {
        /* Navigation, */
    },
    
    mounted(){
        rotateText();
    }
}

</script>

<style lang="scss" scoped>

</style>