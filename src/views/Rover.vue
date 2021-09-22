<template>
    <div>
        <h1>Rover</h1>

        <h2>The Daily pics <span> {{date}}</span></h2>

        <h4>{{title}}</h4>
        <img :src="url" alt="photo from mars"/> 

        <p>{{ description }}</p>

    </div>
</template>

<script>
import { fetchDailyPic } from '../services/dailyPicApi';

export default {
    
    name: 'Rover',

    data(){
        return {
            title: '',
            url: '',
            date: '',
            description: '',
        }
    },

    async created(){
        const response = await fetchDailyPic();

        this.title = response.data.title;
        this.url = response.data.url;
        this.date = response.data.date;
        this.description = response.data.explanation;
    }
}
</script>