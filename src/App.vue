<script>
//import axios from 'axios';
import ZeroStars from './components/ZeroStars.vue';
import OneStar from './components/OneStar.vue';
import TwoStars from './components/TwoStars.vue';
import ThreeStars from './components/ThreeStars.vue';
import FourStars from './components/FourStars.vue';
import FiveStars from './components/FiveStars.vue';
import { store } from './store';
export default {
  name: 'AppVue',
  data(){
    return{
      store
    }
  },
  components:{
    ZeroStars,
    OneStar,
    TwoStars,
    ThreeStars,
    FourStars,
    FiveStars
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
      <div class="card bg-primary p-3">
        <img class="card_img" :src="store.img_path + film.backdrop_path" alt="">
        <img v-if="film.backdrop_path == null" class="card_img" src="https://picsum.photos/200/300" alt="">
        <div class="info">
          <div><span class="fw-bolder">Titolo:</span> {{film.title ?? ''}}{{film.name ?? ''}}</div> <!-- ?? '' --> <!-- Titolo -->
          <div><span class="fw-bolder">Titolo originale:</span> {{film.original_title ?? ''}}{{film.original_name ?? ''}}</div> <!-- Titolo originale: -->
          <div>Lingua {{film.original_language}} <!-- Lingua: -->
            <span v-if="film.original_language == 'en'"><img src="./assets/img/united-kingdom.png" alt=""></span>
            <span v-if="film.original_language == 'ja'"><img src="./assets/img/japan.png" alt=""></span>
            <span v-if="film.original_language == 'fr'"><img src="./assets/img/france.png" alt=""></span>
          </div>
          <div>
            <span class="fw-bolder">Voto:</span>
            <ZeroStars v-if="Math.round(film.vote_average / 2) == 0" />
            <OneStar v-if="Math.round(film.vote_average / 2) == 1" />
            <TwoStars v-if="Math.round(film.vote_average / 2) == 2"/>
            <ThreeStars v-if="Math.round(film.vote_average / 2) == 3"/>
            <FourStars v-if="Math.round(film.vote_average / 2) == 4"/>
            <FiveStars v-if="Math.round(film.vote_average / 2) == 5"/>
            {{Math.round(film.vote_average / 2)}}
          </div>
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
  height: 400px;
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
    //display: none;  //display none da mantenere 
  }
  
  .card_img{
    display: none; // display none di test
    //width: 100px;
    //display: none;
    height: 400px;
    //object-fit: cover;
  }
}




</style>
