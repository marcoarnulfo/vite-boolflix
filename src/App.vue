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
  }
}

</script>

<template>
  <AppHeader/>
  <AppMain/>
</template>

<style lang="scss" scoped>

</style>
