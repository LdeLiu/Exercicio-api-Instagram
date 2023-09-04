import { ObjectId } from "mongodb";
import { CommonError } from "../../utils/commonError.js";

class LikeService{
    constructor(LikeRespository, PostRepository, userRepository){
        this.LikeRespository = LikeRespository;
        this.PostRepository = PostRepository;
        this.UserRepository = userRepository;
    }

    async create(data){

        const userAreadyExists = await this.UserRepository.findById(data.idUser)
        if(!userAreadyExists){
            return CommonError.build('user not found', 400)
        }

        const post = await this.PostRepository.findById(data.idPost)
        if(!post){
            return CommonError.build('post not found', 400)
        }
        const postLikes = await this.LikeRespository.findLike(post.likes)
        for(let i = 0; i < postLikes.length; i++){
            if(postLikes[i].user.toString() === data.idUser){
                return CommonError.build('the like of this user already exists in this post', 400)
            }
        }

        const newLike = {
            user : data.idUser
        }
        const likeCreated = await this.LikeRespository.create(newLike)
        await this.PostRepository.addLike(data.idPost, likeCreated._id, (post.likeCount + 1))
        return {likeCreated, status: 200}
    }

    async delete(data){
        
        const userAreadyExists = await this.UserRepository.findById(data.idUser)
        if(!userAreadyExists){
            return CommonError.build('user not found', 400)
        }

        const post = await this.PostRepository.findById(data.idPost)
        if(!post){
            return CommonError.build('post not found', 400)
        }
        const postLikes = await this.LikeRespository.findLike(post.likes)
        for(let i = 0; i < postLikes.length; i++){
            if(postLikes[i].user.toString() === data.idUser){
                const result = await this.LikeRespository.delete(postLikes[i]._id)
                await this.PostRepository.updateLikeList(data.idPost , postLikes[i]._id, (post.likeCount - 1))
                return {result, status: 200, message: 'delete successfully'}
            }
        }
        return CommonError.build('like not found', 400)
    }
}

export {LikeService}