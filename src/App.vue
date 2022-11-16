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
  <div class="row">
    <div class="col" v-for="film in store.films">
      <div class="card bg-primary text-center ">
        <div>Titolo:{{film.title}}</div>
        <div>Titolo originale:{{film.original_title}}</div>
        <div>Lingua:{{film.original_language}}</div>
        <div>Voto:{{film.vote_average}}</div>
      </div>
    </div>
  </div>

</div>

</template>

<style scoped>
</style>
