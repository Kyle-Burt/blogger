<template>
    account blogs

</template>


<script>
import { useRoute } from 'vue-router';
import { logger } from '../utils/Logger.js';
import { onMounted } from 'vue';
import { blogsService } from '../services/BlogsService.js';

export default {
    setup(){
        const route = useRoute()

        // async function getBlogs(){
        //     try {
        //         const profileId = route.params.profileId
        //         logger.log('profile ID?', profileId)
        //         await blogsService.getBlogs(profileId)
        //     } catch (error) {
                
        //     }

        // }

        // onMounted(()=> {
        //     getBlogs()
        // })
        return {

        }
    }
}
</script>


<style lang="scss" scoped>

</style>