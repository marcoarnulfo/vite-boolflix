<script>
export default {
    name: 'OverView',
    props:{
        overview : String
    }
}
</script>

<template>

    <div>
        <span class="fw-bolder">Overview: </span>
        <span class="font_lower">{{ overview }}</span>
        <span v-if="overview == ''" class="font_lower">Overview non disponibilie!</span>
    </div>
    
</template>

<style lang="scss" scoped>
.font_lower {
    font-size: 13px;
}
</style>