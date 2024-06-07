import { reactive } from 'vue';

export const store = reactive({
    FilmResults: [],
    tvResults: [],
    apiUrlFilm: "https://api.themoviedb.org/3/search/movie",
    apiUrlTv: "https://api.themoviedb.org/3/search/tv",
    apiKey: "69b7e94c68d1d11ec87135cf34cb6de2",
    searchKey: "",
});