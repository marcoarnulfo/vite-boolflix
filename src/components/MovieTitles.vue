<script>
export default {
    name: 'MovieTitles',
    props: {
        titleFilm: String, // film.title
        titleTvSeriesTitle: String, // film.name
        originalFilmTitle: String, // film.original_title
        originalTvSeriesTitle: String, // film.original_name
    }
}
</script>

<template>
    <div class="py-2">
        <div>
            <span class="fw-bolder">Titolo: </span>
            <span>{{ titleFilm ?? '' }}</span>
            <span>{{ titleTvSeriesTitle ?? '' }}</span>
        </div>
        <div>
            <span v-if="titleFilm != originalFilmTitle">
                <span class="fw-bolder">Titolo originale:</span>
                {{ originalFilmTitle ?? '' }}
            </span>
            <span v-if=" titleTvSeriesTitle != originalTvSeriesTitle ">
                <span class="fw-bolder">Titolo originale:</span>
                {{ originalTvSeriesTitle ?? '' }}
            </span>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>