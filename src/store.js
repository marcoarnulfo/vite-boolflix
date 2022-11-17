import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
    /*
    test: {

        url: "https://www.breakingbadapi.com/api/characters?category=Better+Call+Saul",
        method: "GET",
        timeout: 0,
        test2: '',
    }
    */

    //API_URLtest: 'https://api.themoviedb.org/3/search/movie?api_key=cfa82368dfdf0a8bb369a7770e576de6&query=matrix',
    // Matrix come test
    UserChoice : '',
    img_path: 'https://image.tmdb.org/t/p/w500/' ,
    test: 'eNI7PtK6DEYgZmHWP9gQNuff8pv.jpg' ,
    medias: [],
    films : [],
    tvSeries : null,
    API_KEY: 'cfa82368dfdf0a8bb369a7770e576de6',
    API_URL: 'https://api.themoviedb.org/3/search/movie',
    API_URL_TV: 'https://api.themoviedb.org/3/search/tv',
    //API_URL_MULTI: 'https://api.themoviedb.org/3/search/multi',
    callApi(url, params){ 
        axios.get(url, {params})
        .then(response => {
            this.films = response.data.results
            this.medias = this.films.concat(this.medias);
            //console.log(this.medias, 'sono in callApi(Films)');
            this.testApi(this.API_URL_TV, params)
            //console.log(this.medias, 'end');
        })
    },
    testApi(url, params){ 
        axios.get(url, {params})
        .then(response => {
            this.tvSeries = response.data.results
            this.medias = this.tvSeries.concat(this.medias);
        })
    },
    ShowFilms () {
        const params = {
            api_key: this.API_KEY,
            query: this.UserChoice,
        }
        this.medias = [];
        this.callApi(this.API_URL, params)
    }
})