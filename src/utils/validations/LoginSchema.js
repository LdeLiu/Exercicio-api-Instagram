import * as yup from "yup"

class LoginSchemaValidation{
    static async isValid(data){
        const loginSchema = yup.object().shape({
            password: yup.string().required(),
            email: yup.string().required().email()
        })

        try {
            await loginSchema.validate(data)
            return {error: false}
        } catch (err) {
            return {error: true, message: err.error}
        }
    }
}

export {LoginSchemaValidation}