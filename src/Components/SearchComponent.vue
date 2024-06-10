<script>
import { store } from "../store";

export default {
    name: 'SearchComponent',
    emits: ["search"],
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <!-----


    <header class="bg-black vw-100 ">
        <div class="d-flex justify-content-between">
            
            <div class="col-9">
                
                <h1 class="text-danger">
                    Boolflix
                </h1>
            </div>
            <div class="col-3 p-2">
                
                <div class="d-flex justify-content-around">
                    
                    <input type="text" placeholder="Type something" @change="$emit('search')" v-model="store.searchKey">
                    
                    <button type="button" class="btn btn-danger" @change="$emit('search')">
                    Search 
                    </button>
                </div>
            </div>
        </div>


    </header>
    
    
    
    -->

    <div>
        <div class="d-flex justify-content-end ">
            
            <input type="text" placeholder="Type something" @change="$emit('search')" v-model="store.searchKey" class="me-2 rounded">
            
            <button type="button" class="btn" @change="$emit('search')" >
                Search
            </button>

        </div>

        

    </div>
    
</template>

<style scoped>




button {
    background-color: red;
    color: white;
    font-weight: 700;
}

</style>


