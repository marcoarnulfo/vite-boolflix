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
            store,
            imgEN: 'united-kingdom.png',
            imgJA: 'japan.png',
            imgFR: 'france.png'
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
        <!-- v-for="film in store.medias" -->
        <div class="card bg-dark text-light">
            <img class="card_img rounded img-fluid" :src="store.img_path + film.poster_path" alt="">
            <img v-if="film.poster_path == null" class="card_img rounded" src="https://picsum.photos/200/300" alt="">
            <div class="info p-3">
                <div><span class="fw-bolder">Titolo:</span> {{ film.title ?? '' }}{{ film.name ?? '' }}</div>
                <!-- ?? '' -->
                <!-- Titolo -->
                <div class="py-2">
                    <span v-if="film.original_title != film.title"><span class="fw-bolder">Titolo originale:</span>
                        {{ film.original_title ?? '' }}</span>
                    <span v-if="film.original_name != film.name"><span class="fw-bolder">Titolo originale:</span>
                        {{ film.original_name ?? '' }}</span>
                </div> <!-- Titolo originale: -->
                <div class="py-2">Lingua {{ film.original_language }}
                    <!-- Lingua: -->
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

    //width: 400px;
    &:hover {
        //background-color: black;
        cursor: pointer;
        box-shadow: 0 0 10px black;

        //display: none;
        .card_img {
            display: none;
        }

        .info {
            display: block;
            //height: 300px;
        }
    }

    .info {
        display: none; //display none da mantenere 
    }


}

.font_lower {
    font-size: 13px;
}

// a{
//   text-decoration: none;
//   color: whitesmoke;
//   font-weight: bolder;

//   &:hover{
//     text-shadow: 0 0 10px gray;
//   }
// }

// .selected{
//   border-bottom: 3px solid red;
//   font-size: 1.2rem;
// }
</style>