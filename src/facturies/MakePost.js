import { PostController } from "../app/controller/PostController.js";
import { LikeRepository } from "../app/repositories/LikeRepository.js";
import { PostRepository } from "../app/repositories/PostRepository.js";
import { UserRepository } from "../app/repositories/UserRepository.js";
import { PostService } from "../app/services/PostService.js";
import { Likes } from "../domain/Like.js";
import { Post } from "../domain/Post.js";
import { User } from "../domain/User.js";

class MakePost{
    static getInstance(){
        const postRepository = new PostRepository(Post)
        const userRepository = new UserRepository(User)
        const likeRepository = new LikeRepository(Likes)
        const service = new PostService(postRepository, userRepository, likeRepository)
        const controller = new PostController(service)

        return controller
    }
}

export {MakePost}