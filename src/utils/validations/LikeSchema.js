import * as yup from "yup"

class LikeSchemaValidation{
    static async likeIsValid(data){
        const LikeSchema = yup.object().shape({
            idUser: yup.string().required(),
            idPost: yup.string().required()
        })

        try {
            await LikeSchema.validate(data)
            return {error: false}
        } catch (err) {
            return {error: true, message: err.error}
        }
    }

    static async dislikeIsValid(data){
        const LikeSchema = yup.object().shape({
            idLike: yup.string().required(),
            idPost: yup.string().required()
        })

        try {
            await LikeSchema.validate(data)
            return {error: false}
        } catch (err) {
            return {error: true, message: err.error}
        }
    }
}

export {LikeSchemaValidation}