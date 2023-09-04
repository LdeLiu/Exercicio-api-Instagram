import { CommonError } from "../../utils/commonError.js";
import { LikeSchemaValidation } from "../../utils/validations/LikeSchema.js";

class LikeController{
    constructor(service){
        this.service = service;
    }
    
    async like(req,res){
        const { body } = req
        const likeIsValid = await LikeSchemaValidation.likeIsValid(body)
        if(likeIsValid.error == true){
            return res.status(400).json(CommonError.build(likeIsValid.message, 400))
        }
        const result = await this.service.create(body)
        return res.status(result.status).json(result)
    }

    async dislike(req, res) {
        const { body } = req
        const dislikeIsValid = await LikeSchemaValidation.likeIsValid(body)
        if(dislikeIsValid.error == true){
            return res.status(400).json(CommonError.build(dislikeIsValid.message, 400))
        }
        const result = await this.service.delete(body)
        return res.status(result.status).json(result)
    }
}

export {LikeController}