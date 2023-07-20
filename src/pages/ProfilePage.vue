<template>
    Profile Page
    <form action="" @submit.prevent ="editAccount()">
        <div>
            <label for="name">Name</label>
            <input type="text" id="name" v-model="editable.name">
        </div>
        <div>
            <label for="picture">picture</label>
            <input type="url" id="picture" v-model="editable.picture">
        </div>
        <div>
            <label for="coverImg">coverImg</label>
            <input type="url" id="coverImg" v-model="editable.coverImg">
        </div>
        <div>
            <label for="bio">bio</label>
            <textarea name="bio" id="bio" cols="30" rows="10" v-model="editable.bio">
            Bio</textarea>
        </div>
        <div>
            <button class="btn btn-success" type="submit"></button>
        </div>
    </form>
</template>


<script>
import { useRoute } from 'vue-router';
import Pop from '../utils/Pop.js';
import { logger } from '../utils/Logger.js';
import { computed, onMounted, popScopeId, ref, watchEffect } from 'vue';
import {profilesService} from '../services/ProfilesService.js'
import { AppState } from '../AppState.js';
export default {
    setup(){

        const editable = ref({})
        const route = useRoute()
        watchEffect(() => {
            editable.value = {...AppState.account}
        })

        async function getProfile(){
            try {
                const profileId = route.params.profileId
                // logger.log('got profile Id', profileId)
                await profilesService.getProfile(profileId)
            } catch (error) {
                Pop.error(error.message)
            }
        }
        onMounted(()=>{
            getProfile()
        })
        return {
            editable,
            activeProfile: computed(()=> AppState.activeProfile),
            

            async editAccount(){
                try {
                    const formData = editable.value
                    logger.log("form data",formData)
                    await profilesService.editAccount(formData)
                    
                } catch (error) {
                    Pop.error(error.message)
                }
            }
        }
    }
}
</script>


<style lang="scss" scoped>
label{
    display:block
}

</style>