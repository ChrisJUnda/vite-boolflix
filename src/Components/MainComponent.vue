<script>
import { store } from "../store";

import CardsComponents from "./CardsComponents.vue";


export default {
    name: "MainComponent",
    components: {
        CardsComponents
    },

    data() {
        return {
            store,
            imgWidth: "w185"
        }
    },

    computed: {
        image() {
            
            return store.srcImg + this.imgWidth
        }
    }
}
</script>

<template>
    <div class="container" v-show="store.movieResults.length">
        <h2>Movies</h2>
        <ul class= "d-flex flex-wrap">
            <CardsComponents v-for="result in store.movieResults" :key="result.id" :img="`${image}${result.poster_path}`"
                :title="result.title" :original_title="result.original_title" :language="result.original_language"
                :vote="result.vote_average" :overview="result.overview" />
        </ul>
    </div>
    <div class="container" v-show="store.tvResults.length">
        <h2>Tv series</h2>
        <ul class= "d-flex flex-wrap">
            <CardsComponents v-for="result in store.tvResults" :key="result.id" :img="`${image}${result.poster_path}`"
                :title="result.name" :original_title="result.original_name" :language="result.original_language"
                :vote="result.vote_average" :overview="result.overview" />
        </ul>
    </div>
</template>

<style>
.container {
    margin: 30px 20px;
}
</style>