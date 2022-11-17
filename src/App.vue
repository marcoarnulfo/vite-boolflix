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
  <div class="row row-cols-4">
    <div class="col p-3" v-for="film in store.medias">
      <div class="card bg-primary text-center">
        <img class="card_img" :src="store.img_path + film.backdrop_path" alt="">
        <img v-if="film.backdrop_path == null" class="card_img" src="https://picsum.photos/200/300" alt="">
        <!-- src="{{store.img_path}}{{film.backdrop_path}}" -->
        <div class="info">
          <!-- <div>{{store.img_path + film.backdrop_path }}</div> -->
          <!-- <div>{{film.backdrop_path}}</div> -->
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

</div>

</template>

<style lang="scss" scoped>
span img{
  width: 30px;
}

.card{
  height: 200px;
  //width: 400px;
  &:hover{
    //background-color: black;
    cursor: pointer;
    box-shadow: 0 0 10px black;
    //display: none;
    .card_img{
      display: none;
    }
    .info{
      display: block;
      //height: 300px;
    }
  }
  .info{
    display: none;
  }
  
  .card_img{
    //width: 100px;
    //display: none;
    height: 200px;
    //object-fit: cover;
  }
}



</style>
