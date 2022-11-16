<script>
import { store } from './store';
export default {
  name: 'AppVue',
  data(){
    return{
      store
    }
  }
}

</script>

<template>
  <div class="mb-3">
    <textarea v-model="store.test.test2" class="form-control" name="" id="" rows="3">

    </textarea>
  </div>
  <h1>{{store.test.test2}}</h1>

</template>

<style scoped>
</style>
