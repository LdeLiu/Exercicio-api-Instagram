import * as yup from "yup"

class PhotoSchemaValidation{
    static async isValid(data){
        const PhotoSchema = yup.object().shape({
            filename: yup.string().required(),
            mimetype: yup.string().required()
        })

        try {
            await PhotoSchema.validate(data)
            return {error: false}
        } catch (err) {
            return {error: true, message: err.errors}
        }
    }
}

export {PhotoSchemaValidation}