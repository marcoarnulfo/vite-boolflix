<script>
import { store } from '../store';
export default {
    name: 'AppNav',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container d-flex p-4 justify-content-between">
        <div class="d-flex align-items-center">
            <h1 class="text-danger pe-2">BoolFlix</h1>
            <div class="px-2" :class="store.category == 'home' ? 'selected' : ''"><a @click="store.Home()"
                    href="#">Home</a></div>
            <div class="px-2" :class="store.category == 'films' ? 'selected' : ''"><a @click="store.Films()"
                    href="#">Film</a></div>
            <div class="px-2" :class="store.category == 'tv series' ? 'selected' : ''"><a @click="store.TvSeries()"
                    href="#">Serie TV</a></div>
        </div>
        <div class="d-flex">
            <input v-model="store.UserChoice" type="text" @keyup.enter="store.ShowFilms()"
                class="align-self-center rounded">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.selected {
    border-bottom: 3px solid red;
    font-size: 1.2rem;
}

a {
    text-decoration: none;
    color: whitesmoke;
    font-weight: bolder;

    &:hover {
        text-shadow: 0 0 10px gray;
    }
}
</style>