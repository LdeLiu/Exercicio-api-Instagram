import { CommonError } from '../../utils/commonError.js'
import {LoginSchemaValidation} from '../../utils/validations/LoginSchema.js'

class LoginController{
    constructor(service){
        this.service = service
    }

    async singIn(req,res){

        const {body} = req

        const loginIsValid = LoginSchemaValidation.isValid(body)
        if(!loginIsValid){
            return res.status(400).json(CommonError.build(loginIsValid.messages, 400))
        }

        const result = await this.service.singIn(body)
        if('error' in result){
            return res.status(result.status).json(result)
        }

        return res.status(200).json(result)
    }
}

export {LoginController}