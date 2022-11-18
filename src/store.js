import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
    API_URL_TEST: 'https://api.themoviedb.org/3/search/movie?api_key=cfa82368dfdf0a8bb369a7770e576de6&query=Doctor%20strange',
    // Matrix come test
    category: 'home',
    UserChoice: '',
    img_path: 'https://image.tmdb.org/t/p/w500',
    //test: 'eNI7PtK6DEYgZmHWP9gQNuff8pv.jpg' ,
    medias: [],
    films: [],
    tvSeries: null,
    API_KEY: 'cfa82368dfdf0a8bb369a7770e576de6',
    API_URL_FILM: 'https://api.themoviedb.org/3/search/movie',
    API_URL_TV: 'https://api.themoviedb.org/3/search/tv',
    //API_URL_MULTI: 'https://api.themoviedb.org/3/search/multi',
    filmsApi(url, params) {
        axios.get(url, { params })
            .then(response => {
                this.films = response.data.results
                this.medias = this.films.concat(this.medias);
                //console.log(this.medias, 'sono in callApi(Films)');
                //this.seriesApi(this.API_URL_TV, params) // chiamo l'api delle serie tv
                //console.log(this.medias, 'end');
            })
    },
    seriesApi(url, params) {
        axios.get(url, { params })
            .then(response => {
                this.tvSeries = response.data.results
                this.medias = this.tvSeries.concat(this.medias);
            })
    },
    ShowFilms() {
        const params = {
            api_key: this.API_KEY,
            query: this.UserChoice,
        }
        this.medias = [];
        if (this.category == 'films') {
            this.filmsApi(this.API_URL_FILM, params) // chiamo api che contiene film e serie tv 
        } else if (this.category == 'tv series'){
            this.seriesApi(this.API_URL_TV, params) // chiamo l'api delle serie tv
        } else {
            this.filmsApi(this.API_URL_FILM, params)
            this.seriesApi(this.API_URL_TV, params)
        }
    },    
    TvSeries() {
        this.medias = [];
        console.log('funziono, serie tv selezionata');
        this.category = 'tv series'
        console.log(this.category);
    },
    Films() {
        this.medias = [];
        console.log('funziono, film selezionato');
        this.category = 'films'
        console.log(this.category);
    },
    Home(){
        console.log('funziono, home selezionato');
        this.category = 'home'
        console.log(this.category);
        this.filmsApi(this.API_URL_TEST)
    },
})