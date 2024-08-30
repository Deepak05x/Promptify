import { Schema, models, model } from "mongoose";

const PostSchema = new Schema({
    prompt:{
        type: String,
        required: true,
    },
    tag:{
        type: String,
        required: true,
    },
    user:{
        type: Schema.Types.ObjectId,
        required: true,
        ref:"User"
    },
},{
    timestamps: true,
})


const Post = models.Post || model('Post', PostSchema)

export default Post