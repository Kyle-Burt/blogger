<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h1>Blog Page</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-10 col-12" v-for="blog in blogs" :key="blog.id">
        <div @click="openBlog()" class="card bg-white elevated mb-3">
          <router-link :to="{name: `Blog` , params: {blogId: blog.id}}">
            <h2>{{ blog.title }}</h2>
          </router-link>
          <router-link :to="{name: 'AccountBlogs', params: {profileId: blog.creatorId}}">
            <h3>{{ blog.creator.name }}</h3>
          </router-link>
            <router-link :to="{name: 'Profile', params: {profileId: blog.creatorId}}">
              <img  :src="blog.creator.picture" :alt="blog.creator.name">
            </router-link>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import Pop from '../utils/Pop.js';
import {blogsService} from '../services/BlogsService.js'
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { logger } from '../utils/Logger.js';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute()

    async function getBlogs(){
      try {
        await blogsService.getBlogs()
      } catch (error) {
        Pop.error(error.message)
      }
    }
    onMounted(() => {
      getBlogs()
    })
    return {
      blogs: computed(() => AppState.blogs),

      async openBlog(){
          const blogId = route.params.blogId
          await blogsService.openBlogs(blogId)
          logger.log(blogId)
      }
          


    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  // .creatorImg{
  //   width: 10vh;
  //   height: 10vh;
  //   border-radius: 50%;
  //   object-fit: cover;
  //   object-position: center;
  // }
}
</style>
