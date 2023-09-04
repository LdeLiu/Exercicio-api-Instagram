import * as yup from "yup"

class PostSchemaValidation {
    static async isValid(data){
        const postSchema = yup.object().shape({
            content: yup.string().required(),
            user: yup.string().required()
        })
        

        try {
            await postSchema.validate(data)
            return {error: false}
        } catch (error) {
            return {error: true, message: error.erros}
        }
    }
}

export {PostSchemaValidation}