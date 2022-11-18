<script>
//import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppNav from './components/AppNav.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store';
export default {
  name: 'AppVue',
  data() {
    return {
      store
    }
  },
  components: {
    AppHeader,
    AppNav,
    AppMain,
  },
  mounted() {
    this.store.filmsApi(this.store.API_URL_TEST)
    //this.store.callApi(this.store.API_URLtest)
    //console.log(this.store.films);
    //console.log("funziono");
  }
}

</script>

<template>
  <AppHeader/>
  <!-- <header class="bg-dark">
    <div class="container d-flex p-4 justify-content-between">
      <div class="d-flex align-items-center">
        <h1 class="text-danger pe-2">BoolFlix</h1>
        <div class="px-2" :class="store.category == 'home' ? 'selected' : '' "><a @click="store.Home()" href="#">Home</a></div>
        <div class="px-2" :class="store.category == 'films' ? 'selected' : '' "><a @click="store.Films()" href="#">Film</a></div>
        <div class="px-2" :class="store.category == 'tv series' ? 'selected' : '' "><a @click="store.TvSeries()" href="#">Serie TV</a></div>
      </div>
      <div class="d-flex">
        <input v-model="store.UserChoice" type="text" @keyup.enter="store.ShowFilms()" class="align-self-center rounded">
        <button class="btn btn-primary align-self-center ms-3">Cerca</button>
      </div>
    </div>
  </header> -->

  <AppMain/>
  <div class="container">
    <div class="row row-cols-3">
<!-- 
      
      <div class="col p-3" v-for="film in store.medias">
        <div class="card bg-dark text-light">
          <img class="card_img rounded img-fluid" :src="store.img_path + film.poster_path" alt="">
          <img v-if="film.poster_path == null" class="card_img rounded" src="https://picsum.photos/200/300" alt="">
          <div class="info p-3">
            <div><span class="fw-bolder">Titolo:</span> {{ film.title ?? '' }}{{ film.name ?? '' }}</div> 
            
            <div class="py-2">
              <span v-if="film.original_title != film.title"><span class="fw-bolder">Titolo originale:</span>
                {{ film.original_title ?? '' }}</span>
              <span v-if="film.original_name != film.name"><span class="fw-bolder">Titolo originale:</span>
                {{ film.original_name ?? '' }}</span>
            </div> 
            <div class="py-2">Lingua {{ film.original_language }}
              
              <span v-if="film.original_language == 'en'"><img src="./assets/img/united-kingdom.png" alt=""></span>
              <span v-if="film.original_language == 'ja'"><img src="./assets/img/japan.png" alt=""></span>
              <span v-if="film.original_language == 'fr'"><img src="./assets/img/france.png" alt=""></span>
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
      </div> -->


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
