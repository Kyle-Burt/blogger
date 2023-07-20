<template>
    <div v-if="activeBlog">
        <h2>{{ activeBlog.title }}</h2>
        <h4>{{ activeBlog.creator.name }}</h4>
        <div>
            <p>{{ activeBlog.body }}</p>
        </div>
    </div>
</template>


<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';

export default {

    setup(){

        return {
            activeBlog: computed(() => AppState.activeBlog)
        }
    }
}
</script>


<style lang="scss" scoped>

</style>