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
    //API_KEY: 'cfa82368dfdf0a8bb369a7770e576de6',
    UserChoice : '',
    films : null,
    //API_QUERY: `&query=${this.test}`,
    API_URL: 'https://api.themoviedb.org/3/search/movie?api_key=cfa82368dfdf0a8bb369a7770e576de6&query=', //senza il search
    API_URLtest: 'https://api.themoviedb.org/3/search/movie?api_key=cfa82368dfdf0a8bb369a7770e576de6&query=matrix',
    // Matrix come test
    callApi(url){
        axios.get(url)
        .then(response => {
            this.films = response.data
        })
    }
})