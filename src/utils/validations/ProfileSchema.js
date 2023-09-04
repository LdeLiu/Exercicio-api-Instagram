import * as yup from "yup"

class ProfileSchemaValidation {
    static async isValid(data){
        const ProfileSchema = yup.object().shape({
            id: yup.string().required(),
        })
        
        try {
            await ProfileSchema.validate(data)
            return {error: false}
        } catch (error) {
            return {error: true, message: error.erros}
        }
    }
}

export {ProfileSchemaValidation}