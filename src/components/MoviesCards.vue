<script>
import { store } from '../store';
import ZeroStars from './ZeroStars.vue';
import OneStar from './OneStar.vue';
import TwoStars from './TwoStars.vue';
import ThreeStars from './ThreeStars.vue';
import FourStars from './FourStars.vue';
import FiveStars from './FiveStars.vue';



export default {
    name: 'MoviesCards.vue',
    props: {
        film: Object
    },
    data() {
        return {
            store
        }
    },
    components: {
        ZeroStars,
        OneStar,
        TwoStars,
        ThreeStars,
        FourStars,
        FiveStars
    },
    methods:{
        getImagePath: function(imgPath) {
            return new URL(imgPath, import.meta.url).href;
        }
    }
}
</script>

<template>

    <div class="col p-3">
        <div class="card bg-dark text-light">
            <img class="card_img rounded img-fluid" :src="store.img_path + film.poster_path" alt="">
            <img v-if="film.poster_path == null" class="card_img rounded" src="https://picsum.photos/200/300" alt="">
            <div class="info p-3">
                <div class="py-2">
                    <span v-if="film.original_title != film.title"><span class="fw-bolder">Titolo originale:</span>
                        {{ film.original_title ?? '' }}</span>
                    <span v-if="film.original_name != film.name"><span class="fw-bolder">Titolo originale:</span>
                        {{ film.original_name ?? '' }}</span>
                </div>
                <div class="py-2">Lingua {{ film.original_language }}
                    <span v-if="film.original_language == 'en'"><img :src="getImagePath(`../assets/img/united-kingdom.png`)" alt=""></span>
                    <span v-if="film.original_language == 'ja'"><img :src="getImagePath(`../assets/img/japan.png`)" alt=""></span> 
                    <span v-if="film.original_language == 'fr'"><img :src="getImagePath(`../assets/img/france.png`)" alt=""></span>
                </div>
                <div class="py-2">
                    <span class="fw-bolder">Voto:</span>
                    <ZeroStars v-if="Math.round(film.vote_average / 2) == 0" />
                    <OneStar v-if="Math.round(film.vote_average / 2) == 1" />
                    <TwoStars v-if="Math.round(film.vote_average / 2) == 2" />
                    <ThreeStars v-if="Math.round(film.vote_average / 2) == 3" />
                    <FourStars v-if="Math.round(film.vote_average / 2) == 4" />
                    <FiveStars v-if="Math.round(film.vote_average / 2) == 5" />
                    {{ Math.round(film.vote_average / 2) }}
                </div>
                <div>
                    <span class="fw-bolder">Overview: </span>
                    <span class="font_lower">{{ film.overview }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
span img {
    width: 30px;
}

.card {
    height: 608px;
    &:hover {
        cursor: pointer;
        box-shadow: 0 0 10px black;

        .card_img {
            display: none;
        }
        .info {
            display: block;
        }
    }

    .info {
        display: none; 
    }
}

.font_lower {
    font-size: 13px;
}
</style>