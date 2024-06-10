import { reactive } from 'vue';

export const store = reactive({
    movieResults: [],
    tvResults: [],
    apiInfo: {
        apiUrl: "https://api.themoviedb.org/3/search/",
        endpoints: {
            movie: "movie",
            tv: "tv"
        }
    },
    apiKey: "69b7e94c68d1d11ec87135cf34cb6de2",
    srcImg: "https://image.tmdb.org/t/p/",
    loading: true
});