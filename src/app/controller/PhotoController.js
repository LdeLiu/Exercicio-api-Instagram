import { CommonError } from "../../utils/commonError.js"
import { PhotoSchemaValidation } from "../../utils/validations/PhotoSchema.js"

class PhotoController{
    constructor(service){
        this.service = service
    }

    async create(req,res){
        const { file, params } = req

        const photoIsValid = await PhotoSchemaValidation.isValid(file)
        if(photoIsValid.error == true){
            return res.status(400).json(CommonError.build(photoIsValid.message, 400))
        }

        const result = await this.service.create(params.id,file)

        return res.status(200).json(result)
        
    }
}

export { PhotoController }