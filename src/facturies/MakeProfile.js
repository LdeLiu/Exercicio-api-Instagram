import { ProfileController } from "../app/controller/ProfileController.js";
import { PostRepository } from "../app/repositories/PostRepository.js";
import { UserRepository } from "../app/repositories/UserRepository.js";
import { ProfileService } from "../app/services/ProfileService.js";
import { Post } from "../domain/Post.js";
import { User } from "../domain/User.js";

class MakeProfile{
    static getInstance(){
        const userRepository = new UserRepository(User)
        const postRepository = new PostRepository(Post)
        const service = new ProfileService(userRepository,postRepository)
        const controller = new ProfileController(service)

        return controller
    }
}

export {MakeProfile}