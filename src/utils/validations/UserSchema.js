import * as yup from "yup"

class UserSchemaValidation {
    static async isValid(data){
        const userSchema = yup.object().shape({
            name: yup.string().required(),
            password: yup.string().required(),
            email: yup.string().required().email()
        })
        
        try {
            await userSchema.validate(data)
            return {error: false}
        } catch (err) {
            return {error: true, message: err.errors}
        }
    }

    static async updateIsValid(data) {
        const userSchema = yup.object().shape({
            name: yup.string(),
            password: yup.string(),
            email: yup.string().email()
        })
        
        try {
            await userSchema.validate(data)
            return {error: false}
        } catch (err) {
            return {error: true, message: err.errors}
        }
    }
}

export {UserSchemaValidation}