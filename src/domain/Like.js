import mongoose, {Schema, model} from 'mongoose'

const LikesSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},{timestamps: true})


const Likes = model('Likes',LikesSchema)

export {Likes}