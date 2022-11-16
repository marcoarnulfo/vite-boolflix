<script>
import axios from 'axios';
import { store } from './store';
export default {
  name: 'AppVue',
  data(){
    return{
      store
    }
  },
  mounted() {
    this.store.callApi(this.store.API_URLtest)
    console.log(this.store.films);
  }
}

</script>

<template>
  <div class="mb-3">
    <textarea v-model="store.UserChoice" class="form-control" name="" id="" rows="3">

    </textarea>
  </div>
  <h1>{{store.API_URL}}</h1>

</template>

<style scoped>
</style>
