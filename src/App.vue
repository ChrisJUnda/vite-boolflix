<script>
import { store } from "./store";

import axios from "axios";

import AppHeader from './Components/AppHeader.vue';



export default {
  name: 'AppVue',
  components: {
    AppHeader,
  },

  data() {
    return {
      store,
    };
  },

  methods: {
    searchFilm () {
      const params = {
        api_key: this.store.apiKey
      }

      if (this.store.searchKey) {
        params.query = this.store.apiKey;
      }

      axios.get(this.store.apiUrl, { params }).then(response => { this.store.FilmResults = response.data.results;
      })
    }
  },
  created () {
    this.searchFilm()
  }
}
</script>

<template>

  <AppHeader @search="searchFilm" />

  <ul>

    <li v-for="result in store.FilmResults">
      <p>{{ result.title }} </p>
      <p>{{ result.original_title }} </p>
      <p>{{ result.original_language }} </p>
      <p>{{ result.vote_average }} </p>
    </li>

  </ul>

  


  <!-----

    <div class="text-center">
    <input type="text" name="" id="">
    <button type="button" class="btn btn-primary">Primary</button>
  </div>
  
  
  -->
  
  
</template>
<!-- <style></style> -->
