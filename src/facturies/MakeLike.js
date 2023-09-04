import { LikeController } from "../app/controller/LikeController.js";
import { LikeRepository } from "../app/repositories/LikeRepository.js";
import { PostRepository } from "../app/repositories/PostRepository.js";
import { UserRepository } from "../app/repositories/UserRepository.js";
import { LikeService } from "../app/services/LikeService.js";
import { Likes } from "../domain/Like.js";
import { Post } from "../domain/Post.js";
import { User } from "../domain/User.js";

class MakeLike{
    static getInstance(){
        const likeRepository = new LikeRepository(Likes)
        const postRepository = new PostRepository(Post)
        const userRepository = new UserRepository(User)
        const service = new LikeService(likeRepository, postRepository, userRepository)
        const controller = new LikeController(service)

        return controller
    }
}

export {MakeLike}