<template>
    <div id="curiosity">
        <h1>Curiosity</h1>
        <word-rotate 
            word="Curiosity"
        />
    </div>
</template>

<script>
import WordRotate from '../components/WordRotate.vue';

export default {
    name: 'Curiosity',

    components: {
        WordRotate
    }
}
</script>

<style lang="scss" scoped>
#curiosity{
    background: #000000;
    min-height: 100vh;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

}
</style>