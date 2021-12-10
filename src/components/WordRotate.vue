<template>
    <div class="word-container">
        <div>
            <span class="word-text">{{ word }}</span>
        </div>
    </div>
</template>


<script>
/* import { rotateText } from '../assets/js/textRotateEffect'; */

export default { 
    name: "WordRotate",

    props: {
        word: {
            type: String,
            require: true,
            default: 'Nasa'
        },
    },

    /* mounted(){
        rotateText();
    } */
}
</script>

