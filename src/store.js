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
    films : null,
    API_KEY: 'cfa82368dfdf0a8bb369a7770e576de6',
    API_URL: 'https://api.themoviedb.org/3/search/movie?',
    callApi(url){
        axios.get(url)
        .then(response => {
            this.films = response.data.results
            console.log("yes");
            console.log(this.films);
            //console.log(this.films.results[0].title);
        })
    },
    ShowFilms () {
        const ShowFilm = `${this.API_URL}api_key=${this.API_KEY}&query=${this.UserChoice}`
        this.callApi(ShowFilm)
    }
})