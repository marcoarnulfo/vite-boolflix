<script>
export default {
    name: 'FullStars',
}
</script>

<template>
    <span>
        <font-awesome-icon class="yellow" icon="fa-star"/> <!-- v-for="star in Math.round(film.vote_average / 2)" -->
    </span>

</template>

<style lang="scss" scoped>

.yellow{
    color: yellow;
}


</style>