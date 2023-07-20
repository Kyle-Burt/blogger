import { AppState } from "../AppState.js"
import { Blog } from "../models/Blog.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class BlogsService {
    async getBlogs() {
        const res = await api.get('api/blogs')
        logger.log('Got blogs', res.data)
        const blogs = res.data.map(b => new Blog(b))
        AppState.blogs = blogs
    }
    async openBlogs(blogId) {
        const res = await api.get(`api/blogs/${blogId}`)
        logger.log("Got the blogs", res.data)
        const blog = new Blog(res.data)
        AppState.activeBlog = blog
    }
    // async getBlogs() {
    //     const res = await api.get('')
    //     logger.log('profile blogs maybe?', res.data)
    // }
}

export const blogsService = new BlogsService()