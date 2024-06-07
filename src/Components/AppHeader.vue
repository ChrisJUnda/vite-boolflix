<script>
import { store } from "../store";

export default {
    name: 'AppHeader',
    emits: ["search"],
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <header>
        <div class="container mt-4">
            <div class="row justify-content-center">
                <div class="col-3">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Type something" @change="$emit('search')" v-model="store.searchKey">
                    </div>
                </div>
                <div class="col-3">
                    <button type="button" class="btn btn-primary" @change="$emit('search')">
                        Search 
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>
