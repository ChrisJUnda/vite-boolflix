<script>
import { store } from "./store";
import axios from "axios";


import HeaderComponent from "./Components/HeaderComponent.vue";
import MainComponent from "./Components/MainComponent.vue";

export default {
  name: "MyApp",

  components: {
    HeaderComponent,
    MainComponent
  },

  data() {
    return {
      store
    }
  },

  methods: {

    search() {

      this.store.loading = true;

      const params = {
        api_key: this.store.apiKey
      }

      if (this.store.searchKey) {
        params.query = this.store.searchKey;
      }

      const movieUrl = this.store.apiInfo.apiUrl + this.store.apiInfo.endpoints.movie;

      const tvUrl = this.store.apiInfo.apiUrl + this.store.apiInfo.endpoints.tv;

      this.apiCall(movieUrl, params, "movieResults");
      this.apiCall(tvUrl, params, "tvResults");
    },

    apiCall(url, params, results) {
      axios.get(url, { params })
        .then(response => {
          this.store[results] = response.data.results;
          this.store.loading = false
        })
    }
  },
  created() {
    this.search()
  }
}
</script>

<template>
  <HeaderComponent @search="search()" />
  <div v-if="this.store.loading">
    <p>Caricamento in corso...</p>
  </div>
  <div v-else>
    <MainComponent />
  </div>

</template>

<style scoped></style>





