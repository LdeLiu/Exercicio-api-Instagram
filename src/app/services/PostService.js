import { CommonError } from "../../utils/commonError.js";
import { WordFilter } from "../../utils/wordFilter.js";

class PostService{
    constructor(postRepository, userRepository, likeRepository){
        this.postRepository = postRepository;
        this.userRepository = userRepository
        this.likeRepository = likeRepository
    }

    async create(data){

        const userAreadyExists = await this.userRepository.findById(data.user)
        if(!userAreadyExists){
            return CommonError.build('user not found', 400)
        }

        const newPost = WordFilter.verify(data)
        const result = await this.postRepository.create(newPost)
        await this.userRepository.updatePosts(data.user, result._id)

        return result
    }

    async delete(id){
        const post = await this.postRepository.findById(id)
        if(!post){
            return CommonError.build('post not found', 400)
        }
        const result = await this.postRepository.delete(id)
        await this.likeRepository.deleteByPost(id,post.likes)

        return {result, status: 200, message: 'Success'}
    }
}

export {PostService}