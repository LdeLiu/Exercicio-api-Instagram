import { CommonError } from '../../utils/commonError.js';
import { PostSchemaValidation } from '../../utils/validations/PostSchema.js'

class PostController{
    constructor(service){
        this.service = service;
    }

    async create(req,res){
        const newPost = {
            content: req.body.content,
            user: req.params.id
        }

        const postIsValid = await PostSchemaValidation.isValid(newPost)
        if(postIsValid.error == true){
            return res.status(400).json(CommonError.build(postIsValid.message, 400))
        }

        const result = await this.service.create(newPost)
        return res.status(200).json(result)
    }

    async delete(req, res) {
        const { params } = req
        if(!params.id){
            return res.status(400).json(CommonError.build(postIsValid.message, 400))
        }

        const result = await this.service.delete(params.id)
        return res.status(result.status).json(result)
    }
}

export {PostController}