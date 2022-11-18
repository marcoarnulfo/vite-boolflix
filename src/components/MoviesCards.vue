<script>
import { store } from '../store';
import OverView from './OverView.vue';
import VoteStars from './VoteStars.vue'
import LanguagesFlags from './LanguagesFlags.vue';
import MovieTitles from './MovieTitles.vue';

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
        OverView,
        VoteStars,
        LanguagesFlags,
        MovieTitles,
    }
}
</script>

<template>
    <div class="col p-3">
        <div class="card bg-dark text-light">
            <img class="card_img rounded img-fluid" :src="store.img_path + film.poster_path" alt="">
            <img v-if="film.poster_path == null" class="card_img rounded" src="https://picsum.photos/200/300" alt="">
            <div class="info p-3">
                <MovieTitles :titleFilm="film.title" :titleTvSeriesTitle="film.name"
                :originalFilmTitle="film.original_title" :originalTvSeriesTitle="film.original_name"/>
                <LanguagesFlags :language="film.original_language"/>
                <VoteStars :vote="film.vote_average "/>
                <OverView :overview="film.overview"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

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