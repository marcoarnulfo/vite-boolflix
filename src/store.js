import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
    count: 0,
    test: {
        url: "https://www.breakingbadapi.com/api/characters?category=Better+Call+Saul",
        method: "GET",
        timeout: 0,
        test2: '',
    }
})