<script>
import SearchComponent from './SearchComponent.vue'

export default {
    name: "HeaderComponent",

    components: {
        SearchComponent
    }
}

</script>

<template>

    <header class=" d-flex align-items-center p-2 bg-black justify-content-between">
        <div class="col-9">
            <h1>BOOLFLIX</h1>

        </div>
        <div class="col-3">
            <SearchComponent @search="$emit('search')" />

        </div>
        
        
    </header>

</template>

<style scoped>

h1 {
    color: red;
    text-transform: uppercase;
    line-height: 80px;
}
</style>