import { CommonError } from '../../utils/commonError.js'
import {UserSchemaValidation} from '../../utils/validations/UserSchema.js'

class UserController{
    constructor(service){
        this.service = service
    }

    async create(req,res){
        const { body } = req

        const bodyIsValid = await UserSchemaValidation.isValid(body)
        if(bodyIsValid.error == true){
            return res.status(400).json(CommonError.build(bodyIsValid.message, 400))
        }

        const result = await this.service.create(body)
        if(result.error == true){
            return res.status(result.status).json(result)
        }
        return res.status(result.status).json(result)
    }

    async update(req,res){
        const {params, body} = req
        if(!params.id){
            return CommonError.build('Invalid id', 400)
        }
        const bodyIsValid = await UserSchemaValidation.updateIsValid(body)
        if(bodyIsValid.error == true){
            return res.status(400).json(CommonError.build(bodyIsValid.message, 400))
        }

        const result = await this.service.update(params.id , body)
        if(result.error == true){
            return res.status(result.status).json(result)
        }
        return res.status(result.status).json(result)

    }
}

export {UserController}
