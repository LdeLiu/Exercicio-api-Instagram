import { CommonError } from "../../utils/commonError.js";

class ProfileService{
    constructor(userRepository, postRepository){
        this.userRepository = userRepository;
        this.postRepository = postRepository;
    }

    async findProfile(id){
        try {
            const user = await this.userRepository.findById(id);
            const posts = await this.postRepository.findAllById(id)
            const result = {
                name: user.name,
                photo: user.photo,
                posts: posts
            }
            return {result, status: 200}
        } catch (error) {
            return CommonError.build(error.errors, 400)
        }
        
        // if(!user){
            
        // }
       
    }
}

export {ProfileService}