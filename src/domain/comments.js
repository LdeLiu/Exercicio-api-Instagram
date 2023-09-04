import mongoose, {Schema, model, mongo} from 'mongoose'

const CommentsSchema = new Schema({
    content:{
        type: String,
        require: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},{timestamps: true})


const Comments = model('Comments',CommentsSchema)

export {Comments}