<script>
import FullStars from './FullStars.vue';
import EmptyStars from './EmptyStars.vue';
export default {
    name: 'VoteStars',
    props:{
        vote: Number
    },
    components:{
        FullStars,
        EmptyStars,
    }
}
</script>

<template>

    <div class="py-2">
        <span class="fw-bolder">Voto:</span>
        <FullStars v-for="star in Math.round( vote / 2)" />
        <EmptyStars v-for="star in (5 - Math.round(vote / 2))" />
        {{ Math.round(vote / 2) }}
    </div>

</template>

<style lang="scss" scoped>

</style>