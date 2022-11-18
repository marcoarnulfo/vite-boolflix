<script>
import MoviesCards from './MoviesCards.vue'
import { store } from '../store';

export default {
    name: 'AppMain',
    components:{
        MoviesCards,
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row row-cols-3">
                <MoviesCards v-for="film in store.medias" :film="film"/>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>

</style>