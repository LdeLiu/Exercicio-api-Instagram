import mongoose, {Schema, model} from 'mongoose'

const UserSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    photo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Photo"
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }]
},{timestamps: true})


const User = model('User',UserSchema)

export {User}