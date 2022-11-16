<script>
//import axios from 'axios';
import { store } from './store';
export default {
  name: 'AppVue',
  data(){
    return{
      store
    }
  },
  mounted() {
    //this.store.callApi(this.store.API_URLtest)
    //console.log(this.store.films);
    //console.log("funziono");
  }
}

</script>

<template>
  <div class="container text-center">
    <input v-model="store.UserChoice" type="text" class="form-control my-5">
    <button class="btn mb-4 btn-primary" @click="store.ShowFilms()">
      call api
    </button>
  </div>

<div class="container">
  <div class="row row-cols-5">
    <div class="col p-3" v-for="film in store.medias">
      <div class="card bg-primary text-center ">
        <div>Titolo {{film.title ?? ''}}{{film.name ?? ''}}</div> <!-- ?? '' --> <!-- Titolo -->
        <div>{{film.original_title ?? ''}}{{film.original_name ?? ''}}</div> <!-- Titolo originale: -->
        <div>Lingua {{film.original_language}} <!-- Lingua: -->
          <span v-if="film.original_language == 'en'"><img src="./assets/img/united-kingdom.png" alt=""></span>
          <span v-if="film.original_language == 'ja'"><img src="./assets/img/japan.png" alt=""></span>
          <span v-if="film.original_language == 'fr'"><img src="./assets/img/france.png" alt=""></span>
        </div>
        <div>Voto {{film.vote_average}}</div>
      </div>
    </div>
  </div>

</div>

</template>

<style scoped>
img{
  width: 30px;
}
</style>
