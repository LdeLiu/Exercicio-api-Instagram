import mongoose, {Schema, model} from 'mongoose'

const PhotoSchema = new Schema({
    filename:{
        type: String
    },
    mimetype:{
        type: String
    },
},{timestamps: true})


const Photo = model('Photo',PhotoSchema)

export {Photo}