<script>
import { store } from '../store';
export default {
    name: 'LanguagesFlags',
    props:{
        language: String
    },
    methods:{
        getImagePath: function(imgPath) {
            return new URL(`../assets/img/${imgPath}`, import.meta.url).href;
        }
    },
    data(){
        return {
            store
        }
    }
}
</script>

<template>

    <div class="py-2">Lingua {{ language }}
        <span v-if="store.languages.includes(language)"><img
                :src="getImagePath(`${language}.png`)" alt=""></span>
    </div>

</template>

<style lang="scss" scoped>
span img {
    width: 30px;
}
</style>