<script>

import { store } from "./store";

import axios from "axios";

import AppHeader from './components/AppHeader.vue';

import CardsComponents from './components/CardsComponents.vue'


export default {
  name: 'MyApp',
  components: {
    AppHeader,
    CardsComponents,
  },

  data() {
    return {
      store,
      imgWidth: "w300"
    };
  },

  computed: {
    image() {
      return store.srcImg + this.imgWidth
    }
  },

  methods: {

  
    search () {

      const params = {
        api_key: this.store.apiKey
      }

      if (this.store.searchKey) {
        params.query = this.store.searchKey;
      }

      this.apiCall(this.store.apiUrlFilm, params, "FilmResults");
      this.apiCall(this.store.apiUrlTv, params, "tvResults");
    },
    
    apiCall(url, params, results) {
      axios.get(url, { params }).then(response => { this.store[results] = response.data.results;
      })
    }
  },
  created () {
    this.search()
  }
}
</script>

<template>

  <AppHeader @search="search" />

  <div class="container" v-show="store.FilmResults.length">

      <h2>
        Movies <font-awesome-icon icon="fa-solid fa-star" />
      </h2>

      <ul>
        <CardsComponents class="col-3 mt-3 border me-2" v-for="result in store.FilmResults" :key="result.id" :img="`${image}${result.poster_path}`" :title="result.title" :original_title="result.original_title" :language="result.original_language" :vote="result.vote_average" />
      </ul>

    </div>

      

      <!-----

        <p>{{ result.title }} </p>
      
      <p>{{ result.original_title }} </p>
      
      <img v-if="findLang(result.original_language)"  :src="`./public/img/${findLang(result.original_language)[1]}.png`" :alt="result.original_language">
      <p v-else> 
        {{ result.original_language }} 
      </p>
        
      <p> 
        {{ result.vote_average }} 
      </p>
      
      
      -->
      
      
  
  
  

  <div class="container" v-show="store.tvResults.length">

    
      
      <h2>
        Tv series
      </h2>

      <ul>
        <CardsComponents class="col-3 mt-3 me-1 border" v-for="result in store.tvResults" :key="result.id" :img="`${image}${result.poster_path}`" :title="result.name" :original_title="result.original_name" :language="result.original_language" :vote="result.vote_average" />
      </ul>
  </div>
  <!-----

    <div class="text-center">
    <input type="text" name="" id="">
    <button type="button" class="btn btn-primary">Primary</button>
  </div>
  
  
  -->
  
  
</template>

<style scoped>

.container{
  margin: 30px 20px;
}

ul{
  display: flex;
  flex-wrap: wrap;
}

</style>
