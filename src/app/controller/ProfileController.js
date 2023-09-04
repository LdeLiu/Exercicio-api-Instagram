import { CommonError } from '../../utils/commonError.js';
import { ProfileSchemaValidation } from '../../utils/validations/ProfileSchema.js'

class ProfileController{
    constructor(service){
        this.service = service;
    }

    async findProfile(req,res){
        const {params} = req

        const profileIsValid = await ProfileSchemaValidation.isValid(params.id)
        if(!profileIsValid){
            return CommonError.build('Invalid Profile', 400)
        }
        const result = await this.service.findProfile(params.id)
        return res.status(result.status).json(result)
    }
}

export {ProfileController}