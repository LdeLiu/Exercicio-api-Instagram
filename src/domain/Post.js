import mongoose, {Schema, model} from 'mongoose'

const PostSchema = new Schema({
    content:{
        type: String,
        require: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    likeCount: {
        type: Number,
        default: 0,
        min: 0
    },
    likes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Likes'
    }],
    comments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comments'  
    }]
},{timestamps: true})


const Post = model('Post',PostSchema)

export {Post}